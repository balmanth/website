/**
 * Copyright (C) 2018 balmante.eti.br
 * Frontend client.
 */
import * as Frontend from '@singleware/frontend';

import * as Default from '../modules/default';

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

  // Starts actions.
  application.start();
})();
