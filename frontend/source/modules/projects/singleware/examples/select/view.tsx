/**
 * Copyright (C) 2018 balmante.eti.br
 * Singleware select, view structure
 */
import * as Class from '@singleware/class';
import * as DOM from '@singleware/jsx';
import * as Control from '@singleware/ui-control';
import * as Select from '@singleware/ui-select';

@Class.Describe()
export class View extends Control.Component<{}> {
  /**
   * Field element.
   */
  @Class.Private()
  private field = (
    <Select.Template class="select">
      <button slot="input" class="input" type="button"/>
      <div slot="list" class="list" />
      <div slot="arrow" />
    </Select.Template>
  ) as Select.Element;

  /**
   * View skeleton.
   */
  @Class.Private()
  private skeleton = <div>{this.field}</div> as HTMLDivElement;

  /**
   * Default constructor.
   * @param properties View properties.
   * @param children View children.
   */
  constructor(properties: {}, children?: any[]) {
    super(properties, children);
    this.field.add(<b>First option</b>, 'first');
    this.field.add(<b>Second option</b>, 'second');
    this.field.add(<b>Third option</b>, 'third');
  }

  /**
   * View element.
   */
  @Class.Public()
  public get element(): HTMLDivElement {
    return this.skeleton;
  }
}
