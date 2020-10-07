  
const express = require('express');
const router = express.Router();
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + '.jpg')
    }
});
      
var upload = multer({ storage: storage }).single('profileImage');

router.post('/', (req, res) => {
    res.json('profile post is working');

    upload(req, res, (err) => {
        if (err) {
            // if error occurs
            console.log('error occured');
        }
        console.log('Working Successful');
    });
})

router.get('/', (req, res) => {
    res.json('profile is working');
});

module.exports = router;
