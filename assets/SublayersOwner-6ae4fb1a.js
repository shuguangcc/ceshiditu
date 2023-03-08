import{e as a,y as o,n as k,C as y,K as P,s as Y,O as A,Q as Z}from"./cast-7928d7aa.js";import{U as K,j as ee,h as re}from"./request-d3e98716.js";import{f as te}from"./promiseUtils-6684e352.js";import{r as ie}from"./Version-9baeb7ac.js";import{r as M}from"./typedArrayUtil-a8b5b3e9.js";import{s as se,b as ae,T as j,v as q}from"./ensureType-cf29afa9.js";import{o as g,a as H,k as le,r as v}from"./Extent-69509002.js";import{j as oe,p as ne}from"./OperationalLayer-24e6fa34.js";import{j as J}from"./Collection-78126e82.js";import{l as ye}from"./CollectionFlattener-3dd1f479.js";import{a as w,s as E}from"./Error-653283ae.js";import{l as pe,U as ue}from"./reactiveUtils-f41a4e00.js";import{_ as C}from"./preload-helper-41c905a7.js";import"./geometry-5a216427.js";import{k as de}from"./PopupTemplate-6eb885db.js";import"./UniqueValueRenderer-103ec66d.js";import{b as ce,n as fe}from"./jsonUtils-c56f8821.js";import{e as he}from"./symbols-fa594797.js";import{a as be}from"./HandleOwner-e1406413.js";import{s as me}from"./Identifiable-aa6d459d.js";import{y as D}from"./string-cdf077e6.js";import{m as ge}from"./Loadable-48bc1293.js";import{O as Se}from"./MultiOriginJSONSupport-27362d57.js";import{t as Ie,p as ve}from"./LayerFloorInfo-2cd5e8ae.js";import{m as we}from"./arcgisLayerUrl-0b2b7691.js";import{n as Ee}from"./FeatureType-c83c5f49.js";import{y as Le}from"./Field-f5fc9f6b.js";import{r as xe}from"./FieldsIndex-aa6dd3fa.js";import{c as Oe,j as _e}from"./labelingInfo-5c3a46f6.js";import{c as R,x as Q,K as W}from"./Query-ff8c2cfb.js";import{p as De}from"./popupUtils-07fe66a7.js";import{i as U}from"./typeUtils-eb9416d0.js";import{t as Te}from"./sublayerUtils-ba7f61bc.js";const dr=r=>{let e=class extends r{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=void 0,this._allLayersAndTablesPromise=null,this._allLayersAndTablesMap=null}readCapabilities(t,i){const s=i.capabilities&&i.capabilities.split(",").map(z=>z.toLowerCase().trim());if(!s)return{operations:{supportsExportMap:!1,supportsExportTiles:!1,supportsIdentify:!1,supportsQuery:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const n=this.type,p=s.includes("data"),d=s.includes("query"),c=s.includes("map"),S=!!i.exportTilesAllowed,b=s.includes("tilemap"),m=n!=="tile"&&!!i.supportsDynamicLayers,L=n!=="tile"&&(!i.tileInfo||m),x=n!=="tile"&&(!i.tileInfo||m),u=n!=="tile",f=i.cimVersion&&ie.parse(i.cimVersion),O=(f==null?void 0:f.since(1,4))??!1,_=(f==null?void 0:f.since(2,0))??!1;return{operations:{supportsExportMap:c,supportsExportTiles:S,supportsIdentify:d,supportsQuery:p,supportsTileMap:b},exportMap:c?{supportsArcadeExpressionForLabeling:O,supportsSublayersChanges:u,supportsDynamicLayers:m,supportsSublayerVisibility:L,supportsSublayerDefinitionExpression:x,supportsCIMSymbols:_}:null,exportTiles:S?{maxExportTilesCount:+i.maxExportTilesCount}:null}}readVersion(t,i){let s=i.currentVersion;return s||(s=i.hasOwnProperty("capabilities")||i.hasOwnProperty("tables")?10:i.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),s}async fetchSublayerInfo(t,i){var s;return await this.fetchAllLayersAndTables(i),(s=this._allLayersAndTablesMap)==null?void 0:s.get(t)}async fetchAllLayersAndTables(t){await this.load(t),this._allLayersAndTablesPromise||(this._allLayersAndTablesPromise=K(ee(this.url).path+"/layers",{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey}}).then(s=>{this._allLayersAndTablesMap=new Map;for(const n of s.data.layers)this._allLayersAndTablesMap.set(n.id,n);return{result:s.data}},s=>({error:s})));const i=await this._allLayersAndTablesPromise;if(te(t),"result"in i)return i.result;throw i.error}};return a([o({readOnly:!0})],e.prototype,"capabilities",void 0),a([g("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],e.prototype,"readCapabilities",null),a([o({json:{read:{source:"copyrightText"}}})],e.prototype,"copyright",void 0),a([o({type:H})],e.prototype,"fullExtent",void 0),a([o(oe)],e.prototype,"id",void 0),a([o({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],e.prototype,"legendEnabled",void 0),a([o(ne)],e.prototype,"popupEnabled",void 0),a([o({type:le})],e.prototype,"spatialReference",void 0),a([o({readOnly:!0})],e.prototype,"version",void 0),a([g("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],e.prototype,"readVersion",null),e=a([k("esri.layers.mixins.ArcGISMapService")],e),e};var F;function V(r){return r&&r.type==="esriSMS"}function N(r,e,t){var s;const i=this.originIdOf(e)>=A(t.origin);return{ignoreOrigin:!0,allowNull:i,enabled:!!t&&((s=t.layer)==null?void 0:s.type)==="map-image"&&(t.writeSublayerStructure||i)}}function G(r,e,t){var i;return{enabled:!!t&&((i=t.layer)==null?void 0:i.type)==="tile"&&this._isOverridden(e)}}function h(r,e,t){return{ignoreOrigin:!0,enabled:t&&t.writeSublayerStructure||!1}}function T(r,e,t){return{ignoreOrigin:!0,enabled:!!t&&(t.writeSublayerStructure||this.originIdOf(e)>=A(t.origin))}}let Pe=0;const I=new Set;I.add("layer"),I.add("parent"),I.add("loaded"),I.add("loadStatus"),I.add("loadError"),I.add("loadWarnings");let l=F=class extends be(Se(me(ge))){constructor(r){super(r),this.capabilities=void 0,this.fields=null,this.fullExtent=null,this.geometryType=null,this.globalIdField=null,this.legendEnabled=!0,this.objectIdField=null,this.popupEnabled=!0,this.popupTemplate=null,this.sourceJSON=null,this.title=null,this.typeIdField=null,this.types=null}async load(r){return this.addResolvingPromise((async()=>{var t,i;if(!this.layer&&!this.url)throw new w("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this});let e=null;if(!this.layer||this.originIdOf("url")>y.SERVICE||((t=this.source)==null?void 0:t.type)==="data-layer")e=(await K(this.url,{responseType:"json",query:{f:"json"},...r})).data;else{let s=this.id;((i=this.source)==null?void 0:i.type)==="map-layer"&&(s=this.source.mapLayerId),e=await this.layer.fetchSublayerInfo(s,r)}e&&(this.sourceJSON=e,this.read({layerDefinition:e},{origin:"service"}))})()),this}readCapabilities(r,e){const t=(r=(e=e.layerDefinition||e).capabilities||r)?r.toLowerCase().split(",").map(n=>n.trim()):[],i=this.url?we(this.url):null,s=t.includes(M(i)&&i.serverType==="MapServer"?"data":"query");return{exportMap:{supportsModification:!!e.canModifyLayer},operations:{supportsQuery:s}}}set definitionExpression(r){this._setAndNotifyLayer("definitionExpression",r)}get fieldsIndex(){return new xe(this.fields||[])}set floorInfo(r){this._setAndNotifyLayer("floorInfo",r)}readGlobalIdFieldFromService(r,e){if((e=e.layerDefinition||e).globalIdField)return e.globalIdField;if(e.fields){for(const t of e.fields)if(t.type==="esriFieldTypeGlobalID")return t.name}}get id(){return this._get("id")??Pe++}set id(r){this._get("id")!==r&&(this.get("layer.capabilities.exportMap.supportsDynamicLayers")!==!1?this._set("id",r):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}set labelingInfo(r){this._setAndNotifyLayer("labelingInfo",r)}writeLabelingInfo(r,e,t,i){r&&r.length&&(e.layerDefinition={drawingInfo:{labelingInfo:r.map(s=>s.write({},i))}})}set labelsVisible(r){this._setAndNotifyLayer("labelsVisible",r)}set layer(r){this._set("layer",r),this.sublayers&&this.sublayers.forEach(e=>e.layer=r)}set listMode(r){this._set("listMode",r)}set minScale(r){this._setAndNotifyLayer("minScale",r)}readMinScale(r,e){return e.minScale||e.layerDefinition&&e.layerDefinition.minScale||0}set maxScale(r){this._setAndNotifyLayer("maxScale",r)}readMaxScale(r,e){return e.maxScale||e.layerDefinition&&e.layerDefinition.maxScale||0}get effectiveScaleRange(){const{minScale:r,maxScale:e}=this;return{minScale:r,maxScale:e}}readObjectIdFieldFromService(r,e){if((e=e.layerDefinition||e).objectIdField)return e.objectIdField;if(e.fields){for(const t of e.fields)if(t.type==="esriFieldTypeOID")return t.name}}set opacity(r){this._setAndNotifyLayer("opacity",r)}readOpacity(r,e){const t=e.layerDefinition;return 1-.01*(t.transparency!=null?t.transparency:t.drawingInfo.transparency)}writeOpacity(r,e,t,i){e.layerDefinition={drawingInfo:{transparency:100-100*r}}}writeParent(r,e){this.parent&&this.parent!==this.layer?e.parentLayerId=se(this.parent.id):e.parentLayerId=-1}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(r){if(r){for(const e of r.getSymbols())if(he(e)){E.getLogger(this.declaredClass).warn("Sublayer renderer should use 2D symbols");break}}this._setAndNotifyLayer("renderer",r)}get source(){return this._get("source")||new R({mapLayerId:this.id})}set source(r){this._setAndNotifyLayer("source",r)}set sublayers(r){this._handleSublayersChange(r,this._get("sublayers")),this._set("sublayers",r)}castSublayers(r){return ae(J.ofType(F),r)}writeSublayers(r,e,t){this.get("sublayers.length")&&(e[t]=this.sublayers.map(i=>i.id).toArray().reverse())}readTypeIdField(r,e){let t=(e=e.layerDefinition||e).typeIdField;if(t&&e.fields){t=t.toLowerCase();const i=e.fields.find(s=>s.name.toLowerCase()===t);i&&(t=i.name)}return t}get url(){var i;const r=((i=this.layer)==null?void 0:i.parsedUrl)??this._lastParsedUrl,e=this.source;if(!r)return null;if(this._lastParsedUrl=r,(e==null?void 0:e.type)==="map-layer")return`${r.path}/${e.mapLayerId}`;const t={layer:JSON.stringify({source:this.source})};return`${r.path}/dynamicLayer?${re(t)}`}set url(r){this._overrideIfSome("url",r)}set visible(r){this._setAndNotifyLayer("visible",r)}writeVisible(r,e,t,i){e[t]=this.getAtOrigin("defaultVisibility","service")||r}clone(){const{store:r}=P(this),e=new F;return P(e).store=r.clone(I),this.commitProperty("url"),e._lastParsedUrl=this._lastParsedUrl,e}createPopupTemplate(r){return De(this,r)}createQuery(){return new Q({returnGeometry:!0,where:this.definitionExpression||"1=1"})}async createFeatureLayer(){var t,i;if(this.hasOwnProperty("sublayers"))return null;const r=(t=this.layer)==null?void 0:t.parsedUrl,e=new(await C(()=>import("./FeatureLayer-a9f3e6ec.js"),["./FeatureLayer-a9f3e6ec.js","./preload-helper-41c905a7.js","./cast-7928d7aa.js","./typedArrayUtil-a8b5b3e9.js","./string-cdf077e6.js","./Error-653283ae.js","./ensureType-cf29afa9.js","./nextTick-3ee5a785.js","./promiseUtils-6684e352.js","./PopupTemplate-6eb885db.js","./Clonable-ba795b08.js","./Collection-78126e82.js","./Evented-515b9d9c.js","./SimpleObservable-7dcdef1d.js","./Extent-69509002.js","./Ellipsoid-89682c5e.js","./fieldUtils-31bfecd2.js","./arcadeOnDemand-c6d1b9f2.js","./geometry-5a216427.js","./Polyline-bf268e7b.js","./typeUtils-eb9416d0.js","./jsonMap-c1f958cf.js","./enumeration-3c281341.js","./number-347a3a44.js","./locale-30120714.js","./Identifiable-aa6d459d.js","./UniqueValueRenderer-103ec66d.js","./symbols-fa594797.js","./CIMSymbol-1379245a.js","./Symbol-fc4312a4.js","./Color-a42a8267.js","./colorUtils-639f4d25.js","./mathUtils-2519596a.js","./vec3-a020a6f6.js","./vec3f64-2f9cef06.js","./common-c186b691.js","./vec4-790471c0.js","./screenUtils-410d12c0.js","./opacityUtils-243aae26.js","./symbolLayerUtils3D-1f8d4478.js","./aaBoundingBox-fc742a4e.js","./aaBoundingRect-4a760199.js","./request-d3e98716.js","./persistableUrlUtils-a16d0f55.js","./Symbol3DAnchorPosition2D-c0f4a14d.js","./collectionUtils-3831b7c4.js","./Portal-8b65c9c4.js","./Loadable-48bc1293.js","./Promise-dfdee8ba.js","./PortalGroup-bfe93c76.js","./PortalUser-4c8e1adc.js","./LegendOptions-e65e7a9c.js","./reactiveUtils-f41a4e00.js","./diffUtils-1ac65748.js","./colorRamps-3a8ac20b.js","./sizeVariableUtils-d4870b0d.js","./visualVariableUtils-c59ab38d.js","./Graphic-b46e2684.js","./jsonUtils-03c4af61.js","./compilerUtils-034cacb8.js","./lengthUtils-d2d33f94.js","./unitUtils-47abac71.js","./jsonUtils-d7db3dc7.js","./styleUtils-4adfed9e.js","./jsonUtils-c56f8821.js","./DictionaryLoader-2cf5144e.js","./LRUCache-14115d91.js","./MemCache-4b976a8b.js","./deprecate-b9088bd3.js","./heatmapUtils-84e8c43b.js","./vec4f64-e407da96.js","./MultiOriginJSONSupport-27362d57.js","./LayerFloorInfo-2cd5e8ae.js","./FeatureLayerBase-aebdf2da.js","./Field-f5fc9f6b.js","./fieldType-b1002185.js","./HeightModelInfo-22ad72d7.js","./arcgisLayerUrl-0b2b7691.js","./OperationalLayer-24e6fa34.js","./TimeExtent-744afd75.js","./ElevationInfo-ce9cacc2.js","./RelationshipQuery-db5fcd0c.js","./Query-ff8c2cfb.js","./Layer-f0696768.js","./HandleOwner-e1406413.js","./workers-898a7c4c.js","./Connection-a681777e.js","./Queue-3a0c055d.js","./assets-0b172f07.js","./intl-f1e98361.js","./messages-be07754e.js","./editsZScale-2015e7db.js","./queryZScale-d9d8ef40.js","./zscale-1e1fc911.js","./FeatureSet-0573546e.js","./APIKeyMixin-34d76a46.js","./ArcGISService-ea748edf.js","./BlendLayer-d8293c8d.js","./parser-2b40deea.js","./mat4f32-77b3d8ac.js","./mat4-44a0988f.js","./CustomParametersMixin-807d2055.js","./EditBusLayer-40671d1a.js","./FeatureReductionLayer-4077b2ae.js","./labelingInfo-5c3a46f6.js","./labelUtils-a194a22a.js","./defaultsJSON-59981e75.js","./OrderedLayer-e7edf19c.js","./PortalLayer-f1a64f99.js","./asyncUtils-62e8a185.js","./PortalItem-aa42c739.js","./RefreshableLayer-1c078c47.js","./ScaleRangeLayer-271178b7.js","./TemporalLayer-39c07299.js","./TimeInfo-c89d0ef4.js","./FeatureTemplate-746d033e.js","./FeatureType-c83c5f49.js","./fieldProperties-7547b373.js","./FieldsIndex-aa6dd3fa.js","./versionUtils-92993d41.js","./styleUtils-da81b13f.js","./TopFeaturesQuery-785f5453.js","./popupUtils-07fe66a7.js"],import.meta.url)).default({url:r.path});return r&&this.source&&(this.source.type==="map-layer"?e.layerId=this.source.mapLayerId:e.dynamicDataSource=this.source),this.layer.refreshInterval!=null&&(e.refreshInterval=this.layer.refreshInterval),this.definitionExpression&&(e.definitionExpression=this.definitionExpression),this.floorInfo&&(e.floorInfo=D(this.floorInfo)),this.originIdOf("labelingInfo")>y.SERVICE&&(e.labelingInfo=D(this.labelingInfo)),this.originIdOf("labelsVisible")>y.DEFAULTS&&(e.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>y.DEFAULTS&&(e.legendEnabled=this.legendEnabled),this.originIdOf("visible")>y.DEFAULTS&&(e.visible=this.visible),this.originIdOf("minScale")>y.DEFAULTS&&(e.minScale=this.minScale),this.originIdOf("maxScale")>y.DEFAULTS&&(e.maxScale=this.maxScale),this.originIdOf("opacity")>y.DEFAULTS&&(e.opacity=this.opacity),this.originIdOf("popupTemplate")>y.DEFAULTS&&(e.popupTemplate=D(this.popupTemplate)),this.originIdOf("renderer")>y.SERVICE&&(e.renderer=D(this.renderer)),((i=this.source)==null?void 0:i.type)==="data-layer"&&(e.dynamicDataSource=this.source.clone()),this.originIdOf("title")>y.DEFAULTS&&(e.title=this.title),this.layer.type==="map-image"&&this.layer.originIdOf("customParameters")>y.DEFAULTS&&(e.customParameters=this.layer.customParameters),this.layer.type==="tile"&&this.layer.originIdOf("customParameters")>y.DEFAULTS&&(e.customParameters=this.layer.customParameters),e}getField(r){return this.fieldsIndex.get(r)}getFeatureType(r){const{typeIdField:e,types:t}=this;if(!e||!r)return null;const i=r.attributes?r.attributes[e]:void 0;if(i==null)return null;let s=null;return t.some(n=>{const{id:p}=n;return p!=null&&(p.toString()===i.toString()&&(s=n),!!s)}),s}getFieldDomain(r,e){const t=e&&e.feature,i=this.getFeatureType(t);if(i){const s=i.domains&&i.domains[r];if(s&&s.type!=="inherited")return s}return this._getLayerDomain(r)}async queryFeatures(r=this.createQuery(),e){var p,d,c,S,b;if(await this.load(),!((d=(p=this.capabilities)==null?void 0:p.operations)!=null&&d.supportsQuery))throw new w("Sublayer.queryFeatures","this layer doesn't support queries.");const[{executeQuery:t},{default:i}]=await Promise.all([C(()=>import("./query-922e6fbf.js").then(m=>m.q),["./query-922e6fbf.js","./request-d3e98716.js","./preload-helper-41c905a7.js","./Error-653283ae.js","./string-cdf077e6.js","./typedArrayUtil-a8b5b3e9.js","./promiseUtils-6684e352.js","./jsonUtils-03c4af61.js","./Extent-69509002.js","./cast-7928d7aa.js","./ensureType-cf29afa9.js","./nextTick-3ee5a785.js","./Ellipsoid-89682c5e.js","./Polyline-bf268e7b.js","./normalizeUtils-ee4bf39f.js","./geometry-5a216427.js","./typeUtils-eb9416d0.js","./jsonMap-c1f958cf.js","./pbfQueryUtils-72f9b45b.js","./pbf-e1a6c35b.js","./OptimizedFeature-3de538c1.js","./unitUtils-47abac71.js","./OptimizedFeatureSet-1d1ac4b9.js","./queryZScale-d9d8ef40.js","./zscale-1e1fc911.js"],import.meta.url),C(()=>import("./FeatureSet-0573546e.js"),["./FeatureSet-0573546e.js","./cast-7928d7aa.js","./typedArrayUtil-a8b5b3e9.js","./string-cdf077e6.js","./Error-653283ae.js","./ensureType-cf29afa9.js","./nextTick-3ee5a785.js","./promiseUtils-6684e352.js","./geometry-5a216427.js","./Extent-69509002.js","./Ellipsoid-89682c5e.js","./Polyline-bf268e7b.js","./typeUtils-eb9416d0.js","./jsonMap-c1f958cf.js","./Graphic-b46e2684.js","./PopupTemplate-6eb885db.js","./Clonable-ba795b08.js","./Collection-78126e82.js","./Evented-515b9d9c.js","./SimpleObservable-7dcdef1d.js","./fieldUtils-31bfecd2.js","./preload-helper-41c905a7.js","./arcadeOnDemand-c6d1b9f2.js","./enumeration-3c281341.js","./number-347a3a44.js","./locale-30120714.js","./Identifiable-aa6d459d.js","./symbols-fa594797.js","./CIMSymbol-1379245a.js","./Symbol-fc4312a4.js","./Color-a42a8267.js","./colorUtils-639f4d25.js","./mathUtils-2519596a.js","./vec3-a020a6f6.js","./vec3f64-2f9cef06.js","./common-c186b691.js","./vec4-790471c0.js","./screenUtils-410d12c0.js","./opacityUtils-243aae26.js","./symbolLayerUtils3D-1f8d4478.js","./aaBoundingBox-fc742a4e.js","./aaBoundingRect-4a760199.js","./request-d3e98716.js","./persistableUrlUtils-a16d0f55.js","./Symbol3DAnchorPosition2D-c0f4a14d.js","./collectionUtils-3831b7c4.js","./Portal-8b65c9c4.js","./Loadable-48bc1293.js","./Promise-dfdee8ba.js","./PortalGroup-bfe93c76.js","./PortalUser-4c8e1adc.js","./jsonUtils-03c4af61.js","./Field-f5fc9f6b.js","./fieldType-b1002185.js"],import.meta.url)]),s=await t(this.url,Q.from(r),((c=this.layer)==null?void 0:c.spatialReference)??null,{...e,query:{...(S=this.layer)==null?void 0:S.customParameters,token:(b=this.layer)==null?void 0:b.apiKey}}),n=i.fromJSON(s.data);if(n!=null&&n.features)for(const m of n.features)m.sourceLayer=this;return n}toExportImageJSON(r){var n;const e={id:this.id,source:((n=this.source)==null?void 0:n.toJSON())||{mapLayerId:this.id,type:"mapLayer"}},t=Ie(r,this.definitionExpression);M(t)&&(e.definitionExpression=t);const i=["renderer","labelingInfo","opacity","labelsVisible"].reduce((p,d)=>(p[d]=this.originIdOf(d),p),{});if(Object.keys(i).some(p=>i[p]>y.SERVICE)){const p=e.drawingInfo={};if(i.renderer>y.SERVICE&&(p.renderer=this.renderer?this.renderer.toJSON():null),i.labelsVisible>y.SERVICE&&(p.showLabels=this.labelsVisible),this.labelsVisible&&i.labelingInfo>y.SERVICE){!this.loaded&&this.labelingInfo.some(c=>!c.labelPlacement)&&E.getLogger(this.declaredClass).warnOnce(`A Sublayer (title: ${this.title}, id: ${this.id}) has an undefined 'labelPlacement' and so labels cannot be displayed. Either define a valid 'labelPlacement' or call Sublayer.load() to use a default value based on geometry type.`,{sublayer:this});let d=this.labelingInfo;M(this.geometryType)&&(d=Oe(this.labelingInfo,U.toJSON(this.geometryType))),p.labelingInfo=d.filter(c=>c.labelPlacement).map(c=>c.toJSON({origin:"service",layer:this.layer})),p.showLabels=!0}i.opacity>y.SERVICE&&(p.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(p.renderer)}return e}_assignDefaultSymbolColors(r){this._forEachSimpleMarkerSymbols(r,e=>{e.color||e.style!=="esriSMSX"&&e.style!=="esriSMSCross"||(e.outline&&e.outline.color?e.color=e.outline.color:e.color=[0,0,0,0])})}_forEachSimpleMarkerSymbols(r,e){if(r){const t="uniqueValueInfos"in r?r.uniqueValueInfos:"classBreakInfos"in r?r.classBreakInfos:[];for(const i of t)V(i.symbol)&&e(i.symbol);"symbol"in r&&V(r.symbol)&&e(r.symbol),"defaultSymbol"in r&&V(r.defaultSymbol)&&e(r.defaultSymbol)}}_setAndNotifyLayer(r,e){const t=this.layer,i=this._get(r);let s,n;switch(r){case"definitionExpression":case"floorInfo":s="supportsSublayerDefinitionExpression";case"minScale":case"maxScale":case"visible":s="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":s="supportsDynamicLayers",n="supportsModification"}const p=P(this).getDefaultOrigin();if(p!=="service"){if(s&&this.get(`layer.capabilities.exportMap.${s}`)===!1)return void this._logLockedError(r,`capability not available 'layer.capabilities.exportMap.${s}'`);if(n&&this.get(`capabilities.exportMap.${n}`)===!1)return void this._logLockedError(r,`capability not available 'capabilities.exportMap.${n}'`)}r!=="source"||this.loadStatus==="not-loaded"?(this._set(r,e),p!=="service"&&i!==e&&t&&t.emit&&t.emit("sublayer-update",{propertyName:r,target:this})):this._logLockedError(r,"'source' can't be changed after calling sublayer.load()")}_handleSublayersChange(r,e){e&&(e.forEach(t=>{t.parent=null,t.layer=null}),this.handles.removeAll()),r&&(r.forEach(t=>{t.parent=this,t.layer=this.layer}),this.handles.add([r.on("after-add",({item:t})=>{t.parent=this,t.layer=this.layer}),r.on("after-remove",({item:t})=>{t.parent=null,t.layer=null}),r.on("before-changes",t=>{const i=this.get("layer.capabilities.exportMap.supportsSublayersChanges");i==null||i||(E.getLogger(this.declaredClass).error(new w("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),t.preventDefault())})]))}_logLockedError(r,e){E.getLogger(this.declaredClass).error(new w("sublayer:locked",`Property '${String(r)}' can't be changed on Sublayer from the layer '${this.layer.id}'`,{reason:e,sublayer:this,layer:this.layer}))}_getLayerDomain(r){const e=this.fieldsIndex.get(r);return e?e.domain:null}};l.test={isMapImageLayerOverridePolicy:r=>r===h||r===N,isTileImageLayerOverridePolicy:r=>r===G},a([o({readOnly:!0})],l.prototype,"capabilities",void 0),a([g("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],l.prototype,"readCapabilities",null),a([o({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:N}}})],l.prototype,"definitionExpression",null),a([o({type:[Le],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],l.prototype,"fields",void 0),a([o({readOnly:!0})],l.prototype,"fieldsIndex",null),a([o({type:ve,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:N},origins:{"web-scene":{read:!1,write:!1}}}})],l.prototype,"floorInfo",null),a([o({type:H,json:{read:{source:"layerDefinition.extent"}}})],l.prototype,"fullExtent",void 0),a([o({type:U.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:U.read}}}}})],l.prototype,"geometryType",void 0),a([o({type:String})],l.prototype,"globalIdField",void 0),a([g("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],l.prototype,"readGlobalIdFieldFromService",null),a([o({type:j,json:{write:{ignoreOrigin:!0}}})],l.prototype,"id",null),a([o({value:null,type:[_e],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:h}}})],l.prototype,"labelingInfo",null),a([v("labelingInfo")],l.prototype,"writeLabelingInfo",null),a([o({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:h}}})],l.prototype,"labelsVisible",null),a([o({value:null})],l.prototype,"layer",null),a([o({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:T}}})],l.prototype,"legendEnabled",void 0),a([o({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],l.prototype,"listMode",null),a([o({type:Number,value:0,json:{write:{overridePolicy:h}}})],l.prototype,"minScale",null),a([g("minScale",["minScale","layerDefinition.minScale"])],l.prototype,"readMinScale",null),a([o({type:Number,value:0,json:{write:{overridePolicy:h}}})],l.prototype,"maxScale",null),a([g("maxScale",["maxScale","layerDefinition.maxScale"])],l.prototype,"readMaxScale",null),a([o({readOnly:!0})],l.prototype,"effectiveScaleRange",null),a([o({type:String})],l.prototype,"objectIdField",void 0),a([g("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],l.prototype,"readObjectIdFieldFromService",null),a([o({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:h}}})],l.prototype,"opacity",null),a([g("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],l.prototype,"readOpacity",null),a([v("opacity")],l.prototype,"writeOpacity",null),a([o({json:{type:j,write:{target:"parentLayerId",writerEnsuresNonNull:!0,overridePolicy:h}}})],l.prototype,"parent",void 0),a([v("parent")],l.prototype,"writeParent",null),a([o({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(r,e)=>!e.disablePopup},write:{target:"disablePopup",overridePolicy:T,writer(r,e,t){e[t]=!r}}}})],l.prototype,"popupEnabled",void 0),a([o({type:de,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:T}}})],l.prototype,"popupTemplate",void 0),a([o({readOnly:!0})],l.prototype,"defaultPopupTemplate",null),a([o({types:ce,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:h},origins:{"web-scene":{types:fe,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:h}}}}})],l.prototype,"renderer",null),a([o({types:{key:"type",base:null,typeMap:{"data-layer":W,"map-layer":R}},cast(r){if(r){if("mapLayerId"in r)return q(R,r);if("dataSource"in r)return q(W,r)}return r},json:{name:"layerDefinition.source",write:{overridePolicy:h}}})],l.prototype,"source",null),a([o()],l.prototype,"sourceJSON",void 0),a([o({value:null,json:{type:[j],write:{target:"subLayerIds",allowNull:!0,overridePolicy:h}}})],l.prototype,"sublayers",null),a([Y("sublayers")],l.prototype,"castSublayers",null),a([v("sublayers")],l.prototype,"writeSublayers",null),a([o({type:String,json:{name:"name",write:{overridePolicy:T}}})],l.prototype,"title",void 0),a([o({type:String})],l.prototype,"typeIdField",void 0),a([g("typeIdField",["layerDefinition.typeIdField"])],l.prototype,"readTypeIdField",null),a([o({type:[Ee],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],l.prototype,"types",void 0),a([o({type:String,json:{read:{source:"layerUrl"},write:{target:"layerUrl",overridePolicy:G}}})],l.prototype,"url",null),a([o({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:h}}})],l.prototype,"visible",null),a([v("visible")],l.prototype,"writeVisible",null),l=F=a([k("esri.layers.support.Sublayer")],l);const B=l,Fe=E.getLogger("esri.layers.TileLayer");function Ae(r,e){const t=[],i={};return r&&r.forEach(s=>{const n=new B;if(n.read(s,e),i[n.id]=n,s.parentLayerId!=null&&s.parentLayerId!==-1){const p=i[s.parentLayerId];p.sublayers||(p.sublayers=[]),p.sublayers.unshift(n)}else t.unshift(n)}),t}const $=J.ofType(B);function X(r,e){r&&r.forEach(t=>{e(t),t.sublayers&&t.sublayers.length&&X(t.sublayers,e)})}const cr=r=>{let e=class extends r{constructor(...t){super(...t),this.allSublayers=new ye({getCollections:()=>[this.sublayers],getChildrenFunction:i=>i.sublayers}),this.sublayersSourceJSON={[y.SERVICE]:{},[y.PORTAL_ITEM]:{},[y.WEB_SCENE]:{},[y.WEB_MAP]:{}},this.addHandles(pe(()=>this.sublayers,(i,s)=>this._handleSublayersChange(i,s),ue))}readSublayers(t,i){if(!i||!t)return;const{sublayersSourceJSON:s}=this,n=A(i.origin);if(n<y.SERVICE||(s[n]={context:i,visibleLayers:t.visibleLayers||s[n].visibleLayers,layers:t.layers||s[n].layers},n>y.SERVICE))return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:p,origin:d}=this.createSublayersForOrigin("web-document"),c=P(this);c.setDefaultOrigin(d),this._set("sublayers",new $(p)),c.setDefaultOrigin("user")}findSublayerById(t){return this.allSublayers.find(i=>i.id===t)}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(t){const i=A(t==="web-document"?"web-map":t);let s=y.SERVICE,n=this.sublayersSourceJSON[y.SERVICE].layers,p=this.sublayersSourceJSON[y.SERVICE].context,d=null;const c=[y.PORTAL_ITEM,y.WEB_SCENE,y.WEB_MAP].filter(u=>u<=i);for(const u of c){const f=this.sublayersSourceJSON[u];Te(f.layers)&&(s=u,n=f.layers,p=f.context,f.visibleLayers&&(d={visibleLayers:f.visibleLayers,context:f.context}))}const S=[y.PORTAL_ITEM,y.WEB_SCENE,y.WEB_MAP].filter(u=>u>s&&u<=i);let b=null;for(const u of S){const{layers:f,visibleLayers:O,context:_}=this.sublayersSourceJSON[u];f&&(b={layers:f,context:_}),O&&(d={visibleLayers:O,context:_})}const m=Ae(n,p),L=new Map,x=new Set;if(b)for(const u of b.layers)L.set(u.id,u);if(d)for(const u of d.visibleLayers)x.add(u);return X(m,u=>{b&&u.read(L.get(u.id),b.context),d&&u.read({defaultVisibility:x.has(u.id)},d.context)}),{origin:Z(s),sublayers:new $({items:m})}}read(t,i){super.read(t,i),this.readSublayers(t,i)}_handleSublayersChange(t,i){i&&(i.forEach(s=>{s.parent=null,s.layer=null}),this.handles.remove("sublayers-owner")),t&&(t.forEach(s=>{s.parent=this,s.layer=this}),this.handles.add([t.on("after-add",({item:s})=>{s.parent=this,s.layer=this}),t.on("after-remove",({item:s})=>{s.parent=null,s.layer=null})],"sublayers-owner"),this.type==="tile"&&this.handles.add(t.on("before-changes",s=>{Fe.error(new w("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),s.preventDefault()}),"sublayers-owner"))}};return a([o({readOnly:!0})],e.prototype,"allSublayers",void 0),a([o({readOnly:!0,type:J.ofType(B)})],e.prototype,"serviceSublayers",void 0),a([o({value:null,type:$,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],e.prototype,"sublayers",void 0),a([o({readOnly:!0})],e.prototype,"sublayersSourceJSON",void 0),e=a([k("esri.layers.mixins.SublayersOwner")],e),e};export{cr as E,dr as y,B as z};
