<script setup>
const store = backgroundStore();

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
  }, 500);
  store.shuffleImage();
}
</script>

<template>
  <div
    class="bg-cover bg-center bg-no-repeat bg-fixed min-h-screen min-w-screen dark:bg-blue"
    :style="{ backgroundImage: `url('data:image/jpeg;base64,${store.data.base64}')` }"
  >
    <slot />
    <div
      class="flex flex-col align-left fixed bottom-0 w-full bg-gradient-to-t from-neutral-900 p-2"
    >
      <!-- drop up menu for misc things -->
      <div class="flex flex-col-reverse align-middle justify-items-center">
        <button href="#" @click="store.toggleMenu">
          <IconMenu class="h-6 stroke-2 text-slate-300 w-6" :toggle="store.menuOpen" />
        </button>
        <div v-if="store.menuOpen" class="flex flex-col-reverse gap-1">
          <button href="#" @click="store.toggleGrid">
            <IconEye :toggle="store.gridHidden" class="h-6 text-slate-300 w-6" />
          </button>

          <!-- <button href="#" @click="store.toggleBackground">
            <IconBookmark class="h-6 mt-1 text-slate-300 w-6" :toggle="store.backgroundHidden" />
          </button> -->
        </div>
      </div>

      <!-- background interface buttons -->
      <div
        class="flex font-sans font-extralight w-full justify-items-start gap-1"
      >
        <div class="flex flex-col items-center justify-center gap-1">
          <button href="#" @click="ChangeBackground">
            <IconCircleArrows
              class="h-5  text-slate-300 w-5"
              :class="{ 'animate-spin': clicked }"
            />
          </button>

          <button href="#" @click="ToggleLiked">
            <IconHeart
              class="h-6 stroke-2 text-red-400 w-6"
              :class="{ 'fill-red-400': store.data.liked }"
            />
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
  </div>
</template>

<script>

export default {
  name: 'BackgroundHandler'
};
</script>
