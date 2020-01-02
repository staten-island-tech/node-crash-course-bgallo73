const fs = require('fs');
const path = require('path');

//create folder
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if (err) throw err;
    console.log('folder created...')
})

//create and write to file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'hello world!', err => {
    if (err) throw err;
    console.log('file written to...')
})
//file append

fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'i love node.js', err => {
    if (err) throw err;
    console.log('file written to...')
})

//read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log('data')
})

//rename file
fs.renameFile(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), err => {
    if (err) throw err;
    console.log('file renamed...')
})