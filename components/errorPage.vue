<script setup>
const props = defineProps({
  path: {
    type: String,
    default: String
  },
  route: {
    type: String,
    default: String
  }
});
</script>

<template>
  <div>{{ props.path }} {{ props.route }}</div>
</template>
