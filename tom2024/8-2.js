const P=console.log
const IN=require('node:fs')
  .readFileSync('8-1','utf8')
  .split('\n')
  .filter(x=>x.trim().length>0)
  .map(x=>x.split(''))
const gc=(r,c)=>{try{
  if((r<0)||(r>=IN.length)||(c<0)||(c>=IN[r].length))return '*'
  let x=IN[r][c]
  if((typeof x === undefined)||(x===null)||(x===''))return '*'
  return x} catch(e){return '*'}}
const pc=(r,c,x)=>IN[r][c]=x

//f must return true to exit fa loop prematurely.
const fa=(f)=>{
  for(let r=0;r<IN.length;r++){
    for(let c=0;c<IN[r].length;c++){
      if(f(gc(r,c),r,c))return}}}

let ants=[];

fa((x,r,c)=>{
  //P('x='+x)
  if(x==='.')return;
  let a={};
  a.z=x;
  a.r=r;
  a.c=c;
  ants.push(a);
  P('a='+a.z+': '+r+','+c)
  return})

let nodes=[];

const ckpush=(r,c)=>{
  if(gc(r,c)==='*')return false;
  let n='r'+r+'c'+c;
  P('n='+n)
  if(nodes.indexOf(n)>=0)return true;
  nodes.push(n);
  P('PUSHED');
  return true}


for(let i=0;i<ants.length;i++){
  for(let j=i+1;j<ants.length;j++){
    if(ants[i].z!==ants[j].z)continue;
    let a=ants[i];
    let b=ants[j];
    let rab=b.r-a.r;
    let cab=b.c-a.c;
    let r=a.r;
    let c=a.c;
    while(ckpush(r,c)){
      r+=rab;
      c+=cab;}
    r=a.r-rab;
    c=a.c-cab;
    while(ckpush(r,c)){
      r-=rab;
      c-=cab;}}}

const torc=s=>{
  let i=s.indexOf('c');
  return [parseInt(s.substring(1)),parseInt(s.substring(i+1))]}

nodes.forEach(n=>{
  P('ntorc='+torc(n));})

//fa((x,r,c)=>{


let sum=nodes.length;
P('The answer is '+sum+'.')



//P('IN.length='+IN.length)
//P('IN[1].length='+IN[1].length)

//Unit Test Section
return //Skip tests.
const UT=(()=>{
  let [f,p,s]=[0,0,'']
  return (function(id,test){
    if(arguments.length){if(test)p++; else s+=(f++>0?', ':' ')+id}
    else return `UT: ${p} passed. ${f} failed. ${f?('Failures:'+s+'.'):''}`})
  })()
function runut(){
  P(UT())}
runut()


