const express = require('express');
const connectDB=require('./conn/db.js');
const cors=require('cors');
const AuthRoute=require('./Routes/AuthRoute.js');
const app=express();
connectDB();

app.use(express.json(
    {
        origin:["https://crud-frontend-app.vercel.app"],
        methods:["POST","PUT","DELETE","GET"],
        credentials: true
    }
));
app.use(cors());

app.use('/api/auth',AuthRoute);


app.listen(5000,()=>{
    console.log('Application running on port 5000');
})
