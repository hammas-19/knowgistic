      
<script>
import Icons from '~~/assets/icons/icons.vue';
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

.content::-webkit-scrollbar-track {
    background-color: #88e2a4;
}

.content::-webkit-scrollbar {
    width: 6px;
    background-color: #F5F5F5;
}

.content::-webkit-scrollbar-thumb {
    background-color: #6a8ddf;
    background-image: -webkit-linear-gradient(90deg,
            rgba(224, 28, 28, 0.964) 0%,
            #88a3e2 25%,
            transparent 100%,
            rgb(132, 23, 209) 75%,
            transparent)
}
</style>
<template>
    <div>
        <section>

            <button @click="showList = !showList" :class="{ 'bg-blue-500': showList, 'bg-gray-500': !showList } "
                class="h-10 w-20 fixed top-0   ">
                Show/Hide
            </button>

            <div
                class="main flex container mx-auto my-10 relative rounded-[20px] md:rounded-[30px] border-[3px] border-nectarine border-dashed overflow-hidden">



                <!-- Tabs vertical -->
                <div class="tabs text-white bg-astronaut border-2 border-red-400 relative">

                    <!-- Notification Icon  -->
                    <span class="top-1 right-1 absolute cursor-pointer ">
                        <img src="images/index_v2/icons/notification.png"
                            class="h-6 w-6 hover:h-8 hover:w-8 transition-all" alt="notifictaions">
                    </span>

                    <ul v-if="showList" class="nav-tabs text-left gap-8 flex flex-col md:min-w-[240px] min-w-[140px] ">

                        <!-- Dp & Name -->
                        <div class="flex justify-between mx-auto py-4 flex-col items-center gap-5">
                            <span
                                class="rounded-full h-24 w-24 border-[3px] border-nectarine border-dashed text-center flex justify-center items-center">
                                <img src="images/index_v2/icons/user-profile.png" class="h-8 w-8" alt="displayPicture">
                            </span>
                            <span class="text-white text-2xl font-semibold">
                                Hammas Masood
                            </span>

                        </div>
                        <div class="">
                            <li v-for="(tab, index) in tabs" :key="index"
                                class="mx-10 my-5 px-5 text-center py-3 rounded-xl cursor-pointer"
                                :class="{ 'border-[3px] border-[#FF8656] border-dashed text-[#FF8656] font-semibold': activeTab === tab }"
                                @click="activeTab = tab">
                                {{ tab }}
                            </li>
                        </div>

                    </ul>

                    <div class="absolute bottom-1">
                        <img src="images/index_v2/walkingman.gif" class="w-[95%] mx-auto rounded-[30px]" alt="manwalking">
                    </div>

                </div>

                <!-- Contents -->
                <div class=" bg-myst border-2 border-blue-400 overflow-y-scroll content">
                    <div v-show="activeTab === 'tab1'" class="flex flex-wrap justify-center">
                        <ShowCard />
                    </div>
                    <div v-show="activeTab === 'tab2'">
                        <Govtob />
                    </div>
                    <div v-show="activeTab === 'tab3'">
                        <stats />
                    </div>
                </div>

            </div>

        </section>
    </div>
</template>


     

     
