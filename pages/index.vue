<script setup>
import { CardData } from '~~/stores/cardData';
import data from '~/assets/config/main.yaml';

const store = CardData();
store.$patch({
  cards: []
});
data.cards.forEach((elt) => {
  store.addCardWithType(elt);
});

</script>

<template>
  <div>
    <Page />
  </div>
</template>
