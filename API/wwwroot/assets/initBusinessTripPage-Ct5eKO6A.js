import{c as a,w as g,x as t,y as p}from"./index-DtWiGG3k.js";const T=a("businessTripPage/initBusinessTripPage",async(i,o)=>{const{getState:c,dispatch:s}=o;if(!g(c())){const e=i.get("order"),r=i.get("sort"),n=i.get("search");e&&s(t.setOrder(e)),r&&s(t.setSort(r)),n&&s(t.setSearch(n)),s(t.initState()),s(p({}))}});export{T as i};
