const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Home Route (Serves index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
