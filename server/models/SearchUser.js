const mongoose=require("mongoose");

const searchUserSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true,
    },
    repositories:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Repo",
        }
    ]
    })

module.exports=mongoose.model('SearchUser',searchUserSchema) ;