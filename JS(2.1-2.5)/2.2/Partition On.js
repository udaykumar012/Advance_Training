// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value
function partitionOn(pred, items) {
  var falseitems=[],trueitems=[];
  for(let i=0;i<items.length;i++){
    if(pred(items[i]))
      trueitems.push(items[i])
    else{
      falseitems.push(items[i])
    }
  }
  items.splice(0,items.length,...falseitems.concat(trueitems))  // '...' spread opeartor in es6
  return falseitems.length;
}