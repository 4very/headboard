import { RemoveMethods } from '../helpers/classValSelecting';
import { Card } from './default';

export class spacer extends Card {
  // class identifiers
  static readonly id: string = 'spacer';
  public readonly component: string = 'CardSpacer';

  constructor (obj: RemoveMethods<spacer>) {
    super(obj, spacer.id);
  }
}
