import{fJ as h,s as i,r as c,U as d,ik as b,il as w,dj as v,_ as z,eP as j,im as _}from"./index-4acc98f2.js";let s=y();function y(){return new h(50)}function x(){s=y()}function I(e,r){if(e.type==="icon")return l(e,r);if(e.type==="object")return f(e,r);throw new i("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function O(e,r){if(e.type==="icon")return g(e,r);if(e.type==="object")return B(e,r);throw new i("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function l(e,r){var t,n;if((t=e.resource)!=null&&t.href)return L(e.resource.href).then(o=>[o.width,o.height]);if((n=e.resource)!=null&&n.primitive)return c(r)?[r,r]:[256,256];throw new i("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function g(e,r){return l(e,r).then(t=>{if(e.size==null)return t;const n=t[0]/t[1];return n>1?[e.size,e.size/n]:[e.size*n,e.size]})}function L(e){return d(e,{responseType:"image"}).then(r=>r.data)}function f(e,r){return P(e,r).then(t=>b(t))}async function B(e,r){const t=await f(e,r);return w(t,e)}async function P(e,r){var n;if(!e.isPrimitive){const o=v((n=e.resource)==null?void 0:n.href),u=s.get(o);if(u!==void 0)return u;const m=await z(()=>import("./objectResourceUtils-fd45e249.js").then(p=>p.o),["./objectResourceUtils-fd45e249.js","./devEnvironmentUtils-5002a058.js","./index-4acc98f2.js","./index-bb38b130.css","./mat3f64-221ce671.js","./mat4f64-1413b4a7.js","./BufferView-600e881b.js","./vec33-da9365c6.js","./DefaultMaterial_COLOR_GAMMA-8b5c2e61.js","./types-e1c0a5bf.js","./enums-64ab819c.js","./Version-a61dd3b1.js","./quat-029c09f6.js","./quatf64-3363c48e.js","./resourceUtils-71fe9113.js","./basicInterfaces-b7051eb1.js","./Indices-3028c22c.js","./NestedMap-1b5db22e.js","./requestImageUtils-b6d91129.js","./Util-318c594a.js","./sphere-44de37ec.js","./VertexAttribute-15d1866a.js","./OrderIndependentTransparency-e1b3a745.js","./Texture-f76f9e32.js","./VertexArrayObject-d59d47e2.js","./VertexElementDescriptor-2925c6af.js","./InterleavedLayout-7e01488e.js","./vec3f32-ad1dc57f.js","./doublePrecisionUtils-e3c3d0d8.js","./symbolColorUtils-5119e410.js"],import.meta.url),a=await m.fetch(o,{disableTextures:!0});return s.put(o,a.referenceBoundingBox),a.referenceBoundingBox}let t=null;if(e.resource&&e.resource.primitive&&(t=j(_(e.resource.primitive)),c(r)))for(let o=0;o<t.length;o++)t[o]*=r;return t?Promise.resolve(t):Promise.reject(new i("symbol:invalid-resource","The symbol does not have a valid resource"))}export{x as clearBoundingBoxCache,l as computeIconLayerResourceSize,I as computeLayerResourceSize,O as computeLayerSize,f as computeObjectLayerResourceSize};
