import { RemoveMethods } from '../helpers/classValSelecting';
import { Card } from './default';

export class error extends Card {
  // class identifiers
  static readonly id: string = 'error';
  public readonly component: string = 'CardError';

  public static text = 'Error!';
  public subtext = '';

  constructor (obj: RemoveMethods<error>) {
    super(obj, error.id);
  }
}
