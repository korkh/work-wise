import{c as k,T as j,A as x,a as D,d as u,r as d,k as t,L as I,m as N,n as f,G as A,_,E as v,g as m,e as b,p as M,q as T}from"./index-JK9OeaRB.js";import{D as V}from"./DynamicReducerLoader-BiT-xZ48.js";import{a as z}from"./addQueryParams-BwJGGhqi.js";import{E as O}from"./employee_consts-Dz_c2cdH.js";import"./EmployeeList-DZYJtxKw.js";import"./DateInput-B9xSDMfp.js";import"./react-datepicker-SOWGmN3z.js";var S=(e=>(e.ID="id",e.EMPLOYEE="lastName",e.EMPLOYEE_ID="employeeId",e))(S||{});const C=e=>{var a;return((a=e.payrollPage)==null?void 0:a.isLoading)||!1},w=e=>{var a;return(a=e.payrollPage)==null?void 0:a.error},R=e=>{var a;return((a=e.payrollPage)==null?void 0:a.pageNumber)||1},U=e=>{var a;return((a=e.payrollPage)==null?void 0:a.pageSize)||10},B=e=>{var a;return(a=e.payrollPage)==null?void 0:a._inited},G=e=>{var a;return((a=e.payrollPage)==null?void 0:a.order)??"asc"},H=e=>{var a;return((a=e.payrollPage)==null?void 0:a.sort)??O.LASTNAME},K=e=>{var a;return((a=e.payrollPage)==null?void 0:a.search)??""},p=k("payrollsPage/fetchPayrollstList",async(e,a)=>{const{extra:o,rejectWithValue:s,getState:r}=a,i=localStorage.getItem(j),l=U(r()),n=H(r()),y=G(r()),E=R(r()),h=K(r());try{if(!i)throw new Error("No token found");z({sort:n,order:y,search:h});const P=await o.api.get("/payrolls",{headers:{Authorization:`Bearer ${i}`},params:{_expand:"user",_pageNumber:E,_pageSize:l,_sort:n,_order:y,q:h}});if(!P.data)throw new Error;return P.data}catch{return s("No response from server")}}),Y={selectId:e=>e.id},c=x(Y),{selectAll:F}=c.getSelectors(e=>e.payrollPage||L),L={...c.getInitialState(),isLoading:!1,error:void 0,ids:[],entities:{},pageNumber:1,pageSize:10,hasMore:!0,order:"asc",sort:S.ID,search:"",_inited:!1},W=D({name:"pages/payrollPageSlice",initialState:L,reducers:{setPage:(e,a)=>{e.pageNumber=a.payload},setOrder:(e,a)=>{e.order=a.payload},setSort:(e,a)=>{e.sort=a.payload},setSearch:(e,a)=>{e.search=a.payload},initState:e=>{e.pageSize=8,e._inited=!0}},extraReducers:e=>{e.addCase(p.pending,(a,o)=>{a.error=void 0,a.isLoading=!0,o.meta.arg.replace&&c.removeAll(a)}).addCase(p.fulfilled,(a,o)=>{a.isLoading=!1,a.hasMore=o.payload.length>=a.pageSize;const s=o.payload.filter(r=>r.id);o.meta.arg.replace?c.setAll(a,s):c.addMany(a,s)}).addCase(p.rejected,(a,o)=>{a.isLoading=!1,a.error=o.payload})}}),{reducer:q,actions:g}=W,$=k("documents/initDocumentPage",async(e,a)=>{const{getState:o,dispatch:s}=a;if(!B(o())){const i=e.get("order"),l=e.get("sort"),n=e.get("search");i&&s(g.setOrder(i)),l&&s(g.setSort(l)),n&&s(g.setSearch(n)),s(g.initState()),s(p({}))}}),Q="_payrollList_1rc0c_1",J={payrollList:Q},X=()=>{const{t:e}=u("payrolls");return[{key:"id",header:"No."},{key:"employee",header:e("Last name"),nestedKeys:["lastName"]},{key:"year",header:e("Year")},{key:"month",header:e("Month")},{key:"workingDays",header:e("Working Days")},{key:"workingHours",header:e("Working Hours")},{key:"atlyginimasPagalDS",header:e("Atlyginimas Pagal DS")},{key:"darboDienu",header:e("Darbo Dienų")},{key:"darboValandu",header:e("Darbo Valandų")},{key:"virsvalandziai",header:e("Virsvalandžiai")},{key:"sventinesIrPoilsioValandos",header:e("Sventinės Ir Poilsio Valandos")},{key:"pirmaEilesPareigosTaikomasNPD",header:e("Pirma Eilės Pareigos Taikomas NPD")},{key:"npd",header:e("NPD")},{key:"atlyginimas",header:e("Atlyginimas")},{key:"atostogos",header:e("Atostogos")},{key:"virsvalandziaiPriskaityta",header:e("Virsvalandžiai Priskaityta")},{key:"priedas",header:e("Priedas")},{key:"priedasUzPoilsioIrSventines",header:e("Priedas Už Poilsio Ir Sventines")},{key:"liga2d",header:e("Liga 2d")},{key:"isVisoPriskaityta",header:e("Iš Viso Priskaityta")},{key:"pajamuMokestis20",header:e("Pajamų Mokestis 20%")},{key:"pajamuMokestis15",header:e("Pajamų Mokestis 15%")},{key:"pajamuMokestisOlandija",header:e("Pajamų Mokestis Olandija")},{key:"sodra_19",header:e("Sodra 19%")},{key:"sodra_3",header:e("Sodra 3%")},{key:"isVisoIsskaityta",header:e("Iš Viso Išskaityta")},{key:"ismoketi",header:e("Išmokėti")},{key:"bankas",header:e("Bankas")},{key:"baudos",header:e("Baudos")},{key:"likutis",header:e("Likutis")},{key:"sodra_1",header:e("Sodra 1%")},{key:"sodraIsViso",header:e("Sodra Iš Viso")},{key:"dienpinigai",header:e("Dienpinigai")},{key:"additionalCalculation",header:e("Additional Calculation")},{key:"kiekTuriGauti",header:e("Kiek Turi Gauti")}]},Z=d.memo(function(a){const{className:o,payrolls:s,isLoading:r}=a,{t:i}=u("payrolls"),l=X();return r?t.jsx(I,{}):!r&&!s.length?t.jsx("div",{className:N(J.payrollList,[o]),children:t.jsx(f,{size:"l",title:i("Payrolls not found")})}):t.jsx(t.Fragment,{children:t.jsx(A,{title:i("List of payrolls"),columns:l,data:s,redirect:_,verticalHeaders:!0,children:t.jsx(v,{data:s,isLoading:r,fileName:"Payrolls"})})})}),ee=d.memo(function(a){const{className:o}=a,{t:s}=u("payrolls"),r=m(F),i=m(C),l=m(w),[n,y]=d.useState(!1);return d.useEffect(()=>{r&&r.length>0&&y(!0)},[r]),l||!n?t.jsx(f,{text:s("Pyrolls loading error")}):t.jsx(Z,{"data-testid":"PayrollList",payrolls:r,isLoading:i,className:o})}),ae={payrollPage:q},re=()=>{const e=b(),[a]=M();return T(()=>{e($(a))}),t.jsx(V,{reducers:ae,removeAfterUnmount:!1,children:t.jsx(ee,{})})},ce=d.memo(re);export{ce as default};
