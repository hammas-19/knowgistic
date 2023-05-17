<template>
    <div>
        <div class="max-w-7xl px-3 mx-auto flex mb-4 text-base font-headings">
            <div class="md:border-2 border border-graphite p-1 flex rounded-full md:gap-1 gap-[2px]">
                <button
                    class="font-medium md:text-base text-xs  text-black md:px-8 px-3 md:py-1 py-[2px] rounded-full transition-all duration-300"
                    :class="{ 'text-graphite bg-bisonHide': activeTab === 1 }" @click="activeTab = 1">
                    <slot name="cat1"></slot>

                </button>
                <button
                    class="font-medium md:text-base text-xs  text-black md:px-8 px-3 md:py-1 py-[2px] rounded-full transition-all duration-300"
                    :class="{ 'text-graphite bg-bisonHide': activeTab === 2 }" @click="activeTab = 2">
                    <slot name="cat2"></slot>

                </button>
            </div>
        </div>

        <div v-if="activeTab === 1">

            <slot name="category1"></slot>

        </div>

        <div v-if="activeTab === 2">
            <slot name="category2"></slot>

        </div>

    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const activeTab = ref(1);

        return {
            activeTab,
        };
    },
};
</script>
