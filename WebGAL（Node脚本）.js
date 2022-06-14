//initialize
const Port = 3000;
const express = require('express');
var open = require('open');
const { fstat } = require('fs');
const app = express();
process.env.PORT = Port;
app.use(express.static('WebGAL'))//allow browser access resources

//err catch
process.on('uncaughtException',function(err){}) //监听未捕获的异常
process.on('unhandledRejection',function(err,promise){}) //监听Promise没有被捕获的失败函数

app.get('/' ,(req,res) =>{
    res.redirect('WebGAL/index.html');
})

app.listen(Port, () => {
    console.log('服务器已就绪，运行在 localhost:'+Port);
    })
open('http://localhost:3000');