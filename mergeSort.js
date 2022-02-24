// o(nlogn) best, average, worst
// space complexity: O(n)
function mergeArrays(arr1, arr2) {
  const result = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let firstHalf = mergeSort(arr.slice(0, mid));
  let secondHalf = mergeSort(arr.slice(mid));

  return mergeArrays(firstHalf, secondHalf);
}

console.log(mergeSort([2, 14, 0, 6]));
// console.log(mergeArrays([], [1, 3]));
// console.log(mergeArrays([100], [1, 3, 4, 5]));
