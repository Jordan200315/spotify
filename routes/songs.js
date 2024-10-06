const express = require('express');
const router = express.Router();
const dan = require('../controllers/songController'); 


router.get('/', dan.index);

router.get('/add', dan.uploadPage);

router.post('/upload', dan.uploadFile);

module.exports = router;