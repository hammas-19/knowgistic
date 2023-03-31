<style scoped>
.marquee {
    /* flex: 0 0 auto; */
    z-index: 1;
    /* display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center; */
    animation: marqueescroll 120s linear 0s infinite alternate-reverse;
    animation-play-state: running;
    animation-delay: 0s;
    animation-direction: normal;
}

.reverse {
    /* flex: 0 0 auto; */
    z-index: 1;
    /* display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center; */
    animation: marqueescrollR 120s linear 0s infinite alternate-reverse;
    animation-play-state: running;
    animation-delay: 0s;
    animation-direction: normal;
}



.wrapper:hover div {
    animation-play-state: running;
}

.wrapper:active div {
    animation-play-state: running;
}

@keyframes marqueescroll {
    0% {
        transform: translateY(0%);
    }


    100% {
        transform: translateY(-50%);
    }
}

@keyframes marqueescrollR {
    0% {
        transform: translateY(-50%);
    }


    100% {
        transform: translateY(0%);
    }
}



.wrapper::-webkit-scrollbar {
    display: none;
}
</style>
<template>

    <div
        class="marquee-box bg-selago md:rounded-3xl mx-auto overflow-hidden flex items-center flex-col md:flex-row justify-between gap-10 lg:container px-9 md:h-[calc(100vh-400px)] h-screen">


        <div class="flex flex-col gap-4 text-center md:w-1/2 w-full">

            <h1 class="md:text-7xl text-4xl font-semibold font-handlee text-purplHeart">"
                
                <span class="text-comet">
                    What people are saying about us ...
                </span>

                "</h1>

        </div>

        <div
            class="wrapper grid lg:grid-cols-3 grid-cols-2 w-max md:gap-5 gap-2 hover:overflow-y-scroll h-full overflow-hidden relative">

            <!-- fading divs -->
            <div class="absolute w-full h-12 -top-1 rotate-180 z-20 bg-cardFade">
            </div>


            <div class="marquee grid grid-cols-1">

                <span v-for="items in 20" class="md:max-w-xs max-w-[170px]">

                    <article class=" rounded-xl bg-[#d7d7d7] md:p-3 p-2">

                        <div class="flex flex-col md:gap-2 gap-1 text-ebonyClay">
                            <h1 class="md:text-xl text-base font-semibold">Hammas Masood</h1>
                            <span class="text-purplHeart font-bold"> "
                                
                                <span class="md:text-sm text-xs text-ebonyClay font-normal">
                                    this is so cool—“state machine driven design” seems like a totally different way of building animations, yet it’s so intuitive that it makes sense immediately
                                </span>
                                "
                            </span>
                        </div>

                    </article>


                </span>
            </div>
            <div class="reverse grid grid-cols-1 md:gap-5 gap-2">

                <span v-for="items in 20" class="md:max-w-xs max-w-[170px] animate-none">

                    <article class=" rounded-xl bg-[#d7d7d7] md:p-3 p-2">

                        <div class="flex flex-col md:gap-2 gap-1 text-ebonyClay">
                            <h1 class="md:text-xl text-base font-semibold">Hammas Masood</h1>
                            <span class="text-purplHeart font-bold"> "
                                
                                <span class="md:text-sm text-xs text-ebonyClay font-normal">
                                    this is so cool—“state machine driven design” seems like a totally different way of building animations, yet it’s so intuitive that it makes sense immediately
                                </span>
                                "
                            </span>
                        </div>

                    </article>


                </span>

            </div>
            <div class="marquee lg:grid grid-cols-1 md:gap-5 gap-2 hidden">

                <span v-for="items in 20" class="md:max-w-xs max-w-[170px] animate-none">

                    <article class=" rounded-xl bg-[#d7d7d7] md:p-3 p-2">

                        <div class="flex flex-col md:gap-2 gap-1 text-ebonyClay">
                            <h1 class="md:text-xl text-base font-semibold">Hammas Masood</h1>
                            <span class="text-purplHeart font-bold"> "
                                
                                <span class="md:text-sm text-xs text-ebonyClay font-normal">
                                    this is so cool—“state machine driven design” seems like a totally different way of building animations, yet it’s so intuitive that it makes sense immediately
                                </span>
                                    "
                            </span>
                        </div>

                    </article>


                </span>

            </div>

        </div>

    </div>
</template>
