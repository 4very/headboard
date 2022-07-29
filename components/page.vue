<script setup>

// const props = defineProps({
//   filename: {
//     type: String,
//     default: 'main.yml'
//   }
// });

// const data = await useAsyncData(props.filename, () => import(`~/config/${props.filename}`));
// console.log(data);

// console.log(data, props);

</script>

<template>
  <Background>
    <Grid />
  </Background>
</template>

<script>
export default {
  name: 'PAGE'
}
</script>
