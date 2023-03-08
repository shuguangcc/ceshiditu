import{_ as de}from"./preload-helper-41c905a7.js";import{e as u,y as p,n as q,m as U,t as he}from"./cast-7928d7aa.js";import"./geometry-5a216427.js";import{e as fe,r as h,t as m,K as ge,L as me}from"./typedArrayUtil-a8b5b3e9.js";import{s as Ee,a as z}from"./Error-653283ae.js";import{a as we}from"./mathUtils-2519596a.js";import{a as C,n as X,u as H}from"./DefinitionExpressionSceneLayerView-5a30c6e1.js";import{j as _e}from"./reactiveUtils-f41a4e00.js";import{X as Se}from"./unitUtils-47abac71.js";import"./ensureType-cf29afa9.js";import{S as T,u as D,o as V}from"./vec3-a020a6f6.js";import{WhereClause as Fe}from"./WhereClause-2b5b05b2.js";import{n as J,t as be,r as Y,j as G}from"./projection-d7b57a6c.js";import{a as Z,B as Ie}from"./aaBoundingBox-fc742a4e.js";import{o as Re,x as ve,h as xe,u as Oe,E as $e}from"./aaBoundingRect-4a760199.js";import{s as je}from"./Ellipsoid-89682c5e.js";import{M as ee,k as te,G as Qe,m as ke,a as Ce}from"./Extent-69509002.js";import{y as Me}from"./FeatureReductionLayer-4077b2ae.js";import{q as Ne,o as Te,g as re}from"./I3SUtil-3ffd3baa.js";import{an as De}from"./index-455b69b8.js";import{Y as Ge}from"./QueryEngine-a5c074c3.js";import Ae from"./FeatureSet-0573546e.js";import{x as Je}from"./Query-ff8c2cfb.js";import{e as Le}from"./centroid-13995b22.js";import{t as K}from"./OptimizedFeature-3de538c1.js";import{n as Pe}from"./Evented-515b9d9c.js";import{n as Be}from"./vec4f64-e407da96.js";import{L as N}from"./I3SMeshView3D-4e176d72.js";const oe="esri.views.3d.layers.i3s.I3SMeshViewFilter",Q=Ee.getLogger(oe);let g=class extends U{constructor(t){super(t),this._projectionEngineLoaded=!1}initialize(){_e(()=>{var t;return((t=fe(this.viewFilter))==null?void 0:t.geometry)||h(this.layerFilter)}).then(()=>this.loadAsyncModule(de(()=>import("./geometryEngine-62e3ccf4.js"),["./geometryEngine-62e3ccf4.js","./geometryEngineBase-3dd302e0.js","./hydrated-be86c8b3.js","./Extent-69509002.js","./cast-7928d7aa.js","./typedArrayUtil-a8b5b3e9.js","./string-cdf077e6.js","./Error-653283ae.js","./ensureType-cf29afa9.js","./nextTick-3ee5a785.js","./promiseUtils-6684e352.js","./Ellipsoid-89682c5e.js","./Polyline-bf268e7b.js"],import.meta.url).then(t=>{this.destroyed||(this._geometryEngine=t)})))}get sortedObjectIds(){if(m(this.viewFilter)||m(this.viewFilter.objectIds))return null;const t=new Float64Array(this.viewFilter.objectIds);return t.sort(),t}get parsedWhereClause(){const t=h(this.viewFilter)?this.viewFilter.where:null;if(m(t)||!t)return null;try{return Fe.create(t,this.layerFieldsIndex)}catch(e){Q.error(`Failed to parse filter where clause: ${e}`)}return null}addFilters(t,e,r,i){const n=this.sortedObjectIds;h(n)&&t.push(a=>Ne(n,!0,a)),this.addSqlFilter(t,this.parsedWhereClause);const s=C(this._layerMaskGeometries),o=this._geometryEngine;if(h(s)&&h(this.layerFilter)&&h(o)){const a=this.layerFilter.spatialRelationship;t.push((c,f)=>ie(o,c,f,i,e,r,s,a))}const l=C(this._viewMaskGeometries);if(h(l)&&h(this.viewFilter)&&h(o)){const a=this.viewFilter.spatialRelationship;t.push((c,f)=>ie(o,c,f,i,e,r,l,a))}}isMBSGeometryVisible(t,e,r){const i=C(this._layerMaskGeometries),n=this._geometryEngine;if(h(i)&&h(this.layerFilter)&&h(n)){const o=this.layerFilter.spatialRelationship,l=i[0].spatialReference||e;return J(t,r,M,l)?ne(n,M,i,l,o):(Q.warnOnce("SceneLayer.mask geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}const s=C(this._viewMaskGeometries);if(h(s)&&h(this.viewFilter)&&h(n)){const o=this.viewFilter.spatialRelationship,l=s[0].spatialReference||e;return J(t,r,M,l)?ne(n,M,s,l,o):(Q.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}return!0}get parsedGeometry(){const t=C(this._viewMaskGeometries),e=C(this._layerMaskGeometries);return m(t)||m(e)?t||e:e.concat(t)}get _layerMaskGeometries(){const t=this.layerFilter;return m(t)?null:m(this._geometryEngine)?X:t.spatialRelationship==="disjoint"?t.geometries.map(e=>({type:"polygon",rings:e.rings,spatialReference:e.spatialReference,cache:{}})):[t.geometries.reduce((e,r)=>(e.rings=e.rings.concat(r.rings),e),{type:"polygon",rings:[],spatialReference:t.geometries[0].spatialReference,cache:{}})]}get _viewMaskGeometries(){if(m(this.viewFilter))return null;const{geometry:t}=this.viewFilter;if(m(t))return null;if(m(this.viewFilter)||m(this._geometryEngine))return X;const{distance:e,units:r}=this.viewFilter,i=this.viewFilter.spatialRelationship,n=t.type==="mesh"?t.extent:t;if(m(e)||e===0)return A(this._geometryEngine,n,i);const s=r||Se(n.spatialReference);if(n.spatialReference.isWGS84){const a=this._geometryEngine.geodesicBuffer(n,e,s);return A(this._geometryEngine,a,i)}const o=ee(n,te.WGS84);if(h(o)){const a=ee(this._geometryEngine.geodesicBuffer(o,e,s),n.spatialReference);return A(this._geometryEngine,a,i)}if(!this._projectionEngineLoaded&&(this.loadAsyncModule(be().then(()=>this._projectionEngineLoaded=!0)),!this._projectionEngineLoaded))return null;let l=null;try{l=Y(n,te.WGS84)}catch{}if(l)try{l=Y(this._geometryEngine.geodesicBuffer(l,e,s),n.spatialReference)}catch{l=null}return l||Q.error(`Filter by geodesic buffer (distance) unsupported, failed to project input geometry (${n.spatialReference.wkid}) to WGS84.`),A(this._geometryEngine,l,i)}get updating(){return H(this._layerMaskGeometries)||H(this._viewMaskGeometries)}static checkSupport(t){return!m(t)&&(t.timeExtent?(Q.warn("Filters with a timeExtent are not supported for mesh scene layers"),!1):!!Ve(t.spatialRelationship)||(Q.warn(`Filters with spatialRelationship other than ${ae.join(", ")} are not supported for mesh scene layers`),!1))}};u([p()],g.prototype,"layerFilter",void 0),u([p({type:Me})],g.prototype,"viewFilter",void 0),u([p()],g.prototype,"layerFieldsIndex",void 0),u([p()],g.prototype,"loadAsyncModule",void 0),u([p()],g.prototype,"addSqlFilter",void 0),u([p({readOnly:!0})],g.prototype,"sortedObjectIds",null),u([p({readOnly:!0})],g.prototype,"parsedWhereClause",null),u([p({readOnly:!0})],g.prototype,"parsedGeometry",null),u([p({readOnly:!0})],g.prototype,"_layerMaskGeometries",null),u([p({readOnly:!0})],g.prototype,"_viewMaskGeometries",null),u([p()],g.prototype,"updating",null),u([p()],g.prototype,"_projectionEngineLoaded",void 0),u([p()],g.prototype,"_geometryEngine",void 0),g=u([q(oe)],g);const ae=(t=>t)(["contains","intersects","disjoint"]);function Ve(t){return t!=null&&ae.includes(t)}var d;function A(t,e,r){if(m(e))return null;if(r==="disjoint"&&e.type==="polygon"){const i=e.rings.length,n=e.spatialReference,s=new Array(i);for(let a=0;a<i;++a){const c=Re(1/0,1/0,-1/0,-1/0);ve(c,e.rings[a]),s[a]={type:"polygon",rings:[e.rings[a]],spatialReference:n,cache:{},aabr:c}}s.sort((a,c)=>a.aabr[0]-c.aabr[0]);const o=new Set,l=new ge;for(let a=0;a<s.length;++a){const c=s[a],f=c.aabr[0];o.forEach(y=>{if(f>=y.aabr[2])return void o.delete(y);if(c.aabr[1]>y.aabr[3]||c.aabr[3]<y.aabr[1]||!t.intersects(c,y))return;c.rings=c.rings.concat(y.rings),xe(c.aabr,y.aabr,c.aabr),c.cache={},o.delete(y);const w=me(s,y,s.length,l);s.splice(w,1)}),o.add(c)}for(const a of s)delete a.aabr;return s}return[e]}function ne(t,e,r,i,n){const s=le(t,e,i);return r.every(o=>ce(t,o,s,n)!==d.DISCARD)}function ie(t,e,r,i,n,s,o,l){const a=o[0].spatialReference||n.spatialReference;if(!J(r.node.mbs,s,M,a))return void Q.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter");const c=le(t,M,a),f=Ke(l,n,a,i,r.objectHandle);for(const y of o){if(e.length===0)return;switch(ce(t,y,c,l)){case d.DISCARD:return void(e.length=0);case d.KEEP:continue}Te(e,r.featureIds,w=>We(t,y,w,f))}}(function(t){t[t.KEEP=0]="KEEP",t[t.DISCARD=1]="DISCARD",t[t.TEST=2]="TEST"})(d||(d={}));const M=[0,0,0,0];function Ke(t,e,r,i,n){const s=e.renderSpatialReference,o=new Map,l={type:"polygon",rings:[[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]],spatialReference:r};l.rings[0][3]=l.rings[0][0];const a={indices:null,data:null,stride:0,startIndex:0,endIndex:0};let c,f;switch(t){case"intersects":c=(y,w,I)=>y.intersects(w,I)?d.KEEP:d.TEST,f=W;break;case"contains":c=(y,w,I)=>y.contains(w,I)?d.TEST:d.DISCARD,f=W;break;default:c=(y,w,I)=>y.disjoint(w,I)?d.TEST:d.DISCARD,f=ue}return{collection:i,object:n,type:t,maskSR:r,renderSR:s,aabbCache:o,triangle:l,positions:a,triangleTest:c,geometryTest:f}}function le(t,e,r){const i={type:"point",x:e[0],y:e[1],hasZ:!1,hasM:!1,spatialReference:r},n=!Qe(r)&&!ke(r),s=Number.isNaN(e[3])?0:we(e[3],0,2*je.radius),o=n?t.buffer(i,s,1):t.geodesicBuffer(i,s,1);return o.type="polygon",o}function ce(t,e,r,i){switch(i){case"intersects":case"contains":return W(t,e,r);case"disjoint":return ue(t,e,r)}}function W(t,e,r){return t.intersects(e,r)?t.contains(e,r)?d.KEEP:d.TEST:d.DISCARD}function ue(t,e,r){return t.intersects(e,r)?t.contains(e,r)?d.DISCARD:d.TEST:d.KEEP}function We(t,e,r,i){const{collection:n,object:s,renderSR:o,maskSR:l,geometryTest:a,aabbCache:c}=i;let f=c.get(r);if(!f){const R=n.getObjectTransform(s);n.getComponentAabb(s,r,b);const _=[[b[0],b[1],0],[b[0],b[4],0],[b[3],b[4],0],[b[3],b[1],0]];for(let E=0;E<4;++E)T(_[E],_[E],R.rotationScale),D(_[E],_[E],R.position),G(_[E],o,_[E],l);f={type:"polygon",rings:[_],spatialReference:l,cache:{}},f.rings[0][4]=f.rings[0][0],c.set(r,f)}switch(a(t,e,f)){case d.DISCARD:return!1;case d.KEEP:return!0}const{triangle:y,triangleTest:w,positions:I}=i,O=y.rings[0][0],$=y.rings[0][1],j=y.rings[0][2],k=n.getObjectTransform(s);n.getComponentPositions(s,r,I);const{indices:L,data:F,stride:P,startIndex:pe,endIndex:ye}=I;for(let R=pe;R<ye;R+=3){const _=P*L[R+0],E=P*L[R+1],B=P*L[R+2];switch(V(O,F[_+0],F[_+1],F[_+2]),V($,F[E+0],F[E+1],F[E+2]),V(j,F[B+0],F[B+1],F[B+2]),T(O,O,k.rotationScale),T($,$,k.rotationScale),T(j,j,k.rotationScale),D(O,O,k.position),D($,$,k.position),D(j,j,k.position),G(O,o,O,l),G($,o,$,l),G(j,o,j,l),w(t,e,y)){case d.DISCARD:return!1;case d.KEEP:return!0}}return i.type!=="intersects"}const b=Z(),qe=Ge;let v=class extends U{constructor(e){super(e),this._dataQueryEngineInstance=null,this._handles=new he}get spatialReference(){return this.layerView.view.spatialReference}get layer(){return this.layerView.i3slayer}get defaultQueryJSON(){return new Je({outSpatialReference:this.spatialReference}).toJSON()}get _dataQueryEngine(){return this._ensureDataQueryEngine()}initialize(){this._handles.add(this.layerView.on("visible-geometry-changed",()=>this.spatialIndex.events.emit("changed")))}destroy(){this._dataQueryEngineInstance&&(this._dataQueryEngineInstance.destroy(),this._dataQueryEngineInstance=null),this._handles&&(this._handles.destroy(),this._handles=null),this._set("layerView",null)}async executeQueryForCount(e,r){return this._dataQueryEngine.executeQueryForCount(this._ensureQueryJSON(e),r)}async executeQueryForExtent(e,r){const{count:i,extent:n}=await this._dataQueryEngine.executeQueryForExtent(this._ensureQueryJSON(e),r);return{count:i,extent:Ce.fromJSON(n)}}async executeQueryForIds(e,r){return this._dataQueryEngine.executeQueryForIds(this._ensureQueryJSON(e),r)}async executeQuery(e,r){const i=this._ensureQueryJSON(e);if(i.returnGeometry)throw new z("feature-store:unsupported-query","returnGeometry is not yet supported for mesh scene layer queries");if(i.returnCentroid)throw new z("feature-store:unsupported-query","returnCentroid is not yet supported for mesh scene layer queries");const n=await this._dataQueryEngine.executeQuery(i,r),s=Ae.fromJSON(n);return s.features.forEach(o=>{o.geometry=null}),s}_ensureQueryJSON(e){return m(e)?this.defaultQueryJSON:e.toJSON()}_ensureDataQueryEngine(){if(this._dataQueryEngineInstance)return this._dataQueryEngineInstance;const e=this.layer.objectIdField||De,r="esriGeometryPolygon",i=this.layer.fields.map(a=>a.toJSON()),n=this.layerView.view.resourceController.scheduler,s=this.spatialReference.toJSON(),o=this.priority,l=this.spatialIndex;return this._dataQueryEngineInstance=new qe({hasZ:!0,hasM:!1,geometryType:r,fields:i,timeInfo:null,spatialReference:s,objectIdField:e,featureStore:l,scheduler:n,priority:o}),this._dataQueryEngineInstance}};u([p({constructOnly:!0})],v.prototype,"layerView",void 0),u([p({constructOnly:!0})],v.prototype,"priority",void 0),u([p({constructOnly:!0})],v.prototype,"spatialIndex",void 0),u([p()],v.prototype,"spatialReference",null),u([p()],v.prototype,"layer",null),u([p()],v.prototype,"defaultQueryJSON",null),v=u([q("esri.views.3d.layers.i3s.I3SQueryEngine")],v);class Rt{constructor(e){this._objectIdField=e.objectIdField,this._getFeatureExtent=e.getFeatureExtent}getObjectId(e){return e.id}getAttributes(e){const{meta:r,index:i}=e,n={};this._objectIdField&&(n[this._objectIdField]=e.id);const s=h(r.attributeInfo)&&r.attributeInfo.attributeData;if(h(s))for(const o of Object.keys(s))n[o]=re(s[o],i);return n}getAttribute(e,r){if(r===this._objectIdField)return e.id;const{meta:i,index:n}=e,s=h(i.attributeInfo)&&i.attributeInfo.attributeData;return h(s)?re(s[r],n):null}getGeometry(e){if(e.geometry)return e.geometry;const[r,i,n,s,o]=this._getFeatureExtent(e,se);return new K([5],[r,i,n,s,i,n,s,o,n,r,o,n,r,i,n])}getCentroid(e,r){if(e.geometry)return Le(new K,e.geometry,r.hasZ,r.hasM);const[i,n,s,o,l,a]=this._getFeatureExtent(e,se);return new K([0],[(i+o)/2,(n+l)/2,(s+a)/2])}cloneWithGeometry(e,r){const{id:i,index:n,meta:s}=e;return{id:i,index:n,meta:s,geometry:r}}}const se=Z();let x=class extends U{constructor(t){super(t),this.events=new Pe}forEach(t){this.forAllFeatures(e=>(t(e),N.CONTINUE))}forEachBounds(t,e,r){const i=this.getFeatureExtent;for(const n of t)e(i(n,r))}forEachInBounds(t,e){this.forAllFeatures(r=>{const i=this.getFeatureExtent(r,Ue);return $e(t,Ie(i,Ze))&&e(r),N.CONTINUE},r=>{if(J(r.node.mbs,this.sourceSpatialReference,S,this.viewSpatialReference),S[0]>=t[0]&&S[2]<=t[2]&&S[1]>=t[1]&&S[3]<=t[3])return N.CONTINUE;const i=Math.max(t[0],Math.min(S[0],t[2])),n=Math.max(t[1],Math.min(S[1],t[3])),s=S[0]-i,o=S[1]-n;return s*s+o*o<=S[3]*S[3]?N.CONTINUE:N.SKIP})}};u([p({constructOnly:!0})],x.prototype,"featureAdapter",void 0),u([p({constructOnly:!0})],x.prototype,"toArray",void 0),u([p({constructOnly:!0})],x.prototype,"forAllFeatures",void 0),u([p({constructOnly:!0})],x.prototype,"getFeatureExtent",void 0),u([p({constructOnly:!0})],x.prototype,"sourceSpatialReference",void 0),u([p({constructOnly:!0})],x.prototype,"viewSpatialReference",void 0),x=u([q("esri.views.3d.layers.i3s.I3SQueryFeatureStore")],x);const S=Be(),Ue=Z(),Ze=Oe();export{g as L,v as d,x as f,Rt as n};
