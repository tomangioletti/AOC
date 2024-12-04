const P=console.log
const IN=require('node:fs')
  .readFileSync('3-1','utf8')
  .split('\n')
  .filter(x=>x.trim().length>0) 
const M=/mul\((\d{1,3}),(\d{1,3})\)/g
let sum=0
for(const s of IN){
  let m=null
  while((m=M.exec(s))!==null)sum+=parseInt(m[1])*parseInt(m[2])}
P('The answer is '+sum+'.')

