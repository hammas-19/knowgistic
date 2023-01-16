      
<script>
export default {
        data() {
                return {
                        activeTab: 'tab1',
                        showList: window.innerWidth > 768,
                        tabs: ['tab1', 'tab2', 'tab3']

                }
        }
}
definePageMeta({
        layout: "none",
});
</script>

<style scoped>
.main {
        height: 100vh;
        height: -webkit-calc(100vh - 60px);
        height: -moz-calc(100vh - 60px);
        height: calc(100vh - 60px);
}
</style>
<template>
        <button @click="showList = !showList" :class="{ 'bg-blue-500': showList, 'bg-gray-500': !showList } "
                class="h-10 w-20 fixed top-0">
                Show/Hide
        </button>

        <div
                class="main flex container mx-auto my-10 relative rounded-[20px] md:rounded-[30px] border-[3px] border-nectarine border-dashed overflow-hidden">


                <div class="tabs bg-gray-200 border-2 border-red-400">
                        <ul v-if="showList" class="nav-tabs text-center gap-10 flex flex-col w-40">
                                <li v-for="(tab, index) in tabs" :key="index"
                                        :class="{ 'bg-green-500 text-white': activeTab === tab }"
                                        @click="activeTab = tab">
                                        {{ tab }}
                                </li>
                        </ul>
                </div>

                <div class=" bg-white border-2 border-blue-400 overflow-scroll">
                        <div v-show="activeTab === 'tab1'" class="flex flex-wrap justify-center">
                                <!-- <ShowCard />    -->
                        </div>
                        <div v-show="activeTab === 'tab2'">
                                Tab 2 Content
                        </div>
                        <div v-show="activeTab === 'tab3'">
                                Tab 3 Content
                        </div>
                </div>

        </div>
</template>


     

     
