import{c as E,T as L,A,a as _,r as d,d as x,g as u,k as n,n as N,H as j,e as T,p as z,q as I}from"./index-Emr_5gFi.js";import{D as O}from"./DynamicReducerLoader-DW5heBXK.js";import{E as P}from"./employee_consts-Dz_c2cdH.js";import{a as b}from"./EmployeeList-DprBSY44.js";import{a as R}from"./addQueryParams-BwJGGhqi.js";import"./DateInput-Bh4uY4rg.js";import"./react-datepicker-DIGHDV67.js";const v="_employeesPage_djpsr_1",w="_list_djpsr_4",M={employeesPage:v,list:w},k=s=>{var e;return((e=s.employeePage)==null?void 0:e.isLoading)||!1},C=s=>{var e;return(e=s.employeePage)==null?void 0:e.error},D=s=>{var e;return((e=s.employeePage)==null?void 0:e.pageNumber)||1},F=s=>{var e;return((e=s.employeePage)==null?void 0:e.pageSize)||10},U=s=>{var e;return(e=s.employeePage)==null?void 0:e._inited},q=s=>{var e;return((e=s.employeePage)==null?void 0:e.order)??"asc"},H=s=>{var e;return((e=s.employeePage)==null?void 0:e.sort)??P.LASTNAME},K=s=>{var e;return((e=s.employeePage)==null?void 0:e.search)??""},g=E("employeesPage/fetchEmployeesList",async(s,e)=>{const{extra:o,rejectWithValue:t,getState:a}=e,r=localStorage.getItem(L),l=F(a()),i=H(a()),p=q(a()),h=D(a()),f=K(a());try{if(!r)throw new Error("No token found");R({sort:i,order:p,search:f});const y=await o.api.get("/employees",{headers:{Authorization:`Bearer ${r}`},params:{_expand:"user",_pageNumber:h,_pageSize:l,_sort:i,_order:p,q:f}});if(!y.data)throw new Error;return y.data}catch{return t("No response from server")}}),B={selectId:s=>s.id},c=A(B),{selectAll:G}=c.getSelectors(s=>s.employeePage||S),S={...c.getInitialState(),isLoading:!1,error:void 0,ids:[],entities:{},pageNumber:1,pageSize:8,hasMore:!0,order:"asc",sort:P.LASTNAME,search:"",_inited:!1},Q=_({name:"pages/employeesPageSlice",initialState:S,reducers:{setPage:(s,e)=>{s.pageNumber=e.payload},setOrder:(s,e)=>{s.order=e.payload},setSort:(s,e)=>{s.sort=e.payload},setSearch:(s,e)=>{s.search=e.payload},initState:s=>{s.pageSize=10,s._inited=!0}},extraReducers:s=>{s.addCase(g.pending,(e,o)=>{e.error=void 0,e.isLoading=!0,o.meta.arg.replace&&c.removeAll(e)}).addCase(g.fulfilled,(e,o)=>{e.isLoading=!1,e.hasMore=o.payload.length>=e.pageSize;const t=o.payload.filter(a=>a.id);o.meta.arg.replace?c.setAll(e,t):c.addMany(e,t)}).addCase(g.rejected,(e,o)=>{e.isLoading=!1,e.error=o.payload})}}),{reducer:V,actions:m}=Q,W=E("employeesPage/initEmployeesPage",async(s,e)=>{const{getState:o,dispatch:t}=e;if(!U(o())){const r=s.get("order"),l=s.get("sort"),i=s.get("search");r&&t(m.setOrder(r)),l&&t(m.setSort(l)),i&&t(m.setSearch(i)),t(m.initState()),t(g({}))}}),Y=d.memo(function(e){const{className:o}=e,{t}=x(),a=u(G),r=u(k);console.log("LOADER",r);const l=u(C),[i,p]=d.useState(!1);return d.useEffect(()=>{a&&p(!0)},[a]),l||!i?n.jsx(N,{text:t("Employees loading error")}):r?n.jsx(j,{}):n.jsx(b,{"data-testid":"EmployeeList",employees:a,isLoading:r,className:o})}),$={employeePage:V},ae=d.memo(function(){const e=T(),[o]=z();return I(()=>{e(W(o))}),n.jsx(O,{reducers:$,removeAfterUnmount:!1,children:n.jsx(Y,{className:M.list})})});export{ae as default};
