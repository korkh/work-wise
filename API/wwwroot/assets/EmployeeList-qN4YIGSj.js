import{c as q,T as Q,a as pe,r as d,d as N,F as ye,g as j,e as W,h as Ce,j as s,R as x,k as $,m as R,n as J,C as _,I as g,B as De,_ as he,p as X,D as ge,L as Ee,G as fe,$ as be,E as Re}from"./index-CvX_IwqJ.js";import{D as ee}from"./DynamicReducerLoader-BU2uXusj.js";import{S as te,D as O}from"./DateInput-BxMGu2E4.js";const xe="_employeeDetails_1bu1w_1",_e={employeeDetails:xe},Ne=i=>{var n;return((n=i.employeeDetails)==null?void 0:n.isLoading)||!1},ae=i=>{var n;return(n=i.employeeDetails)==null?void 0:n.error},Ae=i=>{var n;return(n=i.employeeDetails)==null?void 0:n.validateErrors},se=i=>{var n;return(n=i.employeeDetails)==null?void 0:n.form},ne=i=>{var n;return(n=i.employeeDetails)==null?void 0:n.readonly},I=q("employeeDetails/fetchEmployeeById",async(i,n)=>{const{extra:t,rejectWithValue:o}=n,c=localStorage.getItem(Q);if(!c)return o("User not found");try{if(!i)throw new Error;const a=JSON.parse(c);if(!a)return o("Invalid token data");const e=await t.api.get(`/employees/${i}`,{headers:{Authorization:`Bearer ${a}`}});if(!e.data)throw new Error;return console.log("RESPONSE IN fetchEmployeeByID",e.data),e.data}catch(a){return console.error("Failed to fetch employee data!",a),o("Failed to fetch employee data")}});var D=(i=>(i.INCORRECT_EMPLOYEE_DATA="incorrect_employee_data",i.INCORRECT_BIRTHDATE="incorrect_birthdate",i.INCORRECT_REGISTRATION_ADDRESS="incorrect_registration_address",i.INCORRECT_PHONE_NUMBER="incorrect_phone_number",i.INCORRECT_EMAIL="incorrect_email",i.INCORRECT_TRANSPORT_INFO="incorrect_transport_info",i.INCORRECT_CONTRACT_DATA="incorrect_contract_data",i.INCORRECT_DOCUMENTS_DATA="incorrect_documents_data",i.INCORRECT_PAYROLLS_DATA="incorrect_payrolls_data",i.NO_DATA="no_data",i.SERVER_ERROR="server_error",i))(D||{});const je=i=>{if(!i)return[D.NO_DATA];const{firstName:n,lastName:t,birthDay:o,registrationAddress:c,phoneNumber:a,email:e,transportInfo:u,contractData:p,documents:m,payrolls:h}=i,y=[];(!(n!=null&&n.trim())||!(t!=null&&t.trim()))&&y.push(D.INCORRECT_EMPLOYEE_DATA),e!=null&&e.match(/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/)||y.push(D.INCORRECT_EMAIL),a!=null&&a.match(/^\+?[1-9]\d{1,14}$/)||y.push(D.INCORRECT_PHONE_NUMBER),(!c||!c.address1.trim()||!c.city.trim())&&y.push(D.INCORRECT_REGISTRATION_ADDRESS);const f=new Date;return f.setFullYear(f.getFullYear()-18),o>=f&&y.push(D.INCORRECT_BIRTHDATE),p&&p.acceptionDate&&p.dismissalDate&&p.acceptionDate>=p.dismissalDate&&y.push(D.INCORRECT_CONTRACT_DATA),m!=null&&m.length||y.push(D.INCORRECT_DOCUMENTS_DATA),m==null||m.forEach(T=>{T.expirationDate&&T.expirationDate<new Date&&y.push(D.INCORRECT_DOCUMENTS_DATA)}),u&&!u.drivingLicenseNumber.trim()&&y.push(D.INCORRECT_TRANSPORT_INFO),h!=null&&h.length||y.push(D.INCORRECT_PAYROLLS_DATA),y},K=q("employeeDetails/updateEmployeeData",async(i,n)=>{const{extra:t,rejectWithValue:o,getState:c}=n,a=se(c()),e=je(a);if(e.length)return o(e);const u=localStorage.getItem(Q);if(!u)return o([D.NO_DATA]);try{const p=JSON.parse(u);if(!p)return o([D.NO_DATA]);const m=await t.api.put(`/employees/${a==null?void 0:a.id}`,a,{headers:{Authorization:`Bearer ${p}`}});if(!m.data)throw new Error;return m.data}catch(p){return console.error("Failed to fetch employee data!",p),o([D.SERVER_ERROR])}}),Te={isLoading:!1,readonly:!0,error:void 0,data:void 0},Ie=pe({name:"employeeDetails",initialState:Te,reducers:{setReadonly:(i,n)=>{i.readonly=n.payload},cancelEdit:i=>{i.readonly=!0,i.validateErrors=void 0,i.form=i.data},updateEmployee:(i,n)=>{const{id:t,...o}=n.payload;i.form&&t!==void 0&&(i.form.id=t,i.form={...i.form,...o})}},extraReducers:i=>{i.addCase(I.pending,n=>{n.error=void 0,n.isLoading=!0}).addCase(I.fulfilled,(n,t)=>{n.isLoading=!1,n.data=t.payload,n.form=t.payload}).addCase(I.rejected,(n,t)=>{n.isLoading=!1,n.error=t.payload}).addCase(K.pending,n=>{n.validateErrors=void 0,n.isLoading=!0}).addCase(K.fulfilled,(n,t)=>{n.isLoading=!1,n.data=t.payload,n.form=t.payload,n.readonly=!0,n.validateErrors=void 0}).addCase(K.rejected,(n,t)=>{n.isLoading=!1,n.validateErrors=t.payload})}}),{actions:C,reducer:oe}=Ie,Oe=d.memo(function(n){const{className:t}=n,{t:o}=N(),c=ye(),a=c==null?void 0:c.role.includes("Admin"),e=j(ne),u=W(),p=Ce(),m=d.useCallback(()=>{u(C.setReadonly(!1))},[u]),h=d.useCallback(()=>{u(C.cancelEdit())},[u]),y=d.useCallback(()=>{u(K()),p()},[u,p]);return s.jsx(te,{padding:"24",max:!0,border:"partial",children:s.jsxs(x,{max:!0,justify:"between",className:$("",[t],{}),children:[s.jsx(R,{title:o("Employee details")}),a&&s.jsx(s.Fragment,{children:e?s.jsx(J,{onClick:m,"data-testid":"EditableProfileCardHeader.EditButton",children:o("Edit")}):s.jsxs(x,{gap:"8",children:[s.jsx(J,{onClick:h,"data-testid":"EditableProfileCardHeader.CancelButton",color:"error",children:o("Cancel")}),s.jsx(J,{onClick:y,"data-testid":"EditableProfileCardHeader.SaveButton",color:"success",children:o("Save")})]})})]})})}),ve=d.memo(function(n){var v,w,k,L,S,H,P,z,F,B,U,M,Y;const{data:t,readonly:o,onChangePosition:c,onChangeContractNumber:a,onChangeAcceptionDate:e,onChangeDismissalDate:u,onChangeeAnnualHolidays:p,onChangeFatherHolidays:m,onChangeEmployementDays:h,onChangeUnpaidHolidays:y,onChangeTruancyDays:f,onChangeAllowedAbsenceDays:T,onChangeUnusedHolidays:G}=n,{t:b}=N();return s.jsxs(x,{max:!0,gap:"24",children:[s.jsxs(_,{gap:"16",max:!0,children:[s.jsx(R,{title:"Contract details"}),s.jsx(g,{size:"s",value:(v=t==null?void 0:t.contractData)==null?void 0:v.position,label:b("Capacity"),onChange:c,readonly:o,"data-testid":"EmployeeDetailsCard.position"}),s.jsx(g,{size:"s",width:"70%",justify:"between",value:(w=t==null?void 0:t.contractData)==null?void 0:w.contractNumber,label:b("Contract number"),onChange:a,readonly:o,"data-testid":"EmployeeDetailsCard.contractNumber"}),s.jsx(O,{gap:"8",width:"70%",justify:"between",selected:(k=t==null?void 0:t.contractData)==null?void 0:k.acceptionDate,onChange:e||((V,Z)=>{}),label:b("Accepted on"),readonly:o,"data-testid":"EmployeeDetailsCard.acceptionDate"}),s.jsx(O,{gap:"8",width:"70%",justify:"between",selected:(L=t==null?void 0:t.contractData)==null?void 0:L.dismissalDate,onChange:u||((V,Z)=>{}),label:b("Dismissal date"),readonly:o,"data-testid":"EmployeeDetailsCard.dismissalDate"}),s.jsx(g,{size:"s",width:"70%",justify:"between",value:(S=t==null?void 0:t.contractData)==null?void 0:S.annualHolidays,label:b("Annual holidays"),onChange:p,readonly:o,"data-testid":"EmployeeDetailsCard.annualHolidays"}),s.jsx(g,{size:"s",width:"70%",justify:"between",value:(P=(H=t==null?void 0:t.contractData)==null?void 0:H.fatherHolidays)==null?void 0:P.toString(),label:b("Father holidays"),onChange:m,readonly:o,"data-testid":"EmployeeDetailsCard.fatherHolidays"})]}),s.jsxs(_,{gap:"16",max:!0,children:[s.jsx(g,{size:"s",type:"number",width:"70%",justify:"between",value:(F=(z=t==null?void 0:t.contractData)==null?void 0:z.employmentDays)==null?void 0:F.toString(),label:b("Employment days"),onChange:h,readonly:!0,"data-testid":"EmployeeDetailsCard.employmentDays"}),s.jsx(g,{size:"s",width:"70%",justify:"between",value:(B=t==null?void 0:t.contractData)==null?void 0:B.unpaidHolidays,label:b("Unpaid holidays"),onChange:y,readonly:o,"data-testid":"EmployeeDetailsCard.unpaidHolidays"}),s.jsx(g,{size:"s",width:"70%",justify:"between",value:(U=t==null?void 0:t.contractData)==null?void 0:U.truancyDays,label:b("Truancy days"),onChange:f,readonly:o,"data-testid":"EmployeeDetailsCard.truancyDays"}),s.jsx(g,{size:"s",width:"70%",justify:"between",value:(M=t==null?void 0:t.contractData)==null?void 0:M.allowedAbsenceDays,label:b("Allowed absence days"),onChange:T,readonly:o,"data-testid":"EmployeeDetailsCard.allowedAbsenceDays"}),s.jsx(g,{size:"s",width:"70%",justify:"between",value:(Y=t==null?void 0:t.contractData)==null?void 0:Y.unusedHolidays,label:b("Unused holidays"),onChange:G,readonly:!0,"data-testid":"EmployeeDetailsCard.unusedHolidays"})]})]})}),we=d.memo(function(n){const{data:t,readonly:o,onChangeFirstname:c,onChangeLastname:a,onChangeBirthday:e,onChangeEmail:u,onChangePhoneNumber:p}=n,{t:m}=N();return s.jsx(x,{gap:"24",max:!0,children:s.jsxs(_,{gap:"16",max:!0,children:[s.jsx(R,{title:"Personal information"}),s.jsx(g,{size:"s",value:t==null?void 0:t.firstName,label:m("Firstname"),onChange:c,readonly:o,"data-testid":"EmployeeDetailsCard.firstName"}),s.jsx(g,{size:"s",value:t==null?void 0:t.lastName,label:m("Lastname"),onChange:a,readonly:o,"data-testid":"EmployeeDetailsCard.lastName"}),s.jsx(O,{selected:t==null?void 0:t.birthDay,onChange:e||((h,y)=>{}),label:m("Birthday"),readonly:o,"data-testid":"EmployeeDetailsCard.birthDay"}),s.jsx(g,{size:"s",value:t==null?void 0:t.email,label:m("Email"),onChange:u,readonly:o,"data-testid":"EmployeeDetailsCard.email"}),s.jsx(g,{size:"s",width:"88%",justify:"between",value:t==null?void 0:t.phoneNumber,label:m("Phone number"),onChange:p,readonly:o,"data-testid":"EmployeeDetailsCard.phoneNumber"})]})})}),ke=d.memo(function(n){var m,h,y,f;const{data:t,readonly:o,onChangeRegistrationAddress:c,onChangeCity:a,onChangeZip:e,onChangeCountry:u}=n,{t:p}=N();return s.jsx(x,{gap:"24",max:!0,children:s.jsxs(_,{gap:"16",max:!0,children:[s.jsx(R,{title:"Registration address"}),s.jsx(g,{size:"s",value:(m=t==null?void 0:t.registrationAddress)==null?void 0:m.address1,label:p("Address"),onChange:c,readonly:o,"data-testid":"EmployeeDetailsCard.address"}),s.jsx(g,{size:"s",value:(h=t==null?void 0:t.registrationAddress)==null?void 0:h.city,label:p("City"),onChange:a,readonly:o,"data-testid":"EmployeeDetailsCard.city"}),s.jsx(g,{size:"s",value:(y=t==null?void 0:t.registrationAddress)==null?void 0:y.zip,label:p("ZIP"),onChange:e,readonly:o,"data-testid":"EmployeeDetailsCard.zip"}),s.jsx(g,{size:"s",value:(f=t==null?void 0:t.registrationAddress)==null?void 0:f.country,label:p("Country"),onChange:u,readonly:o,"data-testid":"EmployeeDetailsCard.country"})]})})}),Le=d.memo(function(n){var p,m,h,y;const{data:t,readonly:o,onChangeDrivingLicenseNumber:c,onChangeE100CardNumber:a,onChangeExpectedKmPerDay:e}=n,{t:u}=N();return s.jsx(x,{gap:"24",max:!0,children:s.jsxs(_,{gap:"16",max:!0,children:[s.jsx(R,{title:"Transport information"}),s.jsx(g,{size:"s",width:"85%",justify:"between",value:(p=t==null?void 0:t.transportInfo)==null?void 0:p.drivingLicenseNumber,label:u("Driving license"),onChange:c,readonly:o,"data-testid":"EmployeeDetailsCard.drivingLicenseNumber"}),s.jsx(g,{size:"s",width:"85%",justify:"between",value:(m=t==null?void 0:t.transportInfo)==null?void 0:m.e_100_CardNumber,label:u("e100 Card Number"),onChange:a,readonly:o,"data-testid":"EmployeeDetailsCard.e100CardNumber"}),s.jsx(g,{size:"s",value:(h=t==null?void 0:t.transportInfo)==null?void 0:h.cars.map(f=>f.manufacturer+" "+f.model).toString(),label:u("Cars"),onChange:()=>{},readonly:o,"data-testid":"EmployeeDetailsCard.cars"}),s.jsx(g,{size:"s",width:"90%",justify:"between",value:(y=t==null?void 0:t.transportInfo)==null?void 0:y.expectedKmPerDay,label:u("Km per day"),onChange:e,readonly:o,"data-testid":"EmployeeDetailsCard.expectedKmPerDay"})]})})}),Se=d.memo(function(n){var p;const{data:t,readonly:o,onChangeDocumentTitle:c,onChangeDocumentIssueDate:a,onChangeDocumentExpirationDate:e}=n,{t:u}=N();return!t&&t!==void 0?(De.error("NO DOCUMENTS FOUND. TRY AGAIN LATER"),s.jsx(R,{title:"NO DOCUMENTS FOUND!"})):s.jsx(x,{gap:"24",max:!0,children:s.jsxs(_,{gap:"16",max:!0,children:[s.jsx(R,{title:"Employee's documents"}),(p=t==null?void 0:t.documents)==null?void 0:p.map((m,h)=>s.jsxs(s.Fragment,{children:[s.jsx(g,{size:"s",width:"97%",value:m.title,label:u("Title"),onChange:y=>c&&c(h,y),readonly:o,"data-testid":"DocumentsData.title"}),s.jsx(O,{gap:"8",width:"93%",label:u("Issue date"),selected:m.issueDate,onChange:(y,f)=>a&&a(h,y,f),readonly:o,"data-testid":"DocumentsData.issueDate"}),s.jsx(O,{gap:"8",width:"92%",selected:m.expirationDate,onChange:(y,f)=>e&&e(h,y,f),label:u("Expire date"),readonly:o,"data-testid":"DocumentsData.expirationDate"})]}))]})})}),He=d.memo(function(n){const{className:t,data:o}=n;return s.jsx(te,{max:!0,padding:"16",className:t,border:"partial",children:s.jsxs(_,{gap:"32",max:!0,children:[(o==null?void 0:o.avatar)&&s.jsx(x,{justify:"center",max:!0,children:s.jsx(he,{size:200,src:o==null?void 0:o.avatar})}),s.jsx(we,{...n}),(o==null?void 0:o.contractData)&&s.jsx(ve,{...n}),s.jsx(ke,{...n}),(o==null?void 0:o.transportInfo)&&s.jsx(Le,{...n}),(o==null?void 0:o.documents)&&s.jsx(Se,{...n})]})})}),Pe={employeeDetails:oe},ze=d.memo(function(n){const{className:t,employeeId:o}=n,{t:c}=N(),a=W(),e=j(se),u=j(Ne),p=j(ae),m=j(ne),h=j(Ae),y={[D.INCORRECT_EMPLOYEE_DATA]:c("errors.incorrect_employee_data"),[D.INCORRECT_BIRTHDATE]:c("errors.incorrect_birthdate"),[D.INCORRECT_REGISTRATION_ADDRESS]:c("errors.incorrect_registration_address"),[D.INCORRECT_PHONE_NUMBER]:c("errors.incorrect_phone_number"),[D.INCORRECT_EMAIL]:c("errors.incorrect_email"),[D.INCORRECT_TRANSPORT_INFO]:c("errors.incorrect_transport_info"),[D.INCORRECT_CONTRACT_DATA]:c("errors.incorrect_contract_data"),[D.INCORRECT_DOCUMENTS_DATA]:c("errors.incorrect_documents_data"),[D.INCORRECT_PAYROLLS_DATA]:c("errors.incorrect_payrolls_data"),[D.NO_DATA]:c("errors.no_data"),[D.SERVER_ERROR]:c("errors.server_error")};X(()=>{o&&a(I(o))});const f=d.useCallback(r=>{a(C.updateEmployee({firstName:r||""}))},[a]),T=d.useCallback(r=>{a(C.updateEmployee({lastName:r||""}))},[a]),G=(r,l)=>{l&&a(C.updateEmployee({birthDay:r||null}))},b=d.useCallback(r=>{a(C.updateEmployee({email:r||""}))},[a]),v=d.useCallback(r=>{a(C.updateEmployee({phoneNumber:r||""}))},[a]),w=d.useCallback(r=>{e&&e.registrationAddress&&a(C.updateEmployee({registrationAddress:{...e.registrationAddress,address1:r||""}}))},[a,e]),k=d.useCallback(r=>{e&&e.registrationAddress&&a(C.updateEmployee({registrationAddress:{...e.registrationAddress,city:r||""}}))},[a,e]),L=d.useCallback(r=>{e&&e.registrationAddress&&a(C.updateEmployee({registrationAddress:{...e.registrationAddress,zip:r||""}}))},[a,e]),S=d.useCallback(r=>{e&&e.registrationAddress&&a(C.updateEmployee({registrationAddress:{...e.registrationAddress,country:r||""}}))},[a,e]),H=d.useCallback(r=>{var l;e&&((l=e.transportInfo)!=null&&l.drivingLicenseNumber)&&a(C.updateEmployee({transportInfo:{...e.transportInfo,drivingLicenseNumber:r||""}}))},[a,e]),P=d.useCallback(r=>{var l;e&&((l=e.transportInfo)!=null&&l.e_100_CardNumber)&&a(C.updateEmployee({transportInfo:{...e.transportInfo,e_100_CardNumber:r||""}}))},[a,e]),z=d.useCallback(r=>{var l;e&&((l=e.transportInfo)!=null&&l.expectedKmPerDay)&&a(C.updateEmployee({transportInfo:{...e.transportInfo,expectedKmPerDay:r||""}}))},[a,e]),F=d.useCallback(r=>{var l;e&&((l=e.contractData)!=null&&l.position)&&a(C.updateEmployee({contractData:{...e.contractData,position:r||""}}))},[a,e]),B=d.useCallback(r=>{var l;e&&((l=e.contractData)!=null&&l.contractNumber)&&a(C.updateEmployee({contractData:{...e.contractData,contractNumber:r||""}}))},[a,e]),U=(r,l)=>{l&&a(C.updateEmployee({contractData:{...e==null?void 0:e.contractData,acceptionDate:r||null}}))},M=(r,l)=>{l&&a(C.updateEmployee({contractData:{...e==null?void 0:e.contractData,dismissalDate:r||null}}))},Y=d.useCallback(r=>{var l;if(e&&((l=e.contractData)!=null&&l.employmentDays)){const E=r&&parseInt(r,10)||0;a(C.updateEmployee({contractData:{...e==null?void 0:e.contractData,employmentDays:E||0}}))}},[a,e]),V=d.useCallback(r=>{var l;if(e&&((l=e.contractData)!=null&&l.annualHolidays)){const E=r&&parseInt(r,10)||0;a(C.updateEmployee({contractData:{...e==null?void 0:e.contractData,annualHolidays:E||0}}))}},[a,e]),Z=d.useCallback(r=>{var l;if(e&&((l=e.contractData)!=null&&l.fatherHolidays)){const E=r&&parseInt(r,10)||0;a(C.updateEmployee({contractData:{...e==null?void 0:e.contractData,fatherHolidays:E}}))}},[a,e]),re=d.useCallback(r=>{var l;if(e&&((l=e.contractData)!=null&&l.unpaidHolidays)){const E=r&&parseInt(r,10)||0;a(C.updateEmployee({contractData:{...e==null?void 0:e.contractData,unpaidHolidays:E||0}}))}},[a,e]),ie=d.useCallback(r=>{var l;if(e&&((l=e.contractData)!=null&&l.truancyDays)){const E=r&&parseInt(r,10)||0;a(C.updateEmployee({contractData:{...e.contractData,truancyDays:E||0}}))}},[a,e]),le=d.useCallback(r=>{var l;if(e&&((l=e.contractData)!=null&&l.allowedAbsenceDays)){const E=r&&parseInt(r,10)||0;a(C.updateEmployee({contractData:{...e.contractData,allowedAbsenceDays:E||0}}))}},[a,e]),ce=d.useCallback(r=>{var l;if(e&&((l=e.contractData)!=null&&l.unusedHolidays)){const E=r&&parseInt(r,10)||0;a(C.updateEmployee({contractData:{...e.contractData,unusedHolidays:E||0}}))}},[a,e]),de=d.useCallback((r,l)=>{if(e&&e.documents&&e.documents[r]){const E=[...e.documents];E[r]={...E[r],title:l||""},a(C.updateEmployee({documents:E}))}},[a,e]),ue=d.useCallback((r,l,E)=>{if(E&&e&&e.documents&&e.documents[r]){const A=[...e.documents];A[r]={...A[r],issueDate:l||null},a(C.updateEmployee({documents:A}))}},[a,e]),me=d.useCallback((r,l,E)=>{if(E&&e&&e.documents&&e.documents[r]){const A=[...e.documents];A[r]={...A[r],expirationDate:l||null},a(C.updateEmployee({documents:A}))}},[a,e]);return s.jsx(ee,{reducers:Pe,children:s.jsxs(_,{gap:"8",max:!0,className:$("",[t],{}),children:[s.jsx(Oe,{}),(h==null?void 0:h.length)&&h.map(r=>s.jsx(R,{"data-testid":"EditableProfileCard.Error",variant:"error",text:y[r]},r)),s.jsx(He,{data:e,"data-testid":"ProfileCard",isLoading:u,error:p,readonly:m,onChangeFirstname:f,onChangeLastname:T,onChangeBirthday:G,onChangeEmail:b,onChangePhoneNumber:v,onChangeRegistrationAddress:w,onChangeCity:k,onChangeZip:L,onChangeCountry:S,onChangeDrivingLicenseNumber:H,onChangeE100CardNumber:P,onChangeExpectedKmPerDay:z,onChangePosition:F,onChangeContractNumber:B,onChangeAcceptionDate:U,onChangeDismissalDate:M,onChangeEmployementDays:Y,onChangeeAnnualHolidays:V,onChangeFatherHolidays:Z,onChangeUnpaidHolidays:re,onChangeTruancyDays:ie,onChangeAllowedAbsenceDays:le,onChangeUnusedHolidays:ce,onChangeDocumentTitle:de,onChangeDocumentIssueDate:ue,onChangeDocumentExpirationDate:me})]})})}),Fe=()=>{const{t:i}=N();return s.jsx(x,{justify:"center",max:!0,children:s.jsx(R,{variant:"error",title:i("Profile loading error"),text:i("Try to refresh your page"),align:"center"})})},Be={employeeDetails:oe},Ve=d.memo(function(n){const{className:t,employeeId:o}=n,c=W(),a=j(ae);X(()=>{c(I(o))});let e;return a?e=s.jsx(Fe,{}):e=s.jsx(ze,{employeeId:o}),s.jsx(ee,{reducers:Be,removeAfterUnmount:!0,children:s.jsx(_,{gap:"16",max:!0,align:"center",className:$(_e.employeeDetails,[t]),children:e})})}),Ue="_employeeList_ca39e_1",Me={employeeList:Ue};function Ye(i){return i?"Yes":"No"}const Ze=d.memo(function(n){const{className:t,employees:o,isLoading:c}=n,{t:a}=N("employees"),e=[{key:"id",header:"No."},{key:"avatar",header:a("Photo")},{key:"firstName",header:a("First Name")},{key:"lastName",header:a("Last Name")},{key:"birthDay",header:a("Birthday"),render:u=>ge(u)},{key:"contractData",header:a("Capacity"),nestedKeys:["position"]},{key:"registrationAddress",header:a("Location"),nestedKeys:["city"]},{key:"phoneNumber",header:a("Phone Number")},{key:"email",header:"Email"},{key:"isAvailable",header:a("Available"),render:u=>Ye(u)}];return c?s.jsx(Ee,{}):!c&&!o.length?s.jsx("div",{className:$(Me.employeeList,[t],{}),children:s.jsx(R,{size:"l",title:a("Employees not found")})}):s.jsx(s.Fragment,{children:s.jsx(fe,{title:a("List of employees"),columns:e,data:o,redirect:be,children:s.jsx(Re,{data:o,isLoading:c,fileName:"Employees"})})})});export{Ve as E,Ze as a};
