/*
index.js

Gruppuppgift del 2, hämta från API
SYNED21JON Grupp 6
LET Medlemmar [
{Christer Klasson}}, 
{Ida Gustafsson}, 
{Julia Magnusson}, 
{Marianne Nordlund}, 
{Matti Heinonen}, 
{Ronja Österback}

*/
const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");  // visa html-sida
});
app.listen(3000); // lyssna på port 3000
console.log("Kör servern på localhost:3000");
app.use(express.static("public")); // publik mapp

