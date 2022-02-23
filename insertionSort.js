function insertion(arr) {
  for (let i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    for (var j = i - 1; j > -1 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }

  return arr;
}

console.log(insertion([2, 1, 9, 76, 4]));
// [1, 2, 9, 76, 4] after first step
// [1, 2, 9, 76, 4] after second step
// [1, 2, 9, 76, 4] after third step
// [1, 2, 4, 9, 76] after fourth step
