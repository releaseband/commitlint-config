'use strict'
const fs = require('fs');

// files to copy
const files = ['.cz.json']
// project root
const path = process.env.INIT_CWD

files.forEach( file => {
  fs.copyFile(file, `${path}\\${file}`, (err) => {
    if (err) throw err;
  })
});
