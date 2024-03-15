const puppeteer = require('puppeteer')
const fs = require('fs/promises')

async function start() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://www.dotabuff.com/players/92185668/matches") 
    //112321831 
    //92185668 kaks profiilia millä testata toimii millä vaan profiililla
    
    //  await page.screenshot({path:"testi.png", fullPage: true})

    const game = await page.evaluate(() => {
        return Array.from(document.querySelectorAll(".won, .lost")).map(x => x.textContent)

    })
    const hero = await page.evaluate(() => {
        return Array.from(document.querySelectorAll(".cell-large a")).map(x => x.textContent)

    })
    const KDA = await page.evaluate(() => {
        return Array.from(document.querySelectorAll(".kda-record")).map(x => x.textContent)

    })
    const tyyppi = await page.evaluate(() => {
        return Array.from(document.querySelectorAll("td.r-none-mobile")).map(x => x.innerText.replace(/\n/g, ' '))
        .filter(text => text.trim() !== '');
    })
    
    const kuvat = await page.$$eval("img.image-hero.image-icon",(imgs) => {
        return imgs.map(x => x.src)
    })
    
    //pitää vielä miettiä miten tän saa toimimaan oikein...
   // const itemiKuvat = await page.$$eval("img.image-item.image-plusicon",(imgs) => {
   //     return imgs.map(x => x.src)
   // })
   // console.log(itemiKuvat)

    const heroJaResult = [];
for (var i = 0; i < hero.length; i++) {
    var combinedData = hero[i] + "," + game[i] + "," + tyyppi[i]+ "," + KDA[i] + ",";
    heroJaResult.push([combinedData , kuvat[i]]);
}
console.log(heroJaResult);
await fs.writeFile("kummatkin.txt", heroJaResult.map(entry => entry.join("\r\n")).join("\r\n"));
await browser.close();
}

start()
