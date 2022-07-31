import { defineStore } from 'pinia';
import { Card } from '~/types/card/default';

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
    }
  },
  getters: {
    num: (state) => { return state.cards.length; }
  }
}
);
