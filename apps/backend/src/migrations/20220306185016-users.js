const bcrypt = require('bcrypt')

module.exports = {
  async up(db) {
    return db.collection('users')
      .insertMany([
        {
          name: "David Inyang-Etoh",
          email: "dinyangetoh@gmail.com",
          username: "admin",
          password: await bcrypt.hash('adminadmin', 10),
          admin: true
        },
        {
          name: "James Brown",
          email: 'davidinyangetoh@gmail.com',
          username: "james",
          password: await bcrypt.hash('james', 10),
          admin: false
        },
      ])
  },

  down(db) {
    return db.collection('users').deleteMany({username: {$in: ['admin', 'james']}});
  }
};
