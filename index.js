const express = require('express');


const router = require('./router/router')
const app = express();
const port = 3008;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(router)

app.listen(port,()=>{
    console.log(`your server is raning http://localhost:${port}`)
})