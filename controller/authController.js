
const User = require('../models/User');
const bcrypt = require('bcrypt');
var router = require("express").Router();


//Get USERS
router.get('/users', async function(req,res) {
  try{
    const user = await User.find();
    return res.json(user)
  }catch(err){
    return res.status(400).json({ error: 'Error loading users' })
  }
});

//Register API
 router.post('/register', async function (req, res) { 
   try{

     const salt = await bcrypt.genSalt(10);
     const hashPass = await bcrypt.hash(req.body.password, salt)
     const newUser = await new User({
       username: req.body.username,
       email: req.body.email,
       password: hashPass
     });
     const user = await newUser.save();
      return res.status(200).json({ message: 'User creater successfully ', user})
    }catch(error){
      return res.status(500).json(error);
    }
    });    

    //Sign In App
    router.post('/login', async function(req,res) {
      try{
        const user = await User.findOne({ email: req.body.email});
        !user && res.status(400).json("Wrong at credentials ")
        
        const validated = await bcrypt.compare(req.body.password, user.password)
        !validated && res.status(422).json("Incorret Passowdord")

        const { password, ...others} = user._doc;//Don't send passowrd
        res.status(200).json(others)

      }catch(error){
        return res.status(500).json({ message: 'Login Failure, please reviwew your credentials'})
        
      }
    });

 module.exports = router;