process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  //const pwd = console.log(__dirname);
  const pwd = console.log(`Current directory: ${process.cwd()}`);

  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
});
