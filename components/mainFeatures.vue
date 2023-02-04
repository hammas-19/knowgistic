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
    <div>

        <div class="md:block hidden">
            <div class="container mx-auto flex gap-16 px-10 bg-selago rounded-3xl h-[543px] w-9/12">

                <div class="flex flex-col w-[270px] items-center justify-between gap-8 py-10">
                    <button v-for="tab in tabs" :key="tab"
                        class="text-shark w-full p-6 font-semibold uppercase text-lg rounded-xl bg-white relative border-b-0 overflow-hidden transition-all"
                        :class="{ 'bg-[#c9ddf7] text-nectarine border-dashed border border-[#555770]': currentTab === tab }"
                        @click="currentTab = tab">
                        {{ tab }}
                        <progress v-show="tab === currentTab" id="file" value="78" max="100"
                            class="h-[6px] absolute bottom-0  w-[97%] left-1"></progress>
                    </button>

                    <span class="text-comet text-xs">
                        Lorem ipsum dolor sit amet consectetur. Sit at maecenas arcu at nec consequat elementum
                        ullamcorper.
                        Sit tincidunt malesuada sed integer suspendisse porta proin. Eget ipsum velit ornare
                    </span>

                </div>
                <div class="py-4 w-full ">

                    <span v-if="currentTab === 'Tab 1'">
                        <div class="flex h-full flex-row-reverse items-center justify-between">
                            <span class="w-1/2">

                                <div class="py-14 flex flex-col max-w-[402px] gap-3 text-center justify-center mx-auto">

                                    <span class="text-purplHeart font-medium">Lorem ipsum dolor sit ipsum dolor</span>
                                    <span class="lg:text-4xl text-2xl  font-bold text-ebonyClay">Lorem ipsum dolor sit
                                        ipsum dolor</span>
                                    <span class="text-comet text-xs">Lorem ipsum dolor sit amet consectetur. A lectus
                                        volutpat diam
                                        quis.
                                    </span>

                                </div>

                            </span>
                            <span class="h-full w-1/2">
                                <img src="/people-unscreen.gif" class="w-full h-full rounded-3xl object-cover" alt="">
                            </span>
                        </div>

                    </span>

                    <span v-if="currentTab === 'Tab 2'">

                        <div class="flex h-full flex-row-reverse items-center justify-between">
                            <span class="w-1/2">

                                <div class="py-14 flex flex-col max-w-[402px] gap-3 text-center justify-center mx-auto">

                                    <span class="text-purplHeart font-medium">Lorem ipsum dolor sit ipsum dolor</span>
                                    <span class="lg:text-4xl text-2xl  font-bold text-ebonyClay">Lorem ipsum dolor sit
                                        ipsum dolor</span>
                                    <span class="text-comet text-xs">Lorem ipsum dolor sit amet consectetur. A lectus
                                        volutpat diam
                                        quis.
                                    </span>

                                </div>

                            </span>
                            <span class="h-full w-1/2">
                                <img src="/walkingman-unscreen.gif" class="w-full h-full rounded-3xl object-cover"
                                    alt="">
                            </span>
                        </div>

                    </span>

                    <span v-if="currentTab === 'Tab 3'">

                        <div class="flex h-full flex-row-reverse items-center justify-between">
                            <span class="w-1/2">

                                <div class="py-14 flex flex-col max-w-[402px] gap-3 text-center justify-center mx-auto">

                                    <span class="text-purplHeart font-medium">Lorem ipsum dolor sit ipsum dolor</span>
                                    <span class="lg:text-4xl text-2xl  font-bold text-ebonyClay">Lorem ipsum dolor sit
                                        ipsum dolor</span>
                                    <span class="text-comet text-xs">Lorem ipsum dolor sit amet consectetur. A lectus
                                        volutpat diam
                                        quis.
                                    </span>

                                </div>

                            </span>
                            <span class="h-full w-1/2">
                                <img src="/defaulters.jpg" class="w-full h-full rounded-3xl object-cover" alt="">
                            </span>
                        </div>

                    </span>

                </div>
            </div>

        </div>

<!-- Mobiloe Screen -->

        <div class="md:hidden block">
            <div class="w-[98%] mx-auto flex flex-col px-2 bg-selago rounded-xl ">

                <div class="flex items-center justify-between gap-3 py-3 ">
                    <button v-for="tab in tabs" :key="tab"
                        class="text-shark w-1/3 h-[50px] font-semibold uppercase text-sm rounded-lg bg-white relative border-b-0 overflow-hidden transition-all"
                        :class="{ 'bg-[#FBFAFE] text-nectarine border-dashed border border-[#555770]': currentTab === tab }"
                        @click="currentTab = tab">
                        {{ tab }}
                        <progress v-show="tab === currentTab" id="file" value="78" max="100"
                            class="h-[6px] absolute bottom-0  w-[97%] left-1"></progress>
                    </button>

                    <!-- <span class="text-comet text-xs hidden">
                        Lorem ipsum dolor sit amet consectetur. Sit at maecenas arcu at nec consequat elementum
                        ullamcorper.
                        Sit tincidunt malesuada sed integer suspendisse porta proin. Eget ipsum velit ornare
                    </span> -->

                </div>
                <div class="pb-4 w-full ">

                    <span v-if="currentTab === 'Tab 1'">
                        <div class="flex h-full flex-col-reverse items-center justify-between">
                            <span class="w-full">

                                <div class="py-3 flex flex-col max-w-[98%] gap-3 text-center justify-center mx-auto">

                                    <span class="text-purplHeart font-medium">Lorem ipsum dolor sit ipsum dolor</span>
                                    <span class="lg:text-4xl text-2xl  font-bold text-ebonyClay">Lorem ipsum dolor sit
                                        ipsum dolor</span>
                                    <span class="text-comet text-xs">Lorem ipsum dolor sit amet consectetur. A lectus
                                        volutpat diam
                                        quis.
                                    </span>

                                </div>

                            </span>
                            <span class="h-full w-[98%]">
                                <img src="/people-unscreen.gif" class="w-full h-full rounded-3xl object-cover" alt="">
                            </span>
                        </div>

                    </span>

                    <span v-if="currentTab === 'Tab 2'">

                        <div class="flex h-full flex-col-reverse items-center justify-between">
                            <span class="w-full">

                                <div class="py-3 flex flex-col max-w-[98%] gap-3 text-center justify-center mx-auto">

                                    <span class="text-purplHeart font-medium">Lorem ipsum dolor sit ipsum dolor</span>
                                    <span class="lg:text-4xl text-2xl  font-bold text-ebonyClay">Lorem ipsum dolor sit
                                        ipsum dolor</span>
                                    <span class="text-comet text-xs">Lorem ipsum dolor sit amet consectetur. A lectus
                                        volutpat diam
                                        quis.
                                    </span>

                                </div>

                            </span>
                            <span class="h-full w-[98%]">
                                <img src="/walkingman-unscreen.gif" class="w-full h-full rounded-3xl object-cover"
                                    alt="">
                            </span>
                        </div>

                    </span>

                    <span v-if="currentTab === 'Tab 3'">

                        <div class="flex h-full flex-col-reverse items-center justify-between">
                            <span class="w-full">

                                <div class="py-3 flex flex-col max-w-[98%] gap-3 text-center justify-center mx-auto">

                                    <span class="text-purplHeart font-medium">Lorem ipsum dolor sit ipsum dolor</span>
                                    <span class="lg:text-4xl text-2xl  font-bold text-ebonyClay">Lorem ipsum dolor sit
                                        ipsum dolor</span>
                                    <span class="text-comet text-xs">Lorem ipsum dolor sit amet consectetur. A lectus
                                        volutpat diam
                                        quis.
                                    </span>

                                </div>

                            </span>
                            <span class="h-full w-[98%]">
                                <img src="/defaulters.jpg" class="w-full h-full rounded-3xl object-cover" alt="">
                            </span>
                        </div>

                    </span>

                </div>
            </div>

        </div>

    </div>

</template>
<script>
export default {
    data() {
        return {
            currentTab: 'Tab 1',
            tabs: ['Tab 1', 'Tab 2', 'Tab 3']
        }
    }
}
</script>