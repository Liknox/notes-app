(function(){"use strict";var e={889:function(e,t,n){var r=n(9242),o=n(3396),i=n(7139);const a={class:"wrappper"},s={class:"wrapper-content"},l={class:"container"},d={class:"note-title main-title"},c={class:"note-header a",style:{margin:"36px 0"}},u={class:"note-title"},h={class:"icons"},p=(0,o._)("rect",{x:"3",y:"3",width:"7",height:"7"},null,-1),v=(0,o._)("rect",{x:"14",y:"3",width:"7",height:"7"},null,-1),g=(0,o._)("rect",{x:"14",y:"14",width:"7",height:"7"},null,-1),f=(0,o._)("rect",{x:"3",y:"14",width:"7",height:"7"},null,-1),w=[p,v,g,f],m=(0,o.uE)('<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line>',6),y=[m];function b(e,t,n,r,p,v){const g=(0,o.up)("message"),f=(0,o.up)("newNote"),m=(0,o.up)("search"),b=(0,o.up)("notes"),_=(0,o.up)("descr");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("div",s,[(0,o._)("section",null,[(0,o._)("div",l,[(0,o._)("h1",d,(0,i.zw)(p.title),1),p.message?((0,o.wg)(),(0,o.j4)(g,{key:0,message:p.message},null,8,["message"])):(0,o.kq)("",!0),(0,o.Wm)(f,{note:p.note,onAddNote:v.addNote},null,8,["note","onAddNote"]),(0,o._)("div",c,[(0,o._)("h1",u,(0,i.zw)(p.findYNote),1),(0,o.Wm)(m,{value:p.search,placeholder:"Find your note",onSearch:t[0]||(t[0]=e=>p.search=e)},null,8,["value"]),(0,o._)("div",h,[((0,o.wg)(),(0,o.iD)("svg",{class:(0,i.C_)({active:p.grid}),onClick:t[1]||(t[1]=e=>p.grid=!0),xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},w,2)),((0,o.wg)(),(0,o.iD)("svg",{class:(0,i.C_)({active:!p.grid}),onClick:t[2]||(t[2]=e=>p.grid=!1),xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},y,2))])]),(0,o.Wm)(b,{notes:v.notesFilter,grid:p.grid,onRemove:v.removeNote},null,8,["notes","grid","onRemove"])]),(0,o.Wm)(_)])])])}const _={class:"new-note"},x=(0,o._)("label",null,"Title",-1),k=(0,o._)("label",null,"Description",-1);function D(e,t,n,i,a,s){return(0,o.wg)(),(0,o.iD)("div",_,[x,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>n.note.title=e),type:"text"},null,512),[[r.nr,n.note.title]]),k,(0,o.wy)((0,o._)("textarea",{"onUpdate:modelValue":t[1]||(t[1]=e=>n.note.descr=e)},null,512),[[r.nr,n.note.descr]]),(0,o._)("button",{class:"btn btnPrimary",onClick:t[2]||(t[2]=(...e)=>s.addNoter&&s.addNoter(...e))},"New note")])}var N={props:{note:{type:Object,required:!1}},methods:{addNoter(){this.$emit("addNote",this.note)}}},C=n(89);const j=(0,C.Z)(N,[["render",D]]);var O=j;const S={class:"message"};function L(e,t,n,r,a,s){return(0,o.wg)(),(0,o.iD)("div",S,[(0,o._)("p",null,(0,i.zw)(n.message),1)])}var T={props:{message:{type:String,required:!0}}};const q=(0,C.Z)(T,[["render",L],["__scopeId","data-v-03223d6e"]]);var z=q;const E={class:"notes"},F=["onClick"],P={class:"note-body"};function Z(e,t,n,r,a,s){return(0,o.wg)(),(0,o.iD)("div",E,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.notes,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{class:(0,i.C_)(["note",{full:!n.grid}]),key:t},[(0,o._)("div",{class:(0,i.C_)(["note-header",{full:!n.grid}])},[(0,o._)("p",null,(0,i.zw)(e.title),1),(0,o._)("p",{style:{cursor:"pointer"},onClick:e=>s.removeNote(t)},"x",8,F)],2),(0,o._)("div",P,[(0,o._)("p",null,(0,i.zw)(e.descr),1),(0,o._)("span",null,(0,i.zw)(e.date),1)])],2)))),128))])}var A={props:{notes:{type:Array,required:!0},grid:{type:Boolean,required:!0}},methods:{removeNote(e){console.log(`Note id - ${e} removed`),this.$emit("remove",e)}}};const B=(0,C.Z)(A,[["render",Z]]);var I=B;const W={class:"wrapper-search"},$=(0,o.uE)('<div class="search" data-v-1bd1023d><div class="search-icon" data-v-1bd1023d><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search" data-v-1bd1023d><circle cx="11" cy="11" r="8" data-v-1bd1023d></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-1bd1023d></line></svg></div></div>',1),U=["placeholder"];function V(e,t,n,i,a,s){return(0,o.wg)(),(0,o.iD)("div",W,[$,(0,o.wy)((0,o._)("input",{type:"text",placeholder:n.placeholder,"onUpdate:modelValue":t[0]||(t[0]=e=>a.search=e)},null,8,U),[[r.nr,a.search]])])}var Y={props:{value:{type:String,required:!0},placeholder:{type:String,default:"Search"}},data(){return{search:this.value}},watch:{search(e){this.$emit("search",e)}}};const M=(0,C.Z)(Y,[["render",V],["__scopeId","data-v-1bd1023d"]]);var R=M;const G={class:"div-bcg"},H=(0,o.uE)('<div class="container" data-v-5aaddb0e><div class="flex-div" data-v-5aaddb0e><p class="tcenter" data-v-5aaddb0e>In this App</p><ul data-v-5aaddb0e><li data-v-5aaddb0e>• Global settings for vue-cli</li><li data-v-5aaddb0e>• Transfer parameters from child to parent and back</li><li data-v-5aaddb0e>• Component approach</li><li data-v-5aaddb0e>• Element filtering</li><li data-v-5aaddb0e>• Editing and deleting elements</li></ul><span class="centrich" data-v-5aaddb0e>My <a href="https://github.com/Liknox" target="_blank" class="link" data-v-5aaddb0e>github</a> account</span></div></div>',1),K=[H];function J(e,t){return(0,o.wg)(),(0,o.iD)("div",G,K)}const Q={},X=(0,C.Z)(Q,[["render",J],["__scopeId","data-v-5aaddb0e"]]);var ee=X,te={components:{notes:I,message:z,newNote:O,search:R,descr:ee},data(){return{title:"Notes App",findYNote:"Find Note",search:"",message:!1,grid:!0,note:{title:"",descr:""},notes:[{title:"First Project",descr:"Description for first note",date:new Date(Date.now()).toLocaleString()},{title:"Second Project",descr:"Description for Second note",date:new Date(Date.now()).toLocaleString()},{title:"Third Project",descr:"Description for Third note",date:new Date(Date.now()).toLocaleString()}]}},computed:{notesFilter(){let e=this.notes,t=this.search;return t?(t=t.trim().toLowerCase(),e=e.filter((e=>{if(-1!==e.title.toLowerCase().indexOf(t))return e})),e):e}},methods:{addNote(){let{title:e,descr:t}=this.note;if(""===e)return this.message="Title can't be empty",!1;this.notes.push({title:e,descr:t,date:new Date(Date.now()).toLocaleString()}),this.message=null,this.note.title="",this.note.descr=""},removeNote(e){this.notes.splice(e,1)}}};const ne=(0,C.Z)(te,[["render",b]]);var re=ne;(0,r.ri)(re).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],i=e[c][2];for(var s=!0,l=0;l<r.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(s=!1,i<a&&(a=i));if(s){e.splice(c--,1);var d=o();void 0!==d&&(t=d)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],s=r[1],l=r[2],d=0;if(a.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var c=l(n)}for(t&&t(r);d<a.length;d++)i=a[d],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},r=self["webpackChunknotes_app"]=self["webpackChunknotes_app"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(889)}));r=n.O(r)})();