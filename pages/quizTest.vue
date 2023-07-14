<template>
    <div class="bg-blue-500 min-h-screen flex items-center justify-center">
        <!-- start Quiz button -->
        <div class="start_btn">
            <button class="bg-white text-blue-500 py-4 px-8 rounded-lg" @click="startQuiz">Start Quiz</button>
        </div>

        <!-- Info Box -->
        <div class="info_box bg-white rounded-lg" :class="{ activeInfo: infoBoxActive }">
            <div class="info-title">
                <span>Some Rules of this Quiz</span>
            </div>
            <div class="info-list">
                <!-- Info Box Content -->
            </div>
            <div class="buttons">
                <button class="quit" @click="quitQuiz">Exit Quiz</button>
                <button class="restart" @click="continueQuiz">Continue</button>
            </div>
        </div>

        <!-- Quiz Box -->
        <div class="quiz_box bg-white rounded-lg" :class="{ activeQuiz: quizBoxActive }">
            <header>
                <div class="title">Awesome Quiz Application</div>
                <div class="timer">
                    <div class="time_left_txt">Time Left</div>
                    <div class="timer_sec">{{ timeLeft }}</div>
                </div>
                <div class="time_line"></div>
            </header>
            <section>
                <div class="que_text">
                    {{ questions[currentQuestion].question }}
                </div>
                <div class="option_list">
                    <ul>
                        <li v-for="(option, index) in questions[currentQuestion].options" :key="index">
                            <label class="radio">
                                <input type="radio" name="option" :value="option" v-model="selectedOption" />
                                <span>{{ option }}</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </section>
            <footer>
                <div class="total_que">
                    Question {{ questionNumber }} of {{ questions.length }}
                </div>
                <button class="next_btn" @click="nextQuestion">Next Que</button>
            </footer>
        </div>

        <!-- Result Box -->
        <div class="result_box bg-white rounded-lg" :class="{ activeResult: resultBoxActive }">
            <div class="icon">
                <i class="fas fa-crown"></i>
            </div>
            <div class="complete_text">You've completed the Quiz!</div>
            <div class="score_text">
                Your Score: {{ userScore }} / {{ questions.length }}
            </div>
            <div class="buttons">
                <button class="restart" @click="restartQuiz">Replay Quiz</button>
                <button class="quit" @click="quitQuiz">Quit Quiz</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            infoBoxActive: false,
            quizBoxActive: false,
            resultBoxActive: false,
            timeLeft: 15,
            currentQuestion: 0,
            questionNumber: 1,
            userScore: 0,
            selectedOption: '',
            timerInterval: null,
            timeLineInterval: null,
            timeLineProgress: 0,
            questions: [
                {
                    question: 'What is the capital of France?',
                    options: ['Paris', 'London', 'Berlin', 'Rome'],
                    answer: 'Paris',
                },
                {
                    question: 'What is the largest planet in our solar system?',
                    options: ['Jupiter', 'Saturn', 'Neptune', 'Earth'],
                    answer: 'Jupiter',
                },
                {
                    question: 'Which country is known as the "Land of the Rising Sun"?',
                    options: ['Japan', 'China', 'South Korea', 'India'],
                    answer: 'Japan',
                },
                {
                    question: 'What is the currency of Brazil?',
                    options: ['Real', 'Peso', 'Dollar', 'Euro'],
                    answer: 'Real',
                },
            ],
        };
    },
    methods: {
        startQuiz() {
            this.infoBoxActive = true;
        },
        quitQuiz() {
            this.resetQuiz();
        },
        continueQuiz() {
            this.infoBoxActive = false;
            this.quizBoxActive = true;
            this.startTimer();
            this.startTimerLine();
        },
        nextQuestion() {
            if (this.selectedOption === this.questions[this.currentQuestion].answer) {
                this.userScore++;
            }
            if (this.currentQuestion < this.questions.length - 1) {
                this.currentQuestion++;
                this.questionNumber++;
                this.selectedOption = '';
                this.resetTimer();
                this.startTimer();
                this.resetTimerLine();
                this.startTimerLine();
            } else {
                this.showResult();
            }
        },
        showResult() {
            clearInterval(this.timerInterval);
            clearInterval(this.timeLineInterval);
            this.quizBoxActive = false;
            this.resultBoxActive = true;
        },
        restartQuiz() {
            this.resetQuiz();
            this.startQuiz();
        },
        resetQuiz() {
            this.infoBoxActive = false;
            this.quizBoxActive = false;
            this.resultBoxActive = false;
            this.currentQuestion = 0;
            this.questionNumber = 1;
            this.userScore = 0;
            this.selectedOption = '';
            this.resetTimer();
            this.resetTimerLine();
        },
        startTimer() {
            this.timerInterval = setInterval(() => {
                if (this.timeLeft > 0) {
                    this.timeLeft--;
                } else {
                    clearInterval(this.timerInterval);
                    this.showResult();
                }
            }, 1000);
        },
        resetTimer() {
            this.timeLeft = 15;
        },
        startTimerLine() {
            this.timeLineInterval = setInterval(() => {
                if (this.timeLineProgress < 100) {
                    this.timeLineProgress++;
                } else {
                    clearInterval(this.timeLineInterval);
                }
            }, 150);
        },
        resetTimerLine() {
            this.timeLineProgress = 0;
        },
    },
};
</script>

<style scoped>
/* Add your styling classes here using CSS or a CSS framework like Tailwind CSS */
</style>
