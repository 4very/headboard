<script setup>
import data from '../assets/config/main.yaml';

// const filename = 'main'
// const data = (await import(`../assets/config/${filename}.yaml`)).default
</script>

<template>
  <div>
    <Page :data="data" />
  </div>
</template>
