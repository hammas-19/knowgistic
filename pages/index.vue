<style scoped>
.borderer {
    border: 2px solid #303030;
}
</style>

<template>
    <div>

        <section class="bg-harp pb-10">

            <!-- Welcome banner starts -->
            <div
                class="container mx-auto  bg-teaGreen rounded-3xl md:rounded-[50px] text-center md:text-left flex flex-col items-center gap-8 md:gap-10 px-5">

                <div class="flex flex-col md:flex-row gap-10 md:gap-20 py-10 text-shark">

                    <div class="text-3xl font-bold max-w-[320px]">
                        <h1>
                            Assess your <br>
                            <span class="bg-shark text-white rounded-full px-3">Govt-Job</span>
                            with Us
                        </h1>
                    </div>
                    <span class="max-w-[320px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ratione sunt voluptates fugit
                        placeat sequi distinctio ips
                    </span>

                </div>

                <div class="">
                    <img src="images/index/banner.png" alt="">
                </div>

            </div>
            <!-- Welcome banner Ends -->
        </section>

        <section>
            <!-- Stats starts -->
            <Stats />
        </section>

        <!-- Intro section -->
        <section class="bg-harp">
            <div class="container mx-auto py-10 md:py-20">

                <div class="flex flex-col md:flex-row justify-center md:justify-between gap-5 md:gap-14 items-center">
                    <img src="images/index/featureImg.png" alt="IntroImage">
                    <div class="flex flex-col gap-8 text-left">

                        <span class="text-3xl font-semibold ">
                            We provide smart <br> <span class="rounded-full px-2 bg-teaGreen borderer">Online
                                Guide</span> for Govt-Job of Pakistan
                        </span>
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ratione sunt voluptates fugit
                            placeat sequi distinctio ips
                        </span>

                    </div>
                </div>

            </div>
        </section>

        <!-- Feature Section starts here -->

        <section>

            <div class="container mx-auto py-10 md:py-20">

                <div class="flex flex-col md:flex-row gap-8 flex-wrap justify-center">

                    <div
                        class="bg-mineShaft text-white rounded-3xl min-w-[220px] md:min-w-[670px] flex flex-col p-10 gap-20 items-center md:items-start">

                        <span class="text-3xl font-semibold">
                            Well-Organized <span class="text-teaGreen border-b-2 border-white">Features</span> <br>
                            are here Now
                        </span>
                        <button class="rounded-full bg-teaGreen text-shark w-40 h-16 text-xl">
                            More info...
                        </button>
                    </div>

                    <div v-for="items in 4"
                        class="bg-teaGreen text-shark rounded-3xl flex flex-col p-8 gap-5 max-w-[320px]">
                        <img src="images/index/certificate.png" class="h-28 w-28" alt="CertificateImage">
                        <span class="text-3xl">
                            Get Badges
                        </span>
                        <span>
                            Fly back and tell them, The real dragon warrior is coming out
                        </span>
                    </div>

                </div>
            </div>

        </section>

        <!-- Content Gallery Starts -->

        <section class="bg-teaGreen">

            <div class="container mx-auto py-10 md:py-md">

                <h1 class="text-center text-4xl pb-10 text-shark">
                    Current
                    <span class=" bg-harp border-2 border-harp px-2 rounded-full">
                        Govt-Jobs
                    </span>
                </h1>

                <div class="flex flex-col md:flex-row justify-evenly gap-10">

                    <div v-for="items in 3" class="rounded-2xl bg-harp p-8 flex flex-col w-[320px] gap-8">
                        <span class="flex justify-center">
                            <img src="images/index/teaching.png" class="h-40 w-40" alt="OnlineStudies">
                        </span>

                        <div class="flex justify-between w-full">
                            <span>
                                rating: ****
                            </span>
                            <span class="text-nectarine">
                                starts soon
                            </span>
                        </div>

                        <span class="text-2xl font-semibold">
                            BPS-17 : Assistant Comissioner
                        </span>

                        <button class="rounded-full bg-teaGreen text-shark w-40 h-16 text-xl float-left">
                            Get Started
                        </button>

                    </div>
                </div>

            </div>

        </section>

        <!-- Steps Section starts -->

        <section>
            <div class="container mx-auto py-10 md:py-20">

                <div class="flex flex-col lg:flex-row-reverse justify-center gap-5 md:gap-8 items-center">
                    <img src="images/index/featureImg.png" alt="IntroImage">
                    <div
                        class="bg-mineShaft min-w-[220px] md:min-w-[670px] p-10 rounded-3xl flex flex-col gap-8 text-left">

                        <span class="text-3xl font-semibold text-white">
                            Let's Get Started in <br> <span class="rounded-full px-2 bg-teaGreen text-mineShaft">3
                                Steps</span>
                        </span>
                        <div class="flex flex-col text-2xl font-semibold text-white gap-2">
                            <span class="flex items-center gap-8">
                                <span class="rounded-full px-3 bg-teaGreen text-mineShaft">1</span> <span>
                                    Create Your Account
                                </span>
                            </span>
                            <span class="flex items-center gap-8">
                                <span class="rounded-full px-2 bg-teaGreen text-mineShaft">2</span> <span>
                                    Select Your Test Domain
                                </span>
                            </span>
                            <span class="flex items-center gap-8">
                                <span class="rounded-full px-2 bg-teaGreen text-mineShaft">3</span> <span>
                                    Start Learning !
                                </span>
                            </span>
                        </div>

                    </div>
                </div>

            </div>
        </section>

        <!-- Demo Section starts -->

        <section class="bg-harp">
            <div class="container mx-auto py-10 md :py-20">
                <div class="flex flex-col md:flex-row justify-evenly gap-8 rounded-3xl bg-teaGreen text-shark p-10 items-center borderer">
                    <img src="images/index/demo.png" class="h-[200px] md:h-[360px]" alt="demoImage">
                    <div class="flex flex-col gap-5">
                        <span class="text-3xl">
                            Give It A Demo Shot !
                        </span>
                        <span class="">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolorum, commod
                        </span>
                        <span class="bg-mineShaft rounded-full w-40 h-10 flex items-center justify-center text-white font-semibold">
                            Go to Demo >>
                        </span>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>