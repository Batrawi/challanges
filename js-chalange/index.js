const getMissingNumber = (nums) => {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] === nums[j]) {
        return `there is a duplicated number : ${nums[i]}`;
      }
    }
  }

  nums.sort((a, b) => a - b);
  let missingNum;

  if (nums[nums.length - 1] === n) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== i) {
        return missingNum = i;
      }
    }
  } else {
    return "your array doesn't start with 0";
  }

  return missingNum;
}

console.log(getMissingNumber([1, 2, 3, 5]));