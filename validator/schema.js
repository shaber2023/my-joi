const Joi = require('joi');

exports.schema={
    register : Joi.object({
        name : Joi.string().min(5).max(15).required(),
        email: Joi.string().email().required(),
        password : Joi.string().min(6).max(18).required()
    }),
    login : Joi.object({
        email : Joi.string().email().required(),
        password : Joi.string().min(6).max(12).required()     
   })
}
  

