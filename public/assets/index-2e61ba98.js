import{r as a,u as e,a as n,a2 as r,v as s,j as t,p as o,A as i,ad as l,T as d,U as c,ae as m,af as u,I as p,ag as g,ah as h,ai as b,aj as f,N as w,ak as y,s as x}from"./vendor-e69cc4a7.js";import{A as v,h as k,s as C,a as S,b as j}from"./index-65a66730.js";function D(){const{state:D,dispatch:I}=a.useContext(v),{loggedIn:T}=D,W=e(),[U,A]=a.useState(!1),[P,q]=a.useState(!1);if(T)return n(r,{to:"/"});return n(s,{component:"main",maxWidth:"xs",children:t(o,{sx:{marginTop:8,display:"flex",alignItems:"center",flexDirection:"column"},children:[n(i,{sx:{m:1,bgcolor:"secondary.main"},children:n(l,{})}),n(d,{component:"h1",variant:"h5",children:"Sign in"}),t(o,{component:"form",onSubmit:async a=>{a.preventDefault();const e=new FormData(a.currentTarget),n=await k("/api/auth/v1/login","POST",I,{login:e.get("login"),password:e.get("password")}),{error:r,status:s,user:{login:t}}=n;if(r||200!==s)return;C(I,!0),S(I,t);const o=await k(`/api/v1/users/${t}`,"GET",I),{error:i,status:l,props:{user:d,juniors:c,cweek:m,tsummary:u,players:p,training:g}}=o;i||200!==l||j(I,{user:d,juniors:c,cweek:m,tsummary:u,players:p,training:g})},sx:{mt:1,width:"100%"},children:[t(c,{fullWidth:!0,children:[n(m,{required:!0,fullWidth:!0,autoFocus:!0,id:"login",name:"login",margin:"normal",label:"Username",autoComplete:"Username"}),n(m,{required:!0,fullWidth:!0,id:"password",margin:"normal",name:"password",label:"Password",autoComplete:"password",type:P?"text":"password",sx:{backgroundColor:"rgb(232,240,254)"},InputProps:{endAdornment:n(u,{position:"end",children:n(p,{edge:"end",onClick:()=>q((a=>!a)),onMouseDown:a=>{a.preventDefault()},"aria-label":"toggle password visibility",children:n(P?g:h,{})})})}}),n(b,{label:"Remember me",control:n(f,{color:"primary",checked:U,onChange:a=>{A(a.target.checked)}})})]}),n(w,{fullWidth:!0,type:"submit",variant:"contained",sx:{mt:3,mb:2},children:"Sign In"})]}),n(y,{container:!0,children:t(y,{item:!0,typography:"body2",children:["Don't have an account?"," ",n(x,{variant:"body1",component:"button",onClick:()=>W("/signup"),children:"Sign Up"})]})})]})})}export{D as default};