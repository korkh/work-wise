import{c as E,T as L,z as A,a as _,r as m,d as x,g as u,j as g,m as N,e as j,o as z,p as I}from"./index-DcHTJ7-o.js";import{D as T}from"./DynamicReducerLoader-CcsLl0sD.js";import{E as P}from"./employee_consts-Dz_c2cdH.js";import{a as O}from"./EmployeeList-D5e606e9.js";import{a as b}from"./addQueryParams-BwJGGhqi.js";import"./DateInput-Deh3dXLb.js";import"./react-datepicker-BMl0mIkg.js";const v="_employeesPage_djpsr_1",w="_list_djpsr_4",M={employeesPage:v,list:w},R=s=>{var e;return((e=s.employeePage)==null?void 0:e.isLoading)||!1},C=s=>{var e;return(e=s.employeePage)==null?void 0:e.error},F=s=>{var e;return((e=s.employeePage)==null?void 0:e.pageNumber)||1},U=s=>{var e;return((e=s.employeePage)==null?void 0:e.pageSize)||10},k=s=>{var e;return(e=s.employeePage)==null?void 0:e._inited},D=s=>{var e;return((e=s.employeePage)==null?void 0:e.order)??"asc"},K=s=>{var e;return((e=s.employeePage)==null?void 0:e.sort)??P.LASTNAME},q=s=>{var e;return((e=s.employeePage)==null?void 0:e.search)??""},d=E("employeesPage/fetchEmployeesList",async(s,e)=>{const{extra:o,rejectWithValue:t,getState:a}=e,r=localStorage.getItem(L),n=U(a()),i=K(a()),c=D(a()),h=F(a()),f=q(a());try{if(!r)throw new Error("No token found");b({sort:i,order:c,search:f});const y=await o.api.get("/employees",{headers:{Authorization:`Bearer ${r}`},params:{_expand:"user",_pageNumber:h,_pageSize:n,_sort:i,_order:c,q:f}});if(!y.data)throw new Error;return y.data}catch{return t("No response from server")}}),B={selectId:s=>s.id},l=A(B),{selectAll:G}=l.getSelectors(s=>s.employeePage||S),S={...l.getInitialState(),isLoading:!1,error:void 0,ids:[],entities:{},pageNumber:1,pageSize:8,hasMore:!0,order:"asc",sort:P.LASTNAME,search:"",_inited:!1},H=_({name:"pages/employeesPageSlice",initialState:S,reducers:{setPage:(s,e)=>{s.pageNumber=e.payload},setOrder:(s,e)=>{s.order=e.payload},setSort:(s,e)=>{s.sort=e.payload},setSearch:(s,e)=>{s.search=e.payload},initState:s=>{s.pageSize=10,s._inited=!0}},extraReducers:s=>{s.addCase(d.pending,(e,o)=>{e.error=void 0,e.isLoading=!0,o.meta.arg.replace&&l.removeAll(e)}).addCase(d.fulfilled,(e,o)=>{e.isLoading=!1,e.hasMore=o.payload.length>=e.pageSize;const t=o.payload.filter(a=>a.id);o.meta.arg.replace?l.setAll(e,t):l.addMany(e,t)}).addCase(d.rejected,(e,o)=>{e.isLoading=!1,e.error=o.payload})}}),{reducer:Q,actions:p}=H,V=E("employeesPage/initEmployeesPage",async(s,e)=>{const{getState:o,dispatch:t}=e;if(!k(o())){const r=s.get("order"),n=s.get("sort"),i=s.get("search");r&&t(p.setOrder(r)),n&&t(p.setSort(n)),i&&t(p.setSearch(i)),t(p.initState()),t(d({}))}}),W=m.memo(function(e){const{className:o}=e,{t}=x(),a=u(G),r=u(R),n=u(C),[i,c]=m.useState(!1);return m.useEffect(()=>{a&&c(!0)},[a]),n||!i?g.jsx(N,{text:t("Employees loading error")}):g.jsx(O,{"data-testid":"EmployeeList",employees:a,isLoading:r,className:o})}),Y={employeePage:Q},te=m.memo(function(){const e=j(),[o]=z();return I(()=>{e(V(o))}),g.jsx(T,{reducers:Y,removeAfterUnmount:!1,children:g.jsx(W,{className:M.list})})});export{te as default};
