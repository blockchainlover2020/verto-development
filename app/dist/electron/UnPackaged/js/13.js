(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"3bac":function(t,a,r){"use strict";var o=r("6691"),c=r.n(o);c.a},"5f6b":function(t,a,r){"use strict";r.r(a);var render=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("q-page",{staticClass:"column items-center justify-start login-page restore-page-wrapper",class:{"dark-theme":"true"===t.$store.state.settings.lightMode}},[r("div",{staticClass:"full-width full-height"},[r("img",{staticClass:"head-login",attrs:{src:"statics/login_ui_"+("true"===t.$store.state.settings.lightMode?"dark":"light")+".png",alt:"head-login"}}),r("div",{staticClass:"form_wrapper full-height column q-pa-lg"},[r("span",{staticClass:"text-h2 q-pl-md"},[t._v("VERTO")]),2===t.step?r("span",{staticClass:"text-h3 q-pl-md q-pr-md q-mt-md"},[t._v("Creating keys")]):t._e(),""==t.$store.getters["notify/message"]&&3===t.step?r("span",{staticClass:"text-h3 q-pl-md q-pr-md q-mt-md"},[t._v("Congratulations!")]):t._e(),r("div",{staticClass:"password_wrapper q-pl-md q-pr-md"},[2==t.step?r("div",{staticClass:"full-width"},[r("div",{staticClass:"full-width q-pt-md"},[r("q-circular-progress",{attrs:{"center-color":"transparent","font-size":"14px","show-value":"",dark:"",value:t.progress,size:"90px",thickness:.06,color:"white","track-color":"transparent"}}),t.status?r("div",[r("div",{staticClass:"q-mt-md flex justify-start items-center"},[r("q-icon",{staticClass:"q-pr-sm q_icon_coin",attrs:{size:"sm",name:"img:"+(t.status.icon?t.status.icon:"https://files.coinswitch.co/public/coins/"+t.status.value+".png")}}),r("p",{staticClass:"text-grey-4"},[t._v(" "+t._s(t.status.label))])],1)]):t._e()],1),r("div",{staticClass:"unlock_restore flex justify-between items-end q-mt-sm"},[r("q-btn",{staticClass:"btn__blue unlock_btn",attrs:{unelevated:"",color:"grey-4",outline:"",size:"md",label:"Next","no-caps":"",disable:!t.mapped},on:{click:function(a){t.step=3}}}),r("b")],1)]):t._e(),3==t.step?r("div",{staticClass:"full-width"},[r("div",{staticClass:"full-width"},[r("p",{staticClass:"q-mt-md text-bold"},[t._v("Disclaimer")]),t.$store.state.settings.backupConfig?r("p",{staticClass:"q-mt-md"},[t._v("\n              Download your new config. "),r("br"),t._v("\n              It contains your old config accounts and your newly created accounts.\n              Save your 24 words and your new config. If you restore your wallet without using this new config, it will not include the newly created accounts. "),r("br")]):r("p",{staticClass:"q-mt-md"},[t._v("\n              Your 24 words are very important! "),r("br"),t._v("\n              Keep them stored somewhere safe."),r("br"),r("br"),t._v("\n              Anyone with access to these 24 words will be able to recover this Verto app and the private keys it is associated with,\n              so keep in a safe place that only you have access to.\n            ")]),(t.$store.state.settings.dexData.depositCoin&&t.$store.state.settings.dexData.depositCoin,t._e())]),r("div",{staticClass:"unlock_restore unlock_restore2 flex justify-between items-end q-mt-sm"},[r("q-btn",{staticClass:"btn__blue unlock_btn",attrs:{unelevated:"",label:"Get Started",color:"grey-4",outline:"",size:"md","no-caps":""},on:{click:function(a){return t.dataRefresh()}}}),r("q-btn",{staticClass:"q-mt-md",attrs:{label:"Download",icon:"file_download","no-caps":"",color:"red-5",outline:""},on:{click:t.backupConfig}})],1)]):t._e()])])]),r("notify-message")],1)},o=[],c=(r("ac4d"),r("8a81"),r("5df3"),r("1c4c"),r("6b54"),r("7f7f"),r("7514"),r("cadf"),r("06db"),r("4db1")),i=r.n(c),l=(r("ac6a"),r("967e")),u=r.n(l),p=(r("96cf"),r("fa84")),d=r.n(p),m=r("2b0e"),h=r("f7ec"),v=r("233a"),g=r("8fee"),b=r("5cea"),w=r("adc8");function _createForOfIteratorHelper(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=_unsupportedIterableToArray(t))){var a=0,r=function F(){};return{s:r,n:function n(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function e(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c,i=!0,l=!1;return{s:function s(){o=t[Symbol.iterator]()},n:function n(){var t=o.next();return i=t.done,t},e:function e(t){l=!0,c=t},f:function f(){try{i||null==o.return||o.return()}finally{if(l)throw c}}}}function _unsupportedIterableToArray(t,a){if(t){if("string"===typeof t)return _arrayLikeToArray(t,a);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(t,a):void 0}}function _arrayLikeToArray(t,a){(null==a||a>t.length)&&(a=t.length);for(var r=0,o=new Array(a);r<a;r++)o[r]=t[r];return o}m["default"].component("video-bg",h["a"]);var y=new b["a"],_={components:{NotifyMessage:w["a"]},data:function data(){return{step:2,error:!1,errorMessage:"",walletClientName:"verto",vertoPassword:this.$store.state.settings.temporary,config:this.$store.state.currentwallet.config,loading:!1,mapped:!1,addressMap:null,showMap:!1,state:null,status:null,progress:0,available:!1,assets:{},names:[{value:"btc",label:"Bitcoin"},{value:"eth",label:"Account 1"},{value:"bnb",label:"Binance Chain"},{value:"ltc",label:"Litecoin"},{value:"dash",label:"DASH"},{icon:"https://assets.coingecko.com/coins/images/12559/small/coin-round-red.png",value:"avax",label:"Avalanche"},{value:"dot",label:"Polkadot"},{icon:"https://verto.volentix.io/statics/img/terra.png",value:"terra",label:"Terra"},{icon:"https://assets.coingecko.com/coins/images/9568/small/m4zRhP5e_400x400.jpg",value:"ksm",label:"Kusama"},{icon:"https://assets.coingecko.com/coins/images/4128/small/coinmarketcap-solana-200.png",value:"sol",label:"Solana"},{value:"xlm",label:"Stellar Lumens"},{value:"xtz",label:"Tezos"}],message:"",messageType:"success"}},created:function created(){},mounted:function mounted(){var t=this;return d()(u.a.mark((function _callee(){return u.a.wrap((function _callee$(a){while(1)switch(a.prev=a.next){case 0:t.step=2,t.putAddress();case 2:case"end":return a.stop()}}),_callee)})))()},computed:{},methods:{backupConfig:function backupConfig(){var t=this;return d()(u.a.mark((function _callee2(){return u.a.wrap((function _callee2$(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t.$configManager.backupConfig();case 3:t.$q.platform.is.android&&t.$store.dispatch("notify/success","Config Saved"),a.next=8;break;case 6:a.prev=6,a.t0=a["catch"](0);case 8:case"end":return a.stop()}}),_callee2,null,[[0,6]])})))()},copyToClipboard:function copyToClipboard(t,a){this.$clipboardWrite(t),this.$store.dispatch("notify/success",a?a+" Copied":"Key Copied")},putAddress:function putAddress(){var t=this;return d()(u.a.mark((function _callee4(){var a,r,o,c,i,l;return u.a.wrap((function _callee4$(p){while(1)switch(p.prev=p.next){case 0:a=t,r=t.names.length,o=0,c=_createForOfIteratorHelper(t.names),p.prev=4,l=u.a.mark((function _loop(){var c;return u.a.wrap((function _loop$(l){while(1)switch(l.prev=l.next){case 0:return c=i.value,o++,t.progress=Math.round(o/r*1e4)/100,t.status=c,l.next=6,g["a"].Wallet(c.value).then(function(){var t=d()(u.a.mark((function _callee3(t){return u.a.wrap((function _callee3$(r){while(1)switch(r.prev=r.next){case 0:return r.abrupt("return",a.$configManager.saveWalletAndKey(c.label,a.vertoPassword,null,t.publicKey,t.privateKey,c.value,"mnemonic"));case 1:case"end":return r.stop()}}),_callee3)})));return function(a){return t.apply(this,arguments)}}());case 6:case"end":return l.stop()}}),_loop)})),c.s();case 7:if((i=c.n()).done){p.next=11;break}return p.delegateYield(l(),"t0",9);case 9:p.next=7;break;case 11:p.next=16;break;case 13:p.prev=13,p.t1=p["catch"](4),c.e(p.t1);case 16:return p.prev=16,c.f(),p.finish(16);case 19:t.step=3;case 20:case"end":return p.stop()}}),_callee4,null,[[4,13,16,19]])})))()},associateEOSAccount:function associateEOSAccount(){var t=this,a=i()(this.$store.state.currentwallet.config.keys),r=a.find((function(t){return"eos"===t.chain&&"verto"===t.type}));r&&y.getAccountNamesFromPubKeyP(r.key).then((function(a){a.account_names.length&&(r.type="eos",r.name=a.account_names[0],r.to="/verto/wallets/".concat(r.chain,"/").concat(r.type,"/").concat(r.name),r.icon="https://files.coinswitch.co/public/coins/eos.png",t.$configManager.updateConfig(t.vertoPassword,t.$store.state.currentwallet.config))})).catch((function(a){t.$store.dispatch("notify/error",a),t.$q.notify({color:"negative",message:a})}))},dataRefresh:function dataRefresh(){var t=arguments,a=this;return d()(u.a.mark((function _callee5(){var r,o;return u.a.wrap((function _callee5$(c){while(1)switch(c.prev=c.next){case 0:r=t.length>0&&void 0!==t[0]?t[0]:"/verto/dashboard",o=a,a.$store.state.wallets.tokens=[];try{a.associateEOSAccount()}catch(i){}a.$store.dispatch("notify/success","Application refreshing"),a.$store.state.currentwallet.wallet={empty:!0},v["a"].removeExpiredData(0),setTimeout((function(){o.$router.push({path:r})}),300);case 8:case"end":return c.stop()}}),_callee5)})))()}}},k=_,C=(r("3bac"),r("2877")),x=Object(C["a"])(k,render,o,!1,null,"9fb529d2",null);a["default"]=x.exports},6691:function(t,a,r){}}]);