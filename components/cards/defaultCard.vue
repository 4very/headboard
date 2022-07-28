<script setup>
import { match } from '~/types/helpers/matchCard';

const props = defineProps({
  data: {
    type: Object,
    default: Object
  },
  idnum: {
    type: Number,
    default: Number
  }
});

// console.log(props.data)

const cardClass = new (match(props.data))(props.data);
</script>

<template>
  <div
    :class="`w-full shadow-lg rounded-xl relative
    ${(props.data.id === 'spacer') ? 'invisible' : ''}
    ${(props.data.rowSpan == 2 && props.data.colSpan == 1) ? 'row-span-2 pb-full' : 'h-0'}
    ${(props.data.rowSpan == 1 && props.data.colSpan == 2) ? 'col-span-2 pb-1/2' : 'pb-full'}
    ${(props.data.rowSpan == 2 && props.data.colSpan == 2) ? 'row-span-2 col-span-2' : ''} `"
  >
    <component :is="cardClass.component" :data="props.data" />
  </div>
</template>

<script>

export default {
  name: 'DefaultCard'
};
</script>
