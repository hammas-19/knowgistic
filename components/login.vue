<template>
    <div class="bg-gray-800 h-screen flex items-center">

        <div
            class="flex justify-center mx-auto w-full md:w-[90%] rounded-2xl border-2 border-red-600 h-[calc(100vh-200px)] items-center overflow-hidden">

            <div class="w-1/2">
                <img src="/default.png" alt="">
            </div>


            <div class="flex bg-white items-center justify-center w-1/2 h-full">
                <!-- <span></span> -->
                <!-- <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg1.svg" alt="logo"> -->

                <div class="w-full rounded px-32 text-center">
                    <p tabindex="0" class="focus:outline-none text-4xl font-jost text-gray-800">Sign in</p>
                    <p tabindex="0" class="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">
                        Dont have account?
                        <a href="javascript:void(0)"
                            class="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none text-purplHeart cursor-pointer">
                            Sign up here
                        </a>
                    </p>

                    <!-- Direct Login wrapper -->
                    <div class="pb-2 pt-4 text-left">

                        <div>
                            <label id="email" class="text-sm font-medium leading-none text-gray-800">
                                Email
                            </label>
                            <input aria-labelledby="email" type="email"
                                class="outline-moss border-[1px] border-purplHeart pl-3 mt-2 rounded-3xl  text-xs font-medium text-gray-800 py-3 w-full " />
                        </div>

                        <div class="mt-4  w-full">
                            <label for="pass" class="text-sm font-medium leading-none text-gray-800">
                                Password
                            </label>
                            <div class="relative flex items-center justify-center">
                                <input id="pass" type="password"
                                    class="outline-moss border-[1px] border-purplHeart pl-3 mt-2 rounded-3xl  text-xs font-medium text-gray-800 py-3 w-full " />
                                <div class="absolute right-0 mt-2 mr-3 cursor-pointer">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg5.svg"
                                        alt="viewport">
                                </div>
                            </div>
                        </div>

                        <div class="my-4">
                            <button role="button"
                                class="text-sm font-semibold leading-none text-white focus:outline-none bg-purplHeart border hover:shadow-2xl hover:mb-1 hover:bg-black hover:text-white transition-all rounded-3xl py-4 w-full">
                                LogIn
                            </button>
                        </div>

                    </div>

                    <!-- OR element -->

                    <div class="w-full flex items-center justify-between py-2">
                        <hr class="w-full bg-gray-400">
                        <p class="text-base font-medium leading-4 px-2.5 text-gray-400">OR</p>
                        <hr class="w-full bg-gray-400  ">
                    </div>



                    <div class="mt-10 flex flex-col gap-5 pb-4">
                        <!-- Google Trigger -->
                        <button aria-label="Continue with google" role="button"
                            class="py-3 px-4 border-[1px] border-purplHeart rounded-full flex items-center justify-center shadow-xl w-full hover:shadow-none transition-all ">
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg" alt="google">
                            <p class="text-base font-medium ml-4 text-gray-700">Continue with Google</p>
                        </button>

                        <!-- FaceBook Trigger -->

                        <button aria-label="Continue with github" role="button"
                            class="py-3 px-4 border-[1px] border-purplHeart rounded-full flex items-center justify-center w-full">
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg3.svg" alt="github">
                            <p class="text-base font-medium ml-4 text-gray-700">Continue with Github</p>
                        </button>
                    </div>


                </div>

            </div>


        </div>

    </div>


</template>