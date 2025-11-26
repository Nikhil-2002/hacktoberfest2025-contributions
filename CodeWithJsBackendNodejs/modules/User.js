const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        minLength: 8,
        maxLength: 50,
        required: true
    }
});

userSchema.pre("save", async function(next)
{
    try {
        const salt = bcrypt.genSaltSync(10);
        this.password = bcrypt.hashSync(this.password, salt);
        next();
    } catch (error) {
        console.log("error occured at modules password :", error);
        next(error);
    }
});

userSchema.methods.generateToken = async function()
{
    try {

        return jwt.sign(
            {
                id: this._id,
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email
            },

            process.env.SECRET,

            {
                expiresIn: "15d"
            }
        );
        
    } catch (error) {
        console.log("error occued at token generation:", error);
    }
}

const user = mongoose.model("user", userSchema);

module.exports = user;