const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = []
    
    for(let i = 0; i < 100; i ++) {
      const createdAt = faker.date.past()

      data.push({
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        email: faker.internet.email(),
        phone_number: faker.phone.phoneNumber(faker.phone.phoneNumberFormat(2)),
        encrypted_password: faker.internet.password(),
        created_at: createdAt,
        updated_at: faker.date.future(1, createdAt)
      });
    }

    return queryInterface.bulkInsert('users', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
