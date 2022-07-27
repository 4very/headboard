import { Component } from 'vue'
import linkListC from '~/components/cards/linkList.vue'
import { RemoveMethods } from '../helpers/classValSelecting'
import { Card } from './default'

export class linkList extends Card {
  // class identifiers
  static readonly id: string = 'linkList'
  public readonly component: Component = linkListC

  // class variables
  elements: string[] = []

  constructor(obj: RemoveMethods<linkList>) {
    super(obj, linkList.id)
  }
}
