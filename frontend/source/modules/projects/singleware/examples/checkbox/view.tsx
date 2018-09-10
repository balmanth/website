/**
 * Copyright (C) 2018 balmante.eti.br
 * Singleware checkbox, view structure
 */
import * as Class from '@singleware/class';
import * as DOM from '@singleware/jsx';
import * as Control from '@singleware/ui-control';
import * as Checkbox from '@singleware/ui-checkbox';

@Class.Describe()
export class View extends Control.Component<{}> {
  /**
   * View skeleton.
   */
  @Class.Private()
  private skeleton: HTMLDivElement = <div /> as HTMLDivElement;

  /**
   * View element.
   */
  @Class.Public()
  public get element(): HTMLDivElement {
    return this.skeleton;
  }
}
