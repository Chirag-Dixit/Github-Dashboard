const express=require('express');
const router=express.Router();
const auth=require("../middleware/auth");
const {searchUsers}=require('../contollers/SearchUser');

router.post("/lobby",auth,searchUsers);
module.exports=router;