var contentController = require('./controller/content'),
    routes = require('./routes');

module.exports.setup = function( app ) {
   app.get('/', routes.index);
   app.put('/api/v1/content/create', contentController.create);
};