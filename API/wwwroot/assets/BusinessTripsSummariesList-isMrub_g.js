import{r as o,d as k,e as c,y as p,j as i,L as f,k as L,m as x,G as h,E as g}from"./index-09SwYWH7.js";import{v as B}from"./v4-CQkTLCs1.js";function F(l){const t={};return l.forEach(e=>{if(!e.laikotarpis||!e.employeeId||!e.employee)return;const s=new Date(e.laikotarpis).getFullYear(),a=`${e.employeeId}-${s}`;t[a]||(t[a]={id:B(),employeeId:e.employeeId,avatar:e.employee.avatar,employeeName:e.employee.lastName,year:s,totalAlga:0,totalDienpinigai:0,totalBankas:0,totalBaudos:0,totalLikutis:0,formerYearLikutis:0}),t[a].totalAlga+=e.alga||0,t[a].totalDienpinigai+=e.dienpinigai||0,t[a].totalBankas+=e.bankas||0,t[a].totalBaudos+=e.baudos||0,t[a].totalLikutis+=e.likutis||0}),Object.values(t).forEach(e=>{e.totalAlga=parseFloat(e.totalAlga.toFixed(2)),e.totalDienpinigai=parseFloat(e.totalDienpinigai.toFixed(2)),e.totalBankas=parseFloat(e.totalBankas.toFixed(2)),e.totalBaudos=parseFloat(e.totalBaudos.toFixed(2)),e.totalLikutis=parseFloat(e.totalLikutis.toFixed(2));const s=`${e.employeeId}-${e.year-1}`;t[s]&&(e.formerYearLikutis=t[s].totalLikutis),e.formerYearLikutis&&(e.formerYearLikutis=parseFloat(e.formerYearLikutis.toFixed(2)),e.totalLikutis+=e.formerYearLikutis),e.totalLikutis=parseFloat(e.totalLikutis.toFixed(2))}),Object.values(t)}const m=l=>{const{className:t,isLoading:e,businessTrips:s}=l,{t:a}=k("businessTrip"),[r,d]=o.useState([]),n=c(),u=[{key:"id",header:"No.",notEditable:!0},{key:"avatar",header:a("Photo"),notEditable:!0},{key:"employeeName",header:a("Employee")},{key:"year",header:a("Year")},{key:"totalAlga",header:a("Total salary")},{key:"totalDienpinigai",header:a("Total daily allowance")},{key:"totalBankas",header:a("Total Bank")},{key:"totalBaudos",header:a("Total Fines")},{key:"totalLikutis",header:a("Total balance")}];return o.useEffect(()=>{d(F(s))},[s]),o.useEffect(()=>{n(p({replace:!0}))},[n]),e?i.jsx(f,{}):!e&&!r.length?i.jsx("div",{className:L("",[t],{}),children:i.jsx(x,{size:"l",title:a("No business trip summaries found")})}):i.jsx(i.Fragment,{children:i.jsx(h,{title:a("Business Trips Summaries"),columns:u,data:r,editable:!1,children:i.jsx(g,{data:r,isLoading:e,fileName:"Business trips summaries"})})})},E=o.memo(m);export{E as default};