<style scoped>
progress[value]::-webkit-progress-value {
    background: #000;
    border-radius: 50px;
}

progress[value]::-webkit-progress-bar {
    background-color: #e2dfdf;
    border-radius: 2px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
}
</style>
<template>
    <div class="px-2">

        <div
            class="lg:container mx-auto flex flex-col justify-between gap-4 items-center md:max-h-[calc(100vh-400px)] max-h-[calc(100vh-200px)]">

            <div class="flex items-center justify-center gap-5 w-full">
                <button v-for="tab in tabs" :key="tab"
                    class="text-comet md:p-2 p-2 font-medium md:text-base text-xs md:rounded-3xl rounded-lg transition-all opacity-30"
                    :class="{ 'text-[#ffffff] bg-[#5F30E2] opacity-100': currentTab === tab }" @click="currentTab = tab">
                    {{ tab }}
                </button>

            </div>
            <div class="w-full md:rounded-3xl rounded-lg">

                <div v-if="currentTab === 'Smart Preparation'">

                    <div class="flex items-center justify-around">

                        <img src="/images/cta/feature.gif" class="max-h-96 md:rounded-3xl rounded-lg" alt="feature">

                    </div>
                </div>

                <div v-if="currentTab === 'User Dashboard'">

                    <div class="flex items-center justify-around">

                        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZTNVnqV9RRbcQ_L12RNV3CQ_kAZdrJ4AFBruiLmAY6D5ixwZ94Ck2qQ4qm3KRiAsX_Hp6CCoFkkbyjejdSmTk5KnPB_HR9MR7L9nuYS5oSkUn_RgbekzC_3atOQ6lRCtw5duM1NwGSCw8RhCdpU3H0Kqi-m2FzkBAknTSXR5SQ_aX7lIDKtIyHmEX/s16000/userDashboard.gif"
                            class="max-h-96 md:rounded-3xl rounded-lg" alt="feature">

                    </div>

                </div>

                <div v-if="currentTab === 'Lattest Patterns'">

                    <div class="flex items-center justify-around">

                        <img src="/images/cta/feature.gif" class="max-h-96 md:rounded-3xl rounded-lg" alt="feature">

                    </div>

                </div>

            </div>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            currentTab: 'Smart Preparation',
            tabs: ['Smart Preparation', 'User Dashboard', 'Lattest Patterns']
        }
    }
}
</script>