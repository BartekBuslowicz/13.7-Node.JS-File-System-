var fs = require('fs');
var colors = require('colors');
var p = "../"
fs.readdir(p, function (err, files) {
    console.log('LISTA PLIKÓW: \n'.red, files);
    fs.writeFile('./listakatalogow.txt', files, function(err){
        if (err) throw err;
        console.log('ZAPISANO DO PLIKU'.red);
    })
});