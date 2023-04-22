var multer = require('multer');
 const uuidv4 = require('uuid/v4')
 const os = require("os")
const dir = os.homedir() +'/Documents/Software Unique Ariquitectura/bc/uploads'
  
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,dir );
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, fileName)
    }
});
var upload = multer({
    storage: storage,
    
});

module.exports = upload