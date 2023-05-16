// DESCRIPTION:
// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

// My solution:

const multiplicationTable = (size) => {
    let baseArray = []
    //   Loop for each array inside the primary array
    while(baseArray.length < size) {
      let multiplyArray = [];
      //    multiply based on baseArray positioning and multiplyArray positioning
      while(multiplyArray.length < size) (multiplyArray.push((multiplyArray.length + 1) * (baseArray.length + 1)))
      baseArray.push(multiplyArray)
    }
    return baseArray;
  }