const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    return res.send('Hola desde el server')
});

app.listen(443);
console.log('serverIniciado');