/**
 * Copyright (C) 2018 balmante.eti.br
 * Projects sidebar, item view structure
 */
import * as Class from '@singleware/class';
import * as DOM from '@singleware/jsx';
import * as Control from '@singleware/ui-control';

@Class.Describe()
export class Item extends Control.Component<Properties> {
  /**
   * View skeleton.
   */
  @Class.Private()
  private skeleton: HTMLElement = <li class="item">{this.children}</li> as HTMLElement;

  /**
   * View element.
   */
  @Class.Public()
  public get element(): HTMLElement {
    return this.skeleton;
  }
}

interface Properties {
  /**
   * Item children.
   */
  children?: JSX.Element;
}
