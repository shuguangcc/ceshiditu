import{s as u,a as m}from"./Error-653283ae.js";import{t as l}from"./typedArrayUtil-a8b5b3e9.js";import{q as p,C as f,B as y,v as d}from"./quantizationUtils-33aba427.js";function $(o,r,e,n,t){if(l(o))return null;const a=o.referencesGeometry()&&t?g(r,n,t):r,s=o.repurposeFeature(a);try{return o.evaluate({...e,$feature:s})}catch(c){return u.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",c),null}}const i=new Map;function g(o,r,e){const{transform:n,hasZ:t,hasM:a}=e;i.has(r)||i.set(r,w(r));const s=i.get(r)(o.geometry,n,t,a);return{...o,geometry:s}}function w(o){const r={};switch(o){case"esriGeometryPoint":return(e,n,t,a)=>d(n,r,e,t,a);case"esriGeometryPolygon":return(e,n,t,a)=>y(n,r,e,t,a);case"esriGeometryPolyline":return(e,n,t,a)=>f(n,r,e,t,a);case"esriGeometryMultipoint":return(e,n,t,a)=>p(n,r,e,t,a);default:return u.getLogger("esri.views.2d.support.arcadeOnDemand").error(new m("mapview-arcade",`Unable to handle geometryType: ${o}`)),e=>e}}export{$ as i};