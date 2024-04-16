const mongoose=require('mongoose');

const repoSchema=new mongoose.Schema({
    reponame:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    stars:{
        type:Number,
        required:true,
        default:0
    },
    forks:{
        type:Number,
        required:true,
        default:0
    },
    openissues:{
        type:Number,
        default:0
    }
})
module.exports = mongoose.model("Repo",repoSchema); 
