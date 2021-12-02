import { readFileSync } from 'fs';

const f = readFileSync('kek.txt','utf-8').split('\n').map(x=>+x);
let n = 0;
let buff = [f.shift(),f.shift(),f.shift()];

f.reduce(function(prev, curr){
    n += curr > Number(buff[0]) ? 1 : 0;
    buff = buff.splice(1,2).concat(curr);
    return curr;
},Infinity);

console.log(n)


