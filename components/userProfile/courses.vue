<template>
    <div>
        <section class="">
            <div class="container mx-auto ">
                <div class="flex border-b-[3px] border-blueChalk border-dashed md:justify-center justify-evenly gap-8 pb-5 sticky">
                    <button v-for="tab in tabs" :key="tab"
                        class="text-blueChalk md:px-10 px-4 py-2 font-semibold uppercase rounded-2xl bg-gulfBlue"
                        :class="{ 'bg-amaranth text-blueChalk border-dashed border-4 border-gulfBlue': currentTab === tab }"
                        @click="currentTab = tab">
                        {{ tab }}
                    </button>
                </div>
                <div class="py-4">
                    <span v-if="currentTab === 'Tab 1'" class="flex flex-col md:flex-row justify-center gap-4 items-center flex-wrap">
                        <UserProfileCourseCard  />

                    </span>
                    <p v-if="currentTab === 'Tab 2'">Content for Tab 2</p>
                    <p v-if="currentTab === 'Tab 3'">Content for Tab 3</p>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    data() {
        return {
            currentTab: 'Tab 1',
            tabs: ['Tab 1', 'Tab 2', 'Tab 3']
        }
    }
}
const courseData = [
    {
        image: 'images/index_v2/gk.png',
        from: 'General Knowledge',
        level: '1'
    },
    {
        image: 'images/index_v2/analytics.png',
        from: 'Analytical Problems',
        level: '1'

    },
    {
        image: 'images/index_v2/ca.png',
        from: 'Current Affairs',
        level: '2'
    },
    {
        image: 'images/index_v2/cs.png',
        from: 'Computer Studies',
        level: '2'
    },
    {
        image: 'images/index_v2/eng.png',
        from: 'English',
        level: '3'
    },
    {
        image: 'images/index_v2/isl.png',
        from: 'Islamic Studies',
        level: '3'
    },
    {
        image: 'images/index_v2/maths.png',
        from: 'Maths',
        level: '3'
    },
    {
        image: 'images/index_v2/pro.png',
        from: 'Professionalism',
        level: '3'
    },
    {
        image: 'images/index_v2/sci.png',
        from: 'General Science',
        level: '3'
    },
    {
        image: 'images/index_v2/sindhi.png',
        from: 'Sindhi',
        level: '3'
    },
    {
        image: 'images/index_v2/urdu.png',
        from: 'Urdu',
        level: '3'
    },
]   
</script>