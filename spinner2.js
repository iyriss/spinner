process.stdout.write('hello from spinner1.js... \rhey  \n');

const characters = ['|', '/', '-', '\\', '|']
let timer = 100;
for (let char of characters) {
  setTimeout(() => {
    process.stdout.write('\r' + char + '   ');
  }, timer);
  timer += 200
}