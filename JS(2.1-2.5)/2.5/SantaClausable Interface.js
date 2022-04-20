function isSantaClausable(obj) {  
  console.log( obj.distributeGifts)//enumerable is false to hide properties
    return typeof (obj.sayHoHoHo && obj.distributeGifts && obj.goDownTheChimney)
      == "function";
  }