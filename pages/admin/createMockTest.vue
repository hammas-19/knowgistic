<style scoped>

.main::-webkit-scrollbar-track {
    background-color: #e9e3ff;

}

.main::-webkit-scrollbar {
    width: 6px;
    background-color: #F5F5F5;
}

.main::-webkit-scrollbar-thumb {
    background-color: #d5cfe9;
    background-image: -webkit-linear-gradient(90deg,
            #dbddef 0%,
            #080f58 25%,
            transparent 100%)
}
</style>
<template>
    <div class="flex items-center gap-2 flex-col w-full h-screen relative bg-selago">

        <div class="w-full flex container justify-between md:items-center items-end md:py-5 py-3 mx-auto">
            <span class=""><img src="/Logo.svg" class="md:w-80" alt=""></span>

            <h1 class="text-comet font-semibold md:text-4xl text-xl">Create Mocks</h1>
        </div>

        <div
            class="main lg:container mx-auto  flex lg:flex-row flex-col gap-5 justify-between items-center lg:items-start border-[3px] border-dashed border-whiteLilac rounded-3xl h-[calc(100vh-200px)] overflow-y-scroll bg-white">

            <!-- Form sec -->
            <div class="inputs w-full md:w-1/2 p-5">

                <form action="submit" class="flex gap-5 flex-col">

                    <span>
                        <label for="Stacks" class="block mb-2 text-sm font-medium text-comet dark:text-white">
                            Mock for:
                        </label>
                        <select id="stacks"
                            class="bg-selago  border border-whiteLilac text-ebonyClay text-sm rounded-lg focus:ring-purplHeart focus:border-purplHeart block w-full p-2.5">
                            <option selected disabled>Choose a stack </option>
                            <option v-for="jobs in 10">stack{{ jobs }}</option>
                        </select>
                    </span>

                    <!-- Description -->
                    <div class="bg-selago rounded-lg p-3 flex flex-col gap-3 text-comet">

                        <h1>Description for: <span class="font-semibold md:font-bold"> FIA</span></h1>
                        <div class="flex flex-col gap-1">

                            <div class="flex items-center gap-3">
                                <span>Test Date:</span>
                                <span class="font-semibold">12/2/23</span>
                            </div>
                            <span>Pattern:</span>
                            <div v-for="items in courseData" class="flex items-center gap-3 w-full justify-between hover:bg-whiteLilac px-3 transition-all rounded-lg">
                                <span>{{ items.from }}</span>
                                <span class="font-semibold">20%</span>
                            </div>


                        </div>

                    </div>

                    <span class=" flex flex-col py-10">

                        <h3 class="mb-5 text-lg font-medium text-gray-900 dark:text-white">Choose Subjects:</h3>
                        <ul class="grid w-full gap-3 md:grid-cols-3 grid-cols-2">
                            <li v-for="items in courseData">
                                <input type="checkbox" id="react-option" value="" class="peer">
                                    <select id="stacks"
                                        class="bg-selago  border border-whiteLilac text-ebonyClay text-sm rounded-lg focus:ring-purplHeart focus:border-purplHeart block w-full p-2.5">
                                        <option selected disabled>Choose Ratio</option>
                                        <option>10%</option>
                                        <option>20%</option>
                                        <option>30%</option>
                                        <option>40%</option>
                                    </select>
                                <label for="checkbox"
                                    class="flex flex-col items-center justify-center w-full md:p-5 p-2 text-comet bg-white border border-whiteLilac rounded-lg cursor-pointer peer-checked:border-purplHeart hover:text-gray-600 peer-checked:text-gray-600 hover:bg-whiteLilac">
                                    <div class="block">
                                        <img :src="items.image" class="" alt="subjects">
                                        <div class="w-full md:text-lg text-sm md:font-semibold font-normal">{{ items.from }}
                                        </div>
                                    </div>
                                </label>
                            </li>
                        </ul>

                    </span>

                </form>

            </div>

            <!-- Preview -->
            <div class="flex flex-col gap-5 p-5">
                <h1 class="text-3xl font-semibold text-comet">
                    Preview:
                </h1>

                <div>
                    <JobCourseCard/>
                </div>

            </div>

        </div>

    </div>
</template>
<script setup>
const isOpenDropdown = ref(false);
definePageMeta({
    layout: "none"
});
const courseData = [

    {
        image: '/images/index_v2/gk.png',
        from: 'General Knowledge',
        level: '1'
    },

    {
        image: '/images/index_v2/analytics.png',
        from: 'Analytical Problems',
        level: '1'

    },
    {
        image: '/images/index_v2/ca.png',
        from: 'Current Affairs',
        level: '2'
    },
    {
        image: '/images/index_v2/cs.png',
        from: 'Computer Studies',
        level: '2'
    },
    {
        image: '/images/index_v2/eng.png',
        from: 'English',
        level: '3'
    },
    {
        image: '/images/index_v2/isl.png',
        from: 'Islamic Studies',
        level: '3'
    },
    {
        image: '/images/index_v2/maths.png',
        from: 'Maths',
        level: '3'
    },
    {
        image: '/images/index_v2/pro.png',
        from: 'Professionalism',
        level: '3'
    },
    {
        image: '/images/index_v2/sci.png',
        from: 'General Science',
        level: '3'
    },
    {
        image: '/images/index_v2/sindhi.png',
        from: 'Sindhi',
        level: '3'
    },
    {
        image: '/images/index_v2/urdu.png',
        from: 'Urdu',
        level: '3'
    },
]
</script>