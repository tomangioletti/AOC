const P=console.log
const IN=require('node:fs')
  .readFileSync('4-1','utf8')
  .split('\n')
  .filter(x=>x.trim().length>0)
const gc=(r,c)=>{try{
  //P('gc: r='+r+' c='+c)
  let x=IN[r].charAt(c)
  if((typeof x === undefined)||(x===null)||(x===''))return '.'
  return x} catch(e){return '.'}}
const dr=[1,1,1,0,0,-1,-1,-1]
const dc=[1,0,-1,1,-1,1,0,-1]
const rays=(r,c)=>{
  let cnt=0
  for(let d=0;d<9;d++){
    let s=''
    for(let n=0;n<4;n++){
      s+=gc(r+(dr[d]*n),c+(dc[d]*n))
      //P('---n='+n+' s='+s)
    }
    P('r='+r+' c='+c+' d='+d+' s='+s)
    if(s==='XMAS')cnt++}
  return cnt}
let xmas=0;
for(let r=0;r<IN.length;r++){
  P('IN['+r+']='+IN[r])
  for(let c=0;c<IN[r].length;c++){
    //P('r='+r+' c='+c+' "'+gc(r,c)+'"')
    xmas+=rays(r,c)}}
P('The answer is '+xmas+'.')

