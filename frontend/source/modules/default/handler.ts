/**
 * Copyright (C) 2018 balmante.eti.br
 * Default handler.
 */
import * as Class from '@singleware/class';
import * as Frontend from '@singleware/frontend';

/**
 * Default handler class.
 */
@Class.Describe()
export class Handler {
  /**
   * Default action.
   * @param match Matched route.
   */
  @Frontend.Processor({ path: '/' })
  @Class.Public()
  public async defaultAction(match: Frontend.Match): Promise<void> {
    console.log('TODO');
  }
}
