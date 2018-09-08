/**
 * Copyright (C) 2018 balmante.eti.br
 * Projects sidebar, menu view structure
 */
import * as Class from '@singleware/class';
import * as DOM from '@singleware/jsx';
import * as Control from '@singleware/ui-control';

@Class.Describe()
export class Menu extends Control.Component<{}> {
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
   * View element.
   */
  @Class.Public()
  public get element(): HTMLElement {
    return this.skeleton;
  }
}
