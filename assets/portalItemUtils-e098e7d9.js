import{_ as o,r as s}from"./projection-d7b57a6c.js";import{l as i,k as c}from"./Extent-69509002.js";async function a(t){const r=t.spatialReference;if(r.isWGS84)return t.clone();if(r.isWebMercator)return i(t);const e=c.WGS84;return await o(r,e),s(t,e)}function u(t,r){if(!f(t,r)){const e=t.typeKeywords;e?e.push(r):t.typeKeywords=[r]}}function f(t,r){var e;return!!((e=t.typeKeywords)!=null&&e.includes(r))}function y(t,r){const e=t.typeKeywords;if(e){const n=e.indexOf(r);n>-1&&e.splice(n,1)}}async function A(t){const r=t.clone().normalize();let e;if(r.length>1)for(const n of r)e?n.width>e.width&&(e=n):e=n;else e=r[0];return a(e)}const d={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table"};export{A as a,y as c,d as f,u as i,f as s};
