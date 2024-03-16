const puppeteer = require('puppeteer') //alustetaan /ladataanpuppeteer
const fs = require('fs/promises')

async function start() {   //async funktio jolla mahdollistetaan jotta voidaa käyttää tätä ''awaittiä''
    const browser = await puppeteer.launch()        //käynnistää puppeteer ''selaimen''
    const page = await browser.newPage()
    await page.goto("https://www.dotabuff.com/players/92185668/matches")   //mennää haluttuun sivuun
    //112321831 
    //92185668 kaks profiilia millä testata toimii millä vaan profiililla
    
    //  await page.screenshot({path:"testi.png", fullPage: true})

    const game = await page.evaluate(() => {
        return Array.from(document.querySelectorAll(".won, .lost")).map(x => x.textContent) 
            //hakee kaikki jolla on luokka won tai lost
    })
    const hero = await page.evaluate(() => {
        return Array.from(document.querySelectorAll(".cell-large a")).map(x => x.textContent)
            //hakee kaikki a-elementit joilla on luokka cell-large
    })
    const KDA = await page.evaluate(() => {
        return Array.from(document.querySelectorAll(".kda-record")).map(x => x.textContent)
                //taas luokka joka on kda-record

    })
    const tyyppi = await page.evaluate(() => {
        return Array.from(document.querySelectorAll("td.r-none-mobile")).map(x => x.innerText.replace(/\n/g, ' '))
        .filter(text => text.trim() !== '');
    })          //hakee pelien tyypit tuolta td.r-none-mobile alta mutta sieltä joudutaan trimmaa tyhjät pois ja
                //tekemään tyhjän rivun /n tilalle koska se teki koodista vaikeampaa käyttää.
    
    const kuvat = await page.$$eval("img.image-hero.image-icon",(imgs) => {
        return imgs.map(x => x.src)
    })
    //hakee taas kaikki kuvat jolla on luokat image-hero ja image-icon tai hakee url:it näihin kuviin
    
    //pitää vielä miettiä miten tän saa toimimaan oikein...
   // const itemiKuvat = await page.$$eval("img.image-item.image-plusicon",(imgs) => {
   //     return imgs.map(x => x.src)
   // })
   // console.log(itemiKuvat)

    const heroJaResult = [];
for (var i = 0; i < hero.length; i++) {
    var combinedData = hero[i] + "," + game[i] + "," + tyyppi[i]+ "," + KDA[i] + ",";
    heroJaResult.push([combinedData , kuvat[i]]);
    //luodaan tyhjätaulukko johon sitte lisätään nämä kaikki tiedot vuorotellen jotta saadaan ne omille kohdilleen

}
console.log(heroJaResult);
await fs.writeFile("kummatkin.txt", heroJaResult.map(entry => entry.join("\r\n")).join("\r\n"));
//täällä tiedot tallennetaan nyt tuonne teksti tiedostoon ja tavalla vielä että kuvat ovat aina ''omalla'' rivillään

await browser.close();
} //sulkee selaimen ku kaikki on haettu

start()
//käynistää koko prosessin