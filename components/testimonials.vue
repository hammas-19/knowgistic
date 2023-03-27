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
        class="marquee-box bg-selago rounded-3xl mx-auto overflow-hidden flex items-center flex-col md:flex-row justify-between gap-10 lg:container px-9 md:h-[calc(100vh-400px)] h-[calc(100vh-80px)]">


        <div>
            <HeadingText />
        </div>

        <div
            class="wrapper grid lg:grid-cols-3 grid-cols-2 w-max md:gap-5 gap-2 hover:overflow-y-scroll h-full overflow-hidden relative">

            <!-- fading divs -->
            <div class="absolute w-full h-12 -top-1 rotate-180 z-20 bg-cardFade">
            </div>


            <div class="marquee grid grid-cols-1">

                <span v-for="items in 20" class="element md:h-52 h-36 md:w-52 w-36">

                    <article class=" rounded-xl border border-gray-700 bg-[#f7f4ff] p-1">
                        <div class="flex items-center">
                            <img alt="Developer"
                                src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                                class="h-16 w-16 rounded-full object-cover" />

                            <div class="ml-3">
                                <h3 class="text-lg font-medium text-white">Claire Mac</h3>

                                <div class="flow-root">
                                    <ul class="-m-1 flex flex-wrap">
                                        <li class="p-1 leading-none">
                                            <a href="#" class="text-xs font-medium text-gray-300"> Twitter </a>
                                        </li>

                                        <li class="p-1 leading-none">
                                            <a href="#" class="text-xs font-medium text-gray-300"> GitHub </a>
                                        </li>

                                        <li class="p-1 leading-none">
                                            <a href="#" class="text-xs font-medium text-gray-300">Website</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <ul class="space-y-2">
                            <li>
                                <a href="#"
                                    class="block h-full rounded-lg border border-gray-700 p-1 hover:border-pink-600">
                                    <strong class="font-medium text-white">Project A</strong>

                                    <p class="mt-1 text-xs font-medium text-gray-300">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                                        consequuntur deleniti, unde ab ut in! 
                                    </p>
                                </a>
                            </li>

                        </ul>
                    </article>


                </span>
            </div>
            <div class="reverse grid grid-cols-1 gap-2">

                <span v-for="items in 20" class="element md:h-52 h-36 md:w-52 w-36 animate-none">

                    <article class=" rounded-xl border border-gray-700 bg-pGray p-1">
                        <div class="flex items-center">
                            <img alt="Developer"
                                src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                                class="h-16 w-16 rounded-full object-cover" />

                            <div class="ml-3">
                                <h3 class="text-lg font-medium text-white">Claire Mac</h3>

                                <div class="flow-root">
                                    <ul class="-m-1 flex flex-wrap">
                                        <li class="p-1 leading-none">
                                            <a href="#" class="text-xs font-medium text-gray-300"> Twitter </a>
                                        </li>

                                        <li class="p-1 leading-none">
                                            <a href="#" class="text-xs font-medium text-gray-300"> GitHub </a>
                                        </li>

                                        <li class="p-1 leading-none">
                                            <a href="#" class="text-xs font-medium text-gray-300">Website</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <ul class="space-y-2">
                            <li>
                                <a href="#"
                                    class="block h-full rounded-lg border border-gray-700 p-1 hover:border-pink-600">
                                    <strong class="font-medium text-white">Project A</strong>

                                    <p class="mt-1 text-xs font-medium text-gray-300">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                                        consequuntur deleniti, unde ab ut in!
                                    </p>
                                </a>
                            </li>

                        </ul>
                    </article>


                </span>

            </div>
            <div class="marquee lg:grid grid-cols-1 gap-2 hidden">

                <span v-for="items in 20" class="element md:h-52 h-36 md:w-52 w-36 animate-none">

                    <article class=" rounded-xl border border-gray-700 bg-pGray p-1">
                        <div class="flex items-center">
                            <img alt="Developer"
                                src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                                class="h-16 w-16 rounded-full object-cover" />

                            <div class="ml-3">
                                <h3 class="text-lg font-medium text-white">Claire Mac</h3>

                                <div class="flow-root">
                                    <ul class="-m-1 flex flex-wrap">
                                        <li class="p-1 leading-none">
                                            <a href="#" class="text-xs font-medium text-gray-300"> Twitter </a>
                                        </li>

                                        <li class="p-1 leading-none">
                                            <a href="#" class="text-xs font-medium text-gray-300"> GitHub </a>
                                        </li>

                                        <li class="p-1 leading-none">
                                            <a href="#" class="text-xs font-medium text-gray-300">Website</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <ul class="space-y-2">
                            <li>
                                <a href="#"
                                    class="block h-full rounded-lg border border-gray-700 p-1 hover:border-pink-600">
                                    <strong class="font-medium text-white">Project A</strong>

                                    <p class="mt-1 text-xs font-medium text-gray-300">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                                        consequuntur deleniti, unde ab ut in!
                                    </p>
                                </a>
                            </li>

                        </ul>
                    </article>


                </span>

            </div>

        </div>

    </div>
</template>
