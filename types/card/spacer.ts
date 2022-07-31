import { Component } from 'vue';
import { RemoveMethods } from '../helpers/classValSelecting';
import { Card } from './default';
import spacerCard from '~/components/cards/spacerCard.vue';

export class spacer extends Card {
  // class identifiers
  static readonly id: string = 'spacer';
  public readonly component: Component = spacerCard;

  constructor (obj: RemoveMethods<spacer>) {
    super(obj, spacer.id);
  }
}
