/**
 * Copyright (C) 2018 balmante.eti.br
 * Singleware switch, view structure
 */
import * as Class from '@singleware/class';
import * as DOM from '@singleware/jsx';
import * as Control from '@singleware/ui-control';
import * as Switch from '@singleware/ui-switch';

@Class.Describe()
export class View extends Control.Component<{}> {
  /**
   * View skeleton.
   */
  @Class.Private()
  private skeleton = (
    <div>
      <Switch.Template group="test" checked>
        <div slot="mark" />
        <div slot="yes">Yes</div>
        <div slot="no">No</div>
      </Switch.Template>
      <Switch.Template group="test">
        <div slot="mark" />
        <div slot="yes">Yes</div>
        <div slot="no">No</div>
      </Switch.Template>
      <Switch.Template group="test">
        <div slot="mark" />
        <div slot="yes">Yes</div>
        <div slot="no">No</div>
      </Switch.Template>
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
