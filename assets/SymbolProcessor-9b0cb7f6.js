import{e as F,n as K}from"./cast-7928d7aa.js";import{n as $}from"./cimAnalyzer-721530a4.js";import"./Error-653283ae.js";import"./string-cdf077e6.js";import{o as I,t as M,r as v,f as E,e as L}from"./typedArrayUtil-a8b5b3e9.js";import{j as C,f as _}from"./promiseUtils-6684e352.js";import"./ensureType-cf29afa9.js";import{m as A,a as T}from"./diffUtils-1ac65748.js";import{k as P}from"./Extent-69509002.js";import{p as O}from"./visualVariablesUtils-8295a400.js";import{S as U}from"./enums-4ca4641f.js";import{x as z,l as k,b as B,E as j,t as H}from"./Matcher-1892b043.js";import{p as J}from"./BaseProcessor-c2a63379.js";import"./nextTick-3ee5a785.js";import"./Color-a42a8267.js";import"./colorUtils-639f4d25.js";import"./mathUtils-2519596a.js";import"./vec3-a020a6f6.js";import"./vec3f64-2f9cef06.js";import"./common-c186b691.js";import"./vec4-790471c0.js";import"./fontUtils-b94d5e06.js";import"./screenUtils-410d12c0.js";import"./arcadeOnDemand-c6d1b9f2.js";import"./preload-helper-41c905a7.js";import"./geometry-5a216427.js";import"./Polyline-bf268e7b.js";import"./typeUtils-eb9416d0.js";import"./jsonMap-c1f958cf.js";import"./BidiEngine-836b7ef6.js";import"./aaBoundingRect-4a760199.js";import"./jsonUtils-03c4af61.js";import"./enums-4b2a86a0.js";import"./utils-c81a5c52.js";import"./alignmentUtils-ae955d28.js";import"./definitions-2d0dd0cd.js";import"./mat2d-d0b91e3e.js";import"./vec2-2cef68de.js";import"./vec2f32-461e65a9.js";import"./number-954e4ab6.js";import"./Rect-ea14f53a.js";import"./callExpressionWithFeature-a7532499.js";import"./quantizationUtils-33aba427.js";import"./GeometryUtils-eebff0a0.js";import"./floatRGBA-fa8308d2.js";import"./Collection-78126e82.js";import"./Evented-515b9d9c.js";import"./SimpleObservable-7dcdef1d.js";import"./Ellipsoid-89682c5e.js";import"./Utils-b2b4cf0c.js";import"./enums-64ab819c.js";import"./Texture-e79b14e7.js";import"./context-util-1e3c8cfc.js";import"./VertexElementDescriptor-2925c6af.js";import"./visualVariablesUtils-496ec144.js";import"./TileStrategy-4189758f.js";import"./TileStore-787dbea4.js";import"./Queue-3a0c055d.js";import"./TileKey-0750ad58.js";import"./rbush-8e36784a.js";import"./quickselect-322ec8e1.js";import"./Query-ff8c2cfb.js";import"./TimeExtent-744afd75.js";import"./enumeration-3c281341.js";import"./Field-f5fc9f6b.js";import"./fieldType-b1002185.js";import"./Clonable-ba795b08.js";import"./tileUtils-caf0c827.js";import"./TileClipper-5dae42c4.js";import"./assets-0b172f07.js";import"./request-d3e98716.js";import"./Geometry-daada628.js";import"./GeometryUtils-c093d234.js";import"./MaterialKey-406a59ab.js";import"./featureConversionUtils-01cdde8a.js";import"./OptimizedFeature-3de538c1.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./defaultsJSON-59981e75.js";import"./earcut-58237617.js";import"./LRUCache-14115d91.js";import"./MemCache-4b976a8b.js";import"./ExpandedCIM-676cf2ac.js";import"./devEnvironmentUtils-5002a058.js";import"./Portal-8b65c9c4.js";import"./Loadable-48bc1293.js";import"./Promise-dfdee8ba.js";import"./locale-30120714.js";import"./PortalGroup-bfe93c76.js";import"./PortalUser-4c8e1adc.js";import"./persistableUrlUtils-a16d0f55.js";import"./styleUtils-4adfed9e.js";import"./HandleOwner-e1406413.js";import"./reactiveUtils-f41a4e00.js";class N{constructor(e){this._remoteClient=e,this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null}destroy(){}async fetchResource(e,i){const r=this._resourceMap,s=r.get(e);if(s)return s;let o=this._inFlightResourceMap.get(e);if(o)return o;try{o=this._remoteClient.invoke("tileRenderer.fetchResource",{url:e},{...i}),this._inFlightResourceMap.set(e,o),o.then(a=>(this._inFlightResourceMap.delete(e),r.set(e,a),a))}catch(a){return C(a)?null:{width:0,height:0}}return o}getResource(e){return this._resourceMap.get(e)??null}}function x(t,e){return(!t.minScale||t.minScale>=e)&&(!t.maxScale||t.maxScale<=e)}function D(t){const e=t.message,i={message:{data:{},tileKey:e.tileKey,tileKeyOrigin:e.tileKeyOrigin,version:e.version},transferList:new Array};for(const r in e.data){const s=e.data[r];if(i.message.data[r]=null,v(s)){const o=s.stride,a=s.indices.slice(0),l=s.vertices.slice(0),m=s.records.slice(0),p={stride:o,indices:a,vertices:l,records:m,metrics:I(s.metrics,c=>c.slice(0))};i.transferList.push(a,l,m),i.message.data[r]=p}}return i}let S=class extends J{constructor(){super(...arguments),this.type="symbol",this._matchers={feature:null,aggregate:null},this._bufferData=new Map,this._bufferIds=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))]),this._resourceManagerProxy=new N(this.remoteClient)}destroy(){this._resourceManagerProxy.destroy()}get supportsTileUpdates(){return!0}forEachBufferId(t){this._bufferIds.forEach(e=>{e.forEach(t)})}async update(t,e){const i=e.schema.processors[0];if(i.type!=="symbol")return;const r=A(this._schema,i);(T(r,"mesh")||T(r,"target"))&&(t.mesh=!0,t.why.mesh.push("Symbology changed"),this._schema=i,this._factory=this._createFactory(i),this._factory.update(i,this.tileStore.tileScheme.tileInfo))}onTileMessage(t,e,i,r){return _(r),this._onTileData(t,e,i,r)}onTileClear(t){const e={clear:!0};return this._bufferData.delete(t.key.id),this._bufferIds.delete(t.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:t.id,data:e})}onTileError(t,e,i){const r=i.signal,s={tileKey:t.id,error:e};return this.remoteClient.invoke("tileRenderer.onTileError",s,{signal:r})}onTileUpdate(t){for(const e of t.removed)this._bufferData.has(e.key.id)&&this._bufferData.delete(e.key.id),this._bufferIds.has(e.key.id)&&this._bufferIds.delete(e.key.id);for(const e of t.added)this._bufferData.forEach(i=>{for(const r of i)r.message.tileKey===e.id&&this._updateTileMesh("append",e,D(r),[],!1,!1,null)})}_addBufferData(t,e){this._bufferData.has(t)||this._bufferData.set(t,[]),this._bufferData.get(t).push(D(e))}_createFactory(t){const{geometryType:e,objectIdField:i,fields:r}=this.service,s=(p,c)=>this.remoteClient.invoke("tileRenderer.getMaterialItems",p,c),o={geometryType:e,fields:r,spatialReference:P.fromJSON(this.spatialReference)},a=new z(s,this.tileStore.tileScheme.tileInfo),{matcher:l,aggregateMatcher:m}=t.mesh;return this._store=a,this._matchers.feature=k(l,a,o,this._resourceManagerProxy),this._matchers.aggregate=I(m,p=>k(p,a,o,this._resourceManagerProxy)),new B(e,i,a)}async _onTileData(t,e,i,r){_(r);const{type:s,addOrUpdate:o,remove:a,clear:l,end:m}=e,p=!!this._schema.mesh.sortKey;if(!o){const h={type:s,addOrUpdate:null,remove:a,clear:l,end:m,sort:p};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:t.id,data:h},r)}const c=this._processFeatures(t,o,i,r,e.status.version);try{const h=await c;if(M(h)){const n={type:s,addOrUpdate:null,remove:a,clear:l,end:m,sort:p};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:t.id,data:n},r)}const f=[];for(const n of h){let d=!1;const g=n.message.bufferIds,u=t.key.id,b=n.message.tileKey;if(u!==b&&v(g)){if(!this.tileStore.get(b)){this._addBufferData(u,n),f.push(n);continue}let y=this._bufferIds.get(b);y||(y=new Set,this._bufferIds.set(b,y));const R=Array.from(g);for(const w of R){if(y.has(w)){d=!0;break}y.add(w)}}d||(this._addBufferData(u,n),f.push(n))}await Promise.all(f.map(n=>{const d=t.key.id===n.message.tileKey,g=d?e.remove:[],u=d&&e.end;return this._updateTileMesh(s,t,n,g,u,e.clear,r.signal)}))}catch(h){this._handleError(t,h,r)}}async _updateTileMesh(t,e,i,r,s,o,a){const l=t,m=i.message.tileKey,p=!!this._schema.mesh.sortKey;m!==e.key.id&&(s=!1);const c=I(i,d=>d.message),h=I(i,d=>d.transferList)||[],f={type:l,addOrUpdate:c,remove:r,clear:o,end:s,sort:p},n={transferList:L(h)||[],signal:a};return _(n),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:m,data:f},n)}async _processFeatures(t,e,i,r,s){if(M(e)||!e.hasFeatures)return null;const o={transform:t.transform,hasZ:!1,hasM:!1},a=this._factory,l={viewingMode:"",scale:t.scale},m=await this._matchers.feature,p=await this._matchers.aggregate;_(r);const c=this._getLabelInfos(t,e);return await a.analyze(e.getCursor(),this._resourceManagerProxy,m,p,o,l),_(r),this._writeFeatureSet(t,e,o,c,a,i,s)}_writeFeatureSet(t,e,i,r,s,o,a){const l=e.getSize(),m=this._schema.mesh.matcher.symbologyType,p=new j(t.key.id,{features:l,records:l,metrics:0},m,o,m!==U.HEATMAP,a),c={viewingMode:"",scale:t.scale},h=e.getCursor();for(;h.next();)try{const n=h.getDisplayId(),d=v(r)?r.get(n):null;s.writeCursor(p,h,i,c,t.level,d,this._resourceManagerProxy)}catch{}const f=t.tileInfoView.tileInfo.isWrappable;return p.serialize(f)}_handleError(t,e,i){if(!C(e)){const r={tileKey:t.id,error:e.message};return this.remoteClient.invoke("tileRenderer.onTileError",r,{signal:i.signal})}}_getLabelingSchemaForScale(t){const e=this._schema.mesh.labels;if(M(e))return null;if(e.type==="subtype"){const r={type:"subtype",classes:{}};let s=!1;for(const o in e.classes){const a=e.classes[o].filter(l=>x(l,t.scale));s=s||!!a.length,r.classes[o]=a}return s?r:null}const i=e.classes.filter(r=>x(r,t.scale));return i.length?{type:"simple",classes:i}:null}_getLabels(t,e){if(e.type==="subtype"){const i=this.service.subtypeField,r=E(i,"Expected to find subtype Field"),s=t.readAttribute(r);return s==null?[]:e.classes[s]??[]}return e.classes}_getLabelInfos(t,e){const i=this._getLabelingSchemaForScale(t);if(M(i))return null;const r=new Map,s=e.getCursor();for(;s.next();){const o=s.getDisplayId(),a=[],l=O(o),m=l&&s.readAttribute("cluster_count")!==1?"aggregate":"feature",p=this._getLabels(s,i);for(const c of p){if(c.target!==m)continue;const h=s.getStorage(),f=l&&m==="feature"?h.getComputedStringAtIndex(s.readAttribute("referenceId"),c.fieldIndex):h.getComputedStringAtIndex(o,c.fieldIndex);if(!f)continue;const n=$(f.toString()),d=n[0],g=n[1];this._store.getMosaicItem(c.symbol,H(d)).then(u=>{a[c.index]={glyphs:u.glyphMosaicItems,rtl:g,index:c.index}})}r.set(o,a)}return r}};S=F([K("esri.views.2d.layers.features.processors.SymbolProcessor")],S);const Ft=S;export{Ft as default};
