/*
index.js

Gruppuppgift del 2, hämta från API
SYNED21JON Grupp 6
Medlemmar:
Christer Klasson 
Ida Gustafsson 
Julia Magnusson 
Marianne Nordlund
Matti Heinonen 
Ronja Österback

Instruktioner:
Del 2: Hämta data från API
Gör en applikation där användaren hämtar data från Ghibli-API:et
https://ghibliapi.herokuapp.com/. Den ska vara interaktiv på något sätt, t.ex. kan användaren
trycka på en knapp för att information om filmer ska visas (utan att hela sidan laddas om)
eller browsa genom en lista med länkar till olika filmer, men det behöver inte vara någon
särskilt omfattande applikation. Det ska vara någorlunda angenämt för en människa att läsa,
så du behöver använda JSON.parse och förmodligen loopa igenom det returnerade
JavaScript-objektet innan du skriver ut på webbsidan.

Kommentarer:
Vi har gjort en applikation som hämtar data från Ghibli enligt instruktioner. resultatet(filmerna) listas och numreras och presenteras
med namn, orignalnamn och år samt en bild. Användaren kan trycka på en knapp för att se en video/trailer av vardera film.
All funktionalitet ligger i ett klient-javascript client.js 

*/

const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");  // visa html-sida
});
app.listen(3000); // lyssna på port 3000
console.log("Kör servern på localhost:3000");
app.use(express.static("public")); // publik mapp

