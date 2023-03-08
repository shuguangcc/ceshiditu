import{a as I}from"./Error-653283ae.js";import{t as v,r as _}from"./typedArrayUtil-a8b5b3e9.js";import{c as b,s as D}from"./jsonUtils-03c4af61.js";import{v as O}from"./Extent-69509002.js";import{t as q,o as M,X as Q}from"./featureConversionUtils-01cdde8a.js";import{t as Z,n as $}from"./objectIdUtils-789e911a.js";import{u as A}from"./FeatureStore-b1ba4c29.js";import{f as E,g as j}from"./utils-1f4fcfec.js";import{Y as k}from"./QueryEngine-a5c074c3.js";import{i as C,o as P,a as G}from"./clientSideDefaults-3539f8c8.js";import{w as z,a as g,m as T,f as x,g as w}from"./sourceUtils-17bbc359.js";import{r as L}from"./FieldsIndex-aa6dd3fa.js";import{i as W}from"./fieldType-b1002185.js";import{M as B}from"./fieldUtils-31bfecd2.js";import"./string-cdf077e6.js";import"./Polyline-bf268e7b.js";import"./cast-7928d7aa.js";import"./ensureType-cf29afa9.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-6684e352.js";import"./Ellipsoid-89682c5e.js";import"./OptimizedFeature-3de538c1.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./Evented-515b9d9c.js";import"./aaBoundingBox-fc742a4e.js";import"./aaBoundingRect-4a760199.js";import"./mathUtils-2519596a.js";import"./vec3-a020a6f6.js";import"./vec3f64-2f9cef06.js";import"./common-c186b691.js";import"./vec4-790471c0.js";import"./PooledRBush-26ba8fba.js";import"./quickselect-322ec8e1.js";import"./optimizedFeatureQueryEngineAdapter-4b9881eb.js";import"./centroid-13995b22.js";import"./preload-helper-41c905a7.js";import"./jsonMap-c1f958cf.js";import"./unitUtils-47abac71.js";import"./projection-d7b57a6c.js";import"./SimpleObservable-7dcdef1d.js";import"./mat4-44a0988f.js";import"./assets-0b172f07.js";import"./request-d3e98716.js";import"./zscale-1e1fc911.js";import"./normalizeUtils-ee4bf39f.js";import"./geometry-5a216427.js";import"./typeUtils-eb9416d0.js";import"./json-48e3ea08.js";import"./MemCache-4b976a8b.js";import"./QueryEngineResult-665bf7fb.js";import"./quantizationUtils-33aba427.js";import"./ItemCache-ee28c7ba.js";import"./WhereClause-2b5b05b2.js";import"./utils-30a9a7e0.js";import"./generateRendererUtils-a996108f.js";import"./colorRamps-3a8ac20b.js";import"./Color-a42a8267.js";import"./colorUtils-639f4d25.js";import"./enumeration-3c281341.js";import"./Symbol-fc4312a4.js";import"./arcadeOnDemand-c6d1b9f2.js";import"./QueryEngineCapabilities-42e44ded.js";import"./timeSupport-b43dc94c.js";import"./Scheduler-8433672d.js";import"./reactiveUtils-f41a4e00.js";import"./defaultsJSON-59981e75.js";const U=O,H={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:O},V={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function X(c){return D(c)?c.z!=null:!!c.hasZ}function Y(c){return D(c)?c.m!=null:!!c.hasM}class ut{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(e){const t=[],{features:o}=e,i=this._inferLayerProperties(o,e.fields),l=e.fields||[],p=e.hasM!=null?e.hasM:i.hasM,f=e.hasZ!=null?e.hasZ:i.hasZ,m=!e.spatialReference&&!i.spatialReference,u=m?U:e.spatialReference||i.spatialReference,a=m?H:null,r=e.geometryType||i.geometryType,y=!r;let d=e.objectIdField||i.objectIdField,n=e.timeInfo;if(!y&&(m&&t.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!r))throw new I("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!d)throw new I("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(i.objectIdField&&d!==i.objectIdField&&(t.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${d}" doesn't match the field name "${i.objectIdField}", found in the provided fields`}),d=i.objectIdField),d&&!i.objectIdField){let s=null;l.some(h=>h.name===d&&(s=h,!0))?(s.type="esriFieldTypeOID",s.editable=!1,s.nullable=!1):l.unshift({alias:d,name:d,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const s of l){if(s.name==null&&(s.name=s.alias),s.alias==null&&(s.alias=s.name),!s.name)throw new I("feature-layer:invalid-field-name","field name is missing",{field:s});if(s.name===d&&(s.type="esriFieldTypeOID"),!W.jsonValues.includes(s.type))throw new I("feature-layer:invalid-field-type",`invalid type for field "${s.name}"`,{field:s})}const F={};for(const s of l)if(s.type!=="esriFieldTypeOID"&&s.type!=="esriFieldTypeGlobalID"){const h=B(s);h!==void 0&&(F[s.name]=h)}if(this._fieldsIndex=new L(l),this._createDefaultAttributes=C(F,d),n){if(n.startTimeField){const s=this._fieldsIndex.get(n.startTimeField);s?(n.startTimeField=s.name,s.type="esriFieldTypeDate"):n.startTimeField=null}if(n.endTimeField){const s=this._fieldsIndex.get(n.endTimeField);s?(n.endTimeField=s.name,s.type="esriFieldTypeDate"):n.endTimeField=null}if(n.trackIdField){const s=this._fieldsIndex.get(n.trackIdField);s?n.trackIdField=s.name:(n.trackIdField=null,t.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:n}}))}n.startTimeField||n.endTimeField||(t.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:n}}),n=null)}const R={warnings:t,featureErrors:[],layerDefinition:{...V,drawingInfo:P(r),templates:G(F),extent:a,geometryType:r,objectIdField:d,fields:l,hasZ:!!f,hasM:!!p,timeInfo:n},assignedObjectIds:{}};if(this._queryEngine=new k({fields:l,geometryType:r,hasM:p,hasZ:f,objectIdField:d,spatialReference:u,featureStore:new A({geometryType:r,hasM:p,hasZ:f}),timeInfo:n,cacheSpatialQueries:!0}),!o||!o.length)return this._nextObjectId=Z,R;const S=$(d,o);return this._nextObjectId=S+1,await E(o,u),this._loadInitialFeatures(R,o)}async applyEdits(e){const{spatialReference:t,geometryType:o}=this._queryEngine;return await Promise.all([z(t,o),E(e.adds,t),E(e.updates,t)]),this._applyEdits(e)}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,t){let o,i,l=null,p=null,f=null;for(const m of e){const u=m.geometry;if(!v(u)&&(l||(l=b(u)),p||(p=u.spatialReference),o==null&&(o=X(u)),i==null&&(i=Y(u)),l&&p&&o!=null&&i!=null))break}if(t&&t.length){let m=null;t.some(u=>{const a=u.type==="esriFieldTypeOID",r=!u.type&&u.name&&u.name.toLowerCase()==="objectid";return m=u,a||r})&&(f=m.name)}return{geometryType:l,spatialReference:p,objectIdField:f,hasM:i,hasZ:o}}_loadInitialFeatures(e,t){const{geometryType:o,hasM:i,hasZ:l,objectIdField:p,spatialReference:f,featureStore:m}=this._queryEngine,u=[];for(const a of t){if(a.uid!=null&&(e.assignedObjectIds[a.uid]=-1),a.geometry&&o!==b(a.geometry)){e.featureErrors.push(g("Incorrect geometry type."));continue}const r=this._createDefaultAttributes(),y=T(this._fieldsIndex,r,a.attributes,!0,e.warnings);y?e.featureErrors.push(y):(this._assignObjectId(r,a.attributes,!0),a.attributes=r,a.uid!=null&&(e.assignedObjectIds[a.uid]=a.attributes[p]),_(a.geometry)&&(a.geometry=j(a.geometry,a.geometry.spatialReference,f)),u.push(a))}if(m.addMany(q([],u,o,l,i,p)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:a,end:r}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[a,r]}return e}_applyEdits(e){const{adds:t,updates:o,deletes:i}=e,l={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(l,t),o&&o.length&&this._applyUpdateEdits(l,o),i&&i.length){for(const p of i)l.deleteResults.push(x(p));this._queryEngine.featureStore.removeManyById(i)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:l}}_applyAddEdits(e,t){const{addResults:o}=e,{geometryType:i,hasM:l,hasZ:p,objectIdField:f,spatialReference:m,featureStore:u}=this._queryEngine,a=[];for(const r of t){if(r.geometry&&i!==b(r.geometry)){o.push(g("Incorrect geometry type."));continue}const y=this._createDefaultAttributes(),d=T(this._fieldsIndex,y,r.attributes);if(d)o.push(d);else{if(this._assignObjectId(y,r.attributes),r.attributes=y,r.uid!=null){const n=r.attributes[f];e.uidToObjectId[r.uid]=n}if(_(r.geometry)){const n=r.geometry.spatialReference??m;r.geometry=j(w(r.geometry,n),n,m)}a.push(r),o.push(x(r.attributes[f]))}}u.addMany(q([],a,i,p,l,f))}_applyUpdateEdits({updateResults:e},t){const{geometryType:o,hasM:i,hasZ:l,objectIdField:p,spatialReference:f,featureStore:m}=this._queryEngine;for(const u of t){const{attributes:a,geometry:r}=u,y=a&&a[p];if(y==null){e.push(g(`Identifier field ${p} missing`));continue}if(!m.has(y)){e.push(g(`Feature with object id ${y} missing`));continue}const d=M(m.getFeature(y),o,l,i);if(_(r)){if(o!==b(r)){e.push(g("Incorrect geometry type."));continue}const n=r.spatialReference??f;d.geometry=j(w(r,n),n,f)}if(a){const n=T(this._fieldsIndex,d.attributes,a);if(n){e.push(n);continue}}m.add(Q(d,o,l,i,p)),e.push(x(y))}}_assignObjectId(e,t,o=!1){const i=this._queryEngine.objectIdField;o&&t&&isFinite(t[i])?e[i]=t[i]:e[i]=this._nextObjectId++}}export{ut as default};