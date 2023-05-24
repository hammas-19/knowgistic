<template>
    <div class="calendar h-full w-full flex flex-col items-center pb-4 px-2 md:gap-5 gap-1 overflow-hidden text-ebonyClay">

        <div class="md:text-3xl text-xl mx-2 text-comet pb-5 self-start md:self-center font-bold">{{ currentMonth }}</div>

        <div class="flex justify-between text-center h-full w-full gap-2">
            <div class="p-5 bg-whiteLilac w-full flex rounded-2xl justify-center items-center text-2xl">{{ formatDate(previousDay) }}</div>
            <div class="p-5 bg-purplHeart rounded-2xl text-white w-full flex justify-center items-center text-4xl font-semibold shadow-lg shadow-[#AA8FF6]">{{ formatDate(currentDay) }}</div>
            <div class="p-5 bg-whiteLilac w-full flex rounded-2xl  justify-center items-center text-2xl">{{ formatDate(nextDay) }}</div>
        </div>

    </div>
</template>
  
<script>
export default {
    data() {
        return {
            currentDate: new Date()
        };
    },
    computed: {
        currentDay() {
            return this.currentDate;
        },
        previousDay() {
            const previousDate = new Date(this.currentDate);
            previousDate.setDate(previousDate.getDate() - 1);
            return previousDate;
        },
        nextDay() {
            const nextDate = new Date(this.currentDate);
            nextDate.setDate(nextDate.getDate() + 1);
            return nextDate;
        },
        currentMonth() {
            return this.currentDate.toLocaleDateString('en-US', { month: 'long' });
        }
    },
    methods: {
        formatDate(date) {
            return date.toLocaleDateString('en-US', {
                //   weekday: 'long',
                //   month: 'long',
                day: 'numeric'
            });
        }
    }
};
</script>
  
  