const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    return res.send('<h1>Listo te respondo</h1>')
});

app.listen(3000);
console.log('serverIniciado port:3000');