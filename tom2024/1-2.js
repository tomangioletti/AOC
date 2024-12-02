const log=console.log
const fs=require('node:fs')
let din=fs.readFileSync('1-1','utf8').split('\n').filter(x=>x.trim().length>0) 
let l1=[]
let l2=[]
din.forEach((x,i)=>{l1[i]=parseInt(x); l2[i]=parseInt(x.substring(x.indexOf(' ')))})
l1.sort((a,b)=>a-b)
l2.sort((a,b)=>a-b)
let ss=0
ss=l1.reduce((acc,cv,ci,a)=>{
  //log('acc='+acc+' cv='+cv+' ci='+ci)
  let i=l2.indexOf(cv)
  //log('i='+i)
  if(i===-1)return acc;
  else{
    let cnt=0
    while(l2[i]===cv){
      cnt++
      i++;
      if(i>=l2.length)break;
    }
    return acc+(cv*cnt)
  }},0);
log('The answer is '+ss+'.')
//l1.forEach(x=>log(x))
//l2.forEach(x=>log(x))

