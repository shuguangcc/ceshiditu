import{h as a}from"./string-cdf077e6.js";import{r as u,t as f}from"./typedArrayUtil-a8b5b3e9.js";var e;function W(t,r,n={}){const o=b(t);for(;o.length>1;){const i=l(r,o.shift(),n);if(u(i))return i}return g(r,o.shift(),n)}function b(t){const r=a("esri-force-webgl");if(r===e.WEBGL1||r===e.WEBGL2)return[r];switch(t){case"2d":return a("mac")&&a("chrome")?[e.WEBGL1,e.WEBGL2]:[e.WEBGL2,e.WEBGL1];case"3d":return[e.WEBGL2,e.WEBGL1]}}function g(t,r,n={}){if(!window.WebGLRenderingContext)return c(t,h),null;const o=l(t,r,n);return f(o)&&c(t,d),o}function l(t,r,n={}){const o=r===e.WEBGL1?["webgl","experimental-webgl","webkit-3d","moz-webgl"]:["webgl2"];let i=null;for(const s of o){try{i=t.getContext(s,n)}catch{}if(i)break}return i}function c(t,r){const n=t.parentNode;n&&(n.innerHTML='<table style="background-color: #8CE; width: 100%; height: 100%;"><tr><td align="center"><div style="display: table-cell; vertical-align: middle;"><div style="">'+r+"</div></div></td></tr></table>")}(function(t){t[t.WEBGL1=1]="WEBGL1",t[t.WEBGL2=2]="WEBGL2"})(e||(e={}));const h='This page requires a browser that supports WebGL.<br/><a href="http://get.webgl.org">Click here to upgrade your browser.</a>',d=`It doesn't appear your computer can support WebGL.<br/><a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>`;export{l as c,b as n,W as o,e as r};