const {getUserByIdDB, getUserByUsernameDB, createUserDB, updateUserDB, deleteUserDB, getAllUsersDB} = require('../models/userModel');

const CreateUser = async (userData) => {
    const existingUser = await getUserByUsernameDB(userData.username);    
    if (existingUser) {
        throw new Error('Username already exists');
    }
    return await createUserDB(userData);
};

const getUsers = async (search, sort, order) => {
    return await getAllUsersDB({search, sort, order});
}

const getUser = async (id) => {
    const user = await getUserByIdDB(id);
    if (!user) {
        throw new Error('User not found');
    }
    return user;    
};

const updateUserInfo = async (id, userData) => {
    await updateUserDB(id, userData);
    return await getUserByIdDB(id);
}

const deleteUserById = async (id) => {
    const user = await getUserByIdDB(id);
    if (!user) {
        throw new Error('User not found');
    }
    await deleteUserDB(id);
    return;
}

module.exports = {
    CreateUser,
    getUsers,   
    getUser,
    updateUserInfo,
    deleteUserById
};  

