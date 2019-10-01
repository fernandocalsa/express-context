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
}

module.exports = {
  getProjects,
  getProjectById,
};
