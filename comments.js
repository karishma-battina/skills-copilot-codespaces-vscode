// Create web server
// 1. Create a new folder called "public"
// 2. Create a new file called "index.html" inside "public" folder and add some HTML content
// 3. Create a new file called "comments.html" inside "public" folder and add some HTML content
// 4. Add a new route to serve the "public" folder at "/public"
// 5. Access the HTML content in the browser
// 6. Add a new route to serve the "public/comments.html" at "/comments"
// 7. Access the HTML content in the browser
// 8. Add a new route to serve the "public/index.html" at "/"
// 9. Access the HTML content in the browser

const express = require('express');

const app = express();

app.use('/public', express.static('public'));

app.get('/comments', (req, res) => {
    res.sendFile(__dirname + '/public/comments.html');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});