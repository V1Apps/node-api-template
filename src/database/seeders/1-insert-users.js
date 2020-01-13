const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = []

    for (let i = 0; i < 100; i++) {
      const createdAt = faker.date.past()

      data.push({
        firebase_id: faker.random.uuid(),
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        email: faker.internet.email(),
        phone_number: faker.phone.phoneNumber(faker.phone.phoneNumberFormat(2)),
        created_at: createdAt,
        updated_at: faker.date.future(1, createdAt),
      })
    }

    data.push({
      firebase_id: 'seyAizX8dAhooJYIu4dMH7hrJYs2',
      first_name: 'Tamby',
      last_name: 'Kojak',
      email: 'tamby@v1apps.com',
      phone_number: '+1-973-757-4181',
      created_at: new Date(),
      updated_at: new Date(),
    })

    return queryInterface.bulkInsert('users', data, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  },
}
