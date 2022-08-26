<script setup>
import { CardData } from '~~/stores/cardData';
import { defaultCardProps } from '~~/types/card/default';

const props = defineProps(defaultCardProps);
const store = CardData();
const cardData = store.pages[props.page].cards[props.id];

</script>

<template>
  <div>
    <ul
      class="list-none h-3 m-0 text-left mb-2 pt-1 pl-5 left-0 w-1 relative before:block before:absolute"
    >
      <li class="font-black text-lg text-center underline underline-offset-4 decoration-2 decoration-off-white1">
        {{ cardData?.title }}
      </li>
      <li v-for="(elt, i) in cardData.elements" :key="i">
        <a
          :href="elt.link"
          :style="{
            'color': elt?.color
          }"
        >
          {{ elt?.text ? elt.text : elt.link }}
        </a>
      </li>
    </ul>
  </div>
</template>
