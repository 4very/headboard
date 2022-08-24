<script setup>
import { CardData } from '~~/stores/cardData';

const props = defineProps({
  id: {
    type: Number,
    default: Number
  }
});

const store = CardData();
console.log(store.cards[props.id].validate());

</script>

<template>
  <div>
    <ul
      class=" border-solid list-none border-teal-600 h-3 m-0 text-left mb-2 pt-1 pl-5 left-0 text-off-white1 w-1 relative before:block before:absolute"
    >
      <li class="font-black text-lg text-center underline underline-offset-4 decoration-2 decoration-off-white1">
        {{ store.cards[props.id]?.title }}
      </li>
      <li v-for="(elt, i) in store.cards[props.id].elements" :key="i">
        <a :href="elt.link">{{ elt?.text ? elt.text : elt.link }}</a>
      </li>
    </ul>
  </div>
</template>
