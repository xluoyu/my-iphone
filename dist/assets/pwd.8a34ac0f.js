import{I as e}from"./index.23a6bd16.js";import{d as o,u as t,s as l,X as n,r as a,o as s,e as u,f as r,j as c,G as i}from"./vendor.9b74df33.js";var p=o({setup(){const o=t(),a=l(!1),s=()=>{a.value=!a.value},u=[{value:e.Normal,text:"无需密码"},{value:e.Number,text:"数字密码"},{value:e.Slide,text:"滑动解锁"}];let r=n({value:o.state.LockStore.lockType,text:u.find((e=>e.value==o.state.LockStore.lockType)).text});return{columns:u,show:a,togglePopup:s,onConfirm:t=>{r.value=t.value,r.text=t.text,o.commit("LockStore/changeLockType",r.value),o.commit("changeCloseBeforeFn",(()=>r.value==e.Normal||(console.log("还没有设置密码"),!1))),s()},curSelectType:r}}});p.render=function(e,o,t,l,n,p){const m=a("van-cell"),v=a("van-picker"),d=a("van-popup");return s(),u("div",null,[r(m,{title:"解锁方式","is-link":"","arrow-direction":"down",value:e.curSelectType.text,style:{"margin-top":"20px"},onClick:e.togglePopup},null,8,["value","onClick"]),"normal"!=e.curSelectType.value?(s(),u(m,{key:0,title:"设置密码","is-link":"",to:`/settings/setPwd?type=${e.curSelectType.value}`,style:{"margin-top":"20px"}},null,8,["to"])):c("",!0),r(d,{show:e.show,"onUpdate:show":o[1]||(o[1]=o=>e.show=o),position:"bottom"},{default:i((()=>[r(v,{title:"解锁方式",columns:e.columns,onCancel:e.togglePopup,onConfirm:e.onConfirm},null,8,["columns","onCancel","onConfirm"])])),_:1},8,["show"])])};export default p;
