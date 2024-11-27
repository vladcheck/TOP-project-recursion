function fibsRec(n) {
  if (n == 1) return [0];
  if (n == 2) return [0, 1];
  const arr = fibsRec(n - 1);
  const l = arr.length;
  return arr.concat(arr[l - 1] + arr[l - 2]);
}

function fibs(n) {
  if (n == 1) return [0];
  if (n == 2) return [0, 1];
  const ans = [0, 1];
  for (let i = 2; i < n; i++) {
    ans.push(ans[i - 1] + ans[i - 2]);
  }
  return ans;
}

for (let i = 1; i <= 10; i++) {
  console.log(fibsRec(i));
}
