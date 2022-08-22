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
      this.isMain = true;
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

      $fetch('/api/background/populate', { method: 'POST', params: { isMain: !this.isMain } });
    }
  }
});
