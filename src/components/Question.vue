<template>
  <v-container class="main-container" fluid>

      <!-- SCORE -->
      <transition name="fade">
      <aside class="aside" v-if="scoreStarted">
          <span>Score :</span>
          <v-badge color="green" right overlap>
            <span slot="badge">{{count_right}}</span>
            <v-icon color="white" size="30">check_box</v-icon>
          </v-badge>
          <v-badge color="red" right overlap>
            <span slot="badge">{{count_wrong}}</span>
            <v-icon color="white" size="30">cancel</v-icon>
          </v-badge>
        </aside>
      </transition>
      
      <!-- Questions -->
      <v-container fluid class="question-container" v-if="questionsView">
        <v-layout column align-center>
          <p class="question" v-model="questionList">{{questionList[currentQuestion].question}}</p>

          <v-dialog v-model="dialog" width="90%" persistent v-on:after-leave="yolo()">

          <v-btn large color="info" @click.prevent="displayResult(true)" id="true" slot="activator">
           <!--  <v-icon dark right>check_circle</v-icon> -->
            Vrai
          </v-btn>

          <v-btn large color="info" @click.prevent="displayResult(false)" id="false" slot="activator">
           <!--  <v-icon dark right>block</v-icon> -->
            Faux
          </v-btn>

          
            <v-card class="text-xs-center">
              <v-card-title class="headline success justify-center" primary-title v-if="questionList[currentQuestion].answer">
                C'est Vrai !
              </v-card-title>
              <v-card-title class="headline error justify-center" primary-title v-else>
                C'est Faux !
              </v-card-title>
              <v-card-text class="padding">
                {{questionList[currentQuestion].fact}}
              </v-card-text>

              <v-divider></v-divider>
      
              <v-card-actions class="justify-center">
                <v-btn color="amber" large flat @click.prevent="nextQuestion">
                  Continuer
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

        </v-layout>
      </v-container>

      <!-- Form -->
      <v-slide-x-reverse-transition>
        <v-container fluid class="form-container" v-if="formView">
          <h1>Votre score: <span>{{ count_right }} / {{ totalQuestion }}</span></h1>

          <v-form v-model="valid">
            <v-text-field v-model="name" :rules="nameRules" :counter="10" label="Pseudo" required
            ></v-text-field>

            <v-checkbox v-model="checkbox" :error-messages="checkboxErrors" label="Do you agree?" required @change="$v.checkbox.$touch()" @blur="$v.checkbox.$touch()"
            ></v-checkbox>

            <v-btn @click="submit">submit</v-btn>
          </v-form>
        </v-container>
      </v-slide-x-reverse-transition>

      <!-- Classement -->
      <v-container fluid class="form-container" v-if="classementView">
        <v-data-table :headers="headers" :items="desserts" :search="search" :pagination.sync="pagination" hide-actions class="elevation-1">
        <template slot="headerCell" slot-scope="props">
          <v-tooltip bottom>
            <span slot="activator">
              {{ props.header.text }}
            </span>
            <span>
              {{ props.header.text }}
            </span>
          </v-tooltip>
        </template>
        <template slot="items" slot-scope="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.calories }}</td>
          <td class="text-xs-right">{{ props.item.fat }}</td>
          <td class="text-xs-right">{{ props.item.carbs }}</td>
          <td class="text-xs-right">{{ props.item.protein }}</td>
          <td class="text-xs-right">{{ props.item.iron }}</td>
        </template>
      </v-data-table>
      <div class="text-xs-center pt-2">
        <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
      </div>
    </v-container>
  </v-container>
</template>

<script>

export default {
  name: 'Question',
  data(){
    return{
      scoreStarted: false,
      classementView:false,
      questionsView: true,
      formView: false,
      currentQuestion: 0,
      dialog: false,
      questionList: [{
          question: 'Is Zain the King of AWS security?',
          answer: false,
          fact: 'Don\'t give him your server security.. Something terrible could happen'
        },{
          question: 'Is Dubai the capital of UAE?',
          answer: false,
          fact: 'Abu Dabi is the capital of UAE.'
        },{
          question: 'Is Vincent in holidays?',
          answer: true,
          fact: 'Yes, like always.'
        }],
      totalQuestion: '3',
      count_right: '0',
      count_wrong: '0'
    }
  },
  props: {
    msg: String
  },
  methods:{
    displayResult(result){
      this.scoreStarted = true
      if(result == this.questionList[this.currentQuestion].answer){
        console.log('correct')
        this.count_right++
      }
      else{
        this.count_wrong++
        console.log('incorrect')
      }
      this.questionList[this.currentQuestion]
      this.questionList[this.currentQuestion].fact
    },
    nextQuestion(){
      console.log('max:', this.questionList.length-1)
      this.dialog = false
      if(this.currentQuestion < this.questionList.length-1){
        this.$nextTick(function() {
          this.currentQuestion++
        })
      }
      else{
        this.endTheQuiz()
      }
      console.log(this.currentQuestion)
    },
    yolo(){
      alert('ok')
    },
    endTheQuiz(){
      this.questionsView = false
      this.formView = true
    }
  },
  mounted() {
    // Later
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container{
  padding: 0;
}

p.question{
  font-size: 20px;
  margin:50px 0 40px 0;
}
.v-icon{
  margin:0 5px 0 0;
}
.v-btn#true, .v-btn#false{
  display:block;
  min-width:130px;
  width:100%;
  height: 60px;
  border-radius:5px;
}
#false{
  margin-top:20px;
}
.padding{
  padding:50px 0;
}
</style>
