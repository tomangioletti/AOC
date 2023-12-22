function log(s){console.log(s)}
function rt(n,s){return s.substring(s.length-n)}
function sh(a,b){
  if(a.ht>b.ht)return 1
  if(a.ht<b.ht)return -1
  for(let i=0;i<5;i++){
    let aa=v(a.hs.charAt(i))
    let bb=v(b.hs.charAt(i))
    if(aa>bb)return 1
    if(aa<bb)return -1}
  return 0}
function v(c){return '0123456789TJQKA'.indexOf(c)}
class Hand{
  constructor(s){
    let ca=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    this.bid=parseInt(s.substring(6))
    this.hs=s.substring(0,5)
    this.hs.split('').forEach(e=>ca[v(e)]++)
    
    let m=ca.reduce((x,e)=>Math.max(x,e)) ;log('m='+m) 
    let p=ca.reduce((x,e)=>e==2?x+1:x);log('p='+p) 

    if(m==5)this.ht=7
    if(m==4)this.ht=6
    if(m==3)this.ht=p==1?5:4
    if(m==2)this.ht=p==2?3:2
    if(m==1)this.ht=1
    log('s='+s+' hs='+this.hs+' ht='+this.ht)}}

const fs = require('fs')
let da = fs.readFileSync('d7p1', 'utf8').split("\n").filter(x => x.trim().length > 0)
let dh=da.map(e=>new Hand(e))
dh.forEach(e=>log(e.hs))
dh.sort(sh)
log("SORTED")
dh.forEach(e=>log(e.hs))
let tot=0
dh.forEach((e,i)=>{tot+=e.bid*(i+1)})
log('tot='+tot)





