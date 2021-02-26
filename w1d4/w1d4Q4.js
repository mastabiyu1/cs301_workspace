const prompt = require('prompt-sync')();
const number = parseInt(prompt('Enter the number of terms: '));
let N1 = 0, N2 = 1, nextNum;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(N1);
    nextNum = N1 + N2;
    N1 = N2;
    N2 = nextNum;
}