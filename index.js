// Write your code here!

function displayPosts(posts) {
  const postList = document.getElementById('post-list');

  
  posts.forEach(post => {
    // Create elements
    const li = document.createElement('li');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    // Add content
    h1.textContent = post.title;
    p.textContent = post.body;

    // Append h1 and p to li
    li.appendChild(h1);
    li.appendChild(p);

    // Append li to the ul
    postList.appendChild(li);
  });
}


async function fetchAndDisplayPosts() {
  try {
    // Apply await to fetch
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    // Parse JSON response
    const posts = await response.json();
    
    // Call displayPosts() function after fetch
    displayPosts(posts);
  } catch (error) {
    console.error('Failed to fetch posts:', error);
  }
}


fetchAndDisplayPosts();