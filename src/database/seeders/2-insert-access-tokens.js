const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = []
    const users = (await queryInterface.sequelize.query("SELECT id from USERS;"))[0]
    
    for (let i = 0; i < users.length; i++) {
      const date = faker.date.past()
      
      data.push({
        user_id: users[i].id,
        created_at: date,
        updated_at: date,
      })
    }

    return queryInterface.bulkInsert('access_tokens', data, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('access_tokens', null, {})
  },
}
