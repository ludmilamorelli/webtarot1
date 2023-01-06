const express = require('express');
const app = express();
const path = require('path');
let port = 3030;

app.use(express.static('public'));

app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','index.html')));
app.get('/cursos',(req,res) => res.sendFile(path.join(__dirname,'views','cursos.html')))
app.get('/nosotros',(req,res) => res.sendFile(path.join(__dirname,'views','nosotros.html')))
app.get('/registro',(req,res) => res.sendFile(path.join(__dirname,'views','registro.html')))
app.get('/login',(req,res) => res.sendFile(path.join(__dirname,'views','login.html')))
app.get('/contacto',(req,res) => res.sendFile(path.join(__dirname,'views','contacto.html')))

app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`))