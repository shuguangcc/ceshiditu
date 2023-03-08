import{e as o,y as p,n as h,X as u,m as f}from"./cast-7928d7aa.js";import{h as v,p as S,t as y,o as b,r as k}from"./typedArrayUtil-a8b5b3e9.js";import{p as C,f as L}from"./promiseUtils-6684e352.js";import"./ensureType-cf29afa9.js";import{d as w}from"./HandleOwner-e1406413.js";import{dF as H,dL as E}from"./index-455b69b8.js";import{n as $}from"./vec3f64-2f9cef06.js";import{h as I}from"./LercDecoder-73115fd2.js";import{E as O}from"./sphere-4f5e644f.js";import{E as g}from"./elevationInfoUtils-427916a5.js";import{o as P}from"./VertexSnappingCandidate-6fb04b2b.js";import"./string-cdf077e6.js";import"./Error-653283ae.js";import"./nextTick-3ee5a785.js";import"./reactiveUtils-f41a4e00.js";import"./Basemap-a8f7f439.js";import"./preload-helper-41c905a7.js";import"./Collection-78126e82.js";import"./Evented-515b9d9c.js";import"./SimpleObservable-7dcdef1d.js";import"./collectionUtils-3831b7c4.js";import"./deprecate-b9088bd3.js";import"./Loadable-48bc1293.js";import"./Promise-dfdee8ba.js";import"./loadAll-7fd968fe.js";import"./asyncUtils-62e8a185.js";import"./request-d3e98716.js";import"./Extent-69509002.js";import"./Ellipsoid-89682c5e.js";import"./Portal-8b65c9c4.js";import"./locale-30120714.js";import"./PortalGroup-bfe93c76.js";import"./jsonMap-c1f958cf.js";import"./PortalUser-4c8e1adc.js";import"./PortalItem-aa42c739.js";import"./assets-0b172f07.js";import"./messages-be07754e.js";import"./writeUtils-067c4f82.js";import"./layerUtils-034678f6.js";import"./Color-a42a8267.js";import"./colorUtils-639f4d25.js";import"./mathUtils-2519596a.js";import"./vec3-a020a6f6.js";import"./common-c186b691.js";import"./vec4-790471c0.js";import"./compilerUtils-034cacb8.js";import"./enumeration-3c281341.js";import"./opacityUtils-243aae26.js";import"./CollectionFlattener-3dd1f479.js";import"./TablesMixin-e7a6aab1.js";import"./Layer-f0696768.js";import"./geometry-5a216427.js";import"./Polyline-bf268e7b.js";import"./typeUtils-eb9416d0.js";import"./Identifiable-aa6d459d.js";import"./Graphic-b46e2684.js";import"./PopupTemplate-6eb885db.js";import"./Clonable-ba795b08.js";import"./fieldUtils-31bfecd2.js";import"./arcadeOnDemand-c6d1b9f2.js";import"./number-347a3a44.js";import"./symbols-fa594797.js";import"./CIMSymbol-1379245a.js";import"./Symbol-fc4312a4.js";import"./screenUtils-410d12c0.js";import"./symbolLayerUtils3D-1f8d4478.js";import"./aaBoundingBox-fc742a4e.js";import"./aaBoundingRect-4a760199.js";import"./persistableUrlUtils-a16d0f55.js";import"./Symbol3DAnchorPosition2D-c0f4a14d.js";import"./jsonUtils-03c4af61.js";import"./Cyclical-b66238c6.js";import"./workers-898a7c4c.js";import"./Connection-a681777e.js";import"./Queue-3a0c055d.js";import"./intl-f1e98361.js";import"./projection-d7b57a6c.js";import"./unitUtils-47abac71.js";import"./mat4-44a0988f.js";import"./zscale-1e1fc911.js";import"./TileInfo-34f80a8e.js";import"./widget-f7489a3f.js";import"./uuid-73213768.js";import"./dom-5b7af1bf.js";import"./byteSizeEstimations-f0cab514.js";import"./executeQueryJSON-bcd96e1a.js";import"./normalizeUtils-ee4bf39f.js";import"./query-922e6fbf.js";import"./pbfQueryUtils-72f9b45b.js";import"./pbf-e1a6c35b.js";import"./OptimizedFeature-3de538c1.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-d9d8ef40.js";import"./FeatureSet-0573546e.js";import"./Field-f5fc9f6b.js";import"./fieldType-b1002185.js";import"./Query-ff8c2cfb.js";import"./TimeExtent-744afd75.js";import"./RelationshipQuery-db5fcd0c.js";import"./LegendOptions-e65e7a9c.js";import"./utils-725f8b4e.js";import"./BlendLayer-d8293c8d.js";import"./parser-2b40deea.js";import"./mat4f32-77b3d8ac.js";import"./ItemCache-ee28c7ba.js";import"./MemCache-4b976a8b.js";import"./cimSymbolUtils-2e4dde89.js";import"./utils-c81a5c52.js";import"./jsonUtils-c56f8821.js";import"./UniqueValueRenderer-103ec66d.js";import"./diffUtils-1ac65748.js";import"./colorRamps-3a8ac20b.js";import"./sizeVariableUtils-d4870b0d.js";import"./visualVariableUtils-c59ab38d.js";import"./lengthUtils-d2d33f94.js";import"./jsonUtils-d7db3dc7.js";import"./styleUtils-4adfed9e.js";import"./DictionaryLoader-2cf5144e.js";import"./LRUCache-14115d91.js";import"./heatmapUtils-84e8c43b.js";import"./vec4f64-e407da96.js";import"./featureConversionUtils-01cdde8a.js";import"./TopFeaturesQuery-785f5453.js";import"./FeatureLayer-a9f3e6ec.js";import"./MultiOriginJSONSupport-27362d57.js";import"./LayerFloorInfo-2cd5e8ae.js";import"./FeatureLayerBase-aebdf2da.js";import"./HeightModelInfo-22ad72d7.js";import"./arcgisLayerUrl-0b2b7691.js";import"./OperationalLayer-24e6fa34.js";import"./ElevationInfo-ce9cacc2.js";import"./editsZScale-2015e7db.js";import"./APIKeyMixin-34d76a46.js";import"./ArcGISService-ea748edf.js";import"./CustomParametersMixin-807d2055.js";import"./EditBusLayer-40671d1a.js";import"./FeatureReductionLayer-4077b2ae.js";import"./labelingInfo-5c3a46f6.js";import"./labelUtils-a194a22a.js";import"./defaultsJSON-59981e75.js";import"./OrderedLayer-e7edf19c.js";import"./PortalLayer-f1a64f99.js";import"./RefreshableLayer-1c078c47.js";import"./ScaleRangeLayer-271178b7.js";import"./TemporalLayer-39c07299.js";import"./TimeInfo-c89d0ef4.js";import"./FeatureTemplate-746d033e.js";import"./FeatureType-c83c5f49.js";import"./fieldProperties-7547b373.js";import"./FieldsIndex-aa6dd3fa.js";import"./versionUtils-92993d41.js";import"./styleUtils-da81b13f.js";import"./popupUtils-07fe66a7.js";import"./colorUtils-82440b70.js";import"./mat2d-d0b91e3e.js";import"./Scheduler-8433672d.js";import"./GraphicsLayer-10573c27.js";import"./ViewingMode-5d7d590b.js";import"./enums-0fc02184.js";import"./vec2-2cef68de.js";import"./vec2f64-30dc1443.js";import"./mat3-3fc68e72.js";import"./mat3f32-d3d088e8.js";import"./vec2f32-461e65a9.js";import"./TileStrategy-4189758f.js";import"./TileStore-787dbea4.js";import"./TileKey-0750ad58.js";import"./rbush-8e36784a.js";import"./quickselect-322ec8e1.js";import"./capabilities-3636c6a4.js";import"./context-util-1e3c8cfc.js";import"./mat4f64-1e28eae0.js";import"./lineSegment-e6f72ff2.js";import"./plane-45609588.js";import"./scaleUtils-b32a50d8.js";import"./ElevationSamplerData-7decf898.js";import"./PhysicallyBasedRendering.glsl-a986c926.js";import"./View.glsl-8b12b8c2.js";import"./ShaderBuilder-93e8045e.js";import"./FloatPassUniform-d2dfc562.js";import"./Float4PassUniform-3a47b7b3.js";import"./RgbaFloatEncoding.glsl-6036ca34.js";import"./Texture2DPassUniform-6e8ae673.js";import"./vec3f32-c9aa289f.js";import"./VertexAttribute-9c5c630d.js";import"./Texture2DDrawUniform-22924c6f.js";import"./basicInterfaces-19ed850e.js";import"./PiUtils.glsl-0c0898f0.js";import"./ReadLinearDepth.glsl-7ff30f7d.js";import"./WaterSurface.glsl-fc8a5726.js";import"./ForwardLinearDepth.glsl-36f9eb3b.js";import"./Matrix3PassUniform-da8eddae.js";import"./mat3f64-c6305894.js";import"./Slice.glsl-a612de15.js";import"./Transform.glsl-f15542a7.js";import"./OutputHighlight.glsl-7364b03b.js";import"./MultipassTerrainTest.glsl-e79d40de.js";import"./NormalUtils.glsl-a59958d7.js";import"./AlphaCutoff-96178e0d.js";import"./TransparencyPassType-cd195b0e.js";import"./EvaluateSceneLighting.glsl-3bbc6edf.js";import"./VisualVariablePassParameters-5807c7dc.js";import"./enums-64ab819c.js";import"./VertexElementDescriptor-2925c6af.js";import"./FramebufferObject-50e1b68f.js";import"./Texture-e79b14e7.js";import"./Util-a48361c6.js";import"./SSAOBlur.glsl-c6f142fc.js";import"./ScreenSpacePass-00f8c8a4.js";import"./SSAO.glsl-6f3b4065.js";import"./ShaderTechniqueConfiguration-9f5b4555.js";import"./HUD.glsl-80cf9a21.js";import"./VerticalOffset.glsl-86460edb.js";import"./objectResourceUtils-ef6e3cdf.js";import"./devEnvironmentUtils-5002a058.js";import"./BufferView-646ba1de.js";import"./vec33-ce3aa99b.js";import"./DefaultMaterial_COLOR_GAMMA-9831d979.js";import"./types-e1c0a5bf.js";import"./Version-9baeb7ac.js";import"./quat-5b263584.js";import"./quatf64-7fd38d64.js";import"./Texture-bbae5d9d.js";import"./TextureOnly.glsl-18701a3b.js";import"./InterleavedLayout-5e9cf734.js";import"./MixExternalColor.glsl-25f0049c.js";import"./symbolColorUtils-604c5345.js";import"./ObjectAndLayerIdColor.glsl-73c19386.js";import"./OutputDepth.glsl-179f1d8f.js";import"./VisualVariables.glsl-b8290512.js";import"./DiscardOrAdjustAlphaBlend.glsl-5f837994.js";import"./Normals.glsl-90e28525.js";import"./DefaultMaterial.glsl-b4f4cbc5.js";import"./VertexColor.glsl-db21b96c.js";import"./DefaultTechniqueConfiguration-e8962072.js";import"./RealisticTree.glsl-2b30ed32.js";import"./edgeProcessing-3ca548e1.js";import"./deduplicate-b0bc48cc.js";import"./projection-aa2a8986.js";import"./Octree-1a841545.js";import"./HUDMaterial.glsl-4bf3c7df.js";import"./sdfPrimitives-a24e9cb2.js";import"./floatRGBA-fa8308d2.js";import"./dehydratedFeatures-4eeb381a.js";import"./quantizationUtils-33aba427.js";import"./labelFormatUtils-4d730eaa.js";import"./I3SUtil-3ffd3baa.js";import"./I3SBinaryReader-3d2c2faa.js";import"./LineCallout.glsl-a0056465.js";import"./earcut-58237617.js";import"./QueryEngineResult-665bf7fb.js";import"./WhereClause-2b5b05b2.js";import"./utils-30a9a7e0.js";import"./generateRendererUtils-a996108f.js";import"./utils-1f4fcfec.js";import"./json-48e3ea08.js";import"./MeshComponent-f50df6af.js";import"./MarkerSizing.glsl-c6fa192a.js";import"./RibbonLine.glsl-2a3b4d4e.js";import"./LineStipple.glsl-de782d6a.js";import"./callExpressionWithFeature-a7532499.js";import"./LineMarker.glsl-8f444621.js";import"./NativeLine.glsl-cdbbf172.js";import"./Path.glsl-60b36878.js";import"./ColorMaterial.glsl-8310ffb3.js";import"./Pattern.glsl-d3388745.js";import"./EffectView-d3bf37ed.js";import"./config-1337d16e.js";import"./workerHelper-c6d4a8cb.js";import"./Subtype-5b01b21f.js";import"./datetime-4f774298.js";import"./ExportImageParameters-f328a234.js";import"./sublayerUtils-ba7f61bc.js";import"./webStyleSymbolUtils-55ed91cd.js";import"./enums-4b2a86a0.js";let a=class extends w{constructor(t){super(t),this.availability=0,this._ids=new Set,this._tmpP=$()}destroy(){this._workerHandle.destroy(),this._workerHandle=null}initialize(){this._workerHandle=new R(this.schedule,{fetchAllEdgeLocations:(t,r)=>this._fetchAllEdgeLocations(t,r)})}async fetchCandidates(t,r){const i=t.coordinateHelper,e=i.toXYZ(t.point);this.renderCoordsHelper.toRenderCoords(e,i.spatialReference,e);const m=t.distance,c=typeof m=="number"?m:m.distance,s=await this._workerHandle.invoke({bounds:O(e[0],e[1],e[2],c),types:t.types},r);return s.candidates.sort((l,_)=>l.distance-_.distance),s.candidates.map(l=>this._convertCandidate(i,l))}async add(t,r){this._ids.add(t.id),await this._workerHandle.invokeMethod("add",t,r)}async remove(t,r){this._ids.delete(t.id),await this._workerHandle.invokeMethod("remove",t,r)}_convertCandidate(t,r){switch(r.type){case"edge":return new H({coordinateHelper:t,objectId:r.objectId,targetPoint:this._convertRenderCoordinate(t,r.target),edgeStart:this._convertRenderCoordinate(t,r.start),edgeEnd:this._convertRenderCoordinate(t,r.end),elevationInfo:g});case"vertex":return new P({coordinateHelper:t,objectId:r.objectId,targetPoint:this._convertRenderCoordinate(t,r.target),elevationInfo:g})}}_convertRenderCoordinate(t,r){return this.renderCoordsHelper.fromRenderCoords(r,this._tmpP,t.spatialReference),t.fromXYZ(this._tmpP)}async _fetchAllEdgeLocations(t,r){const i=[],e=[];for(const{id:m,uid:c}of t.components)this._ids.has(m)&&i.push((async()=>{const s=await this.fetchEdgeLocations(m,r.signal);return e.push(s.locations.buffer),{id:m,uid:c,objectIds:s.objectIds,locations:s.locations.buffer,origin:s.origin,type:s.type}})());return{result:{components:(await Promise.all(i)).filter(({id:m})=>this._ids.has(m))},transferList:e}}};o([p({constructOnly:!0})],a.prototype,"renderCoordsHelper",void 0),o([p({constructOnly:!0})],a.prototype,"fetchEdgeLocations",void 0),o([p({constructOnly:!0})],a.prototype,"schedule",void 0),o([p({readOnly:!0})],a.prototype,"availability",void 0),a=o([h("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],a);class R extends I{constructor(r,i){super("SceneLayerSnappingSourceWorker","fetchCandidates",{},r,{strategy:"dedicated",client:i})}}let n=class extends w{constructor(t){super(t),this.availability=1,this._abortController=new AbortController}get updating(){return this.updatingHandles.updating}destroy(){this._tracker=v(this._tracker),this._abortController=S(this._abortController)}initialize(){const{view:t}=this,r=t.resourceController;this._edgeWorker=new E(i=>r.schedule(i)),this._workerHandle=new a({renderCoordsHelper:this.view.renderCoordsHelper,schedule:i=>r.schedule(i),fetchEdgeLocations:async(i,e)=>{if(y(this._tracker))throw new Error("tracker-not-initialized");return this._tracker.fetchEdgeLocations(i,this._edgeWorker,e)}}),this.updatingHandles.addPromise(this._setupLayerView()),this.handles.add([u(this._workerHandle),u(this._edgeWorker)])}async fetchCandidates(t,r){return this._workerHandle.fetchCandidates(t,r)}refresh(){}async _setupLayerView(){if(this.destroyed)return;const t=b(this._abortController,i=>i.signal),r=await this.getLayerView();y(r)||C(t)||(this._tracker=r.trackSnappingSources({add:(i,e)=>{this.updatingHandles.addPromise(this._workerHandle.add({id:i,bounds:e},t))},remove:i=>{this.updatingHandles.addPromise(this._workerHandle.remove({id:i},t))}}))}};o([p({constructOnly:!0})],n.prototype,"getLayerView",void 0),o([p({constructOnly:!0})],n.prototype,"view",void 0),o([p({readOnly:!0})],n.prototype,"updating",null),o([p({readOnly:!0})],n.prototype,"availability",void 0),n=o([h("esri.views.interactive.snapping.featureSources.I3SSnappingSource")],n);let d=class extends f{constructor(t){super(t),this.availability=1,this._i3sSources=[]}get updating(){return this._i3sSources.some(t=>t.updating)}destroy(){this._i3sSources.forEach(t=>t.destroy()),this._i3sSources.length=0}initialize(){const{view:t}=this,r=this.layerSource.layer;this._i3sSources=r.type==="building-scene"?this._getBuildingSceneI3SSources(t,r):[this._getSceneLayerI3SSource(t,r)]}async fetchCandidates(t,r){const i=await Promise.all(this._i3sSources.map(e=>e.fetchCandidates(t,r)));return L(r),i.flat()}refresh(){this._i3sSources.forEach(t=>t.refresh())}_getBuildingSceneI3SSources(t,r){return r.allSublayers.toArray().map(i=>i.type==="building-component"?new n({getLayerView:async()=>(await t.whenLayerView(r)).whenSublayerView(i),view:t}):null).filter(k)}_getSceneLayerI3SSource(t,r){return new n({getLayerView:async()=>{const i=await t.whenLayerView(r);return i.type==="scene-layer-graphics-3d"?void 0:i},view:t})}};o([p({constructOnly:!0})],d.prototype,"layerSource",void 0),o([p({constructOnly:!0})],d.prototype,"view",void 0),o([p({readOnly:!0})],d.prototype,"updating",null),o([p({readOnly:!0})],d.prototype,"availability",void 0),d=o([h("esri.views.interactive.snapping.featureSources.SceneLayerSnappingSource")],d);export{d as SceneLayerSnappingSource};