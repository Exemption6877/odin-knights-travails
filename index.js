function knightMoves(currentPos, nextMove) {
  const [currentX, currentY] = currentPos;
  const [nextX, nextY] = nextMove;
  // checking whether both inputs within chessboard
  if (currentX > 7 || currentY > 7 || currentX < 0 || currentY < 0) {
    throw new Error("Illegal position, please try again");
  }

  if (nextX > 7 || nextY > 7 || nextX < 0 || nextY < 0) {
    throw new Error("Illegal move, please try again");
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
