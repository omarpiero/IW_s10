const express = require('express');
const morgan = require('morgan');
const app = express();

// Configuración del motor de plantillas EJS
app.set('views', './views');
app.set('view engine', 'ejs');

// Middlewares
app.use(morgan('dev'));

// Rutas
app.get('/', (req, res) => {
    res.render('index', { message: 'Hello From Node.js' });
});

app.get('/contact', (req, res) => {
    res.render('index', { message: 'The Contact Page' });
});

app.get('/about', (req, res) => {
    res.render('index', { message: 'The About Page' });
});

// Manejador para rutas no encontradas (404)
app.use((req, res) => {
    res.status(404).render('index', { message: 'Not Found' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
