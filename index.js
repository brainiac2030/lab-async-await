// index.js - Fetch and display posts using async/await

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

/**
 * Fetches posts from the external API
 * @returns {Promise<Array>} Array of post objects
 */
async function fetchPosts() {
  try {
    const response = await fetch(API_URL);
    
    // Check if response is OK (status 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    // Return empty array to prevent breaking the app
    return [];
  }
}

/**
 * Displays posts on the page by creating DOM elements
 * @param {Array} posts - Array of post objects from API
 */
function displayPosts(posts) {
  // Get the ul element where posts will be appended
  const postList = document.getElementById('post-list');
  
  // Clear any existing content (useful for re-fetching)
  postList.innerHTML = '';
  
  // Loop through each post and create DOM elements
  posts.forEach(post => {
    // Create li element
    const li = document.createElement('li');
    
    // Create h1 element for title
    const h1 = document.createElement('h1');
    h1.textContent = post.title;
    
    // Create p element for body
    const p = document.createElement('p');
    p.textContent = post.body;
    
    // Append h1 and p to li
    li.appendChild(h1);
    li.appendChild(p);
    
    // Append li to the ul with id "post-list"
    postList.appendChild(li);
  });
}

/**
 * Main function to initialize the app
 * Fetches posts and displays them
 */
async function init() {
  const posts = await fetchPosts();
  
  // Only display if we have posts
  if (posts.length > 0) {
    displayPosts(posts);
    console.log(`Successfully displayed ${posts.length} posts`);
  } else {
    console.warn('No posts to display');
  }
}

// Call init when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);

// Export functions for testing (if using Jest or similar)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { fetchPosts, displayPosts, init };
}