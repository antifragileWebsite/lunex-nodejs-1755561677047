const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
app.get('/', (req, res) => {
  res.send('Hello from Lunex Node.js template with Express!');
});
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});