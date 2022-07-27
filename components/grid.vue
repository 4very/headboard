<script setup>
import DefaultCard from './cards/defaultCard.vue'
import data from '~/config/main.yml'
</script>


<template>
    <section
        class="bg-off-white1 dark:bg-blue3 min-h-screen flex items-center justify-center pt-10 pb-10 font-helvetica">
        <div
            class="grid xl:grid-cols-7 md:grid-cols-5 sm:grid-cols-3 xs:grid-cols-2 gap-y-6 gap-x-6 grid-flow-row-dense content-center">
            <DefaultCard v-for="(card, val) in data.cards" :key="card.id" :data="card" :idnum="val" />
        </div>
    </section>
</template>

    <script>
    
    
    export default {
        name: "MainGrid", components: { DefaultCard }
    } </script>
