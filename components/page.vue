<script setup>
const props = defineProps({
  page: {
    type: String,
    default: String
  }
});

const store = backgroundStore();

</script>

<template>
  <Background>
    <Grid v-if="!store.gridHidden" :page="props.page" />
  </Background>
</template>
