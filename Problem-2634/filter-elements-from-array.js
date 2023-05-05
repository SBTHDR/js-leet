// Q 2634. Filter Elements from Array

// Given an integer array arr and a filtering function fn, return a new array with a fewer or equal number of elements.
// The returned array should only contain elements where fn(arr[i], i) evaluated to a truthy value.
// Please solve it without the built-in Array.filter method.

// Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
// Output: [20,30]

// Solution 1 using for loop
const arr = [0,10,20,30]
const fn = function greaterThan10(n) { return n > 10; }

const filter = function(arr, fn) {
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
       if(fn(arr[i], i)){
          newArray.push(arr[i]);
       }
    }
    return newArray;
 };

 const result = filter(arr, fn);
 console.log(result);
