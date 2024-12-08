function doubleUsingCallback(arr, callback) {
    const doubledArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      doubledArr.push(callback(arr[i]));
    }
  
    return doubledArr;
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = doubleUsingCallback(numbers, (num) => num * 2);
  console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]