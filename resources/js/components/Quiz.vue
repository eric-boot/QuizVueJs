<template>
  <div>
    <div v-if="introStage">
      <h1>Welkom bij: {{title}}</h1>
      
      <button class="btn btn-blue" @click="startQuiz">START!</button>
    </div>
    
    <div v-if="questionStage">
      <question 
                :question="questions[currentQuestion]"
                v-on:answer="handleAnswer"
                :question-number="currentQuestion+1"
      ></question>
    </div>
    
    <div v-if="resultsStage">
      Je hebt {{correct}} van de {{questions.length}} vragen goed. Het percentage is {{perc}}%.
    </div>
  </div>
</template>

<script>
import data from '../../assets/questions.json';

export default {
  name: 'Quiz',
  props:['url'],
  data() {
      return {
        introStage:false,
        questionStage:false,
        resultsStage:false,
        title:'',
        questions:[],
        currentQuestion:0,
        answers:[],
        correct:0,
        perc:null,
        data
      }
    },
    created() {    

        this.title = data.title;
        this.questions = data.questions;
        this.introStage = true;
    
    },
    methods:{
      startQuiz() {
        this.introStage = false;
        this.questionStage = true;
        console.log('test'+JSON.stringify(this.questions[this.currentQuestion]));
      },
      handleAnswer(e) {
        console.log('answer event ftw',e);
        this.answers[this.currentQuestion]=e.answer;
        if((this.currentQuestion+1) === this.questions.length) {
          this.handleResults();
          this.questionStage = false;
          this.resultsStage = true;
        } else {
          this.currentQuestion++;
        }
      },
      handleResults() {
        console.log('handle results');
        this.questions.forEach((a, index) => {
          if(this.answers[index] === a.answer) this.correct++;        
        });
        this.perc = ((this.correct / this.questions.length)*100).toFixed(2);
        console.log(this.correct+' '+this.perc);
      }
    }
}
</script>

<style>

</style>
