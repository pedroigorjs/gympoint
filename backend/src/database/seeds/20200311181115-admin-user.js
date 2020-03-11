const bcrypt = require('bcryptjs');

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Administrador',
          email: 'admin@gympoint.com',
          password_hash: bcrypt.hashSync('12345678', 8),
          created_at: new Date(),
          updated_at: new Date(),
          admin: true,
        },
      ],
      {}
    );
  },

  down: () => {},
};
