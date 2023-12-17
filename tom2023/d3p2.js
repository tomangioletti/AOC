function log(s){console.log(s)}
function isd(c){return ((c >= '0') && (c <= '9'))}
function g(r, c) {
  if (r < 0 || r >= da.length) return '.'
  if (c < 0 || c >= da[r].length) return '.'
  return da[r][c]}
function isq(x){return x!='.' && !isd(x)}
function lq(r, c) {return (
  isq(g(r-1,c-1)) || isq(g(r-1,c))   || isq(g(r-1,c+1)) ||
  isq(g(r,  c-1)) ||                    isq(g(r,  c+1)) ||
  isq(g(r+1,c-1)) || isq(g(r+1,c))   || isq(g(r+1,c+1)))}
function an(r, c) { //return all the numbers around a given point
  let a = [], n = '', x='', ci=0
  function gn(r, c) { //get numbers on line around r,c
    if (isd(n=g(r,c))) {
      //grow left
      ci=c-1;
      while(isd(x=g(r,ci))){n=x+n;ci--}
      //grow right
      ci=c+1;
      while(isd(x=g(r,ci))){n=n+x;ci++}
      //push n
      log('center r='+r+' c='+c+' n='+n)
      if(n.length>0){a.push(n); n=''}
    } else {
      n='' 
      //grow left
      ci=c-1;
      while(isd(x=g(r,ci))){n=x+n;ci--}
      log('left r='+r+' c='+c+' n='+n)
      if(n.length>0){a.push(n); n=''}
      //grow right
      n=''
      ci=c+1;
      while(isd(x=g(r,ci))){n=n+x;ci++}
      log('right r='+r+' c='+c+' n='+n)
      if(n.length>0){a.push(n); n=''}
    } 
  }
  gn(r-1,c)
  gn(r,c)
  gn(r+1,c)
  log('r='+r+' c='+c+' a.length='+a.length)
  return a;
}

const fs = require('fs')
let da = fs.readFileSync('d3p2', 'utf8').split("\n").filter(x => x.trim().length > 0)
//da=da.map(e=>e.split('')).map(e=>!isq(e)?e:(e=='*'?e:'.'))
da=da.map(e=>e.split('').map(e=>!isq(e)?e:(e=='*'?e:'.')))

let sum = 0
da.forEach((e,r)=>{da[r].forEach((x,c)=>{
  if(x=='*'){
    let a=an(r,c)
    if(a.length==2) sum+=parseInt(a[0])*parseInt(a[1])}})})

log(sum)
