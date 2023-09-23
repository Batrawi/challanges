const getMissingNumber = (nums) => {
  
  const uniqueNums = [... new Set(nums)];
  const n = uniqueNums.length;

  uniqueNums.sort((a, b) => a - b);

  if (uniqueNums[0] !== 0) {
    return "Your array doesn't start with 0";
  }

  if (uniqueNums[n-1]===n-1) return n; // check for [0,1]

  for (let i = 0; i < uniqueNums.length; i++) {
    if (uniqueNums[i] !== i) {
      return  i;
    }
  }
}
console.log(getMissingNumber([3, 0, 1]));
console.log(getMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(getMissingNumber([0, 1]));
console.log(getMissingNumber([0, 1, 1, 2, 4]));
console.log(getMissingNumber([1, 2, 3, 5]));