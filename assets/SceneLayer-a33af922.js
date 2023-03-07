import{N as r,O as o,a0 as b,bb as P,iZ as M,ah as _,bY as L,eH as W,iK as O,jM as Z,bd as h,C as H,bj as z,aL as B,dZ as Y,t as m,U as D,fk as X,cD as ee,km as te,f9 as se,fa as re,fb as ie,iB as oe,fc as ae,iN as ne,r as p,eb as le,j7 as E,kn as pe,a3 as c,au as de,ag as ye,aR as ue,ct as ce,s as d,Z as he,iG as fe,W as me,_ as ge,jr as ve,eE as x,j as be,cJ as we,ko as Ie,kp as Le,k4 as Se,iQ as Fe,j9 as je,ja as _e,jb as $,jc as Oe,kq as Ee,iH as xe,iI as $e,aH as Te,jf as Ae,iJ as Re,eA as Pe}from"./index-4acc98f2.js";import{E as De,L as T}from"./SceneService-7fc875d1.js";import{t as Ne,u as Ue,l as qe}from"./FetchAssociatedFeatureLayer-099b9baf.js";import{s as N,l as Ce,u as ke,m as Qe}from"./I3SLayerDefinitions-defbbab3.js";import{g as Ge}from"./persistable-e6d29d59.js";import{d as Ve,s as Je}from"./popupUtils-ed0fc059.js";import"./originUtils-1469eeaf.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./resourceUtils-64a7fa2a.js";import"./mat3f64-221ce671.js";import"./mat4f64-1413b4a7.js";import"./quat-029c09f6.js";import"./quatf64-3363c48e.js";import"./I3SBinaryReader-5e13d50a.js";import"./VertexAttribute-15d1866a.js";import"./spatialReferenceEllipsoidUtils-aa9f4014.js";import"./symbolColorUtils-5119e410.js";import"./vec3f32-ad1dc57f.js";import"./plane-55863e58.js";import"./sphere-44de37ec.js";import"./resourceExtension-f2422fea.js";let y=class extends P{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};r([o({type:String,json:{read:!0,write:!0}})],y.prototype,"name",void 0),r([o({type:String,json:{read:!0,write:!0}})],y.prototype,"field",void 0),r([o({type:[Number],json:{read:!0,write:!0}})],y.prototype,"currentRangeExtent",void 0),r([o({type:[Number],json:{read:!0,write:!0}})],y.prototype,"fullRangeExtent",void 0),r([o({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],y.prototype,"type",void 0),y=r([b("esri.layers.support.RangeInfo")],y);var v;let S=v=class extends M(_.ofType(L)){constructor(e){super(e)}clone(){return new v(this.items.map(e=>e.clone()))}write(e,t){return this.toJSON(t)}toJSON(e){var s;const t=(s=e==null?void 0:e.layer)==null?void 0:s.spatialReference;return t?this.toArray().map(a=>{if(!t.equals(a.spatialReference)){if(!W(a.spatialReference,t))return e&&e.messages&&e.messages.push(new O("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),null;const l=new L;Z(a,l,t),a=l}const n=a.toJSON(e);return delete n.spatialReference,n}).filter(a=>a!=null):(e!=null&&e.messages&&e.messages.push(new O("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map(a=>a.toJSON(e)))}static fromJSON(e,t){const s=new v;return e.forEach(a=>s.add(L.fromJSON(a,t))),s}};S=v=r([b("esri.layers.support.PolygonCollection")],S);const F=S;var j;let f=j=class extends P{constructor(e){super(e),this.spatialRelationship="disjoint",this.geometries=new F,this._geometriesSource=null,this._handles=new H}initialize(){this._handles.add(z(()=>this.geometries,"after-changes",()=>this.geometries=this.geometries,B))}destroy(){this._handles.destroy()}readGeometries(e,t,s){this._geometriesSource={url:Y(e,s),context:s}}async loadGeometries(e,t){if(m(this._geometriesSource))return;const{url:s,context:a}=this._geometriesSource,n=await D(s,{responseType:"json",signal:X(t,"signal")}),l=e.toJSON(),u=n.data.map(w=>({...w,spatialReference:l}));this.geometries=F.fromJSON(u,a),this._geometriesSource=null}clone(){return new j({geometries:ee(this.geometries),spatialRelationship:this.spatialRelationship})}};r([o({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],f.prototype,"spatialRelationship",void 0),r([o({type:F,nonNullable:!0,json:{write:!0}}),Ge({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries"})],f.prototype,"geometries",void 0),r([h(["web-scene","portal-item"],"geometries")],f.prototype,"readGeometries",null),f=j=r([b("esri.layers.support.SceneFilter")],f);const Ke=f,Me=["3DObject","Point"],A=Re();let i=class extends te(De(se(re(ie(oe(ae(ne(Pe)))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new _,this.definitionExpression=null,this.filter=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.priority=null,this.semantic=null,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var a,n,l;const s=(n=(a=this.getFeatureType(t==null?void 0:t.feature))==null?void 0:a.domains)==null?void 0:n[e];return s&&s.type!=="inherited"?s:((l=this.getField(e))==null?void 0:l.domain)??null}getFeatureType(e){return e!=null&&p(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return p(this.associatedLayer)?this.associatedLayer.types??[]:[]}get typeIdField(){return p(this.associatedLayer)?this.associatedLayer.typeIdField:null}get formTemplate(){return p(this.associatedLayer)?this.associatedLayer.formTemplate:null}get fieldsIndex(){return new le(this.fields)}readNodePages(e,t,s){return t.layerType==="Point"&&(e=t.pointNodePages),e==null||typeof e!="object"?null:N.fromJSON(e,s)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get geometryType(){return We[this.profile]||"mesh"}set renderer(e){E(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return e!=null&&typeof e=="object"||(e={}),e.color==null&&(e.color=!1),e}get capabilities(){const e=p(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:Ne,{query:t,editing:{supportsGlobalId:s,supportsRollbackOnFailure:a,supportsUploadWithItemId:n,supportsGeometryUpdate:l,supportsReturnServiceEditsInSourceSpatialReference:u},data:{supportsZ:w,supportsM:U,isVersioned:q,supportsAttachment:C},operations:{supportsEditing:k,supportsAdd:Q,supportsUpdate:G,supportsDelete:V,supportsQuery:J,supportsQueryAttachments:K}}=e,g=e.operations.supportsChangeTracking,I=p(this.associatedLayer)&&p(this.associatedLayer.infoFor3D)&&pe();return{query:t,editing:{supportsGlobalId:s,supportsReturnServiceEditsInSourceSpatialReference:u,supportsRollbackOnFailure:a,supportsGeometryUpdate:I&&l,supportsUploadWithItemId:n},data:{supportsAttachment:C,supportsZ:w,supportsM:U,isVersioned:q},operations:{supportsQuery:J,supportsQueryAttachments:K,supportsEditing:k&&g,supportsAdd:I&&Q&&g,supportsDelete:I&&V&&g,supportsUpdate:G&&g}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.userHasEditingPrivileges}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}get infoFor3D(){return p(this.associatedLayer)?this.associatedLayer.infoFor3D:null}get defaultPopupTemplate(){return p(this.associatedLayer)||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some(s=>(s.type==="esriFieldTypeOID"&&(e=s.name),!!e)),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some(s=>(s.type==="esriFieldTypeGlobalID"&&(e=s.name),!!e)),e||void 0}get displayField(){return p(this.associatedLayer)?this.associatedLayer.displayField:null}readProfile(e,t){const s=t.store.profile;return s!=null&&R[s]?R[s]:(c.getLogger(this.declaredClass).error("Unknown or missing profile",{profile:s,layer:this}),"mesh-pyramids")}load(e){const t=p(e)?e.signal:null,s=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(de).then(()=>this._fetchService(t)).then(()=>Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t),p(this.filter)?this.filter.loadGeometries(this.spatialReference):null])).then(()=>this._validateElevationInfo()).then(()=>this._applyAssociatedLayerOverrides()).then(()=>this._populateFieldUsageInfo()).then(()=>ye(this,{origin:"service"},t)).then(()=>E(this.renderer,this.fieldsIndex)).then(()=>this.finishLoadEditablePortalLayer(e));return this.addResolvingPromise(s),Promise.resolve(this)}async beforeSave(){p(this.filter)&&await this.load()}createQuery(){const e=new ue;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e.outFields=["*"],e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then(s=>s.queryExtent(e||this.createQuery(),t))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then(s=>s.queryFeatureCount(e||this.createQuery(),t))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then(s=>s.queryFeatures(e||this.createQuery(),t)).then(s=>{if(s!=null&&s.features)for(const a of s.features)a.layer=this,a.sourceLayer=this;return s})}async queryCachedAttributes(e,t){const s=ce(this.fieldsIndex,await Ve(this,Je(this)));return Ue(this.parsedUrl.path,this.attributeStorageInfo??[],e,t,s)}async queryCachedFeature(e,t){const s=await this.queryCachedAttributes(e,[t]);if(!s||s.length===0)throw new d("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const a=new he;return a.attributes=s[0],a.layer=this,a.sourceLayer=this,a}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then(s=>s.queryObjectIds(e||this.createQuery(),t))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then(s=>s.queryAttachments(e,t))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(c.getLogger(this.declaredClass).error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return fe(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return p(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),m(this.associatedLayer))throw new d("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new d("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return this.statisticsInfo!=null&&this.statisticsInfo.some(t=>t.name===e)}async queryCachedStatistics(e,t){if(await this.load(t),!this.statisticsInfo)throw new d("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const s=this.fieldsIndex.get(e);if(!s)throw new d("scenelayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const a of this.statisticsInfo)if(a.name===s.name){const n=me(this.parsedUrl.path,a.href);return D(n,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then(l=>l.data)}throw new d("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(T.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(T.SAVE,e)}async applyEdits(e,t){const s=await ge(()=>import("./editingSupport-1e95403e.js"),["./editingSupport-1e95403e.js","./index-4acc98f2.js","./index-bb38b130.css","./assetEditingSupport-2cebf928.js"],import.meta.url);if(await this.load(),m(this.associatedLayer))throw new d(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),s.applyEdits(this,this.associatedLayer.source,e,t)}on(e,t){return super.on(e,t)}validateLayer(e){if(e.layerType&&!Me.includes(e.layerType))throw new d("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new d("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new d("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});function t(s,a){let n=!1,l=!1;if(s==null)n=!0,l=!0;else{const u=a&&a.isGeographic;switch(s){case"east-north-up":case"earth-centered":n=!0,l=u;break;case"vertex-reference-frame":n=!0,l=!u;break;default:n=!1}}if(!n)throw new d("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!l)throw new d("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}t(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if(this.profile==="points")e.push("Point");else{if(this.profile!=="mesh-pyramids")throw new d("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const t=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some(n=>n.name===e.name)),s=!!(p(this.associatedLayer)&&this.associatedLayer.fields&&this.associatedLayer.fields.some(n=>n&&e.name===n.name)),a={supportsLabelingInfo:t,supportsRenderer:t,supportsPopupTemplate:t||s,supportsLayerQuery:s};this._fieldUsageInfo[e.name]=a}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides()}_applyAssociatedLayerFieldsOverrides(){if(m(this.associatedLayer)||!this.associatedLayer.fields)return;let e=null;for(const t of this.associatedLayer.fields){const s=this.getField(t.name);s?(!s.domain&&t.domain&&(s.domain=t.domain.clone()),s.editable=t.editable,s.nullable=t.nullable,s.length=t.length):(e||(e=this.fields?this.fields.slice():[]),e.push(t.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if(m(this.associatedLayer))return;const e=["popupTemplate","popupEnabled"],t=ve(this);for(let s=0;s<e.length;s++){const a=e[s],n=this.originIdOf(a),l=this.associatedLayer.originIdOf(a);n<l&&(l===x.SERVICE||l===x.PORTAL_ITEM)&&t.setAtOrigin(a,this.associatedLayer[a],l)}}async _setAssociatedFeatureLayer(e){if(!["mesh-pyramids","points"].includes(this.profile))return;const t=new qe(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedLayer=await t.fetch()}catch(s){be(s)||this._logWarningOnPopupEnabled()}}async _logWarningOnPopupEnabled(){await we(()=>this.popupEnabled&&this.popupTemplate!=null);const e=`this SceneLayer: ${this.title}`;this.attributeStorageInfo==null?c.getLogger(this.declaredClass).warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):c.getLogger(this.declaredClass).info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`)}_validateElevationInfo(){const e=this.elevationInfo;e&&(this.profile==="mesh-pyramids"&&e.mode==="relative-to-scene"&&c.getLogger(this.declaredClass).warn(".elevationInfo=","Mesh scene layers don't support relative-to-scene elevation mode"),e.featureExpressionInfo&&e.featureExpressionInfo.expression!=="0"&&c.getLogger(this.declaredClass).warn(".elevationInfo=","Scene layers do not support featureExpressionInfo"))}};r([o({types:{key:"type",base:Ie,typeMap:{selection:Le}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],i.prototype,"featureReduction",void 0),r([o({type:[y],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],i.prototype,"rangeInfos",void 0),r([o({json:{read:!1}})],i.prototype,"associatedLayer",void 0),r([o({type:["show","hide"]})],i.prototype,"listMode",void 0),r([o({type:["ArcGISSceneServiceLayer"]})],i.prototype,"operationalLayerType",void 0),r([o({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),r([o({...A.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],i.prototype,"fields",void 0),r([o()],i.prototype,"types",null),r([o()],i.prototype,"typeIdField",null),r([o()],i.prototype,"formTemplate",null),r([o({readOnly:!0})],i.prototype,"fieldsIndex",null),r([o({type:Se,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],i.prototype,"floorInfo",void 0),r([o(A.outFields)],i.prototype,"outFields",void 0),r([o({type:N,readOnly:!0,json:{read:!1}})],i.prototype,"nodePages",void 0),r([h("service","nodePages",["nodePages","pointNodePages"])],i.prototype,"readNodePages",null),r([o({type:[Ce],readOnly:!0})],i.prototype,"materialDefinitions",void 0),r([o({type:[ke],readOnly:!0})],i.prototype,"textureSetDefinitions",void 0),r([o({type:[Qe],readOnly:!0})],i.prototype,"geometryDefinitions",void 0),r([o({readOnly:!0})],i.prototype,"serviceUpdateTimeStamp",void 0),r([o({readOnly:!0})],i.prototype,"attributeStorageInfo",void 0),r([o({readOnly:!0})],i.prototype,"statisticsInfo",void 0),r([o({type:_.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],i.prototype,"excludeObjectIds",void 0),r([o({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),r([o({type:Ke,json:{name:"layerDefinition.polygonFilter",write:{enabled:!0,allowNull:!0},origins:{service:{read:!1,write:!1}}}})],i.prototype,"filter",void 0),r([o({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),r([o(Fe)],i.prototype,"elevationInfo",null),r([o({type:String})],i.prototype,"geometryType",null),r([o(je)],i.prototype,"labelsVisible",void 0),r([o({type:[_e],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:$},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:$},write:!0}})],i.prototype,"labelingInfo",void 0),r([o(Oe)],i.prototype,"legendEnabled",void 0),r([o({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){var a,n;if(typeof e=="number"&&e>=0&&e<=1)return e;const s=(n=(a=t.layerDefinition)==null?void 0:a.drawingInfo)==null?void 0:n.transparency;return s!==void 0?Ee(s):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],i.prototype,"opacity",void 0),r([o({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],i.prototype,"priority",void 0),r([o({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],i.prototype,"semantic",void 0),r([o({types:xe,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],i.prototype,"renderer",null),r([o({json:{read:!1}})],i.prototype,"cachedDrawingInfo",void 0),r([h("service","cachedDrawingInfo")],i.prototype,"readCachedDrawingInfo",null),r([o({readOnly:!0,json:{read:!1}})],i.prototype,"capabilities",null),r([o({type:Boolean,json:{read:!1}})],i.prototype,"editingEnabled",null),r([o({readOnly:!0,json:{write:!1,read:!1}})],i.prototype,"infoFor3D",null),r([o($e)],i.prototype,"popupEnabled",void 0),r([o({type:Te,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),r([o({readOnly:!0,json:{read:!1}})],i.prototype,"defaultPopupTemplate",null),r([o({type:String,json:{read:!1}})],i.prototype,"objectIdField",void 0),r([h("service","objectIdField",["objectIdField","fields"])],i.prototype,"readObjectIdField",null),r([o({type:String,json:{read:!1}})],i.prototype,"globalIdField",void 0),r([h("service","globalIdField",["globalIdField","fields"])],i.prototype,"readGlobalIdField",null),r([o({readOnly:!0,type:String,json:{read:!1}})],i.prototype,"displayField",null),r([o({type:String,json:{read:!1}})],i.prototype,"profile",void 0),r([h("service","profile",["store.profile"])],i.prototype,"readProfile",null),r([o({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],i.prototype,"normalReferenceFrame",void 0),r([o(Ae)],i.prototype,"screenSizePerspectiveEnabled",void 0),i=r([b("esri.layers.SceneLayer")],i);const R={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},We={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"},ft=i;export{ft as default};
