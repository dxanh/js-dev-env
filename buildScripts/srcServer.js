// const express = require('express'); ES5
import express from 'express';
import path from 'path';
import open  from'open';

// var port = 3000; ES5
const port = 3000;
const app = express();

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if(err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});