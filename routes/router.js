const express = require('express');
const passport = require('passport');
const Authentication = require('../controllers/authentication');
const router = express.Router();
const ModelLogin = require('../models/ModelLogin');



router.get('/secret', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({ authorization: true });
});

router.post('/signin', passport.authenticate('local', { session: false }), Authentication.signin);

router.post('/signup', Authentication.signup);

router.post('/Usersignup', Authentication.Usersignup);
router.post('/Usersignin', passport.authenticate('local', { session: false }), Authentication.Usersignin);


module.exports = router;
