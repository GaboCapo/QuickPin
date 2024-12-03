// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function () {
    // Get references to the input field and buttons
    const urlInput = document.getElementById('urlInput');
    const pinButton = document.getElementById('pinButton');
    const installButton = document.getElementById('installButton');
    const message = document.getElementById('message');

    // Function to create a shortcut for the entered URL
    pinButton.addEventListener('click', function () {
        const url = urlInput.value.trim(); // Get the trimmed URL from the input field

        // Validate the URL format
        if (isValidUrl(url)) {
            // Create a shortcut using the Chrome API
            chrome.tabs.create({ url: url, active: true }, function (tab) {
                // Show a success message
                message.textContent = 'Shortcut created successfully!';
            });
        } else {
            // Show an error message if the URL is invalid
            message.textContent = 'Please enter a valid URL.';
        }
    });

    // Function to install the website (this can be customized as needed)
    installButton.addEventListener('click', function () {
        const url = urlInput.value.trim(); // Get the trimmed URL from the input field

        // Validate the URL format
        if (isValidUrl(url)) {
            // Create a shortcut using the Chrome API
            chrome.tabs.create({ url: url, active: true }, function (tab) {
                // Show a success message
                message.textContent = 'Website installed successfully!';
            });
        } else {
            // Show an error message if the URL is invalid
            message.textContent = 'Please enter a valid URL.';
        }
    });

    // Function to validate the URL format
    function isValidUrl(url) {
        // Regular expression to validate the URL
        const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z0-9](?:[a-z0-9-]*[a-z0-9])?)\\.)+[a-z]{2,}|' + // domain name
            'localhost|' + // localhost
            '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}|' + // IP address
            '\$?[a-f0-9]*:[a-f0-9:%.~+\\/?=\$\$]*\$)' + // IPv6
            '(\\:\\d+)?(\\/[-a-z0-9+&@#/%?=~_|!:,.;]*)*' + // path
            '(\\?[;&a-z0-9+%#=~_|!:,.;]*)?' + // query string
            '(\\#[-a-z0-9+&@#/%=~_|!:,.;]*)?$', 'i'); // fragment locator
        return !!pattern.test(url); // Return true if the URL matches the pattern
    }
});