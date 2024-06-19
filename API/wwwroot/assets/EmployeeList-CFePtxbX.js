import{c as q,T as Q,B as te,a as Ce,r as d,d as A,H as De,g as j,e as X,i as he,f as ge,$ as Ee,k as n,R as x,m as J,n as R,o as $,C as _,I as g,a0 as fe,q as ae,F as be,L as Re,G as xe,a1 as _e,E as Ae}from"./index-B2f6T8yw.js";import{D as se}from"./DynamicReducerLoader-mb3rM1pY.js";import{S as ne,D as k}from"./DateInput-CqtUCr-O.js";const Ne="_employeeDetails_1bu1w_1",je={employeeDetails:Ne},Te=i=>{var s;return((s=i.employeeDetails)==null?void 0:s.isLoading)||!1},oe=i=>{var s;return(s=i.employeeDetails)==null?void 0:s.error},Ie=i=>{var s;return(s=i.employeeDetails)==null?void 0:s.validateErrors},ee=i=>{var s;return(s=i.employeeDetails)==null?void 0:s.form},re=i=>{var s;return(s=i.employeeDetails)==null?void 0:s.readonly},w=q("employeeDetails/fetchEmployeeById",async(i,s)=>{const{extra:t,rejectWithValue:o}=s,c=localStorage.getItem(Q);if(!c)return o("User not found");try{if(!i)throw new Error;const a=JSON.parse(c);if(!a)return o("Invalid token data");const e=await t.api.get(`/employees/${i}`,{headers:{Authorization:`Bearer ${a}`}});if(!e.data)throw new Error;return e.data}catch(a){return console.error("Failed to fetch employee data!",a),o("Failed to fetch employee data")}});var h=(i=>(i.INCORRECT_EMPLOYEE_DATA="incorrect_employee_data",i.INCORRECT_BIRTHDATE="incorrect_birthdate",i.INCORRECT_REGISTRATION_ADDRESS="incorrect_registration_address",i.INCORRECT_PHONE_NUMBER="incorrect_phone_number",i.INCORRECT_EMAIL="incorrect_email",i.INCORRECT_TRANSPORT_INFO="incorrect_transport_info",i.INCORRECT_CONTRACT_DATA="incorrect_contract_data",i.INCORRECT_DOCUMENTS_DATA="incorrect_documents_data",i.INCORRECT_PAYROLLS_DATA="incorrect_payrolls_data",i.NO_DATA="no_data",i.SERVER_ERROR="server_error",i))(h||{});const Oe=i=>{if(!i)return[h.NO_DATA];const{firstName:s,lastName:t,birthDay:o,registrationAddress:c,phoneNumber:a,email:e,transportInfo:u,contractData:C,documents:p,payrolls:m}=i,y=[];(!(s!=null&&s.trim())||!(t!=null&&t.trim()))&&y.push(h.INCORRECT_EMPLOYEE_DATA),e!=null&&e.match(/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/)||y.push(h.INCORRECT_EMAIL),a!=null&&a.match(/^\+?[1-9]\d{1,14}$/)||y.push(h.INCORRECT_PHONE_NUMBER),(!c||!c.address1.trim()||!c.city.trim())&&y.push(h.INCORRECT_REGISTRATION_ADDRESS);const f=new Date;return f.setFullYear(f.getFullYear()-18),o>=f&&y.push(h.INCORRECT_BIRTHDATE),C&&C.acceptionDate&&C.dismissalDate&&C.acceptionDate>=C.dismissalDate&&y.push(h.INCORRECT_CONTRACT_DATA),p!=null&&p.length||y.push(h.INCORRECT_DOCUMENTS_DATA),p==null||p.forEach(N=>{N.expirationDate&&N.expirationDate<new Date&&y.push(h.INCORRECT_DOCUMENTS_DATA)}),u&&!u.drivingLicenseNumber.trim()&&y.push(h.INCORRECT_TRANSPORT_INFO),m!=null&&m.length||y.push(h.INCORRECT_PAYROLLS_DATA),y},G=q("employeeDetails/updateEmployeeData",async(i,s)=>{const{extra:t,rejectWithValue:o,getState:c}=s,a=ee(c()),e=Oe(a);if(e.length)return o(e);const u=localStorage.getItem(Q);if(!u)return o([h.NO_DATA]);try{const C=JSON.parse(u);if(!C)return o([h.NO_DATA]);const p=await t.api.put(`/employees/${a==null?void 0:a.id}`,a,{headers:{Authorization:`Bearer ${C}`}});if(!p.data)throw new Error;return p.data}catch(C){return console.error("Failed to update employee data!",C),o([h.SERVER_ERROR])}}),V=q("employeeDetails/deleteEmployeeData",async(i,s)=>{const{extra:t,rejectWithValue:o}=s,c=localStorage.getItem(Q);if(!c)return o([h.NO_DATA]);try{const a=JSON.parse(c);if(!a)return o([h.NO_DATA]);if((await t.api.delete(`/employees/${i}`,{headers:{Authorization:`Bearer ${a}`}})).status!==204)throw new Error}catch(a){return te.error("Failed to delete employee data!"),console.error("Failed to delete employee data!",a),o([h.SERVER_ERROR])}}),ve={isLoading:!1,readonly:!0,error:void 0,data:void 0},we=Ce({name:"employeeDetails",initialState:ve,reducers:{setReadonly:(i,s)=>{i.readonly=s.payload},cancelEdit:i=>{i.readonly=!0,i.validateErrors=void 0,i.form=i.data},updateEmployee:(i,s)=>{const{id:t,...o}=s.payload;i.form&&t!==void 0&&(i.form.id=t,i.form={...i.form,...o})}},extraReducers:i=>{i.addCase(w.pending,s=>{s.error=void 0,s.isLoading=!0}).addCase(w.fulfilled,(s,t)=>{s.isLoading=!1,s.data=t.payload,s.form=t.payload}).addCase(w.rejected,(s,t)=>{s.isLoading=!1,s.error=t.payload}).addCase(G.pending,s=>{s.validateErrors=void 0,s.isLoading=!0}).addCase(G.fulfilled,(s,t)=>{s.isLoading=!1,s.data=t.payload,s.form=t.payload,s.readonly=!0,s.validateErrors=void 0}).addCase(G.rejected,(s,t)=>{s.isLoading=!1,s.validateErrors=t.payload}).addCase(V.fulfilled,s=>{s.isLoading=!1,s.data=void 0,s.form=void 0}).addCase(V.rejected,(s,t)=>{s.isLoading=!1,s.validateErrors=t.payload}).addCase(V.pending,s=>{s.validateErrors=void 0,s.isLoading=!0})}}),{actions:D,reducer:ie}=we,ke=d.memo(function(s){const{className:t}=s,{t:o}=A(),c=De(),a=c==null?void 0:c.role.includes("Admin"),e=j(re),u=j(ee),[C,p]=d.useState(!1),m=X(),y=he(),f=ge(),N=d.useCallback(()=>{m(D.setReadonly(!1))},[m]),v=d.useCallback(()=>{m(D.setReadonly(!1)),p(!0)},[m]),b=d.useCallback(()=>{m(D.cancelEdit())},[m]),I=d.useCallback(()=>{m(G()),y()},[m,y]),O=d.useCallback(()=>{u!=null&&u.id&&(m(V(String(u.id))),f(Ee()))},[m,f,u==null?void 0:u.id]);return n.jsx(ne,{padding:"24",max:!0,border:"partial",children:n.jsxs(x,{max:!0,justify:"between",className:J("",[t],{}),children:[n.jsx(R,{title:o("Employee details")}),a&&n.jsx(n.Fragment,{children:e?n.jsxs(n.Fragment,{children:[n.jsx($,{onClick:N,"data-testid":"EditableProfileCardHeader.EditButton",children:o("Edit")}),n.jsx($,{onClick:v,"data-testid":"EditableProfileCardHeader.DeleteButton",children:o("Delete")})]}):n.jsxs(x,{gap:"8",children:[n.jsx($,{onClick:b,"data-testid":"EditableProfileCardHeader.CancelButton",color:"error",children:o("Cancel")}),n.jsx($,{onClick:C?O:I,"data-testid":"EditableProfileCardHeader.SaveButton",color:"success",children:o("Confirm")})]})})]})})}),Le=d.memo(function(s){var I,O,L,S,H,P,z,B,F,U,M,Y,K;const{data:t,readonly:o,onChangePosition:c,onChangeContractNumber:a,onChangeAcceptionDate:e,onChangeDismissalDate:u,onChangeeAnnualHolidays:C,onChangeFatherHolidays:p,onChangeEmployementDays:m,onChangeUnpaidHolidays:y,onChangeTruancyDays:f,onChangeAllowedAbsenceDays:N,onChangeUnusedHolidays:v}=s,{t:b}=A();return n.jsxs(x,{max:!0,gap:"24",children:[n.jsxs(_,{gap:"16",max:!0,children:[n.jsx(R,{title:"Contract details"}),n.jsx(g,{size:"s",value:(I=t==null?void 0:t.contractData)==null?void 0:I.position,label:b("Capacity"),onChange:c,readonly:o,"data-testid":"EmployeeDetailsCard.position"}),n.jsx(g,{size:"s",width:"70%",justify:"between",value:(O=t==null?void 0:t.contractData)==null?void 0:O.contractNumber,label:b("Contract number"),onChange:a,readonly:o,"data-testid":"EmployeeDetailsCard.contractNumber"}),n.jsx(k,{gap:"8",width:"70%",justify:"between",selected:(L=t==null?void 0:t.contractData)==null?void 0:L.acceptionDate,onChange:e||((W,Z)=>{}),label:b("Accepted on"),readonly:o,"data-testid":"EmployeeDetailsCard.acceptionDate"}),n.jsx(k,{gap:"8",width:"70%",justify:"between",selected:(S=t==null?void 0:t.contractData)==null?void 0:S.dismissalDate,onChange:u||((W,Z)=>{}),label:b("Dismissal date"),readonly:o,"data-testid":"EmployeeDetailsCard.dismissalDate"}),n.jsx(g,{size:"s",width:"70%",justify:"between",value:(H=t==null?void 0:t.contractData)==null?void 0:H.annualHolidays,label:b("Annual holidays"),onChange:C,readonly:o,"data-testid":"EmployeeDetailsCard.annualHolidays"}),n.jsx(g,{size:"s",width:"70%",justify:"between",value:(z=(P=t==null?void 0:t.contractData)==null?void 0:P.fatherHolidays)==null?void 0:z.toString(),label:b("Father holidays"),onChange:p,readonly:o,"data-testid":"EmployeeDetailsCard.fatherHolidays"})]}),n.jsxs(_,{gap:"16",max:!0,children:[n.jsx(g,{size:"s",type:"number",width:"70%",justify:"between",value:(F=(B=t==null?void 0:t.contractData)==null?void 0:B.employmentDays)==null?void 0:F.toString(),label:b("Employment days"),onChange:m,readonly:!0,"data-testid":"EmployeeDetailsCard.employmentDays"}),n.jsx(g,{size:"s",width:"70%",justify:"between",value:(U=t==null?void 0:t.contractData)==null?void 0:U.unpaidHolidays,label:b("Unpaid holidays"),onChange:y,readonly:o,"data-testid":"EmployeeDetailsCard.unpaidHolidays"}),n.jsx(g,{size:"s",width:"70%",justify:"between",value:(M=t==null?void 0:t.contractData)==null?void 0:M.truancyDays,label:b("Truancy days"),onChange:f,readonly:o,"data-testid":"EmployeeDetailsCard.truancyDays"}),n.jsx(g,{size:"s",width:"70%",justify:"between",value:(Y=t==null?void 0:t.contractData)==null?void 0:Y.allowedAbsenceDays,label:b("Allowed absence days"),onChange:N,readonly:o,"data-testid":"EmployeeDetailsCard.allowedAbsenceDays"}),n.jsx(g,{size:"s",width:"70%",justify:"between",value:(K=t==null?void 0:t.contractData)==null?void 0:K.unusedHolidays,label:b("Unused holidays"),onChange:v,readonly:!0,"data-testid":"EmployeeDetailsCard.unusedHolidays"})]})]})}),Se=d.memo(function(s){const{data:t,readonly:o,onChangeFirstname:c,onChangeLastname:a,onChangeBirthday:e,onChangeEmail:u,onChangePhoneNumber:C}=s,{t:p}=A();return n.jsx(x,{gap:"24",max:!0,children:n.jsxs(_,{gap:"16",max:!0,children:[n.jsx(R,{title:"Personal information"}),n.jsx(g,{size:"s",value:t==null?void 0:t.firstName,label:p("Firstname"),onChange:c,readonly:o,"data-testid":"EmployeeDetailsCard.firstName"}),n.jsx(g,{size:"s",value:t==null?void 0:t.lastName,label:p("Lastname"),onChange:a,readonly:o,"data-testid":"EmployeeDetailsCard.lastName"}),n.jsx(k,{selected:t==null?void 0:t.birthDay,onChange:e||((m,y)=>{}),label:p("Birthday"),readonly:o,"data-testid":"EmployeeDetailsCard.birthDay"}),n.jsx(g,{size:"s",value:t==null?void 0:t.email,label:p("Email"),onChange:u,readonly:o,"data-testid":"EmployeeDetailsCard.email"}),n.jsx(g,{size:"s",width:"88%",justify:"between",value:t==null?void 0:t.phoneNumber,label:p("Phone number"),onChange:C,readonly:o,"data-testid":"EmployeeDetailsCard.phoneNumber"})]})})}),He=d.memo(function(s){var p,m,y,f;const{data:t,readonly:o,onChangeRegistrationAddress:c,onChangeCity:a,onChangeZip:e,onChangeCountry:u}=s,{t:C}=A();return n.jsx(x,{gap:"24",max:!0,children:n.jsxs(_,{gap:"16",max:!0,children:[n.jsx(R,{title:"Registration address"}),n.jsx(g,{size:"s",value:(p=t==null?void 0:t.registrationAddress)==null?void 0:p.address1,label:C("Address"),onChange:c,readonly:o,"data-testid":"EmployeeDetailsCard.address"}),n.jsx(g,{size:"s",value:(m=t==null?void 0:t.registrationAddress)==null?void 0:m.city,label:C("City"),onChange:a,readonly:o,"data-testid":"EmployeeDetailsCard.city"}),n.jsx(g,{size:"s",value:(y=t==null?void 0:t.registrationAddress)==null?void 0:y.zip,label:C("ZIP"),onChange:e,readonly:o,"data-testid":"EmployeeDetailsCard.zip"}),n.jsx(g,{size:"s",value:(f=t==null?void 0:t.registrationAddress)==null?void 0:f.country,label:C("Country"),onChange:u,readonly:o,"data-testid":"EmployeeDetailsCard.country"})]})})}),Pe=d.memo(function(s){var C,p,m,y;const{data:t,readonly:o,onChangeDrivingLicenseNumber:c,onChangeE100CardNumber:a,onChangeExpectedKmPerDay:e}=s,{t:u}=A();return n.jsx(x,{gap:"24",max:!0,children:n.jsxs(_,{gap:"16",max:!0,children:[n.jsx(R,{title:"Transport information"}),n.jsx(g,{size:"s",width:"85%",justify:"between",value:(C=t==null?void 0:t.transportInfo)==null?void 0:C.drivingLicenseNumber,label:u("Driving license"),onChange:c,readonly:o,"data-testid":"EmployeeDetailsCard.drivingLicenseNumber"}),n.jsx(g,{size:"s",width:"85%",justify:"between",value:(p=t==null?void 0:t.transportInfo)==null?void 0:p.e_100_CardNumber,label:u("e100 Card Number"),onChange:a,readonly:o,"data-testid":"EmployeeDetailsCard.e100CardNumber"}),n.jsx(g,{size:"s",value:(m=t==null?void 0:t.transportInfo)==null?void 0:m.cars.map(f=>f.manufacturer+" "+f.model).toString(),label:u("Cars"),onChange:()=>{},readonly:o,"data-testid":"EmployeeDetailsCard.cars"}),n.jsx(g,{size:"s",width:"90%",justify:"between",value:(y=t==null?void 0:t.transportInfo)==null?void 0:y.expectedKmPerDay,label:u("Km per day"),onChange:e,readonly:o,"data-testid":"EmployeeDetailsCard.expectedKmPerDay"})]})})}),ze=d.memo(function(s){var C;const{data:t,readonly:o,onChangeDocumentTitle:c,onChangeDocumentIssueDate:a,onChangeDocumentExpirationDate:e}=s,{t:u}=A();return!t&&t!==void 0?(te.error("NO DOCUMENTS FOUND. TRY AGAIN LATER"),n.jsx(R,{title:"NO DOCUMENTS FOUND!"})):n.jsx(x,{gap:"24",max:!0,children:n.jsxs(_,{gap:"16",max:!0,children:[n.jsx(R,{title:"Employee's documents"}),(C=t==null?void 0:t.documents)==null?void 0:C.map((p,m)=>n.jsxs(n.Fragment,{children:[n.jsx(g,{size:"s",width:"97%",value:p.title,label:u("Title"),onChange:y=>c&&c(m,y),readonly:o,"data-testid":"DocumentsData.title"}),n.jsx(k,{gap:"8",width:"93%",label:u("Issue date"),selected:p.issueDate,onChange:(y,f)=>a&&a(m,y,f),readonly:o,"data-testid":"DocumentsData.issueDate"}),n.jsx(k,{gap:"8",width:"92%",selected:p.expirationDate,onChange:(y,f)=>e&&e(m,y,f),label:u("Expire date"),readonly:o,"data-testid":"DocumentsData.expirationDate"})]}))]})})}),Be=d.memo(function(s){const{className:t,data:o}=s;return n.jsx(ne,{max:!0,padding:"16",className:t,border:"partial",children:n.jsxs(_,{gap:"32",max:!0,children:[(o==null?void 0:o.avatar)&&n.jsx(x,{justify:"center",max:!0,children:n.jsx(fe,{size:200,src:o==null?void 0:o.avatar})}),n.jsx(Se,{...s}),(o==null?void 0:o.contractData)&&n.jsx(Le,{...s}),n.jsx(He,{...s}),(o==null?void 0:o.transportInfo)&&n.jsx(Pe,{...s}),(o==null?void 0:o.documents)&&n.jsx(ze,{...s})]})})}),Fe={employeeDetails:ie},Ue=d.memo(function(s){const{className:t,employeeId:o}=s,{t:c}=A(),a=X(),e=j(ee),u=j(Te),C=j(oe),p=j(re),m=j(Ie),y={[h.INCORRECT_EMPLOYEE_DATA]:c("errors.incorrect_employee_data"),[h.INCORRECT_BIRTHDATE]:c("errors.incorrect_birthdate"),[h.INCORRECT_REGISTRATION_ADDRESS]:c("errors.incorrect_registration_address"),[h.INCORRECT_PHONE_NUMBER]:c("errors.incorrect_phone_number"),[h.INCORRECT_EMAIL]:c("errors.incorrect_email"),[h.INCORRECT_TRANSPORT_INFO]:c("errors.incorrect_transport_info"),[h.INCORRECT_CONTRACT_DATA]:c("errors.incorrect_contract_data"),[h.INCORRECT_DOCUMENTS_DATA]:c("errors.incorrect_documents_data"),[h.INCORRECT_PAYROLLS_DATA]:c("errors.incorrect_payrolls_data"),[h.NO_DATA]:c("errors.no_data"),[h.SERVER_ERROR]:c("errors.server_error")};ae(()=>{o&&a(w(o))});const f=d.useCallback(r=>{a(D.updateEmployee({firstName:r||""}))},[a]),N=d.useCallback(r=>{a(D.updateEmployee({lastName:r||""}))},[a]),v=(r,l)=>{l&&a(D.updateEmployee({birthDay:r||null}))},b=d.useCallback(r=>{a(D.updateEmployee({email:r||""}))},[a]),I=d.useCallback(r=>{a(D.updateEmployee({phoneNumber:r||""}))},[a]),O=d.useCallback(r=>{e&&e.registrationAddress&&a(D.updateEmployee({registrationAddress:{...e.registrationAddress,address1:r||""}}))},[a,e]),L=d.useCallback(r=>{e&&e.registrationAddress&&a(D.updateEmployee({registrationAddress:{...e.registrationAddress,city:r||""}}))},[a,e]),S=d.useCallback(r=>{e&&e.registrationAddress&&a(D.updateEmployee({registrationAddress:{...e.registrationAddress,zip:r||""}}))},[a,e]),H=d.useCallback(r=>{e&&e.registrationAddress&&a(D.updateEmployee({registrationAddress:{...e.registrationAddress,country:r||""}}))},[a,e]),P=d.useCallback(r=>{var l;e&&((l=e.transportInfo)!=null&&l.drivingLicenseNumber)&&a(D.updateEmployee({transportInfo:{...e.transportInfo,drivingLicenseNumber:r||""}}))},[a,e]),z=d.useCallback(r=>{var l;e&&((l=e.transportInfo)!=null&&l.e_100_CardNumber)&&a(D.updateEmployee({transportInfo:{...e.transportInfo,e_100_CardNumber:r||""}}))},[a,e]),B=d.useCallback(r=>{var l;e&&((l=e.transportInfo)!=null&&l.expectedKmPerDay)&&a(D.updateEmployee({transportInfo:{...e.transportInfo,expectedKmPerDay:r||""}}))},[a,e]),F=d.useCallback(r=>{var l;e&&((l=e.contractData)!=null&&l.position)&&a(D.updateEmployee({contractData:{...e.contractData,position:r||""}}))},[a,e]),U=d.useCallback(r=>{var l;e&&((l=e.contractData)!=null&&l.contractNumber)&&a(D.updateEmployee({contractData:{...e.contractData,contractNumber:r||""}}))},[a,e]),M=(r,l)=>{l&&a(D.updateEmployee({contractData:{...e==null?void 0:e.contractData,acceptionDate:r||null}}))},Y=(r,l)=>{l&&a(D.updateEmployee({contractData:{...e==null?void 0:e.contractData,dismissalDate:r||null}}))},K=d.useCallback(r=>{var l;if(e&&((l=e.contractData)!=null&&l.employmentDays)){const E=r&&parseInt(r,10)||0;a(D.updateEmployee({contractData:{...e==null?void 0:e.contractData,employmentDays:E||0}}))}},[a,e]),W=d.useCallback(r=>{var l;if(e&&((l=e.contractData)!=null&&l.annualHolidays)){const E=r&&parseInt(r,10)||0;a(D.updateEmployee({contractData:{...e==null?void 0:e.contractData,annualHolidays:E||0}}))}},[a,e]),Z=d.useCallback(r=>{var l;if(e&&((l=e.contractData)!=null&&l.fatherHolidays)){const E=r&&parseInt(r,10)||0;a(D.updateEmployee({contractData:{...e==null?void 0:e.contractData,fatherHolidays:E}}))}},[a,e]),le=d.useCallback(r=>{var l;if(e&&((l=e.contractData)!=null&&l.unpaidHolidays)){const E=r&&parseInt(r,10)||0;a(D.updateEmployee({contractData:{...e==null?void 0:e.contractData,unpaidHolidays:E||0}}))}},[a,e]),ce=d.useCallback(r=>{var l;if(e&&((l=e.contractData)!=null&&l.truancyDays)){const E=r&&parseInt(r,10)||0;a(D.updateEmployee({contractData:{...e.contractData,truancyDays:E||0}}))}},[a,e]),de=d.useCallback(r=>{var l;if(e&&((l=e.contractData)!=null&&l.allowedAbsenceDays)){const E=r&&parseInt(r,10)||0;a(D.updateEmployee({contractData:{...e.contractData,allowedAbsenceDays:E||0}}))}},[a,e]),ue=d.useCallback(r=>{var l;if(e&&((l=e.contractData)!=null&&l.unusedHolidays)){const E=r&&parseInt(r,10)||0;a(D.updateEmployee({contractData:{...e.contractData,unusedHolidays:E||0}}))}},[a,e]),me=d.useCallback((r,l)=>{if(e&&e.documents&&e.documents[r]){const E=[...e.documents];E[r]={...E[r],title:l||""},a(D.updateEmployee({documents:E}))}},[a,e]),pe=d.useCallback((r,l,E)=>{if(E&&e&&e.documents&&e.documents[r]){const T=[...e.documents];T[r]={...T[r],issueDate:l||null},a(D.updateEmployee({documents:T}))}},[a,e]),ye=d.useCallback((r,l,E)=>{if(E&&e&&e.documents&&e.documents[r]){const T=[...e.documents];T[r]={...T[r],expirationDate:l||null},a(D.updateEmployee({documents:T}))}},[a,e]);return n.jsx(se,{reducers:Fe,children:n.jsxs(_,{gap:"8",max:!0,className:J("",[t],{}),children:[n.jsx(ke,{}),(m==null?void 0:m.length)&&m.map(r=>n.jsx(R,{"data-testid":"EditableProfileCard.Error",variant:"error",text:y[r]},r)),n.jsx(Be,{data:e,"data-testid":"ProfileCard",isLoading:u,error:C,readonly:p,onChangeFirstname:f,onChangeLastname:N,onChangeBirthday:v,onChangeEmail:b,onChangePhoneNumber:I,onChangeRegistrationAddress:O,onChangeCity:L,onChangeZip:S,onChangeCountry:H,onChangeDrivingLicenseNumber:P,onChangeE100CardNumber:z,onChangeExpectedKmPerDay:B,onChangePosition:F,onChangeContractNumber:U,onChangeAcceptionDate:M,onChangeDismissalDate:Y,onChangeEmployementDays:K,onChangeeAnnualHolidays:W,onChangeFatherHolidays:Z,onChangeUnpaidHolidays:le,onChangeTruancyDays:ce,onChangeAllowedAbsenceDays:de,onChangeUnusedHolidays:ue,onChangeDocumentTitle:me,onChangeDocumentIssueDate:pe,onChangeDocumentExpirationDate:ye})]})})}),Me=()=>{const{t:i}=A();return n.jsx(x,{justify:"center",max:!0,children:n.jsx(R,{variant:"error",title:i("Profile loading error"),text:i("Try to refresh your page"),align:"center"})})},Ye={employeeDetails:ie},Ze=d.memo(function(s){const{className:t,employeeId:o}=s,c=X(),a=j(oe);ae(()=>{c(w(o))});let e;return a?e=n.jsx(Me,{}):e=n.jsx(Ue,{employeeId:o}),n.jsx(se,{reducers:Ye,removeAfterUnmount:!0,children:n.jsx(_,{gap:"16",max:!0,align:"center",className:J(je.employeeDetails,[t]),children:e})})}),Ke="_employeeList_ca39e_1",$e={employeeList:Ke};function Ge(i){return i?"Yes":"No"}const qe=d.memo(function(s){const{className:t,employees:o,isLoading:c}=s,{t:a}=A("employees"),e=[{key:"id",header:"No."},{key:"avatar",header:a("Photo")},{key:"firstName",header:a("First Name")},{key:"lastName",header:a("Last Name")},{key:"birthDay",header:a("Birthday"),render:u=>be(u)},{key:"contractData",header:a("Capacity"),nestedKeys:["position"]},{key:"registrationAddress",header:a("Location"),nestedKeys:["city"]},{key:"phoneNumber",header:a("Phone Number")},{key:"email",header:"Email"},{key:"isAvailable",header:a("Available"),render:u=>Ge(u)}];return c?n.jsx(Re,{}):!c&&!o.length?n.jsx("div",{className:J($e.employeeList,[t],{}),children:n.jsx(R,{size:"l",title:a("Employees not found")})}):n.jsx(n.Fragment,{children:n.jsx(xe,{title:a("List of employees"),columns:e,data:o,redirect:_e,children:n.jsx(Ae,{data:o,isLoading:c,fileName:"Employees"})})})});export{Ze as E,qe as a};
