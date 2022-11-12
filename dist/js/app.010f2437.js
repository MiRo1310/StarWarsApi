(function(){"use strict";var e={6116:function(e,t,s){var r=s(9242),o=s(3396),i=s(7139);const n={class:"bg-black text-yellow-400 text-center"},a={class:"text-4xl flex justify-center"},l={class:"text-xl p-2"},p={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"};function c(e,t,s,r,c,u){const d=(0,o.up)("StarWarsList"),h=(0,o.up)("StarWarsOneItem");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",n,[(0,o._)("h1",{class:"text-7xl p-7 cursor-pointer",onClick:t[0]||(t[0]=e=>this.getData(this.apiURL))},(0,i.zw)(c.title.toLocaleUpperCase()),1),(0,o._)("nav",a,[(0,o._)("p",{class:"px-10 cursor-pointer",onClick:t[1]||(t[1]=e=>this.getData("https://swapi.dev/api/planets/"))},"Planets"),(0,o._)("p",{class:"px-10 cursor-pointer",onClick:t[2]||(t[2]=e=>this.getData("https://swapi.dev/api/people/"))},"People"),(0,o._)("p",{class:"px-10 cursor-pointer",onClick:t[3]||(t[3]=e=>this.getData("https://swapi.dev/api/films/"))},"Films"),(0,o._)("p",{class:"px-10 cursor-pointer",onClick:t[4]||(t[4]=e=>this.getData("https://swapi.dev/api/vehicles/"))},"Vehicles"),(0,o._)("p",{class:"px-10 cursor-pointer",onClick:t[5]||(t[5]=e=>this.getData("https://swapi.dev/api/starships/"))},"Starships"),(0,o._)("p",{class:"px-10 cursor-pointer",onClick:t[6]||(t[6]=e=>this.getData("https://swapi.dev/api/species/"))},"Species")]),(0,o._)("p",l,(0,i.zw)(c.response.length)+" "+(0,i.zw)(c.page)+" of the Star Wars Universe",1)]),(0,o._)("div",p,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(c.response,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:`${e}${c.response[1]}`},[this.singleInfo?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(d,{key:0,valueAPIprob:e,indexprob:t,onLoadSideUrl:u.loadSide},null,8,["valueAPIprob","indexprob","onLoadSideUrl"]))])))),128))]),this.singleInfo?((0,o.wg)(),(0,o.j4)(h,{key:0,class:"mx-96",valueAPIprob:c.response,onLoadSideUrl:u.loadSide},null,8,["valueAPIprob","onLoadSideUrl"])):(0,o.kq)("",!0)],64)}const u={class:"bg-black text-center py-8 border-2 border-yellow-200 m-5"},d={class:"text-yellow-400 text-2xl"},h={class:"text-yellow-400 text-2xl"},g={key:0},w={class:"text-white"},f={key:0},v=["onClick"],x={key:1};function y(e,t,s,r,n,a){return(0,o.wg)(),(0,o.iD)("div",u,[(0,o._)("h2",d,(0,i.zw)(n.valueAPI.name),1),(0,o._)("h2",h,(0,i.zw)(n.valueAPI.title),1),(0,o._)("button",{class:"bg-blue-200 rounded p-2 text-gray-700 mt-5",onClick:t[0]||(t[0]=(...e)=>a.toggleShow&&a.toggleShow(...e))},"Show Info"),n.show?((0,o.wg)(),(0,o.iD)("div",g,[(0,o._)("ul",w,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.valueAPI,((e,t)=>((0,o.wg)(),(0,o.iD)("li",{key:e},[Array.isArray(e)?((0,o.wg)(),(0,o.iD)("div",f,[(0,o._)("p",null,(0,i.zw)(a.firstLetterToUpperCase(t))+": ",1),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e[1]},[(0,o._)("a",{onClick:t=>a.loadSide(e),class:"underline text-yellow-400 my-6",href:"#"},(0,i.zw)(e),9,v)])))),128))])):((0,o.wg)(),(0,o.iD)("p",x,(0,i.zw)(a.firstLetterToUpperCase(t))+": "+(0,i.zw)(e),1))])))),128))])])):(0,o.kq)("",!0)])}var b={name:"StarWarsList",components:{},data(){return{valueAPI:this.valueAPIprob,show:!1}},methods:{toggleShow(){this.show=!this.show},loadSide(e){this.$emit("loadSide-url",e)},firstLetterToUpperCase(e){const t=e.slice(0,1),s=e.slice(1);return e=t.toUpperCase()+s,e}},props:["valueAPIprob","indexprob"]},k=s(89);const m=(0,k.Z)(b,[["render",y]]);var S=m;const D={class:"bg-black text-center py-8 border-2 border-yellow-200 m-5"},I={key:0,class:"text-yellow-400 text-2xl"},C={key:1,class:"text-yellow-400 text-2xl"},P={key:2,class:"text-sm"},U={class:"text-white"},A={key:0},_=["onClick"],L={key:1};function O(e,t,s,r,n,a){return(0,o.wg)(),(0,o.iD)("div",D,[n.valueAPI.name?((0,o.wg)(),(0,o.iD)("h2",I,(0,i.zw)(n.valueAPI.name),1)):(0,o.kq)("",!0),n.valueAPI.title?((0,o.wg)(),(0,o.iD)("h2",C,(0,i.zw)(n.valueAPI.title),1)):(0,o.kq)("",!0),(0,o._)("button",{class:"bg-blue-200 rounded p-2 text-gray-700 mt-5",onClick:t[0]||(t[0]=(...e)=>a.toggleShow&&a.toggleShow(...e))},"Show Info"),n.show?((0,o.wg)(),(0,o.iD)("div",P,[(0,o._)("ul",U,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.valueAPI,((e,t)=>((0,o.wg)(),(0,o.iD)("li",{key:e},[Array.isArray(e)?((0,o.wg)(),(0,o.iD)("div",A,[(0,o._)("p",null,(0,i.zw)(a.firstLetterToUpperCase(t))+": ",1),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.name||e.title},[(0,o._)("a",{onClick:t=>a.loadSide(e),class:"underline text-yellow-400 my-6",href:"#"},(0,i.zw)(e),9,_)])))),128))])):((0,o.wg)(),(0,o.iD)("p",L,(0,i.zw)(a.firstLetterToUpperCase(t))+": "+(0,i.zw)(e),1))])))),128))])])):(0,o.kq)("",!0)])}var z={name:"StarWarsOneItem",components:{},data(){return{valueAPI:this.valueAPIprob,show:!0}},methods:{toggleShow(){this.show=!this.show},loadSide(e){this.$emit("loadSide-url",e)},firstLetterToUpperCase(e){const t=e.slice(0,1),s=e.slice(1);return e=t.toUpperCase()+s,e}},props:["valueAPIprob","indexprob"]};const j=(0,k.Z)(z,[["render",O]]);var T=j,W={name:"App",components:{StarWarsList:S,StarWarsOneItem:T},data(){return{title:"Star Wars",response:[],apiURL:"https://swapi.dev/api/planets/",singleInfo:!1,actualUrl:"",page:""}},mounted(){this.getData(this.apiURL)},computed:{},methods:{async getData(e){console.log(e),this.actualUrl=e,this.singleInfo=!1,this.response=[],this.getPage();try{const t=await this.axios.get(e);t.data.results?(this.response=t.data.results,console.log(t.data.results)):(this.response=t.data,console.log(t.data)),e.match(/[0-9]/)?this.singleInfo=!0:this.singleInfo=!1}catch(t){console.log(t)}},getPage(){let e=this.actualUrl.replace("https://swapi.dev/api/","");this.page=this.firstLetterToUpperCase(e.slice(0,e.indexOf("/")))},firstLetterToUpperCase(e){const t=e.slice(0,1),s=e.slice(1);return e=t.toUpperCase()+s,e},loadSide(e){console.log(e),this.getData(e)}}};const q=(0,k.Z)(W,[["render",c]]);var H=q,Y=s(6423),K=s(70);const Z=(0,r.ri)(H);Z.use(Y.Z,K.ZP),Z.mount("#app")}},t={};function s(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,loaded:!1,exports:{}};return e[r](i,i.exports,s),i.loaded=!0,i.exports}s.m=e,function(){s.amdO={}}(),function(){var e=[];s.O=function(t,r,o,i){if(!r){var n=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],i=e[c][2];for(var a=!0,l=0;l<r.length;l++)(!1&i||n>=i)&&Object.keys(s.O).every((function(e){return s.O[e](r[l])}))?r.splice(l--,1):(a=!1,i<n&&(n=i));if(a){e.splice(c--,1);var p=o();void 0!==p&&(t=p)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,o,i]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,n=r[0],a=r[1],l=r[2],p=0;if(n.some((function(t){return 0!==e[t]}))){for(o in a)s.o(a,o)&&(s.m[o]=a[o]);if(l)var c=l(s)}for(t&&t(r);p<n.length;p++)i=n[p],s.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return s.O(c)},r=self["webpackChunkstarwars"]=self["webpackChunkstarwars"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=s.O(void 0,[998],(function(){return s(6116)}));r=s.O(r)})();
//# sourceMappingURL=app.010f2437.js.map