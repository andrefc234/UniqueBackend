const multer = require('multer');

// Define storage options for multer
const storage = multer.memoryStorage(); // Store the file in memory as a Buffer
const upload = multer({ storage: storage });

module.exports = {
  upload,
};
