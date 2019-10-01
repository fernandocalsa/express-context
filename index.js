const express = require('express');
const authorization = require('./middlewares/authorization');
const addUserContext = require('./middlewares/addUserContext');
const usersController = require('./controllers/users.controller');
const projectsController = require("./controllers/projects.controller");
const port = process.env.PORT || 3030;

const app = express();

app.use(express.json());
app.use(authorization);
app.use(addUserContext);

app.get('/', (req, res) => {
  res.json({
    msg: 'Api up and running!'
  });
});

app.get("/users", usersController.getUsers);
app
  .route("/projects")
  .get(projectsController.getProjects)
  .post(projectsController.postProject);
app.get("/projects/:id", projectsController.getProjectById);

app.use((err, req, res, next) => {
  if(err) {
    res.status(err.status || 500).json({
      msg: err.msg || 'Error'
    });
  }
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
