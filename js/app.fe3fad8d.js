(function(e){function t(t){for(var c,a,o=t[0],i=t[1],u=t[2],b=0,h=[];b<o.length;b++)a=o[b],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&h.push(r[a][0]),r[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);l&&l(t);while(h.length)h.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],c=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(c=!1)}c&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var c={},r={app:0},s=[];function a(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=c,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(n,c,function(t){return e[t]}.bind(null,c));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=i;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0710":function(e,t,n){},2302:function(e,t,n){"use strict";n("fc15")},"28ea":function(e,t,n){},3716:function(e,t,n){"use strict";n("5f0a")},"3f3b":function(e,t,n){"use strict";n("796f")},"5f0a":function(e,t,n){},"625d":function(e,t,n){},6932:function(e,t,n){"use strict";n("625d")},"6ef1":function(e,t,n){"use strict";n("a833")},"796f":function(e,t,n){},a833:function(e,t,n){},be4f:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),r=Object(c["h"])("span",{class:"loading"},"Loading...",-1);function s(e,t,n,s,a,o){var i=Object(c["u"])("navigation"),u=Object(c["u"])("game-content"),l=Object(c["u"])("modal-dialog");return Object(c["n"])(),Object(c["g"])("div",{class:Object(c["l"])(["app",{"dark-theme":e.showDarkTheme,"high-contrast":e.showHighContrast}])},[Object(c["j"])(i),(Object(c["n"])(),Object(c["e"])(c["b"],null,{fallback:Object(c["y"])((function(){return[r]})),default:Object(c["y"])((function(){return[Object(c["j"])(u)]})),_:1})),Object(c["z"])(Object(c["j"])(l,{class:Object(c["l"])(["modal-dialog",e.showDialog?"show-dialog":""])},null,8,["class"]),[[c["x"],e.showDialog]])],2)}var a={class:"dialog"},o={xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},i=["fill"],u={class:"content-container"};function l(e,t,n,r,s,l){var b=Object(c["u"])("Stats"),h=Object(c["u"])("Instructions"),O=Object(c["u"])("Settings");return Object(c["n"])(),Object(c["g"])("div",{class:Object(c["l"])(["dialog-container",{"dark-theme":e.showDarkTheme,"high-contrast":e.showHighContrast,"closing-dialog":e.closingDialog}])},[Object(c["h"])("div",{class:"backdrop",onClick:t[0]||(t[0]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.closeDialog&&e.closeDialog.apply(e,t)})}),Object(c["h"])("div",a,[Object(c["h"])("div",{class:"close-button",onClick:t[1]||(t[1]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.closeDialog&&e.closeDialog.apply(e,t)})},[(Object(c["n"])(),Object(c["g"])("svg",o,[Object(c["h"])("path",{fill:e.showDarkTheme?"white":"black",d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"},null,8,i)]))]),Object(c["h"])("div",u,[e.showStats?(Object(c["n"])(),Object(c["e"])(b,{key:0})):Object(c["f"])("",!0),e.showInstructions?(Object(c["n"])(),Object(c["e"])(h,{key:1})):Object(c["f"])("",!0),e.showSettings?(Object(c["n"])(),Object(c["e"])(O,{key:2})):Object(c["f"])("",!0)])])],2)}var b=Object(c["q"])({isDialogOpen:!1,areInstructionsOpen:!1,areSettingsOpen:!1,areStatsOpen:!1}),h=function(){return Object(c["r"])(b)},O=function(e){b.isDialogOpen=e,e||(b.areInstructionsOpen=!1,b.areSettingsOpen=!1,b.areStatsOpen=!1)},d=function(e){b.isDialogOpen=e,b.areInstructionsOpen=e},f=function(e){b.isDialogOpen=e,b.areSettingsOpen=e},m=function(e){b.isDialogOpen=e,b.areStatsOpen=e},j=function(e){return Object(c["p"])("data-v-0dde44b1"),e=e(),Object(c["o"])(),e},g={class:"stats-container"},v=j((function(){return Object(c["h"])("h4",null,"Statistics",-1)})),p={class:"numbers-container"},w={class:"stat"},y={class:"number"},k=j((function(){return Object(c["h"])("p",{class:"number-text"},"Played",-1)})),S={class:"stat"},A={class:"number"},D=j((function(){return Object(c["h"])("p",{class:"number-text"},"Win %",-1)})),T={class:"stat"},C={class:"number"},I=j((function(){return Object(c["h"])("p",{class:"number-text"},"Current Streak",-1)})),x={class:"stat"},P={class:"number"},G=j((function(){return Object(c["h"])("p",{class:"number-text"},"Max Streak",-1)})),M=j((function(){return Object(c["h"])("h4",null,"Rankings",-1)})),_={class:"rank"},z={class:"name"},N={class:"percentage"},q={class:"next-sof"},H=j((function(){return Object(c["h"])("h4",{class:"next-sof-text"},"Next Science Or Fiction",-1)})),L={class:"time-left"},W={class:"time"},V={class:"time-number"},E=j((function(){return Object(c["h"])("div",{class:"time-type"},"Days",-1)})),B={class:"time"},Y={class:"time-number"},F=j((function(){return Object(c["h"])("div",{class:"time-type"},"Hours",-1)})),J={class:"time"},U={class:"time-number"},Q=j((function(){return Object(c["h"])("div",{class:"time-type"},"Minutes",-1)})),R={class:"time"},$={class:"time-number"},K=j((function(){return Object(c["h"])("div",{class:"time-type"},"Seconds",-1)}));function X(e,t,n,r,s,a){return Object(c["n"])(),Object(c["g"])("div",g,[v,Object(c["h"])("div",p,[Object(c["h"])("div",w,[Object(c["h"])("p",y,Object(c["v"])(e.userStats.numberOfGamesPlayed),1),k]),Object(c["h"])("div",S,[Object(c["h"])("p",A,Object(c["v"])(Math.round(e.userStats.numberOfGamesWon/(0==e.userStats.numberOfGamesPlayed?1:e.userStats.numberOfGamesPlayed)*100)),1),D]),Object(c["h"])("div",T,[Object(c["h"])("p",C,Object(c["v"])(e.userStats.currentStreak),1),I]),Object(c["h"])("div",x,[Object(c["h"])("p",P,Object(c["v"])(e.userStats.longestStreak),1),G])]),M,Object(c["h"])("ul",null,[(Object(c["n"])(!0),Object(c["g"])(c["a"],null,Object(c["t"])(e.rankings,(function(e,t){return Object(c["n"])(),Object(c["g"])("li",{key:e.name,class:Object(c["l"])("You"==e.name?"you":"")},[Object(c["h"])("p",_,Object(c["v"])(t+1),1),Object(c["h"])("div",{class:"bar",style:Object(c["m"])("background: linear-gradient(90deg, "+("You"==e.name?"#006266, #006266 ":"#105c90, #105c90 ")+e.numberOfGamesWon/e.numberOfGamesPlayed*100+"%, #888 "+e.numberOfGamesWon/e.numberOfGamesPlayed*100+"%, #888);")},[Object(c["h"])("p",z,Object(c["v"])(e.name),1),Object(c["h"])("p",N,Object(c["v"])(Math.round(e.numberOfGamesWon/e.numberOfGamesPlayed*100))+"% ",1)],4)],2)})),128))]),Object(c["h"])("div",q,[H,Object(c["h"])("div",L,[Object(c["h"])("div",W,[Object(c["h"])("div",V,Object(c["v"])(e.daysLeft),1),E]),Object(c["h"])("div",B,[Object(c["h"])("div",Y,Object(c["v"])(e.hoursLeft),1),F]),Object(c["h"])("div",J,[Object(c["h"])("div",U,Object(c["v"])(e.minutesLeft),1),Q]),Object(c["h"])("div",R,[Object(c["h"])("div",$,Object(c["v"])(e.secondsLeft),1),K])])])])}var Z=function(){function e(e){this.value=e}return e}(),ee=function(){function e(){}return e.prototype.setItem=function(e,t){var n=new Z(t),c=JSON.stringify(n);localStorage.setItem(e,c)},e.prototype.getItem=function(e){this.assertNotEmpty(e,"key");var t=this.getCacheEntry(e);if(void 0!==t)return t.value},e.prototype.removeItem=function(e){localStorage.removeItem(e)},e.prototype.removeAllItems=function(){localStorage.clear()},e.prototype.getSize=function(){return localStorage.length},e.prototype.getCacheEntry=function(e){var t=localStorage.getItem(e);if(null!==t)try{return JSON.parse(t)}catch(n){return}},e.prototype.removeItems=function(e){for(var t=0,n=e;t<n.length;t++){var c=n[t];this.removeItem(c)}},e.prototype.assertNotEmpty=function(e,t){if(0===e.length)throw new Error("The "+t+" must not be empty.")},e.prototype.isInThePast=function(e){var t=new Date;return t>e},e}(),te=new ee;function ne(){return te}var ce=Object(c["q"])({numberOfGamesPlayed:0,numberOfGamesWon:0,currentStreak:0,longestStreak:0,gamesPlayed:[]}),re=function(){return ce},se=function(){var e=ne(),t=e.getItem("userStats");t&&(ce.currentStreak=t.currentStreak,ce.gamesPlayed=t.gamesPlayed,ce.longestStreak=t.longestStreak,ce.numberOfGamesPlayed=t.numberOfGamesPlayed,ce.numberOfGamesWon=t.numberOfGamesWon),ue()},ae=function(e){ce.currentStreak+=1,ce.currentStreak>ce.longestStreak&&(ce.longestStreak=ce.currentStreak),ce.numberOfGamesWon++,oe(e)},oe=function(e){ce.gamesPlayed.push(e),ce.numberOfGamesPlayed++,ue()},ie=function(e){ce.currentStreak=0,oe(e)},ue=function(){var e=ne();e.setItem("userStats",ce)},le=Object(c["q"])({game:void 0,submittedAnswer:!1,submittedAnswerNumber:void 0,selectedAnswerNumber:void 0,selectedAnswer:!1}),be=Object(c["q"])([]),he=function(){return le},Oe=function(){return be},de=function(){var e=ne(),t=e.getItem("currentGame");t&&(le.game=t.game,le.submittedAnswer=t.submittedAnswer,le.submittedAnswerNumber=t.submittedAnswerNumber,le.selectedAnswer=t.selectedAnswer,le.selectedAnswerNumber=t.selectedAnswerNumber)},fe=function(){var e=ne();e.setItem("currentGame",le)},me=function(e){le.game=e,fe()},je=function(e){le.submittedAnswer=!0,le.submittedAnswerNumber=e,fe()},ge=function(e){le.selectedAnswer=!0,le.selectedAnswerNumber=e,fe()},ve=function(){le.submittedAnswer=!1,le.submittedAnswerNumber=void 0,le.game=void 0,le.selectedAnswerNumber=void 0,le.selectedAnswer=!1,fe()},pe=function(){return new Promise((function(e){we("games.json").then((function(t){t.forEach((function(e){be.push(e)})),e()}))}))};function we(e){return fetch(e).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()}))}var ye=Object(c["k"])({name:"Stats",setup:function(){var e=Oe(),t=Object(c["s"])(re()),n=Ae(e),r=function(){var e=ke(1,0,0),t=Math.abs(e.getTime()-(new Date).getTime())/864e5,n=t%1*24,c=n%1*60,r=c%1*60,s={Days:Math.floor(t),Hours:Math.floor(n),Minutes:Math.floor(c),Seconds:Math.floor(r)};return s},s=Object(c["s"])();s.value=r().Days,setInterval((function(){s.value=r().Days}),1e3);var a=Object(c["s"])();a.value=r().Hours,setInterval((function(){a.value=r().Hours}),1e3);var o=Object(c["s"])();o.value=r().Minutes,setInterval((function(){o.value=r().Minutes}),1e3);var i=Object(c["s"])();return i.value=r().Seconds,setInterval((function(){i.value=r().Seconds}),1e3),{userStats:t,rankings:n,daysLeft:s,hoursLeft:a,minutesLeft:o,secondsLeft:i}}});function ke(e,t,n){var c=new Date,r=new Date(c.getFullYear(),c.getMonth(),c.getDate()+(7+e-c.getDay())%7,t,n);return r<c&&r.setDate(r.getDate()+7),r}function Se(e,t){var n=e.numberOfGamesWon/e.numberOfGamesPlayed,c=t.numberOfGamesWon/t.numberOfGamesPlayed;return n>c?-1:n<c?1:0}function Ae(e){var t=re(),n={};t.gamesPlayed.forEach((function(t){e.forEach((function(e){t==e.id&&e.rogueAnswers.forEach((function(e){n[e.id]||(n[e.id]={numberOfGamesPlayed:0,numberOfGamesWon:0,name:e.name}),n[e.id].numberOfGamesPlayed++,n[e.id].numberOfGamesWon+=e.correct?1:0}))}))})),n["you"]={},n["you"].numberOfGamesPlayed=t.numberOfGamesPlayed,n["you"].numberOfGamesWon=t.numberOfGamesWon,n["you"].name="You";var c=De(n);return c}function De(e){var t=Array();return Object.keys(e).map((function(n){var c=e[n];return t.push(c),t})),t.sort(Se),t}n("ebca");var Te=n("6b0d"),Ce=n.n(Te);const Ie=Ce()(ye,[["render",X],["__scopeId","data-v-0dde44b1"]]);var xe=Ie,Pe=function(e){return Object(c["p"])("data-v-0bd1d199"),e=e(),Object(c["o"])(),e},Ge={class:"instructions-container"},Me=Pe((function(){return Object(c["h"])("h4",null,"How to Play",-1)})),_e={class:"numbers-container"},ze=Pe((function(){return Object(c["h"])("p",null,[Object(c["i"])(" Play along in past science or fictions from the "),Object(c["h"])("a",{href:"https://www.theskepticsguide.org/"},"SGU Podcast.")],-1)})),Ne=Pe((function(){return Object(c["h"])("p",null,' Guess which item is the fiction. Pick the item that seems like it is fake and hit "Submit" ',-1)})),qe=Object(c["i"])(" You can see how you stack up against the rogues actual answers to the same Science or Fiction on the podcast by clicking the "),He={xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},Le=["fill"],We=Object(c["i"])(" icon "),Ve=Pe((function(){return Object(c["h"])("p",null,[Object(c["h"])("strong",null,"A new Science or Fiction will be available each week on Monday!")],-1)}));function Ee(e,t,n,r,s,a){return Object(c["n"])(),Object(c["g"])("div",Ge,[Me,Object(c["h"])("div",_e,[ze,Ne,Object(c["h"])("p",null,[qe,(Object(c["n"])(),Object(c["g"])("svg",He,[Object(c["h"])("path",{fill:e.showDarkTheme?"white":"black",d:"M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"},null,8,Le)])),We]),Ve])])}var Be=Object(c["q"])({darkTheme:!1,highContrast:!1}),Ye=function(){return Be},Fe=function(){var e=ne(),t=e.getItem("settings");t&&(Be.darkTheme=t.darkTheme,Be.highContrast=t.highContrast)},Je=function(){var e=ne();e.setItem("settings",Be)},Ue=function(e){Be.highContrast=e,Je()},Qe=function(e){Be.darkTheme=e,Je()},Re=Object(c["k"])({name:"Instructions",setup:function(){var e=Object(c["c"])((function(){return Ye().darkTheme})),t=Object(c["c"])((function(){return Ye().highContrast}));return{showDarkTheme:e,showHighContrast:t}}});n("3f3b");const $e=Ce()(Re,[["render",Ee],["__scopeId","data-v-0bd1d199"]]);var Ke=$e,Xe=function(e){return Object(c["p"])("data-v-94cae4fe"),e=e(),Object(c["o"])(),e},Ze={class:"settings-wrapper"},et=Xe((function(){return Object(c["h"])("h4",null,"Settings",-1)})),tt={class:"settings-container"},nt={class:"setting"},ct=Xe((function(){return Object(c["h"])("p",{class:"text"},"Dark Theme",-1)}));function rt(e,t,n,r,s,a){var o=Object(c["u"])("toggle-button");return Object(c["n"])(),Object(c["g"])("div",Ze,[et,Object(c["h"])("div",tt,[Object(c["h"])("div",nt,[ct,Object(c["j"])(o,{id:"dark-theme",onToggle:e.toggleDarkTheme,defaultState:e.showDarkTheme},null,8,["onToggle","defaultState"])])])])}const st=e=>(Object(c["p"])("data-v-48381428"),e=e(),Object(c["o"])(),e),at=["for"],ot={key:0,class:"toggle__label"},it={key:1,class:"toggle__label"},ut=["disabled","id"],lt=st(()=>Object(c["h"])("span",{class:"toggle__switch"},null,-1));function bt(e,t,n,r,s,a){return Object(c["n"])(),Object(c["g"])("label",{for:n.id+"_button",class:Object(c["l"])([{active:a.isActive},"toggle__button"])},[a.isActive?(Object(c["n"])(),Object(c["g"])("span",ot,Object(c["v"])(a.enableText),1)):Object(c["f"])("",!0),a.isActive?Object(c["f"])("",!0):(Object(c["n"])(),Object(c["g"])("span",it,Object(c["v"])(a.disabledText),1)),Object(c["z"])(Object(c["h"])("input",{type:"checkbox",disabled:n.disabled,id:n.id+"_button","onUpdate:modelValue":t[0]||(t[0]=e=>a.checkedValue=e)},null,8,ut),[[c["w"],a.checkedValue]]),lt],10,at)}var ht={props:{disabled:{type:Boolean,default:!1},labelEnableText:{type:String,default:"On"},labelDisableText:{type:String,default:"Off"},id:{type:String,default:"primary"},defaultState:{type:Boolean,default:!1}},data(){return{currentState:this.defaultState}},watch:{defaultState:function(){this.currentState=Boolean(this.defaultState)}},computed:{isActive(){return this.currentState},enableText(){return this.labelEnableText},disabledText(){return this.labelDisableText},checkedValue:{get(){return this.currentState},set(e){this.currentState=e,this.$emit("toggle",e)}}}};n("e608");const Ot=Ce()(ht,[["render",bt],["__scopeId","data-v-48381428"]]);var dt=Ot,ft=Object(c["k"])({name:"Instructions",components:{ToggleButton:dt},setup:function(){var e=function(e){Qe(e)},t=function(e){Ue(e)},n=Object(c["c"])((function(){return Ye().darkTheme})),r=Object(c["c"])((function(){return Ye().highContrast}));return{toggleDarkTheme:e,toggleHighContrast:t,showDarkTheme:n,showHighContrast:r}}});n("6ef1");const mt=Ce()(ft,[["render",rt],["__scopeId","data-v-94cae4fe"]]);var jt=mt,gt=Object(c["k"])({name:"ModalDialog",components:{Stats:xe,Instructions:Ke,Settings:jt},setup:function(){var e=function(){o.value=!0,setTimeout((function(){O(!1),o.value=!1}),200)},t=Object(c["c"])((function(){return h().areStatsOpen})),n=Object(c["c"])((function(){return h().areInstructionsOpen})),r=Object(c["c"])((function(){return h().areSettingsOpen})),s=Object(c["c"])((function(){return Ye().darkTheme})),a=Object(c["c"])((function(){return Ye().highContrast})),o=Object(c["s"])(!1);return{closeDialog:e,showStats:t,showInstructions:n,showSettings:r,showDarkTheme:s,showHighContrast:a,closingDialog:o}}});n("3716");const vt=Ce()(gt,[["render",l],["__scopeId","data-v-b2a06edc"]]);var pt=vt,wt=function(e){return Object(c["p"])("data-v-1a73e5e6"),e=e(),Object(c["o"])(),e},yt={class:"left-container"},kt={xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},St=["fill"],At=wt((function(){return Object(c["h"])("div",{class:"logo"},"Science or Fiction Weekly",-1)})),Dt={class:"right-container"},Tt={xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},Ct=["fill"],It={xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},xt=["fill"];function Pt(e,t,n,r,s,a){return Object(c["n"])(),Object(c["g"])("div",{class:Object(c["l"])(["navigation-container",{"dark-theme":e.showDarkTheme,"high-contrast":e.showHighContrast}])},[Object(c["h"])("div",yt,[Object(c["h"])("button",{onClick:t[0]||(t[0]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.openInstructions&&e.openInstructions.apply(e,t)})},[(Object(c["n"])(),Object(c["g"])("svg",kt,[Object(c["h"])("path",{fill:e.showDarkTheme?"white":"black",d:"M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"},null,8,St)]))])]),At,Object(c["h"])("div",Dt,[Object(c["h"])("button",{class:"stats-icon",onClick:t[1]||(t[1]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.openStats&&e.openStats.apply(e,t)})},[(Object(c["n"])(),Object(c["g"])("svg",Tt,[Object(c["h"])("path",{fill:e.showDarkTheme?"white":"black",d:"M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"},null,8,Ct)]))]),Object(c["h"])("button",{class:"settings-icon",onClick:t[2]||(t[2]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.openSettings&&e.openSettings.apply(e,t)})},[(Object(c["n"])(),Object(c["g"])("svg",It,[Object(c["h"])("path",{fill:e.showDarkTheme?"white":"black",d:"M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"},null,8,xt)]))])])],2)}var Gt=Object(c["k"])({name:"Navigation",setup:function(){var e=function(){d(!0)},t=function(){f(!0)},n=function(){m(!0)},r=Object(c["c"])((function(){return Ye().darkTheme})),s=Object(c["c"])((function(){return Ye().highContrast}));return{openInstructions:e,openStats:n,openSettings:t,showDarkTheme:r,showHighContrast:s}}});n("6932");const Mt=Ce()(Gt,[["render",Pt],["__scopeId","data-v-1a73e5e6"]]);var _t=Mt,zt=function(e){return Object(c["p"])("data-v-70ef750a"),e=e(),Object(c["o"])(),e},Nt=zt((function(){return Object(c["h"])("h3",{class:"quiz-question-type-text"},"Multiple Choice Question",-1)})),qt={class:"quiz-date-number-container"},Ht={class:"quiz-episode-number"},Lt={class:"quiz-question-date"},Wt={class:"quiz-question-container"},Vt={class:"quiz-question"},Et={class:"quiz-answers-container"},Bt=["onClick"],Yt={class:"rogue-answers-container"},Ft={key:0},Jt={class:"rogue-answer-name"},Ut={key:0},Qt=zt((function(){return Object(c["h"])("p",{class:"rogue-answer-name your-answer"},[Object(c["h"])("strong",null,"You")],-1)})),Rt=[Qt],$t={class:"quiz-answer-text"},Kt={class:"submit-button-container"};function Xt(e,t,n,r,s,a){var o=Object(c["u"])("lottie-animation");return Object(c["n"])(),Object(c["g"])("div",{class:Object(c["l"])(["game-content-container",{"dark-theme":e.showDarkTheme,"high-contrast":e.showHighContrast}])},[Nt,Object(c["h"])("div",qt,[Object(c["h"])("p",Ht,"Episode: #"+Object(c["v"])(e.game.episodeNumber),1),Object(c["h"])("p",Lt,", "+Object(c["v"])(e.game.date),1)]),Object(c["h"])("div",Wt,[Object(c["h"])("h3",Vt,Object(c["v"])(e.game.question),1)]),Object(c["h"])("ul",Et,[(Object(c["n"])(!0),Object(c["g"])(c["a"],null,Object(c["t"])(e.game.choices,(function(t,n){return Object(c["n"])(),Object(c["g"])("li",{key:"answer-"+n,onClick:function(n){return e.selectAnswer(t.number)},class:Object(c["l"])(["quiz-answer",{"answer-correct":t.correct&&e.submittedAnswer,"answer-incorrect":!t.correct&&e.submittedAnswer,"this-answer-picked":t.number==e.selectedAnswerNumber,"submitted-answer":e.submittedAnswer}])},[Object(c["h"])("ul",Yt,[(Object(c["n"])(!0),Object(c["g"])(c["a"],null,Object(c["t"])(e.game.rogueAnswers,(function(n,r){return Object(c["n"])(),Object(c["g"])("li",{key:"rogueAnswer-"+r,class:Object(c["l"])(["rogue-answer-image-container",{answered:e.submittedAnswer}])},[n.number==t.number?(Object(c["n"])(),Object(c["g"])("div",Ft,[Object(c["h"])("p",Jt,Object(c["v"])(n.name),1)])):Object(c["f"])("",!0)],2)})),128)),Object(c["h"])("li",{class:Object(c["l"])(["rogue-answer-image-container",{answered:e.submittedAnswer}])},[e.selectedAnswerNumber==t.number?(Object(c["n"])(),Object(c["g"])("div",Ut,Rt)):Object(c["f"])("",!0)],2)]),Object(c["h"])("p",$t,Object(c["v"])(t.text),1)],10,Bt)})),128))]),Object(c["h"])("div",Kt,[Object(c["h"])("button",{onClick:t[0]||(t[0]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.submitAnswer&&e.submitAnswer.apply(e,t)}),class:Object(c["l"])(["submit-button",{"selected-question":e.selectedAnswer,"submitted-answer":e.submittedAnswer}])}," Submit ",2)]),Object(c["h"])("div",{class:Object(c["l"])(["correct-modal",e.showCorrectAnimation?"visible":""])},[e.showCorrectAnimation?(Object(c["n"])(),Object(c["e"])(o,{key:0,class:"animation",path:"correct.json",background:"transparent",speed:1,loop:!1,autoPlay:e.showCorrectAnimation},null,8,["autoPlay"])):Object(c["f"])("",!0)],2),Object(c["h"])("div",{class:Object(c["l"])(["correct-modal",e.showIncorrectAnimation?"visible":""])},[e.showIncorrectAnimation?(Object(c["n"])(),Object(c["e"])(o,{key:0,class:"animation",path:"incorrect.json",background:"transparent",speed:1,loop:!1,autoPlay:e.showIncorrectAnimation},null,8,["autoPlay"])):Object(c["f"])("",!0)],2)],2)}var Zt=n("9ab4"),en=n("7926"),tn=Object(c["k"])({name:"GameContent",components:{LottieAnimation:en["a"]},setup:function(){var e;return Object(Zt["a"])(this,void 0,void 0,(function(){var t,n,r,s,a,o,i,u,l,b,h,O,d,f,j,g,v;return Object(Zt["b"])(this,(function(p){switch(p.label){case 0:return[4,pe()];case 1:return p.sent(),t=Oe(),de(),n=new Date,r=new Date("May 20, 2022"),s=Math.abs(n.getTime()-r.getTime()),a=Math.ceil(s/6048e5),o=t.filter((function(e){return e.week==a}))[0],(null===(e=he().game)||void 0===e?void 0:e.id)!=o.id&&ve(),me(o),he().submittedAnswer&&m(!0),i=Object(c["c"])((function(){return he().selectedAnswer})),u=Object(c["c"])((function(){return he().selectedAnswerNumber})),l=Object(c["s"])(!1),b=Object(c["s"])(!1),h=Object(c["s"])(!1),O=Object(c["c"])((function(){return he().submittedAnswer})),d=Object(c["c"])((function(){return he().submittedAnswerNumber})),f=function(e){he().submittedAnswer||ge(e)},j=function(){i.value&&!he().submittedAnswer&&(je(he().selectedAnswerNumber),he().submittedAnswerNumber==o.correctChoice?(l.value=!0,b.value=!0,ae(o.id),setTimeout((function(){b.value=!1}),3e3)):(l.value=!1,h.value=!0,ie(o.id),setTimeout((function(){h.value=!1}),3e3)),setTimeout((function(){m(!0)}),3e3))},g=Object(c["c"])((function(){return Ye().darkTheme})),v=Object(c["c"])((function(){return Ye().highContrast})),[2,{game:o,selectAnswer:f,selectedAnswer:i,selectedAnswerNumber:u,submittedAnswer:O,submittedAnswerNumber:d,submitAnswer:j,answeredCorrect:l,showCorrectAnimation:b,showIncorrectAnimation:h,showDarkTheme:g,showHighContrast:v}]}}))}))}});n("2302");const nn=Ce()(tn,[["render",Xt],["__scopeId","data-v-70ef750a"]]);var cn=nn,rn=Object(c["k"])({name:"App",components:{ModalDialog:pt,Navigation:_t,GameContent:cn},setup:function(){se(),Fe(),0==re().numberOfGamesPlayed&&d(!0);var e=Object(c["c"])((function(){return h().isDialogOpen})),t=Object(c["c"])((function(){return Ye().darkTheme})),n=Object(c["c"])((function(){return Ye().highContrast}));return{showDialog:e,showDarkTheme:t,showHighContrast:n}},watch:{showDarkTheme:function(e){var t,n;e?null===(t=document.querySelector("html"))||void 0===t||t.classList.add("dark-theme"):null===(n=document.querySelector("html"))||void 0===n||n.classList.remove("dark-theme")},showDialog:function(e){var t,n;e?null===(t=document.querySelector("html"))||void 0===t||t.classList.add("dialog-open"):null===(n=document.querySelector("html"))||void 0===n||n.classList.remove("dialog-open")}}});n("d849");const sn=Ce()(rn,[["render",s]]);var an=sn;Object(c["d"])(an).mount("#app")},d849:function(e,t,n){"use strict";n("0710")},e608:function(e,t,n){"use strict";n("28ea")},ebca:function(e,t,n){"use strict";n("be4f")},fc15:function(e,t,n){}});
//# sourceMappingURL=app.fe3fad8d.js.map