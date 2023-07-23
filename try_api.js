// Example API endpoint
const apiEndpoint = 'https://example.com/api/data';

// Fetch data from the API
async function fetchData() {
  try {
    const response = await fetch(apiEndpoint);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
const displayDiv = document.getElementById('display');

// Mouseover event handler
async function handleMouseOver() {
  // Fetch data from the API
  const data = await fetchData();

  // Clear the existing content
  displayDiv.innerHTML = '';

  // Display objects in the div
  data.forEach((obj) => {
    const objectDiv = document.createElement('div');
    objectDiv.textContent = obj.name; // Display the desired property

    // Append the objectDiv to the displayDiv
    displayDiv.appendChild(objectDiv);
  });
}

// Attach the mouseover event listener to the container div
const containerDiv = document.getElementById('container');
containerDiv.addEventListener('mouseover', handleMouseOver);
