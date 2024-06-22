const mongoose = require("mongoose");

require('dotenv').config();
DATABASE_URL ="mongodb+srv://raunak_jain21:dILNXmDaAKAYBXNo@cluster0.gy3uoij.mongodb.net/"
const connectDB = () => {
    // console.log(process.env.DATABASE_URL);
    mongoose.connect(DATABASE_URL, {
        useUnifiedTopology:true,
        useNewUrlParser: true,

    })
    .then(() => console.log("DB ka Connection is Successful"))
    .catch( (error) => {
        console.log("Issue in DB Connection");
        console.error(error.message);
        //iska matlab kya h ?
        process.exit();
    } );
}

module.exports = connectDB;