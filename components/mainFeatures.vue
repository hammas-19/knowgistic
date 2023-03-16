<style scoped>
progress[value]::-webkit-progress-value {
    background: #000;
    border-radius: 50px;
}

progress[value]::-webkit-progress-bar {
    background-color: #e2dfdf;
    border-radius: 2px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
}
</style>
<template>
    <div class="px-2">

        <div
            class="lg:container mx-auto flex flex-col justify-between gap-4 items-center md:max-h-[calc(100vh-400px)] max-h-[calc(100vh-200px)]">

            <div class="flex items-center justify-center gap-5 w-full">
                <button v-for="tab in tabs" :key="tab"
                    class="text-comet md:p-2 p-0 font-medium md:text-xl text-base transition-all opacity-30"
                    :class="{ 'text-[#5F30E2] opacity-100': currentTab === tab }"
                    @click="currentTab = tab">
                    {{ tab }}
                    <!-- <progress v-show="tab === currentTab" id="file" value="78" max="100"
                        class="h-[6px] absolute bottom-0  w-[97%] left-1"></progress> -->
                </button>

            </div>
            <div class="p-2 w-full bg-selago rounded-3xl">

                <div v-if="currentTab === 'Smart Preparation'">

                    <div class="flex h-full md:flex-row-reverse flex-col-reverse items-center justify-around">

                        <div class="p-5 flex flex-col w-full gap-3 text-center justify-center mx-auto md:h-[500px] h-[350px]">

                            <span class="text-purplHeart font-medium">Lorem ipsum dolor sit ipsum dolor</span>
                            <span class="lg:text-4xl text-2xl  font-bold text-ebonyClay">Lorem ipsum dolor sit
                                ipsum dolor</span>
                            <span class="text-comet text-xs">Lorem ipsum dolor sit amet consectetur. A lectus
                                volutpat diam
                                quis.
                            </span>

                        </div>
                        <span class="h-fit md:w-[40%] w-full">
                            <img src="/people-unscreen.gif" class="w-full h-full rounded-3xl object-cover" alt="">
                        </span>

                    </div>

                </div>

                <div v-if="currentTab === 'User Dashboard'">

                    <div class="flex h-full md:flex-row-reverse flex-col-reverse items-center justify-between">

                        <div class="p-5 flex flex-col w-full gap-3 text-center justify-center mx-auto md:h-[500px] h-[350px]">

                            <span class="text-purplHeart font-medium">Lorem ipsum dolor sit ipsum dolor</span>
                            <span class="lg:text-4xl text-2xl  font-bold text-ebonyClay">Lorem ipsum dolor sit
                                ipsum dolor</span>
                            <span class="text-comet text-xs">Lorem ipsum dolor sit amet consectetur. A lectus
                                volutpat diam
                                quis.
                            </span>

                        </div>
                        <span class="h-fit md:w-[40%] w-full">
                            <img src="/walkingman-unscreen.gif" class="w-full h-full rounded-3xl object-cover" alt="">
                        </span>

                    </div>

                </div>

                <div v-if="currentTab === 'Lattest Patterns'">

                    <div class="flex h-full md:flex-row-reverse flex-col-reverse items-center justify-between">

                        <div class="p-5 flex flex-col w-full gap-3 text-center justify-center mx-auto md:h-[500px] h-[350px]">

                            <span class="text-purplHeart font-medium">Lorem ipsum dolor sit ipsum dolor</span>
                            <span class="lg:text-4xl text-2xl  font-bold text-ebonyClay">Lorem ipsum dolor sit
                                ipsum dolor</span>
                            <span class="text-comet text-xs">Lorem ipsum dolor sit amet consectetur. A lectus
                                volutpat diam
                                quis.
                            </span>

                        </div>
                        <span class="h-fit md:w-[40%] w-full">
                            <img src="/defaulters.jpg" class="w-full h-full rounded-3xl object-cover" alt="">
                        </span>

                    </div>

                </div>

            </div>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            currentTab: 'Smart Preparation',
            tabs: ['Smart Preparation', 'User Dashboard', 'Lattest Patterns']
        }
    }
}
</script>