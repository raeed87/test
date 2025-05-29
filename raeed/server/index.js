import express from 'express'
import mongoose from 'mongoose';
const app = express();
const PORT=5000
const MONGO_URI="mongodb+srv://admin:admin@cluster0.8jo4ta9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
app.get('/',(req,res)=>{
    res.send("backend running")
})
app.listen(PORT,()=>{
    console.log(`server started click http://localhost:${PORT}/`);
})
mongoose.connect(MONGO_URI)
.then(()=>
{console.log("Mongo URI connected")

})
.catch(()=>{console.log ( "DB connection error")
})
const userScheme = new mongoose.Schema({
    name :String ,
    email:String
})
const user = mongoose.model('Users',userScheme);
app.post('/users',async(req,res)=>{
    try{
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).send("user created");
    }
    catch(err){
        res.status(400).send("error:"+err);
    }

    
})