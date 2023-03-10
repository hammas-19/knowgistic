<template>
    <div>

        <section class=" hero bg-center bg-no-repeat ">
            <div class="lg:container mx-auto py-8 px-2 flex flex-col justify-center items-center md:gap-10 gap-5">

                <span class="w-fit items-center">
                    <img src="/images/GOVTpk.png" class="w-full max-w-[100px]" alt="">
                </span>

                <h1 class="lg:text-6xl md:text-3xl text-xl text-ebonyClay text-center font-semibold md:px-10 px-0">
                    Start with
                    <span class="text-purplHeart"> FIA </span>
                    Today
                </h1>

            </div>
        </section>

        <section class="bg-myst">
            <div class="lg:container mx-auto px-2 py-2 md:py-24">
                <div class="flex md:justify-center justify-evenly md:gap-8 gap-3 py-8">
                    <button v-for="tab in tabs" :key="tab"
                        class="text-ebonyClay md:px-10 text-xs md:text-lg px-3 transition-all py-1 font-semibold rounded-2xl bg-selago"
                        :class="{ 'bg-[#5F30E2] text-[#fff] border-nectarine': currentTab === tab }"
                        @click="currentTab = tab">
                        {{ tab }}
                    </button>
                </div>

                <div
                    class="bg-selago md:p-10 p-2 rounded-2xl text-comet md:text-lg text-sm md:min-h-[calc(100vh-400px)] min-h-[calc(100vh-200px)] relative">
                    <!-- tab1 content -->
                    <div v-if="currentTab === 'Details'" class="flex justify-between gap-3 h-full ">

                        <!-- Content -->
                        <span>
                            <HeadingText/>
                        </span>
                       
                       <!-- Extras -->
                        <span class="absolute right-2 bottom-2">

                            <CalenderTimer />
                        
                        </span>

                    </div>

                    <!-- tab2 content -->
                    <span v-if="currentTab === 'prerequisite'">
                        PreRequisite Here
                    </span>

                    <!-- tab3 content -->
                    <span v-if="currentTab === 'Past papers'">
                        past Papers here
                    </span>

                </div>
            </div>
        </section>

    </div>
</template>

<script>
export default {
    data() {
        return {
            currentTab: 'Details',
            tabs: ['Details', 'prerequisite', 'Past papers']
        }
    }
}
</script>

<style scoped>
.hero {
    background-color: #FBFAFE;
}
</style>
