<template>
    <div>
        <section class="bg-astronaut rounded-[35px] d:outline-4 outline-[3px] outline-nectarine outline-dashed">
            <div class="mx-auto max-w-screen-xl px-4 md:py-16 py-5 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div class="relative h-64 overflow-hidden sm:h-80 lg:order-last lg:h-full rounded-[35px] bg-myst">
                        <img alt="Party" src="/images/index_v2/logo-njp-animated-2.gif"
                            class="absolute inset-0 h-full w-full object-contain" />
                    </div>

                    <div class="lg:py-24 flex flex-col items-center md:items-start text-center md:text-left">
                        <h2 class="text-3xl font-bold sm:text-4xl text-nectarine">Apply for your job</h2>

                        <p class="mt-4 text-myst">
                            Apply for your desired govt job with in few steps by clicking the button below
                        </p>

                        <a href="#"
                            class="jobButton mt-8 inline-flex items-center border-4 border-dashed rounded-3xl hover:border-nectarine hover:bg-white hover transition-all px-8 py-3 text-nectborder-nectarine hover:bg-transparent hover:text-nectborder-nectarine focus:outline-none focus:ring active:text-indigo-500">
                            <span class="text-sm font-medium text-nectarine"> Get Started </span>

                            <svg class="arrow ml-3 h-5 w-5 transition-all" xmlns="http://www.w3.org/2000/svg"
                                fill="#FF8656" viewBox="0 0 24 24" stroke="#FF8656">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>
<style scoped>
.jobButton:hover .arrow {
    margin-left: 30px;
}
</style>