Array.prototype.square=function(){
  sq=[]
  for(var i=0;i<this.length;i++){
    sq[i]=this[i]*this[i];
  }
  return sq;
}
Array.prototype.cube=function(){
  cu=[]
  for(var i=0;i<this.length;i++){
    cu[i]=this[i]*this[i]*this[i];
  }
  return cu;
}
Array.prototype.sum=function(){
  s=0
  for(var i=0;i<this.length;i++){
    s+=this[i]
  }
  return s;
}
Array.prototype.average=function(){
  tempsum=this.sum()
  return (tempsum/this.length)
}
Array.prototype.even=function(){
  ev=[]
  for(var i=0;i<this.length;i++){
    if(this[i]%2 ===0)
      ev.push(this[i])
  }
  return ev;
}
Array.prototype.odd=function(){
  od=[]
  for(var i=0;i<this.length;i++){
    if(this[i]%2 !==0)
      od.push(this[i])
  }
  return od;
}