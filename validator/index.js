const Joi = require("joi");

exports.ranvalidation=(schema)=>{
    return (req,res,next)=>{
       const {error} = schema.validate(req.body,{abortEarly:false,errors:{wrap:{label:""}}})
       if(error){
        const myerror = error.details.map((err)=>err.message);
        return res.status(201).json({myerror})
       }
       next()
    }
}