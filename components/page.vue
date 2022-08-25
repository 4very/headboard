<script setup>
import { background } from '~/stores/background';
const props = defineProps({
  page: {
    type: String,
    default: String
  }
});

const store = background();

</script>

<template>
  <Background>
    <Grid v-if="!store.gridHidden" :page="props.page" />
  </Background>
</template>
