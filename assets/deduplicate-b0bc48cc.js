import{i as L}from"./mathUtils-2519596a.js";function B(h,e,r){const n=h.byteLength/(4*e),o=new Uint32Array(h,0,n*e);let f=new Uint32Array(n);const g=(r==null?void 0:r.minReduction)??0,s=(r==null?void 0:r.originalIndices)||null,p=s?s.length:0,u=(r==null?void 0:r.componentOffsets)||null;let U=0;if(u)for(let t=0;t<u.length-1;t++){const i=u[t+1]-u[t];i>U&&(U=i)}else U=n;const w=Math.floor(1.1*U)+1;(a==null||a.length<2*w)&&(a=new Uint32Array(L(2*w)));for(let t=0;t<2*w;t++)a[t]=0;let c=0;const A=!!u&&!!s,b=A?p:n,m=A?new Uint32Array(p):null,M=1.96;let j=g!==0?Math.ceil(4*M*M/(g*g)*g*(1-g)):b,d=1,x=u?u[1]:b;for(let t=0;t<b;t++){if(t===j){const l=1-c/t;if(l+M*Math.sqrt(l*(1-l)/t)<g)return null;j*=2}if(t===x){for(let l=0;l<2*w;l++)a[l]=0;if(s)for(let l=u[d-1];l<u[d];l++)m[l]=f[s[l]];x=u[++d]}const i=A?s[t]:t,I=i*e,q=v(o,I,e);let y=q%w,k=c;for(;a[2*y+1]!==0;){if(a[2*y]===q){const l=a[2*y+1]-1;if(O(o,I,l*e,e)){k=f[l];break}}y++,y>=w&&(y-=w)}k===c&&(a[2*y]=q,a[2*y+1]=i+1,c++),f[i]=k}if(g!==0&&1-c/n<g)return null;if(A){for(let t=u[d-1];t<m.length;t++)m[t]=f[s[t]];f=m}const C=new Uint32Array(e*c);c=0;for(let t=0;t<b;t++)f[t]===c&&(R(o,(A?s[t]:t)*e,C,c*e,e),c++);if(s&&!A){const t=new Uint32Array(p);for(let i=0;i<t.length;i++)t[i]=f[s[i]];f=t}return{buffer:C.buffer,indices:f,uniqueCount:c}}function O(h,e,r,n){for(let o=0;o<n;o++)if(h[e+o]!==h[r+o])return!1;return!0}function R(h,e,r,n,o){for(let f=0;f<o;f++)r[n+f]=h[e+f]}function v(h,e,r){let n=0;for(let o=0;o<r;o++)n=h[e+o]+n|0,n=n+(n<<11)+(n>>>2)|0;return n>>>0}let a=null;export{B as n};
