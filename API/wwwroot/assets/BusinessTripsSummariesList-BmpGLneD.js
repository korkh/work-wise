import{r as s,d as u,e as k,z as p,k as i,H as c,G as f,E as L}from"./index-Emr_5gFi.js";import{v as h}from"./v4-CQkTLCs1.js";function x(l){const t={};return l.forEach(e=>{if(!e.laikotarpis||!e.employeeId||!e.employee)return;const a=new Date(e.laikotarpis).getFullYear(),o=`${e.employeeId}-${a}`;t[o]||(t[o]={id:h(),employeeId:e.employeeId,avatar:e.employee.avatar,employeeName:e.employee.lastName,year:a,totalAlga:0,totalDienpinigai:0,totalBankas:0,totalBaudos:0,totalLikutis:0,formerYearLikutis:0}),t[o].totalAlga+=e.alga||0,t[o].totalDienpinigai+=e.dienpinigai||0,t[o].totalBankas+=e.bankas||0,t[o].totalBaudos+=e.baudos||0,t[o].totalLikutis+=e.likutis||0}),Object.values(t).forEach(e=>{e.totalAlga=parseFloat(e.totalAlga.toFixed(2)),e.totalDienpinigai=parseFloat(e.totalDienpinigai.toFixed(2)),e.totalBankas=parseFloat(e.totalBankas.toFixed(2)),e.totalBaudos=parseFloat(e.totalBaudos.toFixed(2)),e.totalLikutis=parseFloat(e.totalLikutis.toFixed(2));const a=`${e.employeeId}-${e.year-1}`;t[a]&&(e.formerYearLikutis=t[a].totalLikutis),e.formerYearLikutis&&(e.formerYearLikutis=parseFloat(e.formerYearLikutis.toFixed(2)),e.totalLikutis+=e.formerYearLikutis),e.totalLikutis=parseFloat(e.totalLikutis.toFixed(2))}),Object.values(t)}const B=l=>{const{isLoading:t,businessTrips:e}=l,{t:a}=u("businessTrip"),[o,n]=s.useState([]),r=k(),d=[{key:"id",header:"No.",notEditable:!0},{key:"avatar",header:a("Photo"),notEditable:!0},{key:"employeeName",header:a("Employee")},{key:"year",header:a("Year")},{key:"totalAlga",header:a("Total salary")},{key:"totalDienpinigai",header:a("Total daily allowance")},{key:"totalBankas",header:a("Total Bank")},{key:"totalBaudos",header:a("Total Fines")},{key:"totalLikutis",header:a("Total balance")}];return s.useEffect(()=>{n(x(e))},[e]),s.useEffect(()=>{r(p({replace:!0}))},[r]),t?i.jsx(c,{}):i.jsx(i.Fragment,{children:i.jsx(f,{title:a("Business Trips Summaries"),columns:d,data:o,editable:!1,children:i.jsx(L,{data:o,isLoading:t,fileName:"Business trips summaries"})})})},T=s.memo(B);export{T as default};
