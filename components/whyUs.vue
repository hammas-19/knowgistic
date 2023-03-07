<style scoped>
.content {
    /* display: none; */
    height: 0px;
    overflow: hidden;
}

.body:hover .content {
    /* display: block; */
    height: 50px;
}
</style>
<template>
    <section
        class="text-ebonyClay bg-selago md:rounded-3xl rounded-xl lg:container mx-3 lg:mx-auto flex justify-center px-2">
        <div class=" lg:p-12 p-2 grid md:grid-cols-4 grid-cols-2 lg:gap-14 md:gap-10 gap-5">

            <div v-for="data in data"
                class="body cursor-pointer bg-white hover:bg-[#f7f4ff] p-3 rounded-lg flex flex-col gap-2 items-center justify-center lg:w-[200px] md:w-[160px] w-[140px] min-h-[200px] text-xs text-center">

                <span>
                    <img :src="data.img" class="max-w-[70px]" alt="">
                </span>
                <span class="md:text-base text-sm text-center">
                    {{ data.title }}
                </span>

                <div class="content w-[96%] transition-all duration-300">
                    {{ data.content }}
                </div>

            </div>

        </div>
    </section>
</template>
<script setup>

const data = [
    {
        title: "Lattest pattern tests",
        img: '/banners/certificate.svg',
        tab: '1',
        content: "content for 1 that does'nt exist here but we are tryna figure, content for 1 that does'nt exist here but we are tryna figure, content for 1 that does'nt exist here but we are tryna figure",
        katapita: ["content"]
    },
    {
        title: "Mock Exams",
        img: '/banners/online-education-app.png',
        tab: '2',
        content: "content for 2 that does'nt exist here but we are tryna figure",
        katapita: ["content"]
    },
    {
        title: "Past papers",
        img: '/banners/certificate.svg',
        tab: '3',
        content: "content for 3 that does'nt exist here but we are tryna figure",
        katapita: ["content"]
    },
    {
        title: "Subject-wise Preps",
        img: '/banners/online-education-app.png',
        tab: '4',
        content: "content for 4 that does'nt exist here but we are tryna figure",
        katapita: ["content"]
    },
]

</script>