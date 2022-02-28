// function that return the index of pivot element
function pivotIndex(arr, startIndex = 0, endIndex = arr.length + 1) {
  let pivot = arr[startIndex];
  let theAimedIndex = startIndex;
  let i = startIndex + 1;

  while (i <= endIndex) {
    if (pivot > arr[i]) {
      theAimedIndex++;
      [arr[theAimedIndex], arr[i]] = [arr[i], arr[theAimedIndex]];
    }
    i++;
  }
  [arr[startIndex], arr[theAimedIndex]] = [arr[theAimedIndex], arr[startIndex]];

  return theAimedIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  // ? base element here
  if (left < right) {
    let getPivotIndex = pivotIndex(arr, left, right);

    // left
    quickSort(arr, left, getPivotIndex - 1);

    // right
    quickSort(arr, getPivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([5, 2, 1, 8, 4, 3, 7, 6]));
console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
console.log(quickSort([200, -10, -200, 11, 33, 99, 0, 99, 33, -10]));
