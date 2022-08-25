<script setup>
import { CardData } from '~~/stores/cardData';
const props = defineProps({
  page: {
    type: String,
    default: String
  }
});

const store = CardData();
</script>

<template>
  <div class="mx-auto max-w-screen-lg p-10">
    <div class="mt-12 grid gap-4 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-7">
      <CardDefault v-for="(_, val) in store.cards[props.page]" :id="val" :key="val" :page="props.page" />
    </div>
  </div>
</template>
