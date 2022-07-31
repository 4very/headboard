<script setup>

const props = defineProps({
  data: {
    type: Object,
    default: Object
  }
});

</script>

<template>
  <div class="mx-auto max-w-screen-lg p-10">
    <div class="mt-12 grid gap-4 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-7">
      <CardsDefault v-for="(card, val) in props.data.cards" :key="card.id" :data="card" :idnum="val" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'MainGrid'
};

</script>
