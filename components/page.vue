<script setup>

const props = defineProps({
  data: {
    type: Object,
    default: Object
  }
});

// const data = await useAsyncData(props.filename, () => import(`~/config/${props.filename}`));
// console.log(data);

// console.log(data, props);

</script>

<template>
  <Background>
    <Grid :data="props.data" />
  </Background>
</template>

<script>
export default {
  name: 'PAGE'
};
</script>
