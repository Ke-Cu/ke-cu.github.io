(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"062b":function(t,e,a){"use strict";a("e7af")},"1ab2":function(t,e,a){"use strict";a("93d2")},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("home")],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("v-app",{class:t.dark?"bg-dark":"bg-light"},[a("app-bar",{on:{dark:t.toggleTheme,navItem:t.getNavItem}}),a("v-main",[a("list",{attrs:{dark:t.dark}})],1),a("v-footer",{attrs:{app:""}})],1)],1)},s=[],l=a("bc3a"),c=a.n(l);const u={baseURL:"http://106.55.179.247:5000/accounting/",timeout:2e4,headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/json; charset=UTF-8"}},d=(t,e=!0)=>{let a=c.a.create({...u,...t});return a.interceptors.response.use(t=>e?void 0===t.data.data?t.data:t.data.data:t.data,async t=>(console.error(t.message),Promise.reject(t))),a};var p=d;const m=p({}),{get:v}=m,f={getToday:async()=>v("today"),getScopeAmount:async t=>v("recentdays",{params:t})};var h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-bar"},[a("v-app-bar",{attrs:{color:"#f9e5de",dense:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!0}}}),a("v-toolbar-title",[t._v(t._s(t.title))]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:t.toggleTheme}},[a("v-icon",{class:t.dark?"dark":"light"},[t._v("mdi-brightness-2")])],1)],1),a("v-navigation-drawer",{attrs:{absolute:"",temporary:"",dark:t.dark},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item-group",{model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},t._l(t.listItems,(function(e,n){return a("v-list-item",{key:n,on:{click:function(e){return t.clickItem(n)}}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-title",[t._v(" "+t._s(e.text)+" ")])],1)})),1)],1)],1)],1)},b=[],g={name:"AppBar",data(){return{title:"今日明细",dark:!1,drawer:!1,group:0,listItems:[{icon:"mdi-calendar-today",text:"今日明细"},{icon:"mdi-calendar-week",text:"最近一周"},{icon:"mdi-calendar-month",text:"最近一月"},{icon:"mdi-calendar-blank",text:"自定义日期"},{icon:"mdi-cog",text:"设置"}]}},methods:{toggleTheme(){this.dark=!this.dark,this.$emit("dark",this.dark)},clickItem(t){this.title=this.listItems[t].text,this.drawer=!1}}},y=g,_=(a("b6ea"),a("2877")),k=Object(_["a"])(y,h,b,!1,null,null,null),x=k.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bill-list"},[a("v-simple-table",{attrs:{dark:t.dark},scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",{staticClass:"text-left"},[a("tr",[a("th",[t._v("物品")]),a("th",[t._v("类别")]),a("th",[t._v("价格")])])]),a("tbody",[t._l(t.listData,(function(e){return a("tr",{key:e.name,staticClass:"text-left"},[a("td",{staticStyle:{width:"150px"}},[t._v(t._s(e.item))]),a("td",[t._v(t._s(e.typeName))]),a("td",{staticStyle:{width:"100px"}},[t._v("￥"+t._s(e.amount))])])})),a("tr",[a("td",[t._v("汇总")]),a("td"),a("td",{staticClass:"text-left"},[t._v("￥"+t._s(t.totalAmount))])])],2)]},proxy:!0}])})],1)},j=[],A={name:"BillList",props:{dark:{type:Boolean,default:!1},listData:{type:Array},totalAmount:{type:Number}},data(){return{}}},O=A,S=(a("6958"),Object(_["a"])(O,w,j,!1,null,null,null)),D=S.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"date-picker"},[a("v-date-picker",{attrs:{dark:t.dark,range:"",width:"100%","no-title":"",color:"blue-grey lighten-2"},model:{value:t.dates,callback:function(e){t.dates=e},expression:"dates"}})],1)},P=[],T={name:"DatePicker",props:{dark:{type:Boolean,default:!1}},data(){return{dates:[]}}},I=T,$=(a("a8ae"),Object(_["a"])(I,C,P,!1,null,"23f65016",null)),B=$.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list"},[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"500"}},[a("v-list",{attrs:{dark:t.dark}},[a("v-subheader",[t._v("最近30天")]),a("v-divider"),t._l(t.billData,(function(e,n){return a("v-list-group",{key:n,attrs:{"prepend-icon":"mdi-calendar-week","no-action":"",color:"blue-grey lighten-2 "},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.month+"月"+e.day+"日")}})],1),t._v(" ￥"+t._s(e.dayTotal)+" ")]},proxy:!0}],null,!0),model:{value:e.active,callback:function(a){t.$set(e,"active",a)},expression:"item.active"}},t._l(e.records,(function(e){return a("v-list-item",{key:e.msgId},[a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.item)}}),a("v-list-item-subtitle",[t._v(" "+t._s(e.typeName))])],1),t._v(" "+t._s(e.amount)+" ")],1)})),1)}))],2)],1)],1)},L=[],H={name:"List",props:{dark:{type:Boolean}},data(){return{billData:[]}},mounted(){this.getData()},methods:{async getData(){const t=await f.getScopeAmount({days:30});this.billData=t.reverse(),this.billData[0].active=!0}}},M=H,N=(a("062b"),Object(_["a"])(M,E,L,!1,null,"5d5a90e8",null)),R=N.exports,q={name:"Home",components:{AppBar:x,BillList:D,DatePicker:B,List:R},data(){return{dark:!1,navIndex:0,listData:[],totalAmount:0}},async mounted(){const t=await f.getToday();this.listData=t.details,this.totalAmount=t.totalAmount},methods:{toggleTheme(t){this.dark=t},getNavItem(t){this.navIndex=t,1===t?this.getScopeAmount(7):2===t?this.getScopeAmount(30):0===t&&this.getScopeAmount(1)},async getScopeAmount(t){const e=await f.getScopeAmount({days:t});this.listData=e.details,this.totalAmount=e.totalAmount,console.log(e)}}},z=q,J=(a("1ab2"),Object(_["a"])(z,i,s,!1,null,"0b77c138",null)),U=J.exports,X={components:{Home:U}},F=X,W=Object(_["a"])(F,r,o,!1,null,null,null),G=W.exports,K=a("ce5b"),Q=a.n(K),V=(a("bf40"),a("f531"));n["default"].use(Q.a);var Y=new Q.a({lang:{locales:{zhHans:V["a"]},current:"zhHans"}});n["default"].config.productionTip=!1,new n["default"]({vuetify:Y,render:t=>t(G)}).$mount("#app")},6958:function(t,e,a){"use strict";a("ddb8")},"76f6":function(t,e,a){},"93d2":function(t,e,a){},a8ae:function(t,e,a){"use strict";a("c842")},b6ea:function(t,e,a){"use strict";a("76f6")},c842:function(t,e,a){},ddb8:function(t,e,a){},e7af:function(t,e,a){}});
//# sourceMappingURL=app.eba33e7b.js.map