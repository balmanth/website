/**
 * Copyright (C) 2018 balmante.eti.br
 * Singleware autocomplete, view structure
 */
import * as Class from '@singleware/class';
import * as DOM from '@singleware/jsx';
import * as Control from '@singleware/ui-control';
import * as Autocomplete from '@singleware/ui-autocomplete';

@Class.Describe()
export class View extends Control.Component<{}> {
  /**
   * Field element.
   */
  @Class.Private()
  private field = (
    <Autocomplete.Template class="autocomplete" remote>
      <input slot="input" type="text" />
      <div slot="empty" class="panel empty">
        No results found.
      </div>
      <div slot="loading" class="panel loading">
        Loading...
      </div>
      <div slot="error" class="panel error" />
      <div slot="results" class="panel" />
    </Autocomplete.Template>
  ) as Autocomplete.Element;

  /**
   * View skeleton.
   */
  @Class.Private()
  private skeleton = <div>{this.field}</div> as HTMLDivElement;

  /**
   * Change event handler.
   */
  @Class.Private()
  private async changeHandler(): Promise<void> {
    try {
      const response = await fetch(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/${this.field.search}`);
      if (response.status === 200) {
        const results = (await response.json()) as any;
        this.field.clear();
        for (const result of results) {
          this.field.add(result.nome, result.nome);
        }
        this.field.open();
      } else {
        (this.field as any).setCustomError(`HTTP Error: ${response.status} '${response.statusText}'`);
      }
    } catch (exception) {
      (this.field as any).setCustomError(exception.message);
    }
  }

  /**
   * Default constructor.
   * @param properties View properties.
   * @param children View children.
   */
  constructor(properties: {}, children?: any[]) {
    super(properties, children);
    this.field.addEventListener('search', this.changeHandler.bind(this));
  }

  /**
   * View element.
   */
  @Class.Public()
  public get element(): HTMLDivElement {
    return this.skeleton;
  }
}
