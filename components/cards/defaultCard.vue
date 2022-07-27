<script setup>
import { match } from "~/types/helpers/matchCard"

const props = defineProps({
    data: {
        type: Object,
        default: Object
    },
    idnum: {
        type: Number,
        default: Number
    }
})
const cardClass = new (match(props.data))(props.data);
</script>

<template>
    <div>
        <component :is="cardClass.component" />
    </div>
</template>

<script>
export default {
    name: "DefaultCard",
}
</script>