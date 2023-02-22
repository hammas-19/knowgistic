<template>
    <section class="text-ebonyClay bg-selago md:rounded-3xl rounded-xl lg:container mx-3 lg:mx-auto flex justify-center px-2">
        <div class=" md:p-16 p-5 grid md:grid-cols-4 grid-cols-2 lg:gap-14 md:gap-10 gap-5">

            <div v-for="data in data"  class="bg-white p-3 rounded-lg flex flex-col gap-3 items-center justify-center md:max-w-[320px] max-w-[140px]">

                <span>
                    <img :src="data.img" class="max-w-[70px]" alt="">
                </span>
                <span class="md:text-lg text-sm text-center">
                    {{ data.title }}
                </span>
            </div>

        </div>
    </section>
</template>
<script setup>

const data = [
    {
        title: "Lattest pattern test papers",
        img: '/banners/certificate.svg'
    },
    {
        title: "Mock Exams",
        img: '/banners/online-education-app.png'
    },
    {
        title: "Past papers",
        img: '/banners/certificate.svg'
    },
    {
        title: "Subject-wise Preps",
        img: '/banners/online-education-app.png'
    },
]

</script>