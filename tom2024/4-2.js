const P=console.log
const IN=require('node:fs')
  .readFileSync('4-1','utf8')
  .split('\n')
  .filter(x=>x.trim().length>0)
const gc=(r,c)=>{try{
  let x=IN[r].charAt(c)
  if((typeof x === undefined)||(x===null)||(x===''))return '.'
  return x} catch(e){return '.'}}
const SMMS=['SM','MS']
let xmas=0;
for(let r=0;r<IN.length;r++){
  for(let c=0;c<IN[r].length;c++){
    if(gc(r,c)!=='A')continue
    if(!SMMS.includes(gc(r+1,c-1)+gc(r-1,c+1)))continue
    if(!SMMS.includes(gc(r-1,c-1)+gc(r+1,c+1)))continue
    xmas++}}
P('The answer is '+xmas+'.')

