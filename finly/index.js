const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello From Node.js');
});

app.get('/contact', (req, res) => {
    res.send('The Contact Page');
});

app.get('/about', (req, res) => {
    res.send('The About Page');
});

// Ruta comodín para capturar 404 (páginas no encontradas)
app.get('*', (req, res) => {
    res.status(404).send('Not Found');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
