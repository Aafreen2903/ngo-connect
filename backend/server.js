const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const bcrypt=require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();


const User=require("./models/User");
const Event=require("./models/Event");
const app=express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://your-project.vercel.app"
    ]
  })
);
app.use(express.json());

mongoose
        .connect(process.env.MONGO_URI)
        .then(()=>{
            console.log("MongoDB Cloud Connected Successfully");
        })
        .catch((error)=>{
            console.log("MongoDB connection failed",error);
        });

app.get("/",(req,res)=>{
    res.send("Backend server is running");
})

app.post("/api/register",async(req,res)=>{
    try{
        const {fullName,email,password}=req.body;
        const exists=await User.findOne({email: email});
        if(exists){
            return res.status(400).json({
                message: "Email already exists",
            });                             
        }
        const hashPassword=await bcrypt.hash(password,10);
        const newUser=new User({
            fullName : fullName,
            email: email,
            password: hashPassword
        });

        await newUser.save();
        res.status(200).json({
            message: "Registration Successful",
        });

    }catch(error){
       res.status(500).json({
        message:"Registration failed",
        error: error.message
       });
    }
})

app.post("/api/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "User not found"
            });
        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid password"
            });
        }

        const token = jwt.sign(
    {
        id: user._id,
        email: user.email
    },
    process.env.JWT_SECRET,
    {
        expiresIn: "7d"
    }
);

    res.status(200).json({
    message: "Login Successful",
    token: token,
    user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email
    }
});

    } catch (error) {
        res.status(500).json({
            message: "Login failed",
            error: error.message
        });
    }
});


app.get("/api/events", async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch events",
            error: error.message
        });
    }
});

app.post("/api/events", async (req, res) => {
    try {
        const { name, description, eventDate, location } = req.body;

        const newEvent = new Event({
            name,
            description,
            eventDate,
            location
        });

        await newEvent.save();

        res.status(201).json({
            message: "Event added successfully",
            event: newEvent
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to add event",
            error: error.message
        });
    }
});

app.put("/api/events/:id", async (req, res) => {
    try {
        const { name, description, eventDate, location } = req.body;

        const updatedEvent = await Event.findByIdAndUpdate(
            req.params.id,
            {
                name,
                description,
                eventDate,
                location
            },
            {
                new: true
            }
        );

        if (!updatedEvent) {
            return res.status(404).json({
                message: "Event not found"
            });
        }

        res.status(200).json({
            message: "Event updated successfully",
            event: updatedEvent
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to update event",
            error: error.message
        });
    }
});


app.delete("/api/events/:id", async (req, res) => {
    try {
        await Event.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Event deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to delete event",
            error: error.message
        });
    }
});
app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}`);
})
