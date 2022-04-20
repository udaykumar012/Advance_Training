function compose(...com) {
  // Your solution
  //console.log(com.length)
  return function(a){
    for(var i=com.length-1; i>=0;i--){
      val=com[i](a)
     // console.log(val)
      a=val;
    }
    return a
  }
}