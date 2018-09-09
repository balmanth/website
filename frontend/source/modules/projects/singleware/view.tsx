/**
 * Copyright (C) 2018 balmante.eti.br
 * Singleware project, view structure
 */
import * as Class from '@singleware/class';
import * as DOM from '@singleware/jsx';
import * as Control from '@singleware/ui-control';

import { Sidebar } from './components';
import { Properties } from './properties';

@Class.Describe()
export class View extends Control.Component<Properties> {
  /**
   * View skeleton.
   */
  @Class.Private()
  private skeleton: HTMLDivElement = (
    <div class="singleware project">
      <div class="menu">
        <Sidebar.Menu client={this.properties.client}>
          <Sidebar.Item>
            <h4>UI Examples</h4>
          </Sidebar.Item>
          <Sidebar.Item>
            <a href="checkbox">Checkbox</a>
          </Sidebar.Item>
          <Sidebar.Item>
            <a href="dialog">Dialog</a>
          </Sidebar.Item>
          <Sidebar.Item>
            <a href="editor">Editor</a>
          </Sidebar.Item>
          <Sidebar.Item>
            <a href="field">Field</a>
          </Sidebar.Item>
          <Sidebar.Item>
            <a href="form">Form</a>
          </Sidebar.Item>
          <Sidebar.Item>
            <a href="import">Import</a>
          </Sidebar.Item>
          <Sidebar.Item>
            <a href="password">Password</a>
          </Sidebar.Item>
          <Sidebar.Item>
            <a href="progress">Progress</a>
          </Sidebar.Item>
          <Sidebar.Item>
            <a href="radiobox">Radiobox</a>
          </Sidebar.Item>
          <Sidebar.Item>
            <a href="switch">Switch</a>
          </Sidebar.Item>
          <Sidebar.Item>
            <a href="tabs">Tabs</a>
          </Sidebar.Item>
          <Sidebar.Item>
            <a href="toggle">Toggle</a>
          </Sidebar.Item>
          <Sidebar.Item>
            <a href="toolbar">Toolbar</a>
          </Sidebar.Item>
        </Sidebar.Menu>
      </div>
      <div class="content">{this.properties.content}</div>
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
