module.exports = function () {
  const pwd = console.log(`Current directory: ${process.cwd()}`);
  process.stdout.write('\nprompt > ');
}
