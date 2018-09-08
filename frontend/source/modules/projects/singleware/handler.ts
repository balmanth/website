/**
 * Copyright (C) 2018 balmante.eti.br
 * Singleware project handler.
 */
import * as Class from '@singleware/class';
import * as Frontend from '@singleware/frontend';

import { View } from './view';

/**
 * Default handler class.
 */
@Class.Describe()
export class Handler {
  /**
   * Default action.
   * @param match Matched route.
   */
  @Class.Public()
  @Frontend.Processor({ path: '/projects/singleware' })
  public async defaultAction(match: Frontend.Match): Promise<void> {
    const output = match.detail.output;
    output.title = 'Singleware project';
    output.content = new View({});
  }
}
