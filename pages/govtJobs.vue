<template>
    <div>

        <section>

            <PageBanner>
                <template #bannerImg>
                    <img src="/banners/banner9.png" class="h-full w-full absolute opacity-20 z-0 object-none" alt="">
                </template>

                <template #head>Let's Build Careers ..! </template>

            </PageBanner>

        </section>

        <!-- Gallery -->
        <section class="md:py-24 py-10 bg-selago">
            <div class="lg: container mx-auto px-9 flex flex-col md:flex-row flex-wrap justify-center items-center gap-8">
                <div v-for="(items, index) in apiData" :key="index">
                            <NuxtLink :to="/categories/ +items.title ">
                                <JobElement :title="items.title" :dated="items.test_date" :posts="items.posts" />
                            </NuxtLink>
                        </div>
            </div>
        </section>

    </div>
</template>
<script setup>
import axios from 'axios';
const apiData = ref([]);
axios(`https://primepackages.info/moc_api/api.php?api_type=GET_ALL_JOBS`, {
    method: "GET"

}).then((response) => {
    apiData.value = response.data;
    console.log(response.data)
}).catch((err) => {
    console.log(err);
});
</script>