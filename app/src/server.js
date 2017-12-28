import express from 'express';
import React from 'react';
import { StaticRouter as Router } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import App from './app';
import template from './template';

const server = express();

server.use('/assets', express.static('assets'));

server.get('/', (req, res) => {
  const isMobile = true;
  const initialState = { isMobile };
  const appString = renderToString(
    <Router>
      <App {...initialState} />
    </Router>);

  res
    .status(200)
    .send(template({
      body: appString,
      title: 'Hello World from the server',
      initialState: JSON.stringify(initialState)
    }));
});

server.get('/about', (req, res) => {
  const isMobile = true;
  const initialState = { isMobile };
  const context = {};
  const appString = renderToString(
    <Router context={context} location={req.url}>
      <App {...initialState} />
    </Router>);

  res
    .status(200)
    .send(template({
      body: appString,
      title: 'Hello World from the server',
      initialState: JSON.stringify(initialState)
    }));
});

server.listen(8080);
console.log('listening');
