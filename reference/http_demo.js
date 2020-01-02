const http = require('http');

//create server object
http.createServer((reg, res) => {
    //write response
    res.write('hello world');
    res.end();
})
.listen(5000, () => console.log('server running...'));