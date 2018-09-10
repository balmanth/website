/**
 * Copyright (C) 2018 balmante.eti.br
 * Singleware project handler.
 */
import * as Class from '@singleware/class';
import * as Frontend from '@singleware/frontend';

import * as Examples from './examples';
import { Settings } from '../../../browser/settings';
import { View } from './view';

/**
 * Default handler class.
 */
@Class.Describe()
export class Handler {
  /**
   * Application settings.
   */
  @Class.Private()
  private settings: Settings;

  /**
   * Default constructor.
   * @param settings
   */
  constructor(settings: Settings) {
    this.settings = settings;
  }

  /**
   * Default action.
   * @param match Matched route.
   */
  @Class.Public()
  @Frontend.Processor({ path: '/projects/singleware/', exact: false })
  public async defaultAction(match: Frontend.Match): Promise<void> {
    const output = match.detail.output;
    output.subtitle = 'Singleware Project';
    output.content = new View({
      client: this.settings.client
    });
  }
}
