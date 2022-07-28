<script setup>

const props = defineProps({
  data: {
    type: Object,
    default: Object
  }
});
</script>

<template>
  <div class=" rounded-xl bg-rose-300/50 absolute h-full w-full flex flex-col items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-2/5 w-2/5 text-rose-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
    <div class="text-rose-900 text-lg -mt-2">
      {{ props.data.text }}
    </div>
    <div class="text-rose-700 text-sm text-center">
      {{ props.data.subtext }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorCard'
};
</script>
