import"./string-cdf077e6.js";import{a as x}from"./mathUtils-2519596a.js";import{t as s}from"./typedArrayUtil-a8b5b3e9.js";import{a as d}from"./Extent-69509002.js";function l(t=j){return[t[0],t[1],t[2],t[3]]}function H(t){return[t[0],t[1],t[2],t[3]]}function y(t,a){return t!==a&&(t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3]),t}function I(t,a,u,o,e=l()){return e[0]=t,e[1]=a,e[2]=u,e[3]=o,e}function J(t,a=l()){return a[0]=t.xmin,a[1]=t.ymin,a[2]=t.xmax,a[3]=t.ymax,a}function L(t,a){return new d({xmin:t[0],ymin:t[1],xmax:t[2],ymax:t[3],spatialReference:a})}function U(t,a){a[0]<t[0]&&(t[0]=a[0]),a[0]>t[2]&&(t[2]=a[0]),a[1]<t[1]&&(t[1]=a[1]),a[1]>t[3]&&(t[3]=a[1])}function v(t,a,u){if(s(a))y(u,t);else if("length"in a)M(a)?(u[0]=Math.min(t[0],a[0]),u[1]=Math.min(t[1],a[1]),u[2]=Math.max(t[2],a[2]),u[3]=Math.max(t[3],a[3])):a.length!==2&&a.length!==3||(u[0]=Math.min(t[0],a[0]),u[1]=Math.min(t[1],a[1]),u[2]=Math.max(t[2],a[0]),u[3]=Math.max(t[3],a[1]));else switch(a.type){case"extent":u[0]=Math.min(t[0],a.xmin),u[1]=Math.min(t[1],a.ymin),u[2]=Math.max(t[2],a.xmax),u[3]=Math.max(t[3],a.ymax);break;case"point":u[0]=Math.min(t[0],a.x),u[1]=Math.min(t[1],a.y),u[2]=Math.max(t[2],a.x),u[3]=Math.max(t[3],a.y)}}function A(t,a,u=t){const o=a.length;let e=t[0],i=t[1],c=t[2],m=t[3];for(let f=0;f<o;f++){const r=a[f];e=Math.min(e,r[0]),i=Math.min(i,r[1]),c=Math.max(c,r[0]),m=Math.max(m,r[1])}return u[0]=e,u[1]=i,u[2]=c,u[3]=m,u}function B(t){for(let a=0;a<4;a++)if(!isFinite(t[a]))return!1;return!0}function p(t){return s(t)||t[0]>=t[2]?0:t[2]-t[0]}function b(t){return t[1]>=t[3]?0:t[3]-t[1]}function C(t){return p(t)*b(t)}function N(t,a=[0,0]){return a[0]=(t[0]+t[2])/2,a[1]=(t[1]+t[3])/2,a}function O(t,a){return E(t,a[0],a[1])}function P(t,a){const u=a[3],o=.5*(t[0]+t[2]),e=Math.abs(a[0]-o),i=.5*(t[2]-t[0]);if(e>u+i)return!1;const c=.5*(t[1]+t[3]),m=.5*(t[3]-t[1]),f=Math.abs(a[1]-c);if(f>u+m)return!1;if(e<i||f<m)return!0;const r=e-i,h=f-m;return r*r+h*h<=u*u}function Q(t,a,u){const o=t[0],e=t[1],i=t[2],c=t[3],{x:m,y:f}=a,{x:r,y:h}=u,n=(K,R)=>(h-f)*K+(m-r)*R+(r*f-m*h)<0,g=n(o,c),$=n(i,c),w=n(i,e),F=n(o,e);return!(g===$&&$===w&&w===F&&F===g||m<o&&r<o||m>i&&r>i||f>c&&h>c||f<e&&h<e)}function S(t,a){return E(t,a.x,a.y)}function E(t,a,u){return a>=t[0]&&u>=t[1]&&a<=t[2]&&u<=t[3]}function T(t,a,u){return a[0]>=t[0]-u&&a[1]>=t[1]-u&&a[0]<=t[2]+u&&a[1]<=t[3]+u}function V(t,a){return Math.max(a[0],t[0])<=Math.min(a[2],t[2])&&Math.max(a[1],t[1])<=Math.min(a[3],t[3])}function W(t,a){return a[0]>=t[0]&&a[2]<=t[2]&&a[1]>=t[1]&&a[3]<=t[3]}function X(t,a,u){if(s(a))return y(u,t);const o=a[0],e=a[1],i=a[2],c=a[3];return u[0]=x(t[0],o,i),u[1]=x(t[1],e,c),u[2]=x(t[2],o,i),u[3]=x(t[3],e,c),u}function Y(t,a){const u=(t[0]+t[2])/2,o=(t[1]+t[3])/2,e=Math.max(Math.abs(a[0]-u)-p(t)/2,0),i=Math.max(Math.abs(a[1]-o)-b(t)/2,0);return Math.sqrt(e*e+i*i)}function Z(t,a,u,o=t){return o[0]=t[0]+a,o[1]=t[1]+u,o[2]=t[2]+a,o[3]=t[3]+u,o}function _(t){return t?y(t,q):l(q)}function M(t){return t!=null&&t.length===4}function tt(t){return!(p(t)!==0&&isFinite(t[0])||b(t)!==0&&isFinite(t[1]))}function at(t,a){return M(t)&&M(a)?t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]&&t[3]===a[3]:t===a}const ut=[-1/0,-1/0,1/0,1/0],q=[1/0,1/0,-1/0,-1/0],j=[0,0,0,0];export{_ as D,V as E,S as F,tt as H,at as I,ut as J,q as K,B as M,W as R,X as U,y as a,O as b,J as c,Y as d,H as e,L as f,P as g,v as h,Q as j,b as l,U as m,I as o,N as p,T as q,p as s,l as u,E as w,A as x,C as y,Z as z};
