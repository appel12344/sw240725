const http = require('http');

const server = http.createServer(function (req, res) {
    res.write('Hellowddddddddddddddddddddddddddddddddddd World!'); //write a response to the client
    res.end(); //end the response
});

server.listen(3000, function() {
    console.log("서버 실행 중 >>> http://localhost:3000");
});

// 실행 -> 터미널에 node ./app.js