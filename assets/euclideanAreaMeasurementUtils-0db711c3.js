import{t as y}from"./typedArrayUtil-a8b5b3e9.js";import{o as R}from"./quantityFormatUtils-ba1f6cd1.js";import{s as U}from"./unitUtils-47abac71.js";import{x as W}from"./earcut-58237617.js";import{o as g,q as $,v as x}from"./vec3-a020a6f6.js";import{n as m}from"./vec3f64-2f9cef06.js";import{j as b}from"./projection-d7b57a6c.js";import{j as k,E as q,Y as w,J as A}from"./plane-45609588.js";import{H as E}from"./objectResourceUtils-ef6e3cdf.js";import{i as F}from"./measurementUtils-c86e49dc.js";function O(t,e=d()){return j(t,e)}function P(t,e=d()){return j(t,e,!1)}function j(t,e,s=t.hasZ){const i=F(t.spatialReference),f=U(i);if(y(f))return null;const C=(l,n)=>!(n.length<2)&&(g(l,n[0],n[1],s&&n[2]||0),!0);let p=0;for(const l of t.rings){const n=l.length;if(n<3)continue;const{positionsWorldCoords:r}=e;for(;r.length<n;)r.push(m());const a=H,c=g(J,0,0,0),v=1/n;for(let o=0;o<n;o++){if(!C(a,l[o])||!b(a,t.spatialReference,r[o],i))return null;$(c,c,r[o],v)}const h=k(r[0],r[1],c,q());if(x(w(h))===0)continue;for(let o=0;o<n;o++)A(h,c,r[o],r[o]);const u=S(r);for(let o=0;o<u.length;o+=3)p+=E(r[u[o]],r[u[o+1]],r[u[o+2]])}return R(p,f)}const H=m(),J=m();function d(){return{positionsWorldCoords:[]}}function S(t){return W(Y(t),[],2)}function Y(t){const e=new Float64Array(2*t.length);for(let s=0;s<t.length;++s){const i=t[s],f=2*s;e[f+0]=i[0],e[f+1]=i[1]}return e}export{d as U,O as h,P as j,S as v};