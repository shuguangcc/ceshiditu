import{r as f}from"./typedArrayUtil-a8b5b3e9.js";import{r as p}from"./vec2-2cef68de.js";import{f as h,n as S}from"./vec2f64-30dc1443.js";import{i as v,a as x,n as c}from"./ShaderBuilder-93e8045e.js";let m=class extends v{constructor(t,n){super(t,"vec2",x.Pass,(r,s,i)=>r.setUniform2fv(t,n(s,i)))}};const z="Size",$="InvSize";function C(e,t,n=!1,r=0){if(e.hasWebGL2Context){const s=c`vec2(textureSize(${t}, ${c.int(r)}))`;return n?"(1.0 / "+s+")":s}return n?t+$:t+z}function D(e,t,n,r=null,s=0){if(e.hasWebGL2Context)return c`texelFetch(${t}, ivec2(${n}), ${c.int(s)})`;let i=c`texture2D(${t}, ${n} * `;return i+=r?c`(${r}))`:c`${t+$})`,i}var u;(function(e){e[e.None=0]="None",e[e.Size=1]="Size",e[e.InvSize=2]="InvSize"})(u||(u={}));class l extends v{constructor(t,n){super(t,"sampler2D",x.Pass,(r,s,i)=>r.bindTexture(t,n(s,i)))}}function G(e,t,n=u.None){const r=[new l(e,t)];if(n&u.Size){const s=e+z;r.push(new m(s,(i,a)=>{const o=t(i,a);return f(o)?p(d,o.descriptor.width,o.descriptor.height):h}))}if(n&u.InvSize){const s=e+$;r.push(new m(s,(i,a)=>{const o=t(i,a);return f(o)?p(d,1/o.descriptor.width,1/o.descriptor.height):h}))}return r}const d=S();export{u as a,m as e,l as f,D as i,$ as n,C as r,z as t,G as u};
