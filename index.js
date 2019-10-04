const express = require('express');
const authorization = require('./middlewares/authorization');
const addUserContext = require('./middlewares/addUserContext');
const router = require("./router");
const port = process.env.PORT || 3030;

const app = express();

app.use(express.json());
app.use(authorization);
app.use(addUserContext);

app.use("/", router)

app.use((err, req, res, next) => {
  console.log(err)
  if(err) {
    res.status(err.status || 500).json({
      msg: err.msg || 'Error'
    });
  }
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
