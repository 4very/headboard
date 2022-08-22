import { defineStore } from 'pinia';
import { imageMeta } from '~~/server/api/background/populate.post';

interface backgroundStore {
  data: imageMeta
  isMain: boolean
}
export const background = defineStore('background', {
  state: (): backgroundStore => {
    return {
      data: {} as imageMeta,
      isMain: true
    };
  },
  actions: {
    async init () {
      this.isMain = await $fetch('/api/background/swapStatus') as boolean;
      console.log(this.isMain);
      const response = await $fetch('/api/background/metadata', { method: 'GET', responseType: 'json', params: { isMain: this.isMain } });
      Object.assign(this.data, response.data);
    },
    toggleLike () {
      this.data.liked
        ? $fetch('/api/background/likes/remove', { method: 'POST', params: { isMain: this.isMain } })
        : $fetch('/api/background/likes/add', { method: 'POST', params: { isMain: this.isMain } });
      this.data.liked = !this.data.liked;
    },
    async shuffleImage () {
      this.isMain = !this.isMain;
      const response = await $fetch('/api/background/metadata', { method: 'GET', responseType: 'json', params: { isMain: this.isMain } });

      Object.assign(this.data, response.data);

      // $fetch('https://www.gstatic.com/culturalinstitute/tabext/imax.json');
      await $fetch('/api/background/populate', { method: 'POST', params: { isMain: !this.isMain ? 'true' : 'false' } });

      await $fetch('/api/background/swap', { method: 'POST', params: { isMain: this.isMain } });
    }
  }
});
