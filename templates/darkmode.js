// Function to toggle between light, dark, and auto modes
function toggleDarkMode() {
    // Get the current mode
    const currentMode = DarkReader.getState().brightness === 100 ? 'light' : 'dark';
  
    // Toggle to the next mode
    if (currentMode === 'light') {
      DarkReader.enable({
        brightness: 0, // Dark mode
        contrast: 90,
        sepia: 10
      });
    } else if (currentMode === 'dark') {
      DarkReader.enable({
        brightness: 100, // Light mode
        contrast: 90,
        sepia: 10
      });
    }
  }
  
  // Add click event listener to toggle button
  const toggleButton = document.getElementById('toggleMode');
  if (toggleButton) {
    toggleButton.addEventListener('click', toggleDarkMode);
  } else {
    console.error('Toggle button not found!');
  }
  
  