import{e as a,y as c,n as g}from"./cast-7928d7aa.js";import{s as w}from"./Error-653283ae.js";import{j as h}from"./promiseUtils-6684e352.js";import{l as I}from"./reactiveUtils-f41a4e00.js";import"./typedArrayUtil-a8b5b3e9.js";import"./ensureType-cf29afa9.js";import{E as V}from"./Extent-69509002.js";import{t as T,o as f,n as d}from"./imageUtils-8298e401.js";import{y as v}from"./LayerView2D-9c021b91.js";import{h as q}from"./TileStore-787dbea4.js";import{e as y}from"./TileKey-0750ad58.js";import{y as Q,r as S}from"./TileStrategy-4189758f.js";import{u as U}from"./LayerView-b83ced89.js";import{i as b}from"./RefreshableLayerView-1faf24ee.js";import{i as C}from"./TileLayerView-71fcdeb9.js";import{Z as k}from"./index-455b69b8.js";import"./string-cdf077e6.js";import"./nextTick-3ee5a785.js";import"./Ellipsoid-89682c5e.js";import"./BitmapTileContainer-6fc690f1.js";import"./aaBoundingRect-4a760199.js";import"./mathUtils-2519596a.js";import"./vec3-a020a6f6.js";import"./vec3f64-2f9cef06.js";import"./common-c186b691.js";import"./vec4-790471c0.js";import"./mat3f32-d3d088e8.js";import"./Bitmap-c332c5e6.js";import"./mat3-3fc68e72.js";import"./vec2f32-461e65a9.js";import"./EffectView-d3bf37ed.js";import"./Evented-515b9d9c.js";import"./vec2f64-30dc1443.js";import"./context-util-1e3c8cfc.js";import"./enums-64ab819c.js";import"./Texture-e79b14e7.js";import"./VertexElementDescriptor-2925c6af.js";import"./parser-2b40deea.js";import"./colorUtils-639f4d25.js";import"./screenUtils-410d12c0.js";import"./mat4f32-77b3d8ac.js";import"./mat4-44a0988f.js";import"./WGLContainer-14075e1a.js";import"./WGLBrushVTLSymbol-dcfd88b4.js";import"./definitions-2d0dd0cd.js";import"./enums-4ca4641f.js";import"./number-954e4ab6.js";import"./FramebufferObject-50e1b68f.js";import"./StyleDefinition-7d58136b.js";import"./enums-4b2a86a0.js";import"./config-1337d16e.js";import"./GeometryUtils-c093d234.js";import"./pixelUtils-c27b13a1.js";import"./Utils-b2b4cf0c.js";import"./ShaderCompiler-77d0dcb6.js";import"./ProgramTemplate-afbd57f8.js";import"./MaterialKey-406a59ab.js";import"./alignmentUtils-ae955d28.js";import"./utils-26560131.js";import"./heatmapUtils-84e8c43b.js";import"./vec4f64-e407da96.js";import"./Color-a42a8267.js";import"./heatmapTextureUtils-d1d96768.js";import"./earcut-58237617.js";import"./vec2-2cef68de.js";import"./featureConversionUtils-01cdde8a.js";import"./jsonUtils-03c4af61.js";import"./Polyline-bf268e7b.js";import"./OptimizedFeature-3de538c1.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./TileContainer-07bccb79.js";import"./Collection-78126e82.js";import"./SimpleObservable-7dcdef1d.js";import"./collectionUtils-3831b7c4.js";import"./geometry-5a216427.js";import"./typeUtils-eb9416d0.js";import"./jsonMap-c1f958cf.js";import"./Queue-3a0c055d.js";import"./rbush-8e36784a.js";import"./quickselect-322ec8e1.js";import"./Query-ff8c2cfb.js";import"./TimeExtent-744afd75.js";import"./enumeration-3c281341.js";import"./Field-f5fc9f6b.js";import"./fieldType-b1002185.js";import"./Clonable-ba795b08.js";import"./HandleOwner-e1406413.js";import"./Identifiable-aa6d459d.js";import"./Promise-dfdee8ba.js";import"./Basemap-a8f7f439.js";import"./preload-helper-41c905a7.js";import"./deprecate-b9088bd3.js";import"./Loadable-48bc1293.js";import"./loadAll-7fd968fe.js";import"./asyncUtils-62e8a185.js";import"./request-d3e98716.js";import"./Portal-8b65c9c4.js";import"./locale-30120714.js";import"./PortalGroup-bfe93c76.js";import"./PortalUser-4c8e1adc.js";import"./PortalItem-aa42c739.js";import"./assets-0b172f07.js";import"./messages-be07754e.js";import"./writeUtils-067c4f82.js";import"./layerUtils-034678f6.js";import"./compilerUtils-034cacb8.js";import"./opacityUtils-243aae26.js";import"./CollectionFlattener-3dd1f479.js";import"./TablesMixin-e7a6aab1.js";import"./Layer-f0696768.js";import"./Graphic-b46e2684.js";import"./PopupTemplate-6eb885db.js";import"./fieldUtils-31bfecd2.js";import"./arcadeOnDemand-c6d1b9f2.js";import"./number-347a3a44.js";import"./symbols-fa594797.js";import"./CIMSymbol-1379245a.js";import"./Symbol-fc4312a4.js";import"./symbolLayerUtils3D-1f8d4478.js";import"./aaBoundingBox-fc742a4e.js";import"./persistableUrlUtils-a16d0f55.js";import"./Symbol3DAnchorPosition2D-c0f4a14d.js";import"./Cyclical-b66238c6.js";import"./workers-898a7c4c.js";import"./Connection-a681777e.js";import"./intl-f1e98361.js";import"./projection-d7b57a6c.js";import"./unitUtils-47abac71.js";import"./zscale-1e1fc911.js";import"./TileInfo-34f80a8e.js";import"./widget-f7489a3f.js";import"./uuid-73213768.js";import"./dom-5b7af1bf.js";import"./byteSizeEstimations-f0cab514.js";import"./executeQueryJSON-bcd96e1a.js";import"./normalizeUtils-ee4bf39f.js";import"./query-922e6fbf.js";import"./pbfQueryUtils-72f9b45b.js";import"./pbf-e1a6c35b.js";import"./queryZScale-d9d8ef40.js";import"./FeatureSet-0573546e.js";import"./RelationshipQuery-db5fcd0c.js";import"./LegendOptions-e65e7a9c.js";import"./utils-725f8b4e.js";import"./BlendLayer-d8293c8d.js";import"./ItemCache-ee28c7ba.js";import"./MemCache-4b976a8b.js";import"./cimSymbolUtils-2e4dde89.js";import"./utils-c81a5c52.js";import"./jsonUtils-c56f8821.js";import"./UniqueValueRenderer-103ec66d.js";import"./diffUtils-1ac65748.js";import"./colorRamps-3a8ac20b.js";import"./sizeVariableUtils-d4870b0d.js";import"./visualVariableUtils-c59ab38d.js";import"./lengthUtils-d2d33f94.js";import"./jsonUtils-d7db3dc7.js";import"./styleUtils-4adfed9e.js";import"./DictionaryLoader-2cf5144e.js";import"./LRUCache-14115d91.js";import"./TopFeaturesQuery-785f5453.js";import"./FeatureLayer-a9f3e6ec.js";import"./MultiOriginJSONSupport-27362d57.js";import"./LayerFloorInfo-2cd5e8ae.js";import"./FeatureLayerBase-aebdf2da.js";import"./HeightModelInfo-22ad72d7.js";import"./arcgisLayerUrl-0b2b7691.js";import"./OperationalLayer-24e6fa34.js";import"./ElevationInfo-ce9cacc2.js";import"./editsZScale-2015e7db.js";import"./APIKeyMixin-34d76a46.js";import"./ArcGISService-ea748edf.js";import"./CustomParametersMixin-807d2055.js";import"./EditBusLayer-40671d1a.js";import"./FeatureReductionLayer-4077b2ae.js";import"./labelingInfo-5c3a46f6.js";import"./labelUtils-a194a22a.js";import"./defaultsJSON-59981e75.js";import"./OrderedLayer-e7edf19c.js";import"./PortalLayer-f1a64f99.js";import"./RefreshableLayer-1c078c47.js";import"./ScaleRangeLayer-271178b7.js";import"./TemporalLayer-39c07299.js";import"./TimeInfo-c89d0ef4.js";import"./FeatureTemplate-746d033e.js";import"./FeatureType-c83c5f49.js";import"./fieldProperties-7547b373.js";import"./FieldsIndex-aa6dd3fa.js";import"./versionUtils-92993d41.js";import"./styleUtils-da81b13f.js";import"./popupUtils-07fe66a7.js";import"./colorUtils-82440b70.js";import"./mat2d-d0b91e3e.js";import"./Scheduler-8433672d.js";import"./GraphicsLayer-10573c27.js";import"./ViewingMode-5d7d590b.js";import"./enums-0fc02184.js";import"./capabilities-3636c6a4.js";import"./sphere-4f5e644f.js";import"./mat3f64-c6305894.js";import"./mat4f64-1e28eae0.js";import"./quatf64-7fd38d64.js";import"./lineSegment-e6f72ff2.js";import"./plane-45609588.js";import"./scaleUtils-b32a50d8.js";import"./ElevationSamplerData-7decf898.js";import"./PhysicallyBasedRendering.glsl-a986c926.js";import"./View.glsl-8b12b8c2.js";import"./ShaderBuilder-93e8045e.js";import"./FloatPassUniform-d2dfc562.js";import"./Float4PassUniform-3a47b7b3.js";import"./RgbaFloatEncoding.glsl-6036ca34.js";import"./Texture2DPassUniform-6e8ae673.js";import"./vec3f32-c9aa289f.js";import"./VertexAttribute-9c5c630d.js";import"./Texture2DDrawUniform-22924c6f.js";import"./basicInterfaces-19ed850e.js";import"./PiUtils.glsl-0c0898f0.js";import"./ReadLinearDepth.glsl-7ff30f7d.js";import"./WaterSurface.glsl-fc8a5726.js";import"./ForwardLinearDepth.glsl-36f9eb3b.js";import"./Matrix3PassUniform-da8eddae.js";import"./Slice.glsl-a612de15.js";import"./Transform.glsl-f15542a7.js";import"./OutputHighlight.glsl-7364b03b.js";import"./MultipassTerrainTest.glsl-e79d40de.js";import"./NormalUtils.glsl-a59958d7.js";import"./AlphaCutoff-96178e0d.js";import"./TransparencyPassType-cd195b0e.js";import"./EvaluateSceneLighting.glsl-3bbc6edf.js";import"./VisualVariablePassParameters-5807c7dc.js";import"./Util-a48361c6.js";import"./SSAOBlur.glsl-c6f142fc.js";import"./ScreenSpacePass-00f8c8a4.js";import"./SSAO.glsl-6f3b4065.js";import"./ShaderTechniqueConfiguration-9f5b4555.js";import"./HUD.glsl-80cf9a21.js";import"./VerticalOffset.glsl-86460edb.js";import"./objectResourceUtils-ef6e3cdf.js";import"./devEnvironmentUtils-5002a058.js";import"./BufferView-646ba1de.js";import"./vec33-ce3aa99b.js";import"./DefaultMaterial_COLOR_GAMMA-9831d979.js";import"./types-e1c0a5bf.js";import"./Version-9baeb7ac.js";import"./quat-5b263584.js";import"./Texture-bbae5d9d.js";import"./TextureOnly.glsl-18701a3b.js";import"./InterleavedLayout-5e9cf734.js";import"./MixExternalColor.glsl-25f0049c.js";import"./symbolColorUtils-604c5345.js";import"./ObjectAndLayerIdColor.glsl-73c19386.js";import"./OutputDepth.glsl-179f1d8f.js";import"./VisualVariables.glsl-b8290512.js";import"./DiscardOrAdjustAlphaBlend.glsl-5f837994.js";import"./Normals.glsl-90e28525.js";import"./DefaultMaterial.glsl-b4f4cbc5.js";import"./VertexColor.glsl-db21b96c.js";import"./DefaultTechniqueConfiguration-e8962072.js";import"./RealisticTree.glsl-2b30ed32.js";import"./edgeProcessing-3ca548e1.js";import"./deduplicate-b0bc48cc.js";import"./projection-aa2a8986.js";import"./Octree-1a841545.js";import"./HUDMaterial.glsl-4bf3c7df.js";import"./sdfPrimitives-a24e9cb2.js";import"./floatRGBA-fa8308d2.js";import"./dehydratedFeatures-4eeb381a.js";import"./quantizationUtils-33aba427.js";import"./labelFormatUtils-4d730eaa.js";import"./I3SUtil-3ffd3baa.js";import"./I3SBinaryReader-3d2c2faa.js";import"./LineCallout.glsl-a0056465.js";import"./QueryEngineResult-665bf7fb.js";import"./WhereClause-2b5b05b2.js";import"./utils-30a9a7e0.js";import"./generateRendererUtils-a996108f.js";import"./utils-1f4fcfec.js";import"./json-48e3ea08.js";import"./MeshComponent-f50df6af.js";import"./MarkerSizing.glsl-c6fa192a.js";import"./RibbonLine.glsl-2a3b4d4e.js";import"./LineStipple.glsl-de782d6a.js";import"./callExpressionWithFeature-a7532499.js";import"./LineMarker.glsl-8f444621.js";import"./NativeLine.glsl-cdbbf172.js";import"./Path.glsl-60b36878.js";import"./ColorMaterial.glsl-8310ffb3.js";import"./Pattern.glsl-d3388745.js";import"./LercDecoder-73115fd2.js";import"./workerHelper-c6d4a8cb.js";import"./Subtype-5b01b21f.js";import"./datetime-4f774298.js";import"./elevationInfoUtils-427916a5.js";import"./ExportImageParameters-f328a234.js";import"./sublayerUtils-ba7f61bc.js";import"./webStyleSymbolUtils-55ed91cd.js";const R=[0,0];let p=class extends C(b(T(v(U)))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||this.layer.resampling!==!1}update(t){this._fetchQueue.pause(),this._fetchQueue.state=t.state,this._tileStrategy.update(t),this._fetchQueue.resume()}attach(){const t="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new q(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new Q({tileInfoView:this._tileInfoView,concurrency:t&&10*t.length||10,process:(i,r)=>this.fetchTile(i,r)}),this._tileStrategy=new S({cachePolicy:"keep",resampling:this.resampling,acquireTile:i=>this.acquireTile(i),releaseTile:i=>this.releaseTile(i),tileInfoView:this._tileInfoView}),this.requestUpdate(),this.handles.add(I(()=>this.resampling,()=>{this.doRefresh()})),super.attach()}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){var i;return V((i=this.layer.tileInfo)==null?void 0:i.spatialReference,t)}createFetchPopupFeaturesQueryGeometry(t,i){return k(t,i,this.view)}async doRefresh(){!this.attached||this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(t=>this._enqueueTileFetch(t)))}isUpdating(){var t;return((t=this._fetchQueue)==null?void 0:t.updating)??!1}acquireTile(t){const i=this._bitmapView.createTile(t),r=i.bitmap;return[r.x,r.y]=this._tileInfoView.getTileCoords(R,i.key),r.resolution=this._tileInfoView.getTileResolution(i.key),[r.width,r.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(i),this._bitmapView.addChild(i),this.requestUpdate(),i}releaseTile(t){this._fetchQueue.abort(t.key.id),this._bitmapView.removeChild(t),t.once("detach",()=>t.destroy()),this.requestUpdate()}async fetchTile(t,i={}){const r="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:m,resamplingLevel:l=0}=i;if(!r)try{return await this._fetchImage(t,m)}catch(o){if(!h(o)&&!this.resampling)return f(this._tileInfoView.tileInfo.size);if(l<3){const n=this._tileInfoView.getTileParentId(t.id);if(n){const u=new y(n),_=await this.fetchTile(u,{...i,resamplingLevel:l+1});return d(this._tileInfoView,_,u,t)}}throw o}const e=new y(0,0,0,0);let s;try{if(await r.fetchAvailabilityUpsample(t.level,t.row,t.col,e,{signal:m}),e.level!==t.level&&!this.resampling)return f(this._tileInfoView.tileInfo.size);s=await this._fetchImage(e,m)}catch(o){if(h(o))throw o;s=await this._fetchImage(t,m)}return this.resampling?d(this._tileInfoView,s,e,t):s}async _enqueueTileFetch(t){if(!this._fetchQueue.has(t.key.id)){try{const i=await this._fetchQueue.push(t.key);t.bitmap.source=i,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.once("attach",()=>this.requestUpdate())}catch(i){h(i)||w.getLogger(this.declaredClass).error(i)}this.requestUpdate()}}async _fetchImage(t,i){return this.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:i})}};a([c()],p.prototype,"_fetchQueue",void 0),a([c()],p.prototype,"resampling",null),p=a([g("esri.views.2d.layers.TileLayerView2D")],p);const em=p;export{em as default};