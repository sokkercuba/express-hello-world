import{r as e,a,v as t,j as r,p as s,A as l,at as n,T as i,U as o,V as u,W as c,x as d,ae as m,N as h,e as p}from"./vendor-e69cc4a7.js";import{c as v,A as f,h as y,b as g}from"./index-4ad4c9d3.js";const x={all:"All",user:"User",players:"Players",juniors:"Juniors",cweek:"Current Week",tsummary:"Training Summary",training:"Team Training History"};function b(){const{state:b,dispatch:j}=e.useContext(f),{username:S}=b,[W,C]=e.useState(""),[T,k]=e.useState("all");return a(t,{component:"main",maxWidth:"xs",children:r(s,{sx:{marginTop:8,display:"flex",alignItems:"center",flexDirection:"column"},children:[a(l,{sx:{m:1,bgcolor:"secondary.main"},children:a(n,{})}),a(i,{component:"h1",variant:"h5",children:"Update your data"}),r(o,{fullWidth:!0,sx:{mt:3},children:[a(u,{id:"update-select-label",children:"Select type"}),a(c,{value:T,id:"update-select",label:"Update type",onChange:e=>{k(e.target.value)},labelId:"update-select-label",children:Object.keys(x).map((e=>a(d,{value:e,children:x[e]},e)))})]}),r(s,{sx:{mt:1,width:"100%"},children:[a(o,{fullWidth:!0,children:a(m,{required:!0,fullWidth:!0,autoFocus:!0,id:"json-input",name:"update",margin:"normal",label:"Paste here",value:W,onChange:e=>{C(e.target.value)}})}),a(h,{fullWidth:!0,type:"submit",variant:"contained",sx:{mt:3,mb:2},onClick:async e=>{e.preventDefault();const a="all"===T,t=((e,a)=>{const t=v.getSchema(a);if(!t)return null;try{const a=JSON.parse(e);return t(a)?a:(console.log("validation errors: ",t.errors),null)}catch{return null}})(W,T),r=a?S:T;if(t){const e=a?t:{[T]:t},s=await y(`/api/v1/users/${S}`,"PATCH",j,e),{error:l,status:n,...i}=s;if(l||200!==n)return;C(""),g(j,{...i}),p(`You have successfully updated your ${r} data into our database`,{variant:"success"})}else p(`Data validation failed, please verify it is a valid ${r} data object`,{variant:"error"})},children:"Save"})]})]})})}export{b as default};