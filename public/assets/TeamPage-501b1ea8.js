import{r as e,j as a,l as n,a as r,a1 as l,a2 as i,T as d}from"./vendor-c364c43c.js";function t(e){const{children:a,value:l,index:i,...t}=e;return r("div",{role:"tabpanel",hidden:l!==i,id:`squad-tabpanel-${i}`,"aria-labelledby":`squad-tab-${i}`,...t,children:l===i&&r(n,{sx:{p:3},children:r(d,{children:a})})})}function s(e){return{id:`simple-tab-${e}`,"aria-controls":`simple-tabpanel-${e}`}}function o(){const[d,o]=e.useState(0);return a(n,{sx:{width:"100%"},children:[r(n,{sx:{borderBottom:1,borderColor:"divider"},children:a(l,{value:d,onChange:(e,a)=>{o(a)},"aria-label":"squad tabs",children:[r(i,{label:"MAIN",...s(0)}),r(i,{label:"JUNIORS",...s(1)})]})}),r(t,{value:d,index:0,children:"MAIN DATA"}),r(t,{value:d,index:1,children:"JUNIORS DATA"})]})}function u(){return e.useEffect((()=>{}),[]),r(o,{})}export{u as default};