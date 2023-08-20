const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000; 

express.static.mime.define({
    'text/css' : ['css']
});

app.use(express.static(__dirname + '/assets'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.get('/contact-us', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'contact-us.html'));
});

app.get('/features', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'features.html'));
});

app.get('/pricing', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'pricing.html'));
});

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'projects.html'));
});

app.get('/our-staff', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'staff.html'));
});


app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
