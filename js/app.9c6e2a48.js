(function(){"use strict";var e={289:function(e,t,a){var n=a(751),o=a(641);const l={key:0};function s(e,t,a,n,s,c){const i=(0,o.g2)("router-link"),r=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",null,[c.showMenu?((0,o.uX)(),(0,o.CE)("header",l,[t[5]||(t[5]=(0,o.Lk)("h1",null,"Vue example",-1)),(0,o.Lk)("nav",null,[(0,o.Lk)("ul",null,[(0,o.Lk)("li",null,[(0,o.bF)(i,{to:"/multi_column_layout"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("Multi column layout")]))),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(i,{to:"/navigation_bar"},{default:(0,o.k6)((()=>t[1]||(t[1]=[(0,o.eW)("Navigation bar")]))),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(i,{to:"/i18n"},{default:(0,o.k6)((()=>t[2]||(t[2]=[(0,o.eW)("I18N")]))),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(i,{to:"/night_mode"},{default:(0,o.k6)((()=>t[3]||(t[3]=[(0,o.eW)("Night Mode")]))),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(i,{to:"/chatgpt"},{default:(0,o.k6)((()=>t[4]||(t[4]=[(0,o.eW)("ChatGPT")]))),_:1})])])])])):(0,o.Q3)("",!0),(0,o.bF)(r)])}var c={name:"App",computed:{showMenu(){return!["/multi_column_layout","/navigation_bar","/i18n","/night_mode","/chatgpt"].includes(this.$route.path)}}},i=a(262);const r=(0,i.A)(c,[["render",s]]);var u=r,d=a(484),p=(a(188),a(166)),h=a(33);const m={class:"multi-column-layout"},g={class:"content-container"},v={class:"masonry"},k=["src","alt"],b={style:{padding:"18px"}},f={class:"bottom clearfix"},L={class:"time"};function C(e,t,a,n,l,s){const c=(0,o.g2)("el-card");return(0,o.uX)(),(0,o.CE)("div",m,[(0,o.Lk)("div",g,[t[1]||(t[1]=(0,o.Lk)("h2",{class:"title"},"Multi Column Masonry Layout",-1)),(0,o.Lk)("div",v,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(l.images,((a,n)=>((0,o.uX)(),(0,o.Wv)(c,{class:"masonry-item",key:n,"body-style":{padding:"0px"}},{default:(0,o.k6)((()=>[(0,o.Lk)("img",{src:a.src,alt:"Placeholder Image "+n,class:"responsive-image"},null,8,k),(0,o.Lk)("div",b,[t[0]||(t[0]=(0,o.Lk)("span",null,"图片描述",-1)),(0,o.Lk)("div",f,[(0,o.Lk)("time",L,(0,h.v_)(e.currentDate),1)])])])),_:2},1024)))),128))])])])}var M={name:"MultiColumnLayout",data(){return{images:[{src:"https://via.placeholder.com/700x100"},{src:"https://via.placeholder.com/500x100"},{src:"https://via.placeholder.com/1200x150"},{src:"https://via.placeholder.com/400x150"},{src:"https://via.placeholder.com/1300x100"},{src:"https://via.placeholder.com/150"},{src:"https://via.placeholder.com/300x200"},{src:"https://via.placeholder.com/900x100"},{src:"https://via.placeholder.com/1400x150"},{src:"https://via.placeholder.com/1000x150"},{src:"https://via.placeholder.com/300x200"},{src:"https://via.placeholder.com/900x100"},{src:"https://via.placeholder.com/1400x150"},{src:"https://via.placeholder.com/1000x150"},{src:"https://via.placeholder.com/800x150"},{src:"https://via.placeholder.com/250"},{src:"https://via.placeholder.com/200"},{src:"https://via.placeholder.com/600x150"},{src:"https://via.placeholder.com/1100x100"},{src:"https://via.placeholder.com/800x150"},{src:"https://via.placeholder.com/250"},{src:"https://via.placeholder.com/200"},{src:"https://via.placeholder.com/600x150"},{src:"https://via.placeholder.com/1100x100"},{src:"https://via.placeholder.com/700x100"},{src:"https://via.placeholder.com/500x100"},{src:"https://via.placeholder.com/1200x150"},{src:"https://via.placeholder.com/400x150"},{src:"https://via.placeholder.com/1300x100"},{src:"https://via.placeholder.com/150"}]}}};const x=(0,i.A)(M,[["render",C],["__scopeId","data-v-ab6da6ae"]]);var _=x;const w={class:"navbar"};function I(e,t,a,n,l,s){const c=(0,o.g2)("MultiColumnLayout");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("nav",w,[t[1]||(t[1]=(0,o.Fv)('<div class="logo" data-v-6a64de13>Logo</div><ul class="nav-links" data-v-6a64de13><li class="nav-link-item" data-v-6a64de13>Home</li><li class="nav-link-item" data-v-6a64de13>About</li><li class="nav-link-item" data-v-6a64de13>Contact</li><li class="nav-link-item" data-v-6a64de13>Login</li><li class="nav-link-item" data-v-6a64de13>Register</li><li class="nav-link-item" data-v-6a64de13>Logout</li><li class="nav-link-item" data-v-6a64de13>Settings</li><li class="nav-link-item" data-v-6a64de13>Help</li></ul>',2)),(0,o.Lk)("i",{class:"pi pi-bars",onClick:t[0]||(t[0]=(...e)=>s.toggleMenu&&s.toggleMenu(...e))})]),(0,o.bF)(c,{class:"content"})],64)}var y={name:"NavigationBar",components:{MultiColumnLayout:_},data(){return{menuOpen:!1}},methods:{toggleMenu(){this.menuOpen=!this.menuOpen,document.querySelector(".nav-links").classList.toggle("show")}}};const F=(0,i.A)(y,[["render",I],["__scopeId","data-v-6a64de13"]]);var P=F;function E(e,t,a,n,l,s){return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("h1",null,(0,h.v_)(e.$t("greeting")),1),(0,o.Lk)("h2",null,(0,h.v_)(e.$t("message.hello")),1)],64)}var T={name:"i18nPage"};const O=(0,i.A)(T,[["render",E]]);var G=O;const V={class:"form-container"};function A(e,t,a,n,l,s){const c=(0,o.g2)("el-input"),i=(0,o.g2)("el-form-item"),r=(0,o.g2)("el-button"),u=(0,o.g2)("el-form"),d=(0,o.g2)("el-card"),p=(0,o.g2)("el-col"),m=(0,o.g2)("el-row");return(0,o.uX)(),(0,o.Wv)(m,{gutter:0,class:"login-container"},{default:(0,o.k6)((()=>[(0,o.bF)(p,{span:18,md:10,lg:8},{default:(0,o.k6)((()=>[(0,o.bF)(d,{shadow:"hover"},{default:(0,o.k6)((()=>[(0,o.Lk)("div",V,[t[3]||(t[3]=(0,o.Lk)("h2",{class:"title"},"Login...",-1)),(0,o.bF)(u,{ref:"loginForm",model:n.loginForm,rules:n.rules,"label-position":"top"},{default:(0,o.k6)((()=>[(0,o.bF)(i,{label:"Username",prop:"username"},{default:(0,o.k6)((()=>[(0,o.bF)(c,{modelValue:n.loginForm.username,"onUpdate:modelValue":t[0]||(t[0]=e=>n.loginForm.username=e),placeholder:"Enter your username"},null,8,["modelValue"])])),_:1}),(0,o.bF)(i,{label:"Password",prop:"password"},{default:(0,o.k6)((()=>[(0,o.bF)(c,{modelValue:n.loginForm.password,"onUpdate:modelValue":t[1]||(t[1]=e=>n.loginForm.password=e),type:"password",placeholder:"Enter your password"},null,8,["modelValue"])])),_:1}),(0,o.bF)(i,null,{default:(0,o.k6)((()=>[(0,o.bF)(r,{class:"login-button",type:"primary",onClick:n.handleLogin},{default:(0,o.k6)((()=>t[2]||(t[2]=[(0,o.eW)("Login")]))),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules"])]),(0,o.bF)(r,{onClick:n.toggleTheme,class:"toggle-button"},{default:(0,o.k6)((()=>[(0,o.eW)((0,h.v_)(n.isDarkMode?"切换到白天模式":"切换到夜间模式"),1)])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})}var X=a(953),W={name:"NightMode",setup(){const e=(0,X.Kh)({username:"",password:""}),t={username:[{required:!0,message:"Please input your username",trigger:"blur"}],password:[{required:!0,message:"Please input your password",trigger:"blur"}]},a=()=>{console.log("Login clicked:",e)},n=(0,X.KR)(!1),l=()=>{n.value=!n.value};return(0,o.wB)(n,(e=>{e?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.removeAttribute("data-theme")})),{loginForm:e,rules:t,handleLogin:a,isDarkMode:n,toggleTheme:l}}};const N=(0,i.A)(W,[["render",A],["__scopeId","data-v-03701759"]]);var j=N;const S={class:"left-menu"},U={key:0,class:"menu-container"},D={class:"header"},K=["src"],q=["src"],z={class:"chatgpt-main-container"},B={class:"header"},H={key:0},J=["src"],Q=["src"],$=["src"],R={class:"logo-container"},Y=["src"],Z={class:"input-area-container"},ee={class:"input-area-left"},te=["src"],ae=["src"];function ne(e,t,a,l,s,c){const i=(0,o.g2)("el-button"),r=(0,o.g2)("el-image");return(0,o.uX)(),(0,o.CE)("div",{class:(0,h.C4)({"chatgpt-container":!0,"is-collapsed":s.isMenuCollapsed})},[(0,o.Lk)("div",S,[s.isMenuCollapsed?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.CE)("div",U,[(0,o.Lk)("div",D,[(0,o.bF)(i,{class:"chatgpt-menu-button icon-button"},{default:(0,o.k6)((()=>[(0,o.Lk)("img",{src:s.isMobile?s.mobileMenuIcon:s.menuIcon,alt:"ChatGPT Menu Icon",class:"menu-icon",onClick:t[0]||(t[0]=(...e)=>c.toggleMenu&&c.toggleMenu(...e))},null,8,K)])),_:1}),(0,o.bF)(i,{class:"chatgpt-menu-button icon-button"},{default:(0,o.k6)((()=>[(0,o.Lk)("img",{src:s.newChatIcon,alt:"ChatGPT Menu Icon",class:"menu-icon"},null,8,q)])),_:1})])]))]),(0,o.Lk)("div",z,[(0,o.Lk)("div",B,[c.isMainContainerMenuItemShow?((0,o.uX)(),(0,o.CE)("div",H,[(0,o.bF)(i,{class:"chatgpt-button icon-button"},{default:(0,o.k6)((()=>[(0,o.Lk)("img",{src:s.isMobile?s.mobileMenuIcon:s.menuIcon,alt:"ChatGPT Menu Icon",class:"menu-icon",onClick:t[1]||(t[1]=(...e)=>c.toggleMenu&&c.toggleMenu(...e))},null,8,J)])),_:1}),(0,o.bF)(i,{class:"chatgpt-button icon-button"},{default:(0,o.k6)((()=>[(0,o.Lk)("img",{src:s.newChatIcon,alt:"ChatGPT Menu Icon",class:"menu-icon"},null,8,Q)])),_:1})])):(0,o.Q3)("",!0),(0,o.bF)(i,{class:"chatgpt-model-select-button icon-button"},{default:(0,o.k6)((()=>[t[3]||(t[3]=(0,o.eW)(" ChatGPT 4o ")),(0,o.Lk)("img",{src:s.arrowDownIcon,alt:"ChatGPT Menu Icon",class:"chatgpt-model-select-icon menu-icon"},null,8,$)])),_:1}),(0,o.Lk)("div",null,[(0,o.bF)(r,{src:s.avatarIcon,alt:"ChatGPT Menu Icon",class:"chatgpt-avatar-icon"},null,8,["src"])])]),(0,o.Lk)("div",R,[(0,o.Lk)("img",{src:s.logoIcon,alt:"ChatGPT Icon",class:"chatgpt-logo-icon"},null,8,Y)]),(0,o.Lk)("div",Z,[(0,o.Lk)("div",ee,[(0,o.Lk)("img",{src:s.linkIcon,alt:"ChatGPT Icon",class:"chatgpt-link-icon input-area-icon"},null,8,te),(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[2]||(t[2]=t=>e.inputValue=t),placeholder:"给“ChatGPT”发送信息",class:"chatgpt-input"},null,512),[[n.Jo,e.inputValue]])]),(0,o.bF)(i,{class:"chatgpt-send-button"},{default:(0,o.k6)((()=>[(0,o.Lk)("img",{src:s.sendIcon,alt:"ChatGPT Icon",class:"chatgpt-send-icon input-area-icon"},null,8,ae)])),_:1})])])],2)}var oe={name:"ChatGPT",data(){return{isMenuCollapsed:!1,isMobile:!1,menuIcon:a(211),mobileMenuIcon:a(528),newChatIcon:a(691),arrowDownIcon:a(832),avatarIcon:"https://blog-1307107697.cos.ap-shanghai.myqcloud.com/logo.png",logoIcon:a(259),linkIcon:a(466),sendIcon:a(494)}},methods:{toggleMenu(){this.isMenuCollapsed=!this.isMenuCollapsed},handleMediaChange(e){this.isMobile=e.matches}},computed:{isMainContainerMenuItemShow(){return!!this.isMobile||this.isMenuCollapsed}},mounted(){const e=window.matchMedia("(max-width: 600px)");e.addEventListener("change",this.handleMediaChange),this.handleMediaChange(e)},beforeUnmount(){const e=window.matchMedia("(max-width: 600px)");e.removeEventListener("change",this.handleMediaChange)}};const le=(0,i.A)(oe,[["render",ne],["__scopeId","data-v-d1c3b7a8"]]);var se=le;const ce=[{path:"/multi_column_layout",component:_},{path:"/navigation_bar",component:P},{path:"/i18n",component:G},{path:"/night_mode",component:j},{path:"/chatgpt",component:se}],ie=(0,p.aE)({history:(0,p.Bt)("/Vue-example/"),routes:ce});var re=ie,ue=a(682),de=JSON.parse('{"greeting":"Hello","message":{"hello":"This is my I18N page"}}'),pe=JSON.parse('{"greeting":"你好","message":{"hello":"这是我的I18N页面"}}');const he=()=>{const e=navigator.language||navigator.userLanguage;return e.includes("zh")?"zh":"en"},me=(0,ue.hU)({locale:he(),fallbackLocale:"en",messages:{en:de,zh:pe}}),ge=(0,n.Ef)(u);ge.use(d.A),ge.use(re),ge.use(me),ge.mount("#app")},832:function(e,t,a){e.exports=a.p+"img/chatgpt-arrow-down-icon.a14471e7.svg"},466:function(e,t,a){e.exports=a.p+"img/chatgpt-link.09e990b3.svg"},259:function(e,t,a){e.exports=a.p+"img/chatgpt-logo.a15b1bcb.svg"},211:function(e,t,a){e.exports=a.p+"img/chatgpt-menu.17978537.svg"},528:function(e,t,a){e.exports=a.p+"img/chatgpt-mobile-menu.6bdd403c.svg"},691:function(e,t,a){e.exports=a.p+"img/chatgpt-new-chat.8bfaa256.svg"},494:function(e,t,a){e.exports=a.p+"img/chatgpt-send-icon.e7d64ab1.svg"}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var l=t[n]={exports:{}};return e[n].call(l.exports,l,l.exports,a),l.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,l){if(!n){var s=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],l=e[u][2];for(var c=!0,i=0;i<n.length;i++)(!1&l||s>=l)&&Object.keys(a.O).every((function(e){return a.O[e](n[i])}))?n.splice(i--,1):(c=!1,l<s&&(s=l));if(c){e.splice(u--,1);var r=o();void 0!==r&&(t=r)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[n,o,l]}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/Vue-example/"}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,l,s=n[0],c=n[1],i=n[2],r=0;if(s.some((function(t){return 0!==e[t]}))){for(o in c)a.o(c,o)&&(a.m[o]=c[o]);if(i)var u=i(a)}for(t&&t(n);r<s.length;r++)l=s[r],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(u)},n=self["webpackChunkvue_example"]=self["webpackChunkvue_example"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(289)}));n=a.O(n)})();
//# sourceMappingURL=app.9c6e2a48.js.map