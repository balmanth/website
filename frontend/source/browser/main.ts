/**
 * Copyright (C) 2018 balmante.eti.br
 * Frontend client.
 */
import * as Frontend from '@singleware/frontend';

import * as Default from '../modules/default';
import * as Projects from '../modules/projects';

(async function() {
  // Main application instance.
  const application = new Frontend.Main({});

  // Application settings.
  const settings = Object.freeze({
    application: application
  });

  // Setup the browser service.
  application.addService(Frontend.Services.Client, {});

  // Setup all page handlers.
  application.addHandler(Default.Handler, settings);
  application.addHandler(Projects.Singleware.Handler, settings);

  // Starts actions.
  application.start();
})();
