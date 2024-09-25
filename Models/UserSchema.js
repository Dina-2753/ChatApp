const mongoose = require("mongoose");

// Define user schema
const userSchema = new mongoose.Schema({
    name: String,
    phoneNumber: String,
    email: String,
    password: String,
    role: String,

});



const User = mongoose.model("User", userSchema);

module.exports = User;