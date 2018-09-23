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
      name: '@singleware/ui-routing',
      path: 'node_modules/@singleware/ui-routing',
      package: true
    },
    {
      name: '@singleware/ui-autocomplete',
      path: 'node_modules/@singleware/ui-autocomplete',
      package: true
    },
    {
      name: '@singleware/ui-checkbox',
      path: 'node_modules/@singleware/ui-checkbox',
      package: true
    },
    {
      name: '@singleware/ui-radiobox',
      path: 'node_modules/@singleware/ui-radiobox',
      package: true
    },
    {
      name: '@singleware/ui-select',
      path: 'node_modules/@singleware/ui-select',
      package: true
    },
    {
      name: '@singleware/ui-switch',
      path: 'node_modules/@singleware/ui-switch',
      package: true
    },
    {
      name: '@singleware/ui-toggle',
      path: 'node_modules/@singleware/ui-toggle',
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
