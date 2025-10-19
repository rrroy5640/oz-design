const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  // Ensure this response is in JSON format
  res.json({ message: "Hello from backend!!!!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});