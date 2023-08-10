<style scoped>
.card {
    width: 190px;
    height: 254px;
    color: white;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 5px;
    overflow: visible;
}

.card .item {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.item:hover {
    transform: scale(0.95);
    transition: all 0.3s;
}

.item svg {
    width: 40px;
    height: 40px;
    margin-bottom: 7px;
}

.item--1 {
    background: #c7c7ff;
}

.item--2 {
    background: #ffd8be;
}

.item--3 {
    background: #a9ecbf;
}

.item--4 {
    background: #f3bbe1;
}

.quantity {
    font-size: 25px;
    font-weight: 600;
}

.text {
    font-size: 12px;
    font-family: inherit;
    font-weight: 600;
}

.text--1 {
    color: rgba(149, 149, 255, 1);
}

.text--2 {
    color: rgba(252, 161, 71, 1);
}

.text--3 {
    color: rgba(66, 193, 110, 1);
}

.text--4 {
    color: rgba(220, 91, 183, 1);
}
</style>
<template>

    <div v-if="apiData" v-for="item, index in apiData" :key="index" class="flex gap-10">
        <div class="py-2 overflow-hidden max-w-[260px] mx-auto">
            <h1>Q: {{ item.question }}</h1>
        </div>
        <div class="card container mx-auto my-4">


            <div class="item item--1">

                <span class="quantity"> A </span>
                <span class="text text--1"> {{ item.correct_answer }} </span>
            </div>
            <div class="item item--2">
                <span class="quantity"> B </span>
                <span class="text text--2"> {{ item.incorrect_answers[0] }} </span>
            </div>
            <div class="item item--3">

                <span class="quantity"> C </span>
                <span class="text text--3"> {{ item.incorrect_answers[1] }} </span>
            </div>
            <div class="item item--4">

                <span class="quantity"> D </span>
                <span class="text text--4"> {{ item.incorrect_answers[2] }} </span>
            </div>
        </div>

    </div>


    <!-- <div v-if="apiData" class="flex flex-col gap-5">

        <div v-for="item, index in apiData" :key="index">
            <h1>{{ item.category }}</h1>
            <p>{{ item.type }}</p>
            <p>{{ item.difficulty }}</p>
        </div>

        <span></span>
    </div> -->
</template>
<script setup>
import axios from 'axios';
const apiData = ref();
axios(`https://opentdb.com/api.php?amount=20&category=9&difficulty=easy&type=multiple`, {
    method: "GET"

}).then((response) => {
    apiData.value = response.data.results;
}).catch((err) => {
});
</script>