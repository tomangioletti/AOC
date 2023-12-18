function log(s){console.log(s)}

const fs = require('fs')
let da = fs.readFileSync('d6p1', 'utf8').split("\n").filter(x => x.trim().length > 0)
let ts=da[0].substring(9).split(' ').map(e=>e.trim()).filter(e=>e.length>0)
let ds=da[1].substring(9).split(' ').map(e=>e.trim()).filter(e=>e.length>0)
let prod=1
for(let i=0;i<ts.length;i++){
  let w=0;
  log('time='+ts[i]+' distance='+ds[i])
  for(let x=1;x<ts[i];x++){
    let t=ts[i]-x
    if(t*x>ds[i])w++;}
  log('w='+w)
  prod*=w}

log('prod='+prod)


