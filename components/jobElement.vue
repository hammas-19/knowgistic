<template>

    <div class="flex flex-col md:flex-row gap-2 items-center border border-whiteLilac max-w-[280px] w-full md:p-2 p-1 rounded-xl bg-white transition-all hover:shadow-lg shadow-whiteLilac cursor-pointer">
    
        <span class="md:w-1/3 w-2/4">
            <img src="/images/GOVTpk.png" alt="">
        </span>
        <div class="text-comet text-sm p-2 rounded-lg flex flex-col justify-around gap-1 bg-whiteLilac w-full items-center text-center md:items-start md:text-left md:h-28">
            <span class="font-semibold">
                {{ props.title }}
            </span>
            <span class="text-sm font-semibold">
                <span class="font-normal">No. of posts :</span> {{ props.posts }} 
    
            </span>
            <span class="text-xs">
                {{ props.dated }}
    
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