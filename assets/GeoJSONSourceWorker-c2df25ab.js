import{fs as g,eb as x,s as _,gT as C,fq as D,J as Q,j as v,a3 as G,aE as M,r as E,dT as P,e2 as Z,U as A,b8 as S,e3 as N,e5 as z,gU as U}from"./index-73a6a617.js";import{g as B}from"./FeatureStore-4534fbc5.js";import{f as F,g as b}from"./projectionSupport-a58ff3f1.js";import{e as J}from"./QueryEngine-9eaf229a.js";import{L,I as V,T as W}from"./geojson-a2c15a4d.js";import{o as H,a as Y,i as K}from"./clientSideDefaults-bc9baa86.js";import{w as X,m as w,f as T,a as I,g as R}from"./sourceUtils-d776db3e.js";import"./BoundsStore-0ba99cb3.js";import"./PooledRBush-ddfc6daa.js";import"./centroid-beabc414.js";import"./utils-c2265977.js";import"./json-48e3ea08.js";import"./QueryEngineResult-1cd07159.js";import"./quantizationUtils-4bceff61.js";import"./WhereClause-845726f2.js";import"./executionError-fb3f283a.js";import"./utils-c058a2ba.js";import"./generateRendererUtils-eaf6d126.js";import"./QueryEngineCapabilities-42e44ded.js";import"./timeSupport-fa3aa9b3.js";const ee={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class be{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(e,t={}){this._loadOptions={url:e.url,customParameters:e.customParameters};const n=[];await this._checkProjection(e.spatialReference);let i=null;e.url&&(i=await this._fetch(t==null?void 0:t.signal));const r=L(i,{geometryType:e.geometryType}),a=e.fields||r.fields||[],l=e.hasZ!=null?e.hasZ:r.hasZ,d=r.geometryType;let c=e.objectIdField||r.objectIdFieldName||"__OBJECTID";const y=e.spatialReference||g;let s=e.timeInfo;a===r.fields&&r.unknownFields.length>0&&n.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:r.unknownFields}});let u=new x(a).get(c);u?(u.type!=="esriFieldTypeString"&&(u.type="esriFieldTypeOID"),u.editable=!1,u.nullable=!1,c=u.name):(u={alias:c,name:c,type:r.objectIdFieldType==="string"?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},a.unshift(u));const h={};for(const o of a){if(o.name==null&&(o.name=o.alias),o.alias==null&&(o.alias=o.name),!o.name)throw new _("geojson-layer:invalid-field-name","field name is missing",{field:o});if(!C.jsonValues.includes(o.type))throw new _("geojson-layer:invalid-field-type",`invalid type for field "${o.name}"`,{field:o});if(o.name!==u.name){const f=D(o);f!==void 0&&(h[o.name]=f)}}this._fieldsIndex=new x(a);const p=this._fieldsIndex.requiredFields.indexOf(u);if(p>-1&&this._fieldsIndex.requiredFields.splice(p,1),s){if(s.startTimeField){const o=this._fieldsIndex.get(s.startTimeField);o?(s.startTimeField=o.name,o.type="esriFieldTypeDate"):s.startTimeField=null}if(s.endTimeField){const o=this._fieldsIndex.get(s.endTimeField);o?(s.endTimeField=o.name,o.type="esriFieldTypeDate"):s.endTimeField=null}if(s.trackIdField){const o=this._fieldsIndex.get(s.trackIdField);o?s.trackIdField=o.name:(s.trackIdField=null,n.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:s}}))}s.startTimeField||s.endTimeField||(n.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:s}}),s=null)}const $=d?H(d):void 0,m={warnings:n,featureErrors:[],layerDefinition:{...ee,drawingInfo:$??void 0,templates:Y(h),extent:void 0,geometryType:d,objectIdField:c,fields:a,hasZ:!!l,timeInfo:s}};this._queryEngine=new J({fields:a,geometryType:d,hasM:!1,hasZ:l,objectIdField:c,spatialReference:y,timeInfo:s,featureStore:new B({geometryType:d,hasM:!1,hasZ:l}),cacheSpatialQueries:!0}),this._createDefaultAttributes=K(h,c);const j=await this._createFeatures(i);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,j);const k=this._normalizeFeatures(j,m.warnings,m.featureErrors);this._queryEngine.featureStore.addMany(k);const{fullExtent:O,timeExtent:q}=await this._queryEngine.fetchRecomputedExtents();if(m.layerDefinition.extent=O,q){const{start:o,end:f}=q;m.layerDefinition.timeInfo.timeExtent=[o,f]}return m}async applyEdits(e){const{spatialReference:t,geometryType:n}=this._queryEngine;return await Promise.all([X(t,n),F(e.adds,t),F(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var i;this._loadOptions.customParameters=e,(i=this._snapshotTask)==null||i.abort(),this._snapshotTask=Q(this._snapshotFeatures),this._snapshotTask.promise.then(r=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,r);const a=this._normalizeFeatures(r);a&&this._queryEngine.featureStore.addMany(a)},r=>{this._queryEngine.featureStore.clear(),v(r)||G.getLogger("esri.layers.GeoJSONLayer").error(new _("geojson-layer:refresh","An error occurred during refresh",{error:r}))}),await this._waitSnapshotComplete();const{fullExtent:t,timeExtent:n}=await this._queryEngine.fetchRecomputedExtents();return{extent:t,timeExtent:n}}async _createFeatures(e){if(e==null)return[];const{geometryType:t,hasZ:n,objectIdField:i}=this._queryEngine,r=V(e,{geometryType:t,hasZ:n,objectIdField:i});if(!M(this._queryEngine.spatialReference,g))for(const a of r)E(a.geometry)&&(a.geometry=P(b(Z(a.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),g,this._queryEngine.spatialReference)));return r}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:n}=this._loadOptions,i=(await A(t,{responseType:"json",query:{...n},signal:e})).data;return await W(i),i}_normalizeFeatures(e,t,n){const{objectIdField:i}=this._queryEngine,r=[];for(const a of e){const l=this._createDefaultAttributes(),d=w(this._fieldsIndex,l,a.attributes,!0,t);d?n==null||n.push(d):(this._assignObjectId(l,a.attributes,!0),a.attributes=l,a.objectId=l[i],r.push(a))}return r}async _applyEdits(e){const{adds:t,updates:n,deletes:i}=e,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(r,t),n&&n.length&&this._applyUpdateEdits(r,n),i&&i.length){for(const d of i)r.deleteResults.push(T(d));this._queryEngine.featureStore.removeManyById(i)}const{fullExtent:a,timeExtent:l}=await this._queryEngine.fetchRecomputedExtents();return{extent:a,timeExtent:l,featureEditResults:r}}_applyAddEdits(e,t){const{addResults:n}=e,{geometryType:i,hasM:r,hasZ:a,objectIdField:l,spatialReference:d,featureStore:c}=this._queryEngine,y=[];for(const s of t){if(s.geometry&&i!==S(s.geometry)){n.push(I("Incorrect geometry type."));continue}const u=this._createDefaultAttributes(),h=w(this._fieldsIndex,u,s.attributes);if(h)n.push(h);else{if(this._assignObjectId(u,s.attributes),s.attributes=u,s.uid!=null){const p=s.attributes[l];e.uidToObjectId[s.uid]=p}if(E(s.geometry)){const p=s.geometry.spatialReference??d;s.geometry=b(R(s.geometry,p),p,d)}y.push(s),n.push(T(s.attributes[l]))}}c.addMany(N([],y,i,a,r,l))}_applyUpdateEdits({updateResults:e},t){const{geometryType:n,hasM:i,hasZ:r,objectIdField:a,spatialReference:l,featureStore:d}=this._queryEngine;for(const c of t){const{attributes:y,geometry:s}=c,u=y&&y[a];if(u==null){e.push(I(`Identifier field ${a} missing`));continue}if(!d.has(u)){e.push(I(`Feature with object id ${u} missing`));continue}const h=z(d.getFeature(u),n,r,i);if(E(s)){if(n!==S(s)){e.push(I("Incorrect geometry type."));continue}const p=s.spatialReference??l;h.geometry=b(R(s,p),p,l)}if(y){const p=w(this._fieldsIndex,h.attributes,y);if(p){e.push(p);continue}}d.add(U(h,n,r,i,a)),e.push(T(u))}}_createObjectIdGenerator(e,t){const n=e.fieldsIndex.get(e.objectIdField);if(n.type==="esriFieldTypeString")return()=>n.name+"-"+Date.now().toString(16);let i=Number.NEGATIVE_INFINITY;for(const r of t)r.objectId&&(i=Math.max(i,r.objectId));return i=Math.max(0,i)+1,()=>i++}_assignObjectId(e,t,n=!1){const i=this._queryEngine.objectIdField;e[i]=n&&i in t?t[i]:this._objectIdGenerator()}async _checkProjection(e){try{await F(g,e)}catch{throw new _("geojson-layer","Projection not supported")}}}export{be as default};
