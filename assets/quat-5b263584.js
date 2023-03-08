import{e as Y}from"./mat3f64-c6305894.js";import{e as I}from"./quatf64-7fd38d64.js";import{n as D,r as _}from"./vec3f64-2f9cef06.js";import{a as A,n as L}from"./common-c186b691.js";import{P as O,_ as P,Y as S,z as T}from"./vec3-a020a6f6.js";import{a as W,r as X,s as Z,l as k,y as w,j as B,x as C,q as F,v as G,D as H,E as J}from"./vec4-790471c0.js";function K(n){return n[0]=0,n[1]=0,n[2]=0,n[3]=1,n}function b(n,o,t){t*=.5;const r=Math.sin(t);return n[0]=r*o[0],n[1]=r*o[1],n[2]=r*o[2],n[3]=Math.cos(t),n}function N(n,o){const t=2*Math.acos(o[3]),r=Math.sin(t/2);return r>A()?(n[0]=o[0]/r,n[1]=o[1]/r,n[2]=o[2]/r):(n[0]=1,n[1]=0,n[2]=0),t}function v(n,o,t){const r=o[0],e=o[1],c=o[2],a=o[3],u=t[0],i=t[1],h=t[2],M=t[3];return n[0]=r*M+a*u+e*h-c*i,n[1]=e*M+a*i+c*u-r*h,n[2]=c*M+a*h+r*i-e*u,n[3]=a*M-r*u-e*i-c*h,n}function Q(n,o,t){t*=.5;const r=o[0],e=o[1],c=o[2],a=o[3],u=Math.sin(t),i=Math.cos(t);return n[0]=r*i+a*u,n[1]=e*i+c*u,n[2]=c*i-e*u,n[3]=a*i-r*u,n}function R(n,o,t){t*=.5;const r=o[0],e=o[1],c=o[2],a=o[3],u=Math.sin(t),i=Math.cos(t);return n[0]=r*i-c*u,n[1]=e*i+a*u,n[2]=c*i+r*u,n[3]=a*i-e*u,n}function U(n,o,t){t*=.5;const r=o[0],e=o[1],c=o[2],a=o[3],u=Math.sin(t),i=Math.cos(t);return n[0]=r*i+e*u,n[1]=e*i-r*u,n[2]=c*i+a*u,n[3]=a*i-c*u,n}function V(n,o){const t=o[0],r=o[1],e=o[2];return n[0]=t,n[1]=r,n[2]=e,n[3]=Math.sqrt(Math.abs(1-t*t-r*r-e*e)),n}function g(n,o,t,r){const e=o[0],c=o[1],a=o[2],u=o[3];let i,h,M,l,s,m=t[0],p=t[1],q=t[2],$=t[3];return h=e*m+c*p+a*q+u*$,h<0&&(h=-h,m=-m,p=-p,q=-q,$=-$),1-h>A()?(i=Math.acos(h),M=Math.sin(i),l=Math.sin((1-r)*i)/M,s=Math.sin(r*i)/M):(l=1-r,s=r),n[0]=l*e+s*m,n[1]=l*c+s*p,n[2]=l*a+s*q,n[3]=l*u+s*$,n}function nn(n){const o=L,t=o(),r=o(),e=o(),c=Math.sqrt(1-t),a=Math.sqrt(t);return n[0]=c*Math.sin(2*Math.PI*r),n[1]=c*Math.cos(2*Math.PI*r),n[2]=a*Math.sin(2*Math.PI*e),n[3]=a*Math.cos(2*Math.PI*e),n}function on(n,o){const t=o[0],r=o[1],e=o[2],c=o[3],a=t*t+r*r+e*e+c*c,u=a?1/a:0;return n[0]=-t*u,n[1]=-r*u,n[2]=-e*u,n[3]=c*u,n}function rn(n,o){return n[0]=-o[0],n[1]=-o[1],n[2]=-o[2],n[3]=o[3],n}function z(n,o){const t=o[0]+o[4]+o[8];let r;if(t>0)r=Math.sqrt(t+1),n[3]=.5*r,r=.5/r,n[0]=(o[5]-o[7])*r,n[1]=(o[6]-o[2])*r,n[2]=(o[1]-o[3])*r;else{let e=0;o[4]>o[0]&&(e=1),o[8]>o[3*e+e]&&(e=2);const c=(e+1)%3,a=(e+2)%3;r=Math.sqrt(o[3*e+e]-o[3*c+c]-o[3*a+a]+1),n[e]=.5*r,r=.5/r,n[3]=(o[3*c+a]-o[3*a+c])*r,n[c]=(o[3*c+e]+o[3*e+c])*r,n[a]=(o[3*a+e]+o[3*e+a])*r}return n}function en(n,o,t,r){const e=.5*Math.PI/180;o*=e,t*=e,r*=e;const c=Math.sin(o),a=Math.cos(o),u=Math.sin(t),i=Math.cos(t),h=Math.sin(r),M=Math.cos(r);return n[0]=c*i*M-a*u*h,n[1]=a*u*M+c*i*h,n[2]=a*i*h-c*u*M,n[3]=a*i*M+c*u*h,n}function tn(n){return"quat("+n[0]+", "+n[1]+", "+n[2]+", "+n[3]+")"}const cn=W,an=X,un=Z,hn=v,Mn=k,fn=w,ln=B,E=C,sn=E,j=F,mn=j,d=G,pn=H,qn=J;function $n(n,o,t){const r=O(o,t);return r<-.999999?(P(f,gn,o),S(f)<1e-6&&P(f,Pn,o),T(f,f),b(n,f,Math.PI),n):r>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(P(f,o,t),n[0]=f[0],n[1]=f[1],n[2]=f[2],n[3]=1+r,d(n,n))}const f=D(),gn=_(1,0,0),Pn=_(0,1,0);function dn(n,o,t,r,e,c){return g(x,o,e,c),g(y,t,r,c),g(n,x,y,2*c*(1-c)),n}const x=I(),y=I();function xn(n,o,t,r){const e=yn;return e[0]=t[0],e[3]=t[1],e[6]=t[2],e[1]=r[0],e[4]=r[1],e[7]=r[2],e[2]=-o[0],e[5]=-o[1],e[8]=-o[2],d(n,z(n,e))}const yn=Y();Object.freeze(Object.defineProperty({__proto__:null,identity:K,setAxisAngle:b,getAxisAngle:N,multiply:v,rotateX:Q,rotateY:R,rotateZ:U,calculateW:V,slerp:g,random:nn,invert:on,conjugate:rn,fromMat3:z,fromEuler:en,str:tn,copy:cn,set:an,add:un,mul:hn,scale:Mn,dot:fn,lerp:ln,length:E,len:sn,squaredLength:j,sqrLen:mn,normalize:d,exactEquals:pn,equals:qn,rotationTo:$n,sqlerp:dn,setAxes:xn},Symbol.toStringTag,{value:"Module"}));export{cn as B,pn as K,on as O,$n as Q,rn as S,en as k,b as v,N as x,v as y};