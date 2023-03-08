import{e as _,n as F}from"./cast-7928d7aa.js";import"./string-cdf077e6.js";import{r as S,o as f}from"./typedArrayUtil-a8b5b3e9.js";import"./Error-653283ae.js";import"./ensureType-cf29afa9.js";import{m as U}from"./diffUtils-1ac65748.js";import{s as v}from"./heatmapUtils-84e8c43b.js";import{o as E}from"./definitions-2d0dd0cd.js";import{p as O}from"./BaseProcessor-c2a63379.js";import{l as a}from"./tileUtils-caf0c827.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-6684e352.js";import"./Collection-78126e82.js";import"./Evented-515b9d9c.js";import"./SimpleObservable-7dcdef1d.js";import"./mathUtils-2519596a.js";import"./vec3-a020a6f6.js";import"./vec3f64-2f9cef06.js";import"./common-c186b691.js";import"./vec4-790471c0.js";import"./screenUtils-410d12c0.js";import"./vec4f64-e407da96.js";import"./HandleOwner-e1406413.js";import"./reactiveUtils-f41a4e00.js";import"./Extent-69509002.js";import"./Ellipsoid-89682c5e.js";import"./Query-ff8c2cfb.js";import"./geometry-5a216427.js";import"./Polyline-bf268e7b.js";import"./typeUtils-eb9416d0.js";import"./jsonMap-c1f958cf.js";import"./TimeExtent-744afd75.js";import"./enumeration-3c281341.js";import"./jsonUtils-03c4af61.js";import"./Field-f5fc9f6b.js";import"./fieldType-b1002185.js";import"./Clonable-ba795b08.js";import"./TileKey-0750ad58.js";class n{constructor(t,r){this.offset=t,this.extent=r}}function g(i){const t=i.key,r=new Map,o=256,e=E,s=i.tileInfoView.tileInfo.isWrappable;return r.set(a(t,-1,-1,s).id,new n([-e,-e],[e-o,e-o,e,e])),r.set(a(t,0,-1,s).id,new n([0,-e],[0,e-o,e,e])),r.set(a(t,1,-1,s).id,new n([e,-e],[0,e-o,o,e])),r.set(a(t,-1,0,s).id,new n([-e,0],[e-o,0,e,e])),r.set(a(t,1,0,s).id,new n([e,0],[0,0,o,e])),r.set(a(t,-1,1,s).id,new n([-e,e],[e-o,0,e,o])),r.set(a(t,0,1,s).id,new n([0,e],[0,0,e,o])),r.set(a(t,1,1,s).id,new n([e,e],[0,0,o,o])),r}let l=class extends O{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}async update(i,t){const r=t.schema.processors[0];r.type==="heatmap"&&U(this._schema,r)&&(i.mesh=!0,this._schema=r)}onTileUpdate(i){for(const t of i.removed)this._tileKeyToFeatureSets.delete(t.key.id)}onTileClear(i){const t={clear:!0};return this._tileKeyToFeatureSets.delete(i.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:i.id,data:t})}async onTileMessage(i,t,r){this._tileKeyToFeatureSets.has(i.key.id)||this._tileKeyToFeatureSets.set(i.key.id,new Map);const o=this._tileKeyToFeatureSets.get(i.key.id);if(S(t.addOrUpdate)&&t.addOrUpdate.hasFeatures&&o.set(t.addOrUpdate.instance,t),t.end){const e=[],s=g(i);this._tileKeyToFeatureSets.forEach((c,p)=>{if(p===i.key.id)c.forEach(m=>f(m.addOrUpdate,d=>e.push(d)));else if(s.has(p)){const m=s.get(p),[d,T]=m.offset;c.forEach(w=>f(w.addOrUpdate,k=>{const K=k.transform(d,T,1,1);e.push(K)}))}});const h=v(e,this._schema.mesh,512,512),u={tileKey:i.key.id,intensityInfo:h},y=[h.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",u,{...r,transferList:y})}}onTileError(i,t,r){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:i.id,error:t},r)}};l=_([F("esri.views.2d.layers.features.processors.HeatmapProcessor")],l);const ce=l;export{ce as default};