const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function (moves) {
  // Your code in here ...
  let x = 0;
  let y = 0;
  let position = [x,y]
  let result = ""
  for (let move of moves){
    result = move
    if(result === "north"){
      y = y + 1;
      position [1] = y
    }
    if (result === "east"){
      x = x + 1;
      position [0] = x
    }
    if (result === "west"){
      x = x - 1;
      position [0] = x
    }
  
  }
  return position
}


finalPosition(moves)