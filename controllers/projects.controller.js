const getProjects = (req, res) => {
  const { Project } = req.context.models;

  const projects = Project.find();

  res.json({
    projects
  });
};

const getProjectById = (req, res) => {
  const { id: projectId } = req.params;
  const { Project } = req.context.models;

  const project = Project.findById(projectId);

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
  const { name } = req.body;
  const { Project } = req.context.models;

  if (!name) {
    return res.status(400).json({
      err: "name is required"
    })
  }

  const project = new Project({name});
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
