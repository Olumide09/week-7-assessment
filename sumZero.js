function sumZer0(arr) {
  for (let i = 0; i < arr.length; i = i + 1) {
    for (let j = 0; j < arr.length; j = j + 1) {
      if (arr[i] + arr[j] === 0) {
        return true;
      } 
    }
  }
    return false;
  
}

console.log(sumZer0([1, 2, 3, -2]));


// code runtime = O(n^2) it has 2 for loops

// space complexity = O(1)