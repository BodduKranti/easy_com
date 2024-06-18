const mongoose = require('mongoose');
require('dotenv').config();

const DB = process.env.MONGODB_URL
mongoose.connect(DB)
    .then(() => console.log("Database is connected"))
    .catch((error) => console.log(error))



// const mongoose = require('mongoose');
// require('dotenv').config()

// const DB = process.env.MONGODB_URL

// mongoose.connect(DB)
//     .then(() => console.log("Database is connected"))
//     .catch((error) => console.log(error))