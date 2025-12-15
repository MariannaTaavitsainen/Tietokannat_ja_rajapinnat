// models/user_model.js
const db = require('../database');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

const user = {
  getAll: function(callback) {
    return db.query('SELECT * FROM user', callback);
  },

  getOne: function(id, callback) {
    return db.query('SELECT * FROM user WHERE idUser=?', [id], callback);
  },

  getByUsername: function(username, callback) {
    return db.query('SELECT * FROM user WHERE username=?', [username], callback);
  },

  add: function(newUser, callback) {
    // Kryptataan salasana ennen tallennusta
    bcrypt.hash(newUser.password, saltRounds, function(err, hash) {
      if (err) {
        return callback(err);
      }
      return db.query(
        'INSERT INTO user (username, fname, password) VALUES (?, ?, ?)',
        [newUser.username, newUser.fname || null, hash],
        callback
      );
    });
  },

  update: function(id, updatedUser, callback) {
    // Jos salasana on annettu, kryptataan se
    if (updatedUser.password) {
      bcrypt.hash(updatedUser.password, saltRounds, function(err, hash) {
        if (err) return callback(err);
        return db.query(
          'UPDATE user SET username=?, fname=?, password=? WHERE idUser=?',
          [updatedUser.username, updatedUser.fname || null, hash, id],
          callback
        );
      });
    } else {
      // Salasanaa ei muuteta
      return db.query(
        'UPDATE user SET username=?, fname=? WHERE idUser=?',
        [updatedUser.username, updatedUser.fname || null, id],
        callback
      );
    }
  },

  delete: function(id, callback) {
    return db.query('DELETE FROM user WHERE idUser=?', [id], callback);
  },

  // Apufunktio kirjautumiseen (tarkistaa salasanan)
  checkPassword: function(username, password, callback) {
    user.getByUsername(username, function(err, result) {
      if (err || result.length === 0) {
        return callback(err, false);
      }
      const userData = result[0];
      bcrypt.compare(password, userData.password, function(err, isMatch) {
        if (err) return callback(err);
        if (isMatch) {
          callback(null, userData); // palautetaan koko käyttäjä ilman salasanaa halutessa
        } else {
          callback(null, false);
        }
      });
    });
  }
};

module.exports = user;