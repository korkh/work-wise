import{c as D,T as N,z as T,a as I,r as u,d as x,j as r,L as R,k as A,m as E,G as w,A as M,E as j,D as y,g as f,e as O,o as W,p as k}from"./index-Bq66GNBI.js";import{a as z}from"./addQueryParams-BwJGGhqi.js";import{D as b}from"./DynamicReducerLoader-xt_cjTWN.js";const H="_documentsPage_bhoj8_1",v={documentsPage:H};var P=(t=>(t.ID="id",t.EMPLOYEE="lastName",t.EMPLOYEE_ID="employeeId",t.TITLE="title",t.ISSUE_DATE="issueDate",t.EXPIRATION_DATE="expirationDate",t.HAS_TWO_MONTH_WARNING="hasTwoMonthWarning",t.HAS_THREE_MONTH_WARNING="hasThreeMonthWarning",t.HAS_SIX_MONTH_WARNING="hasSixMonthWarning",t))(P||{});const C=t=>{var e;return((e=t.documentPage)==null?void 0:e.isLoading)||!1},G=t=>{var e;return(e=t.documentPage)==null?void 0:e.error},U=t=>{var e;return((e=t.documentPage)==null?void 0:e.pageNumber)||1},B=t=>{var e;return((e=t.documentPage)==null?void 0:e.pageSize)||10},K=t=>{var e;return(e=t.documentPage)==null?void 0:e._inited},Y=t=>{var e;return((e=t.documentPage)==null?void 0:e.order)??"asc"},$=t=>{var e;return((e=t.documentPage)==null?void 0:e.sort)??P.TITLE},X=t=>{var e;return((e=t.documentPage)==null?void 0:e.search)??""},h=D("employeesPage/fetchDocumenstList",async(t,e)=>{const{extra:o,rejectWithValue:a,getState:s}=e,c=localStorage.getItem(N),d=B(s()),i=$(s()),n=Y(s()),L=U(s()),_=X(s());try{if(!c)throw new Error("No token found");z({sort:i,order:n,search:_});const p=await o.api.get("/documents",{headers:{Authorization:`Bearer ${c}`},params:{_expand:"user",_pageNumber:L,_pageSize:d,_sort:i,_order:n,q:_}});if(!p.data)throw new Error;return p.data}catch{return a("No response from server")}}),q={selectId:t=>t.id},m=T(q),S={...m.getInitialState(),isLoading:!1,error:void 0,ids:[],entities:{},pageNumber:1,pageSize:10,hasMore:!0,order:"asc",sort:P.TITLE,search:"",_inited:!1},Q=t=>t.documentPage||S,{selectAll:V,selectById:ue}=m.getSelectors(Q),J=I({name:"pages/documentPageSlice",initialState:S,reducers:{setPage:(t,e)=>{t.pageNumber=e.payload},setOrder:(t,e)=>{t.order=e.payload},setSort:(t,e)=>{t.sort=e.payload},setSearch:(t,e)=>{t.search=e.payload},initState:t=>{t.pageSize=8,t._inited=!0}},extraReducers:t=>{t.addCase(h.pending,(e,o)=>{e.error=void 0,e.isLoading=!0,o.meta.arg.replace&&m.removeAll(e)}).addCase(h.fulfilled,(e,o)=>{e.isLoading=!1,e.hasMore=o.payload.length>=e.pageSize;const a=o.payload.filter(s=>s.employeeId);o.meta.arg.replace?m.setAll(e,a):m.addMany(e,a)}).addCase(h.rejected,(e,o)=>{e.isLoading=!1,e.error=o.payload})}}),{reducer:Z,actions:g}=J,F=D("documents/initDocumentPage",async(t,e)=>{const{getState:o,dispatch:a}=e;if(!K(o())){const c=t.get("order"),d=t.get("sort"),i=t.get("search");c&&a(g.setOrder(c)),d&&a(g.setSort(d)),i&&a(g.setSearch(i)),a(g.initState()),a(h({}))}}),ee="_redRow_1s7kx_1",te="_orangeRow_1s7kx_5",se="_yellowRow_1s7kx_9",l={redRow:ee,orangeRow:te,yellowRow:se},ae=u.memo(function(e){const{className:o,documents:a,isLoading:s}=e,{t:c}=x(),d=[{key:"id",header:"No."},{key:"employee",nestedKeys:["lastName"],header:"Lastname"},{key:"title",header:"Title"},{key:"issueDate",header:"Issued",render:n=>y(n)},{key:"expirationDate",header:"Expire",render:n=>y(n)}],i=n=>n.hasTwoMonthWarning&&n.hasThreeMonthWarning&&n.hasSixMonthWarning?l.redRow:n.hasThreeMonthWarning&&n.hasSixMonthWarning?l.orangeRow:n.hasSixMonthWarning?l.yellowRow:"";return s?r.jsx(R,{}):!s&&!a.length?r.jsx("div",{className:A(l.documentsList,[o],{}),children:r.jsx(E,{size:"l",title:c("Documents not found")})}):r.jsx(r.Fragment,{children:r.jsx(w,{title:"List of documents",columns:d,data:a,redirect:M,getRowClass:i,children:r.jsx(j,{data:a,isLoading:s,fileName:"Documents"})})})}),oe=u.memo(function(e){const{className:o}=e,{t:a}=x(),s=f(V),c=f(C),d=f(G),[i,n]=u.useState(!1);return u.useEffect(()=>{s&&s.length>0&&n(!0)},[s]),d||!i?r.jsx(E,{text:a("Documents loading error")}):r.jsx(ae,{"data-testid":"EmployeeList",documents:s,isLoading:c,className:o})}),ne={documentPage:Z},re=()=>{const t=O(),[e]=W();return k(()=>{t(F(e))}),r.jsx(b,{reducers:ne,removeAfterUnmount:!1,children:r.jsx(oe,{className:v.list})})},me=u.memo(re);export{me as default};
