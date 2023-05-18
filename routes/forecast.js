const express=require('express');
const router=express.Router();
const {getData}=require('../controllers/forecast')

router.post('/',getData);


module.exports=router