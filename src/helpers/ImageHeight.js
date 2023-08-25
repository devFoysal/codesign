const getImageHeight = (imageUrl, callback) => {
    // Create a new Image object
    const img = new Image();

    // Set the image source to the provided URL
    img.src = imageUrl;

    // Wait for the image to load
    img.onload = function () {
        // Once the image has loaded, access its height
        const height = img.naturalHeight;
        // Call the callback function with the height value
        callback(height);
    };

    // Handle image loading errors
    img.onerror = function () {
        console.error("Error loading image");
        callback(null); // Pass null to indicate an error
    };
}
export default getImageHeight;