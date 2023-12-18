function log(s){console.log(s)}

const fs = require('fs')
let da = fs.readFileSync('d6p2', 'utf8').split("\n").filter(x => x.trim().length > 0)
let ts=[parseInt((da[0]).substring(9).replace(/ /g,''))]
let ds=[parseInt((da[1]).substring(9).replace(/ /g,''))]
log('ts='+ts[0]+' ds='+ds[0])
let prod=1
for(let i=0;i<ts.length;i++){
  let w=0;
  log('time='+ts[i]+' distance='+ds[i])
  for(let x=1;x<ts[i];x++){
    let t=ts[i]-x
    //log('t='+t+' x='+x)
    if(t*x>ds[i])w++;}
  log('w='+w)
  prod*=w}

log('prod='+prod)


