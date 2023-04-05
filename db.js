const mongoose = require('mongoose');
require("dotenv").config()

// const mongoURI = process.env.MONGO_URL;
// const mongoURI = 'mongodb://127.0.0.1:27017/inotebook';
const mongoURI = "mongodb+srv://fayzanrj786:a4b65595@cluster0.k5kzu9p.mongodb.net/?retryWrites=true&w=majority"

const connectToMongo = async ()=>{
    mongoose.connect(mongoURI).then(()=>{
        // console.log('connected')
    }).catch((err)=>{
        // console.log("err")
    })
}

module.exports = connectToMongo;
