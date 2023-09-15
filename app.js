const express = require('express');
const app = express();
const port = 6117;

const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/favorites', (req, res) => {
    res.sendFile(path.join(__dirname + '/favorites.html'))
});
console.log('Server is running on port ' + port)
app.listen(port);