import { defineStore } from 'pinia';
import { Card } from '~/types/card/default';
import { match } from '~~/types/helpers/matchCard';

export const CardData = defineStore('CardData', {
  state: () => {
    return {
    // all these properties will have their type inferred automatically
      cards: {} as {[key: string]: Card[]}
    };
  },
  actions: {
    invalid (page: string, i: number) {
      this.cards[page][i].valid = false;
    },
    valid (page:string, i: number) {
      this.cards[page][i].valid = true;
    },
    addCard (page: string, card: Card) {
      this.cards[page].push(card);
    },
    validComponent (page: string, i: number) {
      return resolveComponent(this.cards[page][i].valid ? this.cards[page][i].component : 'CardError');
    },
    addCardWithType (page: string, data: Card) {
      this.cards[page].push(
        (new (match(data))(data))
      );
    },
    resetPage (page: string) {
      this.cards[page] = [] as Card[];
    }
  },
  getters: {
    num: (state) => { return state.cards.length; }
  }
}
);
