import{r as a,u as e,a as n,Z as o,t,j as r,o as s,A as i,a7 as l,T as d,a8 as c,a9 as m,aa as u,I as p,ab as g,ac as h,ad as b,ae as f,K as x,af as w,q as y}from"./vendor-88ac2967.js";import{A as v,h as C,s as S,a as D}from"./index-db1993e0.js";function k(){const{state:k,dispatch:I}=a.useContext(v),{loggedIn:W}=k,T=e(),[j,q]=a.useState(!1),[A,P]=a.useState(!1);if(W)return n(o,{to:"/"});return n(t,{component:"main",maxWidth:"xs",children:r(s,{sx:{marginTop:8,display:"flex",alignItems:"center",flexDirection:"column"},children:[n(i,{sx:{m:1,bgcolor:"secondary.main"},children:n(l,{})}),n(d,{component:"h1",variant:"h5",children:"Sign in"}),r(s,{component:"form",onSubmit:async a=>{a.preventDefault();const e=new FormData(a.currentTarget),n=await C("/api/auth/v1/login","POST",I,{login:e.get("login"),password:e.get("password")}),{user:o,error:t,status:r}=n;t||200!==r||(S(I,!0),D(I,o.login))},sx:{mt:1,width:"100%"},children:[r(c,{fullWidth:!0,children:[n(m,{required:!0,fullWidth:!0,autoFocus:!0,id:"login",name:"login",margin:"normal",label:"Username",autoComplete:"Username"}),n(m,{required:!0,fullWidth:!0,id:"password",margin:"normal",name:"password",label:"Password",autoComplete:"password",type:A?"text":"password",sx:{backgroundColor:"rgb(232,240,254)"},InputProps:{endAdornment:n(u,{position:"end",children:n(p,{edge:"end",onClick:()=>P((a=>!a)),onMouseDown:a=>{a.preventDefault()},"aria-label":"toggle password visibility",children:n(A?g:h,{})})})}}),n(b,{label:"Remember me",control:n(f,{color:"primary",checked:j,onChange:a=>{q(a.target.checked)}})})]}),n(x,{fullWidth:!0,type:"submit",variant:"contained",sx:{mt:3,mb:2},children:"Sign In"})]}),n(w,{container:!0,children:r(w,{item:!0,typography:"body2",children:["Don't have an account?"," ",n(y,{variant:"body1",component:"button",onClick:()=>T("/signup"),children:"Sign Up"})]})})]})})}export{k as default};
