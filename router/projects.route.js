const express = require("express");
const projectsController = require("../controllers/projects.controller");

const projectsRouter = express.Router();

projectsRouter.get("/", projectsController.getProjects);
projectsRouter.post("/", projectsController.postProject);
projectsRouter.get("/:id", projectsController.getProjectById);

module.exports = projectsRouter;
