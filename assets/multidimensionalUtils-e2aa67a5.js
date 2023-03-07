import{N as g,O as y,eO as b,a0 as k,bb as A,cD as F,r as v,t as d}from"./index-ca9d4bb6.js";var p;let h=p=class extends A{constructor(e){super(e),this.variableName=null,this.dimensionName=null,this.values=[],this.isSlice=!1}clone(){return new p({variableName:this.variableName,dimensionName:this.dimensionName,values:F(this.values),isSlice:this.isSlice})}};g([y({type:String,json:{write:!0}})],h.prototype,"variableName",void 0),g([y({type:String,json:{write:!0}})],h.prototype,"dimensionName",void 0),g([y({type:b.array(b.oneOf([b.native(Number),b.array(b.native(Number))])),json:{write:!0}})],h.prototype,"values",void 0),g([y({type:Boolean,json:{write:!0}})],h.prototype,"isSlice",void 0),h=p=g([k("esri.layers.support.DimensionalDefinition")],h);const D=h;function M(e,n,a){var t;const l=n.shift();if(a.length===0){const s=[];a.push({sliceId:-1,multidimensionalDefinition:s})}const i=a.length;for(let s=0;s<i;s++){const o=a.shift().multidimensionalDefinition;(t=l.values)==null||t.forEach(m=>{a.push({sliceId:-1,multidimensionalDefinition:[...o,{variableName:e,dimensionName:l.name,values:[m]}]})})}n.length&&M(e,n,a)}function j(e,n){const a=[];let l=0;return(n?e.variables.filter(i=>i.name.toLowerCase()===n.toLowerCase()):[...e.variables].sort((i,t)=>i.name>t.name?1:-1)).forEach(i=>{const t=[],s=[...i.dimensions].sort((o,m)=>o.name>m.name?-1:1);M(i.name,s,t),t.forEach(o=>{a.push({...o,sliceId:l++})})}),a}function R(e,n,a){let l=e;if(n&&(n=[...n].sort((i,t)=>i.dimensionName<t.dimensionName?-1:1)).forEach(({dimensionName:i,values:t,isSlice:s})=>{t.length&&(l=l.filter(o=>{const m=o.multidimensionalDefinition.find(r=>r.dimensionName===i);if(m==null)return!1;const u=m.values[0];return typeof u=="number"?typeof t[0]=="number"?t.includes(u):t.some(r=>r[0]<=u&&r[1]>=u):typeof t[0]=="number"?t.some(r=>u[0]<=r&&u[1]>=r):s?t.some(r=>r[0]===u[0]&&r[0]===u[1]):t.some(r=>r[0]>=u[0]&&r[0]<=u[1]||r[1]>=u[0]&&r[1]<=u[1]||r[0]<u[0]&&r[1]>u[1])}))}),l.length&&a&&v(a.start)&&v(a.end)){const i=a.start.getTime(),t=a.end.getTime(),s=l[0].multidimensionalDefinition.findIndex(o=>o.dimensionName==="StdTime");s>-1&&(l=l.filter(o=>{const m=o.multidimensionalDefinition[s].values[0];return i<=m&&t>=m}))}return l.map(i=>i.sliceId)}function C(e,n){return Array.isArray(e)?n[0]===n[1]?e[0]===n[0]||e[1]===n[0]:e[0]>=n[0]&&e[0]<=n[1]&&e[1]>=n[0]&&e[1]<=n[1]:e>=n[0]&&e<=n[1]}function O(e,n){return e[0]<=n[0]&&e[1]>=n[0]||e[0]<=n[1]&&e[1]>=n[1]||e[0]>=n[0]&&e[1]<=n[1]}function T(e){return e.length===1?[e[0],e[0]]:[e[0],e[e.length-1]]}function S(e,n,a){var s,o,m;if(!((s=n==null?void 0:n.subsetDefinitions)!=null&&s.length))return e;let l;if(a){const{variables:u}=n;if(u.length&&!u.includes(a))return null;const r=n.subsetDefinitions.find(c=>c.dimensionName===e.name&&c.variableName===a);if(!((o=r==null?void 0:r.values)!=null&&o.length))return e;l=T(r.values)}else l=(m=n.dimensions.find(({name:u})=>u===e.name))==null?void 0:m.extent;const i=l;if(!i||!(i!=null&&i.length))return e;const t=e.values.filter(u=>C(u,i));return{...e,extent:[...i],values:t}}function x(e,n,a){var i;if(!((i=n==null?void 0:n.subsetDefinitions)!=null&&i.length))return!1;const{variables:l}=n;if(l.length&&e.some(({variableName:t})=>t&&!l.includes(t)))return!0;for(let t=0;t<e.length;t++){const s=e[t],o=n.subsetDefinitions.find(m=>(s.variableName===""||m.variableName===s.variableName)&&m.dimensionName===s.dimensionName);if(o!=null&&o.values.length){const m=T(o.values);if(!s.isSlice&&s.values.length===2&&!Array.isArray(s.values[0])&&s.values[0]!==s.values[1]&&a){if(!O(s.values,m))return!0}else if(s.values.some(u=>!C(u,m)))return!0}}return!1}function z(e,n){if(d(e))return{isOutside:!1};const{geometry:a,timeExtent:l,multidimensionalDefinition:i}=n;let t=null;if(v(l)&&(t=Y(e,l),d(t)))return{isOutside:!0};const{areaOfInterest:s}=e;if(s&&a){const o=a.type==="point"?a:a.type==="extent"?a.center:a.type==="polygon"?a.centroid:null;if(o&&!s.contains(o))return{isOutside:!0}}return v(i)&&i.length&&x(i,e,!0)?{isOutside:!0}:{isOutside:!1,intersection:{geometry:a,timeExtent:t,multidimensionalDefinition:i}}}function Y(e,n){const a=e.dimensions.find(({name:s})=>s==="StdTime");if(a==null||d(n.start)&&d(n.end))return n;n=n.clone();const{start:l,end:i}=n.toJSON(),t=l===i?[l]:l!=null&&i!=null?[l,i]:[l??i];return t.length===2&&(a!=null&&a.extent.length)&&(t[0]=Math.max(t[0],a.extent[0]),t[1]=Math.min(t[1],a.extent[1]??a.extent[0]),t[1]<t[0])||x([new D({variableName:"",dimensionName:"StdTime",isSlice:t.length===1,values:t})],e,!0)?null:(n.start=new Date(t[0]),n.end=new Date(t[1]??t[0]),n)}function I(e,n={}){var r,c;const{multidimensionalInfo:a,keyProperties:l}=e;if(d(a))return null;const{variableName:i,multidimensionalSubset:t,multidimensionalDefinition:s}=n,o=v(s)?(r=s[0])==null?void 0:r.variableName:null,m=i||o||(l==null?void 0:l.DefaultVariable);let{variables:u}=a;return(c=t==null?void 0:t.variables)!=null&&c.length&&(u=u.filter(({name:f})=>t.variables.includes(f))),m?u.find(({name:f})=>f===m)??u[0]:u[0]}function B(e,n={}){const a=I(e,n);if(!a)return null;const l=[],{dimensions:i,name:t}=a;if(i.length===0)return[new D({variableName:t,dimensionName:"",values:[],isSlice:!0})];for(let s=0;s<i.length;s++){const o=S(i[s],n.multidimensionalSubset,t);if(!o)return null;const{values:m,extent:u}=o;let r=(m==null?void 0:m[0])??u[0];o.name.toLowerCase()==="stdz"&&!o.hasRanges&&Math.abs(u[1])<=Math.abs(u[0])&&(r=m!=null&&m.length?m[m.length-1]:u[1]),l.push(new D({variableName:t,dimensionName:o.name,values:[r],isSlice:!n.useRangeForRangedDimensionInfo||!!o.hasRanges}))}return l}function J(e){return!(d(e)||!e.length)&&e.some(n=>{if(n.values==null)return!0;const a=n.values.length;return a===0||a>1||!n.isSlice&&Array.isArray(n.values[0])})}function P(e,n){var l;if(d(n)||d(e))return null;let a=n.variables.map(i=>({...i}));return(l=e==null?void 0:e.variables)!=null&&l.length&&(a=a.filter(({name:i})=>e.variables.includes(i)),a.forEach(i=>{i.dimensions=i.dimensions.map(t=>S(t,e,i.name)).filter(v)})),a}function E(e,n){var o;const{values:a}=n;if(a!=null&&a.length)return Array.isArray(a[0])!==Array.isArray(e)?-1:Array.isArray(a[0])?a.findIndex(m=>m[0]===e[0]&&m[1]===e[1]):a.indexOf(e);const{extent:l}=n;if(Array.isArray(e)||e<l[0]||e>l[1])return-1;const i=n.interval||1;if(n.unit!=="ISO8601")return Math.round((e-l[0])/i);const t=l[0];let s=-1;switch(((o=n.intervalUnit)==null?void 0:o.toLowerCase())||"seconds"){case"seconds":s=Math.round((e-t)/1e3/i);break;case"minutes":s=Math.round((e-t)/6e4/i);break;case"hours":s=Math.round((e-t)/36e5/i);break;case"days":s=Math.round((e-t)/864e5/i);break;case"months":{const m=new Date(e).getUTCFullYear()-new Date(t).getUTCFullYear(),u=new Date(t).getUTCMonth(),r=new Date(e).getUTCMonth();s=m===0?r-u:r+11-u+12*(m-1)}break;case"years":s=Math.round((new Date(e).getUTCFullYear()-new Date(t).getUTCFullYear())/i);break;case"decades":s=Math.round((new Date(e).getUTCFullYear()-new Date(t).getUTCFullYear())/10/i)}return s}function w(e){var s,o;let n=(s=e.values)==null?void 0:s.length;if(n)return n;const{extent:a,unit:l}=e,i=e.interval||1,t=a?a[1]-a[0]:0;if(l!=="ISO8601")return Math.round(t/i);switch(((o=e.intervalUnit)==null?void 0:o.toLowerCase())??"seconds"){case"seconds":n=Math.round(t/1e3/i);break;case"minutes":n=Math.round(t/6e4/i);break;case"hours":n=Math.round(t/36e5/i);break;case"days":n=Math.round(t/864e5/i);break;case"months":{const m=new Date(a[1]).getUTCFullYear()-new Date(a[0]).getUTCFullYear(),u=new Date(a[1][0]).getUTCMonth(),r=new Date(a[1][1]).getUTCMonth();n=m===0?r-u+1:r+11-u+12*(m-1)+1}break;case"years":n=Math.round((new Date(a[1]).getUTCFullYear()-new Date(a[0]).getUTCFullYear())/i);break;case"decades":n=Math.round((new Date(a[1]).getUTCFullYear()-new Date(a[0]).getUTCFullYear())/10/i);break;default:n=0}return n}function V(e,n){let a=0;const l=e[0].variableName,i=[...n.variables].sort((t,s)=>t.name>s.name?1:-1);for(let t=0;t<i.length;t++){const s=i[t],o=[...s.dimensions].sort((r,c)=>r.name>c.name?-1:1);if(s.name!==l){a+=o.map(r=>w(r)).reduce((r,c)=>r*c);continue}const m=o.map(r=>w(r)),u=o.length;for(let r=0;r<u;r++){const c=e.find(N=>N.dimensionName===o[r].name);if(c==null)return null;const f=E(c.values[0],o[r]);if(f===-1)return null;m.shift(),a+=r===u-1?f:f*m.reduce((N,U)=>N*U)}break}return a}export{j as a,z as c,I as d,J as g,B as h,x as m,D as p,R as s,P as v,V as y};
