const express = require('express');
const morgan = require('morgan');
const app = express();
//Middlewares
app.use(morgan('dev'));

//Rutas
app.get('/', (req, res) => {
    res.send('Hello From Node.js');
});

app.get('/contact', (req, res) => {
    res.send('The Contact Page');
});

app.get('/about', (req, res) => {
    res.send('The About Page');
});

// Manejador para rutas no encontradas (404)
app.use((req, res) => {
    res.status(404).send('Not Found');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
