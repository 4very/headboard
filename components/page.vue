<script setup>
import { background } from '~/stores/background';

const store = background();

</script>

<template>
  <Background>
    <Grid v-if="!store.gridHidden" />
  </Background>
</template>
