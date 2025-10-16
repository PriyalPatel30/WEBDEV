// let fs=require('fs')

//To create a file
// fs.writeFileSync("index.txt","hellooo")

// //To read a file
// let text=fs.readFileSync("index.txt")
// console.log(text.toString())

// //to append something in a file
// fs.appendFileSync("index.txt","hellooooo")
// text=fs.readFileSync("index.txt")
// console.log(text.toString())             //used.toString()becasue the answer gives in buffer

// //To rename a file
// fs.renameSync("index.txt","index1.txt")
// text=fs.readFileSync("index1.txt")
// console.log(text.toString())

// //To delete a file
// fs.unlinkSync("index1.txt")

// //To check whether the file exist or not
// let res=fs.existsSync("index1.txt")
// console.log(res)


//  11-09-25

// let cors = require("cors")  //importing cors module to avoid cors error   
// let express = require("express");  //applying express framework to make backend coding easier , importing type ka
// let app = express(); //creating an app using express 
// let fs = require("fs");  //importing file system module to perform file operations

// Middleware to parse JSON body

// app.use(express.json());

// app.use(cors())  //using cors module

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.post("/create", (req, res) => {
//     let data = req.body;
//     fs.writeFileSync("index.txt", data.msg);
//     res.send("File created");
// });

// app.patch("/edit", (req, res) => {
//     let dataForEdit = req.body;
//     fs.appendFileSync("index.txt", dataForEdit.msg);
//     res.send("File updated");
// });

// app.delete("/", (req, res) => {
//     fs.unlinkSync("index.txt");
//     res.send("File deleted");
// });

// // Starting the server
// app.listen(4000, () => {
//     console.log('Example app listening on port 4000!');
// });

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });


// import express from "express";
// import cors from "cors";

// const app = express();

// // Middleware
// app.use(cors()); // allow requests from frontend
// app.use(express.json()); // parse JSON body

// // Route to handle form submission
// app.post("/create", (req, res) => {
//   console.log("Data received from frontend:", req.body);

//   // You can access individual fields like this:
//   // console.log("Name:", req.body.name);
//   // console.log("Password:", req.body.password);

//   res.status(200).json({ message: "Data received successfully" });
// });

// // Start server
// const PORT = 4000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });



// 19.09.2025 ==> how to store data in mongodb

let express = require("express")
let bcrypt=  require("bcrypt")
let app = express()
let jwt =  require('jsonwebtoken')
let cors= require('cors')


app.use(express.json())
app.use(cors())
const User= require('./user')
   let mongoose=require("mongoose")
   mongoose.connect("mongodb://127.0.0.1:27017/newDb").then(()=>{
    console.log("db....");
    

   }).catch((err)=>{
    console.log(err);
    

   })
app.get('/', (req, res) => {
  res.send("hello")
})
  
// app.post('/user', async(req,res)=>{
    
//    let {name,email,passWord}= req.body 
//      let userData=    new User({
//         name,
//         email,
//         passWord
//       })
//         await  userData.save()
//         res.send({msg:"user data stored successfully in db "})
          
// })


// 20-09-2025  ==> Authentication, user registration with hashed password

app.post("/signUp",  async(req,res)=>{
    
       let {name,email,passWord,role}=req.body
             
           const existingUser=await  User.findOne({email})
           if(existingUser){
            return res.send({msg:"User already exists"})
           }
           else{
                  let hashedP=await bcrypt.hash(passWord,10)
                  console.log(hashedP);
                 let newUser=new User({
                    name:name,
                    email:email,
                    passWord:hashedP,
                    role:role||"user"
                  })
                  await   newUser.save()
                  res.send({msg:"user registered"} )
                  
           }

})

// rbac : role based access control
          // 1. find user by email
          // 2. if user not found => send user not found
          // 3. if user found => compare the password
          // 4. if password not match => send invalid credentials
          // 5. if password match => send login successful . YAY

app.post("/login", async(req,res)=>{

  let secretKey="JDNFNHIUWHFIWWIU"

  let {email,passWord}=req.body
        
           let user = await User.findOne({email})
           if(!user){
            return res.send({msg:"User not found"})
           }
           else{
            
               let isMatch = await bcrypt.compare(passWord,user.passWord)
               if(!isMatch){
                return res.send("Invalid credentials")
               }
              
              let token = jwt.sign({email:user.email,role:user.role},secretKey)
              console.log(token,"tokennn");
              console.log("user found!");
              
               return res.send(token)

              //  return res.send("Login successfulyyyyy")

           }
}) 

// 29.06.2025 ==> role based authentication
// to create a middleware function to check the role of the user 
// if the role is admin then allow access to the route otherwise deny access

function authorizedRole(requireRole){

  return (req,res,next)=>{
     
     const Token = req.headers.authorization
     console.log(Token,"token from header");
     
     if(!Token){
      return res.send({msg:"Access denied"})
     }
     else{
      let decode=jwt.verify(Token,"JDNFNHIUWHFIWWIU")
      console.log(decode,"code");
      
      if(decode.role!==requireRole){
        return res.send("Insufficient permission")
      }
      else{
        next()
      }
     }
    }
}

app.get("/home", authorizedRole("admin"),(req,res)=>{
  res.send({msg:"This is the home file :D"})
})


app.listen(4000, () => {
  console.log("Server running on port no. 4000");

})

// let express = require('express');
// const connectDB = require('./config/db');
let signUpRoute=require('./router/user')
let loginUpRoute=require('./router/login')
let forgetRouter=require('./router/forget')
let resetRouter=require('./router/reset')

// connectDB()
app.use('/api',signUpRoute)
app.use('/api',loginUpRoute)
app.use('/api',forgetRouter) 
app.use('/api',resetRouter) 


// app.listen(3000,()=>{
//     console.log('server running 3000'); 
// })
