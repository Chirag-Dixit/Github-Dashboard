const express=require('express');
const router=express.Router();
const auth=require("../middleware/auth");
const {repo}=require('../contollers/Repo');

router.post("/demo",repo);
module.exports=router;