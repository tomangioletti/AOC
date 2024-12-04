const P=console.log
const IN=require('node:fs')
  .readFileSync('3-1','utf8')
  .split('\n')
  .filter(x=>x.trim().length>0) 
const M=/(?:mul\((\d{1,3}),(\d{1,3})\))|(don't\(\))|(do\(\))/g
let sum=0
let mul=1
for(const s of IN){
  let m=null
  while((m=M.exec(s))!==null){
    if(m[0]==='do()')mul=1
    else if(m[0]==="don't()")mul=0
    else sum+=mul*parseInt(m[1])*parseInt(m[2])}}
P('The answer is '+sum+'.')

