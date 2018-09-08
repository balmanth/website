/**
 * Copyright (C) 2018 balmante.eti.br
 * Singleware project, view structure
 */
import * as Class from '@singleware/class';
import * as DOM from '@singleware/jsx';
import * as Control from '@singleware/ui-control';

import { Sidebar } from './components';

@Class.Describe()
export class View extends Control.Component<{}> {
  /**
   * View skeleton.
   */
  @Class.Private()
  private skeleton: HTMLDivElement = (
    <div class="singleware project">
      <div class="menu">
        <Sidebar.Menu>
          <Sidebar.Item>
            <h4>UI Examples</h4>
          </Sidebar.Item>
          <Sidebar.Item>
            <a>Checkbox</a>
          </Sidebar.Item>
          <Sidebar.Item>
            <a>Dialog</a>
          </Sidebar.Item>
          <Sidebar.Item>
            <a>Editor</a>
          </Sidebar.Item>
          <Sidebar.Item>
            <a>Field</a>
          </Sidebar.Item>
          <Sidebar.Item>
            <a>Form</a>
          </Sidebar.Item>
          <Sidebar.Item>
            <a>Import</a>
          </Sidebar.Item>
          <Sidebar.Item>
            <a>Password</a>
          </Sidebar.Item>
          <Sidebar.Item>
            <a>Progress</a>
          </Sidebar.Item>
          <Sidebar.Item>
            <a>Radiobox</a>
          </Sidebar.Item>
          <Sidebar.Item>
            <a>Switch</a>
          </Sidebar.Item>
          <Sidebar.Item>
            <a>Tabs</a>
          </Sidebar.Item>
          <Sidebar.Item>
            <a>Toggle</a>
          </Sidebar.Item>
          <Sidebar.Item>
            <a>Toolbar</a>
          </Sidebar.Item>
        </Sidebar.Menu>
      </div>
      <div class="content">..</div>
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
