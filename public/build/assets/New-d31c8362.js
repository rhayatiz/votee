import{a as d,r as P,c as xt,u as rt,b as jt,d as Ot,e as _t,R as H,B as z,j as a,T as S,A as Pe,f as $,g as nt,H as Ct}from"./app-634d9e18.js";import{u as Pt,d as St,e as $t,G as M,c as D,b as ot,f as le,N as kt,C as Et,T as Rt,a as zt,F as Nt}from"./Footer-6f076e8e.js";import{g as Y,S as At,L as Re}from"./Stack-602373de.js";import{T as Se,L as Tt,M as It,I as Vt,a as Dt,A as Mt}from"./index.esm-4c1a0288.js";import{B as Z}from"./Button-0252eec9.js";import{M as Ft,a as qt}from"./index.esm-120daae9.js";import{T as Lt}from"./Tooltip-3fccef13.js";const Bt={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};function Ht(){const e=d.useRef(0),t=d.useRef(null),[r,n]=d.useState(Bt),o=d.useMemo(()=>typeof window<"u"?new ResizeObserver(s=>{const i=s[0];i&&(cancelAnimationFrame(e.current),e.current=requestAnimationFrame(()=>{t.current&&n(i.contentRect)}))}):null,[]);return d.useEffect(()=>(t.current&&o.observe(t.current),()=>{o.disconnect(),e.current&&cancelAnimationFrame(e.current)}),[t.current]),[t,r]}var Wt=Object.defineProperty,Qt=Object.defineProperties,Ut=Object.getOwnPropertyDescriptors,ze=Object.getOwnPropertySymbols,Kt=Object.prototype.hasOwnProperty,Gt=Object.prototype.propertyIsEnumerable,Ne=(e,t,r)=>t in e?Wt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,oe=(e,t)=>{for(var r in t||(t={}))Kt.call(t,r)&&Ne(e,r,t[r]);if(ze)for(var r of ze(t))Gt.call(t,r)&&Ne(e,r,t[r]);return e},Xt=(e,t)=>Qt(e,Ut(t));const ie=4,Ae={xs:`${P(3)} ${P(6)}`,sm:`${P(5)} ${P(10)}`,md:`${P(7)} ${P(14)}`,lg:`${P(9)} ${P(16)}`,xl:`${P(12)} ${P(20)}`};var Jt=xt((e,{fullWidth:t,color:r,radius:n,shouldAnimate:o,transitionDuration:s,transitionTimingFunction:i,orientation:u},{size:c})=>{const g=u==="vertical",f=e.fn.variant({variant:"filled",color:r});return{label:Xt(oe(oe({ref:Y("label")},e.fn.focusStyles()),e.fn.fontStyles()),{WebkitTapHighlightColor:"transparent",borderRadius:e.fn.radius(n),fontWeight:500,fontSize:c in e.fontSizes?e.fontSizes[c]:e.fontSizes.sm,cursor:"pointer",display:"block",textAlign:"center",padding:Ae[c in Ae?c:"sm"],whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",userSelect:"none",color:e.colorScheme==="dark"?e.colors.dark[1]:e.colors.gray[7],transition:`color ${o?0:s}ms ${i||e.transitionTimingFunction}`,"&:hover":{color:e.colorScheme==="dark"?e.colors.dark[0]:e.black},"&[data-disabled]":{"&, &:hover":{color:e.colorScheme==="dark"?e.colors.dark[3]:e.colors.gray[5],cursor:"not-allowed",pointerEvents:"none"}},"&[data-active]":{"&, &:hover":{color:r||e.colorScheme==="dark"?e.white:e.black}}}),control:{ref:Y("control"),position:"relative",boxSizing:"border-box",flex:1,zIndex:2,transition:`border-left-color ${o?0:s}ms ${i||e.transitionTimingFunction}`,"&:not(:first-of-type)":{borderStyle:"solid",borderWidth:g?`${P(1)} 0 0 0`:`0 0 0 ${P(1)}`,borderColor:e.colorScheme==="dark"?e.colors.dark[4]:e.colors.gray[3]}},input:{height:0,width:0,position:"absolute",overflow:"hidden",whiteSpace:"nowrap",opacity:0,"&:focus":{outline:"none",[`& + .${Y("label")}`]:oe({},e.focusRing==="always"||e.focusRing==="auto"?e.focusRingStyles.styles(e):e.focusRingStyles.resetStyles(e)),"&:focus:not(:focus-visible)":{[`& + .${Y("label")}`]:oe({},e.focusRing==="auto"||e.focusRing==="never"?e.focusRingStyles.resetStyles(e):null)}},"&:disabled + label":{"&, &:hover":{color:e.colorScheme==="dark"?e.colors.dark[3]:e.colors.gray[5],cursor:"not-allowed",pointerEvents:"none"}}},root:{position:"relative",display:t||g?"flex":"inline-flex",width:g&&!t?"max-content":"auto",flexDirection:g?"column":"row",backgroundColor:e.colorScheme==="dark"?e.colors.dark[8]:e.colors.gray[1],borderRadius:e.fn.radius(n),overflow:"hidden",padding:ie},controlActive:{borderLeftColor:"transparent !important",borderTopColor:"transparent !important",[`& + .${Y("control")}`]:{[g?"borderTopColor":"borderLeftColor"]:"transparent !important"},borderRadius:e.fn.radius(n),boxShadow:o?r||e.colorScheme==="dark"?"none":e.shadows.xs:void 0,backgroundColor:o?r?f.background:e.colorScheme==="dark"?e.colors.dark[5]:e.white:void 0},indicator:{boxSizing:"border-box",borderRadius:e.fn.radius(n),position:"absolute",zIndex:1,boxShadow:r||e.colorScheme==="dark"?"none":e.shadows.xs,transition:`transform ${o?0:s}ms ${e.transitionTimingFunction}, width ${o?0:s/2}ms ${i||e.transitionTimingFunction}`,backgroundColor:r?f.background:e.colorScheme==="dark"?e.colors.dark[5]:e.white}}});const Yt=Jt;var Zt=Object.defineProperty,ue=Object.getOwnPropertySymbols,st=Object.prototype.hasOwnProperty,at=Object.prototype.propertyIsEnumerable,Te=(e,t,r)=>t in e?Zt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,er=(e,t)=>{for(var r in t||(t={}))st.call(t,r)&&Te(e,r,t[r]);if(ue)for(var r of ue(t))at.call(t,r)&&Te(e,r,t[r]);return e},tr=(e,t)=>{var r={};for(var n in e)st.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&ue)for(var n of ue(e))t.indexOf(n)<0&&at.call(e,n)&&(r[n]=e[n]);return r};const rr={disabled:!1,size:"sm",transitionDuration:200},lt=d.forwardRef((e,t)=>{var r,n,o,s;const i=rt("SegmentedControl",rr,e),{className:u,disabled:c,data:g,name:f,value:p,onChange:h,color:y,fullWidth:w,radius:_,size:O,transitionDuration:x,transitionTimingFunction:k,classNames:F,styles:Q,defaultValue:U,orientation:K,unstyled:ee,variant:T,readOnly:q}=i,L=tr(i,["className","disabled","data","name","value","onChange","color","fullWidth","radius","size","transitionDuration","transitionTimingFunction","classNames","styles","defaultValue","orientation","unstyled","variant","readOnly"]),G=jt(),ge=Ot(),ve=G.respectReducedMotion?ge:!1,I=g.map(b=>typeof b=="string"?{label:b,value:b}:b),te=d.useRef(),[X,re]=d.useState(!1),[E,me]=Pt({value:p,defaultValue:U,finalValue:Array.isArray(I)&&(s=(o=(r=I.find(b=>!b.disabled))==null?void 0:r.value)!=null?o:(n=I[0])==null?void 0:n.value)!=null?s:null,onChange:h}),{classes:N,cx:ne}=Yt({fullWidth:w,color:y,radius:_,shouldAnimate:ve||!X,transitionDuration:x,transitionTimingFunction:k,orientation:K},{name:"SegmentedControl",classNames:F,styles:Q,unstyled:ee,variant:T,size:O}),[B,be]=d.useState({width:0,height:0,translate:[0,0]}),J=St(f),l=d.useRef({}),[v,m]=Ht();_t(()=>{te.current?re(!0):(te.current=!0,re(!1))}),d.useEffect(()=>{if(E in l.current&&v.current){const b=l.current[E],C=b.getBoundingClientRect(),ke=b.offsetWidth/C.width,Ee=C.width*ke||0,bt=C.height*ke||0,ht=m.width-b.parentElement.offsetLeft+ie-Ee,wt=b.parentElement.offsetLeft-ie;be({width:Ee,height:bt,translate:[G.dir==="rtl"?ht:wt,b.parentElement.offsetTop-ie]})}},[E,m]);const j=I.map(b=>H.createElement("div",{className:ne(N.control,{[N.controlActive]:E===b.value}),key:b.value},H.createElement("input",{className:N.input,disabled:c||b.disabled,type:"radio",name:J,value:b.value,id:`${J}-${b.value}`,checked:E===b.value,onChange:()=>!q&&me(b.value)}),H.createElement("label",{className:N.label,"data-active":E===b.value&&!(c||b.disabled)||void 0,"data-disabled":c||b.disabled||void 0,htmlFor:`${J}-${b.value}`,ref:C=>{l.current[b.value]=C}},b.label))),V=$t(v,t);return I.length===0?null:H.createElement(z,er({className:ne(N.root,u),ref:V},L),typeof E=="string"&&X&&H.createElement(z,{component:"span",className:N.indicator,sx:{width:B.width,height:B.height,transform:`translate(${B.translate[0]}px, ${B.translate[1]}px)`}}),j)});lt.displayName="@mantine/core/SegmentedControl";var nr=Object.defineProperty,fe=Object.getOwnPropertySymbols,it=Object.prototype.hasOwnProperty,ct=Object.prototype.propertyIsEnumerable,Ie=(e,t,r)=>t in e?nr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,or=(e,t)=>{for(var r in t||(t={}))it.call(t,r)&&Ie(e,r,t[r]);if(fe)for(var r of fe(t))ct.call(t,r)&&Ie(e,r,t[r]);return e},sr=(e,t)=>{var r={};for(var n in e)it.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&fe)for(var n of fe(e))t.indexOf(n)<0&&ct.call(e,n)&&(r[n]=e[n]);return r};const ar={w:0,h:0},ce=d.forwardRef((e,t)=>{const r=rt("Space",ar,e),{w:n,h:o}=r,s=sr(r,["w","h"]);return H.createElement(z,or({ref:t,w:n,miw:n,h:o,mih:o},s))});ce.displayName="@mantine/core/Space";function ut(e){return M({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"}},{tag:"path",attr:{d:"M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]})(e)}function ft(e){return M({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]})(e)}function dt(e){return M({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M5 2a.5.5 0 0 1 .5-.5c.862 0 1.573.287 2.06.566.174.099.321.198.44.286.119-.088.266-.187.44-.286A4.165 4.165 0 0 1 10.5 1.5a.5.5 0 0 1 0 1c-.638 0-1.177.213-1.564.434a3.49 3.49 0 0 0-.436.294V7.5H9a.5.5 0 0 1 0 1h-.5v4.272c.1.08.248.187.436.294.387.221.926.434 1.564.434a.5.5 0 0 1 0 1 4.165 4.165 0 0 1-2.06-.566A4.561 4.561 0 0 1 8 13.65a4.561 4.561 0 0 1-.44.285 4.165 4.165 0 0 1-2.06.566.5.5 0 0 1 0-1c.638 0 1.177-.213 1.564-.434.188-.107.335-.214.436-.294V8.5H7a.5.5 0 0 1 0-1h.5V3.228a3.49 3.49 0 0 0-.436-.294A3.166 3.166 0 0 0 5.5 2.5.5.5 0 0 1 5 2zm3.352 1.355zm-.704 9.29z"}}]})(e)}function lr(e){return M({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 5c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"}},{tag:"path",attr:{d:"M12 9c-1.627 0-3 1.373-3 3s1.373 3 3 3 3-1.373 3-3-1.373-3-3-3z"}}]})(e)}function ir(e){return M({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM8 16V4h12l.002 12H8z"}},{tag:"path",attr:{d:"M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8zm8.933 3.519-1.726-1.726-1.414 1.414 3.274 3.274 5.702-6.84-1.538-1.282z"}}]})(e)}function cr({changeHandler:e}){const t=[{value:"radio",label:a.jsxs(D,{children:[a.jsx(lr,{className:"relative top-[2px] mr-1"}),a.jsx(S,{fz:"xs",weight:300,children:"Unique"})]})},{value:"checkbox",label:a.jsxs(D,{children:[a.jsx(ir,{className:"relative top-[2px] mr-1"}),a.jsx(S,{fz:"xs",weight:300,children:"Multiple"})]})},{value:"input",label:a.jsxs(D,{children:[a.jsx(dt,{className:"relative top-[2px] mr-1"}),a.jsx(S,{fz:"xs",weight:300,children:"Saisie"})]})}];return a.jsx(lt,{onChange:e,size:"sm",data:t})}function ur(e){return M({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M14 0h-12c-1.1 0-2 0.9-2 2v12c0 1.1 0.9 2 2 2h12c1.1 0 2-0.9 2-2v-12c0-1.1-0.9-2-2-2zM14 14h-12v-12h12v12z"}}]})(e)}function fr(e){return M({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14c-3.314 0-6-2.686-6-6s2.686-6 6-6c3.314 0 6 2.686 6 6s-2.686 6-6 6z"}}]})(e)}function dr({type:e,row:t,index:r,idx:n,removeAnswerHandler:o,form:s,questionKey:i}){const u=e=="checkbox"?a.jsx(ur,{}):e=="radio"?a.jsx(fr,{}):a.jsx(dt,{}),c=e=="input"?"Label":`Reponse ${r+1}`,g=(p,h)=>h.map(function(y){return y.key}).indexOf(p),f=(p,h,y)=>{const w=[...s.values.questions];var _=g(p,w),O=w[_].answers.map(function(k){return k.key}).indexOf(h);let x=[...s.values.questions[_].answers];x[O].label=y.target.value,s.setFieldValue(`questions.${_}.answers`,x)};return a.jsx(a.Fragment,{children:a.jsxs(D,{children:[a.jsx(Se,{mt:"xs",className:"flex-1",onChange:p=>f(i,t.key,p),placeholder:c,icon:u,error:t.error||null,withAsterisk:!0}),r!=0&&r!=1&&a.jsx(ot,{children:a.jsx(Pe,{onClick:()=>o(n),children:a.jsx(ut,{className:"relative top-[2px] left-1 text-red-700",size:18})})})]})})}function pr({row:e,idx:t,removeQuestionHandler:r,form:n,questionIndex:o}){const s=f=>{f=="input"?n.setFieldValue(`questions.${o}.answers`,[{id:1,key:$(),label:""}]):n.setFieldValue(`questions.${o}.answers`,[{id:1,key:$(),label:""},{id:2,key:$(),label:""}]),n.setFieldValue(`questions.${o}.type`,f)},i=f=>{const p=[...n.values.questions];p[o].label=f.target.value,n.setFieldValue("questions",p)},u=()=>{const f=n.values.questions[o].answers;let p=1;f.length>0&&(p=f[f.length-1].id+1);let h={key:$(),id:p,label:""};n.setFieldValue(`questions.${o}.answers`,[...f,h])},c=f=>{let p=n.values.questions[o].answers;var h=p.map(function(y){return y.id}).indexOf(f);p.splice(h,1),n.setFieldValue(`questions.${o}.answers`,[...p])},g=()=>a.jsx(le,{position:"right",mt:"sm",children:a.jsxs(Z,{color:"dark",className:"bg-zinc-500 hover:bg-zinc-600 text-white",size:"xs",onClick:()=>u(),children:[a.jsx(S,{fz:"xs",mr:"xs",children:"Ajouter réponse"}),a.jsx(ft,{color:"white",size:16})]})});return a.jsxs(z,{className:"mt-8 shadow-md bg-gray-50 px-4 py-2 rounded-lg relative",children:[a.jsx(le,{position:"right",pos:"absolute",className:"top-1 right-12",children:a.jsx(Pe,{onClick:()=>r(e.id),variant:"transparent",color:"red",children:a.jsxs(D,{children:[a.jsx(S,{fz:"sm",weight:400,children:"Retirer"}),a.jsx(ut,{className:"relative top-[2px] left-1",size:16})]})})}),a.jsxs(At,{children:[a.jsx(Se,{label:`Question ${t}`,placeholder:"Quel est votre plat préféré ?",onChange:f=>i(f),error:e.error||null}),a.jsxs(D,{className:"flex-col md:flex-row",justify:"space-between",children:[a.jsx(S,{fz:"sm",weight:400,children:"Réponses"}),a.jsxs(le,{children:[a.jsx(S,{fz:"xs",weight:300,children:"Type de réponse"}),a.jsx(cr,{changeHandler:s})]})]}),a.jsxs(z,{className:"relative -top-2",children:[n.values.questions[o].answers.map((f,p)=>a.jsx(dr,{type:n.values.questions[o].type,questionKey:e.key,row:f,index:p,idx:f.id,form:n,removeAnswerHandler:c},f.key)),n.values.questions[o].type!="input"&&a.jsx(g,{})]})]})]})}function yr(e){const t=e.form,r=()=>a.jsx(le,{position:"right",mt:"sm",children:a.jsxs(Z,{color:"dark",className:"bg-zinc-700 text-white",size:"sm",onClick:()=>n(),children:[a.jsx(S,{mr:"sm",children:"Ajouter question"}),a.jsx(ft,{color:"white",size:18})]})}),n=()=>{let s=1,i=t.values.questions;i.length>0&&(s=i[i.length-1].id+1);let u={id:s,key:$(),type:"radio",label:"",answers:[{id:1,key:$(),label:""},{id:2,key:$(),label:""}]};t.setFieldValue("questions",[...i,u])},o=s=>{t.setFieldValue("questions",t.values.questions.filter(i=>i.id!=s))};return a.jsx(a.Fragment,{children:a.jsxs(z,{className:"rounded-lg border border-red-700 mt-11",children:[t.values.questions.map((s,i)=>a.jsx(pr,{row:s,idx:i+1,questionIndex:i,removeQuestionHandler:o,form:e.form},s.key)),a.jsx(r,{})]})})}var gr=function e(t,r){if(t===r)return!0;if(t&&r&&typeof t=="object"&&typeof r=="object"){if(t.constructor!==r.constructor)return!1;var n,o,s;if(Array.isArray(t)){if(n=t.length,n!=r.length)return!1;for(o=n;o--!==0;)if(!e(t[o],r[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if(s=Object.keys(t),n=s.length,n!==Object.keys(r).length)return!1;for(o=n;o--!==0;)if(!Object.prototype.hasOwnProperty.call(r,s[o]))return!1;for(o=n;o--!==0;){var i=s[o];if(!e(t[i],r[i]))return!1}return!0}return t!==t&&r!==r};const Ve=nt(gr);function we(e){return e===null||typeof e!="object"?{}:Object.keys(e).reduce((t,r)=>{const n=e[r];return n!=null&&n!==!1&&(t[r]=n),t},{})}var vr=Object.defineProperty,De=Object.getOwnPropertySymbols,mr=Object.prototype.hasOwnProperty,br=Object.prototype.propertyIsEnumerable,Me=(e,t,r)=>t in e?vr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,hr=(e,t)=>{for(var r in t||(t={}))mr.call(t,r)&&Me(e,r,t[r]);if(De)for(var r of De(t))br.call(t,r)&&Me(e,r,t[r]);return e};function pt(e,t){if(t===null||typeof t!="object")return{};const r=hr({},t);return Object.keys(t).forEach(n=>{n.includes(`${String(e)}.`)&&delete r[n]}),r}const wr="__MANTINE_FORM_INDEX__";function Fe(e,t){return t?typeof t=="boolean"?t:Array.isArray(t)?t.includes(e.replace(/[.][0-9]/g,`.${wr}`)):!1:!1}function qe(e,t,r){typeof r.value=="object"&&(r.value=W(r.value)),!r.enumerable||r.get||r.set||!r.configurable||!r.writable||t==="__proto__"?Object.defineProperty(e,t,r):e[t]=r.value}function W(e){if(typeof e!="object")return e;var t=0,r,n,o,s=Object.prototype.toString.call(e);if(s==="[object Object]"?o=Object.create(e.__proto__||null):s==="[object Array]"?o=Array(e.length):s==="[object Set]"?(o=new Set,e.forEach(function(i){o.add(W(i))})):s==="[object Map]"?(o=new Map,e.forEach(function(i,u){o.set(W(u),W(i))})):s==="[object Date]"?o=new Date(+e):s==="[object RegExp]"?o=new RegExp(e.source,e.flags):s==="[object DataView]"?o=new e.constructor(W(e.buffer)):s==="[object ArrayBuffer]"?o=e.slice(0):s.slice(-6)==="Array]"&&(o=new e.constructor(e)),o){for(n=Object.getOwnPropertySymbols(e);t<n.length;t++)qe(o,n[t],Object.getOwnPropertyDescriptor(e,n[t]));for(t=0,n=Object.getOwnPropertyNames(e);t<n.length;t++)Object.hasOwnProperty.call(o,r=n[t])&&o[r]===e[r]||qe(o,r,Object.getOwnPropertyDescriptor(e,r))}return o||e}function yt(e){return typeof e!="string"?[]:e.split(".")}function pe(e,t,r){const n=yt(e);if(n.length===0)return r;const o=W(r);if(n.length===1)return o[n[0]]=t,o;let s=o[n[0]];for(let i=1;i<n.length-1;i+=1){if(s===void 0)return o;s=s[n[i]]}return s[n[n.length-1]]=t,o}function R(e,t){const r=yt(e);if(r.length===0||typeof t!="object"||t===null)return;let n=t[r[0]];for(let o=1;o<r.length&&n!==void 0;o+=1)n=n[r[o]];return n}function Le(e){const t=we(e);return{hasErrors:Object.keys(t).length>0,errors:t}}function xe(e,t,r="",n={}){return typeof e!="object"||e===null?n:Object.keys(e).reduce((o,s)=>{const i=e[s],u=`${r===""?"":`${r}.`}${s}`,c=R(u,t);let g=!1;return typeof i=="function"&&(o[u]=i(c,t,u)),typeof i=="object"&&Array.isArray(c)&&(g=!0,c.forEach((f,p)=>xe(i,t,`${u}.${p}`,o))),typeof i=="object"&&typeof c=="object"&&c!==null&&(g||xe(i,t,u,o)),o},n)}function je(e,t){return Le(typeof e=="function"?e(t):xe(e,t))}function se(e,t,r){if(typeof e!="string")return{hasError:!1,error:null};const n=je(t,r),o=Object.keys(n.errors).find(s=>e.split(".").every((i,u)=>i===s.split(".")[u]));return{hasError:!!o,error:o?n.errors[o]:null}}function xr(e,{from:t,to:r},n){const o=R(e,n);if(!Array.isArray(o))return n;const s=[...o],i=o[t];return s.splice(t,1),s.splice(r,0,i),pe(e,s,n)}var jr=Object.defineProperty,Be=Object.getOwnPropertySymbols,Or=Object.prototype.hasOwnProperty,_r=Object.prototype.propertyIsEnumerable,He=(e,t,r)=>t in e?jr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Cr=(e,t)=>{for(var r in t||(t={}))Or.call(t,r)&&He(e,r,t[r]);if(Be)for(var r of Be(t))_r.call(t,r)&&He(e,r,t[r]);return e};function Pr(e,{from:t,to:r},n){const o=`${e}.${t}`,s=`${e}.${r}`,i=Cr({},n);return Object.keys(n).every(u=>{let c,g;if(u.startsWith(o)&&(c=u,g=u.replace(o,s)),u.startsWith(s)&&(c=u.replace(s,o),g=u),c&&g){const f=i[c],p=i[g];return p===void 0?delete i[c]:i[c]=p,f===void 0?delete i[g]:i[g]=f,!1}return!0}),i}function Sr(e,t,r){const n=R(e,r);return Array.isArray(n)?pe(e,n.filter((o,s)=>s!==t),r):r}var $r=Object.defineProperty,We=Object.getOwnPropertySymbols,kr=Object.prototype.hasOwnProperty,Er=Object.prototype.propertyIsEnumerable,Qe=(e,t,r)=>t in e?$r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Rr=(e,t)=>{for(var r in t||(t={}))kr.call(t,r)&&Qe(e,r,t[r]);if(We)for(var r of We(t))Er.call(t,r)&&Qe(e,r,t[r]);return e};function Ue(e,t){const r=e.substring(t.length+1).split(".")[0];return parseInt(r,10)}function Ke(e,t,r,n){if(t===void 0)return r;const o=`${String(e)}`;let s=r;n===-1&&(s=pt(`${o}.${t}`,s));const i=Rr({},s),u=new Set;return Object.entries(s).filter(([c])=>{if(!c.startsWith(`${o}.`))return!1;const g=Ue(c,o);return Number.isNaN(g)?!1:g>=t}).forEach(([c,g])=>{const f=Ue(c,o),p=c.replace(`${o}.${f}`,`${o}.${f+n}`);i[p]=g,u.add(p),u.has(c)||delete i[c]}),i}function zr(e,t,r,n){const o=R(e,n);if(!Array.isArray(o))return n;const s=[...o];return s.splice(typeof r=="number"?r:s.length,0,t),pe(e,s,n)}function Ge(e,t){const r=Object.keys(e);if(typeof t=="string"){const n=r.filter(o=>o.startsWith(`${t}.`));return e[t]||n.some(o=>e[o])||!1}return r.some(n=>e[n])}function Nr(e){return t=>{if(!t)e(t);else if(typeof t=="function")e(t);else if(typeof t=="object"&&"nativeEvent"in t){const{currentTarget:r}=t;r instanceof HTMLInputElement?r.type==="checkbox"?e(r.checked):e(r.value):(r instanceof HTMLTextAreaElement||r instanceof HTMLSelectElement)&&e(r.value)}else e(t)}}var Ar=Object.defineProperty,Tr=Object.defineProperties,Ir=Object.getOwnPropertyDescriptors,Xe=Object.getOwnPropertySymbols,Vr=Object.prototype.hasOwnProperty,Dr=Object.prototype.propertyIsEnumerable,Je=(e,t,r)=>t in e?Ar(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,A=(e,t)=>{for(var r in t||(t={}))Vr.call(t,r)&&Je(e,r,t[r]);if(Xe)for(var r of Xe(t))Dr.call(t,r)&&Je(e,r,t[r]);return e},he=(e,t)=>Tr(e,Ir(t));function Mr({initialValues:e={},initialErrors:t={},initialDirty:r={},initialTouched:n={},clearInputErrorOnChange:o=!0,validateInputOnChange:s=!1,validateInputOnBlur:i=!1,transformValues:u=g=>g,validate:c}={}){const[g,f]=d.useState(n),[p,h]=d.useState(r),[y,w]=d.useState(e),[_,O]=d.useState(we(t)),x=d.useRef(e),k=l=>{x.current=l},F=d.useCallback(()=>f({}),[]),Q=l=>{const v=l?A(A({},y),l):y;k(v),h({})},U=d.useCallback(l=>O(v=>we(typeof l=="function"?l(v):l)),[]),K=d.useCallback(()=>O({}),[]),ee=d.useCallback(()=>{w(e),K(),k(e),h({}),F()},[]),T=d.useCallback((l,v)=>U(m=>he(A({},m),{[l]:v})),[]),q=d.useCallback(l=>U(v=>{if(typeof l!="string")return v;const m=A({},v);return delete m[l],m}),[]),L=d.useCallback(l=>h(v=>{if(typeof l!="string")return v;const m=pt(l,v);return delete m[l],m}),[]),G=d.useCallback((l,v)=>{const m=Fe(l,s);L(l),f(j=>he(A({},j),{[l]:!0})),w(j=>{const V=pe(l,v,j);if(m){const b=se(l,c,V);b.hasError?T(l,b.error):q(l)}return V}),!m&&o&&T(l,null)},[]),ge=d.useCallback(l=>{w(v=>{const m=typeof l=="function"?l(v):l;return A(A({},v),m)}),o&&K()},[]),ve=d.useCallback((l,v)=>{L(l),w(m=>xr(l,v,m)),O(m=>Pr(l,v,m))},[]),I=d.useCallback((l,v)=>{L(l),w(m=>Sr(l,v,m)),O(m=>Ke(l,v,m,-1))},[]),te=d.useCallback((l,v,m)=>{L(l),w(j=>zr(l,v,m,j)),O(j=>Ke(l,m,j,1))},[]),X=d.useCallback(()=>{const l=je(c,y);return O(l.errors),l},[y,c]),re=d.useCallback(l=>{const v=se(l,c,y);return v.hasError?T(l,v.error):q(l),v},[y,c]),E=(l,{type:v="input",withError:m=!0,withFocus:j=!0}={})=>{const b={onChange:Nr(C=>G(l,C))};return m&&(b.error=_[l]),v==="checkbox"?b.checked=R(l,y):b.value=R(l,y),j&&(b.onFocus=()=>f(C=>he(A({},C),{[l]:!0})),b.onBlur=()=>{if(Fe(l,i)){const C=se(l,c,y);C.hasError?T(l,C.error):q(l)}}),b},me=(l,v)=>m=>{m==null||m.preventDefault();const j=X();j.hasErrors?v==null||v(j.errors,y,m):l==null||l(u(y),m)},N=l=>u(l||y),ne=d.useCallback(l=>{l.preventDefault(),ee()},[]),B=l=>{if(l){const m=R(l,p);if(typeof m=="boolean")return m;const j=R(l,y),V=R(l,x.current);return!Ve(j,V)}return Object.keys(p).length>0?Ge(p):!Ve(y,x.current)},be=d.useCallback(l=>Ge(g,l),[g]),J=d.useCallback(l=>l?!se(l,c,y).hasError:!je(c,y).hasErrors,[y,c]);return{values:y,errors:_,setValues:ge,setErrors:U,setFieldValue:G,setFieldError:T,clearFieldError:q,clearErrors:K,reset:ee,validate:X,validateField:re,reorderListItem:ve,removeListItem:I,insertListItem:te,getInputProps:E,onSubmit:me,onReset:ne,isDirty:B,isTouched:be,setTouched:f,setDirty:h,resetTouched:F,resetDirty:Q,isValid:J,getTransformedValues:N}}var ye={},Fr=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||r.forEach(function(o){e.addRange(o)}),t&&t.focus()}},qr=Fr,Ye={"text/plain":"Text","text/html":"Url",default:"Text"},Lr="Copy to clipboard: #{key}, Enter";function Br(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function Hr(e,t){var r,n,o,s,i,u,c=!1;t||(t={}),r=t.debug||!1;try{o=qr(),s=document.createRange(),i=document.getSelection(),u=document.createElement("span"),u.textContent=e,u.ariaHidden="true",u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",function(f){if(f.stopPropagation(),t.format)if(f.preventDefault(),typeof f.clipboardData>"u"){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var p=Ye[t.format]||Ye.default;window.clipboardData.setData(p,e)}else f.clipboardData.clearData(),f.clipboardData.setData(t.format,e);t.onCopy&&(f.preventDefault(),t.onCopy(f.clipboardData))}),document.body.appendChild(u),s.selectNodeContents(u),i.addRange(s);var g=document.execCommand("copy");if(!g)throw new Error("copy command was unsuccessful");c=!0}catch(f){r&&console.error("unable to copy using execCommand: ",f),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),c=!0}catch(p){r&&console.error("unable to copy using clipboardData: ",p),r&&console.error("falling back to prompt"),n=Br("message"in t?t.message:Lr),window.prompt(n,e)}}finally{i&&(typeof i.removeRange=="function"?i.removeRange(s):i.removeAllRanges()),u&&document.body.removeChild(u),o()}return c}var Wr=Hr;function Oe(e){"@babel/helpers - typeof";return Oe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Oe(e)}Object.defineProperty(ye,"__esModule",{value:!0});ye.CopyToClipboard=void 0;var ae=gt(d),Qr=gt(Wr),Ur=["text","onCopy","options","children"];function gt(e){return e&&e.__esModule?e:{default:e}}function Ze(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function et(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Ze(Object(r),!0).forEach(function(n){$e(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ze(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Kr(e,t){if(e==null)return{};var r=Gr(e,t),n,o;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Gr(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,s;for(s=0;s<n.length;s++)o=n[s],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function Xr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function tt(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Jr(e,t,r){return t&&tt(e.prototype,t),r&&tt(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function Yr(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_e(e,t)}function _e(e,t){return _e=Object.setPrototypeOf||function(n,o){return n.__proto__=o,n},_e(e,t)}function Zr(e){var t=tn();return function(){var n=de(e),o;if(t){var s=de(this).constructor;o=Reflect.construct(n,arguments,s)}else o=n.apply(this,arguments);return en(this,o)}}function en(e,t){if(t&&(Oe(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return vt(e)}function vt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function tn(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function de(e){return de=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},de(e)}function $e(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var mt=function(e){Yr(r,e);var t=Zr(r);function r(){var n;Xr(this,r);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return n=t.call.apply(t,[this].concat(s)),$e(vt(n),"onClick",function(u){var c=n.props,g=c.text,f=c.onCopy,p=c.children,h=c.options,y=ae.default.Children.only(p),w=(0,Qr.default)(g,h);f&&f(g,w),y&&y.props&&typeof y.props.onClick=="function"&&y.props.onClick(u)}),n}return Jr(r,[{key:"render",value:function(){var o=this.props;o.text,o.onCopy,o.options;var s=o.children,i=Kr(o,Ur),u=ae.default.Children.only(s);return ae.default.cloneElement(u,et(et({},i),{},{onClick:this.onClick}))}}]),r}(ae.default.PureComponent);ye.CopyToClipboard=mt;$e(mt,"defaultProps",{onCopy:void 0,options:void 0});var rn=ye,Ce=rn.CopyToClipboard;Ce.CopyToClipboard=Ce;var nn=Ce;const on=nt(nn),pn=()=>{const[e,t]=d.useState([]),[r,n]=d.useState(!1),[o,s]=d.useState(!1),[i,u]=d.useState(!1),c=Mr({initialValues:{title:"",isProtected:!1,password:"",questions:[{id:1,key:$(),type:"radio",label:"",answers:[{id:1,key:$(),label:""},{id:2,key:$(),label:""}]}]},validate:{title:h=>h==""?"Veuillez renseigner le titre du sondage":null}});d.useEffect(()=>{console.log("errors useeffect",e)},[e]);function g(h){p(c.values),console.log("errors",e)}const f=h=>c.values.questions.map(function(y){return y.key}).indexOf(h);function p(h){t([]);let y=!1;if(h.questions.length==0){t(["Veuillez ajouter au moins une question"]);return}if(h.questions.forEach(w=>{let _=f(w.key),O=null;w.label==""&&(O=" ",y=!0),c.setFieldValue(`questions.${_}.error`,O),w.answers.length>0&&w.answers.forEach(x=>{let k=null,F=w.answers.map(function(Q){return Q.key}).indexOf(x.key);x.label==""&&(k=" ",y=!0),c.setFieldValue(`questions.${_}.answers.${F}.error`,k)})}),y)t(["Veuillez renseigner les champs nécessaires"]);else if(e.length==0){let w=h;const O={method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":document.head.querySelector('meta[name="csrf-token"]').content},body:JSON.stringify(w)};n(!0),fetch("/poll",O).then(x=>x.json()).then(x=>{if(x.success){console.log("res",x),s({success:x.success,message:x.result.message,link:x.result.data.pollLink});return}s({message:x.message}),console.log("opened",o)})}}return a.jsxs(a.Fragment,{children:[a.jsxs(Ct,{children:[a.jsx("title",{children:"Nouveau sondage"}),a.jsx("link",{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"}),a.jsx("meta",{name:"robots",content:"index, follow"}),a.jsx("meta",{name:"description",content:"Créez vos sondages gratuitement et sans inscription sur Votee, diffusez votre sondage sur les réseaux et visualisez vos résultats."}),a.jsx("meta",{id:"meta-description",name:"description",content:"Créez vos sondages gratuitement et sans inscription sur Votee, diffusez votre sondage sur les réseaux et visualisez vos résultats."}),a.jsx("meta",{id:"og-title",property:"og:title",content:"Votee"})]}),a.jsxs("div",{className:"min-h-screen",children:[a.jsx(kt,{}),a.jsxs(Et,{pos:"relative",children:[a.jsx(Tt,{visible:r,overlayBlur:2,radius:""}),a.jsx(Rt,{order:2,children:"Nouveau sondage"}),a.jsx(z,{className:`shadow-lg rounded-xl
                            p-2 sm:p-8`,children:a.jsxs("form",{className:"py-4",onSubmit:c.onSubmit(h=>g()),children:[a.jsxs(z,{pos:"relative",children:[a.jsx(ce,{my:"md"}),a.jsx(Se,{size:"md",mb:"xl",placeholder:"Ex: questionnaire rentrée 2023",label:"Titre du sondage",withAsterisk:!0,...c.getInputProps("title")}),a.jsx(ce,{my:"xl"}),a.jsx(yr,{form:c}),a.jsx(ce,{my:"xl"}),e.length>0&&a.jsx(zt,{className:"bg-red-50/80",mt:"md",radius:"lg",py:"sm",children:a.jsx(Re,{size:"sm",children:e.map((h,y)=>a.jsx(Re.Item,{children:a.jsx(S,{size:"sm",fw:"sm",className:" text-red-500",children:h})},y))})})]}),a.jsx(Z,{disabled:r,size:"lg",fz:"md",radius:"md",type:"submit",color:"teal",fullWidth:!0,mt:"lg",children:"Créer"})]})})]}),a.jsx(Nt,{className:"relative"}),a.jsx(It,{zIndex:999,radius:"lg",opened:o,onClose:()=>{},withCloseButton:!1,centered:!0,children:a.jsxs(ot,{className:"flex flex-col py-3",children:[o.success?a.jsx(Vt,{size:50,className:"text-teal-500"}):a.jsx(Dt,{size:50,className:"text-red-400"}),a.jsx(S,{my:"xl",fz:"md",className:"text-gray-700",weight:600,children:o.message}),a.jsx(S,{my:"xl",fz:"md",className:"text-gray-700 px-3",weight:400,children:"Vous pouvez désormais visiter votre sondage sur le lien suivant"}),a.jsxs(D,{className:"font-light relative w-full border border-solid border-gray-200 py-2 rounded-sm justify-around",children:[a.jsx(Mt,{href:o.link,children:o.link}),a.jsx(z,{className:"relative left-2 bottom-[0.5]",children:a.jsx(on,{text:o.link,onCopy:()=>u(!0),children:a.jsx(Lt,{label:i?"Copié":"Copier",withArrow:!0,position:"right",children:a.jsx(Pe,{color:i?"teal":"gray",variant:"subtle",children:i?a.jsx(Ft,{size:16}):a.jsx(qt,{size:16})})})})})]}),o.success?a.jsxs(a.Fragment,{children:[" ",a.jsx(Z,{size:"lg",fz:"md",radius:"md",color:"teal",fullWidth:!0,mt:"lg",variant:"outline",component:"a",href:"/",children:"Accueil"})]}):a.jsx(Z,{size:"lg",fz:"md",radius:"md",color:"teal",fullWidth:!0,mt:"lg",variant:"outline",onClick:()=>{s(!1),n(!1)},children:"Réessayer"})]})})]})]})};export{pn as default};