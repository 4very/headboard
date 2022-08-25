<script setup>
import { CardData } from '~~/stores/cardData';
import { defaultCardProps } from '~~/types/card/default';

const props = defineProps(defaultCardProps);
const store = CardData();
</script>

<template>
  <div class=" rounded-xl flex flex-col h-full bg-rose-300/50 w-full absolute items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-2/5 text-rose-500 w-2/5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
    <div class="-mt-2 text-lg text-center text-rose-900">
      {{ store.cards[props.page][props.id].errorText }}
    </div>
    <div class="text-sm text-center text-rose-700">
      {{ store.cards[props.page][props.id].errorSubText }}
    </div>
    <div class="top-1 left-2 text-rose-800 absolute">
      {{ props.id }}
    </div>
  </div>
</template>
