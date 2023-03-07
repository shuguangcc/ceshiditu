import{as as p,oO as S,oP as T,aV as v,d7 as d,aU as F,oR as G}from"./index-74d49a87.js";import{t as b,r as O}from"./fetchService-590f6092.js";import{e as $}from"./jsonContext-ab2114a6.js";async function q(e,r){const t=e.instance.portalItem;if(t&&t.id)return await t.load(r),D(e),P(e,r)}function D(e){const r=e.instance.portalItem;if(!(r!=null&&r.type)||!e.supportedTypes.includes(r.type))throw new p("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r==null?void 0:r.type,expectedType:e.supportedTypes.join(", ")})}async function P(e,r){const t=e.instance,a=t.portalItem;if(!a)return;const{url:n,title:l}=a,s=$(a);if(t.type==="group")return t.read({title:l},s),x(t,e);n&&t.read({url:n},s);const o=await g(e,r);return o&&t.read(o,s),t.resourceReferences={portalItem:a,paths:s.readResourcePaths??[]},t.type!=="subtype-group"&&t.read({title:l},s),S(t,s)}async function x(e,r){let t;const{portalItem:a}=e;if(!a)return;const n=a.type,l=r.layerModuleTypeMap,s=T(a,"Oriented Imagery Layer")??!1;switch(n){case"Feature Service":t=s?l.OrientedImageryLayer:l.FeatureLayer;break;case"Stream Service":t=l.StreamLayer;break;case"Scene Service":t=l.SceneLayer;break;case"Feature Collection":t=l.FeatureLayer;break;default:throw new p("portal:unsupported-item-type-as-group",`The item type '${n}' is not supported as a 'IGroupLayer'`)}let[o,i]=await Promise.all([t(),g(r)]),u=()=>o;if(n==="Feature Service"){if(i=a.url?await k(i,a.url):{},h(i).length){const w=l.SubtypeGroupLayer,I=await w();u=L=>L.layerType==="SubtypeGroupLayer"?I:o}return c(e,u,i,await J(a.url))}return y(i)>0?c(e,u,i):M(e,u)}async function M(e,r){var n,l;const{portalItem:t}=e;if(!(t!=null&&t.url))return;const a=await b(t.url);a&&c(e,r,{layers:(n=a.layers)==null?void 0:n.map(f),tables:(l=a.tables)==null?void 0:l.map(f)})}function f(e){return{id:e.id,name:e.name}}function c(e,r,t,a){var s;let n=t.layers||[];const l=t.tables||[];if(((s=e.portalItem)==null?void 0:s.type)==="Feature Collection"&&(n.forEach(o=>{var i;((i=o==null?void 0:o.layerDefinition)==null?void 0:i.type)==="Table"&&l.push(o)}),n=n.filter(o=>{var i;return((i=o==null?void 0:o.layerDefinition)==null?void 0:i.type)!=="Table"})),"coverage"in t){const o=R(t);o&&e.add(o)}n.reverse().forEach(o=>{const i=m(e,r(o),t,o,a==null?void 0:a(o));e.add(i)}),l.reverse().forEach(o=>{const i=m(e,r(o),t,o,a==null?void 0:a(o));e.tables.add(i)})}function m(e,r,t,a,n){const l=e.portalItem,s=new r({portalItem:l.clone(),layerId:a.id});if("sourceJSON"in s&&(s.sourceJSON=n),s.type!=="subtype-group"&&(s.sublayerTitleMode="service-name"),l.type==="Feature Collection"){const o={origin:"portal-item",portal:l.portal||v.getDefault()};s.read(a,o);const i=t.showLegend;i!=null&&s.read({showLegend:i},o)}return s}async function g(e,r){if(e.supportsData===!1)return;const t=e.instance,a=t.portalItem;if(!a)return;let n=null;try{n=await a.fetchData("json",r)}catch{}if(N(t)){let l=null,s=!0;if(n&&y(n)>0){if(t.layerId==null){const o=h(n);t.layerId=t.type==="subtype-group"?o==null?void 0:o[0]:C(n)}l=E(n,t),l&&(y(n)===1&&(s=!1),n.showLegend!=null&&(l.showLegend=n.showLegend))}return s&&t.sublayerTitleMode!=="service-name"&&(t.sublayerTitleMode="item-title-and-service-name"),l}return n}async function k(e,r){if((e==null?void 0:e.layers)==null||(e==null?void 0:e.tables)==null){const t=await b(r);(e=e||{}).layers=e.layers||(t==null?void 0:t.layers),e.tables=e.tables||(t==null?void 0:t.tables)}return e}function C(e){const r=e.layers;if(r&&r.length)return r[0].id;const t=e.tables;return t&&t.length?t[0].id:null}function E(e,r){var n,l;const{layerId:t}=r,a=((n=e.layers)==null?void 0:n.find(s=>s.id===t))||((l=e.tables)==null?void 0:l.find(s=>s.id===t));return a&&j(a,r)?a:null}function y(e){var r,t;return(((r=e==null?void 0:e.layers)==null?void 0:r.length)??0)+(((t=e==null?void 0:e.tables)==null?void 0:t.length)??0)}function N(e){return e.type!=="stream"&&e.type!=="oriented-imagery"&&"layerId"in e}function R(e){const{coverage:r}=e;if(!r)return null;const t=new URL(r);if(r.toLowerCase().includes("item.html")){const a=t.searchParams.get("id"),n=t.origin;return d.fromPortalItem({portalItem:new F({id:a,url:n})})}if(G(r))return d.fromArcGISServerUrl({url:r});throw new p("portal:oriented-imagery-layer-coverage","the provided coverage url couldn't be loaded as a layer")}function h(e){var t;const r=[];return(t=e==null?void 0:e.layers)==null||t.forEach(a=>{a.layerType==="SubtypeGroupLayer"&&r.push(a.id)}),r}function j(e,r){return!(r.type==="feature"&&"layerType"in e&&e.layerType==="SubtypeGroupLayer"||r.type==="subtype-group"&&!("layerType"in e))}async function J(e){const{layersJSON:r}=await O(e);if(!r)return null;const t=[...r.layers,...r.tables];return a=>t.find(n=>n.id===a.id)}export{C as getFirstLayerOrTableId,y as getNumLayersAndTables,h as getSubtypeGroupLayerIds,q as load,k as preprocessFSItemData};
