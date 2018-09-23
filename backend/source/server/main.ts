/**
 * Copyright (C) 2018 balmante.eti.br
 * Backend server.
 */
import * as Backend from '@singleware/backend';

import * as Default from '../modules/default';

// Environment variables.
const appPort = parseInt(<string>process.env.APPLICATION_LISTEN_PORT);
const appDevEnv = process.env.APPLICATION_ENVIRONMENT === 'development';

// Main application instance.
const application = new Backend.Main({});

// Setup the HTTP logger.
application.addLogger(Backend.Loggers.Console);

// Setup the HTTP server.
application.addService(Backend.Services.Server, {
  port: appPort,
  debug: appDevEnv
});

// Setup the HTTP handler.
const settings = {
  strictTypes: true,
  baseDirectory: './frontend/public/',
  indexFile: 'index.html',
  types: {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    jpg: 'image/jpeg',
    png: 'image/png',
    svg: 'text/html+svg',
    woff: 'application/font-woff',
    woff2: 'font/woff2',
    eot: 'application/vnd.ms-fontobject',
    ttf: 'application/font-sfnt'
  }
};

application.addHandler(Default.Handler, settings);

// Starts the listening.
application.start();
