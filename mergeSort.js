function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const half = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, half));
  const right = mergeSort(arr.slice(half));
  return merge(left, right);
}

function merge(left, right) {
  const ans = [];
  while (left.length || right.length) {
    if (left.length === 0) ans.push(right.shift());
    else if (right.length === 0) ans.push(left.shift());
    else if (right[0] < left[0]) ans.push(right.shift());
    else ans.push(left.shift());
  }
  return ans;
}

console.log(mergeSort([1, 3, 20, 2, 6, 8, 17, 13, 121, -2, 0]));
