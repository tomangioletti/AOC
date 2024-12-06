const P=console.log
const pi=parseInt
const UT=(()=>{
  let [f,p,s]=[0,0,'']
  return (function(id,test){
    if(arguments.length){if(test)p++; else s+=(f++>0?', ':' ')+id}
    else return `${p} passed. ${f} failed. ${f?('Failures:'+s+'.'):''}`})
  })()

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
  //P('s='+s)
  let p=s.indexOf('|')
  if(p>=1){
    let rule=({l:pi(s.substring(0,p)),r:pi(s.substring(p+1))})
    //P('rule='+rule)
    rules.push(rule)
  }
  else{
    let update=(s.split(',').map(m=>pi(m)))
    //P('update='+update)
    updates.push(update)
  }
}
let sum=0
for(let u of updates){
  P('u='+u)
  if(ckup(u))sum+=mid(u)}

P('The answer is '+sum+'.')
P('initial.  '+UT())
UT('tomtest1',true)
UT('tomtest2',false)
P(UT())

