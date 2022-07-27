// import {test1, test2} from './test1'
import { Component } from 'vue'
import { RemoveMethods } from '../helpers/classValSelecting'

// all card classes need an id and a component
// the id will be supplied to match the object to the right child
// the componet will be statically assigned to all children

export class Card {
  id!: string
  component?: Component

  constructor(obj: { id: string }, id: string) {
    if (id != obj.id)
      throw new Error(`Id value of ${obj.id} doesn't match class id of ${id}!`)

    Object.assign(this, obj)
  }
}