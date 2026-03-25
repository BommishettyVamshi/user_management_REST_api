const {
  CreateUser,
  getUsers,
  getUser,
  updateUserInfo,
  deleteUserById,
} = require("../services/userService");

const registerUser = async (req, res) => {
  try {
    const userData = req.body;
    const newUser = await CreateUser(req.body); 
    res.status(201).json({ message: 'User created successfully', data: { id: newUser } });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(409).json({ error: error.message });
  } 
};

const getAllUsers = async (req, res) => {
  try {
    const { search, sort, order } = req.query;
    const users = await getUsers(search, sort, order);
    res.status(200).json({ message: 'Users fetched successfully', data: users });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: error.message });
  }
};


const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;   
    const user = await getUser(userId);
    res.status(200).json({message: 'User fetched successfully', data: user });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(404).json({ error: error.message });
  } 
};  

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const userData = req.body;
    const updatedUser = await updateUserInfo(userId, userData);
    res.status(200).json({message: 'User updated successfully', data: updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(404).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;   
    await deleteUserById(userId);
    res.status(204).json({message: 'User deleted successfully' });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  registerUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};