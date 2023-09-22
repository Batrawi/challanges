// Tap js challenge

const getMissingNumber = (nums) => {
  let missingNum;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i)
    return missingNum = i;
  }
  return missingNum
}

console.log(getMissingNumber([0, 1, 3, 4]));
