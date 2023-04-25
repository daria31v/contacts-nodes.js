const {Schema, model} = require("mongoose");

const contactSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    number: {
        type: Number,
        require: true
    }
})

const Contact = model("contact", contactSchema)




model.exports = {Contact};