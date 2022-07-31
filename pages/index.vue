<script setup>
import { CardData } from '~~/stores/cardData';
import data from '~/assets/config/main.yaml';
import { match } from '~~/types/helpers/matchCard';

// import { match } from '~/types/helpers/matchCard';
// import { Card } from '~~/types/card/default';

// const par = data.cards.forEach((element) => {
//   return (new (match(element))(element));
// });

// console.log(par);
const store = CardData();
store.$patch({
  cards: []
});
data.cards.forEach((elt) => {
  store.$patch((store) => {
    store.cards.push(new (match(elt))(elt));
  });
});

// console.log(store);
// const filename = 'main'
// const data = (await import(`../assets/config/${filename}.yaml`)).default
</script>

<template>
  <div>
    <Page />
  </div>
</template>
