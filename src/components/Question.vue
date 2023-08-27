<template>
  <v-container class="main-container" fluid>

    <!-- SCORE -->
    <!-- <transition name="fade"> -->
    <aside class="aside" v-if="scoreStarted">
      <!-- <span>Score :</span> -->
      <v-badge color="green" right overlap>
        <span slot="badge">{{ count_right }}</span>
        <v-icon color="white" size="30">check_box</v-icon>
      </v-badge>
      <v-badge color="red" right overlap>
        <span slot="badge">{{ count_wrong }}</span>
        <v-icon color="white" size="30">cancel</v-icon>
      </v-badge>
    </aside>
    <!-- </transition> -->

    <!-- Questions -->
    <transition name="bounce" mode="out-in">
      <v-container fluid class="question-container" v-if="questionsView">
        <v-layout column align-center>
          <p class="question" v-model="realQuestionList">{{ realQuestionList[currentQuestion].question }}</p>

          <v-dialog v-model="dialog" width="90%" persistent>

            <v-btn large color="info" @click.prevent="displayResult(true)" id="true" slot="activator">
              <!--  <v-icon dark right>check_circle</v-icon> -->
              Vrai
            </v-btn>

            <v-btn large color="info" @click.prevent="displayResult(false)" id="false" slot="activator">
              <!--  <v-icon dark right>block</v-icon> -->
              Faux
            </v-btn>


            <v-card class="text-xs-center">
              <!--             <v-card-title class="headline justify-center" primary-title v-bind:class="{ error: isNotCorrect, 'success': isCorrect }">
              Correct
            </v-card-title> -->

              <v-card-title class="headline justify-center" primary-title v-if="realQuestionList[currentQuestion].answer"
                v-bind:class="{ error: isNotCorrect, 'success': isCorrect }">
                C'est Vrai !
              </v-card-title>
              <v-card-title class="headline error justify-center" primary-title v-else
                v-bind:class="{ error: isNotCorrect, 'success': isCorrect }">
                C'est Faux !
              </v-card-title>
              <v-card-text class="padding">
                {{ realQuestionList[currentQuestion].fact }}
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
      <!-- <v-slide-x-reverse-transition mode="out-in"> -->
      <v-container fluid class="form-container" v-if="formView" key="invisible">
        <h1>Votre score: <span>{{ count_right }} / {{ totalQuestion }}</span></h1>

        <v-form v-model="validForm">
          <v-text-field v-model="pseudo" :rules="pseudoRules" :counter="10" label="Pseudo" required></v-text-field>

          <v-btn @click="saveScore()" :disabled="!validForm">Afficher le classement</v-btn>
        </v-form>
      </v-container>
      <!-- </v-slide-x-reverse-transition> -->

      <!-- Classement -->
      <v-container fluid class="ranking-container" v-if="classementView" key="invisible">
        <h1>Classement</h1>
        <v-data-table hide-actions :headers="th" :pagination.sync="pagination" :items="classement"
          rows-per-page-text="Joueurs par page">
          <template slot="items" slot-scope="props">
            <td class="text-xs-left table-pseudo">{{ props.item.pseudo }}</td>
            <td class="text-xs-center table-score">{{ props.item.score }}</td>
            <td class="text-xs-left table-date">{{ props.item.date }}</td>
          </template>
        </v-data-table>
        <v-btn color="info" @click="replay()">Rejouer !</v-btn>
      </v-container>
    </transition>

  </v-container>
</template>

<script>

export default {
  name: 'Question',
  data() {
    return {
      scoreStarted: false,
      classementView: false,
      questionsView: true,
      formView: false,
      currentQuestion: 0,
      dialog: false,
      realQuestionList: [{
        question: 'Is Zain the King of AWS security?',
        answer: false,
        fact: 'Don\'t give him your server security.. Something terrible could happen'
      }, {
        question: 'Is Dubai the capital of UAE?',
        answer: false,
        fact: 'Abu Dabi is the capital of UAE.'
      }, {
        question: 'Is Vincent in holidays?',
        answer: true,
        fact: 'Yes, like always.'
      }],
      realQuestionList2: [{
        question: 'Les femmes n\'ont pas le droit de conduire de camions.',
        answer: false,
        fact: 'Les femmes ont le droit de conduire tout type de véhicules aux UAE, au même titre que les hommes.'
      }, {
        question: 'Il est obligatoire de disposer d’une « liquor license » pour pouvoir boire de l’alcool chez soi.',
        answer: true,
        fact: 'Sans license, vous risquez une amende, un signalement aurpès de votre employeur et une suspension de votre visa.'
      },{
        question: 'Les loyers se paient à l’année et non au mois.',
        answer: true,
        fact: 'Lorsque vous vous engagez pour un appartement, vous le faites pour 1 an. Cependant, pour faire face à la crise immoblière, de nombreux propriétaires accèptent désormais des paiements en plusieurs fois.'
      },{
        question: 'Le porc et les produits à base de porcs sont introuvables excepté au duty free de l\'aéroport ou via des dealers de porcs.',
        answer: false,
        fact: 'Vous trouverez du porc à Dubaï dans la plupart des supermarchés au sein d\'une section dédiée à ces produits.'
      },{
        question: 'La limite d’alcool par litre de sang au volant pour les non musulmans est de 0.2g.',
        answer: false,
        fact: 'Musulman ou pas, la limite d\'alcool par litre de sang est de 0. Il n\'y a pas de contrôles d\'alcoolémie sur les routes, mais si vous crééez un accident et êtes contrôlés positif à l\'alcool, c\'est la prison qui vous attend.'
      },{
        question: 'Traverser hors des passages piétons ou lorsque le petit bonhomme est rouge est puni de 420AED d’amende.',
        answer: true,
        fact: 'En France, vous risquez 5€ d\'amende. Aux UAE, c\'est 105€. Plutôt dissuasif non ?'
      },{
        question: 'Le Métro dispose d’un Wagon interdit aux femmes.',
        answer: false,
        fact: 'À contrario, le métro dispose d\'un wagon exclusivement réservé aux femmes et aux enfants.'
      },{
        question: 'Certaines plages sont uniquement réservées aux femmes.',
        answer: true,
        fact: 'La plupart du temps ce ne sont que durant certains jours que ces plages sont réservées aux femmes, comme la plage d\'Al Mamazar, réservée aux femmes les lundi et mercredi.'
      },{
        question: 'Les femmes ne doivent pas sortir sans voile le vendredi',
        answer: false,
        fact: 'Jour saint ou pas jour saint. Une femme est libre de s\'habiller comme elle le souhaite à Dubaï tant que ne n\'est pas offensant.'
      },{
        question: 'Les films au cinéma sont censurés des scènes violentes et sexuelles.',
        answer: true,
        fact: 'C\'est vrai mais il est possible de trouver des films en version non censurés dans certains cinémas.',
      },{
        question: 'Le prix des plaques d’immatriculation peut aller jusqu’à plusieurs millions d’euros.',
        answer: true,
        fact: 'Moins vous avez de numéros sur votre plaques, plus cela signifie que vous êtes importants et riches. Certaines plaques peuvent donc valoir jusqu\ 10x le prix du bolide qu\'elles hornent.'
      },{
        question: 'Lorsque vous êtes flashé pour excès de vitesse, aucun point n’est retiré sur votre permis. Vous devez seulement payer une amende.',
        answer: true,
        fact: 'Les Émiratis étant fans de voitures de sports, la vitesse est un jeu pour la plupart d\'entre eux, d\'autant plus que les routes sont généralement droites sur des dizaines de kilomètres.'
      },{
        question: 'Le Burj El Arab est la plus grande tour du monde.',
        answer: false,
        fact: 'Bien qu\'imposante du fait de ses 210m et de ses 56 étages, le Burj El Arab est pourtant bien loin d\'être la plus grande tour du monde. C\'est cependant l\'un des hotels les plus luxueux au monde auto-proclamé 7 étoiles.'
      },{
        question: 'Les noms des stations de métro peuvent être achetés par des marques pour se faire de la publicité.',
        answer: true,
        fact: 'En France, on vend le nom de nos stades. Aux UAE, ils vendent le nom des stations de métro.'
      },{
        question: 'À Dubaï, la semaine débute le dimanche.',
        answer: false,
        fact: 'Plus maintenant ! Depuis le 1er Janvier 2022, les UAE ont adopté les mêmes jours que le reste du monde.'
      },{
        question: 'Les Émiratis ne représentent que moins de 12% de la population du pays.',
        answer: true,
        fact: 'La population des UAE est estimée à 9.5 millions d\'habitants pour 1.4 millions d\'Émiratis et 8.1 millions d\'expatriés.'
      },{
        question: 'Il n\'a pas d\'heure d\'été et d\'heure d\'hiver à Dubaï.',
        answer: true,
        fact: 'C\'est tout le temps l\'été alors à quoi bon changer d\'heure ?'
      },{
        question: 'Le décalage horaire est de 3h l’été et de 4h l’hiver.',
        answer: false,
        fact: '2h l\'été et 1h l\'hiver.'
      },{
        question: 'Dans un couple marié, si le père meurt, l’enfant devient pupille de l’état.',
        answer: true,
        fact: 'Le père doit accorder de son vivant la garde de l\'enfant à la mère dans le cas ou il décède, autrement c\'est l\'état qui devient responsable de l\'enfant.'
      },{
        question: 'Les UAE sont divisés en 6 émirats.',
        answer: false,
        fact: 'Il y en a 7 : Abu Dhabi, Ajman, Fujairah, Sharjah, Dubai, Ras al-Khaimah et Umm al-Qaiwain.'
      },{
        question: 'Dubaï est le plus grand émirats des UAE.',
        answer: false,
        fact: 'Le plus grand est Abu Dhabi qui s\'étant sur 67 340 Km². Dubaï est le 2e plus grand mais loin dèrriere, avec une surface de seulement 3 885km², soit 37 fois Paris.'
      },{
        question: 'Dubaï est l\'émirat le plus peuplé des UAE.',
        answer: true,
        fact: 'Avec plus de 3 600 000 habitants, Dubaï est effectivement l\'émirat le plus peuplé des UAE devant Abu Dhabi (1 678 000). Dubaï représente à lui seule presque la moitié de la population totale du pays.'
      },{
        question: 'Consulter du porno est punissable d’une peine de prison ferme.',
        answer: false,
        fact: 'Les sites pornographiques sont bloqués par l\'état et toute revue pornographique sera confisquée si trouvée par un policier. Cependant vous ne risquez pas d\'aller en prison pour ça.'
      },{
        question: 'Les appels via Skype, Whatsapp et Facebook sont bloqués par l’état.',
        answer: true,
        fact: 'Les boites de télécom locales proposent des forfaits internationnaux. Les appels via ces applications sont considérés comme de la concurence déloyale et donc bloqués.'
      },{
        question: 'Pour obtenir la nationalité Emirati il faut se convertir à l’Islam et effectuer un pèlerinage vers la Mecque.',
        answer: false,
        fact: 'Si vous êtes un homme, vous ne pouvez pas acquérir la nationalité Émiratie. Si vous êtes une femme, vous devrez vous convertir à l\'Islam et épouser un Émirati afin de recevoir la nationnalité.'
      },{
        question: 'Vous trouverez des jerricans souvenir contenant 1L d’essence pour 3aed (~0.70€) dans les boutiques de souvenir du vieux Dubaï.',
        answer: false,
        fact: 'On sait tous que l\'essence est moins chère à Dubaï, mais il ne faut pas abuser.'
      },{
        question: 'Dubaï consomme 700 tonnes de petrole / jour pour fournir l’eau courante à tous.',
        answer: true,
        fact: 'Invraissemblable, mais vrai. Ce chiffre prend en compte l\'arrosage de tous les espaces verts de la ville.'
      },{
        question: 'Le Burj Khalifa mesure 2.5x la tour Eiffel.',
        answer: true,
        fact: 'Du haut de ses 828m. Le Burj Khalifa est actuellement la plus grande tour du monde et peut donc alègrement cumuler 2.5 tour Effeil (324m).'
      },{
        question: 'Les Français sont la 1ère population occidentale expatriée de Dubaï.',
        answer: false,
        fact: 'Bien que la présence Française soit indéniable aux AUE, les Anglais sont la première population occidentale expatriée présente à Dubai. Ils étaient 240 000 en 2012.'
      },{
        question: 'Les taxis roses sont exclusivement conduits par des femmes.',
        answer: true,
        fact: 'Les taxis roses étaient avant réservées aux femmes et aux familles exclusivement, mais ce n\'est plus le cas.'
      },{
        question: 'Les dromadaires sont interdits dans les courses de chameaux.',
        answer: false,
        fact: 'Le dromadaire et le chameau sont réuni sous le même mot en Anglais : Camel. Les 2 sont autorisés durant les "Camel Race".'
      },{
        question: 'Les jockeys de chameaux sont des robots mécaniques',
        answer: true,
        fact: 'Avant, des enfants étaient utilisés comme jockey. Ceux-ci avaient généralement entre 3 et 15 ans et faisaient parfois l\'objet d\'un traffic d\'êtres humains. Les UAE ont été le 1er pays en 2002 à interdire l\'usage d\'enfants de moins de 15 ans comme jockeys pour les courses.'
      },{
        question: 'Il faut avoir un permis spécial pour conduire dans le désert.',
        answer: false,
        fact: 'Bien que plus dangereuse et nécéssitant un certain savoir faire, vous avez seulement besoin de votre permis B pour conduire dans le désert.'
      },{
        question: 'Le vol, quand il dépasse les 100 000$ est puni par la peine de mort.',
        answer: false,
        fact: 'Bien qu\'encore en vigueur aux UAE, la peine de mort n\'est appliquée que dans des cas extrèmement graves. Seulement 8 exécutions ont été recensées aux UAE sur ces 10 dernières années.'
    // },{
    //     question: 'Si vous êtes arrêté et placé en garde à vue la police peut vous raser la tête.',
    //     answer: true,
    //     fact: 'C\'est en effet possible'
      },{
        question: 'L’âge adulte à Dubaï commence à 21 ans, comme aux États-Unis.',
        answer: true,
        fact: 'Il ne vous sera donc pas possible de rentrer dans les clubs ou les boîtes de nuits distribuant de l\'alcool avant cet âge là.'
    // },{
    //     question: 'Il n’est pas possible d’emprunter de l’argent à une banque car c’est interdit par l’Islam ',
    //     answer: true,
    //     fact: 'Yes, like always.'
      },{
        question: 'Les paris et jeux d’argent sont interdit.',
        answer: true,
        fact: 'N\'essayez pas de ramener votre malette de poker, elle sera saisie par la douane.'
      },{
        question: 'Tous les produits commercialisés en magasin sont soumis à une TVA de 5%',
        answer: true,
        fact: 'Fini le temps ou les taxes n\'existaient pas à Dubaï. Depuis le 1er janvier 2018, la TVA à fait son apparition aux UAE.'
      },{
        question: 'Le chlore est interdit pour des raisons religieuses. Les piscines sont donc entretenues au sel.',
        answer: false,
        fact: 'Le chlore n\'est absolument pas interdit pour des raisons religieuse.'
      },{
        question: 'Les seuls pays partageant une frontière physique terrestre avec les UAE sont l’Arabie Saoudite, Oman et le Yémen',
        answer: false,
        fact: 'Le Yemen n\'a pas de frontière terreste avec les UAE.'
      },{
        question: 'Les femmes n’ont pas le droit de conduire seules',
        answer: false,
        fact: 'Les femmes ont parfaitement le droit de conduire seules. L\'Arabie Saoudite, dernier pays dans le monde où les femmes n\'avaient pas le droit de conduire ont levé cette interdiction en 2017.'
      // },{
      //   question: 'Le chewing-gum est interdit car il accentue la dégradation des trottoirs et lieux publiques',
      //   answer: false,
      //   fact: 'Le chewing-gum est autorisé dans la plupart des lieux à Dubaï, mais interdit dans le métro.'
      }],
      totalQuestion: '',
      count_right: '0',
      count_wrong: '0',
      pseudo: '',
      isCorrect: true,
      isNotCorrect: false,
      pseudoRules: [
        v => !!v || 'Tu as oublié d\'entrer ton pseudo !',
        v => v.length <= 10 || 'Ton pseudo ne doit pas faire plus de 10 caractères.'
      ],
      validForm: false,
      th: [
        { text: 'Pseudo', value: 'pseudo', class: 'table-pseudo' },
        { text: 'Score', value: 'score', class: 'table-score' },
        { text: 'Date', value: 'date', class: 'table-date' }
      ],
      classement: [],
      pagination: {
        sortBy: 'score',
        descending: true,
        rowsPerPage: -1
      }
    }
  },
  props: {
    msg: String
  },
  methods: {
    displayResult(result) {
      this.scoreStarted = true
      if (result == this.realQuestionList[this.currentQuestion].answer) {
        console.log('correct')
        this.count_right++
        this.isCorrect = true
        this.isNotCorrect = false
      }
      else {
        this.count_wrong++
        console.log('incorrect')
        this.isCorrect = false
        this.isNotCorrect = true
      }
      this.realQuestionList[this.currentQuestion]
      this.realQuestionList[this.currentQuestion].fact
    },
    nextQuestion() {
      console.log('max:', this.realQuestionList.length - 1)
      this.dialog = false
      if (this.currentQuestion < this.realQuestionList.length - 1) {
        this.$nextTick(function () {
          this.currentQuestion++
        })
      }
      else {
        this.endTheQuiz()
      }
      console.log(this.currentQuestion)
    },
    endTheQuiz() {
      this.totalQuestion = this.realQuestionList.length
      this.questionsView = false
      this.formView = true
    },
    saveScore() {
      console.log('score saved!')
      const requestOptions = {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept': 'application/json" },
        body: JSON.stringify({
          pseudo: this.pseudo,
          score: this.count_right,
        })
      };
      fetch("/end-of-quizz", requestOptions)
        .then(response => response.json())
        .then(data => {
          this.classement = data
          this.pagination.sortBy = this.th[1].value
          this.formView = false
          this.classementView = true
        });
    },
    replay() {
      this.classementView = false
      this.questionsView = true
      //shuffle(this.questionList)
      this.currentQuestion = 0
      this.count_right = 0
      this.count_wrong = 0
    },
  },
  mounted() {
    // Later
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container {
  padding: 0;
}

.question-container {
  padding-top: 0;
  padding-bottom: 0;
}

p.question {
  font-size: 20px;
  margin: 50px 0 40px 0;
}

.v-icon {
  margin: 0 5px 0 0;
}

.v-btn#true,
.v-btn#false {
  display: block;
  min-width: 130px;
  width: 100%;
  height: auto;
  padding: 20px;
  border-radius: 5px;
}

#false {
  margin-top: 20px;
}

.padding {
  padding: 50px 5%;
}

.v-card__title {
  font-size: 24px;
  font-weight: bold;
}

.v-card__text {
  font-size: 18px;
}

.v-divider {
  margin-bottom: 0;
}

.ranking-container {
  width: 90%;
  min-width: 290px;
  max-width: 500px;
  display: table;
  margin: auto;
}

.ranking-container h1 {
  margin-bottom: 10px;
}

.ranking-container button {
  margin: 20px auto 0;
}

.form-container {
  width: 50%;
  min-width: 290px;
  margin: 30px auto;
}

.form-container h1 {
  margin-bottom: 40px;
}

.form-container button {
  margin: 50px auto 0;
}
</style>
