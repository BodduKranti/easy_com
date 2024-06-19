const express = require('express')
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const multer = require('multer')
const path = require('path');
const router = require('./router/rounter');


app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 8000

// image upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './upload/images')
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

// upload
const upload = multer({ storage });
// Endpoint for file upload
app.use('/images', express.static('upload/images'))
app.post('/upload', upload.single('product'), (req, res) => {
    res.send({
        message: 'File uploaded successfully',
        file: req.file,
        image_url: `http://localhost:${PORT}/images/${req.file.filename}`
    });
});

app.listen(PORT, (error) => {
    if (!error) {
        console.log(`Successfully running on ${PORT}`)
    }
    else {
        console.log('Something went wrong')
    }
})

// routing
app.use('/', router)

