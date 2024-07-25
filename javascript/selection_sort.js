function selectionSort(arr) {
  const compareNum = (a,b) => a - b;
  return arr.filter(n => n !== 'undefined' || n !== null)
  .sort(compareNum)
}

// console.log(selectionSort([4, 1, 8, 3]))
console.log(selectionSort([null, 4, 1, 8, 3, -1, undefined]))

// if (require.main === module) {
//   // add your own tests in here
//   console.log("Expecting: [-1, 2, 3, 5]");
//   console.log("=>", selectionSort([3, -1, 5, 2]));

//   console.log("");

//   // BENCHMARK HERE, and print the average runtime
//   const longInput = [];

//   for (let i = 0; i < 100; ++i) {
//     longInput.push(Math.random());
//   }
// }

// module.exports = selectionSort;

// declare and initialize variable with sorting algo
// remove any aberrant data, ie. undefined and null values
// apply sorting algo and then return sorted struct

// And a written explanation of your solution
