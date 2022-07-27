<script setup>
import { ref } from 'vue';
import { match } from "~/types/helpers/matchCard"

const cardClass = new (match(props.data))(props.data);
</script>


<template>
    <div v-if="!errored">
        <component :is="cardClass.component" @errored="errored = true" />
    </div>
</template>




<script>

const errored = ref(false)

export default {
    name: "DefaultCard",
    props: {
        data: {
            type: object,
            default: {}
        }
    },
}
</script>