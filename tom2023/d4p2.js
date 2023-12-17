function log(s){console.log(s)}

const fs = require('fs')
let da = fs.readFileSync('d4p2', 'utf8').split("\n").filter(x => x.trim().length > 0)
let cd=[],sum = 0
da.forEach((e)=>{
  let x={}, ci=e.indexOf(':'), bi=e.indexOf('|')
  x.info=parseInt(e.substring(4,ci).trim());
  x.wn=e.substring(ci+1,bi).split(' ').map(x=>x.trim()).filter(x=>x.length>0)
  x.sn=e.substring(bi+1).split(' ').map(x=>x.trim()).filter(x=>x.length>0)
  x.w=0
  x.sn.forEach(s=>{if(x.wn.includes(s))x.w++})
  x.v=(x.w>0)?2**(x.w-1):0
  log('info='+x.info+' v='+x.v)
  sum+=x.v
  cd.push(x)})
let mc=cd.length
for(let i=0;i<cd.length;i++){
  let w=cd[i].w, cn=cd[i].info
  for(let ii=1;ii<=w;ii++){
    if(cn+ii>mc)break;
    cd.push(cd[cn+ii-1])}}

log(sum)
log(cd.length)

