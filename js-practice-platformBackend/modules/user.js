const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        minLength: 6,
        required: true
    }
});

userSchema.pre("save", async function(next)
{
    try {
        let salt = bcrypt.genSaltSync(10);
        this.password = bcrypt.hashSync(this.password, salt);
        next();
    } catch (error) {
        console.log("error at password bcrypt", error);
        next(error);
    }
});

userSchema.methods.generateToken = async function()
{
    try {
        return jwt.sign({
            fullname: this.fullname,
            email: this.email
            },
            process.env.SECRET,
            {
                expiresIn: "15d"
            }
        );
    } catch (error) {
        console.log("error occured at module", error);
        return error;
    }
}

const user = mongoose.model("user", userSchema);

module.exports = user;