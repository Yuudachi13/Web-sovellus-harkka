fetch('js/kummatkin.txt')  //hakee tämän teksti tiedoston 
    .then(response => response.text())  //käsitellään tiedosto
    .then(text => {
        var lines = text.split('\n'); //jaetaan osiin 

        lines.forEach((line, index) => {
            var konkka = document.createElement('div'); //luodaan div elementti jossa on sitten yhden rivin tiedot
            konkka.classList.add('konkka'); // ja lisätään sille luokka

            if (index % 2 === 1) { //katsotaan eka että on pariton inxed ja sielä pitäisi olla kuva
                var imageUrl = line.trim(); //poistetaan ylimääräiset välilyönnit jos on 

                var img = document.createElement('img'); //ja täällä taas img elementti ja kuvat kivasti sinne
                img.src = imageUrl;
                img.alt = 'Heron-kuva';
                img.classList.add('heroKuvat'); //ja lisätään ne luokkaan

                konkka.appendChild(img) 
                } else { //sitte katotaan se parilline index
                    var hero = line.split(',')[0].trim(); //jakaa pilkun perusteella ja poistaa välit
                    var gameResult = line.split(',')[1].trim(); //taas jakaa mutta ottaa toisen osan rivistä
                    var tyyppi = line.split(',')[2].trim(); //ja niin edelleen
                    var kdA = line.split(',')[3].trim(); //kerran opittu käytetään aina

                    var p = document.createElement('p'); //luodaa p elementti mihin menee pelitiedot
                p.textContent = `${hero} - ${gameResult} - Game Type, ${tyyppi} - KDA ${kdA}`;
                                        // asetataan teksti tänne aiemmin luotuun p elementtiin
                if (gameResult.includes('Won')) {
                    p.classList.add('win');  //nämä tehty sitä varten että saadaan muutettua väri teksteissä
                } else if (gameResult.includes('Lost')) { // hävion ja voiton perusteella
                    p.classList.add('lost');
                }

                konkka.appendChild(p) //tämäki sisältö lisätään konkkaa
                }
                
            
                    //lopuksi lisätään ne tänne tiedot-tähän id kohtaan
                document.querySelector('#tiedot-tähän').appendChild(konkka);
           
            
        });
    })
    .catch(error => console.error('Error tuli jossaki: ', error));