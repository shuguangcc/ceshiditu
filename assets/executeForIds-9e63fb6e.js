import{f}from"./normalizeUtils-ee4bf39f.js";import{S as a,p as e}from"./query-922e6fbf.js";import{x as m}from"./Query-ff8c2cfb.js";async function u(t,n,o){const r=f(t);return a(r,m.from(n),{...o}).then(c=>c.data.count)}async function d(t,n,o){const r=f(t);return e(r,m.from(n),{...o}).then(c=>c.data.objectIds)}export{u as n,d as s};
