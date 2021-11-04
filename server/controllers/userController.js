const User = require('../models/userModel');

const userController = {};

userController.createUser = async (req, res, next) => {
  
  const { username, password } = req.body;

  if (!username || !password) {
    return next('invalid entry!');
  }
  try {
    const newUser = await User.create({ username, password });
    res.locals.user = newUser;
    return next();
  } catch (err) {
    res.render('../client/signup', { error: err });
  }
};

userController.verifyUser = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) return next('Missing username or password in userController.verifyUser')
  try {
    const user = await User.findOne({ username });
    if (!user) res.redirect('/signup');
    else {
      try {
        const result = await bcrypt.compare(password, user.password);
        if (!result) res.redirect('/signup');
        else {
          res.locals.user = user;
          return next();        
        } 
      } catch (err) {
        res.redirect('/secret');
        return next('Error in userController.verifyUser: ' + JSON.stringify(err));
      }
    }
  } catch (err) {
    res.redirect('/signup');
    return next('Error in userController.verifyUser: ' + JSON.stringify(err));
  }
};

module.exports = userController;