import{e as D}from"./mat3f64-221ce671.js";import{e as b}from"./quatf64-3363c48e.js";import{gu as A,gv as L,g2 as O,gw as S,gx as T,gy as X,gz as Y,gA as w,gB as B,gC as C,gD as F,gE as G,fX as W,f_ as d,gF as Z,g0 as k,b as H,b5 as I,gG as J}from"./index-73a6a617.js";function K(n){return n[0]=0,n[1]=0,n[2]=0,n[3]=1,n}function _(n,o,a){a*=.5;const r=Math.sin(a);return n[0]=r*o[0],n[1]=r*o[1],n[2]=r*o[2],n[3]=Math.cos(a),n}function N(n,o){const a=2*Math.acos(o[3]),r=Math.sin(a/2);return r>A()?(n[0]=o[0]/r,n[1]=o[1]/r,n[2]=o[2]/r):(n[0]=1,n[1]=0,n[2]=0),a}function v(n,o,a){const r=o[0],e=o[1],c=o[2],t=o[3],u=a[0],i=a[1],h=a[2],M=a[3];return n[0]=r*M+t*u+e*h-c*i,n[1]=e*M+t*i+c*u-r*h,n[2]=c*M+t*h+r*i-e*u,n[3]=t*M-r*u-e*i-c*h,n}function Q(n,o,a){a*=.5;const r=o[0],e=o[1],c=o[2],t=o[3],u=Math.sin(a),i=Math.cos(a);return n[0]=r*i+t*u,n[1]=e*i+c*u,n[2]=c*i-e*u,n[3]=t*i-r*u,n}function R(n,o,a){a*=.5;const r=o[0],e=o[1],c=o[2],t=o[3],u=Math.sin(a),i=Math.cos(a);return n[0]=r*i-c*u,n[1]=e*i+t*u,n[2]=c*i+r*u,n[3]=t*i-e*u,n}function U(n,o,a){a*=.5;const r=o[0],e=o[1],c=o[2],t=o[3],u=Math.sin(a),i=Math.cos(a);return n[0]=r*i+e*u,n[1]=e*i-r*u,n[2]=c*i+t*u,n[3]=t*i-c*u,n}function V(n,o){const a=o[0],r=o[1],e=o[2];return n[0]=a,n[1]=r,n[2]=e,n[3]=Math.sqrt(Math.abs(1-a*a-r*r-e*e)),n}function $(n,o,a,r){const e=o[0],c=o[1],t=o[2],u=o[3];let i,h,M,f,l,g=a[0],m=a[1],q=a[2],p=a[3];return h=e*g+c*m+t*q+u*p,h<0&&(h=-h,g=-g,m=-m,q=-q,p=-p),1-h>A()?(i=Math.acos(h),M=Math.sin(i),f=Math.sin((1-r)*i)/M,l=Math.sin(r*i)/M):(f=1-r,l=r),n[0]=f*e+l*g,n[1]=f*c+l*m,n[2]=f*t+l*q,n[3]=f*u+l*p,n}function nn(n){const o=J,a=o(),r=o(),e=o(),c=Math.sqrt(1-a),t=Math.sqrt(a);return n[0]=c*Math.sin(2*Math.PI*r),n[1]=c*Math.cos(2*Math.PI*r),n[2]=t*Math.sin(2*Math.PI*e),n[3]=t*Math.cos(2*Math.PI*e),n}function on(n,o){const a=o[0],r=o[1],e=o[2],c=o[3],t=a*a+r*r+e*e+c*c,u=t?1/t:0;return n[0]=-a*u,n[1]=-r*u,n[2]=-e*u,n[3]=c*u,n}function rn(n,o){return n[0]=-o[0],n[1]=-o[1],n[2]=-o[2],n[3]=o[3],n}function z(n,o){const a=o[0]+o[4]+o[8];let r;if(a>0)r=Math.sqrt(a+1),n[3]=.5*r,r=.5/r,n[0]=(o[5]-o[7])*r,n[1]=(o[6]-o[2])*r,n[2]=(o[1]-o[3])*r;else{let e=0;o[4]>o[0]&&(e=1),o[8]>o[3*e+e]&&(e=2);const c=(e+1)%3,t=(e+2)%3;r=Math.sqrt(o[3*e+e]-o[3*c+c]-o[3*t+t]+1),n[e]=.5*r,r=.5/r,n[3]=(o[3*c+t]-o[3*t+c])*r,n[c]=(o[3*c+e]+o[3*e+c])*r,n[t]=(o[3*t+e]+o[3*e+t])*r}return n}function en(n,o,a,r){const e=.5*Math.PI/180;o*=e,a*=e,r*=e;const c=Math.sin(o),t=Math.cos(o),u=Math.sin(a),i=Math.cos(a),h=Math.sin(r),M=Math.cos(r);return n[0]=c*i*M-t*u*h,n[1]=t*u*M+c*i*h,n[2]=t*i*h-c*u*M,n[3]=t*i*M+c*u*h,n}function an(n){return"quat("+n[0]+", "+n[1]+", "+n[2]+", "+n[3]+")"}const cn=L,tn=O,un=S,hn=v,Mn=T,sn=X,fn=Y,E=w,ln=E,j=B,gn=j,x=C,mn=F,qn=G;function pn(n,o,a){const r=W(o,a);return r<-.999999?(d(s,$n,o),Z(s)<1e-6&&d(s,dn,o),k(s,s),_(n,s,Math.PI),n):r>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(d(s,o,a),n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=1+r,x(n,n))}const s=H(),$n=I(1,0,0),dn=I(0,1,0);function xn(n,o,a,r,e,c){return $(y,o,e,c),$(P,a,r,c),$(n,y,P,2*c*(1-c)),n}const y=b(),P=b();function yn(n,o,a,r){const e=Pn;return e[0]=a[0],e[3]=a[1],e[6]=a[2],e[1]=r[0],e[4]=r[1],e[7]=r[2],e[2]=-o[0],e[5]=-o[1],e[8]=-o[2],x(n,z(n,e))}const Pn=D();Object.freeze(Object.defineProperty({__proto__:null,add:un,calculateW:V,conjugate:rn,copy:cn,dot:sn,equals:qn,exactEquals:mn,fromEuler:en,fromMat3:z,getAxisAngle:N,identity:K,invert:on,len:ln,length:E,lerp:fn,mul:hn,multiply:v,normalize:x,random:nn,rotateX:Q,rotateY:R,rotateZ:U,rotationTo:pn,scale:Mn,set:tn,setAxes:yn,setAxisAngle:_,slerp:$,sqlerp:xn,sqrLen:gn,squaredLength:j,str:an},Symbol.toStringTag,{value:"Module"}));export{mn as K,rn as S,en as k,_ as v,N as x,v as y};
