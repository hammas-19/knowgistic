<style scoped>
.blobBg {
    background-image: url(images/index_v2/blobanimation.svg);
    background-size: cover;
    background-repeat: no-repeat;
}

.blobOut {
    border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%;

}
</style>
<template>
    <div>
        <section>
            <div class="flex flex-col md:flex-row gap-10m justify-evenly items-center">
                <div v-for="items in 3" class="blobBg w-72 h-72 text-center flex items-center">

                    <div class="flex flex-col gap-5 text-shark blobOut border-4 border-astronaut">
                        <span class="text-3xl">
                            More than 20,000 programmes
                        </span>
                        <span>
                            My GUIDE helps you find the right programme based on your personal profile.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>