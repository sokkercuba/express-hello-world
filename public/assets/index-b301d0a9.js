import{r as a,u as e,a as n,t as o,j as s,o as r,A as t,a7 as i,T as d,a8 as l,a9 as c,aa as m,I as u,ab as p,ac as h,K as g,af as f,q as w,e as b}from"./vendor-88ac2967.js";import{A as x,h as y}from"./index-db1993e0.js";function v(){const{dispatch:v}=a.useContext(x),C=e(),[S,W]=a.useState(!1),[D,P]=a.useState(!1);return n(o,{component:"main",maxWidth:"xs",children:s(r,{sx:{marginTop:8,display:"flex",alignItems:"center",flexDirection:"column"},children:[n(t,{sx:{m:1,bgcolor:"secondary.main"},children:n(i,{})}),n(d,{component:"h1",variant:"h5",children:"Sign Up"}),s(r,{component:"form",onSubmit:async a=>{a.preventDefault();const e=new FormData(a.currentTarget),n=e.get("login"),o=e.get("password");if(o!==e.get("confirmpassword"))return void W(!0);const s=await y("/api/auth/v1/signup","POST",v,{login:n,password:o}),{error:r,status:t}=s;r||200!==t||(b("Your user has been successfully created.",{variant:"success"}),C("/login"))},sx:{mt:1,width:"100%"},children:[s(l,{fullWidth:!0,children:[n(c,{required:!0,fullWidth:!0,autoFocus:!0,id:"login",name:"login",margin:"normal",label:"Username",autoComplete:"Username"}),n(c,{required:!0,fullWidth:!0,id:"password",margin:"normal",name:"password",type:"password",label:"Password",autoComplete:"password"}),n(c,{required:!0,fullWidth:!0,error:S,margin:"normal",id:"confirmpassword",name:"confirmpassword",label:"Confirm Password",autoComplete:"password",onFocus:()=>W(!1),type:D?"text":"password",sx:{backgroundColor:"rgb(232,240,254)"},helperText:S?"Passwords did not match":"",InputProps:{endAdornment:n(m,{position:"end",children:n(u,{edge:"end",onClick:()=>P((a=>!a)),onMouseDown:a=>{a.preventDefault()},"aria-label":"toggle password visibility",children:n(D?p:h,{})})})}})]}),n(g,{fullWidth:!0,type:"submit",variant:"contained",sx:{mt:3,mb:2},children:"Sign Me Up"})]}),n(f,{container:!0,children:s(f,{item:!0,typography:"body2",children:["Already have an account?"," ",n(w,{variant:"body1",component:"button",onClick:()=>C("/login"),children:"Sign In"})]})})]})})}export{v as default};
