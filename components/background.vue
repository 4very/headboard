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
      class="flex font-sans font-extralight w-full p-5 bottom-0 left-0 absolute justify-items-start"
      style="
      background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.33) 33%, rgba(0, 0, 0, 0.5) 100%);
      background-color: rgba(0, 0, 0, 0);
      transition: opacity .2s ease-out"
    >
      <div class="flex flex-col mt-2 items-center">
        <button href="#" @click="store.toggleGrid">
          <svg
            v-if="store.gridHidden"
            class="h-5 text-slate-300 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
          </svg>
          <svg
            v-if="!store.gridHidden"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-5 text-slate-300 w-5"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
        <button href="#" @click="ToggleLiked">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-5 mt-1 text-slate-300 w-5"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3l1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 011.743-1.342 48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664L19.5 19.5" />
          </svg>
        </button>
      </div>
      <div class="flex flex-col mt-2 mr-2 ml-1 items-center">
        <button href="#" @click="ChangeBackground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            class="h-5  text-slate-300 w-5"
            :class="{ 'animate-spin': clicked }"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12c0-1.232.046-2.453.138-3.662a4.006 4.006 0 013.7-3.7 48.678 48.678 0 017.324 0 4.006 4.006 0 013.7 3.7c.017.22.032.441.046.662M4.5 12l-3-3m3 3l3-3m12 3c0 1.232-.046 2.453-.138 3.662a4.006 4.006 0 01-3.7 3.7 48.657 48.657 0 01-7.324 0 4.006 4.006 0 01-3.7-3.7c-.017-.22-.032-.441-.046-.662M19.5 12l-3 3m3-3l3 3" />
          </svg>
        </button>

        <button href="#" @click="ToggleLiked">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            class="h-6 mt-1 stroke-2 text-red-400 w-6 "
            :class="{ 'fill-red-400': store.data.liked }"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
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
