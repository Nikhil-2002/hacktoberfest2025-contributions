require("dotenv").config();

const express = require("express")
const app = express();
const port = process.env.PORT;
const mongoose = require("mongoose");
const user = require("./modules/user");
const cors = require("cors");
const bcrypt = require("bcrypt");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors(
    {
        origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    }
));

async function main()
{
    mongoose.connect(process.env.MONGODB_URL)
}

main().then(()=>
{
    console.log("Successfully connected to mongodb");
}).catch((err)=>console.log(err));

app.get("/", (req, res)=>
{
    res.send("hi 8080");
});

app.post("/signup", async(req, res)=>
{
    try {
        let {fullname, email, password} = req.body;
        console.log("hi", fullname, email);
        if(fullname.length <=0 || email.length <=0 || password <=0)
        {
            return res.json(422).json({message: "Some information is missing"});
        }
        else
        {
            let checkUser = await user.find({email});
            // console.log(checkUser)
            if(checkUser.length)
            {
                return res.status(409).json({ message: "user already exist with this email" });
            }

            let newUser = new user({
                fullname,
                email,
                password
            });

            let newUs = await newUser.save();
            console.log(newUs);
            res.status(201).json({ message: "User registered successfully", token: await newUser.generateToken(), user: newUs });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
});

app.post("/login", async(req, res)=>
{
    try {
        let {email, password} = req.body;
        console.log("hi", email);
        if(email.length <=0 || password.length <=0 )
        {
            return res.status(422).json({ message: "Some information is missing" });
        }
        else
        {
            let checkUser = await user.findOne({email});
            if(checkUser)
            {   console.log(checkUser);
                const match = await bcrypt.compare(password+"", checkUser.password+"");
                if(match)
                {
                    return res.status(200).json({ message: "Login Successfully", token: await checkUser.generateToken(), user: checkUser });
                }
                else
                {
                    return res.status(401).json({ message: "email or password is incorrect" });
                }
            }
            else
            {
                return res.status(401).json({ message: "email or password is incorrect" });
            }
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
})

app.listen(port, ()=>
{
    console.log("Successfully connected at port:", port);
});
