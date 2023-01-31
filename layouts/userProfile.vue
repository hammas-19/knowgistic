      
<script>
export default {
    data() {
        return {
            activeTab: 'Dashboard',
            showList: false,
            tabs: ['Dashboard', 'Courses', 'tab1', 'tab2', 'tab3'],
            showProfile: true,
            date: new Date().toString()

        }
    }
}
</script>

<style scoped>
.main {
    height: 100vh;
    height: -webkit-calc(100vh - 60px);
    height: -moz-calc(100vh - 60px);
    height: calc(100vh - 60px);
}

.content::-webkit-scrollbar-track {
    background-color: #e9e3ff;

}

.content::-webkit-scrollbar {
    width: 6px;
    background-color: #F5F5F5;
}

.content::-webkit-scrollbar-thumb {
    background-color: #d5cfe9;
    background-image: -webkit-linear-gradient(90deg,
            #080f58 0%,
            #080f58 25%,
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

            <!-- Main -->
            <div
                class="main bg-white flex container mx-auto my-6 relative rounded-[15px] md:rounded-[30px]  overflow-hidden">



                <!-- Tabs vertical -->
                <div v-if="showList" :class="{ 'md:min-w-[240px] min-w-[140px] block': showList === true }"
                    class="tabs text-mineShaft bg-blueChalk relative rounded-l-[30px] md:max-w-[240px] max-w-[140px] transition-all duration-1000 delay-1000">

                    <!-- wrapper -->
                    <div class="border-r-[3px] border-blueChalk border-dashed h-full">
                        <!-- Notification Icon  -->
                        <span class="top-1 right-2 absolute cursor-pointer ">
                            <img src="/images/index_v2/icons/notification.png"
                                class="h-6 w-6 hover:h-8 hover:w-8 transition-all" alt="notifictaions">
                        </span>

                        <ul
                            class="nav-tabs text-left flex flex-col md:max-w-[240px] max-w-[140px] justify-between h-full gap-1">

                            <!-- Dp & Name -->
                            <div class="flex justify-between mx-auto py-4 flex-col items-center md:gap-5 gap-2">
                                <span
                                    class="rounded-full md:h-24 h-20 md:w-24 w-20 border-[3px] border-gulfBlue border-dashed text-center flex justify-center items-center">
                                    <img src="/images/index_v2/icons/user-profile.png" class="h-8 w-8"
                                        alt="displayPicture">
                                </span>
                                <span class="text-gulfBlue md:text-xl text-lg font-semibold text-center">
                                    Hammas Masood
                                </span>

                            </div>
                            <div class="">
                                <li v-for="(tab, index) in tabs" :key="index"
                                    class="md:mx-10 mx-3 md:my-1 md:px-5 px-2 text-center md:py-3 py-1 rounded-xl text-sm cursor-pointer text-gulfBlue"
                                    :class="{ 'border-[3px] border-gulfBlue border-dashed text-gulfBlue font-semibold': activeTab === tab }"
                                    @click="activeTab = tab">
                                    {{ tab }}
                                </li>
                            </div>

                            <!-- Journey button -->
                            <div class="flex flex-col pb-2 max-h-[240px]">
                                <div @click="showProfile = !showProfile"
                                    class="md:text-lg text-sm text-center font-semibold md:py-3 py-1 md:px-5 px-2 flex justify-center items-center border-[3px] border-gulfBlue border-dashed m-2 rounded-xl  hover:text-blueChalk text-gulfBlue hover:bg-gulfBlue transition-all">
                                    Resume Journey
                                </div>
                                <span class="h-10 w-[1px] border-l-[3px] border-gulfBlue border-dashed mx-auto">
                                    <!-- just line -->
                                </span>
                                <span
                                    class="max-w-[220px] mx-auto border-[3px] p-3 ">
                                    <img src="/images/illustrations/veichle.svg" class="object-center"
                                        alt="manwalking">
                                </span>
                            </div>

                        </ul>
                    </div>
                </div>

                <!-- Contents -->
                <div :class="[{ 'rounded-3xl': showList & showProfile === false }, { 'border-l-0 rounded-l-none': showList === true }]"
                    class="bg-white md:p-5 p-1 w-full border-[3px] border-r-0 border-blueChalk border-dashed">

                    <div :class="[{ 'opacity-30': showList === true }, { 'md:block hidden': showProfile === true }]"
                        class="content h-full overflow-auto">
                        <div v-show="activeTab === 'Dashboard'" class="flex flex-wrap justify-center relative">

                            <!-- heading = Dashboard -->
                            <h1 class="absolute left-2 top-2 text-mineShaft md:text-xl text-sm font-medium">Dashboard
                            </h1>

                        </div>
                        <div v-show="activeTab === 'Courses'" class=" relative">

                            <!-- heading = My courses -->
                            <h1 class="absolute left-2 top-2 text-mineShaft md:text-xl text-sm font-medium">My Courses
                            </h1>

                            <UserProfileCourses />

                        </div>
                        <div v-show="activeTab === 'tab1'" class="flex flex-wrap justify-center">
                            <ShowCard />
                        </div>
                        <div v-show="activeTab === 'tab2'" class="flex flex-wrap justify-center">
                            <Govtob />
                        </div>
                        <div v-show="activeTab === 'tab3'" class="flex flex-wrap justify-center">
                            <stats />
                        </div>
                    </div>

                </div>


                <!-- Profile Tab -->
                <div
                    class="tabs text-mineShaft bg-white relative rounded-r-[30px] border-[3px] border-blueChalk border-dashed border-l-0">

                    <!-- Profile Main -->
                    <div v-if="showProfile" class="md:min-w-[340px] min-w-[260px] md:py-2 py-1 h-full"
                        :class="{ 'block': showProfile === true }">

                        <!-- wrapper -->
                        <div
                            class="border-l-[3px] border-blueChalk border-dashed h-full flex flex-col items-center px-2 justify-between">

                            <!-- calender -->
                            <div
                                class="flex flex-col md:gap-4 gap-[2px] justify-between items-center rounded-2xl p-2 w-full bg-blueChalk shadow-xl">

                                <div class="flex justify-between w-full items-center">
                                    <h1 class="text-gulfBlue md:text-xl text-sm font-medium">Presence</h1>
                                    <span class="text-xs">View all</span>
                                </div>

                                <div class="grid grid-cols-7 grid-rows-5 w-full text-gulfBlue">
                                    <span v-for="items in 30" :class="{ 'text-amaranth': items % 0.75 }"
                                        class="flex flex-col items-center text-xs hover:shadow-md rounded-md transition-all">
                                        <span>
                                            {{ items }}
                                        </span>
                                        <img src="/images/index_v2/icons/medal.svg" class="md:w-10 w-8 md:h-10 h-8"
                                            alt="">
                                    </span>
                                </div>

                            </div>

                            <!-- Badge -->
                            <div class="flex flex-col gap-2">
                                <UserProfileBadge v-for="items in 3" :class="{ 'bg-blue-200': items === 2 }" />
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    </div>
</template>


     

     
