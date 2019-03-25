(function(t){function e(e){for(var r,i,c=e[0],s=e[1],l=e[2],d=0,p=[];d<c.length;d++)i=c[d],a[i]&&p.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"46f9":function(t,e,n){"use strict";var r=n("76cc"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("button",{staticClass:"button",style:{"background-color":t.addMode?"#66f13d":"#3d66f1"},on:{click:function(e){t.addMode=!0}}},[t._v(t._s(t.addMode?"Click on the map":"+ Add marker"))]),n("button",{staticClass:"button weather",style:{"background-color":t.addWeather?"#6f163d":"#6d63f1"},on:{click:function(e){t.addWeather=!t.addWeather}}},[t._v(t._s(t.addWeather?"Weather marker":"Icon Marker"))]),n("table",{staticClass:"alignment"},[n("tr",[n("td",{attrs:{colspan:"3"}},[t._v("Marker alignment : "+t._s(t.alignment))])]),n("tr",[n("td",[n("button",{on:{click:function(e){t.alignment="topleft"}}},[t._v("topleft")])]),n("td",[n("button",{on:{click:function(e){t.alignment="top"}}},[t._v("top")])]),n("td",[n("button",{on:{click:function(e){t.alignment="topright"}}},[t._v("topright")])])]),n("tr",[n("td",[n("button",{on:{click:function(e){t.alignment="left"}}},[t._v("left")])]),n("td",[n("button",{on:{click:function(e){t.alignment="center"}}},[t._v("center")])]),n("td",[n("button",{on:{click:function(e){t.alignment="right"}}},[t._v("right")])])]),n("tr",[n("td",[n("button",{on:{click:function(e){t.alignment="bottomleft"}}},[t._v("bottomleft")])]),n("td",[n("button",{on:{click:function(e){t.alignment="bottom"}}},[t._v("bottom")])]),n("td",[n("button",{on:{click:function(e){t.alignment="bottomright"}}},[t._v("bottomright")])])])]),n("vue-gmap",{staticStyle:{width:"100%",height:"600px"},attrs:{center:{lat:50.6272265,lng:3.0571581},zoom:12},on:{click:t.onMapClick}},[t._l(t.markers,function(e,r){return n("gmap-custom-marker",{key:e._id,attrs:{delayRepaint:e.weather?250:0,marker:e,alignment:e.alignment},nativeOn:{click:function(e){return t.deleteMarker(r)}}},[e.weather?n("weather",{attrs:{coords:e}}):n("img",{staticClass:"icon-sm",attrs:{title:JSON.stringify(e),src:t.src,height:"45"}})],1)}),n("gmap-custom-marker",{key:"supermarker",attrs:{alignment:"bottomright",marker:t.markerCenter}},[n("div",{staticClass:"card",on:{click:function(t){return t.stopPropagation()}}},[n("small",[t._v("This is a marker")]),n("center",[n("p",[t._v(t._s(t.markerCenter))])]),n("img",{staticClass:"icon",attrs:{src:t.src,height:"75"}}),n("div",{staticClass:"input-group"},[n("label",[t._v("Image url ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.testText,expression:"testText"}],attrs:{type:"input"},domProps:{value:t.testText},on:{input:function(e){e.target.composing||(t.testText=e.target.value)}}})])],1)])],2)],1)},o=[],i=n("755e"),c=n("6cee"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data?n("div",{staticClass:"weather-card"},[n("label",[n("b",[t._v(t._s(t.data.name))])]),n("br"),n("img",{attrs:{src:t.icon}}),n("p",[t._v(t._s(t.data.weather[0].description))]),n("p",[n("i",[t._v(t._s(t.data.main.temp.toFixed(0))+"°C")])])]):t._e()},l=[],u=n("bc3a"),d={props:{coords:{type:Object,default:void 0}},data:function(){return{data:void 0}},created:function(){var t=this;Object(u["get"])("https://api.openweathermap.org/data/2.5/weather?lat="+this.coords.latitude+"&lon="+this.coords.longitude+"&APPID=59b0d37a8bb62db251652e421b20342a&units=metric").then(function(e){t.data=e.data})},computed:{icon:function(){return"http://openweathermap.org/img/w/"+this.data.weather[0].icon+".png"}}},p=d,f=(n("46f9"),n("2877")),m=Object(f["a"])(p,s,l,!1,null,null,null),g=m.exports,h={name:"app",components:{GmapCustomMarker:c["a"],"vue-gmap":i["Map"],Weather:g},data:function(){return{testText:"",markerCenter:{latitude:50.6272265,longitude:3.0571581},addWeather:!1,addMode:!1,markers:[],ids:0,alignment:"top"}},computed:{src:function(){return this.testText?this.testText:"https://vuejs.org/images/logo.png"}},methods:{deleteMarker:function(t){this.markers.splice(t,1)},onMapClick:function(t){this.addMode&&(this.markers.push({_id:this.ids++,latitude:t.latLng.lat(),longitude:t.latLng.lng(),weather:this.addWeather,alignment:this.alignment}),this.addMode=!1)}}},v=h,b=(n("034f"),Object(f["a"])(v,a,o,!1,null,null,null)),k=b.exports;r["a"].use(i,{load:{key:"AIzaSyBkOdVJktw6m9OoVMcX1ZU_yU54ODDfFlA",v:"3.26"},installComponents:!1}),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(k)}}).$mount("#app")},"64a9":function(t,e,n){},"76cc":function(t,e,n){}});
//# sourceMappingURL=app.77f406f1.js.map