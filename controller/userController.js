
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

    //Update USERS
router.put("/user/:id", async function (req, res){
  const pass = req.body.password
  if(req.body.userId == req.params.id){
      if(pass){
          const salt = await  bcrypt.genSalt(10);
          pass = await bcrypt.hash(pass, salt)
      }
      try{
          const updatedUser = await User.findByIdAndUpdate(req.params.id, {
              $set: req.body,
          },
              { new : true }
          );
          res.status(200).json({
            message: "User updated successfully",
            updatedUser
        
        })

      }catch(error){
          return res.status(400).json({message: "Updated user not sucessfuly", error})
      }        
  }else{
    
      return res.status(401).json("You can update only your profile")
  }


})    

 module.exports = router;