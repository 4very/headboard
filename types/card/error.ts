import { Component } from 'vue';
import { RemoveMethods } from '../helpers/classValSelecting';
import { Card } from './default';
import errorCard from '~/components/cards/errorCard.vue';

export class error extends Card {
  // class identifiers
  static readonly id: string = 'error';
  public readonly component: Component = errorCard;

  public static text: string = 'Error!';
  public subtext: string = '';

  constructor (obj: RemoveMethods<error>) {
    super(obj, error.id);
  }
}
