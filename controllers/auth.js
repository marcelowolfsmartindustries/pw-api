const bcrypt = require('bcryptjs/dist/bcrypt');
const authenticateUtil = require('../utils/authenticate.js');
const apiResponse = require('../utils/apiResponse.js');
const User = require('../data/entities/user');

exports.signin = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({
    where: {
      username: username,
    }
  })

  if (user) {
    var passwordIsValid = bcrypt.compareSync(
      password,
      user.password
    );

    if (passwordIsValid) {
      const userId = user.id;
      const userName = user.name;
      const accessToken = authenticateUtil.generateAccessToken({ userId, userName });
      const response = apiResponse.createModelRes(200, 'ok', { userId, userName, accessToken });
      return apiResponse.send(res, response);
    }
  }

  return apiResponse.unauthorized(res, "api_error_not_authorized");
};


exports.signup = async (req, res) => {
  const { name, username, password, isActive } = req.body;

  const userExists = await User.findOne({
    where: {
      username: username,
    }
  })

  if (userExists) {
    const response = apiResponse.createModelRes(500, 'user_exists', { });
    return apiResponse.send(res, response);
  }

  await User.create({
    name: name,
    username: username,
    password: bcrypt.hashSync(password, 8),
    isActive: isActive
  });

  return this.signin(req, res);
};