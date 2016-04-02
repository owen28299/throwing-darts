function dartBoard(arr){

  if(arr.length === 0){
    return 0;
  }

  if (!(arr instanceof Array)){
    throw new TypeError("Arrays only");
  }

  var invalidElements = arr.some(function(element){
    if(typeof element !== 'number' || element < 0){
      return true;
    }
    else return false;
  });

  if (invalidElements === true){
    throw new TypeError(" Positive numbers in array only");
  }

  var ranges = {
    "close" : 5,
    "far" : 10
  };

  var score = 0;

  arr.forEach(function(element){
    if(element < ranges.close){
      score += 10;
    }
    else if (element < ranges.far){
      score += 5;
    }
  });

  var bonus = arr.every(function(element){
    if(element < ranges.close){
      return true;
    }
    return false;
  });

  if (bonus === true){
    score += 100;
  }

  return score;

}

module.exports = dartBoard;