<template>
    <div>

        <section class="bg-[url('/images/index_v2/Quizbg.png')] hero bg-center bg-no-repeat ">
            <div class="container mx-auto py-12 md:py-40">
                <h1 class="md:text-6xl text-3xl text-shark text-center font-semibold md:px-10 px-0">
                    What would you like to learn today <span class="text-nectarine">?</span>
                </h1>
            </div>
        </section>

        <section class="bg-myst">
            <div class="container mx-auto py-12 md:py-24">
                <div class="flex md:justify-center justify-evenly gap-8 py-8">
                    <button v-for="tab in tabs" :key="tab"
                        class="text-shark md:px-10 px-4 transition-all py-2 font-semibold uppercase rounded-2xl bg-astronaut"
                        :class="{ 'bg-[#F5FAF8] text-nectarine border-dashed md:border-4 border-2 border-nectarine': currentTab === tab }"
                        @click="currentTab = tab">
                        {{ tab }}
                    </button>
                </div>

                <div class="md:p-10 p-5 md:border-4 border-2 border-dashed border-nectarine rounded-2xl">
                    <!-- tab1 content -->
                    <div v-if="currentTab === 'Tab 1'" class="flex flex-wrap justify-center gap-9">
                        <ShowCard />

                    </div>

                    <!-- tab2 content -->
                    <span v-if="currentTab === 'Tab 2'">Content for Tab 2</span>

                    <!-- tab3 content -->
                    <span v-if="currentTab === 'Tab 3'">Content for Tab 3</span>

                </div>
            </div>
        </section>

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

<style>
.hero {
    background-color: #c5efca3d;
}
</style>
