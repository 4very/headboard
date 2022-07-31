// import { Component } from 'vue';
import { RemoveMethods } from '../helpers/classValSelecting';
import { Card } from './default';

export class list extends Card {
  // class identifiers
  static readonly id: string = 'list';
  public readonly component: string = 'CardList';

  // class variables
  elements: string[] = [];

  constructor (obj: RemoveMethods<list>) {
    super(obj, list.id);
  }
}
