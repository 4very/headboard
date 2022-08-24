<script setup>
import { CardData } from '~/stores/cardData';

const props = defineProps({
  id: {
    type: Number,
    default: Number
  }
});

const store = CardData();
</script>

<template>
  <div
    :class="`w-full shadow-lg rounded-xl relative  bg-[#465780]
    ${(store.cards[props.id].id === 'spacer') ? 'invisible' : ''}
    ${(store.cards[props.id].rowSpan == 2 && store.cards[props.id].colSpan == 1) ? 'row-span-2 pb-full' : 'h-0'}
    ${(store.cards[props.id].rowSpan == 1 && store.cards[props.id].colSpan == 2) ? 'col-span-2 pb-1/2' : 'pb-full'}
    ${(store.cards[props.id].rowSpan == 2 && store.cards[props.id].colSpan == 2) ? 'row-span-2 col-span-2' : ''} `"
  >
    <component :is="store.validComponent(props.id)" :id="props.id" />
  </div>
</template>
