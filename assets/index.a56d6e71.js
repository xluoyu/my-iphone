var t=Object.defineProperty,e=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,o=Object.prototype.propertyIsEnumerable,s=(e,a,o)=>a in e?t(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o,n=(t,n)=>{for(var c in n||(n={}))e.call(n,c)&&s(t,c,n[c]);if(a)for(var c of a(n))o.call(n,c)&&s(t,c,n[c]);return t};import{d as c,h as p,c as i,a as r,b as l,m as h,o as u,e as d,f as m,t as g,w as v,p as y,g as k,r as f,F as w,i as b,j as x,k as L,l as A,n as S,u as $,q as T,s as _,v as C,x as H,S as E,P as M,y as P,z as N,A as I,T as D,B as O,N as z,C as R,D as j,E as Q,G as B,H as F,I as Z,J as W,K as q,L as U,M as V,O as Y,Q as G,R as K,U as J}from"./vendor.2388c79a.js";let X;!function(t=".",e="__import__"){try{self[e]=new Function("u","return import(u)")}catch(a){const o=new URL(t,location),s=t=>{URL.revokeObjectURL(t.src),t.remove()};self[e]=t=>new Promise(((a,n)=>{const c=new URL(t,o);if(self[e].moduleMap[c])return a(self[e].moduleMap[c]);const p=new Blob([`import * as m from '${c}';`,`${e}.moduleMap['${c}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(p),onerror(){n(new Error(`Failed to import: ${t}`)),s(i)},onload(){a(self[e].moduleMap[c]),s(i)}});document.head.appendChild(i)})),self[e].moduleMap={}}}("assets/");const tt={},et=function(t,e){if(!e)return t();if(void 0===X){const t=document.createElement("link").relList;X=t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(e.map((t=>{if(t in tt)return;tt[t]=!0;const e=t.endsWith(".css"),a=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${a}`))return;const o=document.createElement("link");return o.rel=e?"stylesheet":X,e||(o.as="script",o.crossOrigin=""),o.href=t,document.head.appendChild(o),e?new Promise(((t,e)=>{o.addEventListener("load",t),o.addEventListener("error",e)})):void 0}))).then((()=>t()))},at=c({render(){return p("template",this.$slots.default&&this.$slots.default())}}),ot=[{path:"/",component:at,name:"home"},{path:"/alipay/*",component:at,name:"alipay",meta:{type:"app",style:"black"}},{path:"/music/:child*",component:at,name:"music",meta:{type:"app",style:"white"}},{path:"/calculator/:child*",component:at,name:"calculator",meta:{type:"app",style:"white"}},{path:"/settings",component:()=>et((()=>__import__("./layout.9752adff.js")),["./assets/layout.9752adff.js","./assets/layout.874931e7.css","./assets/vendor.2388c79a.js","./assets/vendor.d2a23fc6.css"]),name:"settings",children:[{path:"",component:()=>et((()=>__import__("./home.d4516ea9.js")),["./assets/home.d4516ea9.js","./assets/home.6012867f.css","./assets/vendor.2388c79a.js","./assets/vendor.d2a23fc6.css"]),name:"settings",meta:{title:"设置",back:!1}},{path:"/settings/pwd",component:()=>et((()=>__import__("./pwd.91be937d.js")),["./assets/pwd.91be937d.js","./assets/vendor.2388c79a.js","./assets/vendor.d2a23fc6.css"]),name:"pwd",meta:{title:"安全设置",back:!0}},{path:"/settings/setPwd",component:()=>et((()=>__import__("./setPwd.c904f77e.js")),["./assets/setPwd.c904f77e.js","./assets/setPwd.60777fb7.css","./assets/vendor.2388c79a.js","./assets/vendor.d2a23fc6.css"]),name:"setPwd",meta:{title:"",back:!0,style:"black"}}]}],st=i({history:r(),routes:ot});var nt,ct,pt,it,rt,lt;st.beforeEach(((t,e,a)=>{console.log(t),"home"==t.name&&history.pushState({back:e.path,current:t.path,forward:null,position:null,replaced:!1,scroll:null},"",t.path),a()})),(ct=nt||(nt={})).App="App",ct.Weather="Weather",(it=pt||(pt={})).white="#515151",it.black="#fff",(lt=rt||(rt={})).Normal="normal",lt.Number="number",lt.Slide="slide";const ht={namespaced:!0,state:()=>({lockStatus:!1,lockType:rt.Number,lockNumberPwd:"147258"}),mutations:{changeLock(t,e){t.lockStatus=e},changeLockPwd(t,e){t.lockNumberPwd=e},changeLockType(t,e){t.lockType=e}}},ut=[{key:"alipay",type:nt.App,photo:"https://imgsrc.baidu.com/forum/pic/item/203fb80e7bec54e78571908cb7389b504ec26a87.jpg",name:"支付宝"},{key:"weather",type:nt.Weather,name:"天气"},{key:"settings",type:nt.App,photo:"https://z3.ax1x.com/2021/05/06/gQZGRI.png",name:"设置"},{key:"safari",type:nt.App,photo:"https://z3.ax1x.com/2021/05/06/gQZ8JA.png",name:"Safari 浏览器"},{key:"photos",type:nt.App,photo:"https://z3.ax1x.com/2021/05/06/gQZ3id.png",name:"photos"},{key:"phone",type:nt.App,photo:"https://z3.ax1x.com/2021/05/06/gQZlIH.png",name:"phone"},{key:"appStore",type:nt.App,photo:"https://z3.ax1x.com/2021/05/06/gQZQde.png",name:"App Store"},{key:"music",type:nt.App,photo:"https://z3.ax1x.com/2021/05/06/gQZMZD.png",name:"音乐"},{key:"camera",type:nt.App,photo:"https://z3.ax1x.com/2021/05/06/gQZuqO.png",name:"camera"},{key:"calculator",type:nt.App,photo:"https://z3.ax1x.com/2021/05/06/gQZnsK.png",name:"calculator"},{key:"messages",type:nt.App,photo:"https://z3.ax1x.com/2021/05/06/gQZmM6.png",name:"messages"},{key:"clock",type:nt.App,photo:"https://z3.ax1x.com/2021/05/06/glUSTH.png",name:"锁屏"},{key:"camera2",type:nt.App,photo:"https://z3.ax1x.com/2021/05/06/gQZuqO.png",name:"camera"},{key:"calculator2",type:nt.App,photo:"https://z3.ax1x.com/2021/05/06/gQZnsK.png",name:"calculator"},{key:"messages2",type:nt.App,photo:"https://z3.ax1x.com/2021/05/06/gQZmM6.png",name:"messages"},{key:"clock2",type:nt.App,photo:"https://z3.ax1x.com/2021/05/06/glUSTH.png",name:"锁屏"},{key:"camera3",type:nt.App,photo:"https://z3.ax1x.com/2021/05/06/gQZuqO.png",name:"camera"},{key:"calculator3",type:nt.App,photo:"https://z3.ax1x.com/2021/05/06/gQZnsK.png",name:"calculator"},{key:"messages3",type:nt.App,photo:"https://z3.ax1x.com/2021/05/06/gQZmM6.png",name:"messages"},{key:"clock3",type:nt.App,photo:"https://z3.ax1x.com/2021/05/06/glUSTH.png",name:"锁屏"},{key:"camera4",type:nt.App,photo:"https://z3.ax1x.com/2021/05/06/gQZuqO.png",name:"camera"},{key:"calculator4",type:nt.App,photo:"https://z3.ax1x.com/2021/05/06/gQZnsK.png",name:"calculator"},{key:"messages4",type:nt.App,photo:"https://z3.ax1x.com/2021/05/06/gQZmM6.png",name:"messages"},{key:"clock4",type:nt.App,photo:"https://z3.ax1x.com/2021/05/06/glUSTH.png",name:"锁屏"}],dt=l({state:()=>({closeBeforeFn:null,appDragStatus:!1,routerHistory:{}}),mutations:{changeCloseBeforeFn(t,e){t.closeBeforeFn=e},changeAppDragStatus(t,e){t.appDragStatus=e},changeRouterHistory(t,e){var a;let o=t.routerHistory[e.appName];switch(e.type){case"add":t.routerHistory[e.appName]?null==(a=t.routerHistory[e.appName])||a.push(e.value):t.routerHistory[e.appName]=[e.value];break;case"remove":o=void 0;break;case"replace":t.routerHistory[e.appName]=[e.value];break;default:null==o||o.push(e.value)}}},actions:{onCloseBrofreFn:async t=>!t.state.closeBeforeFn||await t.state.closeBeforeFn()},modules:{LockStore:ht,AppStore:{namespaced:!0,state:()=>({myAppIds:["weather","appStore","photos","music","camera","calculator","clock","alipay"]}),getters:{myAppList:t=>t.myAppIds.map((t=>ut.find((e=>e.key==t))))},mutations:{removeApp(t,e){let a=t.myAppIds.indexOf(e);t.myAppIds.splice(a,1)}}}}});var mt=c({props:{app:{type:Object,default:()=>({})}},computed:n({},h({appDragStatus:t=>t.appDragStatus})),methods:{open(){if(this.appDragStatus)return;let t=this.app.key;switch(t){case"clock":this.$store.commit("LockStore/changeLock",!0);break;case"camera":let a=document.createElement("input");a.setAttribute("type","file"),a.setAttribute("accept","image/*"),a.setAttribute("capture","environment"),a.addEventListener("change",(()=>{const t=new FileReader;let e=a.files?a.files[0]:null;e&&(t.readAsDataURL(e),t.onload=t=>{document.body.removeChild(a),this.$dialog.confirm({title:"图片预览",message:()=>{var e;return p("img",{src:null==(e=null==t?void 0:t.target)?void 0:e.result,style:{width:"100%"}})},confirmButtonText:"保存",cancelButtonText:"取消"}).then((()=>{console.log("确定"),this.$toast.success("保存成功")})).catch((()=>{console.log("关闭")}))})})),document.body.append(a),a.click();break;default:let o=this.$store.state.routerHistory[t];if(o&&o.length)o.forEach((t=>{requestAnimationFrame((()=>{this.$router.push({path:t})}))})),this.$store.commit("changeRouterHistory",{type:"replace",appName:this.$route.matched[0].name,value:this.$route.path});else try{this.$router.push({name:t})}catch(e){this.$toast("这个还没写/(ㄒoㄒ)/~~")}}}}});const gt=v()(((t,e,a,o,s,n)=>(u(),d("div",{class:"app",id:t.app.key,onClick:e[1]||(e[1]=(...e)=>t.open&&t.open(...e))},[m("img",{src:t.app.photo,alt:""},null,8,["src"]),m("p",null,g(t.app.name),1)],8,["id"]))));mt.render=gt,mt.__scopeId="data-v-013b9832";var vt=c({components:{App:mt},setup:()=>({appList:["phone","messages","safari","settings"].map((t=>ut.find((e=>e.key==t))))})});const yt=v();y("data-v-5480dd67");const kt={class:"dock"};k();const ft=yt(((t,e,a,o,s,n)=>{const c=f("App");return u(),d("div",kt,[(u(!0),d(w,null,b(t.appList,(t=>(u(),d(c,{key:t.key,app:t},null,8,["app"])))),128))])}));vt.render=ft,vt.__scopeId="data-v-5480dd67";let wt=0;var bt=c({props:{app:{type:Object,default:()=>({})}},computed:n({},h({appDragStatus:t=>t.appDragStatus})),methods:{clearApp(){this.$dialog.confirm({message:`确定要卸载${this.app.name}吗？`}).then((()=>{console.log("开始卸载"),this.$store.commit("AppStore/removeApp",this.app.key)}))},longTap(){this.$store.commit("changeAppDragStatus",!0)},gotouchstart(){clearTimeout(wt),wt=setTimeout((()=>{wt=0,this.longTap()}),600)},gotouchend(){clearTimeout(wt)}}});const xt=v()(((t,e,a,o,s,n)=>{const c=f("van-icon");return u(),d("div",{class:`app-box ${t.appDragStatus?"shake":""} `,onTouchstart:e[1]||(e[1]=(...e)=>t.gotouchstart&&t.gotouchstart(...e)),onTouchend:e[2]||(e[2]=(...e)=>t.gotouchend&&t.gotouchend(...e))},[t.appDragStatus?(u(),d(c,{key:0,name:"clear",class:"close",onTouchend:t.clearApp},null,8,["onTouchend"])):x("",!0),L(t.$slots,"default",{},void 0,!0)],34)}));bt.render=xt,bt.__scopeId="data-v-e5b1cc7a";const Lt=t=>document.body.clientWidth/375*t;var At=c({setup(){let t=document.getElementsByTagName("html")[0];getComputedStyle(t).getPropertyValue("--appHeight"),A((()=>{window.WIDGET={CONFIG:{layout:"1",width:"337",height:"152",background:"1",dataColor:"FFFFFF",modules:"10",borderRadius:"14",key:"bd944729128a411586b094b8ad992a74"}},((t,e)=>{const a=document.createElement("script");a.type="text/javascript",a.src=t,document.body.appendChild(a),a.onload=e||{}})("https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0",(()=>{S((()=>{let t=document.querySelector("#he-plugin-standard");t&&(t.style.width="100%")}))}))}))},methods:{navTo(){window.open("https://widget-page.qweather.net/h5/index.html?md=0123456&bg=1&lc=accu&key=6ccfdfa816e341a895dfe493d5d1f585&demo=true&v=_1619672129584")}}});const St=v();y("data-v-623c473a");const $t={class:"weather"},Tt=m("div",{id:"he-plugin-standard"},null,-1),_t=m("p",null,"天气",-1);k();const Ct=St(((t,e,a,o,s,n)=>(u(),d("div",$t,[Tt,_t]))));At.render=Ct,At.__scopeId="data-v-623c473a";E.use([M]);const Ht=v();y("data-v-d218c538");const Et={class:"swiper-container my-swipe"},Mt={class:"swiper-wrapper"},Pt=m("div",{class:"swiper-pagination"},null,-1);k();var Nt=c({expose:[],setup(t){const{appsList:e}=(()=>{const t=$(),e=T((()=>t.getters["AppStore/myAppList"])),a=_([[]]),o=()=>{const t=document.querySelector(".grid-box");if(!t)return;const o=(null==t?void 0:t.clientHeight)||0;let s=Math.floor(o/Lt(92));o-s*Lt(92)>=Lt(84)&&(s+=1);let n=0,c=0;a.value=[[]],e.value.forEach(((t,o)=>{switch(t.type){case nt.App:c+=1,t.component=H(mt);break;case nt.Weather:let e=Math.ceil(c/4);c+=8,t.component=H(At),t.style=`grid-column-start: 1;grid-column-end: 5;grid-row-start: ${e+1};grid-row-end: ${e+3};`;break;default:c+=1,t.component=H(mt)}a.value[n].push(t),(c>=4*s||o==e.value.length-1)&&(c=0,o!=e.value.length-1&&(a.value.push([]),n+=1))}))};return C(t.state.AppStore.myAppIds,(()=>{console.log("监听到改变"),o()})),A((()=>{window.addEventListener("resize",(()=>{o()})),o()})),{appsList:a}})(),{containerBgX:a,containerBgDuration:o,swiperMain:s}=(()=>{const t=_(0),e=_(0);let a=_(null);return A((()=>{S((()=>{a.value=new E(".my-swipe",{pagination:{el:".swiper-pagination"},loop:!1,watchSlidesProgress:!0,on:{progress:(a,o)=>{let s=Number((50*o).toFixed(2));Math.abs(s-t.value)>20?e.value=.3:e.value=0,t.value=s}}})}))})),{containerBgX:t,containerBgDuration:e,swiperMain:a}})();C(e,(()=>{S((()=>{var t;null==(t=s.value)||t.update()}))}));const n=$(),c=T((()=>n.state.appDragStatus)),p=()=>{0!=c.value&&n.commit("changeAppDragStatus",!1)};return(t,s)=>(u(),d("div",{class:"container",style:`background-position-x: ${P(a)}%;transition: background ${P(o)}s;`},[P(c)?(u(),d("div",{key:0,class:"closeHandle",onClick:p},"完成")):x("",!0),m("div",Et,[m("div",Mt,[(u(!0),d(w,null,b(P(e),((t,e)=>(u(),d("div",{class:"swiper-slide",key:e},[m("div",{class:"grid-box",onClick:N(p,["self"])},[(u(!0),d(w,null,b(t,(t=>(u(),d(bt,{key:t.key,style:t.style,app:t},{default:Ht((()=>[(u(),d(I(t.component),{app:t},null,8,["app"]))])),_:2},1032,["style","app"])))),128))],8,["onClick"])])))),128))]),Pt]),m(vt)],4))}});Nt.__scopeId="data-v-d218c538";var It=c({emits:["closeApp"],data:()=>({fade:!0}),computed:{color(){var t;return pt[(null==(t=this.$route.meta)?void 0:t.style)||"white"]}},watch:{"$route.path"(){"home"!=this.$route.name&&this.$route.matched.length&&this.$store.commit("changeRouterHistory",{type:"add",appName:this.$route.matched[0].name,value:this.$route.path})}},methods:{async closeApp(){await dt.dispatch("onCloseBrofreFn")&&("app"==this.$route.meta.type?(this.fade=!1,this.$emit("closeApp"),setTimeout((()=>{this.$router.push({name:"home"}),this.fade=!0}),500)):this.$router.push({name:"home"}))},async sleep(){setTimeout((()=>{}),300)}}});const Dt=v();y("data-v-533ef4b0");const Ot={class:"app-layout",ref:"appBox"},zt={t:"1620283141610",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2038",width:"200",height:"200"},Rt=m("div",{id:"routerView"},"系统加载中...",-1);k();const jt=Dt(((t,e,a,o,s,n)=>{const c=f("router-view");return u(),d("div",Ot,[m("div",{class:"close",onClick:e[1]||(e[1]=(...e)=>t.closeApp&&t.closeApp(...e))},[(u(),d("svg",zt,[m("path",{d:"M512 0C228.96 0 0 228.96 0 512c0 283.04 228.96 512 512 512 283.04 0 512-228.96 512-512C1024 228.96 795.04 0 512 0z m0 903.52c-216.8 0-391.52-174.72-391.52-391.52 0-216.8 174.72-391.52 391.52-391.52 216.8 0 391.52 174.72 391.52 391.52 0 216.8-174.72 391.52-391.52 391.52z",fill:t.color,"p-id":"2039"},null,8,["fill"]),m("path",{d:"M316.16 512c0 108.16 87.68 195.84 195.84 195.84S707.84 620.16 707.84 512 620.16 316.16 512 316.16 316.16 403.84 316.16 512z m0 0",fill:t.color,"p-id":"2040"},null,8,["fill"])]))]),"app"!=t.$route.meta.type?(u(),d(c,{key:0},{default:Dt((({Component:t})=>[m(D,{name:"fade"},{default:Dt((()=>[(u(),d(I(t),{ref:"component"},null,512))])),_:2},1024)])),_:1})):x("",!0),m(D,{name:"fade"},{default:Dt((()=>[Rt])),_:1})],512)}));It.render=jt,It.__scopeId="data-v-533ef4b0";const Qt=O.create({baseURL:"/",timeout:1e4});Qt.interceptors.request.use((t=>(t.headers["Content-Type"]="application/x-www-form-urlencoded","post"===t.method&&t.data?(t.data=JSON.stringify(t.data),t.headers["Content-Type"]="application/json",t):t)),(t=>(console.log(t),Promise.reject(t)))),Qt.interceptors.response.use((t=>t.data),(t=>(console.log("err"+t),z(t.message),Promise.reject(t))));var Bt=c({props:{password:{type:String,default:""}},emits:["callback","close"],data:()=>({keys:[1,2,3,4,5,6,7,8,9],inputList:[],dance:!1}),methods:{ketDown(t){this.inputList.length>=6||(this.inputList.push(t),6==this.inputList.length&&this.verification())},verification(){let t=this.inputList.join("");this.password&&this.password!=t?(this.dance=!0,setTimeout((()=>{this.dance=!1,this.inputList=[],this.$emit("callback",t,!1)}),500)):(this.inputList=[],this.$emit("callback",t,!0))},cancel(){this.$emit("close")},remove(){this.inputList.pop()}}});const Ft=v();y("data-v-18e3a952");const Zt={class:"keyboard"},Wt=m("div",{class:"btn empty"},null,-1),qt=m("div",{class:"btn empty"},null,-1),Ut={class:"handle"},Vt=m("div",null,null,-1);k();const Yt=Ft(((t,e,a,o,s,n)=>(u(),d("div",null,[m("div",{class:{input:!0,dance:t.dance}},[(u(),d(w,null,b(6,(e=>m("div",{class:{garden:!0,fill:t.inputList.length>=e},key:e},null,2))),64))],2),m("div",Zt,[(u(!0),d(w,null,b(t.keys,(e=>(u(),d("div",{class:"btn",key:e,onTouchend:a=>t.ketDown(e)},g(e),41,["onTouchend"])))),128)),Wt,m("div",{class:"btn",onTouchend:e[1]||(e[1]=e=>t.ketDown(0))},"0",32),qt]),m("div",Ut,[L(t.$slots,"default",{},(()=>[Vt]),{}),R(m("div",{onClick:e[2]||(e[2]=(...e)=>t.remove&&t.remove(...e))},"删除",512),[[j,t.inputList.length]]),R(m("div",{onClick:e[3]||(e[3]=(...e)=>t.cancel&&t.cancel(...e))},"取消",512),[[j,!t.inputList.length]])])]))));Bt.render=Yt,Bt.__scopeId="data-v-18e3a952";var Gt=c({components:{numberLock:Bt},emits:["openLock","cancel"],setup(){const t=$();return{password:T((()=>t.state.LockStore.lockNumberPwd))}},methods:{op(){this.$emit("openLock")},cancel(){this.$emit("cancel")},lockCallback(t,e){e&&this.$emit("openLock")}}});const Kt=v();y("data-v-5badb467");const Jt={class:"container"},Xt=m("div",{class:"top"},"输入密码",-1);k();const te=Kt(((t,e,a,o,s,n)=>{const c=f("numberLock");return u(),d("div",Jt,[Xt,m(c,{password:t.password,onCallback:t.lockCallback,onClose:t.cancel},{default:Kt((()=>[m("div",{onClick:e[1]||(e[1]=(...e)=>t.op&&t.op(...e))},"紧急操作")])),_:1},8,["password","onCallback","onClose"])])}));Gt.render=te,Gt.__scopeId="data-v-5badb467";const ee=80,ae="#fff",oe="#27ae60",se="#c0392b",ne=10,ce=30,pe=30;var ie=c({props:{password:{type:String,default:""}},emits:["callback"],data:()=>({canvasWidth:0,canvasHeight:0,canvasLeft:0,canvasTop:0,pointList:[],moveArr:[]}),mounted(){this.init()},methods:{init(){const t=this.$refs.lockCanvas;if(!t)return;const e=t.getContext("2d");if(this.ctx=e,this.canvasWidth=t.width,this.canvasHeight=t.height,this.canvasLeft=t.offsetLeft,this.canvasTop=t.offsetTop,this.pointList=[],9!=this.pointList.length)for(let a=0;a<9;a++){let{x:t,y:e}=this.getPointAxes(a),o={x:t,y:e,status:!1,value:a};this.pointList.push(o)}this.ctx.clearRect(0,0,this.canvasWidth,this.canvasHeight),this.pointList.forEach((t=>{this.createPoint(t)}))},createPoint(t,e=!0){let a=ae;t.status&&(a=e?oe:se),this.ctx.beginPath(),this.ctx.arc(t.x,t.y,ee/2-1,0,2*Math.PI,!0),this.ctx.strokeStyle=a,this.ctx.lineWidth=1,this.ctx.stroke(),this.ctx.beginPath(),this.ctx.arc(t.x,t.y,ne/2,0,2*Math.PI,!0),this.ctx.fillStyle=a,this.ctx.fill()},getPointAxes:t=>({x:ee*(t%3)+ce*(t%3)+ee/2,y:ee*Math.floor(t/3)+pe*Math.floor(t/3)+ee/2}),drawLine(t,e,a,o=!0){this.ctx.clearRect(0,0,this.canvasWidth,this.canvasHeight),this.ctx.save(),this.ctx.beginPath(),this.ctx.strokeStyle=o?oe:se,this.ctx.lineWidth=6,this.ctx.lineJoin="round",this.ctx.lineCap="round",this.moveArr.forEach(((t,e)=>{0==e?this.ctx.moveTo(this.pointList[t-1].x,this.pointList[t-1].y):this.ctx.lineTo(this.pointList[t-1].x,this.pointList[t-1].y)})),a&&this.moveArr.length&&this.ctx.lineTo(t,e),this.ctx.stroke(),this.ctx.restore(),this.pointList.forEach((a=>{this.isInCircle(t,e,a)&&!a.status&&(this.moveArr.push(a.value+1),a.status=!0),this.createPoint(a,o)}))},isInCircle:(t,e,a)=>Math.sqrt(Math.pow(a.x-t,2)+Math.pow(a.y-e,2))<=ee/2,canvasMoveStart(t){let{pageX:e,pageY:a}=t.targetTouches[0];e-=this.canvasLeft,a-=this.canvasTop,this.drawLine(e,a,!0)},canvasMove(t){let{pageX:e,pageY:a}=t.targetTouches[0];e-=this.canvasLeft,a-=this.canvasTop,this.drawLine(e,a,!0)},canvasMoveEnd(){let t=this.moveArr.join(""),e=!this.password||t==this.password;this.drawLine(0,0,!1,e),this.$emit("callback",t,e),this.moveArr=[],setTimeout((()=>{this.init()}),300)}}});const re=v()(((t,e,a,o,s,n)=>(u(),d("canvas",{class:"lock-canvas",ref:"lockCanvas",width:"300",height:"300",onTouchstart:e[1]||(e[1]=(...e)=>t.canvasMoveStart&&t.canvasMoveStart(...e)),onTouchmove:e[2]||(e[2]=(...e)=>t.canvasMove&&t.canvasMove(...e)),onTouchend:e[3]||(e[3]=(...e)=>t.canvasMoveEnd&&t.canvasMoveEnd(...e))},null,544))));ie.render=re,ie.__scopeId="data-v-fa1f6186";var le=c({components:{SlideLock:ie},emits:["openLock","cancel"],computed:n({},h("LockStore",{password:t=>t.lockNumberPwd})),methods:{lockCb(t,e){e&&this.op()},op(){this.$emit("openLock")},cancel(){this.$emit("cancel")}}});const he=v();y("data-v-7f725f72");const ue={class:"container"},de=m("div",{class:"top"},"手势解锁",-1),me={class:"handle"};k();const ge=he(((t,e,a,o,s,n)=>{const c=f("SlideLock");return u(),d("div",ue,[de,m(c,{password:t.password,onCallback:t.lockCb},null,8,["password","onCallback"]),m("div",me,[m("div",{onClick:e[1]||(e[1]=(...e)=>t.op&&t.op(...e))},"紧急操作"),m("div",{onClick:e[2]||(e[2]=(...e)=>t.cancel&&t.cancel(...e))},"取消")])])}));le.render=ge,le.__scopeId="data-v-7f725f72";const ve=["日","一","二","三","四","五","六"];var ye=c({components:{NumberView:Gt,SlideView:le},setup(){let t=_(""),e=_(""),a=()=>{let a=new Date,o=a.getMonth()+1,s=a.getDate(),n=a.getHours();n=n<10?"0"+n:n;let c=a.getMinutes();c=c<10?"0"+c:c;let p=a.getDay();t.value=n+":"+c,e.value=o+"月"+s+"日 周"+ve[p]};return a(),setTimeout(a,1e3),{time:t,date:e}},data:()=>({tipsContent:"",diffY:0,windowHeight:667,blurNum:0,transition:0,lockStep:rt.Normal}),computed:{LockType:()=>rt},mounted(){this.getHitokoto(),this.windowHeight=window.innerHeight},methods:{getHitokoto(){Qt({url:"https://v1.hitokoto.cn/",method:"get"}).then((t=>{this.tipsContent=t.hitokoto}))},touchstart(t){let e=t.touches[0].pageY,a=0,o=0,s=t=>{this.transition=0;let s=t.touches[0].pageY;a=e-s,o=Math.floor(a/(.8*this.windowHeight)*100)/10,this.blurNum=Math.max(0,o),this.diffY=Math.max(0,a)},n=()=>{this.transition=.3,a=a>.2*this.windowHeight?this.windowHeight:0,this.diffY=a,this.blurNum=a?1:0,this.diffY&&setTimeout((()=>{this.$store.state.lockType==rt.Normal?this.$store.commit("LockStore/changeLock",!1):this.lockStep=this.$store.state.LockStore.lockType}),100),document.removeEventListener("touchmove",s),document.removeEventListener("touchend",n)};document.addEventListener("touchmove",s),document.addEventListener("touchend",n)},openLock(){setTimeout((()=>{this.$store.commit("LockStore/changeLock",!1),this.lockStep=rt.Normal}),100)},cancel(){this.lockStep=rt.Normal}}});const ke=v();y("data-v-7e39af46");const fe=m("img",{src:"https://z3.ax1x.com/2021/04/28/gPPUFx.jpg",alt:"",class:"bg"},null,-1),we={class:"top"},be=m("span",null,"向上滑动解锁",-1),xe={class:"time-box"},Le={class:"tips"};k();const Ae=ke(((t,e,a,o,s,n)=>{const c=f("van-icon"),p=f("NumberView"),i=f("SlideView");return u(),d("div",{class:"lock",onTouchstart:e[1]||(e[1]=(...e)=>t.touchstart&&t.touchstart(...e))},[fe,t.lockStep==t.LockType.Normal?(u(),d("div",{key:0,class:"notice-container",style:`-webkit-backdrop-filter: blur(${t.blurNum}px);transition: all ${t.transition}s;transform: translateY(-${t.diffY}px);`},[m("div",we,[m(c,{name:"lock",color:"#fff"}),be]),m("div",xe,[m("h2",null,g(t.time),1),m("p",null,g(t.date),1),m("p",Le,g(t.tipsContent),1)])],4)):x("",!0),t.lockStep==t.LockType.Number?(u(),d(p,{key:1,onOpenLock:t.openLock,onCancel:t.cancel},null,8,["onOpenLock","onCancel"])):x("",!0),t.lockStep==t.LockType.Slide?(u(),d(i,{key:2,onOpenLock:t.openLock,onCancel:t.cancel},null,8,["onOpenLock","onCancel"])):x("",!0)],32)}));ye.render=Ae,ye.__scopeId="data-v-7e39af46";var Se=c({name:"App",components:{Home:Nt,Lock:ye,AppLayout:It},setup(){const t=$(),e=_(!1),a=T((()=>{const t=Q();return!(e.value||!t.matched.length)&&"home"!=t.name}));C(t.state.testList,(()=>{console.log("testList watch")}));return{closeApp:()=>{e.value=!0,setTimeout((()=>{e.value=!1}),600)},routeStatus:a,lockStatus:T((()=>t.state.LockStore.lockStatus))}},methods:{beforeEnter(t){let e=(a=":export {\n  appHeight: 84;\n  appWidth: 70;\n  appPhotoHeight: 60;\n  appNameHeight: 24;\n  gridRowGap: 8;\n}\n",t=>{let e=new RegExp(`${t}: [^;]+`,"g"),o=a.match(e).toString().split(": ");return Number(o[1])});var a;let o=this.$route.matched[0].name||"";if(!o)return;let s=document.querySelector(`#${String(o)}`);if(!s)return;let n=e("appHeight")/2+s.getBoundingClientRect().top,c=e("appWidth")/2+s.getBoundingClientRect().left;t.style.transformOrigin=`${c}px ${n}px`}}});const $e={class:"page"};Se.render=function(t,e,a,o,s,n){const c=f("Lock"),p=f("Home"),i=f("app-layout");return u(),d("div",$e,[t.lockStatus?(u(),d(c,{key:0})):x("",!0),m(p),m(D,{name:"app",onBeforeEnter:t.beforeEnter},{default:B((()=>[R(m(i,{onCloseApp:t.closeApp},null,8,["onCloseApp"]),[[j,t.routeStatus]])])),_:1},8,["onBeforeEnter"])])};var Te={install:t=>{t.use(F).use(Z).use(W).use(z).use(q).use(U).use(V).use(Y)}};G([{name:"alipay",entry:"http://192.168.0.184:1688",container:"#routerView",activeRule:"/alipay",props:{slogan:"Hello Qiankun",store:dt}},{name:"music",entry:"http://192.168.0.184:1921",container:"#routerView",activeRule:"/music",props:{slogan:"Hello Qiankun",store:dt}},{name:"calculator",entry:"http://192.168.0.184:8080",container:"#routerView",activeRule:"/calculator",props:{slogan:"Hello Qiankun",store:dt}}]),K();const _e=J(Se);_e.use(st),_e.use(dt),_e.use(Te),_e.mount("#app");export{rt as I,Bt as _,ie as a};
