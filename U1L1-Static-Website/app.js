const express = require('express');
const app = express();
const port = 6117;

const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/src/view/index.html'));
});

app.get('/favorites', (req, res) => {
    res.sendFile(path.join(__dirname + '/src/view/favorites.html'))
});

app.get('/spots', (req, res) => {
    res.sendFile(path.join(__dirname + '/src/view/spots.html'))
});

app.get('/skills', (req, res) => {
    res.sendFile(path.join(__dirname + '/src/view/skills.html'))
});

console.log('Server is running on port ' + port)
app.listen(port);