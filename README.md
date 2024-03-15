# Web-sovellus harjoitustyö
Web-sovellusten perusteet IN00DL12-3003 (kevät 2024)

## Sivuston kuvaus

Web-sovellus kurssilla lopuksi piti tehdä jokin webbisivu niin nyt tehtiin tälläinen. ***Dota pelit*** sivulla on ideana, että se pilkkoo
puppeteeriä käyttäen toiselta sivulta tietoja tähän sivulle.

***Grand Exchange*** on taas Oldschool runescapen open api:a käyttävä sivu jolla voidaan hakea itemien hintoja/tietoja niiden ID:llä.

_Molempia sivuja aion vielä jatkaa tämän kurssin jälkeen, mutta tämä riittää nyt tälle kurssille, kun enempää ei ehdi tekemään._
_Tarkoituksena jatkaa Ge sivua ainakin, että itemejä voidaan hakea suoraan nimellä eikä vain ID:llä ja että se näyttäisi kun alat hakemaan itemiä, että mitä mahdollisuuksia kokoajan on kun kirjoitat lisää tekstiä._

### Ohjeet jolla viimeisimmät pelit voidaan päivittää ja grand exhange toimii
1. Lataa tiedostot koneella ja pura johonkin kansioon.
2. Lataa [node](https://nodejs.org/en).
3. Avaa js kansio komentokehotteessa, esimerkiksi Git Bashillä.
4. Suorita js kansiossa ***npm install*** joka asentaa moduulit.
5. Tämän jälkeen suorita samassa kansiossa ***node index*** joka päivittää viimeisimmmän 50 pelatun pelin listan.
6. Tämän jälkee aukaise proxy server ***node serveri.mjs*** komennolla.
7. Nyt voit etsiä Grand exchange sivulla itemejä näiden ID:tä käyttäen.
8. CTRL+c sulkee serverin. Serverin ollessa päällä et voi päivittää index:iä.
