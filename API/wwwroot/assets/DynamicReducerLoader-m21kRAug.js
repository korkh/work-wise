import{a4 as i,a5 as p,r as f,j as o}from"./index-09SwYWH7.js";const g=a=>{const{children:n,reducers:s,removeAfterUnmount:u="true"}=a,r=i(),c=p();return f.useEffect(()=>{const d=r.reducerManager.getReducerMap();return Object.entries(s).forEach(([e,t])=>{d[e]!==t&&(r.reducerManager.add(e,t),c({type:`@INIT ${e} reducer`}))}),()=>{u&&Object.entries(s).forEach(([e,t])=>{r.reducerManager.remove(e),c({type:`@DESTROY ${e} reducer`})})}},[]),o.jsx(o.Fragment,{children:n})};export{g as D};
