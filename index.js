const express = require('express');
const authorization = require('./middlewares/authorization');
const usersRouter = require('./router/users.route');
const projectsRouter = require("./router/projects.route");
const port = process.env.PORT | 3030;

const app = express();

app.use(express.json());
app.use(authorization);

app.use("/users", usersRouter);
app.use("/projects", projectsRouter);

app.listen(port, () => console.log(`App listening on port ${port}!`));
