var fs = require('fs');
var colors = require('colors');

// fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
//     console.log('Dane przed zapisem!'.blue);
//     console.log(data);
//     fs.appendFile('./tekst.txt', '\nA tak wyglądają po zapisie!', function(err) {
//         if (err) throw err;
//         console.log('Zapisano!'.blue);
//         fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
//             console.log('Dane po zapisie'.blue)
//             console.log(data);
//         });
//     });
// });


var p = "../"
fs.readdir(p, function (err, files) {
    console.log('LISTA PLIKÓW: \n'.red, files);
    fs.writeFile('./listakatalogow.txt', files, function(err){
        if (err) throw err;
        console.log('ZAPISANO DO PLIKU'.red);
        fs.readFile('./listakatalogow.txt', 'utf-8', function(err, data){
            console.log('ZAWARTOŚĆ PLIKU listakatalogow.txt: \n'.green);
            console.log(data.yellow);
        })
    })
});