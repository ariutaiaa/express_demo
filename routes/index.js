const express = require('express');
const router = express.Router();
const fs = require('fs');
const multer = require('multer');

var upload = multer({dest: 'public/uploads/'}); // 文件储存路径
router.post('/image', upload.single('file'), function (req, res, next) {
    let file = req.file;
    fs.renameSync('./public/uploads/' + file.filename, './public/image/' + file.filename + '.png');
    res.json({message: "ok"});
});

module.exports = router;


