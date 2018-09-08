/**
 * Copyright (C) 2018 balmante.eti.br
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
      name: './browser',
      path: './frontend/release/browser'
    },
    {
      name: './modules',
      path: './frontend/release/modules'
    }
  ]
});
