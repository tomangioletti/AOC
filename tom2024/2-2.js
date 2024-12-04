const log=console.log
const btwn=(a,b,c)=>((a<=b)&&(b<=c))
const violater=d=>{
  let dir=d[1]-d[0]
  for(let i=1; i<d.length; i++){
    let diff=d[i]-d[i-1]
    if(!btwn(1,Math.abs(diff),3))return i
    if(dir*diff<0)return i}
  return -1}
const rm=(a,i)=>{
  let aa=a.slice()
  let xa=aa.splice(i,1)
  return aa}
const fs=require('node:fs')
let din=fs.readFileSync('2-1','utf8').split('\n').filter(x=>x.trim().length>0) 
let ss=din.reduce((acc,cv,ci,a)=>{
  let d=cv.split(' ')
  let v=violater(d)
  if(v===-1)return acc+1
  for(let i=0;i<d.length;i++){
    if(violater(rm(d,i))===-1)return acc+1}
  return acc},0)
log('The answer is '+ss+'.')

