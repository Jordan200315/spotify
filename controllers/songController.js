const multer = require('multer');
const path = require('path');
const danModel = require('../models/model'); 

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/'); 
    },
    filename: (req, file, cb) => {
        const newFileName = `${Date.now()}_${file.originalname}`; 
        cb(null, newFileName);
    }
});

const upload = multer({ storage: storage }).single('mp3file');

const dan = {

    index: (req, res) => {
        danModel.getAllSongs((err, results) => {
            if (err) throw err;
            res.render('index', { files: results }); 
        });
    },

    uploadPage: (req, res) => {
        res.render('upload');
    },

    uploadFile: (req, res) => {
        upload(req, res, function (err) {
            if (err) {
                return res.status(400).send('Error uploading file.');
            }
            if (!req.file) {
                return res.status(400).send('No file uploaded.');
            }

            const fileName = req.file.filename;
            const filePath = `/uploads/${req.file.filename}`;
            danModel.saveSong(fileName, filePath, (err, result) => {
                if (err) throw err;
                res.redirect('/'); 
            });
        });
    }
};

module.exports = dan;