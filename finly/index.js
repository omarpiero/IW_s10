const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url);
    res.end('Hello From Node.js');
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});