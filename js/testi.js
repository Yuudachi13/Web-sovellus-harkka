fetch('js/kummatkin.txt')
    .then(response => response.text())
    .then(text => {
        var lines = text.split('\n');

        lines.forEach((line, index) => {
            var konkka = document.createElement('div');
            konkka.classList.add('konkka');

            if (index % 2 === 1) { //katsotaan eka että on pariton inxed ja sielä pitäisi olla kuva
                var imageUrl = line.trim();

                var img = document.createElement('img'); //ja täällä taas img elementti ja kuvat kivasti sinne
                img.src = imageUrl;
                img.alt = 'Heron-kuva';
                img.classList.add('heroKuvat'); //ja lisätään ne luokkaan

                konkka.appendChild(img) //ja tämä
                } else { //sitte katotaan se parilline index
                    var hero = line.split(',')[0].trim();
                    var gameResult = line.split(',')[1].trim();
                    var tyyppi = line.split(',')[2].trim();
                    var kdA = line.split(',')[3].trim();

                    var p = document.createElement('p');
                p.textContent = `${hero} - ${gameResult} - Game Type, ${tyyppi} - KDA ${kdA}`;

                if (gameResult.includes('Won')) {
                    p.classList.add('win');
                } else if (gameResult.includes('Lost')) {
                    p.classList.add('lost');
                }

                konkka.appendChild(p) //tämäki sisältö lisätään konkkaa
                }
                
            

                document.querySelector('#tiedot-tähän').appendChild(konkka);
           
            
        });
    })
    .catch(error => console.error('Error tuli jossaki: ', error));