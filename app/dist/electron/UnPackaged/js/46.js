(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[46],{2836:function(t,e,s){"use strict";var r=s("3502"),n=s.n(r);n.a},3502:function(t,e,s){},"754e":function(t,e,s){"use strict";s.r(e);var render=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"column  items-center justify-start  restore-wallet"},[s("div",{staticClass:"q-pa-md"},[s("img",{attrs:{src:"statics/icons/icon-256x256.png",width:"80",alt:"logo"}})]),s("notify-message"),s("div",{staticClass:"vert-page-content"},[s("h2",{staticClass:"vert-page-content--title"},[t._v("\n      Enter your Verto config password\n    ")]),s("p",{staticClass:"vert-page-content--title__sub"},[t._v("\n      Please enter your verto account password which you are syncing to verto extension\n    ")]),s("div",{staticClass:"vert-page-content--body"},[s("div",{staticClass:"standard-content--body__form"},[s("div",[s("label",{staticClass:"ver-label"},[t._v("\n            Enter your password\n          ")]),s("q-input",{ref:"psswrd",staticClass:"q-mt-sm",attrs:{autofocus:"",outlined:"",error:t.pwdError,"error-message":"Your config password is incorrect",type:t.isPwd?"password":"text"},on:{input:t.showSubmitKey,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.restoreConfig(e)}},scopedSlots:t._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.isPwd?"visibility_off":"visibility"},on:{click:function(e){t.isPwd=!t.isPwd}}})]},proxy:!0}]),model:{value:t.addWallet.vertoPassword,callback:function(e){t.$set(t.addWallet,"vertoPassword",e)},expression:"addWallet.vertoPassword"}})],1)])]),s("div",{staticClass:"vert-page-content--footer q-mb-lg"},[s("q-btn",{staticClass:"btn__blue block",attrs:{unelevated:"",size:"lg",label:"Continue"},on:{click:t.restoreConfig}}),s("span",{staticClass:"q-pa-sm"}),s("q-btn",{staticClass:"btn--outline__blue",attrs:{outline:"",unelevated:"",size:"lg",label:"Cancel Sync"},on:{click:t.cancelSync}})],1)])],1)},r=[],n=s("967e"),a=s.n(n),o=(s("6762"),s("2fdb"),s("96cf"),s("fa84")),i=s.n(o),c=s("04c6"),l=s("adc8"),u=s("0a51"),d={name:"SyncWalletFromExtension.vue",components:{NotifyMessage:l["a"]},data:function data(){return{step:1,isPwd:!0,spinnervisible:!1,contractable:!0,submitKey:!1,fileEmpty:!1,unknownError:!1,incorrectPassword:!1,showNextButtonToPassword:!1,returnto:"",pwdError:!1,addWallet:{walletName:"",address:"",addressPriv:"",vertoPassword:"",vertoPasswordError:""}}},created:function created(){this.returnto=this.$route.params.returnto},methods:{goback:function goback(){"settings"===this.returnto?this.$router.push("/settings"):"profile"===this.returnto?this.$router.push("/verto/profile"):this.$router.push(this.returnto)},showThePasswordScreen:function showThePasswordScreen(){this.showNextButtonToPassword&&this.$refs.stepper.next()},showSubmitKey:function showSubmitKey(){this.resetErrors(),this.addWallet.vertoPassword.length>2?this.submitKey=!0:this.submitKey=!1},resetErrors:function resetErrors(){this.incorrectPassword=!1,this.fileEmpty=!1,this.unknownError=!1},checks:function checks(){this.file?(this.fileEmpty=!1,this.showNextButtonToPassword=!0):(this.fileEmpty=!0,this.showNextButtonToPassword=!1)},cancelSync:function cancelSync(){this.$router.push({name:"login"}),localStorage.removeItem("sync_data")},login:function login(){var t=this;return i()(a.a.mark((function _callee(){var e;return a.a.wrap((function _callee$(s){while(1)switch(s.prev=s.next){case 0:return localStorage.removeItem("sync_data"),s.next=3,c["a"].login(t.addWallet.vertoPassword);case 3:e=s.sent,e.success?(t.$store.commit("settings/temporary",t.password),t.$route.params.nextUrl&&t.$route.params.nextUrl.includes("dashboard")&&Object(u["a"])(),setTimeout((function(){t.$store.dispatch("investment/getMarketDataVsUSD"),t.$router.push({path:"/verto/dashboard"})}),100)):("no_default_key"===e.message?t.$router.push({path:"vertomanager"}):t.passHasError=!0,t.spinnerVisible=!1);case 5:case"end":return s.stop()}}),_callee)})))()},loadConfig:function loadConfig(){var t=this;return i()(a.a.mark((function _callee2(){var e,s;return a.a.wrap((function _callee2$(r){while(1)switch(r.prev=r.next){case 0:return e=localStorage.getItem("sync_data"),r.prev=1,t.spinnervisible=!0,r.next=5,c["a"].restoreConfig(e,t.addWallet.vertoPassword);case 5:if(s=r.sent,"bad_password"!==s.message){r.next=11;break}throw t.spinnervisible=!1,t.pwdError=!0,new Error("Incorrect Password");case 11:t.$store.commit("settings/temporary",t.addWallet.vertoPassword),t.applicationRefreshing=!0,t.$store.dispatch("notify/success","Application refreshing"),setTimeout(t.login,300),r.next=20;break;case 17:r.prev=17,r.t0=r["catch"](1),t.spinnervisible=!1;case 20:case"end":return r.stop()}}),_callee2,null,[[1,17]])})))()},restoreConfig:function restoreConfig(){var t=this;return i()(a.a.mark((function _callee3(){return a.a.wrap((function _callee3$(e){while(1)switch(e.prev=e.next){case 0:t.loadConfig();case 1:case"end":return e.stop()}}),_callee3)})))()}}},p=d,h=(s("2836"),s("2877")),f=Object(h["a"])(p,render,r,!1,null,"6f589282",null);e["default"]=f.exports}}]);