<template>
    <div class="">

        <div class="flex flex-col md:flex-row gap-1 flex-wrap justify-center">

            <div
                class="bg-mineShaft text-white rounded-3xl flex flex-col p-10 gap-20 items-center md:items-start">

                <span class="text-3xl font-semibold">
                    Well-Organized <span class="text-astronaut border-b-2 border-white">Features</span> <br>
                    are here Now
                </span>
                <button class="rounded-full bg-astronaut text-shark w-40 h-16 text-xl">
                    More info...
                </button>
            </div>

            <div v-for="items in 2" class="bg-astronaut text-shark rounded-3xl flex flex-col p-3 gap-2 max-w-[220px]">
                <img src="/images/index_v1/certificate.png" class="h-28 w-28" alt="CertificateImage">
                <span class="text-xl">
                    Get Badges
                </span>
                <span class="text-xs">
                    Fly back and tell them, The real dragon warrior is coming out
                </span>
            </div>

        </div>
    </div>
</template>