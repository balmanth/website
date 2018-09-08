/**
 * Copyright (C) 2018 balmante.eti.br
 * Application bundler.
 */
import * as Bundler from '@singleware/bundler';

// Compile the application bundle.
Bundler.compile({
  output: './frontend/release/index.js',
  sources: [
    {
      name: '@singleware/frontend',
      path: 'node_modules/@singleware/frontend',
      package: true
    },
    {
      name: '@singleware/ui-control',
      path: 'node_modules/@singleware/ui-control',
      package: true
    },
    {
      name: './browser',
      path: './frontend/release/browser'
    },
    {
      name: './modules',
      path: './frontend/release/modules'
    }
  ]
});
