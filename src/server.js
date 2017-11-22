import ReactDOMServer from 'react-dom/server';
import ReactDOM from 'react-dom';
import { StaticRouter } from 'react-router-dom';
import React from 'react';
import { App } from './components/App.js';
import path from 'path';

var express = require('express');
var bodyParser = require('body-parser');
var parser = bodyParser.urlencoded({ extended: false });

// initialize the server and configure support for ejs templates
var app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.listen(8080);

// define the folder that will be used for static assets
// all page can use this folder
app.use(express.static(path.join(__dirname, 'static')));

// all the url will navigate to index page to use router
// note: with the script, link, ... in index.ejs you need to put a '/' at first if not, it will create this file => error
app.get('*', (req, res) => {
  let markup = '';
  let status = 200;

  if (process.env.UNIVERSAL) {
    const context = {};
    markup = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App/>
      </StaticRouter>
    );

    // context.url will contain the URL to redirect to if a <Redirect> was used
    if (context.url) {
      return res.redirect(302, context.url);
    }

    if (context.is404) {
      status = 404;
    }
  }

  return res.status(status).render('index', { markup });
});


