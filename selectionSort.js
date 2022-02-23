// ? selection sort algorithm
function selection(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr, i, j, lowest);
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    // the next condition for prevent the useless swpping
    if (i !== lowest) {
      [arr[lowest], arr[i]] = [arr[i], arr[lowest]];
    }
  }
  return arr;
}
console.log(selection([5, 6, 1, -20, 9]));
