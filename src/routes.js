const express = require('express');
const jwt = require('jsonwebtoken');

const authMiddleware = require('./auth');

const router = express.Router();

router.post('/authenticate', (req, res) => {
  
  const {login,password} = req.body
  const user = {
    id: 1,
    email: 'vitor@vitor.com',
    password: 'senhafoda'
  };

 
  if(login === user.email && password === user.password){
    return res.json({
      token: jwt.sign(user, 'PRIVATEKEY'),
    });
  }else{
    res.status(200).send("login failed")
  }

 
});

/**
 * Private route
 */


module.exports = router;
