const P=console.log
const pi=parseInt
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
  if(gc(r,c)==='*')return;
  let n='r'+r+'c'+c;
  P('n='+n)
  if(nodes.indexOf(n)>=0)return;
  nodes.push(n);
  P('PUSHED');}


for(let i=0;i<ants.length;i++){
  for(let j=i+1;j<ants.length;j++){
    if(ants[i].z!==ants[j].z)continue;
    let a=ants[i];
    let b=ants[j];
    let rab=b.r-a.r;
    let cab=b.c-a.c;
    let n1r=b.r+rab;
    let n1c=b.c+cab;
    let n2r=a.r-rab;
    let n2c=a.c-cab;
    ckpush(n1r,n1c);
    ckpush(n2r,n2c);}}

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


