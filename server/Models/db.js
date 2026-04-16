const mongoose = require('mongoose');

const mongo_URL = process.env.MONGO_URI

//connecting to MongoDb 

mongoose.connect(mongo_URL)
.then(() => {
    console.log('MongoDb Connected...')
}).catch(err => console.log('connection error: ', err))