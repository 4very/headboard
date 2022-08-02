import { defineStore } from 'pinia';
import { Card } from '~/types/card/default';
import { match } from '~~/types/helpers/matchCard';

export const CardData = defineStore('CardData', {
  state: () => {
    return {
    // all these properties will have their type inferred automatically
      cards: [] as Card[]
    };
  },
  actions: {
    invalid (i: number) {
      this.cards[i].valid = false;
    },
    valid (i: number) {
      this.cards[i].valid = true;
    },
    addCard (card: Card) {
      this.cards.push(card);
    },
    validComponent (i: number) {
      return resolveComponent(this.cards[i].valid ? this.cards[i].component : 'CardError');
    },
    addCardWithType (data: Card) {
      this.cards.push(
        (new (match(data))(data))
      );
    }
  },
  getters: {
    num: (state) => { return state.cards.length; }
  }
}
);
