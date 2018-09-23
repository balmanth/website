/**
 * Copyright (C) 2018 balmante.eti.br
 * Singleware radiobox, view structure
 */
import * as Class from '@singleware/class';
import * as DOM from '@singleware/jsx';
import * as Control from '@singleware/ui-control';
import * as Radiobox from '@singleware/ui-radiobox';

@Class.Describe()
export class View extends Control.Component<{}> {
  /**
   * View skeleton.
   */
  @Class.Private()
  private skeleton = (
    <div>
      <Radiobox.Template group="test" checked>
        <div slot="mark" />
      </Radiobox.Template>
      <Radiobox.Template group="test">
        <div slot="mark" />
      </Radiobox.Template>
      <Radiobox.Template group="test">
        <div slot="mark" />
      </Radiobox.Template>
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
