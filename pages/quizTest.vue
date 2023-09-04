<template>
  <div class="quiz-container">
    <h1>Quiz</h1>
    <div v-if="quizCompleted">
      <p>Congratulations! Quiz completed. Your score: {{ score }}</p>
      <button @click="resetQuiz">Restart Quiz</button>
    </div>
    <div v-else>
      <div class="question">
        <p>{{ currentQuestion.text }}</p>
        <div v-for="(option, index) in currentQuestion.options" :key="index">
          <button @click="checkAnswer(index)" :disabled="answered">{{ option }}</button>
        </div>
      </div>
      <p>Score: {{ score }}</p>
      <p v-if="!answered">Time remaining: {{ timeRemaining }}s</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentQuestionIndex: 0,
      questions: [
        {
          text: 'What is 2 + 2?',
          options: ['A) 3', 'B) 4', 'C) 5'],
          correctIndex: 1
        },
        {
          text: 'What is the capital of France?',
          options: ['A) London', 'B) Berlin', 'C) Paris'],
          correctIndex: 2
        },
        {
          text: 'Which planet is known as the Red Planet?',
          options: ['A) Earth', 'B) Mars', 'C) Venus'],
          correctIndex: 1
        }
      ],
      score: 0,
      answered: false,
      timer: null
    };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    },
    quizCompleted() {
      return this.currentQuestionIndex >= this.questions.length;
    },
    timeRemaining() {
      return Math.max(0, 10 - Math.floor((Date.now() - this.timer) / 1000));
    }
  },
  methods: {
    checkAnswer(selectedIndex) {
      if (selectedIndex === this.currentQuestion.correctIndex) {
        this.score++;
      }
      this.answered = true;
      clearInterval(this.timer);
      setTimeout(() => {
        this.nextQuestion();
      }, 1000);
    },
    nextQuestion() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
        this.answered = false;
        this.timer = Date.now();
        setTimeout(() => {
          this.nextQuestion();
        }, 10000);
      } else {
        // Quiz completed
        this.currentQuestionIndex = this.questions.length; // Ensure it stays at the end
      }
    },
    resetQuiz() {
      this.currentQuestionIndex = 0;
      this.score = 0;
      this.answered = false;
      this.timer = null;
    }
  },
  mounted() {
    this.timer = Date.now();
    setTimeout(() => {
      this.nextQuestion();
    }, 10000);
  }
};
</script>

<style scoped>
/* Add your CSS styles here */
.quiz-container {
  text-align: center;
  margin: 20px;
}

.question {
  margin: 20px;
  padding: 10px;
  border: 1px solid #ccc;
}

button {
  margin: 5px;
  cursor: pointer;
}
</style>
