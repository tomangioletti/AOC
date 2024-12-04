const log=console.log
const btwn=(a,b,c)=>((a<=b)&&(b<=c))
const fs=require('node:fs')
let din=fs.readFileSync('2-1','utf8').split('\n').filter(x=>x.trim().length>0) 
let ss=din.reduce((acc,cv,ci,a)=>{
  //log('acc='+acc+' cv='+cv+' ci='+ci)
  let d=cv.split(' ')
  let dir=d[1]-d[0]
  for(let i=1; i<d.length; i++){
    let diff=d[i]-d[i-1]
    if(!btwn(1,Math.abs(diff),3))return acc
    if(dir*diff<0)return acc}
  return acc+1},0)
log('The answer is '+ss+'.')

