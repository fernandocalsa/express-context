const PROJECTS = require("../data/project");

module.exports = () => class Project {
  constructor({id, name, createdBy, company}) {
    this.id = id;
    this.name = name;
    this.createdBy = createdBy;
    this.company = company;
  };

  static find() {
    const companyId = this._context.user.company;
    return PROJECTS
      .filter(project => project.company === companyId)
      .map(projectData => new Project(projectData));
  }

  static findById(id) {
    const companyId = this._context.user.company;
    const projectData = PROJECTS.find(project => (
      project.id === parseInt(id) &&
      project.company === companyId
    ));
    if (!projectData) {
      return null;
    }
    return new Project(projectData);
  }

  save() {
    const currentUser = this._context.user;
    this.id = new Date().getTime();
    this.company = currentUser.company;
    this.createdBy = currentUser.id;
    console.log("project saved");
  }
};
