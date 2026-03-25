const {getDatabase} = require('../database/db');
const bcrypt = require('bcrypt');

const createUserDB = async (userData) => {
    const db = getDatabase();
    const {username, email, password, first_name, last_name} = userData;
    const password_hash = await bcrypt.hash(password, 10);
    const result = await db.run(`
        INSERT INTO users (username, email, password_hash, first_name, last_name)
        VALUES (?, ?, ?, ?, ?)
    `, [username.toUpperCase(), email, password_hash, first_name.toUpperCase(), last_name.toUpperCase()]);
    return result.lastID;
};

const getAllUsersDB = async ({search, sort, order}) => {
    const db = getDatabase();
    let query = `SELECT username, email, first_name, last_name, is_active FROM users`;
    const params = [];

    if(search) {
        query += ` WHERE username LIKE ? OR email LIKE ?`;
        params.push(`%${search}%`, `%${search}%`);
    }

    const allowedSortFields = ['username', 'email', 'created_at'];
    if (sort && allowedSortFields.includes(sort)) {
        const sortOrder = order && order=='desc' ? 'DESC' : 'ASC';
        query += ` ORDER BY ${sort} ${sortOrder}`;
    }

    return await db.all(query, params);
};

const getUserByIdDB = async (id) => {
    const db = getDatabase();
    return await db.get(`SELECT id, username, email, first_name, last_name, is_active FROM users WHERE id = ?`, [id]);
};

const getUserByUsernameDB = async (username) => {
    const db = getDatabase();
    return await db.get(`SELECT id, username, email, first_name, last_name, is_active FROM users WHERE username = ?`, [username]);
};

const updateUserDB = async (id, userData) => {
    const db = getDatabase();
    const {username, email, password, first_name, last_name, is_active} = userData; 
    const existingUser = await db.get(`SELECT username, email, password_hash, first_name, last_name, is_active FROM users WHERE id = ?`, [id]);
   
    if (!existingUser) {
        throw new Error('User not found');
    }   

    const password_hash = password ? await bcrypt.hash(password, 10) : existingUser.password_hash;

    const updatedUser = {
        username: username || existingUser.username,
        email: email || existingUser.email, 
        password_hash: password_hash || existingUser.password_hash,
        first_name: first_name || existingUser.first_name,
        last_name: last_name || existingUser.last_name,
        is_active: typeof is_active === 'number' ? is_active : existingUser.is_active
    };
    await db.run(`
        UPDATE users    
        SET username = ?, email = ?, password_hash = ?, first_name = ?, last_name = ?, is_active = ?
        WHERE id = ?
    `, [updatedUser.username, updatedUser.email, updatedUser.password_hash, updatedUser.first_name, updatedUser.last_name, updatedUser.is_active, id]);
    return;
};

const deleteUserDB = async (id) => {
    const db = getDatabase();
    await db.run(`DELETE FROM users WHERE id = ?`, [id]);
};

module.exports = {
    createUserDB,
    getAllUsersDB,
    getUserByIdDB,
    getUserByUsernameDB,
    updateUserDB,
    deleteUserDB
};  