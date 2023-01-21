<template>
    <div v-for="items in courseData"
        class="relative flex flex-row-reverse md:flex-row p-1 bg-blueChalk md:rounded-3xl rounded-xl  justify-between md:gap-2 gap-[2px] max-w-[340px] md:max-w-max items-center">
        <img :src="items.image" class="object-cover md:w-48 w-28  md:h-48 h-28 mb-10 md:mb-0 rounded-md" alt="courseImg">

        <div class="flex flex-col justify-between md:gap-2 gap-[2px] max-w-[340px] h-full md:h-auto py-2">
            <span class="text-gulfBlue md:text-2xl text-base font-semibold">
                {{ items.from }}
            </span>
            <span class="md:text-sm text-xs text-osloGrey">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsum ullam maxime error rem ea nemo, fugit
                dolorem reiciendis.
            </span>
            <span class="md:text-sm text-xs text-amaranth font-medium">Bsc, MSc and postgraduate</span>
        </div>

        <span
            class="absolute md:right-4 right-6 md:bottom-4 bottom-1 hover:text-gulfBlue hover:bg-blueChalk bg-gulfBlue hover:border-dashed hover:border-[3px] cursor-pointer transition-all shadow-lg hover:border-gulfBlue text-blueChalk rounded-md md:py-2 py-[1px] md:px-6 px-3 text-center font-medium">
            start
        </span>

    </div>
</template>
<script setup>
const props = defineProps({
        level: {
                type: String,
                required: true,
        }
});
const courseData = [

    {
        image: 'images/index_v2/gk.png',
        from: 'General Knowledge',
        level: '1'
    },
    
    {
        image: 'images/index_v2/analytics.png',
        from: 'Analytical Problems',
        level: '1'

    },
    {
        image: 'images/index_v2/ca.png',
        from: 'Current Affairs',
        level: '2'
    },
    {
        image: 'images/index_v2/cs.png',
        from: 'Computer Studies',
        level: '2'
    },
    {
        image: 'images/index_v2/eng.png',
        from: 'English',
        level: '3'
    },
    {
        image: 'images/index_v2/isl.png',
        from: 'Islamic Studies',
        level: '3'
    },
    {
        image: 'images/index_v2/maths.png',
        from: 'Maths',
        level: '3'
    },
    {
        image: 'images/index_v2/pro.png',
        from: 'Professionalism',
        level: '3'
    },
    {
        image: 'images/index_v2/sci.png',
        from: 'General Science',
        level: '3'
    },
    {
        image: 'images/index_v2/sindhi.png',
        from: 'Sindhi',
        level: '3'
    },
    {
        image: 'images/index_v2/urdu.png',
        from: 'Urdu',
        level: '3'
    },
]
</script>