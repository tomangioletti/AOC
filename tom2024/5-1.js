const P=console.log
const pi=parseInt
const IN=require('node:fs')
  .readFileSync('5-1','utf8')
  .split('\n')
  .filter(x=>x.trim().length>0)
let rules=[]
let updates=[]
const mid=a=>a[Math.floor(a.length/2)]
const isbad=(l,r)=>{
  for(let x of rules)if(x.l===r && x.r===l) return true
  return false}
const ckup=u=>{
  for(let p1=0;p1<u.length-1;p1++){
    for(let p2=p1+1;p2<u.length;p2++){
      if(isbad(u[p1],u[p2]))return false}}
  return true}
for(let s of IN){
  let p=s.indexOf('|')
  if(p>=1){
    let rule=({l:pi(s.substring(0,p)),r:pi(s.substring(p+1))})
    rules.push(rule)
  }
  else{
    let update=(s.split(',').map(m=>pi(m)))
    updates.push(update)
  }
}
let sum=0
for(let u of updates){
  if(ckup(u))sum+=mid(u)}

P('The answer is '+sum+'.')

