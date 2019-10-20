const USERS = require('../data/user');

module.exports = () => class User {
  constructor({id, firstName, lastName, company}) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.company = company;
  }

  static find() {
    const currentUser = this._context.user;
    return USERS
      .filter(({ company }) => company === currentUser.company)
      .map(({id, company, first_name: firstName, last_name: lastName}) => new this({
        id,
        company,
        firstName,
        lastName
      }));
  }
};
