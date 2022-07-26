const cookieSession = require('cookie-session');
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const passportSetup = require('./passport')
const dotenv = require('dotenv');
const authRouter = require('./routes/auth');


dotenv.config();

const app = express();

app.use(cookieSession({
    name: 'session',
    keys: ['Camilo'],
    maxAge:  24 * 60 * 60 * 1000,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    method: 'GET, POST, PUT, DELETE',
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use('/auth', authRouter);

app.listen(5000, () => {
    console.log('listening on port 5000');
})