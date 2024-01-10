// 2529. Maximum Count of Positive Integer and Negative Integer

// Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.
// In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.

// Note that 0 is neither positive nor negative.

// Example 1:
// Input: nums = [-2,-1,-1,1,2,3]
// Output: 3
// There are 3 positive integers and 3 negative integers. The maximum count among them is 3.

// Example 2:
// Input: nums = [-3,-2,-1,0,0,1,2]
// Output: 3
// There are 2 positive integers and 3 negative integers. The maximum count among them is 3.

// Example 3:
// Input: nums = [5,20,66,1314]
// Output: 4
// There are 4 positive integers and 0 negative integers. The maximum count among them is 4.

function maximumCount(nums) {
    return Math.max(upperBound(nums), lowerBound(nums));
}

function upperBound(nums) {
    let low = 0,
        high = nums.length - 1;

    while (low < high) {
        let mid = Math.ceil((low + high) / 2);
        if (nums[mid] < 0) low = mid;

        else high = mid - 1;
    }

    return nums[0] >= 0 ? 0 : low + 1;
}

function lowerBound(nums) {
    let low = 0,
    high = nums.length - 1;

    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] > 0) high = mid;

        else low = mid + 1;
    }

    return nums[nums.length - 1] <= 0 ? 0 : nums.length - low;
}

console.log(maximumCount([-2,-1,-1,1,2,3]));
console.log(maximumCount([-3,-2,-1,0,0,1,2]));
console.log(maximumCount([5,20,66,1314]));