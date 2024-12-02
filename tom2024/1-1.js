const log=console.log
const fs=require('node:fs')
let din=fs.readFileSync('1-1','utf8').split('\n').filter(x=>x.trim().length>0) 
let l1=[]
let l2=[]
din.forEach((x,i)=>{l1[i]=parseInt(x); l2[i]=parseInt(x.substring(x.indexOf(' ')))})
l1.sort((a,b)=>a-b)
l2.sort((a,b)=>a-b)
let diff=0
l1.forEach((x,i)=>diff+=Math.abs(x-l2[i]))
log('The answer is '+diff+'.')
//l1.forEach(x=>log(x))
//l2.forEach(x=>log(x))

