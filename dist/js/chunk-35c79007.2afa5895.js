(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35c79007"],{1331:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=(0,r.regex)("integer",/^-?[0-9]*$/);e.default=i},"1f62":function(t,e,a){t.exports=a.p+"img/avatar-4.bae8e081.jpg"},"2a12":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=function(t){return(0,r.withParams)({type:"maxLength",max:t},(function(e){return!(0,r.req)(e)||(0,r.len)(e)<=t}))};e.default=i},3360:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return(0,r.withParams)({type:"and"},(function(){for(var t=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return e.length>0&&e.reduce((function(e,a){return e&&a.apply(t,r)}),!0)}))};e.default=i},"3a54":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=(0,r.regex)("alphaNum",/^[a-zA-Z0-9]*$/);e.default=i},"45b8":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=(0,r.regex)("numeric",/^[0-9]*$/);e.default=i},"46bc":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=function(t){return(0,r.withParams)({type:"maxValue",max:t},(function(e){return!(0,r.req)(e)||(!/\s/.test(e)||e instanceof Date)&&+e<=+t}))};e.default=i},5092:function(t,e,a){t.exports=a.p+"img/avatar-9.bae8e081.jpg"},"5d75":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/,s=(0,r.regex)("email",i);e.default=s},"5db3":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=function(t){return(0,r.withParams)({type:"minLength",min:t},(function(e){return!(0,r.req)(e)||(0,r.len)(e)>=t}))};e.default=i},"5dbc":function(t,e,a){var r=a("d3f4"),i=a("8b97").set;t.exports=function(t,e,a){var s,n=e.constructor;return n!==a&&"function"==typeof n&&(s=n.prototype)!==a.prototype&&r(s)&&i&&i(t,s),t}},6235:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=(0,r.regex)("alpha",/^[a-zA-Z]*$/);e.default=i},6417:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=function(t){return(0,r.withParams)({type:"not"},(function(e,a){return!(0,r.req)(e)||!t.call(this,e,a)}))};e.default=i},"772d":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,s=(0,r.regex)("url",i);e.default=s},"78ef":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"withParams",{enumerable:!0,get:function(){return r.default}}),e.regex=e.ref=e.len=e.req=void 0;var r=i(a("8750"));function i(t){return t&&t.__esModule?t:{default:t}}function s(t){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}var n=function(t){if(Array.isArray(t))return!!t.length;if(void 0===t||null===t)return!1;if(!1===t)return!0;if(t instanceof Date)return!isNaN(t.getTime());if("object"===s(t)){for(var e in t)return!0;return!1}return!!String(t).length};e.req=n;var o=function(t){return Array.isArray(t)?t.length:"object"===s(t)?Object.keys(t).length:String(t).length};e.len=o;var l=function(t,e,a){return"function"===typeof t?t.call(e,a):a[t]};e.ref=l;var c=function(t,e){return(0,r.default)({type:t},(function(t){return!n(t)||e.test(t)}))};e.regex=c},8750:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r="web"===Object({NODE_ENV:"production",BASE_URL:"/"}).BUILD?a("cb69").withParams:a("0234").withParams,i=r;e.default=i},"8b97":function(t,e,a){var r=a("d3f4"),i=a("cb7c"),s=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,a){return s(t,a),e?t.__proto__=a:r(t,a),t}}({},!1):void 0),check:s}},"8cad":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("div",{staticClass:"row page-title align-items-center"},[a("div",{staticClass:"col-sm-4 col-xl-6"},[a("h4",{staticClass:"mb-1 mt-0"},[t._v("Dashboard")])]),a("div",{staticClass:"col-sm-8 col-xl-6"},[a("form",{staticClass:"form-inline float-sm-right mt-3 mt-sm-0"},[a("div",{staticClass:"form-group mb-sm-0 mr-2"},[a("flat-pickr",{staticClass:"form-control",attrs:{config:t.dateConfig,name:"date"},model:{value:t.selectedDate,callback:function(e){t.selectedDate=e},expression:"selectedDate"}})],1),a("div",{staticClass:"btn-group"},[a("b-dropdown",{attrs:{variant:"primary",right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[a("i",{staticClass:"uil uil-file-alt mr-1"}),t._v("Descargar\n\t\t\t\t\t\t\t"),a("i",{staticClass:"icon"},[a("feather",{staticClass:"align-middle",attrs:{type:"chevron-down"}})],1)]},proxy:!0}])},[a("b-dropdown-item",{staticClass:"notify-item",attrs:{href:"#"}},[a("feather",{staticClass:"icon-dual icon-xs mr-2 align-middle",attrs:{type:"mail"}}),a("span",[t._v("Email")])],1),a("b-dropdown-item",{staticClass:"notify-item",attrs:{href:"#"}},[a("feather",{staticClass:"icon-dual icon-xs mr-2 align-middle",attrs:{type:"printer"}}),a("span",[t._v("Imprimir")])],1),a("b-dropdown-divider"),a("b-dropdown-item",{staticClass:"notify-item",attrs:{href:"#"}},[a("feather",{staticClass:"icon-dual icon-xs mr-2 align-middle",attrs:{type:"file"}}),a("span",[t._v("Re-Generar")])],1)],1)],1)])])]),a("div",{staticClass:"row"},t._l(t.statChart,(function(t){return a("div",{key:t.mainTitle,staticClass:"col-md-6 col-xl-3"},[a("StatChart",{attrs:{"main-title":t.mainTitle,value:t.value,"sub-value":t.subValue,"chart-color":t.chartColor}})],1)})),0),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-3"},[a("Overview",{attrs:{items:t.overviewData}})],1),a("div",{staticClass:"col-xl-6"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body pb-0"},[a("ul",{staticClass:"nav card-nav float-right"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link text-muted",attrs:{href:"javascript: void(0);"}},[t._v("HOY")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link text-muted",attrs:{href:"javascript: void(0);"}},[t._v("7d")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link active",attrs:{href:"javascript: void(0);"}},[t._v("15d")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link text-muted",attrs:{href:"javascript: void(0);"}},[t._v("1m")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link text-muted",attrs:{href:"javascript: void(0);"}},[t._v("1y")])])]),a("h5",{staticClass:"card-title mb-0 header-title"},[t._v("Ingresos")]),a("apexchart",{attrs:{type:"area",height:"296",series:t.revenueAreaChart.series,options:t.revenueAreaChart.chartOptions}})],1)])]),a("div",{staticClass:"col-xl-3"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body pb-0"},[a("h5",{staticClass:"card-title header-title"},[t._v("Objetivos")]),a("div",{staticClass:"mt-3"},[a("apexchart",{attrs:{type:"bar",height:"282",series:t.targetsBarChart.series,options:t.targetsBarChart.chartOptions}})],1)])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-5"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title mt-0 pb-2 header-title"},[t._v("Ventas Por Categorías")]),a("apexchart",{attrs:{type:"donut",height:"304",series:t.salesDonutChart.series,options:t.salesDonutChart.chartOptions}})],1)])]),a("div",{staticClass:"col-xl-7"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("a",{staticClass:"btn btn-primary btn-sm float-right",attrs:{href:"javascript: void(0);"}},[a("i",{staticClass:"uil uil-export ml-1"}),t._v(" Exportar\n\t\t\t\t\t")]),a("h5",{staticClass:"card-title mt-0 mb-0 header-title"},[t._v("Ordenes Recientes")]),a("div",{staticClass:"table-responsive mt-4 mb-0"},[a("b-table-simple",{staticClass:"table table-hover table-nowrap mb-0"},[a("b-thead",{staticClass:"thead-white"},[a("b-tr",[a("b-th",[t._v("#")]),a("b-th",[t._v("Producto")]),a("b-th",[t._v("Cliente")]),a("b-th",[t._v("Precio")]),a("b-th",[t._v("Estado")])],1)],1),a("b-tbody",t._l(t.ordersData,(function(e){return a("b-tr",{key:e.name},[a("b-td",[t._v(t._s(e.id))]),a("b-td",[t._v(t._s(e.product))]),a("b-td",[t._v(t._s(e.name))]),a("b-td",[t._v(t._s(e.price))]),a("b-td",[a("span",{staticClass:"badge",class:{"badge-soft-warning":""+e.status==="Pending","badge-soft-success":""+e.status==="Delivered","badge-soft-danger":""+e.status==="Declined"}},[t._v(t._s(e.status))])])],1)})),1)],1)],1)])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body pt-2 pb-2"},[a("h5",{staticClass:"mb-4 header-title"},[t._v("Top Rendimiento")]),t._l(t.membersData,(function(t){return a("div",{key:t.name},[a("Member",{attrs:{image:t.image,name:t.name,text:t.text}})],1)}))],2)])]),a("div",{staticClass:"col-xl-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body pt-2 pb-3"},[a("router-link",{staticClass:"btn btn-primary btn-sm mt-2 float-right",attrs:{to:"/task/list"}},[t._v("Ver Todo")]),a("h5",{staticClass:"mb-4 header-title"},[t._v("Tareas")]),a("VuePerfectScrollbar",{staticStyle:{"max-height":"390px"}},[a("div",t._l(t.tasksData,(function(t){return a("div",{key:t.id},[a("Task",{attrs:{id:t.id,text:t.text,title:t.title}})],1)})),0)])],1)])]),a("div",{staticClass:"col-xl-4"},[a("Chat",{attrs:{"chat-window-height":t.maxHeight,messages:t.chatMessages,title:"Conversacion reciente"}})],1)])])},i=[],s=a("9d63"),n=a.n(s),o=a("c2a4"),l=a("444f"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-body p-0"},[a("div",{staticClass:"media p-3"},[a("div",{staticClass:"media-body"},[a("span",{staticClass:"text-muted text-uppercase font-size-12 font-weight-bold"},[t._v(t._s(t.mainTitle))]),a("h2",{staticClass:"mb-0"},[t._v(t._s(t.value))])]),a("div",{staticClass:"align-self-center"},[a("apexchart",{staticClass:"apex-chart-widget",attrs:{type:"area",height:"45",width:"90",series:t.series,options:t.chartOptions}}),a("span",{staticClass:"text-success font-weight-bold font-size-13",class:{"text-danger":""+t.subValue==="5.05%"}},[a("i",{staticClass:"uil",class:{"uil uil-arrow-down":"5.05%"===t.subValue,"uil uil-arrow-up":"5.05%"!==t.subValue}}),t._v("\n          "+t._s(t.subValue)+"\n        ")])],1)])])])},u=[],d=(a("c5f6"),{props:{mainTitle:{type:String,default:""},value:{type:Number,default:0},subValue:{type:String,default:""},chartColor:{type:String,default:"#5369f8"}},data:function(){return{series:[{data:[25,66,41,85,63,25,44,12,36,9,54]}],chartOptions:{chart:{sparkline:{enabled:!0},parentHeightOffset:0,toolbar:{show:!1}},colors:[this.chartColor],height:45,width:90,markers:{size:0},fill:{type:"gradient",gradient:{type:"vertical",shadeIntensity:1,inverseColors:!1,opacityFrom:.45,opacityTo:.05,stops:[45,100]}},tooltip:{theme:"dark",fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(t){return""}}},marker:{show:!1}},stroke:{width:2,curve:"smooth"}}}}}),f=d,p=a("2877"),m=Object(p["a"])(f,c,u,!1,null,null,null),v=m.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-body p-0"},[a("h5",{staticClass:"card-title header-title border-bottom p-3 mb-0"},[t._v("Overview")]),t._l(t.items,(function(e){return a("div",{key:e.title,staticClass:"media px-3",class:e.class},[a("div",{staticClass:"media-body"},[a("h4",{staticClass:"mt-0 mb-1 font-size-22 font-weight-normal"},[t._v(t._s(e.value))]),a("span",{staticClass:"text-muted"},[t._v(t._s(e.title))])]),a("feather",{staticClass:"icon-dual icon-lg align-self-center",attrs:{type:e.icon}})],1)}))],2)])},b=[],g={props:{title:{type:String,default:"Overview"},items:{type:Array,default:function(){return[]}}}},y=g,_=Object(p["a"])(y,h,b,!1,null,null,null),C=_.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"media mt-1 border-top pt-3"},[a("img",{staticClass:"avatar rounded mr-3",attrs:{src:""+t.image,alt:"shreyu"}}),a("div",{staticClass:"media-body"},[a("h6",{staticClass:"mt-1 mb-0 font-size-15"},[t._v(t._s(t.name))]),a("h6",{staticClass:"text-muted font-weight-normal mt-1 mb-3"},[t._v(t._s(t.text))])]),a("b-dropdown",{attrs:{variant:"black",right:"","toggle-class":"arrow-none text-muted pr-0"},scopedSlots:t._u([{key:"button-content",fn:function(){return[a("i",{staticClass:"uil uil-ellipsis-v"})]},proxy:!0}])},[a("b-dropdown-item",{attrs:{href:"javascript:void(0);"}},[a("i",{staticClass:"uil uil-edit-alt mr-2"}),t._v("Edit\n      ")]),a("b-dropdown-item",{attrs:{href:"javascript:void(0);"}},[a("i",{staticClass:"uil uil-exit mr-2"}),t._v("Remove from Team\n      ")]),a("div",{staticClass:"dropdown-divider"}),a("b-dropdown-item",{attrs:{href:"javascript:void(0);",variant:"danger"}},[a("i",{staticClass:"uil uil-trash mr-2"}),t._v("Delete\n      ")])],1)],1)])},x=[],O={props:{image:{type:String,default:null},name:{type:String,default:null},text:{type:String,default:null}}},P=O,j=Object(p["a"])(P,w,x,!1,null,null,null),S=j.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row mt-2"},[a("div",{staticClass:"col"},[a("div",{staticClass:"custom-control custom-checkbox"},[a("input",{staticClass:"custom-control-input",attrs:{id:"task-"+t.id,type:"checkbox"}}),a("label",{staticClass:"custom-control-label",attrs:{for:"task-"+t.id}},[t._v(t._s(t.title))]),a("p",{staticClass:"font-size-13 text-muted"},[t._v(t._s(t.text))])])])])])},D=[],M={props:{title:{type:String,default:""},text:{type:String,default:""},id:{type:Number,default:0}}},A=M,N=Object(p["a"])(A,k,D,!1,null,null,null),E=N.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-body pt-2"},[a("b-dropdown",{staticClass:"mt-2 float-right",attrs:{variant:"black",right:"","toggle-class":"p-0 arrow-none text-muted"},scopedSlots:t._u([{key:"button-content",fn:function(){return[a("i",{staticClass:"uil uil-ellipsis-v"})]},proxy:!0}])},[a("b-dropdown-item",{attrs:{href:"javascript:void(0);"}},[a("i",{staticClass:"uil uil-refresh mr-2"}),t._v("Refresh\n\t\t\t")]),a("b-dropdown-item",{attrs:{href:"javascript:void(0);"}},[a("i",{staticClass:"uil uil-user-plus mr-2"}),t._v("Add Member\n\t\t\t")]),a("b-dropdown-divider"),a("b-dropdown-item",{attrs:{href:"javascript:void(0);",variant:"danger"}},[a("i",{staticClass:"uil uil-exit mr-2"}),t._v("Edit\n\t\t\t")])],1),a("h5",{staticClass:"mb-4 header-title"},[t._v(t._s(t.title))]),a("VuePerfectScrollbar",{style:"max-height:"+t.chatWindowHeight},[a("div",{staticClass:"chat-conversation"},[a("ul",{staticClass:"conversation-list"},t._l(t.messages,(function(e,r){return a("li",{key:e.id,staticClass:"clearfix",class:{odd:r%2}},[a("div",{staticClass:"chat-avatar"},[a("img",{attrs:{src:""+e.image,alt:"male"}}),a("i",[t._v(t._s(e.time))])]),a("div",{staticClass:"conversation-text"},[a("div",{staticClass:"ctext-wrap"},[a("i",[t._v(t._s(e.name))]),a("p",[t._v(t._s(e.message))])])])])})),0)])]),a("form",{on:{submit:function(e){return e.preventDefault(),t.saveMessage(e)}}},[a("div",{staticClass:"row mt-3"},[a("div",{staticClass:"col-lg-9"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.chats.message,expression:"chats.message"}],staticClass:"form-control",class:{"is-invalid":t.submitform&&t.$v.chats.message.$error},attrs:{id:"message",type:"text",placeholder:"Enter your text",name:"message"},domProps:{value:t.chats.message},on:{input:function(e){e.target.composing||t.$set(t.chats,"message",e.target.value)}}}),t.submitform&&!t.$v.chats.message.required?a("div",{staticClass:"invalid-feedback"},[t._v("This value is required.")]):t._e()]),t._m(0)])])],1)])},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-3"},[a("button",{staticClass:"btn btn-danger chat-send btn-block",attrs:{type:"submit"}},[t._v("Send")])])}],I=a("b5ae"),T={components:{VuePerfectScrollbar:n.a},props:{title:{type:String,default:"Chat"},chatWindowHeight:{type:String,default:"230"},messages:{type:Array,default:function(){return[]}}},data:function(){return{chats:{message:""},submitform:!1}},validations:{chats:{message:{required:I["required"]}}},methods:{saveMessage:function(){if(this.submitform=!0,this.$v.$touch(),!this.$v.$invalid){var t=this.messages.length,e=this.chats.message,r=new Date;this.messages.push({image:a("cd5e"),id:t+1,name:"Shreyu",message:e,time:r.getHours()+":"+r.getMinutes()}),this.submitform=!1,this.chats={}}}}},q=T,z=Object(p["a"])(q,V,$,!1,null,null,null),F=z.exports;function L(t,e){var a=new Date(e,t,1),r=[],i=0;while(a.getMonth()===t&&i<15){var s=new Date(a);r.push(s.getDate()+" "+s.toLocaleString("en-us",{month:"short"})),a.setDate(a.getDate()+1),i+=1}return r}var R=new Date,H=L(R.getMonth(),R.getFullYear()),G={chartOptions:{chart:{toolbar:{show:!1}},tooltip:{theme:"dark",x:{show:!1}},stroke:{curve:"smooth",width:4},zoom:{enabled:!1},dataLabels:{enabled:!1},legend:{show:!1},colors:["#43d39e"],xaxis:{type:"string",categories:H,tooltip:{enabled:!1},axisBorder:{show:!1}},yaxis:{labels:{formatter:function(t){return t+"k"}}},fill:{type:"gradient",gradient:{type:"vertical",shadeIntensity:1,inverseColors:!1,opacityFrom:.45,opacityTo:.05,stops:[45,100]}}},series:[{name:"Revenue",data:[10,20,5,15,10,20,15,25,20,30,25,40,30,50,35]}]},B={chartOptions:{colors:["#5369f8","#43d39e","#f77e53","#ffbe0b"],chart:{type:"bar",stacked:!0,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"45%"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun"],axisBorder:{show:!1}},legend:{show:!1},grid:{row:{colors:["transparent","transparent"],opacity:.2},borderColor:"#f3f4f7"},tooltip:{y:{formatter:function(t){return"$ "+t+" thousands"}}}},series:[{name:"Net Profit",data:[35,44,55,57,56,61]},{name:"Revenue",data:[52,76,85,101,98,87]}]},U={chartOptions:{plotOptions:{pie:{donut:{size:"70%"},expandOnClick:!1}},colors:["#5369f8","#43d39e","#f77e53","#ffbe0b"],legend:{show:!0,position:"right",horizontalAlign:"left",itemMargin:{horizontal:6,vertical:3}},labels:["Clothes 44k","Smartphons 55k","Electronics 41k","Other 17k"],responsive:[{breakpoint:480,options:{legend:{position:"bottom"}}}],tooltip:{y:{formatter:function(t){return t+"k"}}}},series:[44,55,41,17]},J=[{id:"#98754",product:"ASOS Ridley High",name:"Otto B",price:"$79.49",status:"Pending"},{id:"#98753",product:"Marco Lightweight Shirt",name:"Mark P",price:"$125.49",status:"Delivered"},{id:"#98752",product:"Half Sleeve Shirt",name:"Dave B",price:"$35.49",status:"Declined"},{id:"#98751",product:"Lightweight Jacket",name:"Shreyu N",price:"$49.49",status:"Delivered"},{id:"#98750",product:"Marco Shoes",name:"Rik N",price:"$69.49",status:"Declined"}],Y={page:{title:"Dashboard",meta:[{name:"description",content:o.description}]},components:{VuePerfectScrollbar:n.a,Layout:l["a"],StatChart:v,Overview:C,Member:S,Task:E,Chat:F},data:function(){return{revenueAreaChart:G,targetsBarChart:B,salesDonutChart:U,ordersData:J,maxHeight:"328px",overviewData:[{class:"border-bottom py-4",icon:"users",value:"121,000",title:"Total Visitantes"},{class:"border-bottom py-4",icon:"image",value:"21,000",title:"Total Vistas Producto"},{class:"py-4",icon:"shopping-bag",value:"$21.5",title:"Ingresos Por Visitantes"}],membersData:[{image:a("cd5e"),text:"Senior Ventas",name:"Shreyu N"},{image:a("5092"),text:"Campaña De Redes Sociales",name:"Greeva Y"},{image:a("1f62"),text:"Gerente De Inventario",name:"Nik G"},{image:a("c3eb"),text:"Vendedor",name:"Hardik G"},{image:a("95f5"),text:"Vendedor",name:"Stive K"}],tasksData:[{title:"Redactar el nuevo documento de contrato para el equipo de ventas.",text:"Fecha límite el 24 de agosto de 2020",id:1},{title:"Pagina de inicio para la app",text:"Fecha límite el 24 de agosto de 2020",id:2},{title:"Escribir nota de lanzamiento para Nick",text:"Fecha límite el 24 de agosto de 2020",id:3},{title:"Invitar a Nick al proyecto",text:"Fecha límite el 24 de agosto de 2020",id:4},{title:"Habilite el seguimiento de análisis para el sitio web principal",text:"Fecha límite el 24 de agosto de 2020",id:5},{title:"Invitar usuario al proyecto",text:"Fecha límite el 24 de agosto de 2020",id:6},{title:"Escribe una nota de lanzamiento",text:"Fecha límite el 24 de agosto de 2020",id:7}],statChart:[{mainTitle:"Ingresos De Hoy",value:2100,subValue:"10.21%",chartColor:"#5369f8"},{mainTitle:"Productos Vendidos",value:1065,subValue:"5.05%",chartColor:"#f77e53"},{mainTitle:"Nuevos Clientes",value:11,subValue:"25.16%",chartColor:"#43d39e"},{mainTitle:"Nuevos Visitantes",value:750,subValue:"5.05%",chartColor:"#ffbe0b"}],chatMessages:[{id:1,image:a("5092"),name:"Greeva",message:"Hola!",time:"10:00"},{id:2,image:a("cd5e"),name:"Shreyu",message:"Qué tal?",time:"10:01"},{id:3,image:a("5092"),name:"Greeva",message:"Todo bien",time:"10:01"},{id:4,image:a("cd5e"),name:"Shreyu",message:"Que bueno!",time:"10:02"}],dateConfig:{mode:"range"},selectedDate:[(new Date).setDate((new Date).getDate()-7),new Date]}}},Z=Y,W=Object(p["a"])(Z,r,i,!1,null,null,null);e["default"]=W.exports},"91d3":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,r.withParams)({type:"macAddress"},(function(e){if(!(0,r.req)(e))return!0;if("string"!==typeof e)return!1;var a="string"===typeof t&&""!==t?e.split(t):12===e.length||16===e.length?e.match(/.{2}/g):null;return null!==a&&(6===a.length||8===a.length)&&a.every(s)}))};e.default=i;var s=function(t){return t.toLowerCase().match(/^[0-9a-f]{2}$/)}},aa77:function(t,e,a){var r=a("5ca1"),i=a("be13"),s=a("79e5"),n=a("fdef"),o="["+n+"]",l="​",c=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),d=function(t,e,a){var i={},o=s((function(){return!!n[t]()||l[t]()!=l})),c=i[t]=o?e(f):n[t];a&&(i[a]=c),r(r.P+r.F*o,"String",i)},f=d.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(u,"")),t};t.exports=d},aa82:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=function(t){return(0,r.withParams)({type:"requiredIf",prop:t},(function(e,a){return!(0,r.ref)(t,this,a)||(0,r.req)(e)}))};e.default=i},b5ae:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"alpha",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"alphaNum",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"numeric",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(e,"between",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"email",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"ipAddress",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(e,"macAddress",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(e,"maxLength",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(e,"minLength",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(e,"required",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(e,"requiredIf",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(e,"requiredUnless",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(e,"sameAs",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(e,"url",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(e,"or",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(e,"and",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(e,"not",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(e,"minValue",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(e,"maxValue",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(e,"integer",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(e,"decimal",{enumerable:!0,get:function(){return x.default}}),e.helpers=void 0;var r=j(a("6235")),i=j(a("3a54")),s=j(a("45b8")),n=j(a("ec11")),o=j(a("5d75")),l=j(a("c99d")),c=j(a("91d3")),u=j(a("2a12")),d=j(a("5db3")),f=j(a("d4f4")),p=j(a("aa82")),m=j(a("e652")),v=j(a("b6cb")),h=j(a("772d")),b=j(a("d294")),g=j(a("3360")),y=j(a("6417")),_=j(a("eb66")),C=j(a("46bc")),w=j(a("1331")),x=j(a("c301")),O=P(a("78ef"));function P(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,a):{};r.get||r.set?Object.defineProperty(e,a,r):e[a]=t[a]}return e.default=t,e}function j(t){return t&&t.__esModule?t:{default:t}}e.helpers=O},b6cb:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=function(t){return(0,r.withParams)({type:"sameAs",eq:t},(function(e,a){return e===(0,r.ref)(t,this,a)}))};e.default=i},c301:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=(0,r.regex)("decimal",/^[-]?\d*(\.\d+)?$/);e.default=i},c5f6:function(t,e,a){"use strict";var r=a("7726"),i=a("69a8"),s=a("2d95"),n=a("5dbc"),o=a("6a99"),l=a("79e5"),c=a("9093").f,u=a("11e9").f,d=a("86cc").f,f=a("aa77").trim,p="Number",m=r[p],v=m,h=m.prototype,b=s(a("2aeb")(h))==p,g="trim"in String.prototype,y=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=g?e.trim():f(e,3);var a,r,i,s=e.charCodeAt(0);if(43===s||45===s){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+e}for(var n,l=e.slice(2),c=0,u=l.length;c<u;c++)if(n=l.charCodeAt(c),n<48||n>i)return NaN;return parseInt(l,r)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof m&&(b?l((function(){h.valueOf.call(a)})):s(a)!=p)?n(new v(y(e)),a,m):y(e)};for(var _,C=a("9e1e")?c(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;C.length>w;w++)i(v,_=C[w])&&!i(m,_)&&d(m,_,u(v,_));m.prototype=h,h.constructor=m,a("2aba")(r,p,m)}},c99d:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=(0,r.withParams)({type:"ipAddress"},(function(t){if(!(0,r.req)(t))return!0;if("string"!==typeof t)return!1;var e=t.split(".");return 4===e.length&&e.every(s)}));e.default=i;var s=function(t){if(t.length>3||0===t.length)return!1;if("0"===t[0]&&"0"!==t)return!1;if(!t.match(/^\d+$/))return!1;var e=0|+t;return e>=0&&e<=255}},cb69:function(t,e,a){"use strict";(function(t){function a(t){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.withParams=void 0;var r="undefined"!==typeof window?window:"undefined"!==typeof t?t:{},i=function(t,e){return"object"===a(t)&&void 0!==e?e:t((function(){}))},s=r.vuelidate?r.vuelidate.withParams:i;e.withParams=s}).call(this,a("c8ba"))},d294:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return(0,r.withParams)({type:"or"},(function(){for(var t=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return e.length>0&&e.reduce((function(e,a){return e||a.apply(t,r)}),!1)}))};e.default=i},d4f4:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=(0,r.withParams)({type:"required"},r.req);e.default=i},e652:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=function(t){return(0,r.withParams)({type:"requiredUnless",prop:t},(function(e,a){return!!(0,r.ref)(t,this,a)||(0,r.req)(e)}))};e.default=i},eb66:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=function(t){return(0,r.withParams)({type:"minValue",min:t},(function(e){return!(0,r.req)(e)||(!/\s/.test(e)||e instanceof Date)&&+e>=+t}))};e.default=i},ec11:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=function(t,e){return(0,r.withParams)({type:"between",min:t,max:e},(function(a){return!(0,r.req)(a)||(!/\s/.test(a)||a instanceof Date)&&+t<=+a&&+e>=+a}))};e.default=i},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-35c79007.2afa5895.js.map