
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return []

  if(matrix.length < 1){return []}

  let a = []

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2){
      a.push(matrix[i].reverse())
    }
    else {a.push(matrix[i])}
  }

  return   a.toString().split(",").map(Number);


  }