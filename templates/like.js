// Function to handle thumbs-up icon click event
function handleLikeClick() {
    // Get the like count element
    const likeCountElement = document.getElementById('likeCount');
  
    // Get the current like count
    let likeCount = parseInt(likeCountElement.textContent);
  
    // Increment the like count
    likeCount++;
  
    // Update the like count element with the new count
    likeCountElement.textContent = likeCount;
  }
  
  // Add click event listener to the thumbs-up icon
  const likeIcon = document.getElementById('likeIcon');
  if (likeIcon) {
    likeIcon.addEventListener('click', handleLikeClick);
  }
  