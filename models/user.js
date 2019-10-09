const USERS = require('../data/user');

class User {
  constructor({id, firstName, lastName, company}) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.company = company;
  }

  static find() {
    const { User } = this._context.models;
    const currentUser = this._context.user;
    return USERS
      .filter(user => user.company === currentUser.company)
      .map(userData => new User(userData));
  }
}

module.exports = () => User;
