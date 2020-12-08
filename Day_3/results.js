

//Part 1

const  fs  = require('fs');



const lines = fs.readFileSync('./data.txt').toString();

const rows = lines.split('\r\n');


const collisionsp1 = () => {
  let width = 0;

  width = rows[0].length

  let collisions = 0;
  let x  = 0;

  for (let i = 0; i < rows.length; i++) {
      if (rows[i][x % width] === '#') {
        collisions++;
      }
      const row = rows[i];
      x += 3; 
  }
  console.log(collisions)

}

collisionsp1();

//Part 2


const slope =() =>  {
  let res =
    collisionsp2(1, 1) *
    collisionsp2(3, 1) *
    collisionsp2(5, 1) *
    collisionsp2(7, 1) *
    collisionsp2(1, 2);

  console.log(res);
}


const collisionsp2 = ( xDelta, yDelta ) => {
  let collisions = 0;
  let x = 0; 
  let width = rows[0].length

    for (let y = 0; y < rows.length; y += yDelta) {
        if (rows[y][x % width] === '#') {
      collisions++;
    }
    x += xDelta;
  }
    
    return collisions
}

slope();