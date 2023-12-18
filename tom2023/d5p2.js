function log(s){console.log(s)}
class Map {
  bm=[]
  am(s){this.bm.push(s.split(' ').map(e=>parseInt(e)))}
  m(x){
    for(let i=0;i<this.bm.length;i++){
      let b=this.bm[i]
      if(x>=b[1]&&x<b[1]+b[2])return b[0]+(x-b[1])}
    return x}}

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
let da = fs.readFileSync('d5p2', 'utf8').split("\n").filter(x => x.trim().length > 0)

let ss=new Map(), sf=new Map(), fw=new Map(), wl=new Map, lt=new Map(), th=new Map(), hl=new Map()
log('ss='+ss)
let seeds=da[0].substring(6).split(' ').filter(e=>e.trim().length>0).map(e=>parseInt(e))
let cm=null
da.forEach(e=>{
  log('line:'+e)
  switch(e.substring(0,2)){
    case 'se':cm=ss;break;
    case 'so':cm=sf;break;
    case 'fe':cm=fw;break;
    case 'wa':cm=wl;break;
    case 'li':cm=lt;break;
    case 'te':cm=th;break;
    case 'hu':cm=hl;break;
    default: cm.am(e)}})
let ms=[ss,sf,fw,wl,lt,th,hl]
log('===')
let smin=-1, lmin=99999999999
for(let i=0;i<seeds.length;i+=2){
  for(let x=0;x<seeds[i+1];x++){
    let s=seeds[i]+x
    let l=c2(s)
    if(l<lmin){lmin=l;smin=s}
    //log('seed='+s)
    //log('loc:'+l)
    }}

log('===xxx')
log('smin='+smin+'  location='+lmin)


