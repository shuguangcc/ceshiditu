import{c as s,e,y as a,n as y}from"./cast-7928d7aa.js";import"./geometry-5a216427.js";import{g as l}from"./Graphic-b46e2684.js";import{i as n,e as v,r as o,s as c}from"./typedArrayUtil-a8b5b3e9.js";import"./ensureType-cf29afa9.js";import{c1 as d,c2 as g,c3 as G}from"./index-455b69b8.js";import{y as u}from"./symbols-fa594797.js";import{d as E}from"./CIMSymbol-1379245a.js";import{Z as b,q as _}from"./DrawGraphicTool-5e0248da.js";import{w}from"./Extent-69509002.js";import{a as S}from"./Polyline-bf268e7b.js";import"./string-cdf077e6.js";import"./Error-653283ae.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-6684e352.js";import"./typeUtils-eb9416d0.js";import"./jsonMap-c1f958cf.js";import"./PopupTemplate-6eb885db.js";import"./Clonable-ba795b08.js";import"./Collection-78126e82.js";import"./Evented-515b9d9c.js";import"./SimpleObservable-7dcdef1d.js";import"./fieldUtils-31bfecd2.js";import"./preload-helper-41c905a7.js";import"./arcadeOnDemand-c6d1b9f2.js";import"./enumeration-3c281341.js";import"./number-347a3a44.js";import"./locale-30120714.js";import"./Identifiable-aa6d459d.js";import"./jsonUtils-03c4af61.js";import"./Basemap-a8f7f439.js";import"./collectionUtils-3831b7c4.js";import"./deprecate-b9088bd3.js";import"./Loadable-48bc1293.js";import"./Promise-dfdee8ba.js";import"./loadAll-7fd968fe.js";import"./asyncUtils-62e8a185.js";import"./request-d3e98716.js";import"./Portal-8b65c9c4.js";import"./PortalGroup-bfe93c76.js";import"./PortalUser-4c8e1adc.js";import"./Ellipsoid-89682c5e.js";import"./PortalItem-aa42c739.js";import"./assets-0b172f07.js";import"./messages-be07754e.js";import"./writeUtils-067c4f82.js";import"./layerUtils-034678f6.js";import"./Color-a42a8267.js";import"./colorUtils-639f4d25.js";import"./mathUtils-2519596a.js";import"./vec3-a020a6f6.js";import"./vec3f64-2f9cef06.js";import"./common-c186b691.js";import"./vec4-790471c0.js";import"./compilerUtils-034cacb8.js";import"./opacityUtils-243aae26.js";import"./CollectionFlattener-3dd1f479.js";import"./TablesMixin-e7a6aab1.js";import"./Layer-f0696768.js";import"./Cyclical-b66238c6.js";import"./reactiveUtils-f41a4e00.js";import"./screenUtils-410d12c0.js";import"./workers-898a7c4c.js";import"./Connection-a681777e.js";import"./Queue-3a0c055d.js";import"./intl-f1e98361.js";import"./projection-d7b57a6c.js";import"./unitUtils-47abac71.js";import"./mat4-44a0988f.js";import"./aaBoundingRect-4a760199.js";import"./zscale-1e1fc911.js";import"./TileInfo-34f80a8e.js";import"./widget-f7489a3f.js";import"./uuid-73213768.js";import"./dom-5b7af1bf.js";import"./HandleOwner-e1406413.js";import"./byteSizeEstimations-f0cab514.js";import"./executeQueryJSON-bcd96e1a.js";import"./normalizeUtils-ee4bf39f.js";import"./query-922e6fbf.js";import"./pbfQueryUtils-72f9b45b.js";import"./pbf-e1a6c35b.js";import"./OptimizedFeature-3de538c1.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-d9d8ef40.js";import"./FeatureSet-0573546e.js";import"./Field-f5fc9f6b.js";import"./fieldType-b1002185.js";import"./Symbol-fc4312a4.js";import"./symbolLayerUtils3D-1f8d4478.js";import"./aaBoundingBox-fc742a4e.js";import"./persistableUrlUtils-a16d0f55.js";import"./Symbol3DAnchorPosition2D-c0f4a14d.js";import"./Query-ff8c2cfb.js";import"./TimeExtent-744afd75.js";import"./RelationshipQuery-db5fcd0c.js";import"./LegendOptions-e65e7a9c.js";import"./utils-725f8b4e.js";import"./BlendLayer-d8293c8d.js";import"./parser-2b40deea.js";import"./mat4f32-77b3d8ac.js";import"./ItemCache-ee28c7ba.js";import"./MemCache-4b976a8b.js";import"./cimSymbolUtils-2e4dde89.js";import"./utils-c81a5c52.js";import"./jsonUtils-c56f8821.js";import"./UniqueValueRenderer-103ec66d.js";import"./diffUtils-1ac65748.js";import"./colorRamps-3a8ac20b.js";import"./sizeVariableUtils-d4870b0d.js";import"./visualVariableUtils-c59ab38d.js";import"./lengthUtils-d2d33f94.js";import"./jsonUtils-d7db3dc7.js";import"./styleUtils-4adfed9e.js";import"./DictionaryLoader-2cf5144e.js";import"./LRUCache-14115d91.js";import"./heatmapUtils-84e8c43b.js";import"./vec4f64-e407da96.js";import"./featureConversionUtils-01cdde8a.js";import"./TopFeaturesQuery-785f5453.js";import"./FeatureLayer-a9f3e6ec.js";import"./MultiOriginJSONSupport-27362d57.js";import"./LayerFloorInfo-2cd5e8ae.js";import"./FeatureLayerBase-aebdf2da.js";import"./HeightModelInfo-22ad72d7.js";import"./arcgisLayerUrl-0b2b7691.js";import"./OperationalLayer-24e6fa34.js";import"./ElevationInfo-ce9cacc2.js";import"./editsZScale-2015e7db.js";import"./APIKeyMixin-34d76a46.js";import"./ArcGISService-ea748edf.js";import"./CustomParametersMixin-807d2055.js";import"./EditBusLayer-40671d1a.js";import"./FeatureReductionLayer-4077b2ae.js";import"./labelingInfo-5c3a46f6.js";import"./labelUtils-a194a22a.js";import"./defaultsJSON-59981e75.js";import"./OrderedLayer-e7edf19c.js";import"./PortalLayer-f1a64f99.js";import"./RefreshableLayer-1c078c47.js";import"./ScaleRangeLayer-271178b7.js";import"./TemporalLayer-39c07299.js";import"./TimeInfo-c89d0ef4.js";import"./FeatureTemplate-746d033e.js";import"./FeatureType-c83c5f49.js";import"./fieldProperties-7547b373.js";import"./FieldsIndex-aa6dd3fa.js";import"./versionUtils-92993d41.js";import"./styleUtils-da81b13f.js";import"./popupUtils-07fe66a7.js";import"./colorUtils-82440b70.js";import"./mat2d-d0b91e3e.js";import"./Scheduler-8433672d.js";import"./GraphicsLayer-10573c27.js";import"./ViewingMode-5d7d590b.js";import"./enums-0fc02184.js";import"./vec2-2cef68de.js";import"./vec2f64-30dc1443.js";import"./mat3-3fc68e72.js";import"./mat3f32-d3d088e8.js";import"./vec2f32-461e65a9.js";import"./TileStrategy-4189758f.js";import"./TileStore-787dbea4.js";import"./TileKey-0750ad58.js";import"./rbush-8e36784a.js";import"./quickselect-322ec8e1.js";import"./capabilities-3636c6a4.js";import"./context-util-1e3c8cfc.js";import"./sphere-4f5e644f.js";import"./mat3f64-c6305894.js";import"./mat4f64-1e28eae0.js";import"./quatf64-7fd38d64.js";import"./lineSegment-e6f72ff2.js";import"./plane-45609588.js";import"./scaleUtils-b32a50d8.js";import"./ElevationSamplerData-7decf898.js";import"./PhysicallyBasedRendering.glsl-a986c926.js";import"./View.glsl-8b12b8c2.js";import"./ShaderBuilder-93e8045e.js";import"./FloatPassUniform-d2dfc562.js";import"./Float4PassUniform-3a47b7b3.js";import"./RgbaFloatEncoding.glsl-6036ca34.js";import"./Texture2DPassUniform-6e8ae673.js";import"./vec3f32-c9aa289f.js";import"./VertexAttribute-9c5c630d.js";import"./Texture2DDrawUniform-22924c6f.js";import"./basicInterfaces-19ed850e.js";import"./PiUtils.glsl-0c0898f0.js";import"./ReadLinearDepth.glsl-7ff30f7d.js";import"./WaterSurface.glsl-fc8a5726.js";import"./ForwardLinearDepth.glsl-36f9eb3b.js";import"./Matrix3PassUniform-da8eddae.js";import"./Slice.glsl-a612de15.js";import"./Transform.glsl-f15542a7.js";import"./OutputHighlight.glsl-7364b03b.js";import"./MultipassTerrainTest.glsl-e79d40de.js";import"./NormalUtils.glsl-a59958d7.js";import"./AlphaCutoff-96178e0d.js";import"./TransparencyPassType-cd195b0e.js";import"./EvaluateSceneLighting.glsl-3bbc6edf.js";import"./VisualVariablePassParameters-5807c7dc.js";import"./enums-64ab819c.js";import"./VertexElementDescriptor-2925c6af.js";import"./FramebufferObject-50e1b68f.js";import"./Texture-e79b14e7.js";import"./Util-a48361c6.js";import"./SSAOBlur.glsl-c6f142fc.js";import"./ScreenSpacePass-00f8c8a4.js";import"./SSAO.glsl-6f3b4065.js";import"./ShaderTechniqueConfiguration-9f5b4555.js";import"./HUD.glsl-80cf9a21.js";import"./VerticalOffset.glsl-86460edb.js";import"./objectResourceUtils-ef6e3cdf.js";import"./devEnvironmentUtils-5002a058.js";import"./BufferView-646ba1de.js";import"./vec33-ce3aa99b.js";import"./DefaultMaterial_COLOR_GAMMA-9831d979.js";import"./types-e1c0a5bf.js";import"./Version-9baeb7ac.js";import"./quat-5b263584.js";import"./Texture-bbae5d9d.js";import"./TextureOnly.glsl-18701a3b.js";import"./InterleavedLayout-5e9cf734.js";import"./MixExternalColor.glsl-25f0049c.js";import"./symbolColorUtils-604c5345.js";import"./ObjectAndLayerIdColor.glsl-73c19386.js";import"./OutputDepth.glsl-179f1d8f.js";import"./VisualVariables.glsl-b8290512.js";import"./DiscardOrAdjustAlphaBlend.glsl-5f837994.js";import"./Normals.glsl-90e28525.js";import"./DefaultMaterial.glsl-b4f4cbc5.js";import"./VertexColor.glsl-db21b96c.js";import"./DefaultTechniqueConfiguration-e8962072.js";import"./RealisticTree.glsl-2b30ed32.js";import"./edgeProcessing-3ca548e1.js";import"./deduplicate-b0bc48cc.js";import"./projection-aa2a8986.js";import"./Octree-1a841545.js";import"./HUDMaterial.glsl-4bf3c7df.js";import"./sdfPrimitives-a24e9cb2.js";import"./floatRGBA-fa8308d2.js";import"./dehydratedFeatures-4eeb381a.js";import"./quantizationUtils-33aba427.js";import"./labelFormatUtils-4d730eaa.js";import"./I3SUtil-3ffd3baa.js";import"./I3SBinaryReader-3d2c2faa.js";import"./LineCallout.glsl-a0056465.js";import"./earcut-58237617.js";import"./QueryEngineResult-665bf7fb.js";import"./WhereClause-2b5b05b2.js";import"./utils-30a9a7e0.js";import"./generateRendererUtils-a996108f.js";import"./utils-1f4fcfec.js";import"./json-48e3ea08.js";import"./MeshComponent-f50df6af.js";import"./MarkerSizing.glsl-c6fa192a.js";import"./RibbonLine.glsl-2a3b4d4e.js";import"./LineStipple.glsl-de782d6a.js";import"./callExpressionWithFeature-a7532499.js";import"./LineMarker.glsl-8f444621.js";import"./NativeLine.glsl-cdbbf172.js";import"./Path.glsl-60b36878.js";import"./ColorMaterial.glsl-8310ffb3.js";import"./Pattern.glsl-d3388745.js";import"./EffectView-d3bf37ed.js";import"./LercDecoder-73115fd2.js";import"./config-1337d16e.js";import"./workerHelper-c6d4a8cb.js";import"./Subtype-5b01b21f.js";import"./datetime-4f774298.js";import"./elevationInfoUtils-427916a5.js";import"./ExportImageParameters-f328a234.js";import"./sublayerUtils-ba7f61bc.js";import"./webStyleSymbolUtils-55ed91cd.js";import"./enums-4b2a86a0.js";import"./quantityFormatUtils-ba1f6cd1.js";import"./geometryEngine-62e3ccf4.js";import"./geometryEngineBase-3dd302e0.js";import"./hydrated-be86c8b3.js";import"./automaticLengthMeasurementUtils-24c52b73.js";import"./euclideanLengthMeasurementUtils-3ebdcf15.js";import"./measurementUtils-c86e49dc.js";import"./automaticAreaMeasurementUtils-d516ac98.js";import"./euclideanAreaMeasurementUtils-0db711c3.js";const V=new E({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",effects:[{type:"CIMGeometricEffectDashes",dashTemplate:[3.75,3.75],lineDashEnding:"HalfPattern",controlPointEnding:"NoConstraint"}],enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:1.6,color:[255,255,255,255]},{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:2,color:[0,0,0,255]}]}}}),f=new u({style:"circle",size:6,color:[127,127,127,1],outline:{color:[50,50,50],width:1}}),x=new u({style:"circle",size:6,color:[255,127,0,1],outline:{color:[50,50,50],width:1}});let m=class extends b{constructor(i){super(i),this._visualElementGraphics={outline:null,regularVertices:null,activeVertex:null},this.activeFillSymbol=null,this.type="draw-2d",this._visualElementSymbols={outline:n(i.activeLineSymbol,V),regularVertices:n(i.regularVerticesSymbol,f),activeVertex:n(i.activeVertexSymbol,x),fill:v(i.activeFillSymbol)}}normalizeCtorArgs(i){const t={...i};return delete t.activeFillSymbol,delete t.activeVertexSymbol,delete t.regularVerticesSymbol,delete t.activeLineSymbol,t}initializeGraphic(i){return o(this._visualElementSymbols.fill)&&(i.symbol=this._visualElementSymbols.fill),null}makeDrawOperation(){const{defaultZ:i,hasZ:t,view:r}=this;return new d({view:r,manipulators:this.manipulators,geometryType:_(this.geometryType),drawingMode:this.mode,hasZ:t,defaultZ:i,snapToSceneEnabled:this.snapToScene,drawSurface:new g(r,t,i),hasM:!1,snappingManager:this.snappingManager,snappingVisualizer:new G(this.internalGraphicsLayer),tooltipOptions:this.tooltipOptions})}onActiveVertexChanged(i){if(this.geometryType==="point")return null;const[t,r]=i,p=new w({x:t,y:r,spatialReference:this.view.spatialReference});return o(this._visualElementGraphics.activeVertex)?(this._visualElementGraphics.activeVertex.geometry=p,null):(this._visualElementGraphics.activeVertex=new l({geometry:p,symbol:this._visualElementSymbols.activeVertex,attributes:{displayOrder:2}}),this.internalGraphicsLayer.add(this._visualElementGraphics.activeVertex),this.internalGraphicsLayer.graphics.sort(h),s(()=>{o(this._visualElementGraphics.activeVertex)&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.activeVertex),this._visualElementGraphics.activeVertex=c(this._visualElementGraphics.activeVertex))}))}onOutlineChanged(i){const t=i.clone();if(t.type==="polyline"){const r=t.paths[t.paths.length-1];r.splice(0,r.length-2)}return o(this._visualElementGraphics.outline)?(this._visualElementGraphics.outline.geometry=t,null):(this._visualElementGraphics.outline=new l({geometry:t,symbol:this._visualElementSymbols.outline,attributes:{displayOrder:0}}),this.internalGraphicsLayer.add(this._visualElementGraphics.outline),this.internalGraphicsLayer.graphics.sort(h),s(()=>{o(this._visualElementGraphics.outline)&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.outline),this._visualElementGraphics.outline=c(this._visualElementGraphics.outline))}))}onRegularVerticesChanged(i){const t=new S({points:i,spatialReference:this.view.spatialReference});return o(this._visualElementGraphics.regularVertices)?(this._visualElementGraphics.regularVertices.geometry=t,null):(this._visualElementGraphics.regularVertices=new l({geometry:t,symbol:this._visualElementSymbols.regularVertices,attributes:{displayOrder:1}}),this.internalGraphicsLayer.add(this._visualElementGraphics.regularVertices),this.internalGraphicsLayer.graphics.sort(h),s(()=>{o(this._visualElementGraphics.regularVertices)&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.regularVertices),this._visualElementGraphics.regularVertices=c(this._visualElementGraphics.regularVertices))}))}};function h(i,t){var r,p;return(((r=i.attributes)==null?void 0:r.displayOrder)??-1/0)-(((p=t.attributes)==null?void 0:p.displayOrder)??-1/0)}e([a()],m.prototype,"activeFillSymbol",void 0),e([a({readOnly:!0})],m.prototype,"type",void 0),e([a({constructOnly:!0,nonNullable:!0})],m.prototype,"view",void 0),m=e([y("esri.views.2d.interactive.draw.DrawGraphicTool2D")],m);export{m as DrawGraphicTool2D};