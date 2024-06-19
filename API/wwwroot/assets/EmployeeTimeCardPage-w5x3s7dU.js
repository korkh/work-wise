import{r as j,j as t,k as E,J,d as B,m as $,C as Q,S as v,e as X,g as K,K as q,M as z,N as G,O as Z,Q as tt,h as et,U as st,V as L,W as nt,R as rt,n as at,X as ot}from"./index-Bq66GNBI.js";import{D as lt}from"./react-datepicker-CW3rQmqe.js";import{D as it}from"./DynamicReducerLoader-xt_cjTWN.js";const dt="_employeeTimeTablePage_13kdk_1",ct="_monthSelect_13kdk_4",ut="_timeCard_13kdk_12",ht="_verticalHeader_13kdk_47",mt="_weekend_13kdk_54",gt="_holiday_13kdk_58",xt="_summaryRow_13kdk_68",yt="_inputCell_13kdk_72",pt="_fullNameColumn_13kdk_83",D={employeeTimeTablePage:dt,monthSelect:ct,timeCard:ut,verticalHeader:ht,weekend:mt,holiday:gt,summaryRow:xt,inputCell:yt,fullNameColumn:pt},jt="_cellTooltip_1u5js_1",kt="_tooltipText_1u5js_5",U={cellTooltip:jt,tooltipText:kt},f=j.memo(function(d){const{className:a,str:e,num:x}=d;return t.jsxs("div",{className:E(U.cellTooltip,[a],{}),children:[t.jsx("span",{children:J(e,x)}),String(e).length>x&&t.jsx("span",{className:U.tooltipText,children:e})]})}),St=j.memo(function({className:d}){const{t:a}=B("timecards");return t.jsxs(t.Fragment,{children:[t.jsx("th",{className:d,children:t.jsx(f,{str:a("Working Days"),num:10})}),t.jsx("th",{className:d,children:t.jsx(f,{str:a("Working Hours"),num:10})}),t.jsx("th",{className:d,children:a("Overtime")}),t.jsx("th",{className:d,children:t.jsx(f,{str:a("Overtime P & S"),num:10})}),t.jsx("th",{className:d,children:t.jsx(f,{str:a("K"),num:10})}),t.jsx("th",{className:d,children:t.jsx(f,{str:a("A"),num:10})}),t.jsx("th",{className:d,children:t.jsx(f,{str:a("NA"),num:10})}),t.jsx("th",{className:d,children:t.jsx(f,{str:a("PV"),num:10})}),t.jsx("th",{className:d,children:t.jsx(f,{str:a("PB"),num:10})}),t.jsx("th",{className:d,children:a("L")}),t.jsx("th",{className:d,children:a("Absence")})]})});var p=(g=>(g.K="K",g.A="A",g.NA="NA",g.PV="PV",g.L="L",g.P="P",g.S="S",g.PB="PB",g))(p||{});const Ct=j.memo(function(d){const{className:a,form:e,selectedMonth:x}=d,{t:y}=B("timecards"),b=(i,o)=>new Date(i,o+1,0).getDate(),l=(e==null?void 0:e.reduce((i,o)=>{const h=o.workingStates.filter(r=>typeof r.state=="number"&&r.state>0).length;return i+h},0))||0,k=(e==null?void 0:e.reduce((i,o)=>{const h=o.workingStates.reduce((r,m)=>{const c=typeof m.state=="string"?Number(m.state):m.state;return isNaN(c)?r:r+c},0);return i+h},0))||0,N=k>160?k-160:0,H=(e==null?void 0:e.reduce((i,o)=>{const h=o.workingStates.reduce((r,m)=>{if(typeof m.state=="string"&&(m.state.startsWith("P/")||m.state.startsWith("S/"))){const c=parseInt(m.state.split("/")[1],10);return r+(isNaN(c)?0:c)}return r},0);return i+h},0))||0,C=(e==null?void 0:e.reduce((i,o)=>{const h=o.workingStates.filter(r=>typeof r.state=="string"&&(r.state.startsWith("K")||r.state.startsWith("PK")||r.state.startsWith("SK"))).length;return i+h},0))||0,T=(e==null?void 0:e.reduce((i,o)=>{const h=o.workingStates.filter(r=>r.state===p.L).length;return i+h},0))||0,P=(e==null?void 0:e.reduce((i,o)=>{const h=o.workingStates.filter(r=>r.state===p.A).length;return i+h},0))||0,_=(e==null?void 0:e.reduce((i,o)=>{const h=o.workingStates.filter(r=>r.state===p.NA).length;return i+h},0))||0,w=(e==null?void 0:e.reduce((i,o)=>{const h=o.workingStates.filter(r=>r.state===p.PV).length;return i+h},0))||0,A=(e==null?void 0:e.reduce((i,o)=>{const h=o.workingStates.filter(r=>r.state===p.PB).length;return i+h},0))||0,R=(e==null?void 0:e.reduce((i,o)=>{const h=o.workingStates.reduce((r,m)=>typeof m.state=="string"&&m.state===p.NA||m.state===p.PB?r+8:r,0);return i+h},0))||0;return t.jsxs("tr",{className:a,children:[t.jsx("td",{colSpan:3,children:y("Summary")}),Array.from({length:b(Number(x==null?void 0:x.split("-")[0]),Number(x==null?void 0:x.split("-")[1])-1)},(i,o)=>t.jsx("td",{},o)),t.jsx("td",{children:l}),t.jsx("td",{children:k}),t.jsx("td",{children:N}),t.jsx("td",{children:H}),t.jsx("td",{children:C}),t.jsx("td",{children:P}),t.jsx("td",{children:_}),t.jsx("td",{children:w}),t.jsx("td",{children:A}),t.jsx("td",{children:T}),t.jsx("td",{children:R})]})}),I=(g,d)=>new Date(g,d+1,0).getDate(),Nt=j.memo(function(d){const{selectedMonth:a,holidays:e,toggleHoliday:x,weekEndClass:y,holidayClass:b}=d;if(!a)return null;const[l,k]=a.split("-").map(Number),N=I(l,k-1);return Array.from({length:N},(H,C)=>{const T=new Date(l,k-1,C+1).getDay(),P=T===0||T===6,_=e==null?void 0:e.includes(C+1);return t.jsx("th",{className:E("",[],{[y]:P,[b]:_}),onClick:()=>x(C+1),children:C+1},C+1)})}),ft="_fullNameColumn_wp37g_1",Tt="_wEnd_wp37g_7",Dt="_hDay_wp37g_12",_t="_inputCell_wp37g_17",W={fullNameColumn:ft,wEnd:Tt,hDay:Dt,inputCell:_t},bt=j.memo(function(d){const{form:a,selectedMonth:e,handleWorkingStateChange:x,adjustedWorkingHours:y}=d,{t:b}=B();return!a||a.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:10,children:t.jsx($,{title:b("No data available")})})}):a.map((l,k)=>{const N=l.workingStates.reduce((s,n)=>(s[n.day]=n.state,s),{}),H=l.workingStates.filter(s=>typeof s.state=="number"&&s.state>0).length,C=l.workingStates.reduce((s,n)=>{const S=typeof n.state=="string"?Number(n.state):n.state;return isNaN(S)?s:s+S},0),T=l.workingStates.reduce((s,n)=>{const S=typeof n.state=="string"?Number(n.state):n.state;return!isNaN(S)&&S>8?s+(S-8):s},0),P=l.workingStates.reduce((s,n)=>{if(typeof n.state=="string"&&(n.state.startsWith("P/")||n.state.startsWith("PK/")||n.state.startsWith("S/")||n.state.startsWith("SK/"))){const S=parseInt(n.state.split("/")[1],10);return s+(isNaN(S)?0:S)}return s},0),_=l.workingStates.filter(s=>typeof s.state=="string"&&(s.state.startsWith("K")||s.state.startsWith("PK")||s.state.startsWith("SK"))).length,w=l.workingStates.filter(s=>s.state===p.L).length,A=l.workingStates.filter(s=>s.state===p.A).length,R=l.workingStates.filter(s=>s.state===p.NA).length,i=l.workingStates.filter(s=>s.state===p.PV).length,o=l.workingStates.filter(s=>s.state===p.PB).length,h=l.workingStates.reduce((s,n)=>typeof n.state=="string"&&n.state===p.NA||n.state===p.PB?s+8:s,0),[r,m]=e.split("-").map(Number),c=I(r,m-1),u=y[l.id]??l.availableWorkingHoursPerMonth;return t.jsxs("tr",{children:[t.jsx("td",{children:k+1}),t.jsx("td",{className:W.fullNameColumn,children:t.jsx(f,{str:`${l.employeeFirstName} ${l.employeeLastName}`,num:20})}),t.jsx("td",{children:u}),Array.from({length:c},(s,n)=>{const S=new Date(r,m-1,n+1),F=S.getDay()===0||S.getDay()===6,V=l.workingStates.some(M=>M.day===n+1&&M.holiday),Y=F?"P":V?"S":"";return t.jsx("td",{className:E(W.inputCell,[],{[W.wEnd]:F,[W.hDay]:V}),children:t.jsx("input",{type:"text",value:N[n+1]||Y,onChange:M=>{const O=M.target.value.toUpperCase();x(l.id,n+1,isNaN(Number(O))?O:Number(O))},className:E("",[],{[W.wEnd]:F,[W.hDay]:V})})},n+1)}),t.jsx("td",{children:H}),t.jsx("td",{children:C}),t.jsx("td",{children:T}),t.jsx("td",{children:P}),t.jsx("td",{children:_}),t.jsx("td",{children:A}),t.jsx("td",{children:R}),t.jsx("td",{children:i}),t.jsx("td",{children:o}),t.jsx("td",{children:w}),t.jsx("td",{children:h})]},l.id)})}),Pt=j.memo(function(){return t.jsxs(Q,{gap:"16",style:{height:"100%"},max:!0,children:[t.jsx(v,{width:"80%",height:"40%",border:"16px"}),t.jsx(v,{width:"80%",height:"40%",border:"16px"}),t.jsx(v,{width:"80%",height:"40%",border:"16px"}),t.jsx(v,{width:"80%",height:"40%",border:"16px"}),t.jsx(v,{width:"80%",height:"40%",border:"16px"}),t.jsx(v,{width:"80%",height:"40%",border:"16px"})]})}),Ht={employeeTimeCard:ot},wt=g=>{const{className:d}=g,{t:a}=B("timecards"),e=X(),x=K(q),y=K(z),b=K(G),l=K(Z),k=K(tt),[N,H]=j.useState(new Date),[C,T]=j.useState([]),[P,_]=j.useState({}),w=et();j.useEffect(()=>{e(st())},[e]),j.useEffect(()=>{const c=N.getFullYear(),u=N.getMonth()+1,s=`${c}-${String(u).padStart(2,"0")}`;e(L.setSelectedMonth(s))},[N,e]),j.useEffect(()=>{const c=y==null?void 0:y.map(u=>u.workingStates).flat().filter(u=>u.holiday).map(u=>u.day);T(c),e(L.updateAvailableWorkingDays(c))},[y,e]);const A=c=>{H(c)},R=(c,u,s)=>{const n=isNaN(Number(s))?s:Number(s);e(L.updateEmployeeState({id:c,day:u,state:n}))},i=c=>{T(u=>{const s=u!=null&&u.includes(c)?u.filter(n=>n!==c):u&&[...u,c];return e(L.updateAvailableWorkingDays(s)),s})},o=()=>{x&&_(c=>x.reduce((u,s)=>{const n=c[s.id]??s.availableWorkingHoursPerMonth??0;return u[s.id]=n+1,u},{}))},h=()=>{x&&_(c=>x.reduce((u,s)=>{const n=c[s.id]??s.availableWorkingHoursPerMonth??0;return u[s.id]=n-1,u},{}))},r=j.useCallback(()=>{y&&(e(nt()),w())},[e,w,y]);let m;return b?m=t.jsx(Pt,{}):l?m=t.jsx($,{align:"center",variant:"error",title:a("TimeCard loading error"),style:{marginTop:"10vh"}}):!y||y.length===0?m=t.jsx($,{align:"center",variant:"accent",title:a("No data available. Try to choose another date!"),style:{marginTop:"10vh"}}):m=t.jsxs("table",{className:E(D.timeCard,[d],{}),children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"#"}),t.jsx("th",{className:D.fullNameColumn,children:a("Full Name")}),t.jsxs("th",{className:D.verticalHeader,children:[t.jsx(f,{str:a("Hrs in month"),num:10}),t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>o(),children:"+"}),t.jsx("button",{onClick:()=>h(),children:"-"})]})]}),t.jsx(Nt,{weekEndClass:D.weekend,holidayClass:D.holiday,selectedMonth:k,holidays:C,toggleHoliday:i}),t.jsx(St,{className:D.verticalHeader})]})}),t.jsxs("tbody",{children:[t.jsx(bt,{form:y,selectedMonth:k,handleWorkingStateChange:R,adjustedWorkingHours:P}),t.jsx(Ct,{selectedMonth:k,form:y,className:D.summaryRow})]})]}),t.jsx(it,{reducers:Ht,children:t.jsxs("div",{className:E(D.employeeTimeTablePage,[d]),children:[t.jsxs(rt,{gap:"32",justify:"center",align:"center",children:[t.jsx($,{title:a("Employees time card")}),t.jsx(lt,{selected:N,onChange:A,dateFormat:"yyyy-MM",showMonthYearPicker:!0,className:D.monthSelect}),t.jsx(at,{onClick:r,children:a("Save")})]}),m]})})},At=j.memo(wt);export{At as default};
