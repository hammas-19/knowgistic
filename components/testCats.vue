<style scoped>
* {
    scroll-behavior: smooth;
}

.window::-webkit-scrollbar-track {
    background-color: #f0ecfd;

}

.window::-webkit-scrollbar {
    width: 4px;
    background-color: #F5F5F5;
}

.window::-webkit-scrollbar-thumb {
    background-color: #dedde4;
    background-image: -webkit-linear-gradient(90deg,
            #b9b9b9 25%,
            transparent 100%)
}
</style>
<template>
    <div class="max-w-7xl mx-auto px-2 flex flex-col gap-16">
        <div class="flex flex-col gap-3 px-2">

            <h1 class="md:text-4xl text-xl text-ebonyClay font-semibold">
                Ready to Prepare?
            </h1>
            <span class="text-ebonyClay text-sm">
                Let's get started with following active for candidates preparation
            </span>

        </div>
        <!-- Job Preparation -->
        <div class=" ">
            <div
                class=" text-ebonyClay py-8 bg-[url('/images/categories/sectionBannerBg2.svg')] rounded-2xl bg-center bg-cover bg-no-repeat bg-selago mb-2 ">
                <div class="mx-2 p-2 bg-selago w-fit rounded-lg shadow-md border border-whiteLilac">

                    <h3 class="text-lg font-semibold pb-2">
                        Govt-Job preparation
                    </h3>
                    <p class="text-sm text-comet">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae eligendi laborum, quo v
                    </p>
                </div>
            </div>
            <div
                class="window bg-selago rounded-xl p-2 flex flex-wrap md:gap-10 gap-2 items-center justify-center max-h-[656px] overflow-y-scroll">
                <div v-for="(items, index) in apiData" :key="index" class="">
                    <NuxtLink :to="/categories/ + items.id" class="">
                        <JobElement :title="items.title" :dated="items.test_date" :posts="items.posts" />
                    </NuxtLink>
                </div>
            </div>
        </div>
        <!-- Subject-wise Preparation -->
        <div class=" ">
            <div
                class=" text-ebonyClay py-8 bg-[url('/images/categories/sectionBannerBg1.svg')] rounded-2xl bg-center bg-cover bg-no-repeat bg-selago mb-2 ">
                <div class="mx-2 p-2 bg-selago w-fit rounded-lg shadow-md border border-whiteLilac">

                    <h3 class="text-lg font-semibold pb-2">
                        Subject-wise preparation
                    </h3>
                    <p class="text-sm text-comet">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae eligendi laborum, quo v
                    </p>
                </div>
            </div>
            <div
                class="window bg-selago rounded-xl p-2 flex flex-wrap md:gap-10 gap-2 items-center justify-around max-h-[656px] overflow-y-scroll">
                <!-- <div v-for="(items, index) in apiData" :key="index" class="">
                        <NuxtLink :to="/categories/ + items.id" class="">
                            <JobElement :title="items.title" :dated="items.test_date" :posts="items.posts" />
                        </NuxtLink>
                    </div> -->
                <div v-for="(items, index) in courseData">

                    <ShowCard :key="index" :image="items.image" :name="items.from" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import axios from 'axios';
const apiData = ref([]);
axios(`https://primepackages.info/moc_api/api.php?api_type=GET_ALL_JOBS`, {
    method: "GET"

}).then((response) => {
    apiData.value = response.data;
}).catch((err) => {
});
const courseData = [
    {
        image: '/images/subjectImages/GeneralKnowledge.png',
        from: 'General Knowledge'
    },
    {
        image: '/images/subjectImages/analytics.png',
        from: 'Analytical Problems'
    },
    {
        image: '/images/subjectImages/GeneralKnowledge.png',
        from: 'Current Affairs'
    },
    {
        image: '/images/subjectImages/ComputerScience.png',
        from: 'Computer Studies'
    },
    {
        image: '/images/subjectImages/English.png',
        from: 'English'
    },
    {
        image: '/images/subjectImages/Islamiyat.png',
        from: 'Islamic Studies'
    },
    {
        image: '/images/subjectImages/Mathematics.png',
        from: 'Maths'
    },
    {
        image: '/images/subjectImages/GeneralKnowledge.png',
        from: 'Professionalism'
    },
    {
        image: '/images/subjectImages/Science.png',
        from: 'General Science'
    },
    {
        image: '/images/subjectImages/Urdu.png',
        from: 'Sindhi'
    },
    {
        image: '/images/subjectImages/Urdu.png',
        from: 'Urdu'
    }
]
</script>