/**
 * Copyright (C) 2018 balmante.eti.br
 * Default handler.
 */
import * as Class from '@singleware/class';
import * as Backend from '@singleware/backend';

/**
 * Default handler class.
 */
@Class.Describe()
export class Handler extends Backend.Handlers.File.Default {
  /**
   * Exception response processor.
   * @param match Matched route.
   */
  @Backend.Processor({ path: '!', environment: { methods: 'GET' } })
  @Class.Public()
  public async exceptionResponse(match: Backend.Match): Promise<void> {
    await super.exceptionResponse(match);
  }

  /**
   * Default response processor.
   * @param match Matched route.
   */
  @Backend.Processor({ path: '/', exact: false, environment: { methods: 'GET' } })
  @Class.Public()
  public async defaultResponse(match: Backend.Match): Promise<void> {
    await super.defaultResponse(match);
  }

  /**
   * Index response processor.
   * @param match Matched route.
   */
  @Backend.Processor({ path: '/about', exact: false, environment: { methods: 'GET' } })
  @Class.Public()
  public async indexResponse(match: Backend.Match): Promise<void> {
    await this.setResponseFile(match.detail.output, '/index.html');
  }
}
