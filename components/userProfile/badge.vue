<template>

    <div role="alert" class="rounded-xl md:p-4 p-[2px] shadow-xl bg-red-300">
        <div class="flex items-start md:gap-4 gap-1">
            <span class="text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="md:h-6 h-4 md:w-6 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </span>

            <div class="flex-1">
                <strong class="block font-medium text-gray-900 md:text-base text-sm"> Changes saved </strong>

                <p class="mt-1 md:text-sm text-xs text-gray-700">
                    Your product changes have been saved.
                </p>
            </div>

            <button class="text-gray-500 transition hover:text-gray-600">
                <span class="sr-only">Dismiss popup</span>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="md:h-6 h-4 md:w-6 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    </div>


</template>