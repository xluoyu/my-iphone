import{r as e,o as t,c as a,a as o,b as n,d as s,e as l,f as p,D as r,g as c,u,T as i,h as d,i as m,F as h,j as v,k as y,t as g,w as f,p as k,l as w,m as A,n as b,q as L,s as S,v as x,S as T,P as _,x as E,y as C,z as M,A as I,B as N,C as R,E as B,G as D,N as P,H as O,I as $,J as j,K as F,L as H,M as q,O as V,Q as W,R as z}from"./vendor.332c1f71.js";let Y;!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const o=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,s)=>{const l=new URL(e,o);if(self[t].moduleMap[l])return a(self[t].moduleMap[l]);const p=new Blob([`import * as m from '${l}';`,`${t}.moduleMap['${l}']=m;`],{type:"text/javascript"}),r=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(p),onerror(){s(new Error(`Failed to import: ${e}`)),n(r)},onload(){a(self[t].moduleMap[l]),n(r)}});document.head.appendChild(r)})),self[t].moduleMap={}}}("/my-iphone/assets/");const U={},X=function(e,t){if(!t)return e();if(void 0===Y){const e=document.createElement("link").relList;Y=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in U)return;U[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":Y,t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e()))},K={};K.render=function(o,n){const s=e("router-view");return t(),a(s)};const G=e=>(e=(e=e.replace("px","")).replace("rem",""),Number(e)),J=e=>{let t=getComputedStyle(document.documentElement).getPropertyValue(e);return t=t.replace("rem",""),t=t.replace("px",""),Number(t)*(()=>{let e=document.documentElement.style.fontSize;return e=G(e)||1,e})()},Q=[{path:"",component:K,name:"home"},{path:"/alipay/:child*",component:K,name:"alipay",meta:{type:"app",style:"black"}},{path:"/music/:child*",component:()=>X((()=>__import__("./index.36812014.js")),["/my-iphone/assets/index.36812014.js","/my-iphone/assets/vendor.332c1f71.js","/my-iphone/assets/vendor.ef8eb434.css"]),name:"music",meta:{style:"white"}},{path:"/calculator/:child*",component:K,name:"calculator",meta:{type:"app",style:"white"}},{path:"/settings",component:()=>X((()=>__import__("./layout.7565aa78.js")),["/my-iphone/assets/layout.7565aa78.js","/my-iphone/assets/layout.c7f753f2.css","/my-iphone/assets/vendor.332c1f71.js","/my-iphone/assets/vendor.ef8eb434.css"]),name:"settings",redirect:"/settings/index",children:[{path:"index",component:()=>X((()=>__import__("./home.af1fba56.js")),["/my-iphone/assets/home.af1fba56.js","/my-iphone/assets/home.fc6d6c7c.css","/my-iphone/assets/vendor.332c1f71.js","/my-iphone/assets/vendor.ef8eb434.css"]),meta:{title:"设置",back:!1}},{path:"pwd",component:()=>X((()=>__import__("./pwd.525b0315.js")),["/my-iphone/assets/pwd.525b0315.js","/my-iphone/assets/vendor.332c1f71.js","/my-iphone/assets/vendor.ef8eb434.css"]),name:"pwd",meta:{title:"安全设置",back:!0}},{path:"setPwd",component:()=>X((()=>__import__("./setPwd.de135f37.js")),["/my-iphone/assets/setPwd.de135f37.js","/my-iphone/assets/setPwd.e5dab5c3.css","/my-iphone/assets/vendor.332c1f71.js","/my-iphone/assets/vendor.ef8eb434.css"]),name:"setPwd",meta:{back:!0,style:"black"}}]},{path:"/safari",component:()=>X((()=>__import__("./index.c8511f06.js")),["/my-iphone/assets/index.c8511f06.js","/my-iphone/assets/index.1a592086.css","/my-iphone/assets/vendor.332c1f71.js","/my-iphone/assets/vendor.ef8eb434.css"]),name:"safari"}],Z=o({history:n("/my-iphone/"),routes:Q});var ee,te,ae,oe,ne,se,le,pe;Z.beforeEach(((e,t,a)=>{"home"==e.name&&t.name&&history.pushState({back:t.path,current:"/my-iphone/",forward:null,position:null,replaced:!1,scroll:null},"","/my-iphone/"),a()})),(te=ee||(ee={})).App="App",te.Weather="Weather",te.AppArray="AppArray",(oe=ae||(ae={})).defaultApp="defaultApp",oe.customApp="customApp",oe.clock="clock",oe.camera="camera",oe.full="fullScreen",(se=ne||(ne={})).white="#515151",se.black="#fff",(pe=le||(le={})).Normal="normal",pe.Number="number",pe.Slide="slide",console.log("useLock");const re=s(!1),ce=s(le.Number),ue=s(""),ie=()=>({lockStatus:re,lockType:ce,lockPwd:ue,changeLockState:e=>{re.value="boolean"==typeof e?e:!re.value},setLockPwd:e=>{ue.value=e},setLockType:e=>{ce.value=e}}),de=s(!1);console.log("useAppDragStatus");let me=0;const he=()=>{const e=()=>{de.value=!de.value};let t=!1;const a=()=>{t=!0,e()};return{dragStatus:de,changeDragStatus:e,gotouchstart:e=>{de.value||e.stopPropagation(),de.value||(clearTimeout(me),me=window.setTimeout((()=>{me=0,a()}),600))},gotouchend:()=>{clearTimeout(me),t&&(t=!1)}}},ve=[{key:"alipay",type:ee.App,photo:"https://xluoyu.github.io/image-riverbed/iphone/alipay.png",name:"支付宝",useType:ae.customApp,status:!1},{key:"weather",type:ee.Weather,name:"天气",status:!0},{key:"settings",type:ee.App,useType:ae.defaultApp,photo:"https://xluoyu.github.io/image-riverbed/iphone/settings.png",name:"设置",status:!0},{key:"safari",type:ee.App,photo:"https://xluoyu.github.io/image-riverbed/iphone/safari.png",name:"Safari 浏览器",useType:ae.defaultApp,status:!0},{key:"photos",type:ee.App,photo:"https://xluoyu.github.io/image-riverbed/iphone/photos.png",name:"图库",useType:ae.defaultApp,status:!1},{key:"phone",type:ee.App,photo:"https://xluoyu.github.io/image-riverbed/iphone/phone.png",name:"phone",useType:ae.defaultApp,status:!1},{key:"appStore",type:ee.App,photo:"https://xluoyu.github.io/image-riverbed/iphone/appStore.png",name:"App Store",useType:ae.defaultApp,status:!1},{key:"music",type:ee.App,photo:"https://xluoyu.github.io/image-riverbed/iphone/music.png",name:"音乐",useType:ae.customApp,status:!0},{key:"camera",type:ee.App,photo:"https://xluoyu.github.io/image-riverbed/iphone/camera.png",name:"相机",useType:ae.camera,status:!0},{key:"fullScreen",type:ee.App,photo:"https://xluoyu.github.io/image-riverbed/iphone/arrow.png",name:"全屏",useType:ae.full,status:!0},{key:"calculator",type:ee.App,photo:"https://xluoyu.github.io/image-riverbed/iphone/calculator.png",name:"计算器",useType:ae.defaultApp,status:!1},{key:"messages",type:ee.App,photo:"https://xluoyu.github.io/image-riverbed/iphone/messages.png",name:"messages",useType:ae.defaultApp,status:!1},{key:"clock",type:ee.App,photo:"https://xluoyu.github.io/image-riverbed/iphone/clock.png",name:"锁屏",useType:ae.clock,status:!0}];console.log("useApp");const ye=s([{key:"weather",type:ee.Weather},{key:"appStore",type:ee.App},{key:"photos",type:ee.App},{key:"camera",type:ee.App},{name:"工具组",key:"array-0",type:ee.AppArray,children:[{key:"calculator",type:ee.App},{key:"alipay",type:ee.App},{key:"music",type:ee.App},{key:"calculator",type:ee.App},{key:"alipay",type:ee.App}]},{key:"clock",type:ee.App},{key:"fullScreen",type:ee.App}]),ge=()=>{const e=p((()=>t(ye.value))),t=(e,a)=>e.reduce(((e,o)=>{if(o.type!=ee.AppArray){let t=ve.find((e=>e.key==o.key));a&&(t.parent=a),e.push(t)}else e.push({name:o.name,type:o.type,key:o.key,children:o.children?t(o.children,o.key):[]});return e}),[]);return{localApp:ye,myApplist:e,clearApp:e=>{r.confirm({message:`确定要卸载${e.name}吗？`}).then((()=>{(e=>{let t=e.key,a=e.parent,o=a?ye.value.find((e=>e.key==a)).children:ye.value,n=o.findIndex((e=>e.key==t));o.splice(n,1)})(e)})).catch()},composeApps:(e,t)=>{var a;let o=ye.value,n=o.find((t=>t.key==e)),s=o.find((e=>e.key==t));if(n.type==ee.App){let e={name:"工具组",type:ee.AppArray,key:"appArray"+(new Date).getTime(),children:[n,s]};o.splice(o.indexOf(n),1,e),o.splice(o.indexOf(s),1)}else n.type==ee.AppArray&&(null==(a=n.children)||a.push(s),o.splice(o.indexOf(s),1));ye.value=o}}},fe=l({}),ke=s(null),we=()=>({currentApp:ke,changeCurrentApp:e=>{ke.value=e}});var Ae=c({name:"App",props:{app:{type:Object,default:()=>({})},size:{type:String,default:"normal"}},setup(e){const t=u(),{changeLockState:a}=ie(),{dragStatus:o}=he(),{clearApp:n}=ge(),{changeCurrentApp:s}=we();return{open:async()=>{if("mini"==e.size)return;if(o.value){if(e.app.type==ee.AppArray)return;return void n(e.app)}if(e.app.type==ee.AppArray)return void s(e.app);if(!e.app.status)return void i("这个还没写/(ㄒoㄒ)/~~");let l=e.app.key;switch(e.app.useType){case ae.clock:a();break;case ae.camera:!function(){let e=document.createElement("input");e.setAttribute("type","file"),e.setAttribute("accept","image/*"),e.setAttribute("capture","environment"),e.addEventListener("change",(()=>{const t=new FileReader;let a=e.files?e.files[0]:null;a&&(t.readAsDataURL(a),t.onload=t=>{document.body.removeChild(e),r.confirm({title:"图片预览",message:()=>{var e;return d("img",{src:null==(e=null==t?void 0:t.target)?void 0:e.result,style:{width:"100%"}})},confirmButtonText:"保存",cancelButtonText:"取消"}).then((()=>{i.success("保存成功")})).catch()})})),document.body.append(e),e.click()}();break;case ae.full:if(document.fullscreenElement)document.exitFullscreen();else try{document.documentElement.requestFullscreen().catch((()=>{i("这个浏览器好像不支持/(ㄒoㄒ)/~~")}))}catch(p){i("这个浏览器好像不支持/(ㄒoㄒ)/~~")}break;default:t.push({name:l})}},IItemKey:ee}}});const be=f();k("data-v-2e4102ee");const Le={key:1,class:"app-array"};w();const Se=be(((o,n,s,l,p,r)=>{const c=e("App");return t(),a("div",{class:["app",o.size],id:o.app.key,onClick:n[1]||(n[1]=(...e)=>o.open&&o.open(...e))},[o.app.type==o.IItemKey.App?(t(),a("img",{key:0,src:o.app.photo,alt:""},null,8,["src"])):m("",!0),o.app.type==o.IItemKey.AppArray?(t(),a("div",Le,[(t(!0),a(h,null,v(o.app.children,(e=>(t(),a(c,{key:e.key,app:e,size:"mini"},null,8,["app"])))),128))])):m("",!0),y("p",null,g(o.app.name),1)],10,["id"])}));Ae.render=Se,Ae.__scopeId="data-v-2e4102ee";var xe=c({components:{App:Ae},setup:()=>({appList:["phone","messages","safari","settings"].map((e=>ve.find((t=>t.key==e))))})});const Te=f();k("data-v-75e747f1");const _e={class:"dock"};w();const Ee=Te(((o,n,s,l,p,r)=>{const c=e("App");return t(),a("div",_e,[(t(!0),a(h,null,v(o.appList,(e=>(t(),a(c,{key:e.key,app:e},null,8,["app"])))),128))])}));xe.render=Ee,xe.__scopeId="data-v-75e747f1";var Ce=c({props:{app:{type:Object,default:()=>({})}},setup(){const{dragStatus:e,gotouchstart:t,gotouchend:a}=he();return{IItemKey:ee,dragStatus:e,gotouchstart:t,gotouchend:a}}});const Me=f()(((o,n,s,l,p,r)=>{const c=e("van-icon");return t(),a("div",{class:"app-box",onTouchstart:n[1]||(n[1]=(...e)=>o.gotouchstart&&o.gotouchstart(...e)),onTouchend:n[2]||(n[2]=(...e)=>o.gotouchend&&o.gotouchend(...e)),"data-id":o.app.key},[y("div",{class:""+(o.dragStatus?"shake":""),style:{width:"100%",height:"100%"}},[o.dragStatus&&o.app.type!=o.IItemKey.AppArray?(t(),a(c,{key:0,name:"clear",class:"close"})):m("",!0),A(o.$slots,"default",{},void 0,!0)],2)],40,["data-id"])}));Ce.render=Me,Ce.__scopeId="data-v-7a792e1c";var Ie=c({setup(){b((()=>{window.WIDGET={CONFIG:{layout:"1",width:"337",height:"152",background:"1",dataColor:"FFFFFF",modules:"10",borderRadius:"14",key:"bd944729128a411586b094b8ad992a74"}},((e,t)=>{const a=document.createElement("script");a.type="text/javascript",a.src=e,document.body.appendChild(a),a.onload=t||{}})("https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0",(()=>{L((()=>{let e=document.querySelector("#he-plugin-standard");e&&(e.style.width="100%")}))}))}))},methods:{navTo(){window.open("https://widget-page.qweather.net/h5/index.html?md=0123456&bg=1&lc=accu&key=6ccfdfa816e341a895dfe493d5d1f585&demo=true&v=_1619672129584")}}});const Ne=f();k("data-v-9fc31f9a");const Re={class:"weather"},Be=y("div",{id:"he-plugin-standard"},null,-1),De=y("p",null,"天气",-1);w();const Pe=Ne(((e,o,n,s,l,p)=>(t(),a("div",Re,[Be,De]))));Ie.render=Pe,Ie.__scopeId="data-v-9fc31f9a",console.log("useAppList");T.use([_]);let Oe=s(null);console.log("useSwiper");const $e=s(null);console.log("useAppDrag");var je=c({name:"Home",components:{Dock:xe,HandleApp:Ce},setup(){const{dragStatus:e,changeDragStatus:t}=he(),{appsList:a,curColumn:o}=(()=>{const e=s(0),t=J("--grid-row-gap"),a=J("--app-height"),o=J("--app-width"),n=J("--grid-col-gap"),{localApp:l,myApplist:p}=ge(),r=s([[]]),c=()=>{const s=document.querySelector(".swiper-slide");if(!s)return;let{width:l,height:c}=s.getBoundingClientRect();const u=Math.floor((c+t)/(a+t)),i=Math.floor((l+n)/(o+n));console.log(n),e.value=i;const d=u*i;let m=0,h=0,v=[[]];p.value.forEach((e=>{switch(e.type){case ee.App:h+=1,e.component=x(Ae);break;case ee.Weather:h+=2*i,e.component=x(Ie),e.style=`grid-column-start: 1;grid-column-end: ${i+1};grid-row-start:1;grid-row-end:3`;break;default:h+=1,e.component=x(Ae)}h>d?(h=0,v.push([e]),m+=1):v[m].push(e)})),r.value=v};return S(l.value,(()=>{c()})),b((()=>{window.addEventListener("resize",c),c()})),{appsList:r,curColumn:e}})(),{containerBgX:n,containerBgDuration:l,swiperMain:p}=(()=>{const e=s(0),t=s(0);return b((()=>{L((()=>{Oe.value=new T(".my-swipe",{pagination:{el:".swiper-pagination"},loop:!1,watchSlidesProgress:!0,on:{progress:(a,o)=>{let n=Number((50*o).toFixed(2));Math.abs(n-e.value)>20?t.value=.3:t.value=0,e.value=n}}})}))})),{containerBgX:e,containerBgDuration:t,swiperMain:Oe}})();b((()=>{(e=>{const{composeApps:t}=ge();let a=document.querySelector(e),o=0,n={animation:500,ghostClass:"box-ghost",forceFallback:!1,onStart:function(e){o=e.originalEvent.targetTouches[0].clientX-e.item.offsetLeft,o=e.item.offsetWidth/2-o,Oe.value.allowTouchMove=!1},onMove:function(e){const t=e.relatedRect.left+e.relatedRect.width/3,a=e.relatedRect.left+e.relatedRect.width/3*2,n=e.relatedRect.top+e.relatedRect.height/5,s=e.relatedRect.top+e.relatedRect.height/5*4,l=e.originalEvent.clientX+o,p=e.originalEvent.clientY;if(e.willInsertAfter){if(l>a)return e.related.classList.remove("changeToBox"),$e.value=null,!0}else if(l<t)return e.related.classList.remove("changeToBox"),$e.value=null,!0;return t<l&&l<a&&p>n&&p<s?(e.related.classList.add("changeToBox"),$e.value=e.related):(e.related.classList.remove("changeToBox"),$e.value=null),!1},onEnd:function(e){var a;s.toArray(),$e.value&&($e.value.classList.remove("changeToBox"),t(null==(a=$e.value)?void 0:a.dataset.id,e.item.dataset.id)),Oe.value.allowTouchMove=!0}};const s=E.create(a,n)})(".grid-box")})),S(a.value,(()=>{L((()=>{var e;null==(e=p.value)||e.update()}))}));return{test:()=>{document.documentElement.requestFullscreen()},curColumn:o,appsList:a,containerBgX:n,containerBgDuration:l,closeDarg:()=>{0!=e.value&&t()},dragStatus:e}}});const Fe=f();k("data-v-20162b8e");const He={class:"swiper-container my-swipe"},qe={class:"swiper-wrapper"},Ve=y("div",{class:"swiper-pagination"},null,-1);w();const We=Fe(((o,n,s,l,p,r)=>{const c=e("HandleApp"),u=e("Dock");return t(),a("div",{class:"container",style:`background-position-x: ${o.containerBgX}%;transition: background ${o.containerBgDuration}s;`},[o.dragStatus?(t(),a("div",{key:0,class:"closeHandle",onClick:n[1]||(n[1]=(...e)=>o.closeDarg&&o.closeDarg(...e))},"完成")):m("",!0),y("div",He,[y("div",qe,[(t(!0),a(h,null,v(o.appsList,((e,s)=>(t(),a("div",{class:"swiper-slide",key:s},[y("div",{class:"grid-box",onClick:n[2]||(n[2]=C(((...e)=>o.closeDarg&&o.closeDarg(...e)),["self"])),style:`grid-template-columns: repeat(${o.curColumn}, var(--app-width))`},[(t(!0),a(h,null,v(e,(e=>(t(),a(c,{key:e.key,style:e.style,app:e},{default:Fe((()=>[(t(),a(M(e.component),{app:e},null,8,["app"]))])),_:2},1032,["style","app"])))),128))],4)])))),128))]),Ve]),y(u)],4)}));je.render=We,je.__scopeId="data-v-20162b8e";var ze=c({emits:["closeApp"],setup(e,t){const a=I(),o=u(),n=s(!0),l=p((()=>{var e;return ne[(null==(e=a.meta)?void 0:e.style)||"white"]})),{changeRouterHistory:r}={appHistory:fe,changeRouterHistory:e=>{var t,a,o;let n=fe[e.appName];switch(e.type){case"add":if(fe[e.appName]){let n=null==(t=fe[e.appName])?void 0:t.indexOf(e.value);n&&-1!=n?fe[e.appName]=null==(a=fe[e.appName])?void 0:a.slice(0,n+1):null==(o=fe[e.appName])||o.push(e.value)}else fe[e.appName]=[e.value];break;case"remove":n=void 0;break;case"replace":fe[e.appName]=[e.value];break;default:null==n||n.push(e.value)}}};S((()=>a.path),(()=>{"home"!=a.name&&a.matched.length&&a.matched[0].name&&r({type:"add",appName:a.matched[0].name,value:a.fullPath})}));return{fade:n,color:l,closeApp:async()=>{n.value=!1,t.emit("closeApp"),setTimeout((()=>{o.push({name:"home"}),n.value=!0}),500)}}}});const Ye=f();k("data-v-3c572cd9");const Ue={class:"app-layout",ref:"appBox"},Xe={t:"1620283141610",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2038",width:"200",height:"200"},Ke={id:"routerView"};w();const Ge=Ye(((o,n,s,l,p,r)=>{const c=e("router-view");return t(),a("div",Ue,[y("div",{class:"close",onClick:n[1]||(n[1]=(...e)=>o.closeApp&&o.closeApp(...e))},[(t(),a("svg",Xe,[y("path",{d:"M512 0C228.96 0 0 228.96 0 512c0 283.04 228.96 512 512 512 283.04 0 512-228.96 512-512C1024 228.96 795.04 0 512 0z m0 903.52c-216.8 0-391.52-174.72-391.52-391.52 0-216.8 174.72-391.52 391.52-391.52 216.8 0 391.52 174.72 391.52 391.52 0 216.8-174.72 391.52-391.52 391.52z",fill:o.color,"p-id":"2039"},null,8,["fill"]),y("path",{d:"M316.16 512c0 108.16 87.68 195.84 195.84 195.84S707.84 620.16 707.84 512 620.16 316.16 512 316.16 316.16 403.84 316.16 512z m0 0",fill:o.color,"p-id":"2040"},null,8,["fill"])]))]),o.$route.meta&&"app"==o.$route.meta.type?m("",!0):(t(),a(c,{key:0},{default:Ye((({Component:e})=>[y(N,{name:"fade"},{default:Ye((()=>[(t(),a(M(e),{ref:"component"},null,512))])),_:2},1024)])),_:1})),y(N,{name:"fade"},{default:Ye((()=>[R(y("div",Ke,"系统加载中...",512),[[B,"app"==o.$route.meta.type]])])),_:1})],512)}));ze.render=Ge,ze.__scopeId="data-v-3c572cd9";const Je=D.create({baseURL:"/",timeout:1e4});Je.interceptors.request.use((e=>(e.headers["Content-Type"]="application/x-www-form-urlencoded","post"===e.method&&e.data?(e.data=JSON.stringify(e.data),e.headers["Content-Type"]="application/json",e):e)),(e=>(console.log(e),Promise.reject(e)))),Je.interceptors.response.use((e=>e.data),(e=>(console.log("err"+e),P(e.message),Promise.reject(e))));const Qe=[1,2,3,4,5,6,7,8,9];var Ze=c({props:{password:{type:String,default:""}},emits:["callback","close"],setup(e,t){const a=s([]),o=s(!1),n=()=>{let n=a.value.join("");e.password&&e.password!=n?(o.value=!0,setTimeout((()=>{o.value=!1,a.value=[],t.emit("callback",n,!1)}),500)):(a.value=[],t.emit("callback",n,!0))};return{keys:Qe,inputList:a,dance:o,ketDown:e=>{a.value.length>=6||(a.value.push(e),6==a.value.length&&n())},cancel:()=>{t.emit("close")},remove:()=>{a.value.pop()}}}});const et=f();k("data-v-44182a9e");const tt={class:"keyboard"},at=y("div",{class:"btn empty"},null,-1),ot=y("div",{class:"btn empty"},null,-1),nt={class:"handle"},st=y("div",null,null,-1);w();const lt=et(((e,o,n,s,l,p)=>(t(),a("div",null,[y("div",{class:{input:!0,dance:e.dance}},[(t(),a(h,null,v(6,(t=>y("div",{class:{garden:!0,fill:e.inputList.length>=t},key:t},null,2))),64))],2),y("div",tt,[(t(!0),a(h,null,v(e.keys,(o=>(t(),a("div",{class:"btn",key:o,onTouchend:t=>e.ketDown(o)},g(o),41,["onTouchend"])))),128)),at,y("div",{class:"btn",onTouchend:o[1]||(o[1]=t=>e.ketDown(0))},"0",32),ot]),y("div",nt,[A(e.$slots,"default",{},(()=>[st]),{}),R(y("div",{onClick:o[2]||(o[2]=(...t)=>e.remove&&e.remove(...t))},"删除",512),[[B,e.inputList.length]]),R(y("div",{onClick:o[3]||(o[3]=(...t)=>e.cancel&&e.cancel(...t))},"取消",512),[[B,!e.inputList.length]])])]))));Ze.render=lt,Ze.__scopeId="data-v-44182a9e";var pt=c({components:{numberLock:Ze},emits:["openLock","cancel"],setup(e,t){const{lockPwd:a}=ie();return{password:a,op:()=>{t.emit("openLock")},cancel:()=>{t.emit("cancel")},lockCallback:(e,a)=>{a&&t.emit("openLock")}}}});const rt=f();k("data-v-07215331");const ct={class:"container"},ut=y("div",{class:"top"},"输入密码",-1);w();const it=rt(((o,n,s,l,p,r)=>{const c=e("numberLock");return t(),a("div",ct,[ut,y(c,{password:o.password,onCallback:o.lockCallback,onClose:o.cancel},{default:rt((()=>[y("div",{onClick:n[1]||(n[1]=(...e)=>o.op&&o.op(...e))},"紧急操作")])),_:1},8,["password","onCallback","onClose"])])}));pt.render=it,pt.__scopeId="data-v-07215331";const dt=80,mt="#fff",ht="#27ae60",vt="#c0392b",yt=10,gt=30,ft=30;const kt=(e,t,a)=>Math.sqrt(Math.pow(a.x-e,2)+Math.pow(a.y-t,2))<=dt/2;var wt=c({props:{password:{type:String,default:""}},emits:["callback"],setup(e,t){const{canvasEl:a,canvasMoveStart:o,canvasMove:n,canvasMoveEnd:p}=function(){const e=l({width:0,height:0,left:0,top:0}),t=s([]),a=s([]);let o,n=s(null);const p=()=>{const a=n.value;if(a){if(o=a.getContext("2d"),e.width=a.width,e.height=a.height,e.left=a.offsetLeft,e.top=a.offsetTop,t.value=[],9!=t.value.length)for(let e=0;e<9;e++){let{x:a,y:o}=r(e),n={x:a,y:o,status:!1,value:e};t.value.push(n)}o.clearRect(0,0,e.width,e.height),t.value.forEach((e=>{c(e)}))}},r=e=>({x:dt*(e%3)+gt*(e%3)+dt/2,y:dt*Math.floor(e/3)+ft*Math.floor(e/3)+dt/2}),c=(e,t=!0)=>{let a=mt;e.status&&(a=t?ht:vt),o.beginPath(),o.arc(e.x,e.y,dt/2-1,0,2*Math.PI,!0),o.strokeStyle=a,o.lineWidth=1,o.stroke(),o.beginPath(),o.arc(e.x,e.y,yt/2,0,2*Math.PI,!0),o.fillStyle=a,o.fill()},u=(n,s,l,p=!0)=>{o.clearRect(0,0,e.width,e.height),o.save(),o.beginPath(),o.strokeStyle=p?ht:vt,o.lineWidth=6,o.lineJoin="round",o.lineCap="round",a.value.forEach(((e,a)=>{0==a?o.moveTo(t.value[e-1].x,t.value[e-1].y):o.lineTo(t.value[e-1].x,t.value[e-1].y)})),l&&a.value.length&&o.lineTo(n,s),o.stroke(),o.restore(),t.value.forEach((e=>{kt(n,s,e)&&!e.status&&(a.value.push(e.value+1),e.status=!0),c(e,p)}))};return b(p),{canvasEl:n,canvasMoveStart:t=>{let{pageX:a,pageY:o}=t.targetTouches[0];a-=e.left,o-=e.top,u(a,o,!0)},canvasMove:t=>{let{pageX:a,pageY:o}=t.targetTouches[0];a-=e.left,o-=e.top,u(a,o,!0)},canvasMoveEnd:(e,t)=>{let o=a.value.join(""),n=!e||o==e;u(0,0,!1,n),t.emit("callback",o,n),a.value=[],setTimeout((()=>{p()}),300)}}}();return{canvasEl:a,canvasMoveStart:o,canvasMove:n,canvasMoveEnd:()=>{p(e.password,t)}}}});const At=f()(((e,o,n,s,l,p)=>(t(),a("canvas",{class:"lock-canvas",ref:"canvasEl",width:"300",height:"300",onTouchstart:o[1]||(o[1]=(...t)=>e.canvasMoveStart&&e.canvasMoveStart(...t)),onTouchmove:o[2]||(o[2]=(...t)=>e.canvasMove&&e.canvasMove(...t)),onTouchend:o[3]||(o[3]=(...t)=>e.canvasMoveEnd&&e.canvasMoveEnd(...t))},null,544))));wt.render=At,wt.__scopeId="data-v-4a5eff36";var bt=c({components:{SlideLock:wt},emits:["openLock","cancel"],setup(e,t){const{lockPwd:a}=ie(),o=()=>{t.emit("openLock")};return{password:a,lockCb:(e,t)=>{t&&o()},op:o,cancel:()=>{t.emit("cancel")}}}});const Lt=f();k("data-v-819ee4a4");const St={class:"container"},xt=y("div",{class:"top"},"手势解锁",-1),Tt={class:"handle"};w();const _t=Lt(((o,n,s,l,p,r)=>{const c=e("SlideLock");return t(),a("div",St,[xt,y(c,{password:o.password,onCallback:o.lockCb},null,8,["password","onCallback"]),y("div",Tt,[y("div",{onClick:n[1]||(n[1]=(...e)=>o.op&&o.op(...e))},"紧急操作"),y("div",{onClick:n[2]||(n[2]=(...e)=>o.cancel&&o.cancel(...e))},"取消")])])}));bt.render=_t,bt.__scopeId="data-v-819ee4a4";const Et=["日","一","二","三","四","五","六"];function Ct(){const e=s("");return Je({url:"https://v1.hitokoto.cn/",method:"get"}).then((t=>{e.value=t.hitokoto})),e}var Mt=c({components:{NumberView:pt,SlideView:bt},setup(){const e=s(le.Normal),{lockPwd:t,changeLockState:a}=ie(),{time:o,date:n}=function(){let e=s(""),t=s("");const a=()=>{let a=new Date,o=a.getMonth()+1,n=a.getDate(),s=a.getHours();s=s<10?"0"+s:s;let l=a.getMinutes();l=l<10?"0"+l:l;let p=a.getDay();e.value=s+":"+l,t.value=o+"月"+n+"日 周"+Et[p]};return a(),setTimeout(a,1e3),{time:e,date:t}}(),{transition:l,curBlurNum:p,translateY:r,windowHeight:c,touchStart:u}=function(e,t){const a=s(0),o=s(0),n=s(0),l=s(667|window.innerHeight),{lockType:p,changeLockState:r}=ie();return{transition:a,curBlurNum:o,translateY:n,windowHeight:l,touchStart:s=>{let c=s.touches[0].pageY,u=0,i=0,d=e=>{a.value=0;let t=e.touches[0].pageY;u=c-t,i=Math.floor(u/(.8*l.value)*100)/10,o.value=Math.max(0,i),n.value=Math.max(0,u)},m=()=>{a.value=.3,u=u>.2*l.value?l.value:0,n.value=u,o.value=u?1:0,n.value&&setTimeout((()=>{t.value&&p.value!=le.Normal?e.value=p.value:r()}),100),document.removeEventListener("touchmove",d),document.removeEventListener("touchend",m)};document.addEventListener("touchmove",d),document.addEventListener("touchend",m)}}}(e,t),i=Ct();return{lockStep:e,time:o,date:n,transition:l,curBlurNum:p,translateY:r,windowHeight:c,touchStart:u,LockType:le,tipsContent:i,openLock:()=>{setTimeout((()=>{a(),e.value=le.Normal}),100)},cancel:()=>{e.value=le.Normal}}}});const It=f();k("data-v-5aea46a8");const Nt=y("img",{src:"https://xluoyu.github.io/image-riverbed/iphone/background/background.jpg",alt:"",class:"bg"},null,-1),Rt={class:"top"},Bt=y("span",null,"向上滑动解锁",-1),Dt={class:"time-box"},Pt={class:"tips"};w();const Ot=It(((o,n,s,l,p,r)=>{const c=e("van-icon"),u=e("NumberView"),i=e("SlideView");return t(),a("div",{class:"lock",onTouchstart:n[1]||(n[1]=(...e)=>o.touchStart&&o.touchStart(...e))},[Nt,o.lockStep==o.LockType.Normal?(t(),a("div",{key:0,class:"notice-container",style:`-webkit-backdrop-filter: blur(${o.curBlurNum}px);transition: all ${o.transition}s;transform: translateY(-${o.translateY}px);`},[y("div",Rt,[y(c,{name:"lock",color:"#fff"}),Bt]),y("div",Dt,[y("h2",null,g(o.time),1),y("p",null,g(o.date),1),y("p",Pt,g(o.tipsContent),1)])],4)):m("",!0),o.lockStep==o.LockType.Number?(t(),a(u,{key:1,onOpenLock:o.openLock,onCancel:o.cancel},null,8,["onOpenLock","onCancel"])):m("",!0),o.lockStep==o.LockType.Slide?(t(),a(i,{key:2,onOpenLock:o.openLock,onCancel:o.cancel},null,8,["onOpenLock","onCancel"])):m("",!0)],32)}));Mt.render=Ot,Mt.__scopeId="data-v-5aea46a8";var $t=c({components:{App:Ae},setup(){const{currentApp:e,changeCurrentApp:t}=we();let a=document.documentElement.offsetWidth,o=document.documentElement.offsetHeight;const n=p((()=>Boolean(e)));let s=null;return{show:n,currentApp:e,beforeEnter:t=>{var n;let l=null==(n=e.value)?void 0:n.key;s=document.querySelector("#"+l);let{top:p,left:r,width:c,height:u}=s.getBoundingClientRect();console.log(l,{top:p,left:r,width:c,height:u});let i=p+u/2-.16*o+.15*(p-o/2),d=r+c/2-.1*a+.15*(r-a/2);i=Number(i.toFixed(2)),d=Number(d.toFixed(2)),s.style.opacity="0",t.style.transformOrigin=`${d}px ${i}px`},afterLeave:()=>{s.style.opacity="1"},closeArray:()=>{t(null)}}}});const jt=f();k("data-v-ca839222");const Ft={key:0,class:"app-array"},Ht={class:"app-box"};w();const qt=jt(((o,n,s,l,p,r)=>{const c=e("App");return t(),a(h,null,[y(N,{name:"appArray",onBeforeEnter:o.beforeEnter,onAfterLeave:o.afterLeave},{default:jt((()=>[o.show&&o.currentApp?(t(),a("div",Ft,[R(y("input",{type:"text","onUpdate:modelValue":n[1]||(n[1]=e=>o.currentApp.name=e),class:"box-title"},null,512),[[O,o.currentApp.name]]),y("div",Ht,[(t(!0),a(h,null,v(o.currentApp.children,(e=>(t(),a(c,{key:e.key,app:e},null,8,["app"])))),128))])])):m("",!0)])),_:1},8,["onBeforeEnter","onAfterLeave"]),o.show&&o.currentApp?(t(),a("div",{key:0,class:"app-array-bg",onClick:n[2]||(n[2]=C(((...e)=>o.closeArray&&o.closeArray(...e)),["self"]))})):m("",!0)],64)}));$t.render=qt,$t.__scopeId="data-v-ca839222";var Vt=c({name:"App",components:{Home:je,Lock:Mt,AppArray:$t,AppLayout:ze},setup(){const{lockStatus:e}=ie(),t=s(!1),a=I();return{routeStatus:p((()=>!(t.value||!a.matched.length)&&"home"!=a.name)),lockStatus:e,closeApp:()=>{t.value=!0,setTimeout((()=>{t.value=!1}),600)},beforeEnter:e=>{let t=a.matched[0].name||"",o=document.querySelector(`#${String(t)}`),{top:n,left:s,width:l,height:p}=o.getBoundingClientRect(),r=p/2+n,c=l/2+s;e.style.transformOrigin=`${c}px ${r}px`}}}});const Wt={class:"page"};Vt.render=function(o,n,s,l,p,r){const c=e("Lock"),u=e("AppArray"),i=e("Home"),d=e("app-layout");return t(),a("div",Wt,[o.lockStatus?(t(),a(c,{key:0})):m("",!0),y(u),y(i),y(N,{name:"app",onBeforeEnter:o.beforeEnter},{default:$((()=>[R(y(d,{onCloseApp:o.closeApp},null,8,["onCloseApp"]),[[B,o.routeStatus]])])),_:1},8,["onBeforeEnter"])])};var zt={install:e=>{e.use(j).use(F).use(H).use(P).use(q).use(V).use(i).use(r)}};W();const Yt=z(Vt);Yt.use(Z),Yt.use(zt),Yt.mount("#app");export{le as I,Ze as _,wt as a,ie as u};
