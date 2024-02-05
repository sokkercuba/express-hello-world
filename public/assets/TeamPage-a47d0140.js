import{r as e,j as i,al as a,a as l,am as s,an as n,p as r,s as t,T as d,ao as p,P as x,L as c,D as o,F as g,ap as h,aq as m,ar as f,as as u,ak as v}from"./vendor-e69cc4a7.js";import{A as b}from"./index-76388e24.js";import{P as y}from"./PageTabs-bbf65fd2.js";function k({id:n}){const[r,t]=e.useState([]);return i(a,{size:"small",value:r,color:"success",sx:{marginLeft:"auto"},onChange:(e,i)=>{t(i)},"aria-label":"orders selection",children:[l(s,{size:"small",value:"GK","aria-label":"goal keeper",sx:{border:"none",paddingX:{xs:"3px",sm:"7px"}},children:"GK"}),l(s,{size:"small",value:"DEF","aria-label":"defender",sx:{border:"none",paddingX:{xs:"3px",sm:"7px"}},children:"DEF"}),l(s,{size:"small",value:"MID","aria-label":"midfielder",sx:{border:"none",paddingX:{xs:"3px",sm:"7px"}},children:"MID"}),l(s,{size:"small",value:"ATT","aria-label":"striker",sx:{border:"none",paddingX:{xs:"3px",sm:"7px"}},children:"ATT"})]})}const $=["Tragic","Hopeless","Unsatisfactory","Poor","Weak","Average","Adequate","Good","Solid","Very Good","Excellent","Formidable","Outstanding","Incredible","Brilliant","Magical","Unearthly","Divine","Superdivine"],I={width:"100%",lineHeight:{xs:.5,md:.8,lg:1.33},fontSize:{xs:"0.6rem",md:"0.65rem",lg:"0.8rem"},bgcolor:"background.paper"},L={maxWidth:"150px",textWrap:"nowrap",overflow:"hidden",textOverflow:"ellipsis"};function w(e){const{yellow:i,red:a}=e;return a>0?l(m,{color:"error",fontSize:"small",sx:{transform:"rotate(90deg)"}}):1===i?l(f,{sx:{color:"#ffeb3b"}}):2===i?l(u,{sx:{color:"#ffeb3b"}}):"0 "}function W({id:e,info:a}){return i(n,{sx:{height:"100%",display:"flex",borderRadius:"16px",flexDirection:"column"},children:[i(r,{sx:{gap:"4px",display:"flex",alignItems:"center",borderBottom:"1px solid #ffffff33",paddingX:{xs:"10px",md:"12px",lg:"16px"}},children:[l(t,{color:"inherit",underline:"hover",href:`https://sokker.org/player/PID/${e}`,sx:{display:"flex",alignItems:"center"},children:l(d,{variant:"subtitle2",sx:L,children:a.name.full+","})}),l(d,{variant:"subtitle2",children:`age: ${a.characteristics.age}`}),l(k,{id:e})]}),l(p,{sx:{width:"100%",paddingX:"8px"},children:i(x,{sx:I,"aria-label":"player card info",children:[l(c,{sx:{paddingY:"4px",paddingX:{xs:"10px",md:"12px",lg:"16px"}},children:i(r,{sx:{gap:"4px",display:"flex",alignItems:"center"},children:["value:",l(d,{variant:"subtitle2",fontWeight:700,children:`${a.value.value.toLocaleString("en-US").replace(/,/g," ")} $MN`})]})}),l(o,{variant:"middle"}),l(c,{sx:{paddingY:"4px",paddingX:{xs:"10px",md:"12px",lg:"16px"}},children:i(r,{sx:{gap:"4px",display:"flex",alignItems:"center"},children:["wage:"," ",l(d,{variant:"subtitle2",fontWeight:700,children:`${a.wage.value.toLocaleString("en-US").replace(/,/g," ")} $MN`})]})}),l(o,{variant:"middle"}),l(c,{sx:{paddingY:"4px",paddingX:{xs:"10px",md:"12px",lg:"16px"}},children:i(r,{sx:{gap:"4px",display:"flex",alignItems:"center"},children:[l(d,{fontWeight:700,variant:"subtitle2",children:`${$[a.skills.form].toLocaleLowerCase()} [${a.skills.form}]`})," ","form"]})}),l(o,{variant:"middle"}),l(c,{sx:{paddingY:"4px",paddingX:{xs:"10px",md:"12px",lg:"16px"}},children:i(r,{sx:{gap:"4px",display:"flex",alignItems:"center"},children:[l(d,{fontWeight:700,variant:"subtitle2",children:`${$[a.skills.tacticalDiscipline].toLocaleLowerCase()} [${a.skills.tacticalDiscipline}]`})," ","tactical discipline"]})}),l(o,{variant:"middle"}),l(c,{sx:{paddingY:"4px",paddingX:{xs:"10px",md:"12px",lg:"16px"}},children:i(r,{sx:{gap:"4px",display:"flex",alignItems:"center"},children:["height:",l(d,{fontWeight:700,variant:"subtitle2",children:`${a.characteristics.height} cm,`})," ","weight:",l(d,{fontWeight:700,variant:"subtitle2",children:`${a.characteristics.weight.toFixed(1)} kg,`}),"BMI:",l(d,{fontWeight:700,variant:"subtitle2",children:`${a.characteristics.bmi.toFixed(2)}`})]})}),l(o,{variant:"middle"}),i(c,{sx:{paddingY:"4px",paddingX:{xs:"10px",md:"12px",lg:"16px"}},children:[" ",i(r,{sx:{gap:"4px",display:"flex",alignItems:"center"},children:[i(g,{children:["cards: ",w(a.stats.cards)]}),i(g,{children:["NT cards: ",w(a.nationalStats.cards)]}),i(g,{children:["injury:",a.injury.daysRemaining>0?i(g,{children:[l(h,{color:"error",fontSize:"small"}),`(${a.injury.daysRemaining} days)`]}):"none"]})]})]}),l(o,{variant:"middle"}),l(c,{}),l(o,{variant:"middle"}),i(c,{sx:{paddingY:"4px",paddingX:{xs:"10px",md:"12px",lg:"16px"},display:"flex",alignItems:"center"},children:[i(r,{sx:{flex:1,gap:"4px",display:"flex",alignItems:"center"},children:[l(d,{fontWeight:700,variant:"subtitle2",children:`${$[a.skills.stamina].toLocaleLowerCase()} [${a.skills.stamina}]`})," ","stamina"]}),i(r,{sx:{flex:1,gap:"4px",display:"flex",alignItems:"center"},children:[l(d,{fontWeight:700,variant:"subtitle2",children:`${$[a.skills.keeper].toLocaleLowerCase()} [${a.skills.keeper}]`})," ","keeper"]})]}),l(o,{variant:"middle"}),i(c,{sx:{paddingY:"4px",paddingX:{xs:"10px",md:"12px",lg:"16px"},display:"flex",alignItems:"center"},children:[i(r,{sx:{flex:1,gap:"4px",display:"flex",alignItems:"center"},children:[l(d,{fontWeight:700,variant:"subtitle2",children:`${$[a.skills.pace].toLocaleLowerCase()} [${a.skills.pace}]`})," ","pace"]}),i(r,{sx:{flex:1,gap:"4px",display:"flex",alignItems:"center"},children:[l(d,{fontWeight:700,variant:"subtitle2",children:`${$[a.skills.defending].toLocaleLowerCase()} [${a.skills.defending}]`})," ","defender"]})]}),l(o,{variant:"middle"}),i(c,{sx:{paddingY:"4px",paddingX:{xs:"10px",md:"12px",lg:"16px"},display:"flex",alignItems:"center"},children:[i(r,{sx:{flex:1,gap:"4px",display:"flex",alignItems:"center"},children:[l(d,{fontWeight:700,variant:"subtitle2",children:`${$[a.skills.technique].toLocaleLowerCase()} [${a.skills.technique}]`})," ","technique"]}),i(r,{sx:{flex:1,gap:"4px",display:"flex",alignItems:"center"},children:[l(d,{fontWeight:700,variant:"subtitle2",children:`${$[a.skills.playmaking].toLocaleLowerCase()} [${a.skills.playmaking}]`})," ","playmaker"]})]}),l(o,{variant:"middle"}),i(c,{sx:{paddingY:"4px",paddingX:{xs:"10px",md:"12px",lg:"16px"},display:"flex",alignItems:"center"},children:[i(r,{sx:{flex:1,gap:"4px",display:"flex",alignItems:"center"},children:[l(d,{fontWeight:700,variant:"subtitle2",children:`${$[a.skills.passing].toLocaleLowerCase()} [${a.skills.passing}]`})," ","passing"]}),i(r,{sx:{flex:1,gap:"4px",display:"flex",alignItems:"center"},children:[l(d,{fontWeight:700,variant:"subtitle2",children:`${$[a.skills.striker].toLocaleLowerCase()} [${a.skills.striker}]`})," ","striker"]})]})]})})]})}function X(){const{state:i,dispatch:a}=e.useContext(b),{players:s}=i,n=s&&s.players.length>0?s.players:null;return l(v,{container:!0,spacing:{xs:"4px",md:"4px",lg:"24px"},children:n&&n.map((e=>{const{id:i,info:{nationalSharing:a}}=e;return a?l(v,{item:!0,xs:12,sm:8,md:6,xl:4,children:l(W,{...e})},i):null}))})}const S=[{label:"MAIN",children:l(X,{})},{label:"JUNIORS",children:"JUNIORS DATA"}];function C(){return l(y,{tabs:S})}export{C as default};
