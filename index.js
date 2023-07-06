const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('index.html');
const recepie = fs.readFileSync('./recepie.html');
const product = fs.readFileSync('./our_product.html');
const about = fs.readFileSync('./about_us.html');
const contact = fs.readFileSync('./contact_us.html');

const server = http.createServer((req, res)=>{
    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Contact-Type', 'text/html');
    if(url == '/'){
        res.end(home);
    }
    else if(url == '/recepie'){
        res.end(recepie);
    }
    else if(url == '/our_product'){
        res.end(product);
    }
    else if(url == '/about_us'){
        res.end(about);
    }
    else if(url == '/contact_us'){
        res.end(contact);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>")
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });