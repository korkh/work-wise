import{r as m,j as a,k as d,R as v,m as x}from"./index-B477IfSl.js";import{D as h}from"./react-datepicker-DWGoDquC.js";const f="_section_j6v5c_1",b="_withoutPaddings_j6v5c_5",y="_normal_j6v5c_9",H="_light_j6v5c_14",I="_outlined_j6v5c_18",P="_round_j6v5c_22",q="_partial_j6v5c_26",C="_max_j6v5c_30",D="_gap_0_j6v5c_34",N="_gap_8_j6v5c_38",k="_gap_16_j6v5c_42",w="_gap_24_j6v5c_46",R="_fullHeight_j6v5c_50",t={section:f,withoutPaddings:b,normal:y,light:H,outlined:I,round:P,partial:q,max:C,gap_0:D,gap_8:N,gap_16:k,gap_24:w,fullHeight:R},S={0:"gap_0",8:"gap_8",16:"gap_16",24:"gap_24"},F=m.memo(function(s){const{className:o,children:_,variant:c="normal",max:e,padding:n="8",border:l="normal",fullHeight:i,as:p="div",...u}=s,g=S[n];return a.jsx(p,{className:d(t.section,[o,t[c],t[g],t[l]],{[t.max]:e,[t.fullHeight]:i}),...u,children:_})}),E="_dateInput_aqp4b_1",T="_label_aqp4b_10",W="_input_aqp4b_14",$="_focused_aqp4b_24",z="_readonly_aqp4b_31",r={dateInput:E,label:T,input:W,focused:$,readonly:z},G=m.memo(function({className:s,label:o,onChange:_,readonly:c,gap:e="8",width:n,justify:l="center",...i}){const p=n?{width:n}:{};return a.jsxs(v,{max:!0,gap:e,justify:l,children:[a.jsx(x,{text:o}),a.jsx("div",{style:p,className:d(r.dateInput,[s],{[r.readonly]:c}),children:a.jsx(h,{className:d(r.input),onChange:_||((u,g)=>{}),...i})})]})});export{G as D,F as S};
