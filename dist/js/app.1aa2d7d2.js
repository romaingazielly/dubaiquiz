(function(e){function t(t){for(var n,r,o=t[0],u=t[1],l=t[2],d=0,p=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);c&&c(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],n=!0,o=1;o<s.length;o++){var u=s[o];0!==a[u]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=s[0]))}return e}var n={},a={app:0},i=[];function r(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=n,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(s,n,function(t){return e[t]}.bind(null,n));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var c=u;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";s("64a9")},"20e7":function(e,t){var s="DubaiQuizv2",n=["https://fonts.googleapis.com/css?family=Roboto:100:300,400,500,700,900|Material+Icons","/**/*.{js,html,css}","/index.html","/manifest.json"];function a(){self.addEventListener("install",(function(e){e.waitUntil(caches.open(s).then((function(e){return e.addAll(n)})))})),self.addEventListener("fetch",(function(e){e.respondWith(caches.match(e.request).then((function(t){return void 0!==t?t:fetch(e.request).then((function(t){var n=t.clone();return caches.open(s).then((function(t){t.put(e.request,n)})),t})).catch((function(){return caches.match("/favicon.png")}))})))}))}"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/ServiceWorker.js").then((function(e){console.log("ServiceWorker registration success",e.scope),a()}),(function(e){console.log("ServiceWorker registration failed: ",e)}))}))},"2e90":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("744f"),s("6c7b"),s("7514"),s("20d6"),s("1c4c"),s("6762"),s("cadf"),s("e804"),s("55dd"),s("d04f"),s("c8ce"),s("217b"),s("7f7f"),s("f400"),s("7f25"),s("536b"),s("d9ab"),s("f9ab"),s("32d7"),s("25c9"),s("9f3c"),s("042e"),s("c7c6"),s("f4ff"),s("049f"),s("7872"),s("a69f"),s("0b21"),s("6c1a"),s("c7c62"),s("84b4"),s("c5f6"),s("2e37"),s("fca0"),s("7cdf"),s("ee1d"),s("b1b1"),s("87f3"),s("9278"),s("5df2"),s("04ff"),s("f751"),s("4504"),s("fee7"),s("ffc1"),s("0d6d"),s("9986"),s("8e6e"),s("25db"),s("e4f7"),s("b9a1"),s("64d5"),s("9aea"),s("db97"),s("66c8"),s("57f0"),s("165b"),s("456d"),s("cf6a"),s("fd24"),s("8615"),s("551c"),s("097d"),s("df1b"),s("2397"),s("88ca"),s("ba16"),s("d185"),s("ebde"),s("2d34"),s("f6b3"),s("2251"),s("c698"),s("a19f"),s("9253"),s("9275"),s("3b2b"),s("3846"),s("4917"),s("a481"),s("28a5"),s("386d"),s("6b54"),s("4f7f"),s("8a81"),s("ac4d"),s("8449"),s("9c86"),s("fa83"),s("48c0"),s("a032"),s("aef6"),s("d263"),s("6c37"),s("9ec8"),s("5695"),s("2fdb"),s("d0b0"),s("5df3"),s("b54a"),s("f576"),s("ed50"),s("788d"),s("14b9"),s("f386"),s("f559"),s("1448"),s("673e"),s("242a"),s("c66f"),s("b05c"),s("34ef"),s("6aa2"),s("15ac"),s("af56"),s("b6e4"),s("9c29"),s("63d9"),s("4dda"),s("10ad"),s("c02b"),s("4795"),s("130f"),s("ac6a"),s("96cf");var n=s("2b0e"),a=s("ce5b"),i=s.n(a);s("bf40");n["default"].use(i.a,{theme:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}});var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",{staticClass:"text-xs-center",attrs:{dark:"",center:""}},[s("v-toolbar",{attrs:{dark:"",color:"orange"}},[s("v-spacer"),s("v-toolbar-title",{staticClass:"white--text"},[e._v("Quiz Dubai")]),s("v-spacer")],1),s("transition",{attrs:{name:"bounce",appear:"",mode:"out-in"}},[e.visible?s("section",{key:"visible",staticClass:"intro"},[s("h1",{staticClass:"display-1"},[e._v("Dubaï")]),s("v-divider"),s("h2",[e._v("Jusqu’où iront vos préjugés ?")]),s("p",{staticClass:"instructions"},[e._v("Répondez aux 50 questions qui vont suivre pour voir si votre vision de Dubai correspond à la réalité !")]),s("v-btn",{attrs:{color:"warning"},on:{click:function(t){return t.preventDefault(),e.starQuiz(t)}}},[e._v("Commencer")])],1):s("section",{key:"invisible"},[s("Question")],1)])],1)},o=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-slide-y-transition",{attrs:{mode:"out-in"}},[n("v-layout",{attrs:{column:"","align-center":""}},[n("img",{staticClass:"mb-5",attrs:{src:s("cf05"),alt:"Vuetify.js"}}),n("blockquote",[e._v("\n        “First, solve the problem. Then, write the code.”\n        "),n("footer",[n("small",[n("em",[e._v("—John Johnson")])])])])])],1)],1)},l=[],c={name:"HelloWorld",props:{msg:String}},d=c,p=(s("fb16"),s("2877")),m=Object(p["a"])(d,u,l,!1,null,"4b3ecd6e",null),f=(m.exports,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{staticClass:"main-container",attrs:{fluid:""}},[e.scoreStarted?s("aside",{staticClass:"aside"},[s("v-badge",{attrs:{color:"green",right:"",overlap:""}},[s("span",{attrs:{slot:"badge"},slot:"badge"},[e._v(e._s(e.count_right))]),s("v-icon",{attrs:{color:"white",size:"30"}},[e._v("check_box")])],1),s("v-badge",{attrs:{color:"red",right:"",overlap:""}},[s("span",{attrs:{slot:"badge"},slot:"badge"},[e._v(e._s(e.count_wrong))]),s("v-icon",{attrs:{color:"white",size:"30"}},[e._v("cancel")])],1)],1):e._e(),s("transition",{attrs:{name:"bounce",mode:"out-in"}},[e.questionsView?s("v-container",{staticClass:"question-container",attrs:{fluid:""}},[s("v-layout",{attrs:{column:"","align-center":""}},[s("p",{staticClass:"question",model:{value:e.realQuestionList,callback:function(t){e.realQuestionList=t},expression:"realQuestionList"}},[e._v(e._s(e.realQuestionList[e.currentQuestion].question))]),s("v-dialog",{attrs:{width:"90%",persistent:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[s("v-btn",{attrs:{slot:"activator",large:"",color:"info",id:"true"},on:{click:function(t){t.preventDefault(),e.displayResult(!0)}},slot:"activator"},[e._v("\n          Vrai\n        ")]),s("v-btn",{attrs:{slot:"activator",large:"",color:"info",id:"false"},on:{click:function(t){t.preventDefault(),e.displayResult(!1)}},slot:"activator"},[e._v("\n          Faux\n        ")]),s("v-card",{staticClass:"text-xs-center"},[e.realQuestionList[e.currentQuestion].answer?s("v-card-title",{staticClass:"headline justify-center",class:{error:e.isNotCorrect,success:e.isCorrect},attrs:{"primary-title":""}},[e._v("\n              C'est Vrai !\n            ")]):s("v-card-title",{staticClass:"headline error justify-center",class:{error:e.isNotCorrect,success:e.isCorrect},attrs:{"primary-title":""}},[e._v("\n              C'est Faux !\n            ")]),s("v-card-text",{staticClass:"padding"},[e._v("\n              "+e._s(e.realQuestionList[e.currentQuestion].fact)+"\n            ")]),s("v-divider"),s("v-card-actions",{staticClass:"justify-center"},[s("v-btn",{attrs:{color:"amber",large:"",flat:""},on:{click:function(t){return t.preventDefault(),e.nextQuestion(t)}}},[e._v("\n                Continuer\n              ")])],1)],1)],1)],1)],1):e._e(),e.formView?s("v-container",{key:"invisible",staticClass:"form-container",attrs:{fluid:""}},[s("h1",[e._v("Votre score: "),s("span",[e._v(e._s(e.count_right)+" / "+e._s(e.totalQuestion))])]),s("v-form",{model:{value:e.validForm,callback:function(t){e.validForm=t},expression:"validForm"}},[s("v-text-field",{attrs:{rules:e.pseudoRules,counter:10,label:"Pseudo",required:""},model:{value:e.pseudo,callback:function(t){e.pseudo=t},expression:"pseudo"}}),s("v-btn",{attrs:{disabled:!e.validForm},on:{click:function(t){e.saveScore()}}},[e._v("Afficher le classement")])],1)],1):e._e(),e.classementView?s("v-container",{key:"invisible",staticClass:"ranking-container",attrs:{fluid:""}},[s("h1",[e._v("Classement")]),s("v-data-table",{attrs:{"hide-actions":"",headers:e.th,pagination:e.pagination,items:e.classement,"rows-per-page-text":"Joueurs par page"},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"items",fn:function(t){return[s("td",{staticClass:"text-xs-left table-pseudo"},[e._v(e._s(t.item.pseudo))]),s("td",{staticClass:"text-xs-center table-score"},[e._v(e._s(t.item.score))]),s("td",{staticClass:"text-xs-left table-date"},[e._v(e._s(t.item.date))])]}}])}),s("v-btn",{attrs:{color:"info"},on:{click:function(t){e.replay()}}},[e._v("Rejouer !")])],1):e._e()],1)],1)}),v=[],b={name:"Question",data:function(){return{scoreStarted:!1,classementView:!1,questionsView:!0,formView:!1,currentQuestion:0,dialog:!1,questionList:[{question:"Is Zain the King of AWS security?",answer:!1,fact:"Don't give him your server security.. Something terrible could happen"},{question:"Is Dubai the capital of UAE?",answer:!1,fact:"Abu Dabi is the capital of UAE."},{question:"Is Vincent in holidays?",answer:!0,fact:"Yes, like always."}],realQuestionList:[{question:"Les femmes n'ont pas le droit de conduire de camions.",answer:!1,fact:"Les femmes ont le droit de conduire tout type de véhicules aux UAE, au même titre que les hommes."},{question:"Si 2 hommes sont pris en train d'avoir des relation sexuelles, seul celui qui se fait pénétrer est considéré comme gay.",answer:!0,fact:"Selon la loi, seule la personne jouant le rôle de la femme est considéré comme homosexuel, et donc condamnée."},{question:"Il est obligatoire de disposer d’une « liquor license » pour pouvoir boire de l’alcool chez soi.",answer:!0,fact:"Sans license, vous risquez une amende, un signalement aurpès de votre employeur et une suspension de votre visa."},{question:"Il est obligatoire de disposer d’une « drug license » pour pouvoir fumer du cannabis.",answer:!1,fact:"Consommer du cannabis, au même titre que toutes les drogues est puni par la loi d'une peine de prison ferme ainsi que de d'un ban des UAE engendrant confiscation par l'état de tous vos biens (comptes en banques, affaires personnels etc..)."},{question:"Vous devez posséder une lettre de non objection de votre entreprise pour pouvoir faire la demande d’une « liquor license ».",answer:!0,fact:"Sans l'approbation de votre employeur, impossible d'avoir une license d'alcool."},{question:"L’alcool est en moyenne 3x plus cher à Dubai qu’en France.",answer:!1,fact:"Dans les bars, le prix d'une pinte de bière est autour de 10€. Un prix comparable à ceux que l'on retrouve à Paris au final."},{question:"Les loyers se paient à l’année et non au mois.",answer:!0,fact:"Lorsque vous vous engagez pour un appartement, vous le faites pour 1 an. Cependant, pour faire face à la crise immoblière, de nombreux propriétaires accèptent désormais des paiements en plusieurs fois."},{question:"Les colocations entre personnes de sexe différents sont interdites.",answer:!0,fact:"Les colocations sont interdites par la loi. Peut importe le sexe des habitants. Mais cohabiter avec des personnes de sexe différents est encore pire et expose à des sanctions supérieures. Pour autant il n'y a que très peu de contrôles et cette situation est tolérée du moment que les habitants ne créent pas de problèmes au voisinage."},{question:"Le porc et les produits à base de porcs sont introuvables excepté au duty free de l'aéroport ou via des dealers de porcs.",answer:!1,fact:"Vous trouverez du porc à Dubaï dans la plupart des supermarchés au sein d'une section dédiée à ces produits."},{question:"La limite d’alcool par litre de sang au volant pour les non musulmans est de 0.2g.",answer:!1,fact:"Musulman ou pas, la limite d'alcool par litre de sang est de 0. Il n'y a pas de contrôles d'alcoolémie sur les routes, mais si vous crééez un accident et êtes contrôlés positif à l'alcool, c'est la prison qui vous attend."},{question:"Traverser hors des passages piétons ou lorsque le petit bonhomme est rouge est puni de 420AED d’amende.",answer:!0,fact:"En France, vous risquez 5€ d'amende. Aux UAE, c'est 105€. Plutôt dissuasif non ?"},{question:"Tous les clubs ferment à 1h du matin, maxiumum.",answer:!1,fact:"Les boîtes de nuits ferment généralement à 3h au plus tard le weekend. Certaines bénéficient d'autorisations pour rester ouvertes jusqu'à 4h qui est la limite."},{question:"Le Métro dispose d’un Wagon interdit aux femmes.",answer:!1,fact:"À contrario, le métro dispose d'un wagon exclusivement réservé aux femmes et aux enfants."},{question:"Certaines plages sont uniquement réservées aux femmes.",answer:!0,fact:"La plupart du temps ce ne sont que durant certains jours que ces plages sont réservées aux femmes, comme la plage d'Al Mamazar, réservée aux femmes les lundi et mercredi."},{question:"Les femmes ne doivent pas sortir sans voile le vendredi",answer:!1,fact:"Jour saint ou pas jour saint. Une femme est libre de s'habiller comme elle le souhaite à Dubaï tant que ne n'est pas offensant."},{question:"Les films au cinéma sont censurés des scènes violentes et sexuelles.",answer:!0,fact:"C'est vrai mais il est possible de trouver des films en version non censurés dans certains cinémas."},{question:"Le prix des plaques d’immatriculation peut aller jusqu’à plusieurs millions d’euros.",answer:!0,fact:"Moins vous avez de numéros sur votre plaques, plus cela signifie que vous êtes importants et riches. Certaines plaques peuvent donc valoir jusqu 10x le prix du bolide qu'elles hornent."},{question:"Lorsque vous êtes flashé pour excès de vitesse, aucun point n’est retiré sur votre permis. Vous devez seulement payer une amende.",answer:!0,fact:"Les Émiratis étant fans de voitures de sports, la vitesse est un jeu pour la plupart d'entre eux, d'autant plus que les routes sont généralement droites sur des dizaines de kilomètres."},{question:"Le Burj El Arab est la plus grande tour du monde.",answer:!1,fact:"Bien qu'imposante du fait de ses 210m et de ses 56 étages, le Burj El Arab est pourtant bien loin d'être la plus grande tour du monde. C'est cependant l'un des hotels les plus luxueux au monde auto-proclamé 7 étoiles."},{question:"Les noms des stations de métro peuvent être achetés par des marques pour se faire de la publicité.",answer:!0,fact:"En France, on vend le nom de nos stades. Aux UAE, ils vendent le nom des stations de métro."},{question:"A Dubai, la taxe d’habitation (DEWA) représente 5% du montant total du loyer.",answer:!0,fact:"Au moins c'est simple, vous saurez dés la souscription du bail combien vous devrez payer. Cette somme est répartie mensuellement sur toute la durée du bail."},{question:"À Dubaï, la semaine débute le vendredi.",answer:!1,fact:"La semaine débute le dimanche. Le week-end est donc composé du vendredi (jour saint) et du samedi."},{question:"Les Émiratis ne représentent que moins de 12% de la population du pays.",answer:!0,fact:"La population des UAE est estimée à 9.5 millions d'habitants pour 1.4 millions d'Émiratis et 8.1 millions d'expatriés."},{question:"Le SMIC Émirati est de 7 500€ net / mois.",answer:!0,fact:"Valable uniquement pour les personnes bénéficiants de la nationnalité Émiratie. Dommage hein ?"},{question:"Il n'a pas d'heure d'été et d'heure d'hiver à Dubaï.",answer:!0,fact:"C'est tout le temps l'été alors à quoi bon changer d'heure ?"},{question:"Le décalage horaire est de 3h l’été et de 4h l’hiver.",answer:!1,fact:"2h l'été et 1h l'hiver."},{question:"Dans un couple marié, si le père meurt, l’enfant devient pupille de l’état.",answer:!0,fact:"Le père doit accorder de son vivant la garde de l'enfant à la mère dans le cas ou il décède, autrement c'est l'état qui devient responsable de l'enfant."},{question:"Les UAE sont divisés en 6 émirats.",answer:!1,fact:"Il y en a 7 : Abu Dhabi, Ajman, Fujairah, Sharjah, Dubai, Ras al-Khaimah et Umm al-Qaiwain."},{question:"Dubaï est le plus grand émirats des UAE.",answer:!1,fact:"Le plus grand est Abu Dhabi qui s'étant sur 67 340 Km². Dubaï est le 2e plus grand mais loin dèrriere, avec une surface de seulement 3 885km², soit 37 fois Paris."},{question:"Dubaï est l'émirat le plus peuplé des UAE.",answer:!0,fact:"Avec plus de 2 500 000 habitants, Dubaï est effectivement l'émirat le plus peuplé des UAE devant Abu Dhabi (1 678 000). Dubaï représente à lui seule presque la moitié de la population totale du pays."},{question:"Consulter du porno est punissable d’une peine de prison ferme.",answer:!1,fact:"Les sites pornographiques sont bloqués par l'état et toute revue pornographique sera confisquée si trouvée par un policier. Cependant vous ne risquez pas d'aller en prison pour ça."},{question:"Les appels via Skype, Whatsapp et Facebook sont bloqués par l’état.",answer:!0,fact:"Les boites de télécom locales proposent des forfaits internationnaux. Les appels via ces applications sont considérés comme de la concurence déloyale et donc bloqués."},{question:"Pour obtenir la nationalité Emirati il faut se convertir à l’Islam et effectuer un pèlerinage vers la Mecque.",answer:!1,fact:"Si vous êtes un homme, vous ne pouvez pas acquérir la nationalité Émiratie. Si vous êtes une femme, vous devrez vous convertir à l'Islam et épouser un Émirati afin de recevoir la nationnalité."},{question:"Vous trouverez des jerricans souvenir contenant 1L d’essence pour 3aed (~0.70€) dans les boutiques de souvenir du vieux Dubaï.",answer:!1,fact:"On sait tous que l'essence est moins chère à Dubaï, mais il ne faut pas abuser."},{question:"Dubaï consomme 700 tonnes de petrole / jour pour fournir l’eau courante à tous.",answer:!0,fact:"Invraissemblable, mais vrai. Ce chiffre prend en compte l'arrosage de tous les espaces verts de la ville."},{question:"Le Burj Khalifa mesure 2.5x la tour Eiffel.",answer:!0,fact:"Du haut de ses 828m. Le Burj Khalifa est actuellement la plus grande tour du monde et peut donc alègrement cumuler 2.5 tour Effeil (324m)."},{question:"Les Français sont la 1ère population occidentale expatriée de Dubaï.",answer:!1,fact:"Bien que la présence Française soit indéniable aux AUE, les Anglais sont la première population occidentale expatriée présente à Dubai. Ils étaient 240 000 en 2012."},{question:"Les taxis roses sont réservés aux femmes et conduits par des femmes.",answer:!0,fact:"Les taxis roses sont réservées aux femmes et aux familles exclusivement."},{question:"Les dromadaires sont interdits dans les courses de chameaux.",answer:!1,fact:'Le dromadaire et le chameau sont réuni sous le même mot en Anglais : Camel. Les 2 sont autorisés durant les "Camel Race".'},{question:"Les jockey de chameaux sont des robots mécaniques",answer:!0,fact:"Avant, des enfants étaient utilisés comme jockey. Ceux-ci avaient généralement entre 3 et 15 ans et faisaient parfois l'objet d'un traffic d'êtres humains. Les UAE ont été le 1er pays en 2002 à interdire l'usage d'enfants de moins de 15 ans comme jockeys pour les courses."},{question:"Le metro comporte un wagon fumeur.",answer:!1,fact:"Fumer dans le métro vous expose à un amende de 50€. Et ce n'est pas comme en France, ici comptez sur eux pour l'appliquer."},{question:"Il faut avoir un permis spécial pour conduire dans le désert.",answer:!1,fact:"Bien que plus dangereuse et nécéssitant un certain savoir faire, vous avez seulement besoin de votre permis B pour conduire dans le désert."},{question:"Le vol, quand il dépasse les 10 000$ est puni par la peine de mort.",answer:!1,fact:"Bien qu'encore en vigueur aux UAE, la peine de mort n'est appliquée que dans des cas extrèmement graves. Seulement 8 exécutions ont été recensées aux UAE sur ces 10 dernières années."},{question:"L’âge adulte à Dubaï commence à 21 ans, comme aux États-Unis.",answer:!0,fact:"Il ne vous sera donc pas possible de rentrer dans les clubs ou les boîtes de nuits distribuant de l'alcool avant cet âge là."},{question:"Les paris et jeux d’argent sont interdit.",answer:!0,fact:"N'essayez pas de ramener votre malette de poker, elle sera saisie par la douane."},{question:"Les personnes de nationalité Israélienne et Iranienne n’ont pas le droit d’accès au pays",answer:!0,fact:"Également valable pour les personnes de nationnalité Qatari suite à la crise actuelle et à l'embargo sur le Qatar."},{question:"Tous les produits commercialisés en magasin sont soumis à une TVA de 5%",answer:!0,fact:"Fini le temps ou les taxes n'existaient pas à Dubaï. Depuis le 1er janvier 2018, la TVA à fait son apparition. et ce n'est que le début."},{question:"Le chlore est interdit pour des raisons religieuses. Les piscines sont donc entretenues au sel.",answer:!1,fact:"Le chlore n'est absolument pas interdit pour des raisons religieuse."},{question:"Les seuls pays partageant une frontière physique terrestre avec les UAE sont l’Arabie Saoudite, Oman et le Yémen",answer:!1,fact:"Le Yemen n'a pas de frontière terreste avec les UAE."},{question:"Les femmes n’ont pas le droit de conduire seules",answer:!1,fact:"Les femmes ont parfaitement le droit de conduire seules. L'Arabie Saoudite, dernier pays dans le monde où les femmes n'avaient pas le droit de conduire ont levé cette interdiction en 2017."}],totalQuestion:"",count_right:"0",count_wrong:"0",pseudo:"",isCorrect:!0,isNotCorrect:!1,pseudoRules:[function(e){return!!e||"Tu as oublié d'entrer ton pseudo !"},function(e){return e.length<=10||"Ton pseudo ne doit pas faire plus de 10 caracères."}],validForm:!1,th:[{text:"Pseudo",value:"pseudo",class:"table-pseudo"},{text:"Score",value:"score",class:"table-score"},{text:"Date",value:"date",class:"table-date"}],classement:[{pseudo:"👑 Romain",score:"50",date:"15-07-2018"}],pagination:{sortBy:"score",descending:!0,rowsPerPage:-1}}},props:{msg:String},methods:{displayResult:function(e){this.scoreStarted=!0,e==this.realQuestionList[this.currentQuestion].answer?(console.log("correct"),this.count_right++,this.isCorrect=!0,this.isNotCorrect=!1):(this.count_wrong++,console.log("incorrect"),this.isCorrect=!1,this.isNotCorrect=!0),this.realQuestionList[this.currentQuestion],this.realQuestionList[this.currentQuestion].fact},nextQuestion:function(){console.log("max:",this.realQuestionList.length-1),this.dialog=!1,this.currentQuestion<this.realQuestionList.length-1?this.$nextTick((function(){this.currentQuestion++})):this.endTheQuiz(),console.log(this.currentQuestion)},endTheQuiz:function(){this.totalQuestion=this.realQuestionList.length,this.questionsView=!1,this.formView=!0},saveScore:function(){console.log("score saved!");var e=function(e){return e<10?"0"+e:e},t=new Date,s=t.getFullYear(),n=e(t.getMonth()+1),a=e(t.getDate()),i="".concat(a,"-").concat(n,"-").concat(s);console.log(i),this.classement.push({pseudo:this.pseudo,score:this.count_right,date:i}),this.pagination.sortBy=this.th[1].value,this.formView=!1,this.classementView=!0},replay:function(){this.classementView=!1,this.questionsView=!0,this.currentQuestion=0,this.count_right=0,this.count_wrong=0}},mounted:function(){}},h=b,g=(s("86f6"),Object(p["a"])(h,f,v,!1,null,"330fe2ce",null)),q=g.exports,w=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._v("\n  Hello counter\n")])},x=[],y={name:"Counter",data:function(){return{}},methods:{}},L=y,_=Object(p["a"])(L,w,x,!1,null,"c77d094c",null),C=_.exports,j={name:"App",components:{Question:q,Counter:C},data:function(){return{introView:!0,questionsView:!1,visible:!0,count:"0"}},methods:{startQuiz:function(){this.introView=!1,this.questionsView=!0},starQuiz:function(){this.visible=!this.visible}}},A=j,D=(s("034f"),Object(p["a"])(A,r,o,!1,null,null,null)),Q=D.exports,k=(s("20e7"),s("c0a4")),E=s.n(k);n["default"].config.productionTip=!1,n["default"].use(i.a,{theme:{primary:E.a.red.darken1,secondary:E.a.red.lighten4,accent:E.a.indigo.base}}),new n["default"]({render:function(e){return e(Q)}}).$mount("#app")},"64a9":function(e,t,s){},"86f6":function(e,t,s){"use strict";s("ed5c")},cf05:function(e,t,s){e.exports=s.p+"img/logo.978a7dfc.png"},ed5c:function(e,t,s){},fb16:function(e,t,s){"use strict";s("2e90")}});
//# sourceMappingURL=app.1aa2d7d2.js.map