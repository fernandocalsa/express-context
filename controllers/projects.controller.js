const Project = require("../models/project");

const getProjects = (req, res) => {
  const { user: currentUser } = req.context;

  const projects = Project.find(currentUser.company);

  res.json({
    projects
  });
};

const getProjectById = (req, res) => {
  const { user: currentUser } = req.context;
  const { id: projectId } = req.params;

  const project = Project.findById(projectId, currentUser.company);

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

  const project = new Project(
    null,
    name,
    currentUser.id,
    currentUser.company
  );
  project.save();

  res.json({
    project
  });
};

module.exports = {
  getProjects,
  getProjectById,
  postProject,
};
