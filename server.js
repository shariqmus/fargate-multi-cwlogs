'use strict';

function logEvery2Seconds(i) {
  setTimeout(() => {
      console.log('Infinite Loop Test n:', i);
      logEvery2Seconds(++i);
  }, 2000)
}

const express = require('express');
const fs = require('fs');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log('Running on http://${HOST}:${PORT}');

////////////////


fs.writeFile("/usr/src/app/log1.txt", "[log1] Hey there!", function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The log1 file was saved!");
}); 

//

fs.writeFile("/usr/src/app/log2.txt", "[log2] Hey there!", function(err) {
  if(err) {
      return console.log(err);
  }
  console.log("The log2 file was saved!");
}); 

////////////////

logEvery2Seconds(0);

let i = 0;
setInterval(() => {
  console.log('Infinite Loop Test interval n:', i++);
}, 2000)
