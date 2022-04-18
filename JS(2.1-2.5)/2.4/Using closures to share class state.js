var Cat = (function () {
 // ... your code here.
  const cats=[]
  const constructor=function(name,weight){
    if(!name || !weight) throw Error('invalid parameters')
    Object.defineProperty(this,'name',{get:()=>name})
    Object.defineProperty(this,'weight',{get:()=>weight, set: value=>weight=value})
    cats.push(this);
  }
  
  constructor.averageWeight=function(){
    avgwt=0
    for(var i=0;i<cats.length;i++){
      avgwt+=cats[i].weight;
    }
    return avgwt/cats.length;
  }
  return constructor;
}());