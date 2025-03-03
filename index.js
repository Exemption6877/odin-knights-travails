const knightAction = (function () {
  const moveValidity = (currentPos, nextMove) => {
    const [currentX, currentY] = currentPos;
    const [nextX, nextY] = nextMove;

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
  };

  const levelOrder = (currentPos, nextMove) => {
    const queue = [[currentPos, [currentPos]]];
    const visitedCells = new Set();
    visitedCells.add(currentPos.toString());

    while (queue.length > 0) {
      const [move, path] = queue.shift();

      if (move[0] === nextMove[0] && move[1] === nextMove[1]) {
        console.log(`Found in ${path.length - 1} moves! Path:`);
        path.forEach((pos) => console.log(pos));
        return path;
      }

      let generatedMoves = generateMove(move).filter(
        (step) => !visitedCells.has(step.toString())
      );

      for (const step of generatedMoves) {
        queue.push([step, [...path, step]]);
        visitedCells.add(step.toString());
      }
    }
  };

  const generateMove = (currentPos) => {
    const allPossibilities = [];
    const [currentX, currentY] = currentPos;
    allPossibilities.push([currentX + 2, currentY + 1]);
    allPossibilities.push([currentX + 2, currentY - 1]);
    allPossibilities.push([currentX - 2, currentY + 1]);
    allPossibilities.push([currentX - 2, currentY - 1]);
    allPossibilities.push([currentX + 1, currentY + 2]);
    allPossibilities.push([currentX - 1, currentY + 2]);
    allPossibilities.push([currentX + 1, currentY - 2]);
    allPossibilities.push([currentX - 1, currentY - 2]);

    return allPossibilities.filter((move) => moveValidity(currentPos, move));
  };

  return { moveValidity, levelOrder, generateMove };
})();

function knightMoves(currentPos, nextMove) {
  return knightAction.levelOrder(currentPos, nextMove);
}

knightMoves([0, 0], [1, 5]);
