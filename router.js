const express = require('express');
const usersController = require('./controllers/users.controller');
const projectsController = require("./controllers/projects.controller");

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    msg: 'Api up and running!'
  });
});

router.get("/users", usersController.getUsers);
router
  .route("/projects")
  .get(projectsController.getProjects)
  .post(projectsController.postProject);
router.get("/projects/:id", projectsController.getProjectById);

module.exports = router;
