function manipulateString(str) {
    const upperCaseStr = str.toUpperCase();
  
    function logString() {
      console.log(`The manipulated string is: ${upperCaseStr}`);
    }
  
    return logString;
  }
  
  // Example usage:
  const log = manipulateString("hello, world!");
  log(); // Output: The manipulated string is: HELLO, WORLD!