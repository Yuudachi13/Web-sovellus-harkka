function testihomma() {

const käyttäjäsyöte = document.getElementById('iteminID') //haetaan syöte käyttäjän antamasta
const itemID = käyttäjäsyöte.value; // minkä tahansa itemin ID

const url = `http://localhost:3000/api/item/${itemID}`;

fetch(url)
  .then(response => response.json())
  
  .then(data => {
    console.log(data);
        const itemName = document.getElementById('itemName')
        const currentPrice = document.getElementById('currentPrice')
        const priceChange = document.getElementById('priceChange')
        const itemiKuva = document.getElementById('runekuva')

        console.log(currentPrice)

        itemiKuva.src = data.item.icon_large
        itemName.textContent = data.item.name
        currentPrice.textContent = data.item.current.price
        priceChange.textContent = data.item.today.price
  })

  .catch(error => {
    console.error('Virhe tapahtui:', error);
  });
}