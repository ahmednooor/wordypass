const WordyPass = require('./wordypass.min'); // if on nodejs

const wordyPass = new WordyPass();

console.log(wordyPass.generate(8));
console.log(wordyPass.generate(12));
console.log(wordyPass.generate(16));
console.log(wordyPass.generate(20));
console.log(wordyPass.generate(24));
