(function(e){function t(t){for(var o,r,s=t[0],a=t[1],u=t[2],l=0,p=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);h&&h(t);while(p.length)p.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(o=!1)}o&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={1:0},i={1:0},c=[];function s(e){return a.p+"js/"+({}[e]||e)+"."+{2:"fd3fdd0f",3:"757d20cb",4:"ade5a70a"}[e]+".js"}function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n={2:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{2:"a165b5ef",3:"31d6cfe0",4:"31d6cfe0"}[e]+".css",i=a.p+o,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===i))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){u=p[s],l=u.getAttribute("data-href");if(l===o||l===i)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var o=t&&t.target&&t.target.src||i,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete r[e],h.parentNode.removeChild(h),n(c)},h.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(h)})).then((function(){r[e]=0})));var o=i[e];if(0!==o)if(o)t.push(o[2]);else{var c=new Promise((function(t,n){o=i[e]=[t,n]}));t.push(o[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.src=s(e);var p=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(h);var n=i[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",p.name="ChunkLoadError",p.type=o,p.request=r,n[1](p)}i[e]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var h=l;c.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);n("d3b7"),n("e6cf"),n("ac1f"),n("5319"),n("96cf");var o=n("c973"),r=n.n(o),i=(n("5c7d"),n("7d6e"),n("e54f"),n("985d"),n("31cd"),n("2b0e")),c=n("c9b0"),s=n("42d2"),a=n("b05d"),u=n("515f"),l=n("436b"),p=n("f508"),h=n("2a19");i["a"].use(a["a"],{config:{},lang:c["a"],iconSet:s["a"],plugins:{Cookies:u["a"],Dialog:l["a"],Loading:p["a"],Notify:h["a"]}});var d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},f=[],g={name:"App"},b=g,v=n("2877"),y=Object(v["a"])(b,d,f,!1,null,null,null),m=y.exports,w=n("2f62"),k={data:{}},x={data:function(e,t){return console.log("Getter:",e.data),e.data}},O=(n("13d5"),n("1276"),{mutation:function(e,t){var n=t.key,o=t.value;console.log("Mutation:",n);var r=n.split("."),i=r.pop();this._vm.$set(r.reduce((function(e,t){return e[t]=e[t]||{}}),e.data),i,o)}}),S={action:function(e,t){var n=e.commit,o=e.state,r=t.key,i=t.value;console.log("Action:",r),n("mutation",{key:r,value:i},o)}};i["a"].use(w["a"]);var j=function(){var e=new w["a"].Store({state:k,getters:x,mutations:O,actions:S,strict:!1});return e},E=n("8c4f"),P=[{path:"/",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"713b"))},children:[{path:"",component:function(){return n.e(4).then(n.bind(null,"8b24"))}}]},{path:"*",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"e51e"))}}],C=P;i["a"].use(E["a"]);var T=function(){var e=new E["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:C,mode:"hash",base:""});return e},R=function(){return A.apply(this,arguments)};function A(){return A=r()(regeneratorRuntime.mark((function e(){var t,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof j){e.next=6;break}return e.next=3,j({Vue:i["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=j;case 7:if(t=e.t0,"function"!==typeof T){e.next=14;break}return e.next=11,T({Vue:i["a"],store:t});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=T;case 15:return n=e.t1,t.$router=n,o={router:n,store:t,render:function(e){return e(m)}},o.el="#q-app",e.abrupt("return",{app:o,store:t,router:n});case 20:case"end":return e.stop()}}),e)}))),A.apply(this,arguments)}var L=n("9483");Object(L["a"])("service-worker.js",{ready:function(){},registered:function(){},cached:function(){},updatefound:function(){},updated:function(){},offline:function(){},error:function(){}});n("e260"),n("3ca3"),n("ddb0"),n("2b3d");var $=n("4bde"),_=Object($["boot"])((function(e){var t=e.Vue,n=(e.ssrContext,u["a"]),o=t.observable({data:{}});t.prototype.$global={},Object.defineProperty(t.prototype.$global,"data",{get:function(){return o.data},set:function(e){o.data=e}}),t.prototype.$global.cookies=n,t.prototype.$global.env={},t.prototype.$global.print=function(e,t,n){var o;try{o=document.querySelector(e)||e}catch(i){o=e}if(o){var r=document.createElement("iframe");r.style.position="absolute",r.style.display="none",r.style.left="0px",r.style.top="0px",r.style.width="100%",r.style.height="100%",r.style.zIndex="999","string"===typeof o&&(r.src=o),r.addEventListener("load",(function(){var e=r.contentWindow||r.contentDocument||r,i=e.document||e.contentDocument||e;i.close(),e.focus(),t&&(i.title=t);var c=document.createElement("link");c.type="text/css",c.rel="stylesheet",c.href="styles/quasar.min.css",i.head.appendChild(c),r.src?URL.revokeObjectURL(r.src):i.body.appendChild(o.cloneNode(!0)),c.addEventListener("load",(function(){try{i.execCommand("print",!1,null)||e.print()}catch(t){e.print()}document.body.focus(),e.close(),r.parentElement.removeChild(r),"function"===typeof n&&n()}))})),document.body.insertBefore(r,document.body.firstChild)}},t.prototype.$global.scrollToElement=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;t<100&&(t=100),setTimeout((function(){if("string"===typeof e&&(e=document.getElementById(e)||document.querySelector(e)),e){var t,o=window.pageYOffset,r=o+e.getBoundingClientRect().top,i=document.body.scrollHeight-r<window.innerHeight?document.body.scrollHeight-window.innerHeight:r,c=i-o,s=function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1};c&&window.requestAnimationFrame((function e(r){t||(t=r);var i=r-t,a=Math.min(i/n,1);a=s(a),window.scrollTo(0,o+c*a),i<n&&window.requestAnimationFrame(e)}))}}),t)}})),q=n("a925"),H={failed:"Action failed",success:"Action was successful"},N={failed:"Action failed",success:"Action was successful"},W={"en-us":H,th:N};i["a"].use(q["a"]);var D=new q["a"]({locale:"th",fallbackLocale:"en-us",messages:W}),B=function(e){var t=e.app;t.i18n=D},M=n("bc3a"),U=n.n(M);i["a"].prototype.$axios=U.a;n("caad"),n("cca6"),n("c1f9"),n("25f0"),n("2532"),n("841c");var V=n("7037"),I=n.n(V),z=["POST","PUT","PATCH","DELETE"],F=Object($["boot"])((function(e){var t=e.Vue;function n(){}n.prototype.defaults={mode:"cors",cache:"no-cache",credentials:"include",redirect:"follow",referrerPolicy:"no-referrer-when-downgrade",method:"GET",headers:{}},n.prototype.get=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=new Promise(function(o,r){n=Object.assign({},this.defaults,n),z.includes(n.method)?(n.headers["Content-Type"]="application/json; charset=utf-8",n.body=JSON.stringify(t)):(n.headers["Content-Type"]="text/plain; charset=utf-8",delete n.body),"object"===I()(n.params)&&null!=n.params&&(e=new URL(e),e.search=new URLSearchParams(n.params).toString()),fetch(e,n).then((function(e){e.text().then((function(t){if(Object.assign(e.headers,Object.fromEntries(e.headers.entries())),e.ok)(e.headers["content-type"]||"").includes("application/json")&&(t=t?JSON.parse(t):{}),e.data=t,o(e);else{var n=new Error(t);n.response=e,r(n)}})).catch((function(t){t.response=e,r(t)}))})).catch((function(e){r(e)}))}.bind(this));return setTimeout(function(){o.then(function(e){"function"===typeof this.onResponse&&this.onResponse(e)}.bind(this)).catch(function(e){"function"===typeof this.onError&&this.onError(e)}.bind(this))}.bind(this)),o},n.prototype.head=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.get(e,t,Object.assign({},n,{method:"HEAD"}))},n.prototype.post=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.get(e,t,Object.assign({},n,{method:"POST"}))},n.prototype.put=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.get(e,t,Object.assign({},n,{method:"PUT"}))},n.prototype.patch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.get(e,t,Object.assign({},n,{method:"PATCH"}))},n.prototype.delete=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.get(e,t,Object.assign({},n,{method:"DELETE"}))},n.prototype.onResponse=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e},n.prototype.onError=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e},t.prototype.$jsonFetch=new n})),J=Object($["boot"])((function(e){var t=e.Vue;function n(){this.number=0,this.autoReconnectInterval=1e4}n.prototype.open=function(e,t){this.url=e,this.protocols=t;try{this.ws=new WebSocket(this.url,this.protocols),this.ws.onopen=function(e){this.onopen(e)}.bind(this),this.ws.onmessage=function(e){this.onmessage(e,++this.number)}.bind(this),this.ws.onclose=function(e){switch(e.code){case 1e3:console.log("WebSocket: closed");break;default:this.reconnect(e);break}this.onclose(e)}.bind(this),this.ws.onerror=function(e){this.onerror(e)}.bind(this)}catch(n){this.onerror(n)}},n.prototype.send=function(e){try{this.ws.send(e)}catch(t){this.onerror(t)}},n.prototype.close=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3,t=arguments.length>1?arguments[1]:void 0;try{this.ws.close(e,t)}catch(n){this.onerror(n)}},n.prototype.reconnect=function(e){console.log("WebSocketClient: retry in ".concat(this.autoReconnectInterval,"ms"),e),setTimeout(function(){console.log("WebSocketClient: reconnecting..."),this.open(this.url)}.bind(this),this.autoReconnectInterval)},n.prototype.onopen=function(e){console.log("WebSocketClient: open",e)},n.prototype.onmessage=function(e){console.log("WebSocketClient: message",e)},n.prototype.onclose=function(e){console.log("WebSocketClient: close",e)},n.prototype.onerror=function(e){console.error("WebSocketClient: error",e)},t.prototype.$wsClient=new n})),G=Object($["boot"])((function(e){var t=e.Vue;function n(){}n.prototype.start=function(){this.stop(),this.recognition=new(window.SpeechRecognition||window.webkitSpeechRecognition),this.recognition.continuous=!0,this.recognition.interimResults=!0,this.recognition.lang="th-TH",this.recognition.onstart=function(){this.recognizing=!0,this.onstart()}.bind(this),this.recognition.onend=function(){this.recognizing=!1,this.onend()}.bind(this),this.recognition.onerror=function(e){this.onerror({error:e.error,message:e.message})}.bind(this),this.recognition.onnomatch=function(){this.onnomatch()}.bind(this),this.recognition.onresult=function(e){if(e.results&&e.results.length>0){var t=e.results[e.results.length-1];t&&t.isFinal&&t.length>0&&this.onresult(t[t.length-1].transcript)}}.bind(this),this.recognition.start()},n.prototype.stop=function(){this.recognizing&&this.recognition.stop()},n.prototype.abort=function(){this.recognizing&&this.recognition.abort()},n.prototype.onstart=function(){console.log("SpeechRecognition has been start.")},n.prototype.onend=function(){console.log("SpeechRecognition has been stop.")},n.prototype.onerror=function(e){console.error(e.error,e.message)},n.prototype.onnomatch=function(){console.log("SpeechRecognition has no match.")},n.prototype.onresult=function(e){console.log(e)},t.prototype.$speechApi=new n}));/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&n.e(0).then(n.t.bind(null,"a0db",7));var K="";function Q(){return Y.apply(this,arguments)}function Y(){return Y=r()(regeneratorRuntime.mark((function e(){var t,n,o,r,c,s,a,u,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:t=e.sent,n=t.app,o=t.store,r=t.router,c=!1,s=function(e){c=!0;var t=Object(e)===e?r.resolve(e).route.fullPath:e;window.location.href=t},a=window.location.href.replace(window.location.origin,""),u=[_,B,void 0,F,J,G],l=0;case 11:if(!(!1===c&&l<u.length)){e.next=29;break}if("function"===typeof u[l]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,u[l]({app:n,router:r,store:o,Vue:i["a"],ssrContext:null,redirect:s,urlPath:a,publicPath:K});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:l++,e.next=11;break;case 29:if(!0!==c){e.next=31;break}return e.abrupt("return");case 31:new i["a"](n);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),Y.apply(this,arguments)}Q()},"31cd":function(e,t,n){}});