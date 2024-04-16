const express=require('express');
const app=express();
const dotenv=require('dotenv');
dotenv.config();
const PORT=process.env.PORT;
const userRoutes=require('./routes/User')
const searchUserRoute=require('./routes/SearchUser')
const repoRoute=require("./routes/Repo")
const database=require("./config/database");
database.connect();


app.use(userRoutes);
app.use(searchUserRoute);
app.use(repoRoute);


app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
})
