const P=console.log
const pi=parseInt
const IN=require('node:fs')
  .readFileSync('7-1','utf8')
  .split('\n')
  .filter(x=>x.trim().length>0)
  .map(x=>x.split(' ').map(y=>parseInt(y)))

let d=[];

IN.forEach(a=>{
  let x={};
  x.tv=parseInt(a[0]);
  x.ls=[parseInt(a[1])];
  x.rs=a.slice()
  x.rs.splice(0,2)
  //P('x='+x.tv+'; '+x.ls+'; '+x.rs)
  d.push(x)})

d.forEach(x=>{
  //P('START:x='+x.tv+'; '+x.ls+'; '+x.rs)
  while(x.rs.length>0){
    let nls=[]
    let r=x.rs[0];
    x.ls.forEach(l=>{
      let p=l*r;
      let s=l+r;
      //P('p='+p+' s='+s)
      if(l+r<=x.tv)nls.push(l+r);
      if(l*r<=x.tv)nls.push(l*r)})
    x.ls=nls;
    x.rs.splice(0,1)}
  //P('END:x='+x.tv+'; '+x.ls+'; '+x.rs)
  })

let sum=0;
d.forEach(x=>{
  if(x.ls.indexOf(x.tv)>-1)sum+=x.tv})


P('The answer is '+sum+'.')

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
  P(UT())}
runut()


