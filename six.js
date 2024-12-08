// 6. Fetch results asynchronously
async function fetchTodo() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const todo = await response.json();
      console.log(todo);
    } catch (error) {
      console.error('Error fetching todo:', error);
    }
  }
  
  // 7. Multiple requests
  async function fetchMultiple() {
    try {
      const [todoResponse, postResponse] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/todos/1'),
        fetch('https://jsonplaceholder.typicode.com/posts/1'),
      ]);
  
      const todo = await todoResponse.json();
      const post = await postResponse.json();
  
      const combinedData = { todo, post };
      console.log(combinedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // 8. Get Data from API and Display it on the browser console
  async function fetchPosts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await response.json();
  
      posts.forEach(post => {
        console.log(`Post Title: ${post.title}`);
        console.log(`Post Body: ${post.body}`);
        console.log('---');
      });
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }
  
  // 9. Error Handling
  async function fetchWithError() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/123456789');
      const post = await response.json();
      console.log(post);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  }
  
  // Call the functions to execute the requests
  fetchTodo();
  fetchMultiple();
  fetchPosts();
  fetchWithError();