<style scoped>
.sendBtn {
    font-family: inherit;
    font-size: 20px;
    background: #5F30E2;
    color: white;
    padding: 0.7em 1em;
    padding-left: 0.9em;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.2s;
}

.sendBtn span {
    display: block;
    margin-left: 0.3em;
    transition: all 0.3s ease-in-out;
}

.sendBtn svg {
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
}

.sendBtn:hover .svg-wrapper {
    animation: fly-1 0.6s ease-in-out infinite alternate;
}

.sendBtn:hover svg {
    transform: translateX(1.2em) rotate(45deg) scale(1.1);
}

.sendBtn:hover span {
    transform: translateX(5em);
}

.sendBtn:active {
    transform: scale(0.95);
}

@keyframes fly-1 {
    from {
        transform: translateY(0.1em);
    }

    to {
        transform: translateY(-0.1em);
    }
}
</style>
<template>
    <section>

        <PageBanner>
            <template #bannerImg>
                <img src="/banners/banner9.png" class="h-full w-full absolute opacity-20 z-0 object-none" alt="">
            </template>

            <template #head>Let's Connect ...!</template>

        </PageBanner>

    </section>

    <section>

        <section
            class="bg-selago py-10 bg-none md:bg-[url('/banners/banner9.png')] bg-scroll  bg-center bg-contain bg-no-repeat">
            <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">

                <div
                    class="max-w-5xl mx-auto mt-12 sm:mt-16 md:p-10 p-5 bg-[#fbfafe1f] backdrop-blur-xl md:rounded-3xl rounded-xl border-[2px] border-dashed border-pGray">
                    <div class="grid grid-cols-1 gap-6 px-2 text-center md:px-0 md:grid-cols-3">
                        <div class="overflow-hidden rounded-xl">
                            <div class="p-6">
                                <svg class="flex-shrink-0 w-10 h-10 mx-auto text-purplHeart"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <p class="mt-6 text-lg font-medium text-gray-900">+92 316 2411434</p>
                                <p class="mt-1 text-lg font-medium text-gray-900">+92 316 2411434</p>
                            </div>
                        </div>

                        <div class="rounded-xl">
                            <div class="p-6">
                                <svg class="flex-shrink-0 w-10 h-10 mx-auto text-purplHeart"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <p class="mt-6 text-lg font-medium text-gray-900">hammasmasoood@gmail.com</p>
                            </div>
                        </div>

                        <div class="overflow-hidden rounded-xl">
                            <div class="p-6">
                                <svg class="flex-shrink-0 w-10 h-10 mx-auto text-purplHeart"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p class="mt-6 text-lg font-medium leading-relaxed text-gray-900">Karachi, Sindh-PK</p>
                            </div>
                        </div>
                    </div>

                    <div class="mt-6 overflow-hidden rounded-xl">
                        <div class="px-6 py-12 sm:p-12">
                            <h3 class="text-3xl font-semibold text-center text-gray-900">Send us a message</h3>

                            <form action="#" method="POST" class="mt-14">
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                    <div>
                                        <label for="" class="text-base font-medium text-gray-900"> Your name </label>
                                        <div class="mt-2.5 relative">
                                            <input type="text" name="" id="" placeholder="Enter your full name"
                                                class="block w-full px-4 py-4 text-ebonyClay placeholder-comet transition-all duration-200 bg-white border border-pGray rounded-xl focus:outline-none focus:border-blue-600 caret-blue-600" />
                                        </div>
                                    </div>

                                    <div>
                                        <label for="" class="text-base font-medium text-gray-900"> Email address
                                        </label>
                                        <div class="mt-2.5 relative">
                                            <input type="email" name="" id="" placeholder="Enter your full name"
                                                class="block w-full px-4 py-4 text-ebonyClay placeholder-comet transition-all duration-200 bg-white border border-pGray rounded-xl focus:outline-none focus:border-blue-600 caret-blue-600" />
                                        </div>
                                    </div>

                                    <div>
                                        <label for="" class="text-base font-medium text-gray-900"> Phone number </label>
                                        <div class="mt-2.5 relative">
                                            <input type="tel" name="" id="" placeholder="Enter your full name"
                                                class="block w-full px-4 py-4 text-ebonyClay placeholder-comet transition-all duration-200 bg-white border border-pGray rounded-xl focus:outline-none focus:border-blue-600 caret-blue-600" />
                                        </div>
                                    </div>

                                    <div>
                                        <label for="" class="text-base font-medium text-gray-900"> Company name </label>
                                        <div class="mt-2.5 relative">
                                            <input type="text" name="" id="" placeholder="Enter your full name"
                                                class="block w-full px-4 py-4 text-ebonyClay placeholder-comet transition-all duration-200 bg-white border border-pGray rounded-xl focus:outline-none focus:border-blue-600 caret-blue-600" />
                                        </div>
                                    </div>

                                    <div class="sm:col-span-2 flex flex-col gap-4 justify-between">

                                        <span>
                                            <label for="" class="text-base font-medium text-gray-900"> Message </label>
                                            <div class="mt-2.5 relative">
                                                <textarea name="" id="" placeholder=""
                                                    class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-pGray rounded-xl resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                                                    rows="4"></textarea>
                                            </div>
                                        </span>

                                        <div class="sm:col-span-2 flex justify-end">
                                            <button class="sendBtn">
                                                <div class="svg-wrapper-1">
                                                    <div class="svg-wrapper">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                            width="24" height="24">
                                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                                            <path fill="currentColor"
                                                                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <span>Send</span>
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    </section>

</template>