/**
 * Copyright (C) 2018 balmante.eti.br
 * Projects sidebar, menu view structure
 */
import * as Class from '@singleware/class';
import * as DOM from '@singleware/jsx';
import * as Control from '@singleware/ui-control';

import { Properties } from './menu.properties';

@Class.Describe()
export class Menu extends Control.Component<Properties> {
  /**
   * View skeleton.
   */
  @Class.Private()
  private skeleton: HTMLElement = (
    <nav class="sidebar">
      <ul class="list">{this.children}</ul>
    </nav>
  ) as HTMLElement;

  /**
   * Click event handler.
   * @param event Event information.
   */
  @Class.Private()
  private clickHandler(event: Event): void {
    const target = event.target as HTMLAnchorElement;
    if (target.hasAttribute('href')) {
      event.preventDefault();
      this.properties.client.open(target.getAttribute('href') as string);
    }
  }

  /**
   * Default properties.
   * @param properties Menu properties.
   * @param children Menu children.
   */
  constructor(properties: Properties, children?: any[]) {
    super(properties, children);
    this.skeleton.addEventListener('click', this.clickHandler.bind(this), true);
  }

  /**
   * View element.
   */
  @Class.Public()
  public get element(): HTMLElement {
    return this.skeleton;
  }
}
