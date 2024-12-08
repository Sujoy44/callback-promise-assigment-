function greetingPromise(name) {
    return new Promise((resolve) => {
      const greeting = `Hello, ${name}!`;
      resolve(greeting);
    });
  }
  
  greetingPromise("Mithun")
    .then(greeting => console.log(greeting)); // Output: Hello, Mithun!