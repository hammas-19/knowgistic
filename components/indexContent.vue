<template>
    <div>
        <div class="container mx-auto py-10 md:py-md">

            <h1 class="text-center text-4xl pb-10 text-shark">
                Current
                <span class=" bg-myst border-2 border-myst px-2 rounded-full">
                    Govt-Jobs
                </span>
            </h1>

            <div class="flex flex-col md:flex-row justify-evenly gap-10 overflow-x-scroll flex-shrink scroll-area">

                <div v-for="items in 10" class="rounded-2xl bg-myst p-8 flex flex-col w-[320px] gap-8">
                    <span class="flex justify-center">
                        <img src="/images/index_v1/teaching.png" class="h-40 w-40" alt="OnlineStudies">
                    </span>

                    <div class="flex justify-between w-full">
                        <span>
                            rating: ****
                        </span>
                        <span class="text-nectarine">
                            starts soon
                        </span>
                    </div>

                    <span class="text-2xl font-semibold">
                        BPS-17 : Assistant Comissioner
                    </span>

                    <button class="rounded-full bg-astronaut text-shark w-40 h-16 text-xl float-left">
                        Get Started
                    </button>

                </div>
            </div>

        </div>
    </div>
</template>