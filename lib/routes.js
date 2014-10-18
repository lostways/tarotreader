'use strict';

var api = require('./controllers/api'),
    index = require('./controllers'),
    users = require('./controllers/users'),
    session = require('./controllers/session'),
    cards = require('./controllers/cards'),
    readings = require('./controllers/readings');
var middleware = require('./middleware');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
//  app.get('/api/awesomeThings', api.awesomeThings);  
  app.get('/api/cards', cards.index);
  app.get('/api/cards/random', cards.random);
  app.get('/api/cards/:id', cards.show);

  app.get('/api/readings', readings.index);
  app.get('/api/readings/:id', readings.show);
  app.post('/api/readings', readings.create);
  app.delete('/api/readings/:id', readings.delete);
  
  app.post('/api/users', users.create);
  app.put('/api/users', users.changePassword);
  app.get('/api/users/me', users.me);
  app.get('/api/users/:id', users.show);

  app.post('/api/session', session.login);
  app.del('/api/session', session.logout);

  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/partials/*', index.partials);
  app.get('/*', middleware.setUserCookie, index.index);
};
