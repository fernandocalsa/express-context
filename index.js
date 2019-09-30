const express = require('express');
const authorization = require('./middlewares/authorization');
const port = process.env.PORT | 3030;

const app = express();

app.use(authorization);

app.get('/', (req, res) => {
  res.json({
    msg: 'Api up and running!'
  });
});

app.use((err, req, res, next) => {
  if(err) {
    res.status(err.status || 500).json({
      msg: err.msg || 'Error'
    });
  }
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
