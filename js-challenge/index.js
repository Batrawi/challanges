const getMissingNumber = (nums) => {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] === nums[j]) {
        return `There is a duplicated number: ${nums[i]}`;
      }
    }
  }

  nums.sort((a, b) => a - b);

  if (nums[0] !== 0) {
    return "Your array doesn't start with 0";
  }

  let missingNum;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return missingNum = i;
    }
  }

  return n;
}
console.log(getMissingNumber([3, 0, 1]));
console.log(getMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(getMissingNumber([0, 1]));
console.log(getMissingNumber([1, 2, 3, 5]));
console.log(getMissingNumber([0, 1, 1, 2, 4]));
