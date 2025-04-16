const express = require('express');

// inizializzazione di express nella varibaile app
const app = express();

// definizioone della porta
const port = 3000;

// strumento per recuperare gli assets statici
app.use(express.static('public'));

// definizione della rotta base
app.get('/', (req, res)=>{
 res.type('html').send('<h1>Server del mio blog</h1>')
})

app.listen(port,() =>{
    console.log(`Personal blog server listening on port ${port}`);
})