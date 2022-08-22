<script setup>

import { background } from '~/stores/background';

const store = background();

if (store.data.base64 === undefined) {
  store.init();
}

const clicked = ref(false);

function ToggleLiked () {
  store.toggleLike();
}
function ChangeBackground () {
  clicked.value = true;
  setTimeout(() => {
    clicked.value = false;
  }, 1000);
  store.shuffleImage();
}

</script>

<template>
  <div
    class="bg-cover bg-center bg-no-repeat min-h-screen min-w-screen dark:bg-blue3"
    style=""
    :style="{ backgroundImage: `url('data:image/jpeg;base64,${store.data.base64}')` }"
  >
    <slot />
    <div
      class="flex font-sans font-extralight w-full p-5 bottom-0 left-0 gap-3 absolute justify-items-start"
      style="
      background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.33) 33%, rgba(0, 0, 0, 0.5) 100%);
      background-color: rgba(0, 0, 0, 0);
      transition: opacity .2s ease-out"
    >
      <div class="flex flex-col mt-2 items-center">
        <button href="#" @click="ChangeBackground">
          <svg
            class="h-5  text-slate-300 w-5"
            :class="{ 'animate-spin': clicked }"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </button>
        <button href="#" @click="ToggleLiked">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 mt-1 stroke-2 text-red-400 w-6 "
            :class="{ 'fill-red-400': store.data.liked }"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
      <div class="flex flex-col">
        <h1 class="text-2xl text-slate-50 hover:underline">
          <a :href="store.data.link">{{ store.data.title }}</a>
        </h1>
        <div class="text-lg text-slate-300 ">
          <a :href="store.data.artist_link" class="hover:underline">
            {{ store.data.creator }}
          </a>
          <span> | </span>
          <a :href="store.data.attribution_link" class="hover:underline">
            {{ store.data.attribution }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BackgroundHandler'
};
</script>
