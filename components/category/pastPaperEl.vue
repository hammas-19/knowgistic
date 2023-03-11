<template>
    <div>


        <ol class="relative border-l border-comet">
            
            <li v-for="items in 5" class="mb-10 ml-6">
                <span
                    class="absolute flex items-center justify-center w-6 h-6 bg-whiteLilac rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg aria-hidden="true" class="w-3 h-3 text-purplHeart" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clip-rule="evenodd"></path>
                    </svg>
                </span>
                <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    FIA Exam-2022
                    <span
                        class="bg-whiteLilac text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">Latest</span>
                </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Held on :
                    January 13th, 2022
                </time>

                <a href="#"
                    class="inline-flex items-center px-4 py-2 mt-5 text-sm font-medium text-ebonyClay bg-whiteLilac  border-purplHeart rounded-lg hover:bg-purplHeart hover:text-white transition-all"><svg
                        class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                            clip-rule="evenodd"></path>
                    </svg> Download Paper</a>
            </li>

        </ol>


    </div>
</template>