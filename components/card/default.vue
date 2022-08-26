<script setup>
import { CardData } from '~/stores/cardData';
import { defaultCardProps } from '~~/types/card/default';

const props = defineProps(defaultCardProps);
const store = CardData();
const cardData = store.pages[props.page].cards[props.id];

// cardData.validate();
</script>

<template>
  <div
    class="rounded-xl shadow-lg w-full relative"
    :class="[
      (cardData.id === 'spacer') ? 'invisible' : '',
      (cardData.rowSpan == 2 && cardData.colSpan == 1) ? 'row-span-2 pb-full' : 'h-0',
      (cardData.rowSpan == 1 && cardData.colSpan == 2) ? 'col-span-2 pb-1/2' : 'pb-full',
      (cardData.rowSpan == 2 && cardData.colSpan == 2) ? 'row-span-2 col-span-2' : '']"
    :style="{
      'color': cardData?.textColor,
      'background-color': cardData?.backgroundColor
    }"
  >
    <component :is="store.validComponent(props.page, props.id)" :id="props.id" :page="props.page" />
  </div>
</template>
