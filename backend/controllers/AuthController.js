const {hashPassword,comparePassword}=require('../helpers/AuthHelper.js');
const jwt=require('jsonwebtoken');
const UserModel = require('../models/UserModel.js');

const RegisterController=async(req,res)=>{
    try{
        const {name,email,password,phone,address}=req.body;
        if(!name || !email || !password || !phone ||!address){
            return res.send({error:'please fill all the field'});
        }
        const User=await UserModel.findOne({email});
        if(User){
            return res.status(200).send({
                success:true,
                message:'Account already exist'
            })
        }
        const hashedPassword=await hashPassword(password);
        const newUser=await new UserModel({name,email,phone,address,password:hashedPassword}).save();
        res.status(201).send({
            success:true,
            message:'User Registered Successfully',
            newUser
        })
    }
    catch(err){
        console.log(err);
    }
}


const LoginController=async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:'Please fill all the field'
            })
        }
        const user=await UserModel.findOne({email});
        if(!user){
            return res.status(200).send({
                success:false,
                message:'Account does not exist'
            })
        }
        const match=await comparePassword(password,user.password);
        if(!match){
            return res.status(200).send({
                success:false,
                message:'Invalid password'
            })
        }
        //Token
        const token=await jwt.sign({_id:user._id},"ksojdl379kdk",{expiresIn:'7d'})
        res.status(200).send({
            success:true,
            message:'Login Successfully',
            user:{
                _id:user._id,
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address
            },
            token
        })
    }
    catch(err){
        console.log(err);
        res.status(500).send({
            success:false,
            message:'Error in login',
            err
        })
    }
}

module.exports={RegisterController,LoginController};
