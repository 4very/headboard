<script setup>
import { match } from "~/types/helpers/matchCard"
import { ref } from 'vue';

const props = defineProps(['data'])
const cardClass = new (match(props.data))(props.data);
</script>


<template>
    <div v-if="!errored">
        <component :is="cardClass.component" @errored="errored = true"> </component>
    </div>
</template>




<script>

const errored = ref(false)

export default {
    name: "defaultCard",
}
</script>