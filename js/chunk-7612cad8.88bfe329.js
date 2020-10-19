(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7612cad8"],{"17b3":function(t,e,a){},"45bf":function(t,e,a){},"4be8":function(t,e,a){},"4dd3":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"leads-page"},[a("v-container",{staticClass:"py-0"},[a("v-row",{staticClass:"leads-page__header"},[a("v-col",{staticClass:"d-flex justify-space-between align-center",class:{white:t.$vuetify.breakpoint.xsOnly},attrs:{cols:"12",sm:"7",xs:"12"}},[a("h1",[t._v("Total "+t._s(t.totalLeads)+" leads")]),a("v-btn",{staticClass:"d-flex d-sm-none",attrs:{icon:"",color:"#076DC1"},on:{click:function(e){return t.toggleMobileFilter(!0)}}},[a("v-icon",[t._v("mdi-tune")])],1)],1),a("v-col",{staticClass:"leads-page__header__filters d-flex",attrs:{cols:"12",sm:"5",xs:"12"}},[a("v-text-field",{staticClass:"search-input mr-2",attrs:{"append-icon":t.$vuetify.breakpoint.xsOnly?"mdi-magnify":"",label:"Search by name, phone or email",outlined:"",flat:"",solo:"",dense:"","hide-details":"",height:"48"},on:{input:t.onSearchInput},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("v-select",{staticClass:"status-select d-none d-sm-flex",attrs:{"append-icon":"mdi-chevron-down",items:t.statusList,label:"Show all leads",outlined:"",flat:"",solo:"",dense:"","hide-details":"",height:"48"},on:{change:t.onStatusSelect},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}})],1)],1),a("lead-table"),a("v-row",[a("v-col",{staticClass:"paginator",attrs:{cols:"12",xs:"12"}},[t.totalPages?a("v-pagination",{attrs:{length:t.totalPages},on:{input:t.loadList},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}}):t._e()],1)],1)],1),a("mobile-filter",{directives:[{name:"show",rawName:"v-show",value:t.isShowMobileFilter,expression:"isShowMobileFilter"}],on:{"on-close":function(e){return t.toggleMobileFilter(!1)}}})],1)},i=[],n=a("9ab4"),r=a("4bb5"),o=a("60a3"),l=a("feb4"),c=a("9cc0");function u(t,e,a){var s;return void 0===e&&(e=50),void 0===a&&(a={isImmediate:!1}),function(){for(var i=[],n=0;n<arguments.length;n++)i[n]=arguments[n];var r=this,o=function(){s=void 0,a.isImmediate||t.apply(r,i)},l=a.isImmediate&&void 0===s;void 0!==s&&clearTimeout(s),s=setTimeout(o,e),l&&t.apply(r,i)}}var d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"lead-table"},[t.$vuetify.breakpoint.xsOnly?a("div",t._l(t.leadList,(function(e){return a("v-card",{key:e.id,staticClass:"mb-2",attrs:{ripple:!1},on:{click:function(a){return t.openLead(e)}}},[a("v-card-text",[a("div",[t._v(t._s(t.getStatusByCode(e.leadStatus)))]),a("div",{staticClass:"name"},[t._v(t._s(e.customerInfo.name))]),a("div",[t._v(t._s(e.job))]),a("div",[t._v(t._s(e.customerInfo.phone))]),a("div",{staticClass:"d-flex justify-space-between"},[a("div",[t._v(t._s(t._f("formatDate")(e.updatedDate)))]),a("div",{staticClass:"font-weight-bold"},[t._v(t._s(e.price.symbol)+t._s(e.price.amount))])])])],1)})),1):a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",t._l(t.tableHeaders,(function(e,s){return a("th",{key:s,staticClass:"text-left"},[t._v(" "+t._s(e)+" ")])})),0)]),a("tbody",t._l(t.leadList,(function(e){return a("tr",{key:e.id,on:{click:function(a){return t.openLead(e)}}},[a("td",[t._v(t._s(t.getStatusByCode(e.leadStatus)))]),a("td",{staticClass:"name"},[t._v(t._s(e.customerInfo.name))]),a("td",[t._v(t._s(e.job))]),a("td",[t._v(t._s(e.customerInfo.phone))]),a("td",[t._v(t._s(e.price.symbol)+t._s(e.price.amount))]),a("td",[t._v(t._s(t._f("formatDate")(e.updatedDate)))])])})),0)]},proxy:!0}])})],1)},p=[],h="lead",b=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tableHeaders=["Status","Name","Job","Phone","Value","Updated"],e}return Object(n["d"])(e,t),e.prototype.openLead=function(t){this.setCurrentLead(t),this.$router.push("/lead/"+t.id)},Object(n["c"])([Object(r["c"])("list",{namespace:h})],e.prototype,"leadList",void 0),Object(n["c"])([Object(r["b"])(c["a"],{namespace:h})],e.prototype,"setCurrentLead",void 0),e=Object(n["c"])([Object(o["a"])({filters:{formatDate:function(t){if(!t)return"";var e=new Date(t);return e.getDate()+"/"+(e.getMonth()+1)+"/"+e.getFullYear()}},methods:{getStatusByCode:l["a"].getStatusByCode}})],e),e}(o["b"]),v=b,f=v,m=(a("e8b1"),a("2877")),g=a("6544"),y=a.n(g),_=a("b0af"),j=a("99d9"),O=(a("8b37"),a("80d2")),x=a("7560"),S=a("58df"),C=Object(S["a"])(x["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(O["d"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}}),L=Object(m["a"])(f,d,p,!1,null,"99ca8264",null),$=L.exports;y()(L,{VCard:_["a"],VCardText:j["a"],VSimpleTable:C});var w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",{staticClass:"mobile-filter d-flex flex-column"},[a("div",{staticClass:"d-flex justify-space-between"},[a("h1",{staticClass:"d-flex align-center"},[t._v("Filter:")]),a("v-btn",{attrs:{icon:"",color:"#94A2B2"},on:{click:function(e){return t.$emit("on-close")}}},[a("v-icon",[t._v("mdi-close")])],1)],1),a("div",{staticClass:"mt-5"},[a("v-select",{staticClass:"status-select",attrs:{"append-icon":"mdi-chevron-down",items:t.statusList,label:"Status",outlined:"",flat:"",solo:"",dense:"","hide-details":"",height:"48"},on:{change:t.onStatusSelect},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}})],1),a("div",{staticClass:"mt-auto mb-5 text-center"},[a("a",{on:{click:t.resetAll}},[t._v("Reset all")])])])],1)},F=[],I="lead",k=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.statusList=Object.entries(l["a"].statusList).map((function(t){var e=t[0],a=t[1];return{value:e,text:a}})),e}return Object(n["d"])(e,t),Object.defineProperty(e.prototype,"status",{get:function(){return this.statusFilter},set:function(t){},enumerable:!1,configurable:!0}),e.prototype.onStatusSelect=function(t){this.setStatusFilter(t),this.setCurrentPage(1),this.loadList()},e.prototype.resetAll=function(){this.setSearchFilter(""),this.setStatusFilter(""),this.setCurrentPage(1),this.loadList()},Object(n["c"])([Object(r["c"])("statusFilter",{namespace:I})],e.prototype,"statusFilter",void 0),Object(n["c"])([Object(r["b"])(c["d"],{namespace:I})],e.prototype,"setSearchFilter",void 0),Object(n["c"])([Object(r["b"])(c["e"],{namespace:I})],e.prototype,"setStatusFilter",void 0),Object(n["c"])([Object(r["b"])(c["b"],{namespace:I})],e.prototype,"setCurrentPage",void 0),Object(n["c"])([Object(r["a"])("list",{namespace:I})],e.prototype,"loadList",void 0),e=Object(n["c"])([o["a"]],e),e}(o["b"]),P=k,V=P,B=(a("82eb"),a("8336")),M=a("a523"),A=a("132d"),D=a("b974"),E=Object(m["a"])(V,w,F,!1,null,"85800646",null),N=E.exports;y()(E,{VBtn:B["a"],VContainer:M["a"],VIcon:A["a"],VSelect:D["a"]});var T="lead",R=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.isShowMobileFilter=!1,e.statusList=Object.entries(l["a"].statusList).map((function(t){var e=t[0],a=t[1];return{value:e,text:a}})),e}return Object(n["d"])(e,t),Object.defineProperty(e.prototype,"search",{get:function(){return this.searchFilter},set:function(t){},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"status",{get:function(){return this.statusFilter},set:function(t){},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"page",{get:function(){return this.currentPage},set:function(t){this.setCurrentPage(t)},enumerable:!1,configurable:!0}),e.prototype.beforeMount=function(){this.leadList.length||this.loadList(),this.onSearchInput=u(this.onSearchInput,500)},e.prototype.onSearchInput=function(t){this.setSearchFilter(t),this.setCurrentPage(1),this.loadList()},e.prototype.onStatusSelect=function(t){this.setStatusFilter(t),this.setCurrentPage(1),this.loadList()},e.prototype.toggleMobileFilter=function(t){this.isShowMobileFilter=t,t?document.documentElement.classList.add("no-scroll"):document.documentElement.classList.remove("no-scroll")},Object(n["c"])([Object(r["c"])("list",{namespace:T})],e.prototype,"leadList",void 0),Object(n["c"])([Object(r["c"])("currentPage",{namespace:T})],e.prototype,"currentPage",void 0),Object(n["c"])([Object(r["c"])("searchFilter",{namespace:T})],e.prototype,"searchFilter",void 0),Object(n["c"])([Object(r["c"])("statusFilter",{namespace:T})],e.prototype,"statusFilter",void 0),Object(n["c"])([Object(r["c"])("totalElements",{namespace:T})],e.prototype,"totalLeads",void 0),Object(n["c"])([Object(r["c"])("totalPages",{namespace:T})],e.prototype,"totalPages",void 0),Object(n["c"])([Object(r["a"])("list",{namespace:T})],e.prototype,"loadList",void 0),Object(n["c"])([Object(r["b"])(c["d"],{namespace:T})],e.prototype,"setSearchFilter",void 0),Object(n["c"])([Object(r["b"])(c["e"],{namespace:T})],e.prototype,"setStatusFilter",void 0),Object(n["c"])([Object(r["b"])(c["b"],{namespace:T})],e.prototype,"setCurrentPage",void 0),e=Object(n["c"])([Object(o["a"])({components:{LeadTable:$,MobileFilter:N}})],e),e}(o["b"]),z=R,H=z,W=(a("ad8d"),a("62ad")),J=(a("17b3"),a("9d26")),q=a("dc22"),U=a("a9ad"),Y=a("de2c"),G=Object(S["a"])(U["a"],Object(Y["a"])({onVisible:["init"]}),x["a"]).extend({name:"v-pagination",directives:{Resize:q["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:t=>t%1===0},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data(){return{maxButtons:0,selected:null}},computed:{classes(){return{"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled,...this.themeClasses}},items(){const t=parseInt(this.totalVisible,10),e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);const a=e%2===0?1:0,s=Math.floor(e/2),i=this.length-s+1+a;if(this.value>s&&this.value<i){const t=this.value-s+2,e=this.value+s-2-a;return[1,"...",...this.range(t,e),"...",this.length]}if(this.value===s){const t=this.value+s-1-a;return[...this.range(1,t),"...",this.length]}if(this.value===i){const t=this.value-s+1;return[1,"...",...this.range(t,this.length)]}return[...this.range(1,s),"...",...this.range(i,this.length)]}},watch:{value(){this.init()}},mounted(){this.init()},methods:{init(){this.selected=null,this.$nextTick(this.onResize),setTimeout(()=>this.selected=this.value,100)},onResize(){const t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range(t,e){const a=[];t=t>0?t:1;for(let s=t;s<=e;s++)a.push(s);return a},genIcon(t,e,a,s,i){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":a},attrs:{type:"button","aria-label":i},on:a?{}:{click:s}},[t(J["a"],[e])])])},genItem(t,e){const a=e===this.value&&(this.color||"primary"),s=e===this.value,i=s?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(a,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":s,"aria-label":this.$vuetify.lang.t(i,e)},on:{click:()=>this.$emit("input",e)}}),[e.toString()])},genItems(t){return this.items.map((e,a)=>t("li",{key:a},[isNaN(Number(e))?t("span",{class:"v-pagination__more"},[e.toString()]):this.genItem(t,e)]))},genList(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render(t){const e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}}),K=a("0fd9"),Q=a("8654"),X=Object(m["a"])(H,s,i,!1,null,"7b6b31f4",null);e["default"]=X.exports;y()(X,{VBtn:B["a"],VCol:W["a"],VContainer:M["a"],VIcon:A["a"],VPagination:G,VRow:K["a"],VSelect:D["a"],VTextField:Q["a"]})},"82eb":function(t,e,a){"use strict";var s=a("9d2f"),i=a.n(s);i.a},"8b37":function(t,e,a){},"9d2f":function(t,e,a){},ad8d:function(t,e,a){"use strict";var s=a("4be8"),i=a.n(s);i.a},e8b1:function(t,e,a){"use strict";var s=a("45bf"),i=a.n(s);i.a}}]);
//# sourceMappingURL=chunk-7612cad8.88bfe329.js.map