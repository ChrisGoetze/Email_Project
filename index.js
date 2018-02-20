const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();


// clientID 532143248303-2rvqqs3onhp33pp1df9bupi1a06tts02.apps.googleusercontent.com
// clientSecret PP3TBL2R3RbVkkGWZ0m6AaC9
passport.use(new GoogleStrategy());


const PORT = process.env.PORT || 5000;

app.listen(PORT);