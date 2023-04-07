const Joi = require("joi");

const register=(req,res)=>{
    try {
        const user={name,email,password}=req.body;
        res.status(201).json({user})
    } catch (error) {
       res.status(404).json({error:error})
    }
}

const login=(req,res)=>{
    try {
        const user = {email,passwor}=req.body
        res.status(200).json({message:'user is login',user})
    } catch (error) {
        res.status(404).json({error:error})
    }
}

module.exports={register,login}