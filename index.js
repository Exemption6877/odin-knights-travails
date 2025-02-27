function knightMoves(currentPos) {
  if (!moveValidity(currentPos)) {
    throw Error("Invalid Move");
  }
}

function generateMove(currentPos) {
  // In general, knight can have min 2 moves, and max 8 moves variations.
  // I will generate all 8, and then check them with moveValidity()
  const allPossibilities = [];
  const [currentX, currentY] = currentPos;
  // const queue = [] -- possibly for another function
  // x+2 y+1 and y-1
  allPossibilities.push([currentX + 2, currentY + 1]);
  allPossibilities.push([currentX + 2, currentY - 1]);
  // x-2 y+1 and y-1
  allPossibilities.push([currentX - 2, currentY + 1]);
  allPossibilities.push([currentX - 2, currentY - 1]);
  // y+2 x+1 and x-1
  allPossibilities.push([currentX + 1, currentY + 2]);
  allPossibilities.push([currentX - 1, currentY + 2]);
  // y-2 x+1 and x-1
  allPossibilities.push([currentX + 1, currentY - 2]);
  allPossibilities.push([currentX - 1, currentY - 2]);

  return allPossibilities.filter((move) => moveValidity(currentPos, move));
}

console.log(generateMove([0, 0]));

function moveValidity(currentPos, nextMove) {
  const [currentX, currentY] = currentPos;
  const [nextX, nextY] = nextMove;
  // checking whether both inputs within chessboard

  if (currentX > 7 || currentY > 7 || currentX < 0 || currentY < 0) {
    return false;
  }

  if (nextX > 7 || nextY > 7 || nextX < 0 || nextY < 0) {
    return false;
  }

  let diffX = Math.abs(currentX - nextX);
  let diffY = Math.abs(currentY - nextY);

  if ((diffX == 2 && diffY == 1) || (diffY == 2 && diffX == 1)) {
    return true;
  } else {
    return false;
  }
}

/*
knight's legal move L-shaped
taking he's at x,y [3,3].
Max 8 legal moves: group by X
[1,2],[1,4],
[2,1],[2,5],
[4,1],[4,5],
[5,2],[5,4]

-+2xy -+yx
i can group them up by two: going two times direction then left or right
*/

/*
[]

   0   1   2   3   4   5   6   7
7 [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ]
6 [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ]
5 [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ]
4 [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ]
3 [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ]
2 [ ] [0] [ ] [ ] [ ] [ ] [ ] [ ]
1 [ ] [ ] [0] [ ] [ ] [ ] [ ] [ ]
0 [X] [ ] [ ] [ ] [ ] [ ] [ ] [ ]

   0   1   2   3   4   5   6   7
7 [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ]
6 [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ]
5 [ ] [ ] [O] [ ] [O] [ ] [ ] [ ]
4 [ ] [O] [ ] [ ] [ ] [O] [ ] [ ]
3 [ ] [ ] [ ] [X] [ ] [ ] [ ] [ ]
2 [ ] [O] [ ] [ ] [ ] [O] [ ] [ ]
1 [ ] [ ] [O] [ ] [O] [ ] [ ] [ ]
0 [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ]


*/
