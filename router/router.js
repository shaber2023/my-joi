const express = require('express');
const Joi = require('joi');
const { register, login } = require('../controller');
const { ranvalidation } = require('../validator');
const { schema } = require('../validator/schema');



const router = express.Router();

router.post('/register',ranvalidation(schema.register),register)

router.post('/login',ranvalidation(schema.login),login)

module.exports=router