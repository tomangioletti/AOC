const P=console.log
const pi=parseInt
const IN=require('node:fs')
  .readFileSync('6-1','utf8')
  .split('\n')
  .filter(x=>x.trim().length>0)
  .map(x=>x.split(''))
const gc=(r,c)=>{try{
  let x=IN[r][c]
  if((typeof x === undefined)||(x===null)||(x===''))return '*'
  return x} catch(e){return '*'}}
const pc=(r,c,x)=>IN[r][c]=x
const fa=(f)=>{
  for(let r=0;r<IN.length;r++){
    for(let c=0;c<IN[r].length;c++){
      if(!f(gc(r,c),r,c))return}}}

//Guard "e" position and direction in row, column format.
let [er,ec]=[-1,-1]
let [dr,dc]=[-1,0]

//Find the guard "e"
fa((x,r,c)=>{if(x==='^'){[er,ec]=[r,c];return false}else return true})

//Turn the guard
const turn=(r,c)=>[c,-r] //A non-intuitive way to turn right.

//Move the guard
const move=()=>{
  pc(er,ec,'X')
  let [nr,nc]=[er+dr,ec+dc]
  let x=gc(nr,nc)
  if(x==='*')return false
  if(x==='#'){
    [dr,dc]=turn(dr,dc)
    return true}
  [er,ec]=[nr,nc]
  return true}

while(move());
let sum=0
fa((x,r,c)=>{if(x==='X')sum++;return true})
P('The answer is '+sum+'.')

//Unit Test Section
return //Skip tests.
const UT=(()=>{
  let [f,p,s]=[0,0,'']
  return (function(id,test){
    if(arguments.length){if(test)p++; else s+=(f++>0?', ':' ')+id}
    else return `UT: ${p} passed. ${f} failed. ${f?('Failures:'+s+'.'):''}`})
  })()
function runut(){
  [dr,dc]=[-1,0]
  UT('turn1',''+[0,1]==''+turn(-1,0))
  UT('turn2',''+[1,0]==''+turn(0,1))
  UT('turn3',''+[0,-1]==''+turn(1,0))
  UT('turn4',''+[-1,0]==''+turn(0,-1))
  P(UT())}
runut()


