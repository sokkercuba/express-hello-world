import{r as e,a,t,j as r,o as s,A as n,ad as l,T as i,a3 as o,ae as u,af as d,w as c,a4 as m,J as h,e as p}from"./vendor-a36a82bc.js";import{b as f,A as v,h as y}from"./index-e18e5992.js";const g={all:"All",user:"User",team:"Team",juniors:"Juniors",cweek:"Current Week",tsummary:"Training Summary",training:"Team Training History"};function b(){const{state:b,dispatch:x}=e.useContext(v),{username:S}=b,[j,T]=e.useState(""),[k,W]=e.useState("all");return a(t,{component:"main",maxWidth:"xs",children:r(s,{sx:{marginTop:8,display:"flex",alignItems:"center",flexDirection:"column"},children:[a(n,{sx:{m:1,bgcolor:"secondary.main"},children:a(l,{})}),a(i,{component:"h1",variant:"h5",children:"Update your data"}),r(o,{fullWidth:!0,sx:{mt:3},children:[a(u,{id:"update-select-label",children:"Select type"}),a(d,{value:k,id:"update-select",label:"Update type",onChange:e=>{W(e.target.value)},labelId:"update-select-label",children:Object.keys(g).map((e=>a(c,{value:e,children:g[e]},e)))})]}),r(s,{sx:{mt:1,width:"100%"},children:[a(o,{fullWidth:!0,children:a(m,{required:!0,fullWidth:!0,autoFocus:!0,id:"json-input",name:"update",margin:"normal",label:"Paste here",value:j,onChange:e=>{T(e.target.value)}})}),a(h,{fullWidth:!0,type:"submit",variant:"contained",sx:{mt:3,mb:2},onClick:async e=>{e.preventDefault();const a="all"===k,t=((e,a)=>{const t=f.getSchema(a);if(!t)return null;try{const a=JSON.parse(e);return t(a)?a:(console.log("validation errors: ",t.errors),null)}catch{return null}})(j,k),r=a?"sokker":k;if(t){const e=a?t:{[k]:t},s=await y(`/api/v1/users/${S}`,"POST",x,e),{error:n,status:l}=s;if(n||200!==l)return;T(""),p(`You have successfully updated your ${r} data into our database`,{variant:"success"})}else p(`Data validation failed, please verify it is a valid ${r} data object`,{variant:"error"})},children:"Save"})]})]})})}export{b as default};
