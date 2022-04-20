function rentalCarCost(d) {
    // Your solution here
    var totalcost=40*d;
    if(d>=7){
      return totalcost-50;
    }
    else if(d>=3){
      return totalcost-20;
    }
      return totalcost;
  }