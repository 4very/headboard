import { defineStore } from 'pinia';
import { Card } from '~/types/card/default';
import { match } from '~~/types/helpers/matchCard';
import Page from '~~/types/page';

export const CardData = defineStore('CardData', {
  state: () => {
    return {
      pages: {} as {[key: string]: Page}
    };
  },
  actions: {
    addPage (page: string, data: Page) {
      this.pages[page] = new Page(data);
      // this.pages[page].cards = [];
      // data.cards.forEach((elt) => { console.log(elt.id); this.addCardWithType(page, elt); });
    },
    validComponent (page: string, i: number) {
      return resolveComponent(this.pages[page].cards[i].valid ? this.pages[page].cards[i].component : 'CardError');
    },
    addCardWithType (page: string, data: Card) {
      const cardWithType = (new (match(data))(data));
      this.pages[page].cards.push(cardWithType);
    },
    resetPage (page: string) {
      this.pages[page] = {} as Page;
    }
  }
}
);
