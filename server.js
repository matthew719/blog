const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const port = 3019

const app = express();
app.use(express.static(__dirname))
app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb+srv://matthewtem12:qVuWEUJEjeiaCYUs@cluster0.lcahr.mongodb.net/')
const db = mongoose.connection
db.once('open',()=>{
    console.log("Mongodb connection successful")
})

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    username:String
})

const Users = mongoose.model("data",userSchema)

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'signup.html'))
})

app.post('/post',async (req,res)=>{
    const {name,email,username} = req.body
    const user = new Users({
        name,
        email,
        username
    })
    await user.save()
    console.log(user)
    res.send("You are signed up!")
})

app.listen(port,()=>{
    console.log("Server started")
})