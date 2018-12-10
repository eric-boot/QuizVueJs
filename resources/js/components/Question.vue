<template>
  <div class="max-w-md rounded overflow-hidden shadow-lg p-1 m-1">
    <strong>Vraag {{ questionNumber }}:</strong><br/>
    <strong>{{ question.text }} </strong>

    <div class="flex flex-col items-center" v-if="question.type === 'tf'">
      <span>
        <input type="radio" name="currentQuestion" id="trueAnswer" v-model="answer" value="t">
        <label for="trueAnswer">
          Waar
        </label>
      </span>
      <span>
        <input type="radio" name="currentQuestion" id="falseAnswer" v-model="answer" value="f">
        <label for="falseAnswer">
          Niet waar
        </label>
      </span>
    </div>

    <div class="flex flex-col items-center" v-if="question.type === 'mc'">
      <div v-for="(mcanswer,index) in question.answers">
        <input type="radio" :id="'answer'+index" name="currentQuestion" v-model="answer" :value="mcanswer">
        <label :for="'answer'+index">
          {{mcanswer}}
        </label><br/>
      </div>
    </div>

    <div class="flex justify-center" v-if="question.type === 'sort'">
      <draggable class="w-1/2" v-model="answer" @start="drag=true" @end="drag=false">
        <div class="border border-gray rounded-lg w-auto p-1 m-1 cursor-move text-center" :value="element" v-for="element in answer" :key="element">
          {{element}}
        </div>
      </draggable>
    </div>

    <span class="flex justify-end">
      <button class="blue right" @click="submitAnswer">Antwoord</button>
    </span>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  name: 'Question',
  data() {
    return {
      answer:null
    }
  },
  components: {
      draggable,
  },
  props:['question','question-number'],
  created() {

    if (this.question.type === 'sort') {
      this.answer = this.question.answers;
    }

  },
  methods:{
      submitAnswer:function() {
        this.$emit('answer', {answer:this.answer});
        this.answer = null;
      }
  }
}
</script>

<style>

</style>
