const P=console.log
const pi=parseInt
const IN=require('node:fs')
  .readFileSync('6-1','utf8')
  .split('\n')
  .filter(x=>x.trim().length>0)
  .map(x=>x.split(''))
const gc=(r,c)=>{try{
  if((r<0)||(r>=IN.length)||(c<0)||(c>=IN[r].length))return '*'
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
let [er0,ec0]=[er,ec]
let [dr0,dc0]=[dr,dc]

//Turn the guard
const turn=(r,c)=>[c,-r] //A non-intuitive way to turn right.

//Move the guard. 0=turn, 1=move, -1=out of bounds, -2=loop detected
const move=()=>{
  //pc(er,ec,'X')
  let [nr,nc]=[er+dr,ec+dc];
  //P(`moving r${er}c${ec} to r${nr}c${nc}`)
  let x=gc(nr,nc)
  if(x==='*')return -1
  if(x==='#'){
    [dr,dc]=turn(dr,dc);
    let hit=`r${nr}c${nc}r${er}c${ec}`
    //P('hit='+hit)
    if(hits.includes(hit))return -2
    hits.push(hit)
    //P('hit pushed')
    return 0}
  [er,ec]=[nr,nc];
  return 1}

let hits=[]
let goodspots=[]
//let moves=0
//let maxmoves=IN.length*IN[0].length
fa((x,r,c)=>{
  //P(':::::r='+r+' c='+c)
  if(x==='#')return true
  if(x==='^')return true
  pc(r,c,'#')
  let m=0
  while((m=move())>=0);
  //P('m='+m)
  if(m===-2)goodspots.push(`r${r}c${c}`);
  pc(r,c,x);
  [er,ec]=[er0,ec0]; //SOMETIMES THIS REQUIRES A ';'.  WHY?!?
  [dr,dc]=[dr0,dc0];
  hits=[];
  //P('RESET:er='+er+' ec='+ec)
  //P(':er0='+er0+' ec0='+ec0)
  return true})

//let sum=0
//fa((x,r,c)=>{if(x==='X')sum++;return true})
P('The answer is '+goodspots.length+'.')

//P('IN.length='+IN.length)
//P('IN[1].length='+IN[1].length)

//Unit Test Section
//return //Skip tests.
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
  
  let a=1;
  let b=2;
  //let [c,d]=[a,b]
  //UT('destr1',a===c)
  //UT('destr2',b===d)
  [a, b] = [b, a];
  UT('destrS1',a===2)
  UT('destrS2',b===1)
  a=11
  b=12
  //[c,d]=[a,b]
  //UT('destr3',a===c)
  //UT('destr4',b===d)
  //UT('destr5',a===c)
  P(UT())}
runut()


