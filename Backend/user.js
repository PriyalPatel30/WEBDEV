// 19.09.2025 ==> how to store data in mongodb 
let mongoose=  require("mongoose")

let userSchema=  new mongoose.Schema({
    name:String,
    email:String,
    passWord:String,
    // role declartion for user and admin 
    // now by default every user will be user only,admin will be created manually in db
    // role will have two values user and admin
    // enum will restrict the values of role to only user and admin,if we try to set role to any other value it will throw an error

    // 26.06.2025 ==> role based authentication
    
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    }

})

 let User=mongoose.model("User",userSchema)

 module.exports=User;  