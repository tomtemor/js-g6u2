/* Gruppuppgift del 2, hämta från API.
SYNED21JON Grupp 6

Medlemmar:
Christer Klasson 
Ida Gustafsson 
Julia Magnusson 
Marianne Nordlund
Matti Heinonen 
Ronja Österback

Kommentarer:
Vi har gjort en applikation som hämtar data från Ghibli enligt instruktioner.
Resultatet (filmerna) listas, numreras och presenteras med namn, orignalnamn
och år samt en bild. Användaren kan trycka på en knapp för att se en video/trailer
av vardera film. All funktionalitet ligger i klientskriptet client.js. */

const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public"))); // Publik mapp.

app.get("/", (req, res) => {
  res.sendFile("index.html"); // Visa html-sida.
});

app.listen(3000, () => console.log("Kör servern på localhost:3000")); // Lyssna på port 3000.
