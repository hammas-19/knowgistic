<style scoped>
@keyframes cutter {
    0% {
        text-decoration: none;
    }

    100% {
        text-decoration: line-through solid #f66d6d 9%;
    }
}

@keyframes replacer {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}


.correct {
    opacity: 0;
    animation: replacer linear forwards 1;
    animation-duration: 0.3s;
    animation-delay: 0.6s;
}

.arrow {
    opacity: 0;
    animation: replacer linear forwards 1;
    animation-duration: 0.3s;
    animation-delay: 0.9s;
}

.wrong {
    animation: cutter ease-in forwards 1;
    animation-duration: 0.6s;
}
</style>
<template>
    <section class="relative text-ebonyClay bg-selago">

        <span class="absolute -top-24 w-full bg-none z-10 rotate-180">
            <img src="/images/hero/heroBottom.svg" class="w-full" alt="">
        </span>

        <div class="container flex flex-wrap px-5 py-24 mx-auto items-center">
            <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 md:mb-0 mb-10 pb-10 border-b border-comet">

                <h1 class="font-bold md:text-4xl text-2xl text-ebonyClay flex md:gap-4 gap-2 items-end">Why

                    <span class="flex flex-col items-center">

                        <div class="flex flex-col items-start">

                            <!-- correction -->
                            <span
                                class="correct md:text-4xl text-2xl transition-transform -rotate-[4deg] font-handlee text-purplHeart font-medium">Trust</span>
                            <!-- arrow -->
                            <span class="arrow h-8 "><img src="/images/hero/arrow.svg" class="h-full w-full"
                                    alt="arrow"></span>
                        </div>

                        <!-- the cut -->
                        <span class="wrong ">Choose</span>
                    </span>

                    Us?
                </h1>


                <p class="leading-relaxed text-base text-comet">Locavore cardigan small batch roof party blue bottle
                    blog meggings
                    sartorial jean shorts kickstarter migas sriracha church-key synth succulents. Actually taiyaki
                    neutra, distillery gastropub pok pok ugh.</p>
                <a class="text-blue-400 inline-flex items-center mt-4">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
            <div class="flex flex-col md:w-1/2 md:pl-12">
                <h2 class="title-font font-semibold text-ebonyClay tracking-wider text-sm mb-3">CATEGORIES</h2>
                <nav class="flex flex-wrap list-none -mb-1">
                    <li class="lg:w-1/3 mb-1 w-1/2">
                        <a class="hover:text-white">First Link</a>
                    </li>
                    <li class="lg:w-1/3 mb-1 w-1/2">
                        <a class="hover:text-white">Second Link</a>
                    </li>
                    <li class="lg:w-1/3 mb-1 w-1/2">
                        <a class="hover:text-white">Third Link</a>
                    </li>
                    <li class="lg:w-1/3 mb-1 w-1/2">
                        <a class="hover:text-white">Fourth Link</a>
                    </li>
                    <li class="lg:w-1/3 mb-1 w-1/2">
                        <a class="hover:text-white">Fifth Link</a>
                    </li>
                    <li class="lg:w-1/3 mb-1 w-1/2">
                        <a class="hover:text-white">Sixth Link</a>
                    </li>
                    <li class="lg:w-1/3 mb-1 w-1/2">
                        <a class="hover:text-white">Seventh Link</a>
                    </li>
                    <li class="lg:w-1/3 mb-1 w-1/2">
                        <a class="hover:text-white">Eighth Link</a>
                    </li>
                </nav>
            </div>
        </div>
    </section>
</template>