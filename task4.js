function rentalCarCost(d) {
    var totalamount = 1;
    if(d < 3){
      totalamount = totalamount*40*d;
    }
    else if(d >= 3 && d<7 ){
      totalamount = totalamount*40*d-20;
    }
    else{
      totalamount = totalamount*40*d-50;
    }
    return totalamount;
  }