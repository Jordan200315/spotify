const db = require('../config/db');

const getAllSongs = (callback) => {
    const sql = 'SELECT * FROM dansong';
    db.query(sql, (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
    });
};

const saveSong = (fileName, filePath, callback) => {
    const sql = 'INSERT INTO dansong (file_name, file_path) VALUES (?, ?)';
    db.query(sql, [fileName, filePath], (err, result) => {
        if (err) return callback(err, null);
        callback(null, result);
    });
};

module.exports = {
    getAllSongs,
    saveSong
};
