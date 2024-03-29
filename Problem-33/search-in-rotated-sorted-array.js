// 33. Search in Rotated Sorted Array

// There is an integer array nums sorted in ascending order (with distinct values).
// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length)
// such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
// For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// Example 2:
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

const linearSearch = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
      if (target === nums[i]) {
        return i;
      }
    }
    return -1;
};

// Time Complexity  - O(n)
// Space Complexity - O(1)
console.log(linearSearch([4,5,6,7,0,1,2], 0));
console.log(linearSearch([4,5,6,7,0,1,2], 3));

// Linear Search for Multiple Elements

const globalLinearSearch = (nums, target) => {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      result.push(i);
    }
  }
  if (result.length === 0) return -1;
  return result;
};

// Time Complexity  - O(n)
// Space Complexity - O(n)
console.log(globalLinearSearch([4, 5, 0, 7, 0, 1, 2], 0));