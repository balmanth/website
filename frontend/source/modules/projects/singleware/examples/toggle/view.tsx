/**
 * Copyright (C) 2018 balmante.eti.br
 * Singleware toggle, view structure
 */
import * as Class from '@singleware/class';
import * as DOM from '@singleware/jsx';
import * as Control from '@singleware/ui-control';
import * as Toggle from '@singleware/ui-toggle';

@Class.Describe()
export class View extends Control.Component<{}> {
  /**
   * View skeleton.
   */
  @Class.Private()
  private skeleton = (
    <div>
      <Toggle.Template class="toggle" group="test" checked>
        <span slot="mark">A</span>
      </Toggle.Template>
      <Toggle.Template class="toggle" group="test">
        <span slot="mark">B</span>
      </Toggle.Template>
      <Toggle.Template class="toggle" group="test">
        <span slot="mark">C</span>
      </Toggle.Template>
    </div>
  ) as HTMLDivElement;

  /**
   * View element.
   */
  @Class.Public()
  public get element(): HTMLDivElement {
    return this.skeleton;
  }
}
