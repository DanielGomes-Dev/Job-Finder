const app = require('./services/InitializeServer');
const database = require('./database/connection');

const routes = require('./routes')
routes.init(app);


module.exports = app;