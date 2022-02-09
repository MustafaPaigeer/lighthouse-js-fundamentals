let calculateRectangleArea = function(length, width){
    if(Math.sign(width) < 0 || Math.sign(length) < 0 ){
      return undefined
    }
   else
      return length * width
    }
  
  let calculateTriangleArea = function(base, height){
    if(Math.sign(base) < 0 || Math.sign(height) < 0){
      return undefined
    }
   else
  
    return base * height /2
  }
  let calculateCircleArea = function(radius){
    if(Math.sign(radius) < 0){
      return undefined
    }
   else
    return (Math.PI * radius * radius)
  }
  
  
  console.log(calculateRectangleArea(10, 5));     // should print 50
  console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
  console.log(calculateRectangleArea(10, -5));    // should print undefined
  
  console.log(calculateTriangleArea(10, 5)); // should print 25
  console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
  console.log(calculateTriangleArea(10, -5)); // should print undefined
  
  console.log(calculateCircleArea(10)); // should print 314.159...
  console.log(calculateCircleArea(3.5)); // should print 38.484...
  console.log(calculateCircleArea(-1)); // should print undefined