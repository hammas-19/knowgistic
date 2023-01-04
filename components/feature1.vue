<style scoped>
.blobBg{
    background-image: url(images/index_v2/blobanimation.svg);
    background-size: cover;
    background-repeat: no-repeat;
}

</style>
<template>
    <div>
        <section>
            <div class="flex flex-col md:flex-row gap-10m justify-evenly items-center">
                <div v-for="items in 3" 
                    class="blobBg w-72 h-72 bor">
                    
                    <spa class="">
                        Data
                    </spa>
                </div>
            </div>
        </section>
    </div>
</template>