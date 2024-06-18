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

