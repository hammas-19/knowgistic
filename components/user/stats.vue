<template>
    <div class="grid grid-cols-2 grid-rows-2 gap-2">

        <div v-for="items in 3" :class="{'row-span-2 justify-center items-center': items ==1}" class="flex flex-col gap-1 border rounded-xl p-2 text-ebonyClay md:text-sm text-xs hover:text-white bg-whiteLilac hover:bg-purplHeart transition-all duration-300">

            <h3 class="md:text-3xl text-xl font-semibold">
                50
            </h3>
            <span>
                Total Tasks
            </span>
            <span>
                ends soon
            </span>
            
        </div>

    </div>
</template>