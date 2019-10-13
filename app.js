const http = require('http');
http.createServer ((req,res) => {

    res.writeHead(200, {'Content-Type':'aplication/json'})
    let salida = {
        name : 'Alexander',
        lastName: 'Benavides Cabrera',
        url: req.url
    }
    res.write(JSON.stringify(salida));
    //res.write("Hola mundo");
    res.end();

})
.listen(8080)

console.log('Esuchando el puerto 8080');