const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'img')));
app.use(favicon(__dirname + '/img/favicon.png'));

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './index.html'));
});

app.get('/style/style.css', (req,res) => {
    res.sendFile(path.resolve(__dirname, './style/style.css'));
});

app.get('/js/script.js', (req,res) => {
    res.sendFile(path.resolve(__dirname, './js/script.js'));
});

app.get('/img/favicon.png', (req,res) => {
    res.sendFile(path.resolve(__dirname, './img/favicon.png'));
});

app.get('/img/bg-main.jpg', (req,res) => {
    res.sendFile(path.resolve(__dirname, './img/bg-main.jpg'));
});

app.get('/serviceavailable/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './serviceavailable.json'));
});

app.get('/getinfo/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './info.json'));
});

app.get('/getdescription/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './descr.json'));
});

app.listen(3000, () => console.log('App listening on port 3000') );