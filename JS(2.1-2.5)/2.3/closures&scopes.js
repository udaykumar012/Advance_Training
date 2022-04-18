function createFunctions(n) {
  var callbacks = [];

  for (var i=0; i<n; i++) {
    callbacks.push(closure(i));
  }
  
  return callbacks;
}
function closure(i){
  return function(){
    return i;
  }
}