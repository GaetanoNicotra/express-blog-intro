const express = require('express');

// inizializzazione di express nella varibaile app
const app = express();

// definizioone della porta
const port = 3000;

// strumento per recuperare gli assets statici
app.use(express.static('public'));

// definizione della rotta base
app.get('/', (req, res) => {
    res.type('html').send('<h1>Server del mio blog</h1>')
})

// definizione della rotta bacheca
app.get('/bacheca', (req, res) => {
    const teams = [
        {
            titolo: "Juventus",
            contenuto: "Giocatori",
            immagine: "imgs/1484661620_q.webp",
            tags: ["Serie A", "Calcio", "Torino"]
        },
        {
            titolo: "Atalanta",
            contenuto: "Giocatori",
            immagine: "imgs/atalanta.png",
            tags: ["Serie A", "Calcio", "Bergamo"]
        },
        {
            titolo: "Bologna",
            contenuto: "Giocatori",
            immagine: "imgs/bologna.webp",
            tags: ["Serie A", "Calcio", "Bologna"]
        },
        {
            titolo: "Cagliari",
            contenuto: "Giocatori",
            immagine: "imgs/cagliari.png",
            tags: ["Serie A", "Calcio", "Cagliari"]
        },
        {
            titolo: "Fiorentina",
            contenuto: "Giocatori",
            immagine: "imgs/fiorentina.png",
            tags: ["Serie A", "Calcio", "Fiorentina"]
        },
        {
            titolo: "Inter",
            contenuto: "Giocatori",
            immagine: "imgs/inter.webp",
            tags: ["Serie A", "Calcio", "Milano"]
        },
        {
            titolo: "milan",
            contenuto: "Giocatori",
            immagine: "imgs/milan.webp",
            tags: ["Serie A", "Calcio", "Milano"]
        },
    ]
    res.json(teams);
})

app.listen(port, () => {
    console.log(`Personal blog server listening on port ${port}`);
})