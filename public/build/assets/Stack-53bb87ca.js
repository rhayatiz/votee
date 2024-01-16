import{c as $,h,a as x,u as N,R as n,B as j}from"./app-21643015.js";import{z as q}from"./Footer-6f804e0e.js";function I(e){return`___ref-${e||""}`}const[F,G]=q("List component was not found in tree");var J=$((e,{spacing:r,center:t})=>({itemWrapper:{ref:I("itemWrapper"),display:"inline-flex",flexDirection:"column",whiteSpace:"normal"},item:{whiteSpace:"nowrap",lineHeight:t?1:e.lineHeight,"&:not(:first-of-type)":{marginTop:h({size:r,sizes:e.spacing})},"&[data-with-icon]":{listStyle:"none",[`& .${I("itemWrapper")}`]:{display:"inline-flex",alignItems:t?"center":"flex-start",flexDirection:"row"}}},itemIcon:{display:"inline-block",verticalAlign:"middle",marginRight:e.spacing.sm}}));const K=J;var M=Object.defineProperty,O=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,E=(e,r,t)=>r in e?M(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Q=(e,r)=>{for(var t in r||(r={}))D.call(r,t)&&E(e,t,r[t]);if(O)for(var t of O(r))C.call(r,t)&&E(e,t,r[t]);return e},U=(e,r)=>{var t={};for(var a in e)D.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&O)for(var a of O(e))r.indexOf(a)<0&&C.call(e,a)&&(t[a]=e[a]);return t};const X={},H=x.forwardRef((e,r)=>{const t=N("ListItem",X,e),{className:a,children:p,icon:s}=t,i=U(t,["className","children","icon"]),{icon:l,spacing:o,center:c,listStyleType:f,size:m,withPadding:y,classNames:v,styles:u,unstyled:g,variant:S}=G(),d=s||l,{classes:_,cx:k}=K({withPadding:y,listStyleType:f,center:c,spacing:o},{classNames:v,styles:u,unstyled:g,name:"List",variant:S,size:m});return n.createElement(j,Q({component:"li",className:k(_.item,a),"data-with-icon":!!d||void 0,ref:r},i),n.createElement("div",{className:_.itemWrapper},d&&n.createElement("span",{className:_.itemIcon},d),n.createElement("span",null,p)))});H.displayName="@mantine/core/ListItem";var Y=Object.defineProperty,Z=Object.defineProperties,ee=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,te=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable,z=(e,r,t)=>r in e?Y(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,ae=(e,r)=>{for(var t in r||(r={}))te.call(r,t)&&z(e,t,r[t]);if(b)for(var t of b(r))re.call(r,t)&&z(e,t,r[t]);return e},ne=(e,r)=>Z(e,ee(r)),se=$((e,{withPadding:r,listStyleType:t},{size:a})=>({root:ne(ae({},e.fn.fontStyles()),{listStyleType:t,color:e.colorScheme==="dark"?e.colors.dark[0]:e.black,fontSize:h({size:a,sizes:e.fontSizes}),lineHeight:e.lineHeight,margin:0,paddingLeft:r?e.spacing.xl:0,listStylePosition:"inside"})}));const ie=se;var le=Object.defineProperty,P=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,L=(e,r,t)=>r in e?le(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,oe=(e,r)=>{for(var t in r||(r={}))T.call(r,t)&&L(e,t,r[t]);if(P)for(var t of P(r))V.call(r,t)&&L(e,t,r[t]);return e},ce=(e,r)=>{var t={};for(var a in e)T.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&P)for(var a of P(e))r.indexOf(a)<0&&V.call(e,a)&&(t[a]=e[a]);return t};const pe={type:"unordered",size:"md",spacing:0},W=x.forwardRef((e,r)=>{const t=N("List",pe,e),{children:a,type:p,size:s,listStyleType:i,withPadding:l,center:o,spacing:c,icon:f,className:m,styles:y,classNames:v,unstyled:u,variant:g}=t,S=ce(t,["children","type","size","listStyleType","withPadding","center","spacing","icon","className","styles","classNames","unstyled","variant"]),{classes:d,cx:_}=ie({withPadding:l,listStyleType:i,center:o,spacing:c},{classNames:v,styles:y,name:"List",unstyled:u,size:s,variant:g});return n.createElement(F,{value:{spacing:c,center:o,icon:f,listStyleType:i,size:s,withPadding:l,classNames:v,styles:y,unstyled:u,variant:g}},n.createElement(j,oe({component:p==="unordered"?"ul":"ol",className:_(d.root,m),ref:r},S),a))});W.Item=H;W.displayName="@mantine/core/List";var fe=$((e,{spacing:r,align:t,justify:a})=>({root:{display:"flex",flexDirection:"column",alignItems:t,justifyContent:a,gap:h({size:r,sizes:e.spacing})}}));const me=fe;var de=Object.defineProperty,w=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,R=(e,r,t)=>r in e?de(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,_e=(e,r)=>{for(var t in r||(r={}))B.call(r,t)&&R(e,t,r[t]);if(w)for(var t of w(r))A.call(r,t)&&R(e,t,r[t]);return e},ye=(e,r)=>{var t={};for(var a in e)B.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&w)for(var a of w(e))r.indexOf(a)<0&&A.call(e,a)&&(t[a]=e[a]);return t};const ve={spacing:"md",align:"stretch",justify:"flex-start"},ue=x.forwardRef((e,r)=>{const t=N("Stack",ve,e),{spacing:a,className:p,align:s,justify:i,unstyled:l,variant:o}=t,c=ye(t,["spacing","className","align","justify","unstyled","variant"]),{classes:f,cx:m}=me({spacing:a,align:s,justify:i},{name:"Stack",unstyled:l,variant:o});return n.createElement(j,_e({className:m(f.root,p),ref:r},c))});ue.displayName="@mantine/core/Stack";export{W as L,ue as S,I as g};