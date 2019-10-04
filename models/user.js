const USERS = require('../data/user');

class User {
  constructor(id, firstName, lastName, company) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.company = company;
  }

  static find(company) {
    return USERS
      .filter(user => user.company === company)
      .map(({ id, firstName, lastName, company}) => new User(
        id,
        firstName,
        lastName,
        company,
      ));
  }
}

module.exports = User;
