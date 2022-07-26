const passport = require('passport');

const loginRouter = require('express').Router();

const CLIENT_URL = 'http://localhost:3000/';

loginRouter.get('/login/success',  (req, res) => {
    if(req.user){
        res.status(200).json({
            success: true,
            message: 'Success!',
            user: req.user
        });
    }
});

loginRouter.get('/login/error', (req, res) =>  {
    res.status(401).json({
        success: false,
        message: 'Error!',
    });
});

loginRouter.get('/logout', (req, res) => {
    req.logout();
    res.redirect(CLIENT_URL);
});

loginRouter.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

loginRouter.get('/google/callback', passport.authenticate('google', {successRedirect: CLIENT_URL, failureRedirect: '/login/error'}));

module.exports = loginRouter;