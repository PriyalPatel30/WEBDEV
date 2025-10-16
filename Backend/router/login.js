const User = require("../models/userModel");
const router = require("../router/user");
let jwt =require('jsonwebtoken')
let bcrypt=require('bcrypt')
router.post('/login', async(req,res)=>{
    let loginData=req.body
     let data = await User.findOne({email:loginData.email})
     console.log(data,"dataaa");
     
     if(data){
                 let validPass = await bcrypt.compare(loginData.passWord,data.passWord)
                 if(validPass){
                       let token = jwt.sign({email:data.email,role:data.role},'txteswcacgraekab',{expiresIn:'1h'})
                       console.log(token);
                       
                   return res.status(200).send(token)
                 }
                 else{
                    res.send('Invalid Password, Pls try again !')
                 }
     }
     else{
        res.send('Create an account first !')
     }
   }
)

module.exports=router