'use strict';
/////////////////////////////////////////
/// App dependencies ///////////////////
///////////////////////////////////////
const express = require('express');
const server = express();
const errorsHandler = require('./errors-handlers/500.js');
const notFoundHandler = require('./errors-handlers/404.js');

//////////////////////////////////////////
//// home route  ////////////////////////
////////////////////////////////////////
server.get('/',(request,response)=>{
  response.send('Welcome to my web App');
});

//////////////////////////////////////////
///// error route or bad request /////////
//////////////////////////////////////////
server.get('/bad',(req,res)=>{
  throw new Error('Something went wrong');
});
server.use('*',notFoundHandler);
server.use(errorsHandler);

////////////////////////////////////
///// liseting to the server ///////
///////////////////////////////////
function start (PORT){
  server.listen(PORT,()=>{
    console.log(`Listening on port : ${PORT}`);
  });
}

//////////////////////////////////////////
// export the server and start of listening
//////////////////////////////////////////
module.exports={
  server:server,
  start:start,
};