const PROJECTS = require("../data/project");

const getProjects = (req, res) => {
  const { user: currentUser } = req.context;

  const projects = PROJECTS.filter(project => project.company === currentUser.company);

  res.json({
    projects
  });
};

const getProjectById = (req, res) => {
  const { user: currentUser } = req.context;
  const { id: projectId } = req.params;

  const project = PROJECTS.find(project => (
    project.id === parseInt(projectId) &&
    project.company === currentUser.company
  ));

  if (!project) {
    return res.status(401).json({
      error: "project not found"
    })
  }

  res.json({
    project
  })
};

const postProject = (req, res) => {
  const { user: currentUser } = req.context;
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      err: "name is required"
    })
  }

  const project = {
    name,
    createdBy: currentUser.id,
    company: currentUser.company
  };
  // TODO: save the project

  res.json({
    project
  });
};

module.exports = {
  getProjects,
  getProjectById,
  postProject,
};
