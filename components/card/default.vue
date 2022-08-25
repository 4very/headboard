<script setup>
import { CardData } from '~/stores/cardData';
import { defaultCardProps } from '~~/types/card/default';

const props = defineProps(defaultCardProps);
const store = CardData();

store.cards[props.page][props.id].validate();
</script>

<template>
  <div
    :class="`w-full shadow-lg rounded-xl relative
    ${(store.cards[props.page][props.id].id === 'spacer') ? 'invisible' : ''}
    ${(store.cards[props.page][props.id].rowSpan == 2 && store.cards[props.page][props.id].colSpan == 1) ? 'row-span-2 pb-full' : 'h-0'}
    ${(store.cards[props.page][props.id].rowSpan == 1 && store.cards[props.page][props.id].colSpan == 2) ? 'col-span-2 pb-1/2' : 'pb-full'}
    ${(store.cards[props.page][props.id].rowSpan == 2 && store.cards[props.page][props.id].colSpan == 2) ? 'row-span-2 col-span-2' : ''} `"
  >
    <component :is="store.validComponent(props.page, props.id)" :id="props.id" :page="props.page" />
  </div>
</template>
