var data ={};
var express =require("express");
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require('fs')

app.get(express.static('.'));
fs.writeFileSync('data.json','');
app.get('/', (req,res)=>{
    res.redirect('index.html');
})

server.listen(3000);

io.on('connection', (socket)=>{
    socket.on('send data',(data)=>{
        console.log(data);
        fs.appendFileSync('data.json',JSON.stringify(data)+ '\n')
    })
})