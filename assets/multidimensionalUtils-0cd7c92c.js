import{r as C,t as N}from"./typedArrayUtil-a8b5b3e9.js";import{e as g,y as p,n as F,l as Y}from"./cast-7928d7aa.js";import{y as x}from"./string-cdf077e6.js";import{N as b}from"./ensureType-cf29afa9.js";var w;let v=w=class extends Y{constructor(e){super(e),this.variableName=null,this.dimensionName=null,this.values=[],this.isSlice=!1}clone(){return new w({variableName:this.variableName,dimensionName:this.dimensionName,values:x(this.values),isSlice:this.isSlice})}};g([p({type:String,json:{write:!0}})],v.prototype,"variableName",void 0),g([p({type:String,json:{write:!0}})],v.prototype,"dimensionName",void 0),g([p({type:b.array(b.oneOf([b.native(Number),b.array(b.native(Number))])),json:{write:!0}})],v.prototype,"values",void 0),g([p({type:Boolean,json:{write:!0}})],v.prototype,"isSlice",void 0),v=w=g([F("esri.layers.support.DimensionalDefinition")],v);const M=v;function U(e,n,a){var t;const o=n.shift();if(a.length===0){const s=[];a.push({sliceId:-1,multidimensionalDefinition:s})}const i=a.length;for(let s=0;s<i;s++){const u=a.shift().multidimensionalDefinition;(t=o.values)==null||t.forEach(m=>{a.push({sliceId:-1,multidimensionalDefinition:[...u,{variableName:e,dimensionName:o.name,values:[m]}]})})}n.length&&U(e,n,a)}function R(e,n){const a=[];let o=0;return(n?e.variables.filter(i=>i.name.toLowerCase()===n.toLowerCase()):[...e.variables].sort((i,t)=>i.name>t.name?1:-1)).forEach(i=>{const t=[],s=[...i.dimensions].sort((u,m)=>u.name>m.name?-1:1);U(i.name,s,t),t.forEach(u=>{a.push({...u,sliceId:o++})})}),a}function z(e,n,a){let o=e;if(n&&(n=[...n].sort((i,t)=>i.dimensionName<t.dimensionName?-1:1)).forEach(({dimensionName:i,values:t,isSlice:s})=>{t.length&&(o=o.filter(u=>{const m=u.multidimensionalDefinition.find(r=>r.dimensionName===i);if(m==null)return!1;const l=m.values[0];return typeof l=="number"?typeof t[0]=="number"?t.includes(l):t.some(r=>r[0]<=l&&r[1]>=l):typeof t[0]=="number"?t.some(r=>l[0]<=r&&l[1]>=r):s?t.some(r=>r[0]===l[0]&&r[0]===l[1]):t.some(r=>r[0]>=l[0]&&r[0]<=l[1]||r[1]>=l[0]&&r[1]<=l[1]||r[0]<l[0]&&r[1]>l[1])}))}),o.length&&a&&C(a.start)&&C(a.end)){const i=a.start.getTime(),t=a.end.getTime(),s=o[0].multidimensionalDefinition.findIndex(u=>u.dimensionName==="StdTime");s>-1&&(o=o.filter(u=>{const m=u.multidimensionalDefinition[s].values[0];return i<=m&&t>=m}))}return o.map(i=>i.sliceId)}function k(e,n){return Array.isArray(e)?n[0]===n[1]?e[0]===n[0]||e[1]===n[0]:e[0]>=n[0]&&e[0]<=n[1]&&e[1]>=n[0]&&e[1]<=n[1]:e>=n[0]&&e<=n[1]}function I(e,n){return e[0]<=n[0]&&e[1]>=n[0]||e[0]<=n[1]&&e[1]>=n[1]||e[0]>=n[0]&&e[1]<=n[1]}function S(e){return e.length===1?[e[0],e[0]]:[e[0],e[e.length-1]]}function A(e,n,a){var s,u,m;if(!((s=n==null?void 0:n.subsetDefinitions)!=null&&s.length))return e;let o;if(a){const{variables:l}=n;if(l.length&&!l.includes(a))return null;const r=n.subsetDefinitions.find(c=>c.dimensionName===e.name&&c.variableName===a);if(!((u=r==null?void 0:r.values)!=null&&u.length))return e;o=S(r.values)}else o=(m=n.dimensions.find(({name:l})=>l===e.name))==null?void 0:m.extent;const i=o;if(!i||!(i!=null&&i.length))return e;const t=e.values.filter(l=>k(l,i));return{...e,extent:[...i],values:t}}function B(e,n,a){var i;if(!((i=n==null?void 0:n.subsetDefinitions)!=null&&i.length))return!1;const{variables:o}=n;if(o.length&&e.some(({variableName:t})=>t&&!o.includes(t)))return!0;for(let t=0;t<e.length;t++){const s=e[t],u=n.subsetDefinitions.find(m=>(s.variableName===""||m.variableName===s.variableName)&&m.dimensionName===s.dimensionName);if(u!=null&&u.values.length){const m=S(u.values);if(!s.isSlice&&s.values.length===2&&!Array.isArray(s.values[0])&&s.values[0]!==s.values[1]&&a){if(!I(s.values,m))return!0}else if(s.values.some(l=>!k(l,m)))return!0}}return!1}function P(e,n={}){var c;const{multidimensionalInfo:a,keyProperties:o}=e;if(N(a))return null;const i=n.variableName||(o==null?void 0:o.DefaultVariable);let{variables:t}=a;const{multidimensionalSubset:s}=n;(c=s==null?void 0:s.variables)!=null&&c.length&&(t=t.filter(({name:f})=>s.variables.includes(f)));const u=i?t.find(({name:f})=>f===i)??t[0]:t[0];if(!u)return null;const m=[],{dimensions:l,name:r}=u;if(l.length===0)return[new M({variableName:r,dimensionName:"",values:[],isSlice:!0})];for(let f=0;f<l.length;f++){const d=A(l[f],s,r);if(!d)return null;const{values:h,extent:y}=d;let D=(h==null?void 0:h[0])??y[0];d.name.toLowerCase()==="stdz"&&!d.hasRanges&&Math.abs(y[1])<=Math.abs(y[0])&&(D=h!=null&&h.length?h[h.length-1]:y[1]),m.push(new M({variableName:r,dimensionName:d.name,values:[D],isSlice:!n.useRangeForRangedDimensionInfo||!!d.hasRanges}))}return m}function V(e){return!(N(e)||!e.length)&&e.some(n=>{if(n.values==null)return!0;const a=n.values.length;return a===0||a>1||!n.isSlice&&Array.isArray(n.values[0])})}function q(e,n){var o;if(N(n)||N(e))return null;let a=n.variables.map(i=>({...i}));return(o=e==null?void 0:e.variables)!=null&&o.length&&(a=a.filter(({name:i})=>e.variables.includes(i)),a.forEach(i=>{i.dimensions=i.dimensions.map(t=>A(t,e,i.name))})),a}function $(e,n){var u;const{values:a}=n;if(a!=null&&a.length)return Array.isArray(a[0])!==Array.isArray(e)?-1:Array.isArray(a[0])?a.findIndex(m=>m[0]===e[0]&&m[1]===e[1]):a.indexOf(e);const{extent:o}=n;if(Array.isArray(e)||e<o[0]||e>o[1])return-1;const i=n.interval||1;if(n.unit!=="ISO8601")return Math.round((e-o[0])/i);const t=o[0];let s=-1;switch(((u=n.intervalUnit)==null?void 0:u.toLowerCase())||"seconds"){case"seconds":s=Math.round((e-t)/1e3/i);break;case"minutes":s=Math.round((e-t)/6e4/i);break;case"hours":s=Math.round((e-t)/36e5/i);break;case"days":s=Math.round((e-t)/864e5/i);break;case"months":{const m=new Date(e).getUTCFullYear()-new Date(t).getUTCFullYear(),l=new Date(t).getUTCMonth(),r=new Date(e).getUTCMonth();s=m===0?r-l:r+11-l+12*(m-1)}break;case"years":s=Math.round((new Date(e).getUTCFullYear()-new Date(t).getUTCFullYear())/i);break;case"decades":s=Math.round((new Date(e).getUTCFullYear()-new Date(t).getUTCFullYear())/10/i)}return s}function T(e){var s,u;let n=(s=e.values)==null?void 0:s.length;if(n)return n;const{extent:a,unit:o}=e,i=e.interval||1,t=a?a[1]-a[0]:0;if(o!=="ISO8601")return Math.round(t/i);switch(((u=e.intervalUnit)==null?void 0:u.toLowerCase())??"seconds"){case"seconds":n=Math.round(t/1e3/i);break;case"minutes":n=Math.round(t/6e4/i);break;case"hours":n=Math.round(t/36e5/i);break;case"days":n=Math.round(t/864e5/i);break;case"months":{const m=new Date(a[1]).getUTCFullYear()-new Date(a[0]).getUTCFullYear(),l=new Date(a[1][0]).getUTCMonth(),r=new Date(a[1][1]).getUTCMonth();n=m===0?r-l+1:r+11-l+12*(m-1)+1}break;case"years":n=Math.round((new Date(a[1]).getUTCFullYear()-new Date(a[0]).getUTCFullYear())/i);break;case"decades":n=Math.round((new Date(a[1]).getUTCFullYear()-new Date(a[0]).getUTCFullYear())/10/i);break;default:n=0}return n}function G(e,n){let a=0;const o=e[0].variableName,i=[...n.variables].sort((t,s)=>t.name>s.name?1:-1);for(let t=0;t<i.length;t++){const s=i[t],u=[...s.dimensions].sort((r,c)=>r.name>c.name?-1:1);if(s.name!==o){a+=u.map(r=>T(r)).reduce((r,c)=>r*c);continue}const m=u.map(r=>T(r)),l=u.length;for(let r=0;r<l;r++){const c=e.find(d=>d.dimensionName===u[r].name);if(c==null)return null;const f=$(c.values[0],u[r]);if(f===-1)return null;m.shift(),a+=r===l-1?f:f*m.reduce((d,h)=>d*h)}break}return a}export{P as c,q as d,V as f,G as g,R as i,B as m,M as p,z as s};