import { Card } from './card/default';
import { match } from './helpers/matchCard';

export default class Page {
  public title = 'headboard';
  public defaultTheme = 'dark';

  public backgroundColor = '#000000';
  public textColor = '#ffffff';

  public cards = [] as Card[];

  constructor (obj: {cards: Card[]}) {
    Object.assign(this, obj);
    this.cards = [];
    obj.cards.forEach((elt) => {
      this.cards.push(new (match(elt))(elt));
    });
  }
}
