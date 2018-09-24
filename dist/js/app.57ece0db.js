(function(t){function e(e){for(var a,i,s=e[0],c=e[1],u=e[2],l=0,p=[];l<s.length;l++)i=s[l],n[i]&&p.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,s=1;s<r.length;s++){var c=r[s];0!==n[c]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},n={app:0},o=[];function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var a=r("c21b"),n=r.n(a);n.a},"46f9":function(t,e,r){"use strict";var a=r("f0ca"),n=r.n(a);n.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("097d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("button",{staticClass:"button",style:{"background-color":t.addMode?"#66f13d":"#3d66f1"},on:{click:function(e){t.addMode=!0}}},[t._v(t._s(t.addMode?"Click on the map":"+ Add marker"))]),r("button",{staticClass:"button weather",style:{"background-color":t.addWeather?"#6f163d":"#6d63f1"},on:{click:function(e){t.addWeather=!t.addWeather}}},[t._v(t._s(t.addWeather?"Weather marker":"Icon Marker"))]),r("vue-gmap",{staticStyle:{width:"100%",height:"600px"},attrs:{center:{lat:50.6272265,lng:3.0571581},zoom:12},on:{click:t.onMapClick}},[t._l(t.markers,function(e,a){return r("gmap-custom-marker",{key:e._id,attrs:{marker:e,"offset-x":-25,"offset-y":-25},nativeOn:{click:function(e){t.deleteMarker(a)}}},[e.weather?r("weather",{attrs:{coords:e}}):r("img",{staticClass:"icon-sm",attrs:{title:JSON.stringify(e),src:t.src,height:"45"}})],1)}),r("gmap-custom-marker",{key:"supermarker",attrs:{"offset-x":-171,"offset-y":-75,marker:t.markerCenter}},[r("div",{staticClass:"card",on:{click:function(t){return t.stopPropagation()}}},[r("small",[t._v("This is a marker")]),r("center",[r("p",[t._v(t._s(t.markerCenter))])]),r("img",{staticClass:"icon",attrs:{src:t.src,height:"75"}}),r("div",{staticClass:"input-group"},[r("label",[t._v("Image url ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.testText,expression:"testText"}],attrs:{type:"input"},domProps:{value:t.testText},on:{input:function(e){e.target.composing||(t.testText=e.target.value)}}})])],1)])],2)],1)},o=[],i=r("755e"),s=r("6cee"),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.data?r("div",{staticClass:"weather-card"},[r("label",[r("b",[t._v(t._s(t.data.name))])]),r("br"),r("img",{attrs:{src:t.icon}}),r("p",[t._v(t._s(t.data.weather[0].description))]),r("p",[r("i",[t._v(t._s(t.data.main.temp.toFixed(0))+"°C")])])]):t._e()},u=[],d=r("bc3a"),l={props:{coords:{type:Object,default:void 0}},data:function(){return{data:void 0}},created:function(){var t=this;Object(d["get"])("https://api.openweathermap.org/data/2.5/weather?lat="+this.coords.latitude+"&lon="+this.coords.longitude+"&APPID=59b0d37a8bb62db251652e421b20342a&units=metric").then(function(e){t.data=e.data})},computed:{icon:function(){return"http://openweathermap.org/img/w/"+this.data.weather[0].icon+".png"}}},p=l,f=(r("46f9"),r("2877")),h=Object(f["a"])(p,c,u,!1,null,null,null);h.options.__file="weather.vue";var m=h.exports,v={name:"app",components:{GmapCustomMarker:s["a"],"vue-gmap":i["Map"],Weather:m},data:function(){return{testText:"",markerCenter:{latitude:50.6272265,longitude:3.0571581},addWeather:!1,addMode:!1,markers:[],ids:0}},computed:{src:function(){return this.testText?this.testText:"https://vuejs.org/images/logo.png"}},methods:{deleteMarker:function(t){this.markers.splice(t,1)},onMapClick:function(t){this.addMode&&(this.markers.push({_id:this.ids++,latitude:t.latLng.lat(),longitude:t.latLng.lng(),weather:this.addWeather}),this.addMode=!1)}}},g=v,b=(r("034f"),Object(f["a"])(g,n,o,!1,null,null,null));b.options.__file="App.vue";var k=b.exports;a["a"].use(i,{load:{key:"AIzaSyBkOdVJktw6m9OoVMcX1ZU_yU54ODDfFlA",v:"3.26"},installComponents:!1}),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(k)}}).$mount("#app")},c21b:function(t,e,r){},f0ca:function(t,e,r){}});
//# sourceMappingURL=app.57ece0db.js.map