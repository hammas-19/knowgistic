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
        <div class="container mx-auto flex gap-16 px-10 bg-selago rounded-3xl h-[543px]">

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
                    Lorem ipsum dolor sit amet consectetur. Sit at maecenas arcu at nec consequat elementum ullamcorper.
                    Sit tincidunt malesuada sed integer suspendisse porta proin. Eget ipsum velit ornare
                </span>

            </div>
            <div class="py-4">
                <span v-if="currentTab === 'Tab 1'">

                    content 1

                </span>
                <p v-if="currentTab === 'Tab 2'">Content for Tab 2</p>
                <p v-if="currentTab === 'Tab 3'">Content for Tab 3</p>
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