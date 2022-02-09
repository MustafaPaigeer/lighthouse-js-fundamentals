function range(start, end, step) {
    myArray = [];
    if (step == undefined) {
      step = 1;
    };
    if (step > 0) {
      for (var i = start; i <= end; i += step) {
        myArray.push(i);
      }
    } else {
      for (var i = start; i >= end; i += step) {
        myArray.push(i);
      }
    };
    return myArray;
  };

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));