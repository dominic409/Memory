import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/posts.js" 

const app= express();
dotenv.config();
// general setup.....
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/posts', router)
// now time to connect our server application to real ddatabase... for that we are gonna use mongodb

app.get('./', (req, res) => {
    res.send('Hello to Memories api')
})

const PORT= process.env.PORT || 5000

mongoose.connect(process.env.CONNECT_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`)))    // if it is succesfull then
.catch((error)=>console.log(error.message))

mongoose.set('useFindAndModify', false)