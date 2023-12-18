function log(s){console.log(s)}
class Map {
  bm=[]
  am(s){
    let a=s.split(' ').map(e=>parseInt(e))
    for(let i=0;i<a[2];i++)this.bm[a[1]+i]=a[0]+i}
  m(x){if(this.bm[x]===undefined){return x}else{return this.bm[x]}}}
function co(fa){
  return x=>{
    let cv=x
    for(let i=0;i<fa.length;i++){
      log('cv='+cv)
      cv=fa[i].m(cv)}}}
function c2(x){
  x=ss.m(x)
  x=sf.m(x)
  x=fw.m(x)
  x=wl.m(x)
  x=lt.m(x)
  x=th.m(x)
  x=hl.m(x)
  return x}

const fs = require('fs')
let da = fs.readFileSync('d5p1', 'utf8').split("\n").filter(x => x.trim().length > 0)

let ss=new Map(), sf=new Map(), fw=new Map(), wl=new Map, lt=new Map(), th=new Map(), hl=new Map()
log('ss='+ss)
let seeds=da[0].substring(6).split(' ').filter(e=>e.trim().length>0).map(e=>parseInt(e))
let cm=null
da.forEach(e=>{
  log('line:'+e)
  switch(e.substring(0,2)){
    case 'se':cm=ss;log('ss');break;
    case 'so':cm=sf;break;
    case 'fe':cm=fw;break;
    case 'wa':cm=wl;break;
    case 'li':cm=lt;break;
    case 'te':cm=th;break;
    case 'hu':cm=hl;break;
    default: cm.am(e)}})
let ms=[ss,sf,fw,wl,lt,th,hl]
seeds.forEach(e=>{
  log('seed='+e)
  log('loc:'+c2(e))})

