<script setup>

// const data = {
//   cards: [
//     {
//       id: 'error'
//     }
//   ]
// }
</script>

<template>
  <div class="max-w-screen-lg mx-auto p-10">
    <div class="grid xl:grid-cols-7 md:grid-cols-5 sm:grid-cols-3 xs:grid-cols-2 gap-4 mt-12">
      <!-- <DefaultCard v-for="(card, val) in data.cards" :key="card.id" :data="card" :idnum="val" /> -->
      hello from grid
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainGrid'
}

</script>
