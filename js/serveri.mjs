import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();  //perus serveri joka nyt käyttää tuota corssia välttääksemme erroria
app.use(cors());
app.get('/api/item/:itemId', async (req, res) => {
    const itemId = req.params.itemId;
    const url = `https://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=${itemId}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Virhe tuli:', error);
        res.status(500).json({ error: 'Virhe tulituli.' });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Palvelin käynnissä portissa ${port}`);
});