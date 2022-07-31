<script setup>
import { CardData } from '~~/stores/cardData';

const props = defineProps({
  id: {
    type: Number,
    default: Number
  }
});

const store = CardData();

if (store.cards[props.id].elements.length === 1) {
  store.invalid(props.id);
}

</script>

<template>
  <div>
    <ul
      class=" border-solid list-none border-teal-600 h-3 m-0 text-left mb-2 pt-1 pl-5 left-0 text-off-white1 w-1 relative before:block before:absolute"
    >
      <li class="font-black text-lg text-center underline underline-offset-4 decoration-2 decoration-off-white1">
        work
      </li>
      <li>
        <a href="https://stackoverflow.com">stack</a>
      </li>
      <li>
        <a href="https://github.com">github</a>
      </li>
      <li>
        <a href="https://gist.github.com/timothypholmes">gists</a>
      </li>
    </ul>
  </div>
</template>
