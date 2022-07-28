import * as cardTypes from '~/types/card';

// function passes in object that extends {id: string} since that is the only common element between all cards
// function returns constructed class with the rest of the object properties

export function match<T extends { id: string }> (obj: T): any {
  switch (obj.id) {
  case 'linkList':
    return cardTypes.linkList;
  case 'error':
    return cardTypes.error;
  case 'spacer':
    return cardTypes.spacer;
  default:
    break;
  }
}
