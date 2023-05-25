<style>
.cc{
    color: #848484ca
}
</style>
<template>
    <div class="relative z-10 md:rounded-2xl rounded-xl overflow-hidden md:min-h-[400px] min-h-[200px] w-full">
    <img class="object-center object-cover absolute z-10 h-full w-full" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEil0qhfnSK1rf0RIC26KEnWzC25Gxu1fzkl_HHQJZ3xylHue6k_bbnUhSisgQQI3PDy11D_5hJrWt420gSSf1KZ2Em1kHulNp85OAdbnrSQwUZ4XUzfdcwFMiSfytVZTqAx83F30m9_wDJUrVYZZYs84vgtLk0fMntJxFn9caJXZzBYbsPlWeXOEDlb/s320/369403158297539.6388bf15a8b97.jpg" alt="">

    <div class="absolute z-30 bottom-3 right-0 left-0 flex justify-between bg-[#848484ca] backdrop-blur-md rounded-lg px-2 w-[95%] mx-auto items-end text-white">

        <div class="flex md:gap-2 gap-[2px] items-center">

            <img class="md:max-h-40 max-h-20 rounded-full p-2" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidbsjOe6EoypTRKn4657KeUVO5sZ-ooVbudfa9zMhih2KjNXOa9nKiAnY-KV1fC1xOdFmdOpP_fA3Mqam069wAfu-niNNMtSTuDsk4oGF9DKNiyF0L1wNFJNpwZ_rpiyWuNsC5xt-aL_eV2QO9kggwW3EDH2vNwmmORlqWnUruzJhZ_DZfDwYWINJm/s320/Meybis%20Ruiz%20on%20Behance%20(1).png" alt="">
            <div class="flex flex-col">

                <h1 class="md:text-4xl text-lg leading-5">Hammas Masood</h1>
                <span class="md:text-sm text-xs font-medium text-moss"> Beginner </span>

            </div>

        </div>
        <slot name="detail"></slot>

    </div>

    </div>
</template>