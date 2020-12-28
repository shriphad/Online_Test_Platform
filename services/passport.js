const passport = require('passport');
const TeacherUser = require('../models/ModelTeacher');
const User1 = require('../models/ModelLogin');
const config = require('../config.js');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

//Create local strategy
const localOptions = {
	usernameField: 'email'
};

passport.use("teacher", new LocalStrategy(localOptions, function (email, password, done) {
	//Verify this email and password, call done with the user
	//if it is the correct email and password
	//otherwise, call done with false
	TeacherUser.findOne({ email: email }, function (err, user) {
		if (err) { return done(err); }
		if (!user) { return done(null, false); }

		//compare passwords - is password equal to user.password?
		user.comparePassword(password, function (err, isMatch) {
			if (err) { return done(err); }
			if (!isMatch) { return done(null, false); }
			return done(null, user);
		})

	});
}));

//Setup options foor JWT Strategy
const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: config.secret
};

//Create JWT Strategy
passport.use(new JwtStrategy(jwtOptions, function (payload, done) {
	//See if the user ID in the payload exists in our database
	//If it does, call 'done' with that user
	//otherwise, call done without a user object
	TeacherUser.findById(payload.sub, function (err, user) {
		//second argument is user object if we found one
		if (err) { return done(err, false); }

		if (user) {
			done(null, user);
		} else {
			done(null, false);
		}
	});
}));




//customer
passport.use("student", new LocalStrategy(localOptions, function (email, password, done) {
	//Verify this email and password, call done with the user
	//if it is the correct email and password
	//otherwise, call done with false
	User1.findOne({ email: email }, function (err, user) {
		if (err) { return done(err); }
		if (!user) { return done(null, false); }

		//compare passwords - is password equal to user.password?
		user.comparePassword(password, function (err, isMatch) {
			if (err) { return done(err); }
			if (!isMatch) { return done(null, false); }
			return done(null, user);
		})

	});
}));

