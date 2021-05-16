'use strict';
const express = require('express');
const server = express();
const errorsHandler = require('./errors-handlers/500.js');
const notFoundHandler = require('./errors-handlers/404.js');


server.get('/',(request,response)=>{
  response.send('Welcome to my web App');
});

server.get('/bad',(req,res)=>{
  throw new Error('Something went wrong');
});

server.use('*',notFoundHandler);
server.use(errorsHandler);

function start (PORT){
  server.listen(PORT,()=>{
    console.log(`Listening on port : ${PORT}`);
  });
}
module.exports={
  server:server,
  start:start,
};