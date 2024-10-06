const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'spotify_clone',
    password: ''
});

module.exports = db;
