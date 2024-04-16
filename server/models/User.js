const mongoose=require('mongoose');
const Repo = require('./Repo');
const userSchema=new mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true,
        },
        lastName:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,
        },
        token:{
            type:String
        },
        repovisited:[
            {
                type:mongoose.Types.ObjectId, 
                ref:Repo
            }
        ],
    }
)

module.exports=mongoose.model("User",userSchema);
