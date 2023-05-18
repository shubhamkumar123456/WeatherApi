const express=require('express');
const router=express.Router();
const {currentData}=require('../controllers/currentWeather')


router.post('/',currentData)

module.exports=router