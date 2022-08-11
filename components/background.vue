<script setup>

</script>

<template>
  <div class="bg-cover bg-center bg-no-repeat min-h-screen min-w-screen dark:bg-blue3" :style="{backgroundImage: `url('/background/main.jpeg')`}">
    <slot />
  </div>
</template>

<script>

export default {
  name: 'BackgroundHandler'
};

// broswer local storage two images + data
// display first one
// if refresh or timestamp > time
// move 2nd to one and display it
// add create new second one
// refresh timestamp
</script>
