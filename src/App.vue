<template>
  <v-app dark center class="text-xs-center">
    <!-- Toolbar -->
      <v-toolbar dark color="orange">
        <!-- <v-toolbar-side-icon></v-toolbar-side-icon> --> 
        <v-spacer></v-spacer>

        <v-toolbar-title class="white--text">Quiz Dubai</v-toolbar-title>

        <v-spacer></v-spacer>

        
      </v-toolbar>


    <transition name="bounce" appear mode="out-in">
      <section v-if="visible" key="visible" class="intro">
        <h1 class="display-1">Préjugé ou réalité ?</h1>
        <v-divider></v-divider>
        <h2>Jusqu’où iront vos préjugés ?</h2>
        <p class="instructions">Répondez aux 50 questions qui vont suivre pour voir si votre vision de Dubai correspond à la réalité !</p>
        <v-btn color="warning" @click.prevent="starQuiz">Commencer</v-btn>
      </section>

      <section v-else key="invisible">
        <Question/>
      </section>
    </transition>

  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Question from './components/Question'
import Counter from './components/Counter'
// import Register from './components/register/Register'

export default {
  name: 'App',
  components: {
    Question,
    Counter
  },
  data () {
    return {
      introView:true,
      questionsView:false,
      visible: true,
      count: '0'
    }
  },
  methods: {
    startQuiz() {
      this.introView = false
      this.questionsView = true
    },
    starQuiz(){
        this.visible = !this.visible
      },
  }
}
</script>

<style>
h1{
  margin:30px auto;
}
  h2{
    margin:20px auto;
  }
  p.instructions{
    padding:0 5%;
  }
  form .primary--text{
    color: #ff9800!important;
  }
  .intro{
    display: table;
    margin:auto;
  }
  .aside{
    position: absolute;
    top:5px;
    right: 20px;
    height:48px;
    display: flex;
    align-items: center;
  }
  .spacer + .white--text{
    margin:0;
  }
  .v-badge{
    margin-left:10px;
  }
  .v-divider{
    margin:10px 0 20px;
  }


  /* Fade animation */
  .fade-enter-active{
    transition: opacity .5s, right .5s
  }
  .fade-enter{
    opacity:0;
    right:-100px;
  }

  /* Bounce animation */
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  .bounce-move{
    transition:transform 1s;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

  /* FadeRight animation */
  .fadeInright-enter{
    animation: fadeInRight .5s,
  }
  @keyframes fadeInRight {
    from {
      opacity: 0;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }


</style>
