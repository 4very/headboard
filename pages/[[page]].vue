<script setup>
import { CardData } from '~~/stores/cardData';

const route = useRoute();
const page = route.params.page === '' ? 'main' : route.params.page;
const data = (await $fetch('/api/config/get', { params: { file: page } }));

if (data.success) {
  const store = CardData();
  store.resetPage(page);
  data.data.cards.forEach((elt) => {
    store.addCardWithType(page, elt);
  });
}

</script>

<template>
  <div>
    <Page v-if="data.success" :page="page" />
    <ErrorPage v-if="!data.success" :path="data.path" :route="route" />
  </div>
</template>
