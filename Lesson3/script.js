// console.log("olla");

// var os = require("os")
// console.log(os.arch());

var express = require('express');
var app = express()
app.use(express.static("./"))
// app.get('/', (req,res)=>{
//     res.send('hi')
// })

app.get('/names/:name', (req,res)=>{
    const name = req.params.name;
    res.send(`<h1> Hello ${name} </h1>`)
})

app.get('/google', (req,res)=>{
    res.redirect("https://google.com")
})
app.get('/google/:search',(req,res)=>{
    const search = req.params.search
    res.redirect(`https://google.com/search?q=${search}`)
})
app.get("/*",(req,res)=>{
    res.redirect('404.html')
})
app.listen(3000)