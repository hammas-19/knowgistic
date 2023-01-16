<template>
    <div>
        <section class="bg-myst">
            <div class="container mx-auto py-12 md:py-24">
                <div class="flex border border-gray-500 md:justify-center justify-evenly gap-8 py-10">
                    <button v-for="tab in tabs" :key="tab"
                        class="text-shark md:px-10 px-4 py-2 font-semibold uppercase rounded-2xl bg-astronaut"
                        :class="{ 'bg-[#F5FAF8] text-nectarine border-dashed border-4 border-nectarine': currentTab === tab }"
                        @click="currentTab = tab">
                        {{ tab }}
                    </button>
                </div>
                <div class="py-4">
                    <span v-if="currentTab === 'Tab 1'">

                        <ShowCard />

                    </span>
                    <p v-if="currentTab === 'Tab 2'">Content for Tab 2</p>
                    <p v-if="currentTab === 'Tab 3'">Content for Tab 3</p>
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