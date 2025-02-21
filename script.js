// Function to display the Rust GIF initially
function displayRust() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = ""; // Clear previous images

    // Create and configure Rust GIF (spinning)
    var rustGif = new Image();
    rustGif.src = 'rust.gif'; // Path to rust.gif
    rustGif.alt = 'Rust GIF';
    rustGif.classList.add('spin'); // Add spinning effect

    // Append Rust GIF
    imageContainer.appendChild(rustGif);
}

// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayMovingCatHeart(); // Display the moving cat-heart.gif
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'PLEASE PLEASE'; 
        
        // Make the "No" button move around the page
        moveNoButton(); // Call the function to make the "No" button move

        // Show cat image when "No" is clicked
        replaceWithCat(); // This function will show cat.gif

        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by * 2px
        yesButton.style.fontSize = newSize + 'px';
    }
}

// Function to replace the Rust GIF with the Cat GIF when "No" is clicked
function replaceWithCat() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = ""; // Clear previous images

    // Create and configure Cat GIF
    var catImage = new Image();
    catImage.src = 'cat.gif'; // Path to cat.gif
    catImage.alt = 'Cat';

    // Append Cat GIF
    imageContainer.appendChild(catImage);
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds

    // Get the cat-heart GIF to move it during the flash
    var catHeartImage = document.querySelector('.moving-cat'); // Get the image with the class 'moving-cat'

    // Function to randomly move the cat-heart image
    function moveCatHeart() {
        if (catHeartImage) { // Ensure the cat-heart image exists
            var maxX = window.innerWidth - catHeartImage.width;
            var maxY = window.innerHeight - catHeartImage.height;

            var randomX = Math.random() * maxX;
            var randomY = Math.random() * maxY;

            catHeartImage.style.transform = `translate(${randomX}px, ${randomY}px)`; // Apply random translation
        }
    }

    // Move the cat-heart image every 100 milliseconds during the rainbow flash
    var moveInterval = setInterval(moveCatHeart, 100); 

    // After 2 seconds, stop the flashing and movement
    setTimeout(function() {
        clearInterval(interval); // Stop flashing
        clearInterval(moveInterval); // Stop moving the cat-heart GIF
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the moving cat-heart.gif
function displayMovingCatHeart() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = ''; // Clear existing content

    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.classList.add('moving-cat'); // Apply CSS class for animation

    imageContainer.appendChild(catHeartImage);

    // Function to randomly move the image around the page
    function moveCatHeart() {
        var maxX = window.innerWidth - catHeartImage.width;
        var maxY = window.innerHeight - catHeartImage.height;

        var randomX = Math.random() * maxX;
        var randomY = Math.random() * maxY;

        catHeartImage.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }

    setInterval(moveCatHeart, 1000); // Move the image every 1 second
}

// Function to make the "No" button move around the page within a small area
function moveNoButton() {
    var noButton = document.getElementById('no-button');
    var areaWidth = 300; // Define width of the small area
    var areaHeight = 150; // Define height of the small area
    var areaX = 50; // X coordinate of the top-left corner of the small area
    var areaY = 50; // Y coordinate of the top-left corner of the small area

    function moveButton() {
        var maxX = areaWidth - noButton.offsetWidth;
        var maxY = areaHeight - noButton.offsetHeight;

        var randomX = Math.random() * maxX + areaX; // Random position within the area
        var randomY = Math.random() * maxY + areaY; // Random position within the area

        noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }

    setInterval(moveButton, 500); // Move the button every 0.5 seconds
}

// Initial display of Rust GIF
displayRust();
