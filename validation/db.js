const mongoose = require("mongoose")
module.exports = () => {
    return mongoose.connect(
        "mongodb+srv://ganesh:ganesh@cluster0.jtc0k.mongodb.net/validation?retryWrites=true&w=majority"
        )
}