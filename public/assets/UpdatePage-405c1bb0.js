import{r as a,a as e,t,j as r,o as s,A as n,ai as l,T as i,a8 as o,aj as u,ak as c,w as d,a9 as m,K as h,e as p}from"./vendor-88ac2967.js";import{b as v,A as f,h as y}from"./index-db1993e0.js";const g={all:"All",user:"User",team:"Team",juniors:"Juniors",cweek:"Current Week",tsummary:"Training Summary",training:"Team Training History"};function b(){const{state:b,dispatch:x}=a.useContext(f),{username:j}=b,[S,T]=a.useState(""),[W,k]=a.useState("all");return e(t,{component:"main",maxWidth:"xs",children:r(s,{sx:{marginTop:8,display:"flex",alignItems:"center",flexDirection:"column"},children:[e(n,{sx:{m:1,bgcolor:"secondary.main"},children:e(l,{})}),e(i,{component:"h1",variant:"h5",children:"Update your data"}),r(o,{fullWidth:!0,sx:{mt:3},children:[e(u,{id:"update-select-label",children:"Select type"}),e(c,{value:W,id:"update-select",label:"Update type",onChange:a=>{k(a.target.value)},labelId:"update-select-label",children:Object.keys(g).map((a=>e(d,{value:a,children:g[a]},a)))})]}),r(s,{sx:{mt:1,width:"100%"},children:[e(o,{fullWidth:!0,children:e(m,{required:!0,fullWidth:!0,autoFocus:!0,id:"json-input",name:"update",margin:"normal",label:"Paste here",value:S,onChange:a=>{T(a.target.value)}})}),e(h,{fullWidth:!0,type:"submit",variant:"contained",sx:{mt:3,mb:2},onClick:async a=>{a.preventDefault();const e="all"===W,t=((a,e)=>{const t=v.getSchema(e);if(!t)return null;try{const e=JSON.parse(a);return t(e)?e:(console.log("validation errors: ",t.errors),null)}catch{return null}})(S,W),r=e?j:W;if(t){const a=e?t:{[W]:t},s=await y(`/api/v1/users/${j}`,"POST",x,a),{error:n,status:l}=s;if(n||200!==l)return;T(""),p(`You have successfully updated your ${r} data into our database`,{variant:"success"})}else p(`Data validation failed, please verify it is a valid ${r} data object`,{variant:"error"})},children:"Save"})]})]})})}export{b as default};
