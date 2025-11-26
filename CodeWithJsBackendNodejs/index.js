require("dotenv").config();

const express = require("express");
const app = express();
const port = 8060;
const mongoose = require("mongoose");
const cors = require("cors");
const user = require("./modules/User");
const bcrypt = require("bcrypt");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(
    {
        origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    }
));

async function main() {
    mongoose.connect(process.env.MONGODB_URL);
}

main().then(() => {
    console.log("successfully connected to mongodb");
}).catch((err) => console.log("Some error occued on connection with db: ", err));

app.post("/signup", async (req, res) => {
    try {
        let { firstname, lastname, email, password } = req.body;
        if (firstname.length <= 0 || lastname.length <= 0 || email.length <= 0 || password.length <= 0) {
            return res.status(422).json({ message: "Some information is missing" });
        }

        let checkUser = await user.find({ email });

        if (checkUser.length) {
            return res.status(409).json({ message: "user already exist with this email" });
        }

        const newUser = new user({
            firstname,
            lastname,
            email,
            password
        });

        let usrsave = await newUser.save();
        console.log(usrsave)

        res.status(201).json({ message: "User registered successfully", token: await newUser.generateToken() });
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

app.post("/login", async (req, res) => {

    try {
        let { email, password } = req.body;

        if (email.length <= 0 || password.length <= 0) {
            return res.status(422).json({ message: "Some information is missing" });
        }

        let checkUser = await user.findOne({ email });
        console.log(checkUser);
        if (checkUser) {
            const match = await bcrypt.compare(password, checkUser.password);
            if (match) {
                return res.status(200).json({ message: "Login Successfully", token: await checkUser.generateToken() });
            }
            else {
                return res.status(401).json({ message: "email or password is incorrect" });
            }
        }
        else {
            return res.status(401).json({ message: "email or password is incorrect" });
        }
    } catch (error) {
        res.status(500).json({ message: error });
    }
})

app.get("/", (req, res) => {
    res.send("hi 8060");
})

app.listen(port, () => {
    console.log("successfully connected at port:", port);
})