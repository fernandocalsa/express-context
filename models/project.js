const PROJECTS = require("../data/project");

class Project {
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
    return new Project(projectData);
  }

  save() {
    this.id = new Date().getTime();
    console.log("project saved");
  }
};

module.exports = () => {
  return Project;
};