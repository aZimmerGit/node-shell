const pwd = require('./pwd.js');
const ls = require('./ls.js')
//const fs = require('fs');
process.stdout.write('prompt > ');

process.stdin.on('data', data =>  {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') {
    pwd();
  }
})
