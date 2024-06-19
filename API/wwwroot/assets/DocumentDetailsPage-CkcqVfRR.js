import{d as T,j as o,R as E,m as h,c as O,T as v,a as M,r as l,F as $,g as p,e as y,h as V,k as j,n as _,B as z,C as R,I as G,p as S,H as J,P as K}from"./index-D-Y3ioHO.js";import{D as I}from"./DynamicReducerLoader-D1HqMpjn.js";import{S as k,D as A}from"./DateInput-BX7Z_sZc.js";import"./react-datepicker-CupDW0xR.js";var u=(t=>(t.INCORRECT_DOCUMENT_DATA="incorrect_document_data",t.NO_DATA="no_data",t.SERVER_ERROR="server_error",t))(u||{});const W=t=>{var e;return((e=t.documentDetails)==null?void 0:e.isLoading)||!1},w=t=>{var e;return(e=t.documentDetails)==null?void 0:e.error},Y=t=>{var e;return(e=t.documentDetails)==null?void 0:e.validateErrors},b=t=>{var e;return(e=t.documentDetails)==null?void 0:e.form},L=t=>{var e;return(e=t.documentDetails)==null?void 0:e.readonly},q="_documentDetailsPage_x6o93_1",Q={documentDetailsPage:q},X="_documentDetails_1frti_1",Z={documentDetails:X},ee=()=>{const{t}=T();return o.jsx(E,{justify:"center",max:!0,children:o.jsx(h,{variant:"error",title:t("Document loading error"),text:t("Try to refresh your page"),align:"center",style:{marginTop:30}})})},f=O("documentDetails/fetchDocumentById",async(t,e)=>{const{extra:a,rejectWithValue:n}=e,s=localStorage.getItem(v);if(!s)return n("User not found");try{if(!t)throw new Error;const r=JSON.parse(s);if(!r)return n("Invalid token data");const c=await a.api.get(`/documents/${t}`,{headers:{Authorization:`Bearer ${r}`}});if(!c.data)throw new Error;return console.log("RESPONSE IN fetchDocumentByID",c.data),c.data}catch(r){return console.error("Failed to fetch document data!",r),n("Failed to fetch document data")}}),te=t=>{if(!t)return[u.NO_DATA];const{title:e,expirationDate:a,issueDate:n}=t,s=[];e!=null&&e.trim()||s.push(u.INCORRECT_DOCUMENT_DATA);const r=new Date;return(!n||new Date(n)>=r)&&s.push(u.INCORRECT_DOCUMENT_DATA),(!a||new Date(a)<=r)&&s.push(u.INCORRECT_DOCUMENT_DATA),s},x=O("documentDetails/updateDocumentData",async(t,e)=>{const{extra:a,rejectWithValue:n,getState:s}=e,r=b(s()),c=te(r);if(c.length)return n(c);const d=localStorage.getItem(v);if(!d)return n([u.NO_DATA]);try{const i=JSON.parse(d);if(!i)return n([u.NO_DATA]);const m=await a.api.put(`/documents/${r==null?void 0:r.id}`,r,{headers:{Authorization:`Bearer ${i}`}});if(!m.data)throw new Error;return m.data}catch(i){return console.error("Failed to fetch document data!",i),n([u.SERVER_ERROR])}}),ae={isLoading:!1,readonly:!0,error:void 0,data:void 0},U=M({name:"documentDetails",initialState:ae,reducers:{setReadonly:(t,e)=>{t.readonly=e.payload},cancelEdit:t=>{t.readonly=!0,t.validateErrors=void 0,t.form=t.data},updateDocument:(t,e)=>{const{id:a,...n}=e.payload;t.form&&a!==void 0&&(t.form.id=a,t.form={...t.form,...n})}},extraReducers:t=>{t.addCase(f.pending,e=>{e.error=void 0,e.isLoading=!0}).addCase(f.fulfilled,(e,a)=>{e.isLoading=!1,e.data=a.payload,e.form=a.payload}).addCase(f.rejected,(e,a)=>{e.isLoading=!1,e.error=a.payload}).addCase(x.pending,e=>{e.validateErrors=void 0,e.isLoading=!0}).addCase(x.fulfilled,(e,a)=>{e.isLoading=!1,e.data=a.payload,e.form=a.payload,e.readonly=!0,e.validateErrors=void 0}).addCase(x.rejected,(e,a)=>{e.isLoading=!1,e.validateErrors=a.payload})}}),{actions:g}=U,{reducer:P}=U,oe=l.memo(function(e){const{className:a}=e,{t:n}=T(),s=$(),r=s==null?void 0:s.role.includes("Admin"),c=p(L),d=y(),i=V(),m=l.useCallback(()=>{d(g.setReadonly(!1))},[d]),C=l.useCallback(()=>{d(g.cancelEdit())},[d]),N=l.useCallback(()=>{d(x()),i()},[d,i]);return o.jsx(k,{padding:"24",max:!0,border:"partial",children:o.jsxs(E,{max:!0,justify:"between",className:j("",[a],{}),children:[o.jsx(h,{title:n("Document details")}),r&&o.jsx(o.Fragment,{children:c?o.jsx(_,{onClick:m,"data-testid":"EditableDocumentCardHeader.EditButton",children:n("Edit")}):o.jsxs(E,{gap:"8",children:[o.jsx(_,{onClick:C,"data-testid":"EditableDocumentCardHeader.CancelButton",color:"error",children:n("Cancel")}),o.jsx(_,{onClick:N,"data-testid":"EditableDocumentCardHeader.SaveButton",color:"success",children:n("Save")})]})})]})})}),ne=l.memo(function(e){const{data:a,readonly:n,onChangeDocumentExpirationDate:s,onChangeDocumentIssueDate:r,onChangeDocumentTitle:c}=e,{t:d}=T();return!a&&a!==void 0?(z.error("NO DOCUMENTS FOUND. TRY AGAIN LATER"),o.jsx(h,{title:"NO DOCUMENTS FOUND!"})):o.jsx(E,{gap:"24",max:!0,children:o.jsxs(R,{gap:"16",max:!0,children:[o.jsx(h,{title:"Employee's documents"}),o.jsx(G,{size:"s",width:"97%",value:a==null?void 0:a.title,label:d("Title"),onChange:i=>c&&c(i),readonly:n,"data-testid":"DocumentsData.title"}),o.jsx(A,{gap:"8",width:"93%",label:d("Issue date"),selected:a==null?void 0:a.issueDate,onChange:(i,m)=>r&&r(i,m),readonly:n,"data-testid":"DocumentsData.issueDate"}),o.jsx(A,{gap:"8",width:"92%",selected:a==null?void 0:a.expirationDate,onChange:(i,m)=>s&&s(i,m),label:d("Expire date"),readonly:n,"data-testid":"DocumentsData.expirationDate"})]})})}),re=l.memo(function(e){const{className:a}=e;return o.jsx(k,{max:!0,padding:"16",className:a,border:"partial",children:o.jsx(R,{gap:"32",max:!0,children:o.jsx(ne,{...e})})})}),se={documentDetails:P},ce=l.memo(function(e){const{className:a,documentId:n}=e,{t:s}=T(),r=y(),c=p(b),d=p(W),i=p(w),m=p(L),C=p(Y),N={[u.INCORRECT_DOCUMENT_DATA]:s("errors.incorrect_document_data"),[u.NO_DATA]:s("errors.no_data_available"),[u.SERVER_ERROR]:s("errors.server_error")};S(()=>{n&&r(f(n))});const B=l.useCallback(D=>{r(g.updateDocument({title:D||""}))},[r]),F=l.useCallback(D=>{r(g.updateDocument({issueDate:D||null}))},[r]),H=l.useCallback(D=>{r(g.updateDocument({expirationDate:D||null}))},[r]);return o.jsx(I,{reducers:se,children:o.jsxs(R,{gap:"8",max:!0,className:j("",[a],{}),children:[o.jsx(oe,{}),(C==null?void 0:C.length)&&C.map(D=>o.jsx(h,{"data-testid":"EditableProfileCard.Error",variant:"error",text:N[D]},D)),o.jsx(re,{data:c,"data-testid":"DocuemtDetailsCard",isLoading:d,error:i,readonly:m,onChangeDocumentTitle:B,onChangeDocumentIssueDate:F,onChangeDocumentExpirationDate:H})]})})}),de={documentDetails:P},ie=l.memo(function(e){const{className:a,documentId:n}=e,s=y(),r=p(w);S(()=>{s(f(n))});let c;return r?c=o.jsx(ee,{}):c=o.jsx(ce,{documentId:n}),o.jsx(I,{reducers:de,removeAfterUnmount:!0,children:o.jsx(R,{gap:"16",max:!0,align:"center",className:j(Z.documentDetails,[a]),children:c})})}),le=t=>{const{className:e}=t,{id:a}=J();return o.jsx(K,{className:j(Q.documentDetailsPage,[e],{}),children:a&&o.jsx(ie,{documentId:a})})},Ce=l.memo(le);export{Ce as default};
