function add(n){
  // Let the currying begin!
   var f= function(b){
        return add(n+b)
    }
    f.valueOf=function(){
        return n;
    }
    return f;
}