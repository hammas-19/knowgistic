<template>
    <div class="bg-whiteLilac flex justify-between items-center flex-col py-5 px-2 md:gap-20 gap-8 md:max-h-[calc(100vh-400px)] max-h-[calc(100vh-200px)]">

        <!-- Infography -->
        <div class="flex flex-col gap-7 justify-center items-center">

            <h1 class="font-bold text-ebonyClay text-4xl px-2 text-center">
                Join a successful journey today
            </h1>
            <NuxtLink to="/auth/login">

                <span class="px-4 py-2 text-center font-medium text-sm rounded-md text-white bg-midHeart">
                    Start Journey
                </span>

            </NuxtLink>

        </div>

        <!-- Candidates Gallery -->
        <div class="grid grid-cols-5 grid-rows-2 md:gap-3 gap-1 md:container md:h-[320px] h-auto">

            <!-- Left -->
            <div class="row-span-2 py-10 flex items-center opacity-70 hover:opacity-100 transition-all">
                <img src="/images/cta/hamza.jpeg" class="w-full h-full object-cover md:rounded-lg rounded-md" alt="">
            </div>

            <!-- 2nd left -->
            <img src="/images/cta/hasnain.jpeg"
                class="w-full h-full object-cover row-start-1 col-start-2 md:rounded-lg rounded-md opacity-70 hover:opacity-100 transition-all"
                alt="">
            <img src="/images/cta/sameer.jpeg"
                class="w-full h-full object-cover row-start-2 col-start-2 md:rounded-lg rounded-md opacity-70 hover:opacity-100 transition-all"
                alt="">


            <!-- Center -->
            <div class="row-span-2 flex items-center h-full opacity-70 hover:opacity-100 transition-all">

                <img src="/images/cta/hammas.jpeg" class="w-full h-full object-cover md:rounded-lg rounded-md" alt="">

            </div>

            <!-- 2nd Right -->
            <img src="/images/cta/junni.jpeg"
                class="w-full h-full object-cover row-start-1 col-start-4 md:rounded-lg rounded-md opacity-70 hover:opacity-100 transition-all"
                alt="">
            <img src="/images/cta/yasir.jpeg"
                class="w-full h-full object-cover row-start-2 col-start-4 md:rounded-lg rounded-md opacity-70 hover:opacity-100 transition-all"
                alt="">

            <!-- Right -->
            <div class="row-span-2 py-10 flex items-center opacity-70 hover:opacity-100 transition-all">
                <img src="/images/cta/shaheer.jpeg" class="w-full h-full object-cover md:rounded-lg rounded-md" alt="">
            </div>

        </div>
    </div>
</template>