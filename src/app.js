const app = require('./services/InitializeServer');

const routes = require('./routes')
routes.init(app);


module.exports = app;