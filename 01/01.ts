import { readFileSync } from 'fs';

let c: number = 0;
let a = readFileSync('kek.txt','utf-8').split('\n').reduce(function(a,b){c += +(+b > a); return +b;},Infinity);

console.log(c)
