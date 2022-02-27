// function that return the index of pivot element
function pivotIndex(arr, startIndex = 0, endIndex = arr.length + 1) {
  let pivot = arr[startIndex];
  let theAimedIndex = startIndex;
  let i = startIndex + 1;

  while (i <= arr.length) {
    if (pivot > arr[i]) {
      theAimedIndex++;
      [arr[theAimedIndex], arr[i]] = [arr[i], arr[theAimedIndex]];
    }
    i++;
  }
  [arr[startIndex], arr[theAimedIndex]] = [arr[theAimedIndex], arr[startIndex]];

  return theAimedIndex;
}

console.log(pivotIndex([5, 2, 1, 8, 4, 3, 7, 6], 0, 9));
// console.log(pivotIndex([4, 8, 2, 1, 5, 7, 6, 3], 0, 9));
