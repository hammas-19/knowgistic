<template>
    <div class="bg-selago w-full flex flex-col justify-center items-center h-screen gap-10">

        <span>
            <img src="/Logo.svg" class="md:w-[280px] w-[200px] " alt="">
        </span>

        <div class="md:p-8 p-2 lg:w-1/2 mx-auto text-ebonyClay">
            <div class="bg-white md:border-4 border-2 border-whiteLilac rounded-t-lg py-8 px-2 ">
                <p class="text-center text-sm   font-light">Sign up with</p>
                <div>
                    <div class="flex items-center justify-center space-x-4 mt-3">
                        <button
                            class="flex items-center py-2 px-4 gap-2 text-sm uppercase rounded bg-blue-500 hover:bg-whiteLilac text-white border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-[1px]">
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                                </path>
                            </svg>
                            Facebook
                        </button>
                        <button
                            class="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-whiteLilac text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-[1px]">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-3" viewBox="0 0 48 48">
                                <path fill="#fbc02d"
                                    d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
                                <path fill="#e53935"
                                    d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
                                <path fill="#4caf50"
                                    d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
                                <path fill="#1565c0"
                                    d="M43.611 20.083 43.595 20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
                            </svg>
                            Google
                        </button>
                    </div>
                </div>
            </div>
            <div class="bg-whiteLilac rounded-b-lg py-12 px-4 lg:px-24 text-xs md:text-base">
                <p class="text-center text-gray-500 font-light"> Or sign up with credentials </p>
                <form class="mt-6">
                    <div class="relative mt-3 flex justify-between gap-3">
                        <input
                            class="appearance-none border pl-4 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                            id="FirstName" type="text" placeholder="First name" />

                        <input
                            class="appearance-none border pl-4 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                            id="LastName" type="text" placeholder="Last name" />

                    </div>
                    <div class="relative mt-3">
                        <input
                            class="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                            id="username" type="text" placeholder="Email" />
                        <div class="absolute left-0 inset-y-0 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 ml-3   p-1" viewBox="0 0 20 20"
                                fill="#5F30E2">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        </div>
                    </div>
                    <div class="relative mt-3">
                        <input
                            class="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                            id="Password" type="text" placeholder="Password" />
                        <div class="absolute left-0 inset-y-0 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 ml-3   p-1" viewBox="0 0 20 20"
                                fill="#5F30E2">
                                <path
                                    d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                            </svg>
                        </div>
                    </div>
                    <div class="relative mt-3">
                        <input
                            class="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                            id="confirmPassword" type="text" placeholder="Confirm password" />
                        <div class="absolute left-0 inset-y-0 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 ml-3   p-1" viewBox="0 0 20 20"
                                fill="#5F30E2">
                                <path
                                    d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                            </svg>
                        </div>
                    </div>

                    <p class="mt-4 italic text-gray-500 font-light text-xs">Password strength: <span
                            class="font-bold text-green-400">strong</span></p>
                    <div class="mt-4 flex items-center text-gray-500"> <input type="checkbox" id="remember" name="remember"
                            class="mr-2" /> <label class="text-sm" for="remember">I agree with the</label>lb <a
                            class="text-indigo-400 hover:text-indigo-500">Privacy Policy</a>

                    </div>
                    <div class="flex items-center justify-center mt-8"> <button
                            class="text-white py-2 px-4 uppercase rounded bg-purplHeart hover:bg-ebonyClay shadow hover:shadow-lg font-medium transition transform hover:-translate-y-[1px]">
                            Create Account </button> </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: "none",
});
</script>