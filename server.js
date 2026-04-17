const http = require('http');
const fs = require('fs')
const name = "Lucas"

console.log(fs)

server = http.createServer((rec, res) => {
    console.log(req)
    file = fs.readFileSync("./index.html", "utf-8")
    file = file.replace("{{mudar}}", name)
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(file)

})

server.listen(3000, console.log("rodando na 3000"))
