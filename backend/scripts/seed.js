const {initializeDatabase} = require('../src/database/db');
const bcrypt = require('bcrypt');

const dummyUsers = {
    users: [
        {
            username: 'john_doe',
            email: 'john.doe@example.com',
            password_hash: '$2b$10$example_hash', // Replace with actual hashed password
            first_name: 'John',
            last_name: 'Doe',
            is_active: 1
        },
        {
            username: 'jane_smith',
            email: 'jane.smith@example.com',
            password_hash: '$2b$10$example_hash', // Replace with actual hashed password
            first_name: 'Jane',
            last_name: 'Smith',
            is_active: 1
        },
        {
            username: 'alice_jones',
            email: 'alice.jones@example.com',
            password_hash: '$2b$10$example_hash', // Replace with actual hashed password
            first_name: 'Alice',
            last_name: 'Jones',
            is_active: 1
        }
    ]
};  

const seedDatabase = async () => {
    try {
        const db = await initializeDatabase();
        for (const user of dummyUsers.users) {
            user.password_hash = await bcrypt.hash(user.password_hash, 10);
            await db.run(`
                INSERT INTO users (username, email, password_hash, first_name, last_name, is_active)
                VALUES (?, ?, ?, ?, ?, ?)
            `, [user.username, user.email, user.password_hash, user.first_name, user.last_name, user.is_active]);
        }
    } catch (error) {
        console.error('Error seeding database:', error);
    }
}

seedDatabase().then(() => {
    console.log('Database seeded successfully');
    process.exit(0);
}).catch((error) => {
    console.error('Error seeding database:', error);
    process.exit(1);
});