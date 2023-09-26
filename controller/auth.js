const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/user');
// @desc      Register user
// @route     POST /api/v1/auth/register
// @access    Public
exports.register = async (req, res, next) => {
  const { nombre, clave, password, role } = req.body;
  const salt = await bcrypt.genSalt(15);
  let passw = await bcrypt.hash(password, salt);
  console.log(req.body)
  // Create user
  const user = await User.create({
    nombre:nombre,
    clave:clave,
    password:passw,
    role:role
  });
  sendTokenResponse(clave,201,res)
  
}
// @desc      Login user
// @route     POST /api/v1/auth/login
// @access    Public
exports.login = async (req, res, next) => {
  const { clave, password } = req.body;
  console.log(req.body)
  // Validate emil & password
  if (!clave || !password) {
    return res.status(401);
  }

  // Check for user
  const user = await User.find({ clave:clave }).select('password');
  const jwtuser = await User.find({ clave:clave }).select('clave');
  const jwtuserst = jwtuser[0].clave
  console.log(jwtuser)
  if (!user) {
    return res.status(401);
  }

  // Check if password matches
  const isMatch = await bcrypt.compare(password, user[0].password);
  console.log(isMatch)
  if (!isMatch) {
    return res.status(401);
  }
console.log(jwtuserst)
  sendTokenResponse(jwtuserst, 200, res)
}
// @desc      Log user out / clear cookie
// @route     GET /api/v1/auth/logout
// @access    Private
exports.logout = async (req, res, next) => {
  res.cookie('token', 'none', {
    expires: new Date(Date.now() + 10 * 1000),
    
  });

  res.status(200).json({
    success: true,
    data: {}
  });
}
// @desc      Get current logged in user
// @route     POST /api/v1/auth/me
// @access    Private
exports.getMe = async (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  let decoded;
  const token = req.query.token;
  console.log(token)
  const jwtsecret= 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY1NjYxNDE4MCwiaWF0IjoxNjU2NjE0MTgwfQ.k3oi-VVFuWP45NVlPcMdosiyxmYmjK6Olse6UDK679g';

  if (token) {
    try {
      decoded = jwt.verify(token, jwtsecret);

      if (decoded.exp < Date.now() / 1000) {
        // Token expired
        return res.status(401).json({ success: false, message: 'Token expired' });
      }
    } catch (e) {
      console.error(e);
    }
  } else {
    return res.status(401).json({ success: false, message: 'No token provided' });
  }

  if (decoded) {
    const clav = decoded.clave
    console.log(decoded.clave)
    const user = await User.find({ clave: clav });
    console.log(user)

    res.status(200).json({
      success: true,
      data: user
    });

  } else {
    res.status(401).json({ success: false, message: 'Unable to authenticate' });
  }
}
// @desc      Update user details
// @route     PUT /api/v1/auth/updatedetails
// @access    Private
exports.updateDetails = async (req, res, next) => {
  const fieldsToUpdate = {
    nombre: req.body.nombre,
    clave: req.body.clave
  };

  const user = await User.findByIdAndUpdate(req.user.id, fieldsToUpdate, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    data: user
  });
}
exports.getUser = async (req,res,next) => {
  const users = await User.find()
  res.status(200).json({succes:true, data:users})
}
const sendTokenResponse = (user, statusCode, res) => {
  const jwtsecret = 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY1NjYxNDE4MCwiaWF0IjoxNjU2NjE0MTgwfQ.k3oi-VVFuWP45NVlPcMdosiyxmYmjK6Olse6UDK679g'; // Your JWT secret

  // Create token
  const token = jwt.sign({ clave: user }, jwtsecret, {
    expiresIn: '5h',
  });

  const options = {
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    secure: true, // Set the secure flag to true
    httpOnly: true,
    // You can also set the 'sameSite' option to 'None' if needed
  };

  res
    .status(statusCode)
    .cookie('token', token, options)
    .json({
      success: true,
      token,
    });
};

