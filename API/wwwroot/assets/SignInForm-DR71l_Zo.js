import{c as C,l as j,T as S,u as E,s as L,B as _,a as N,b as A,r as d,d as R,e as T,f as v,g as m,h as P,i as U,j as i,C as b,k as B,m as I,I as f,n as O}from"./index-BaHGuE2O.js";import{D}from"./DynamicReducerLoader-Dw-yhcpp.js";const J=n=>{var s;return((s=n==null?void 0:n.signInForm)==null?void 0:s.email)||""},K=n=>{var s;return(s=n==null?void 0:n.signInForm)==null?void 0:s.error},M=n=>{var s;return((s=n==null?void 0:n.signInForm)==null?void 0:s.isLoading)||!1},q=n=>{var s;return((s=n==null?void 0:n.signInForm)==null?void 0:s.password)||""},G="_signInForm_1cn4u_1",H="_input_1cn4u_13",V="_signInBtn_1cn4u_18",g={signInForm:G,input:H,signInBtn:V},u=C("signIn/signInUser",async(n,s)=>{const{dispatch:a,rejectWithValue:o}=s;try{const e=await a(j(n)).unwrap();return e&&e.token&&(localStorage.setItem(S,JSON.stringify(e.token)),a(E.setAuthData(e)),L(a,e.token)),e}catch(e){return console.error("Failed to sign in",e),_.error("Failed to sign in"),o("Failed to sign in")}}),W={isLoading:!1,email:"",password:"",user:null},Y=N({name:"signIn",initialState:W,reducers:{setEmail:(n,s)=>{n.email=s.payload},setPassword:(n,s)=>{n.password=s.payload}},extraReducers:n=>{n.addCase(u.pending,s=>{s.error=void 0,s.isLoading=!0}).addCase(u.fulfilled,(s,{payload:a})=>{s.isLoading=!1;const[o,e]=A(atob(a.token.split(".")[1]));if(o){console.error("Failed to parse claims from token",o);return}const r=e.role||e["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],t=e.email||e["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"],c=e.nameid||e["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];s.user={...a,id:c,email:t,roles:typeof r=="string"?[r]:r},localStorage.setItem(S,JSON.stringify(s.user.token))}).addCase(u.rejected,(s,a)=>{s.isLoading=!1,s.error=a.payload})}}),{reducer:z,actions:h}=Y,Q={signInForm:z},$=d.memo(function({className:s,onSuccess:a}){const{t:o}=R(),e=T(),r=v(),t=m(J),c=m(q),w=m(M),x=m(K),p=P(),F=d.useCallback(l=>{e(h.setEmail(l))},[e]),k=d.useCallback(l=>{e(h.setPassword(l))},[e]),y=d.useCallback(async()=>{(await e(u({email:t,password:c}))).meta.requestStatus==="fulfilled"&&(a(),p(),r(U()))},[e,t,c,a,p,r]);return i.jsx(D,{removeAfterUnmount:!0,reducers:Q,children:i.jsxs(b,{gap:"16",className:B(g.signInForm,[s],{}),children:[i.jsx(I,{title:o("Please sign in here!")}),x&&i.jsx(I,{text:o("Incorrect login email or password"),variant:"error"}),i.jsx(f,{autofocus:!0,type:"email",className:g.input,placeholder:o("Email"),onChange:F,value:t}),i.jsx(f,{type:"password",className:g.input,placeholder:o("Password"),onChange:k,value:c}),i.jsx(O,{className:g.signInBtn,onClick:y,disabled:w,children:o("Sign in")})]})})});export{$ as default};
