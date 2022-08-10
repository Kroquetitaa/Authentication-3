const User = require("./user.model");
const bcrypt = require("bcrypt");
const { createToken } = require("../../helpers/utils/token-action");
const { setError } = require("../../helpers/utils/error");



const userById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (id != req.user.id) return next(setError(403, "Forbidden"));
    const user = await User.findById(id);
    if (!user) return next(setError(404, "User not found"));
    return res.status(200).json(user);
  } catch (error) {
    return next(setError(500, error.message || 'Failed recover User'));
  }
}


const register = async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    const emailExist = await User.findOne({ email: newUser.email });
    const usernameExist = await User.findOne({ username: newUser.username });
    if (emailExist || usernameExist) return next(setError(409, "This Email || Username already exist"));
    const userInDb = await newUser.save();
    res.status(201).json(userInDb);

  } catch (error) {
    return next(setError(500, error.message || 'Failed create User'));
  }
}

const login = async (req, res, next) => {
  try {
    const userInDb = await User.findOne({ email: req.body.email });
    if (!userInDb) return next(setError(404, "User not found"));

    if (bcrypt.compareSync(req.body.password, userInDb.password)) {
      const token = createToken(userInDb._id, userInDb.email);
      return res.status(200).json({ userInDb, token })
    } else {
      return next(setError(401, "Invalid Password"));
    }
  } catch (error) {
    return next(setError(500, error.message || 'Unexpected error login'));
  }
}


const update = async (req, res, next) => {
  try {
    const { id } = req.params.id;
    const user = new User(req.body);
    user._id = id;
    const updatedUser = await User.findByIdAndUpdate(id, user);
    if (!updatedUser) return next(setError(404, 'User not found'));
    return res.status(201).json({
      message: 'Updated User',
      updatedUser
    })

  } catch (error) {
    return next(setError(500, error.message | 'Failed updated user'));
  }
}


const remove = async (req, res, next) => {
  try {
    const { id } = req.params.id;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) return next(setError(404, 'User not found'));
    return res.status(200).json({
      message: 'Delete User',
      deletedUser
    })
  } catch (error) {
    return next(setError(500, error.message | 'Failed deleted user'));
  }
}

module.exports = { register, login, userById, update, remove };