<template>
    <div>
        <ul
            class=" text-left text-off-white1 m-0 pl-5 pt-1 before:block before:absolute left-0 w-1 h-3 border-solid border-teal-600 relative list-none mb-2">
            <li class="font-black text-lg underline underline-offset-4 decoration-2 decoration-off-white1 text-center">
                work
            </li>
            <li>
                <a href="https://stackoverflow.com">stack</a>
            </li>
            <li>
                <a href="https://github.com">github</a>
            </li>
            <li>
                <a href="https://gist.github.com/timothypholmes">gists</a>
            </li>
        </ul>
    </div>
</template>


<script>


// $emit('toggle')
// this.$emit('update:error', true)
export default {
    name: 'LinkListC',
    emits: { 'errored': null }
}
</script>