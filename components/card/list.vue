<script setup>
import { CardData } from '~~/stores/cardData';
import { defaultCardProps } from '~~/types/card/default';

const props = defineProps(defaultCardProps);
const store = CardData();
</script>

<template>
  <div>
    <ul
      class=" border-solid list-none border-teal-600 h-3 m-0 text-left mb-2 pt-1 pl-5 left-0 text-off-white1 w-1 relative before:block before:absolute"
    >
      <li class="font-black text-lg text-center underline underline-offset-4 decoration-2 decoration-off-white1">
        {{ store.cards[props.page][props.id]?.title }}
      </li>
      <li v-for="(elt, i) in store.cards[props.page][props.id].elements" :key="i">
        <a :href="elt.link">{{ elt?.text ? elt.text : elt.link }}</a>
      </li>
    </ul>
  </div>
</template>
