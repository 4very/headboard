import fs from 'fs';
import { defineStore } from 'pinia';
export const background = defineStore('background', {
  state: () => {
    return {
      data: JSON.parse(fs.readFileSync('./assets/background/main.json').toString()),
      imageUrl: '/background/main.jpeg',
      isMain: true
    };
  },
  actions: {
    toggleLike () {
      this.data.liked
        ? $fetch('/api/background/likes/remove', { method: 'POST', params: { isMain: this.isMain } })
        : $fetch('/api/background/likes/add', { method: 'POST', params: { isMain: this.isMain } });
      this.data.liked = !this.data.liked;
    },
    async shuffleImage () {
      this.isMain = !this.isMain;
      const response = await $fetch('/api/background/metadata', { method: 'GET', responseType: 'json', params: { isMain: this.isMain } });

      this.data = response.data;
      this.imageUrl = response.imagePath.replace('./public', '');

      $fetch('/api/background/populate', { method: 'POST', params: { isMain: !this.isMain } });
    }
  }
});
