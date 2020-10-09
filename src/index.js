const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
const routes = require('./routes/routes.js');

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, () => console.log(`API runninng on port ${port}`));
