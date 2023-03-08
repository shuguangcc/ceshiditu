import{e as i,y as o,n as s}from"./cast-7928d7aa.js";import{g as n}from"./Graphic-b46e2684.js";import{t as l}from"./typedArrayUtil-a8b5b3e9.js";import{h as a}from"./reactiveUtils-f41a4e00.js";import"./ensureType-cf29afa9.js";import{y as d}from"./I3SMeshView3D-4e176d72.js";import{aH as h,a8 as u}from"./index-455b69b8.js";import{n as c}from"./LayerView3D-9d740636.js";import{u as g}from"./LayerView-b83ced89.js";import"./string-cdf077e6.js";import"./Error-653283ae.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-6684e352.js";import"./geometry-5a216427.js";import"./Extent-69509002.js";import"./Ellipsoid-89682c5e.js";import"./Polyline-bf268e7b.js";import"./typeUtils-eb9416d0.js";import"./jsonMap-c1f958cf.js";import"./PopupTemplate-6eb885db.js";import"./Clonable-ba795b08.js";import"./Collection-78126e82.js";import"./Evented-515b9d9c.js";import"./SimpleObservable-7dcdef1d.js";import"./fieldUtils-31bfecd2.js";import"./preload-helper-41c905a7.js";import"./arcadeOnDemand-c6d1b9f2.js";import"./enumeration-3c281341.js";import"./number-347a3a44.js";import"./locale-30120714.js";import"./Identifiable-aa6d459d.js";import"./symbols-fa594797.js";import"./CIMSymbol-1379245a.js";import"./Symbol-fc4312a4.js";import"./Color-a42a8267.js";import"./colorUtils-639f4d25.js";import"./mathUtils-2519596a.js";import"./vec3-a020a6f6.js";import"./vec3f64-2f9cef06.js";import"./common-c186b691.js";import"./vec4-790471c0.js";import"./screenUtils-410d12c0.js";import"./opacityUtils-243aae26.js";import"./symbolLayerUtils3D-1f8d4478.js";import"./aaBoundingBox-fc742a4e.js";import"./aaBoundingRect-4a760199.js";import"./request-d3e98716.js";import"./persistableUrlUtils-a16d0f55.js";import"./Symbol3DAnchorPosition2D-c0f4a14d.js";import"./collectionUtils-3831b7c4.js";import"./Portal-8b65c9c4.js";import"./Loadable-48bc1293.js";import"./Promise-dfdee8ba.js";import"./PortalGroup-bfe93c76.js";import"./PortalUser-4c8e1adc.js";import"./jsonUtils-03c4af61.js";import"./byteSizeEstimations-f0cab514.js";import"./unitUtils-47abac71.js";import"./mat3-3fc68e72.js";import"./mat3f32-d3d088e8.js";import"./mat4-44a0988f.js";import"./mat4f64-1e28eae0.js";import"./vec4f64-e407da96.js";import"./projection-d7b57a6c.js";import"./assets-0b172f07.js";import"./zscale-1e1fc911.js";import"./I3SOverrides-02bb416c.js";import"./dehydratedFeatures-4eeb381a.js";import"./quantizationUtils-33aba427.js";import"./Field-f5fc9f6b.js";import"./fieldType-b1002185.js";import"./Scheduler-8433672d.js";import"./ViewingMode-5d7d590b.js";import"./I3SNode-42b7a44e.js";import"./sphere-4f5e644f.js";import"./mat3f64-c6305894.js";import"./quatf64-7fd38d64.js";import"./vec2f64-30dc1443.js";import"./I3SUtil-3ffd3baa.js";import"./quat-5b263584.js";import"./I3SBinaryReader-3d2c2faa.js";import"./VertexAttribute-9c5c630d.js";import"./Query-ff8c2cfb.js";import"./TimeExtent-744afd75.js";import"./symbolColorUtils-604c5345.js";import"./vec3f32-c9aa289f.js";import"./plane-45609588.js";import"./asyncUtils-62e8a185.js";import"./RenderTexture-efcfcb1e.js";import"./PhysicallyBasedRendering.glsl-a986c926.js";import"./View.glsl-8b12b8c2.js";import"./mat4f32-77b3d8ac.js";import"./ShaderBuilder-93e8045e.js";import"./FloatPassUniform-d2dfc562.js";import"./Float4PassUniform-3a47b7b3.js";import"./RgbaFloatEncoding.glsl-6036ca34.js";import"./Texture2DPassUniform-6e8ae673.js";import"./vec2-2cef68de.js";import"./compilerUtils-034cacb8.js";import"./Texture2DDrawUniform-22924c6f.js";import"./basicInterfaces-19ed850e.js";import"./PiUtils.glsl-0c0898f0.js";import"./AlphaCutoff-96178e0d.js";import"./Texture-bbae5d9d.js";import"./VisualVariablePassParameters-5807c7dc.js";import"./enums-64ab819c.js";import"./VertexElementDescriptor-2925c6af.js";import"./FramebufferObject-50e1b68f.js";import"./Texture-e79b14e7.js";import"./context-util-1e3c8cfc.js";import"./Util-a48361c6.js";import"./TextureOnly.glsl-18701a3b.js";import"./ScreenSpacePass-00f8c8a4.js";import"./Octree-1a841545.js";import"./styleUtils-4adfed9e.js";import"./FeatureLayerView3D-23021139.js";import"./FeatureLayerViewBase3D-f9a2841f.js";import"./FeatureLikeLayerView3D-e095b99c.js";import"./HandleOwner-e1406413.js";import"./arcgisLayerUrl-0b2b7691.js";import"./utils-725f8b4e.js";import"./BlendLayer-d8293c8d.js";import"./parser-2b40deea.js";import"./ItemCache-ee28c7ba.js";import"./MemCache-4b976a8b.js";import"./cimSymbolUtils-2e4dde89.js";import"./utils-c81a5c52.js";import"./queryForSymbologySnapping-f3902574.js";import"./elevationInfoUtils-427916a5.js";import"./ElevationInfo-ce9cacc2.js";import"./lengthUtils-d2d33f94.js";import"./hash-0ddfbf4b.js";import"./diffUtils-1ac65748.js";import"./UniqueValueRenderer-103ec66d.js";import"./LegendOptions-e65e7a9c.js";import"./colorRamps-3a8ac20b.js";import"./sizeVariableUtils-d4870b0d.js";import"./visualVariableUtils-c59ab38d.js";import"./jsonUtils-d7db3dc7.js";import"./Graphics3DObjectStates-2cd67a8a.js";import"./jsonUtils-c56f8821.js";import"./DictionaryLoader-2cf5144e.js";import"./LRUCache-14115d91.js";import"./deprecate-b9088bd3.js";import"./heatmapUtils-84e8c43b.js";import"./Layer-f0696768.js";import"./labelingInfo-5c3a46f6.js";import"./labelUtils-a194a22a.js";import"./defaultsJSON-59981e75.js";import"./OptimizedFeature-3de538c1.js";import"./optimizedFeatureQueryEngineAdapter-4b9881eb.js";import"./centroid-13995b22.js";import"./PooledRBush-26ba8fba.js";import"./quickselect-322ec8e1.js";import"./FeatureReductionLayer-4077b2ae.js";import"./OperationalLayer-24e6fa34.js";import"./ExportImageParameters-f328a234.js";import"./LayerFloorInfo-2cd5e8ae.js";import"./sublayerUtils-ba7f61bc.js";import"./QueryEngine-a5c074c3.js";import"./normalizeUtils-ee4bf39f.js";import"./featureConversionUtils-01cdde8a.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./QueryEngineResult-665bf7fb.js";import"./WhereClause-2b5b05b2.js";import"./utils-30a9a7e0.js";import"./generateRendererUtils-a996108f.js";import"./utils-1f4fcfec.js";import"./json-48e3ea08.js";import"./QueryEngineCapabilities-42e44ded.js";import"./timeSupport-b43dc94c.js";import"./FieldsIndex-aa6dd3fa.js";import"./FeatureSet-0573546e.js";import"./scaleUtils-b32a50d8.js";import"./FeatureStore-b1ba4c29.js";import"./EvaluateSceneLighting.glsl-3bbc6edf.js";import"./SSAOBlur.glsl-c6f142fc.js";import"./ReadLinearDepth.glsl-7ff30f7d.js";import"./SSAO.glsl-6f3b4065.js";import"./ShaderTechniqueConfiguration-9f5b4555.js";import"./objectResourceUtils-ef6e3cdf.js";import"./devEnvironmentUtils-5002a058.js";import"./BufferView-646ba1de.js";import"./vec33-ce3aa99b.js";import"./DefaultMaterial_COLOR_GAMMA-9831d979.js";import"./types-e1c0a5bf.js";import"./Version-9baeb7ac.js";import"./vec2f32-461e65a9.js";import"./lineSegment-e6f72ff2.js";import"./InterleavedLayout-5e9cf734.js";import"./Matrix3PassUniform-da8eddae.js";import"./MixExternalColor.glsl-25f0049c.js";import"./ForwardLinearDepth.glsl-36f9eb3b.js";import"./Slice.glsl-a612de15.js";import"./Transform.glsl-f15542a7.js";import"./ObjectAndLayerIdColor.glsl-73c19386.js";import"./OutputDepth.glsl-179f1d8f.js";import"./OutputHighlight.glsl-7364b03b.js";import"./VisualVariables.glsl-b8290512.js";import"./DiscardOrAdjustAlphaBlend.glsl-5f837994.js";import"./TransparencyPassType-cd195b0e.js";import"./Normals.glsl-90e28525.js";import"./DefaultMaterial.glsl-b4f4cbc5.js";import"./VertexColor.glsl-db21b96c.js";import"./VerticalOffset.glsl-86460edb.js";import"./MultipassTerrainTest.glsl-e79d40de.js";import"./DefaultTechniqueConfiguration-e8962072.js";import"./RealisticTree.glsl-2b30ed32.js";import"./Heatmap.glsl-07ebb671.js";import"./HeatmapDensity.glsl-028179cd.js";import"./heatmapTextureUtils-d1d96768.js";import"./projectExtentUtils-9adea3ba.js";import"./query-922e6fbf.js";import"./pbfQueryUtils-72f9b45b.js";import"./pbf-e1a6c35b.js";import"./queryZScale-d9d8ef40.js";import"./LercDecoder-73115fd2.js";import"./workers-898a7c4c.js";import"./Connection-a681777e.js";import"./Queue-3a0c055d.js";import"./intl-f1e98361.js";import"./messages-be07754e.js";import"./EventedSet-7223bfeb.js";import"./FeatureLayerView-dbb9730b.js";import"./popupUtils-e8f3d062.js";import"./RefreshableLayerView-1faf24ee.js";import"./Basemap-a8f7f439.js";import"./loadAll-7fd968fe.js";import"./PortalItem-aa42c739.js";import"./writeUtils-067c4f82.js";import"./layerUtils-034678f6.js";import"./CollectionFlattener-3dd1f479.js";import"./TablesMixin-e7a6aab1.js";import"./Cyclical-b66238c6.js";import"./TileInfo-34f80a8e.js";import"./widget-f7489a3f.js";import"./uuid-73213768.js";import"./dom-5b7af1bf.js";import"./executeQueryJSON-bcd96e1a.js";import"./RelationshipQuery-db5fcd0c.js";import"./TopFeaturesQuery-785f5453.js";import"./FeatureLayer-a9f3e6ec.js";import"./MultiOriginJSONSupport-27362d57.js";import"./FeatureLayerBase-aebdf2da.js";import"./HeightModelInfo-22ad72d7.js";import"./editsZScale-2015e7db.js";import"./APIKeyMixin-34d76a46.js";import"./ArcGISService-ea748edf.js";import"./CustomParametersMixin-807d2055.js";import"./EditBusLayer-40671d1a.js";import"./OrderedLayer-e7edf19c.js";import"./PortalLayer-f1a64f99.js";import"./RefreshableLayer-1c078c47.js";import"./ScaleRangeLayer-271178b7.js";import"./TemporalLayer-39c07299.js";import"./TimeInfo-c89d0ef4.js";import"./FeatureTemplate-746d033e.js";import"./FeatureType-c83c5f49.js";import"./fieldProperties-7547b373.js";import"./versionUtils-92993d41.js";import"./styleUtils-da81b13f.js";import"./popupUtils-07fe66a7.js";import"./colorUtils-82440b70.js";import"./mat2d-d0b91e3e.js";import"./GraphicsLayer-10573c27.js";import"./enums-0fc02184.js";import"./TileStrategy-4189758f.js";import"./TileStore-787dbea4.js";import"./TileKey-0750ad58.js";import"./rbush-8e36784a.js";import"./capabilities-3636c6a4.js";import"./ElevationSamplerData-7decf898.js";import"./WaterSurface.glsl-fc8a5726.js";import"./NormalUtils.glsl-a59958d7.js";import"./HUD.glsl-80cf9a21.js";import"./edgeProcessing-3ca548e1.js";import"./deduplicate-b0bc48cc.js";import"./projection-aa2a8986.js";import"./HUDMaterial.glsl-4bf3c7df.js";import"./sdfPrimitives-a24e9cb2.js";import"./floatRGBA-fa8308d2.js";import"./labelFormatUtils-4d730eaa.js";import"./LineCallout.glsl-a0056465.js";import"./earcut-58237617.js";import"./MeshComponent-f50df6af.js";import"./MarkerSizing.glsl-c6fa192a.js";import"./RibbonLine.glsl-2a3b4d4e.js";import"./LineStipple.glsl-de782d6a.js";import"./callExpressionWithFeature-a7532499.js";import"./LineMarker.glsl-8f444621.js";import"./NativeLine.glsl-cdbbf172.js";import"./Path.glsl-60b36878.js";import"./ColorMaterial.glsl-8310ffb3.js";import"./Pattern.glsl-d3388745.js";import"./EffectView-d3bf37ed.js";import"./config-1337d16e.js";import"./workerHelper-c6d4a8cb.js";import"./Subtype-5b01b21f.js";import"./datetime-4f774298.js";import"./webStyleSymbolUtils-55ed91cd.js";import"./enums-4b2a86a0.js";import"./SceneModification-17ca2be5.js";import"./persistable-19c823da.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./SceneLayerWorker-dd02c2a0.js";const y=.2;let r=class extends d(c(g)){constructor(){super(...arguments),this.type="integrated-mesh-3d",this._elevationContext="im",this._isIntegratedMesh=!0,this._supportsLabeling=!1,this.drapeTargetType=h.WithoutRasterImage}get i3slayer(){return this.layer}get updatingProgressValue(){var t;return((t=this._controller)==null?void 0:t.updatingProgress)??0}get lodFactor(){var t,p,m,e;return((e=(m=(p=(t=this.view)==null?void 0:t.qualitySettings)==null?void 0:p.sceneService)==null?void 0:m.integratedMesh)==null?void 0:e.lodFactor)??1}get progressiveLoadFactor(){return this.lodFactor>=1?y:1}get layerPopupEnabled(){return!1}initialize(){this.updatingHandles.add(()=>this.layer.modifications,()=>this._loadModifications(),a),this.view.basemapTerrain.overlayManager.registerDrapeTarget(this)}destroy(){this.view.basemapTerrain.overlayManager.unregisterDrapeTarget(this)}_createLayerGraphic(){const t=new n;return t.layer=this.layer,t.sourceLayer=this.layer,t}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}_loadModifications(){if(this.handles.remove("modifications"),l(this.layer.modifications))return void(this._modifications=[]);const t=this.layer.modifications;this.handles.add(this.updatingHandles.addOnCollectionChange(()=>t,()=>this._modifications=t.toArray(),a),"modifications")}};i([o()],r.prototype,"layer",void 0),i([o()],r.prototype,"i3slayer",null),i([o(u)],r.prototype,"updatingProgress",void 0),i([o()],r.prototype,"updatingProgressValue",null),i([o()],r.prototype,"lodFactor",null),i([o({readOnly:!0})],r.prototype,"progressiveLoadFactor",null),r=i([s("esri.views.3d.layers.SceneLayerView3D")],r);const Zp=r;export{Zp as default};
