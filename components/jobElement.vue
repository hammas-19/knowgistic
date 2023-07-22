<template>
    <div
        class="flex gap-2 items-center border border-whiteLilac md:max-w-[280px] max-w-[140px] w-full md:p-2 p-1 rounded-xl bg-white transition-all hover:shadow-lg shadow-whiteLilac cursor-pointer">

        <span class="md:w-1/3 w-2/4">
            <img src="/images/GOVTpk.png" alt="">
        </span>
        <div
            class="text-comet text-xs md:p-2 p-1 md:rounded-lg rounded-md flex flex-col justify-around md:gap-1 gap-[2px] bg-whiteLilac w-full md:h-28 h-20 md:text-sm">
            <span class="font-semibold">
                {{ props.title }}
            </span>
            <span class="font-semibold">
                <span class="font-normal">No. of posts :</span> {{ props.posts }}

            </span>
            <span class="text-xs">
                Test Date : {{ props.dated }}

            </span>
        </div>

    </div>
</template>
<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    posts: {
        type: String,
        required: true
    },
    dated: {
        type: String,
        required: true
    }
})
</script>