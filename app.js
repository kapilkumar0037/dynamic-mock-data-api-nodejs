const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const rendomDataRouter = require('./src/routes/apiRoutes')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var port = process.env.PORT || 4321;

app.use('/api', rendomDataRouter);
app.listen(port);
console.log('listening on port' + port);
