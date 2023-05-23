// A format for expressing an ordered list of integers is to use a comma separated list of either

// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// Example:

// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

// My solution:

function solution(list){
    let sortedRanges = [];
    const output = []
    let i = 0
  
    while(i < list.length) {
      const gatherRangeFromList = (startingPoint, direction) => {
        let isLooping = true;
        let counter = 1;
        if (direction === "positive") {
          while(isLooping) {
            if (list[startingPoint + counter] === list[startingPoint] + counter) {
              counter++;
            } else isLooping = false;
          }
        }
        else if (direction === "negative") {
          while(isLooping) {
            if (list[startingPoint - counter] === list[startingPoint] - counter) {
              counter++;
            } else isLooping = false;
          }
        }
        i = startingPoint + counter;
        sortedRanges.push(list.slice(startingPoint, startingPoint + counter));
      }
      if (i > 0 && list[i] > list[i+1]) {
        gatherRangeFromList(i, "negative");
      } else {
        gatherRangeFromList(i, "positive");
      }
    }
    console.log(sortedRanges)
    sortedRanges.map((range)=> (
      (range.length < 3) ? range.map((unit) => output.push(unit)) : output.push(`${range[0]}-${range[range.length-1]}`))
    );
    return output.join(",")
  }