const PROJECTS = require("../data/project");

class Project {
  constructor(id, name, createdBy, company) {
    this.id = id;
    this.name = name;
    this.createdBy = createdBy;
    this.company = company;
  };

  static find(company) {
    return PROJECTS
      .filter(project => project.company === company)
      .map(({id, name, createdBy, company}) => new Project(id, name, createdBy, company));
  }

  static findById(id, company) {
    return PROJECTS.find(project => (
      project.id === parseInt(id) &&
      project.company === company
    ));
  }

  save() {
    this.id = new Date().getTime();
    console.log("project saved");
  }
};

module.exports = Project;
