function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  return `${num}`.length;
}
function mostDigits(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    // if (max < digitCount(arr[i])) {
    //   max = digitCount(arr[i]);
    // }
    max = Math.max(max, digitCount(arr[i]));
  }
  return max;
}

function radixSort(arr) {
  let maxDigitCount = mostDigits(arr);
  for (let i = 0; i < maxDigitCount; i++) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (let k = 0; k < arr.length; k++) {
      buckets[getDigit(arr[k], i)].push(arr[k]);
    }
    // ? concating
    arr = [].concat(...buckets);
  }
  return arr;
}

// console.log(getDigit(124434, 2));
// console.log(digitCount(343434));
// console.log(mostDigits([1, 11, 11111, 11, 12, 233]));
// console.log(mostDigits([12, 34, 55, 88]));

console.log(radixSort([1, 11, 11111, 11, 12, 233]));
console.log(radixSort([12, 34, 55, 88, -10, 11.55, 0.99]));
