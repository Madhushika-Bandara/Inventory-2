const express = require('express');
const router = express.Router();
const Item =  require("../models/Item");
const validateAddInput = require("../validation/addValidation");

// @route   GET /api/auth/test
// @desc    Test the auth route
// @access  Public
router.get("/test",(req,res)=>{
    res.send("Auth route working");
});

// @route   POST /api/auth/add
// @desc    create a item
// @access  Public
router.post("/add",async(req,res)=> {
    try{

        const {errors, isValid} = validateAddInput(req.body);

        if(!isValid){
            return res.status(400).json(errors);
        }

        //check for existing item
        const existingName = await Item.findOne({
            name: new RegExp ("^" + req.body.name + "$", "i"),
        });

        if(existingName){
            return res
            .status(400)
            .json({error: 'This item already exists'});
        }

        //create a new item
        const newItem = new Item({
            name: req.body.name,
            quantity: req.body.quantity
        });

        //save to the database
        const savedItem = await newItem.save();

        //return new item
        return res.json(savedItem);

    }catch(err){
        console.log(err);
        res.status(500).send(err.message);
    }
}
)
    
module.exports =  router;