<template>
    <div class="flex flex-col items-center max-w-[340px] md:max-w-[280px]">
        <img :src="props.image"
            class="border rounded-xl rounded-b-none md:rounded-b-xl w-[340px] h-[120px] md:w-[420px] object-cover object-center"
            alt="">
        <div
            class="flex flex-col rounded-2xl bg-selago border border-dashed border-purplHeart gap-2  p-3 -mt-2 md:-mt-10 hover:shadow-lg transition-all md:hover:-mt-11 hover:-mt-3 text-ebonyClay items-center w-[95%]">

            <span class=" text-lg text-center font-semibold">
                {{ props.name }}
            </span>
            <!-- <span class="text-lg font-semibold">
                Quiz - Level 1
            </span> -->
            <NuxtLink
                class="relative font-medium  rounded-xl border px-6 py-2 text-white bg-comet transition-all cursor-pointer">
                Start
            </NuxtLink>
        </div>

    </div>
</template>
<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})
</script>