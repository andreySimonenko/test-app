(function(t){function e(e){for(var r,a,c=e[0],i=e[1],s=e[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);d&&d(e);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o={app:0},u=[];function c(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-718300a8":"6890839d","chunk-6e417c33":"85a3a7ed","chunk-27a01af6":"0c048e30","chunk-7612cad8":"88bfe329","chunk-6f4a3e2f":"7b256099"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-718300a8":1,"chunk-6e417c33":1,"chunk-27a01af6":1,"chunk-7612cad8":1,"chunk-6f4a3e2f":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-718300a8":"eaf004bc","chunk-6e417c33":"09a827ab","chunk-27a01af6":"f30c6ee9","chunk-7612cad8":"871d9af2","chunk-6f4a3e2f":"612f5ebf"}[t]+".css",o=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||o,u=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[t],d.parentNode.removeChild(d),n(u)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var u=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(t);var f=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/test-app/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"6e39":function(t,e,n){},"9cc0":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return c})),n.d(e,"d",(function(){return i})),n.d(e,"e",(function(){return s})),n.d(e,"b",(function(){return l}));var r="LEAD",a=r+"/SET_CURRENT",o=r+"/SET_LIST",u=r+"/SET_TOTAL_ELEMENTS",c=r+"/SET_TOTAL_PAGES",i=r+"/SET_SEARCH_FILTER",s=r+"/SET_STATUS_FILTER",l=r+"/SET_CURRENT_PAGE"},cd49:function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary"}},[n("div",{staticClass:"d-flex align-center white--text logo"},[t._v(" CRM ")]),n("v-spacer"),t.isAuthStatus?n("v-btn",{staticClass:"logout",attrs:{color:"white",small:""},on:{click:t.onLogout}},[n("span",[t._v("Sign out")])]):t._e()],1),n("v-main",[n("router-view")],1),n("v-footer",[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" © "+t._s((new Date).getFullYear())+" — CRM ")])],1)],1)},o=[],u=n("9ab4"),c=n("4bb5"),i=n("60a3"),s="auth",l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(u["d"])(e,t),e.prototype.onLogout=function(){this.logout(),this.$router.push("login")},Object(u["c"])([Object(c["c"])("isAuthStatus",{namespace:s})],e.prototype,"isAuthStatus",void 0),Object(u["c"])([Object(c["a"])("logout",{namespace:s})],e.prototype,"logout",void 0),e=Object(u["c"])([Object(i["a"])({name:"App"})],e),e}(i["b"]),f=l,d=f,p=(n("e8a4"),n("2877")),h=n("6544"),m=n.n(h),g=n("7496"),v=n("40dc"),b=n("8336"),S=n("62ad"),E=n("553a"),y=n("f6c4"),_=n("2fa4"),A=Object(p["a"])(d,a,o,!1,null,"796d8336",null),O=A.exports;m()(A,{VApp:g["a"],VAppBar:v["a"],VBtn:b["a"],VCol:S["a"],VFooter:E["a"],VMain:y["a"],VSpacer:_["a"]});var T,j,k=n("2f62"),w="AUTH",P=w+"/SET_STATUS",C=n("bc3a"),L=n.n(C),I=n("4328"),R=n.n(I),M="https://test-contractorfinder.bradfordwhite.com/",N={"Content-Type":"application/x-www-form-urlencoded","FROM-ANGULAR":"true"},D=function(t,e){return Object(u["b"])(void 0,void 0,Promise,(function(){return Object(u["e"])(this,(function(n){return[2,L.a.post(M+"j_spring_security_check",R.a.stringify({j_username:t,j_password:e}),{headers:N})]}))}))},x=function(){return Object(u["b"])(void 0,void 0,Promise,(function(){return Object(u["e"])(this,(function(t){return[2,L.a.get(M+"j_spring_security_logout")]}))}))},F={login:D,logout:x},U={setAuthStatus:function(t,e){var n=t.commit;n(P,e),localStorage.setItem("isAuth",e?"1":"0")},login:function(t,e){var n=t.dispatch,r=e.email,a=e.password;return F.login(r,a).then((function(t){return t&&n("setAuthStatus",!0),t}))},logout:function(t){var e=t.dispatch;e("setAuthStatus",!1),F.logout()}},V=(T={},T[P]=function(t,e){t.isAuthStatus=e},T),B={isAuthStatus:!!parseInt(localStorage.getItem("isAuth")||"")||!1,error:!1},G=!0,H={namespaced:G,state:B,actions:U,mutations:V},q={},$=n("9cc0"),J=n("feb4"),z={list:function(t){var e=t.state,n=t.commit;J["a"].getList(e.searchFilter,e.statusFilter,e.currentPage-1).then((function(t){n($["c"],t.items),n($["f"],t.totalElements),n($["g"],t.totalPages)}),(function(t){console.log(t)}))},item:function(t,e){t.state;var n=t.commit;J["a"].getItem(e).then((function(t){n($["a"],t.item)}),(function(t){console.log(t)}))},updateItemStatus:function(t,e){var n=t.commit;J["a"].updateItemStatus(e).then((function(t){n($["a"],e)}))}},K=(j={},j[$["a"]]=function(t,e){t.currentLead=e},j[$["c"]]=function(t,e){t.list=e},j[$["f"]]=function(t,e){t.totalElements=e},j[$["g"]]=function(t,e){t.totalPages=e},j[$["d"]]=function(t,e){t.searchFilter=e},j[$["e"]]=function(t,e){t.statusFilter=e},j[$["b"]]=function(t,e){t.currentPage=e},j),W={list:[],totalElements:0,totalPages:0,searchFilter:"",statusFilter:"",currentPage:1,currentLead:void 0,error:!1},Y=!0,Q={namespaced:Y,state:W,getters:q,actions:z,mutations:K};r["default"].use(k["a"]);var X={state:{version:"1.0.0"},modules:{auth:H,lead:Q}},Z=new k["a"].Store(X),tt=n("8c4f");r["default"].use(tt["a"]);var et=[{path:"/",alias:"/lead",name:"leads",component:function(){return Promise.all([n.e("chunk-718300a8"),n.e("chunk-6e417c33"),n.e("chunk-7612cad8")]).then(n.bind(null,"4dd3"))}},{path:"/lead/:id",name:"lead",component:function(){return Promise.all([n.e("chunk-718300a8"),n.e("chunk-6e417c33"),n.e("chunk-27a01af6")]).then(n.bind(null,"797e"))}},{path:"/login",name:"login",component:function(){return Promise.all([n.e("chunk-718300a8"),n.e("chunk-6f4a3e2f")]).then(n.bind(null,"013f"))}}],nt=new tt["a"]({mode:"history",base:"/test-app/",routes:et});nt.beforeEach((function(t,e,n){var r,a=["login"],o=!a.includes(t.name||""),u=(null===(r=Z.state.auth)||void 0===r?void 0:r.isAuthStatus)||!1;o&&!u?n("/login"):n()}));var rt=nt,at=n("ce5b"),ot=n.n(at);r["default"].use(ot.a);var ut=new ot.a({icons:{iconfont:"mdiSvg"}}),ct=function(t){return function(e){if(e.data&&"ERROR"===e.data.result){var n=Array.isArray(e.data.techMessages)&&e.data.techMessages.length?e.data.techMessages[0]:"";return n.includes("403")&&(t.dispatch("auth/setAuthStatus",!1,{root:!0}),console.error(n)),!1}if(e.data&&"SUCCESS"===e.data.result)return e.data.data}},it=ct(Z);function st(){L.a.interceptors.request.use((function(t){return t.withCredentials=!0,t})),L.a.interceptors.response.use(it)}n("e7eb");st(),r["default"].config.productionTip=!1,new r["default"]({store:Z,router:rt,vuetify:ut,render:function(t){return t(O)}}).$mount("#app")},e7eb:function(t,e,n){},e8a4:function(t,e,n){"use strict";var r=n("6e39"),a=n.n(r);a.a},feb4:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n("9ab4"),a=n("bc3a"),o=n.n(a),u="https://test-contractorfinder.bradfordwhite.com/api/v2/contrlead",c={NEW:"New",DISMISSED:"Dismissed",IN_PROGRESS:"In Progress",ESTIMATE_SCHEDULED:"Estimate Scheduled",PENDING_ACCEPTANCE:"Pending Acceptance",SERVICE_SCHEDULED:"Service Scheduled",COMPLETED:"Completed",LOST:"Lost"},i=function(t){return c[t]},s=function(t,e,n,a){return void 0===n&&(n=0),void 0===a&&(a=10),Object(r["b"])(void 0,void 0,Promise,(function(){return Object(r["e"])(this,(function(r){return[2,o.a.get(u+"/list",{params:{search:t,status:e,page:n,size:a}})]}))}))},l=function(t){return Object(r["b"])(void 0,void 0,Promise,(function(){return Object(r["e"])(this,(function(e){return[2,o.a.get(u+"/"+t)]}))}))},f=function(t){return Object(r["b"])(void 0,void 0,Promise,(function(){return Object(r["e"])(this,(function(e){return[2,o.a.post(u,Object(r["a"])({},t))]}))}))},d={statusList:c,getStatusByCode:i,getList:s,getItem:l,updateItemStatus:f}}});
//# sourceMappingURL=app.63c67e4f.js.map