// import { Component } from 'vue';
import { RemoveMethods } from '../helpers/classValSelecting';
import { Card } from './default';

export class list extends Card {
  // class identifiers
  static readonly id: string = 'list';
  public readonly component: string = 'CardList';

  // class variables
  public elements: {text: string, link: string}[] = [];
  public title = '';

  constructor (obj: RemoveMethods<list>) {
    super(obj, list.id);
    this.elements = obj?.elements ? obj.elements : [];
    this.title = obj?.title ? obj.title : '';
  }

  validate () {
    this.elements.forEach((elt, i) => {
      if (!(elt?.link || elt?.text)) {
        this.valid = false;
        this.errorText = 'Element doesnt contain a valid key';
        this.errorSubText = `Element number ${i + 1} does not contain key 'link' or 'text'`;
      }
    });
  }
}
