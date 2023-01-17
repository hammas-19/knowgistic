      
<script>
export default {
    data() {
        return {
            activeTab: 'Dashboard',
            showList: window.innerWidth > 768,
            tabs: ['Dashboard', 'tab1', 'tab2', 'tab3'],
            showProfile: true,
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
.content{
    direction: rtl;
}
.content::-webkit-scrollbar-track {
    background-color: #b6b4b4;

}

.content::-webkit-scrollbar {
    width: 6px;
    background-color: #F5F5F5;
}

.content::-webkit-scrollbar-thumb {
    background-color: #b6b4b4;
    background-image: -webkit-linear-gradient(90deg,
            #6a6969 0%,
            #878686 25%,
            transparent 100%)
}
</style>
<template>
    <div>
        <section>

            <button @click="showList = !showList" :class="{ 'bg-blue-500': showList, 'bg-gray-500': !showList } "
                class="h-10 w-20 fixed top-0   ">
                Show/Hide
            </button>
            <button @click="showProfile = !showProfile" :class="{ 'bg-blue-500': showList, 'bg-gray-500': !showList }"
                class="h-10 w-20 fixed top-0 right-0">
                Show/Hide
            </button>

            <div
                class="main bg-[#d0cece] flex container mx-auto my-10 relative rounded-[20px] md:rounded-[30px] border-[3px] border-astronaut border-dashed overflow-hidden">



                <!-- Tabs vertical -->
                <div class="tabs text-astronaut bg-mercury relative rounded-l-[30px] ">
                    <div class="border-r-[3px] border-[#b6b4b4] border-dashed py-5 h-full">
                    <!-- Notification Icon  -->
                    <span class="top-1 right-2 absolute cursor-pointer ">
                        <img src="/images/index_v2/icons/notification.png"
                            class="h-6 w-6 hover:h-8 hover:w-8 transition-all" alt="notifictaions">
                    </span>

                    <ul v-if="showList" class="nav-tabs text-left md:gap-8 gap-3 flex flex-col md:min-w-[240px] min-w-[140px]">

                        <!-- Dp & Name -->
                        <div class="flex justify-between mx-auto md:py-4 py-1 flex-col items-center md:gap-5 gap-3">
                            <span
                                class="rounded-full md:h-24 h-20 md:w-24 w-20 border-[3px] border-astronaut border-dashed text-center flex justify-center items-center">
                                <img src="/images/index_v2/icons/user-profile.png" class="h-8 w-8" alt="displayPicture">
                            </span>
                            <span class="text-astronaut md:text-2xl text-lg font-semibold text-center">
                                Hammas Masood
                            </span>

                        </div>
                        <div class="">
                            <li v-for="(tab, index) in tabs" :key="index"
                                class="mx-10 md:my-5 my-1 px-5 text-center md:py-3 py-1 rounded-xl cursor-pointer"
                                :class="{ 'border-[3px] border-[#FF8656] border-dashed text-[#FF8656] font-semibold': activeTab === tab }"
                                @click="activeTab = tab">
                                {{ tab }}
                            </li>
                        </div>

                        <!-- Journey button -->
                        <div class="absolute bottom-0 flex flex-col m-[2px] border-4 border-red-500">
                            <div @click="showProfile = !showProfile"
                                class="md:text-lg text-base text-center font-semibold py-3 px-5 flex justify-center items-center border-[3px] border-[#b6b4b4] border-dashed m-2 rounded-xl  hover:text-mercury hover:bg-astronaut transition-all">
                                Resume Journey
                            </div>
                            <span class="md:h-28 h-10 w-[1px] border-l-[3px] border-[#b6b4b4] border-dashed mx-auto">
                                <!-- just line -->
                            </span>
                            <img src="/images/index_v2/walkingman.gif" class="rounded-[30px] max-h-[260px]" alt="manwalking">
                        </div>

                    </ul>
                    </div>
                </div>

                <!-- Contents -->
                <div
                    class=" bg-mercury md:p-5 p-1 rounded-[30px] rounded-l-none w-full">
                    
                    <div class="content h-full overflow-auto">

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


                <!-- Profile Tab -->
                <div class="tabs text-astronaut bg-[#d0cece] relative rounded-r-[30px]">
                    
                    <div  v-if="showProfile" class="md:min-w-[340px] min-w-[240px] p-4">

                                            <!-- Notification Icon  -->
                    <span class="top-1 right-1 absolute cursor-pointer ">
                        <img src="/images/index_v2/icons/notification.png"
                            class="h-6 w-6 hover:h-8 hover:w-8 transition-all" alt="notifictaions">
                    </span>

                    <ul
                        class="nav-tabs text-left gap-8 flex flex-col ">

                        <!-- Dp & Name -->
                        <div class="flex justify-between mx-auto py-4 flex-col items-center gap-5">
                            <span
                                class="rounded-full h-24 w-24 border-[3px] border-astronaut border-dashed text-center flex justify-center items-center">
                                <img src="/images/index_v2/icons/user-profile.png" class="h-8 w-8" alt="displayPicture">
                            </span>
                            <span class="text-astronaut md:text-2xl text-xl font-semibold text-center">
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


                        <div class="absolute bottom-0 flex flex-col m-[2px]">
                            <div
                                class="md:text-lg text-base text-center font-semibold py-3 px-5 flex justify-center items-center border-[3px] border-[#b6b4b4] border-dashed m-2 rounded-xl  hover:text-mercury hover:bg-astronaut transition-all">
                                Resume Journey
                            </div>
                            <span class="h-28 w-[1px] border-l-[3px] border-[#b6b4b4] border-dashed mx-auto">
                                <!-- just line -->
                            </span>
                            <img src="/images/index_v2/walkingman.gif" class="rounded-[30px] " alt="manwalking">
                        </div>

                    </ul>

                    </div>


                </div>

            </div>

        </section>
    </div>
</template>


     

     
