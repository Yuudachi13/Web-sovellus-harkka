function testihomma() {

const käyttäjäsyöte = document.getElementById('iteminID') //haetaan syöte käyttäjän antamasta
const itemID = käyttäjäsyöte.value; // minkä tahansa itemin ID

const url = `http://localhost:3000/api/item/${itemID}`; //otetaan yhteys tähän omaan proxyserveriin
                                                        //koska muuten tuli cors erroria

fetch(url)
  .then(response => response.json())
  
  .then(data => {
    console.log(data);  //hakee json muotoisen datan tuolta urlista ja sieltä sitten otetaan nämä tarvittavat tiedot
        const itemName = document.getElementById('itemName')
        const currentPrice = document.getElementById('currentPrice')
        const priceChange = document.getElementById('priceChange')
        const itemiKuva = document.getElementById('runekuva')

        console.log(currentPrice)

        itemiKuva.src = data.item.icon_large //asettavat saadut tiedot näihin html-elementteihin
        itemName.textContent = data.item.name
        currentPrice.textContent = data.item.current.price
        priceChange.textContent = data.item.today.price
  })

  .catch(error => {
    console.error('Virhe tapahtui:', error);
  });
}
    //itelle muistiin formilla koittaa jatkaa...

var inputti = document.getElementById("iteminID")
// Lisätään event listener 
inputti.addEventListener("keypress", function(event) {
  // Tarkistetaan, onko painettu näppäin enter
  if (event.key === "Enter") {
    // Suoritetaan  clikki
    document.getElementById("nappi").click()
  }
});

//https://www.w3schools.com/ yksi lähde