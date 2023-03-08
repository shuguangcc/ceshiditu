import{e as n,y as l,n as H,m as Y,t as z,A as Mt}from"./cast-7928d7aa.js";import{t as p,r,w as J,s as w,h as Q,e as bt}from"./typedArrayUtil-a8b5b3e9.js";import"./ensureType-cf29afa9.js";import{n as Dt}from"./AnalysisView3D-70b48b15.js";import{k as Et,T as Tt,O as St,g as pt,h as ht,e as Ct,o as xt,a as W,u as kt,l as ut,c as mt,b as dt,m as L,d as G,q as X,R as tt,Y as $t,M as zt,Z as Ht,w as S,G as Rt,I as f,B as ct,z as It,K as Lt,Q as Gt,J as Ot,f as b,x as D,W as At,n as Bt,i as Kt,v as Ut,C as Ft}from"./sliceToolUtils-d711e2da.js";import{s as qt}from"./Error-653283ae.js";import{l as _,U as Nt,w as F}from"./reactiveUtils-f41a4e00.js";import{bS as c,x as jt,t as Zt,bR as M,bT as m,bg as C,bU as q,bV as it,bx as Yt,aU as Jt}from"./index-455b69b8.js";import{b as et}from"./Layer-f0696768.js";import{M as Qt}from"./BuildingComponentSublayer-80f74d57.js";import{a as Wt}from"./LineVisualElement-69b2e868.js";import{n as Xt}from"./compilerUtils-034cacb8.js";import{t as ti}from"./promiseUtils-6684e352.js";import{c as ii,d as at,i as ei}from"./screenUtils-410d12c0.js";import{g as ai,q as yt,u as _t}from"./mat4-44a0988f.js";import{P as x,s as E,r as st,g as O,u as rt,O as nt,z as A,o as vt}from"./vec3-a020a6f6.js";import{t as si,n as N}from"./vec3f64-2f9cef06.js";import{R as ot,p as j,q as $,Y as ri}from"./plane-45609588.js";import{c as d,e as T,d as ni,t as oi}from"./sphere-4f5e644f.js";import{o as li,i as pi,C as k}from"./Factory-d9ba6160.js";import{z as hi}from"./manipulatorUtils-302eea16.js";import{a as ui,s as mi,m as di}from"./analysisViewUtils-dbd7f679.js";import{l as ci}from"./vec4f64-e407da96.js";import"./string-cdf077e6.js";import"./nextTick-3ee5a785.js";import"./Promise-dfdee8ba.js";import"./geometry-5a216427.js";import"./Extent-69509002.js";import"./Ellipsoid-89682c5e.js";import"./Polyline-bf268e7b.js";import"./typeUtils-eb9416d0.js";import"./jsonMap-c1f958cf.js";import"./Clonable-ba795b08.js";import"./Cyclical-b66238c6.js";import"./mathUtils-2519596a.js";import"./vec4-790471c0.js";import"./common-c186b691.js";import"./persistable-19c823da.js";import"./preload-helper-41c905a7.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./request-d3e98716.js";import"./uuid-73213768.js";import"./persistableUrlUtils-a16d0f55.js";import"./mat4f64-1e28eae0.js";import"./quat-5b263584.js";import"./mat3f64-c6305894.js";import"./quatf64-7fd38d64.js";import"./projection-d7b57a6c.js";import"./unitUtils-47abac71.js";import"./SimpleObservable-7dcdef1d.js";import"./assets-0b172f07.js";import"./aaBoundingRect-4a760199.js";import"./zscale-1e1fc911.js";import"./VisualVariablePassParameters-5807c7dc.js";import"./VertexAttribute-9c5c630d.js";import"./enums-64ab819c.js";import"./VertexElementDescriptor-2925c6af.js";import"./FramebufferObject-50e1b68f.js";import"./Texture-e79b14e7.js";import"./context-util-1e3c8cfc.js";import"./ShaderBuilder-93e8045e.js";import"./aaBoundingBox-fc742a4e.js";import"./basicInterfaces-19ed850e.js";import"./ViewingMode-5d7d590b.js";import"./Util-a48361c6.js";import"./vec2f64-30dc1443.js";import"./Matrix3PassUniform-da8eddae.js";import"./ShaderTechniqueConfiguration-9f5b4555.js";import"./objectResourceUtils-ef6e3cdf.js";import"./devEnvironmentUtils-5002a058.js";import"./mat3-3fc68e72.js";import"./BufferView-646ba1de.js";import"./vec2-2cef68de.js";import"./vec33-ce3aa99b.js";import"./DefaultMaterial_COLOR_GAMMA-9831d979.js";import"./types-e1c0a5bf.js";import"./asyncUtils-62e8a185.js";import"./Version-9baeb7ac.js";import"./mat3f32-d3d088e8.js";import"./vec2f32-461e65a9.js";import"./byteSizeEstimations-f0cab514.js";import"./lineSegment-e6f72ff2.js";import"./Texture-bbae5d9d.js";import"./Evented-515b9d9c.js";import"./TextureOnly.glsl-18701a3b.js";import"./ScreenSpacePass-00f8c8a4.js";import"./Float4PassUniform-3a47b7b3.js";import"./Texture2DPassUniform-6e8ae673.js";import"./InterleavedLayout-5e9cf734.js";import"./MixExternalColor.glsl-25f0049c.js";import"./ForwardLinearDepth.glsl-36f9eb3b.js";import"./vec3f32-c9aa289f.js";import"./View.glsl-8b12b8c2.js";import"./mat4f32-77b3d8ac.js";import"./symbolColorUtils-604c5345.js";import"./PhysicallyBasedRendering.glsl-a986c926.js";import"./FloatPassUniform-d2dfc562.js";import"./RgbaFloatEncoding.glsl-6036ca34.js";import"./Texture2DDrawUniform-22924c6f.js";import"./PiUtils.glsl-0c0898f0.js";import"./Slice.glsl-a612de15.js";import"./Transform.glsl-f15542a7.js";import"./ObjectAndLayerIdColor.glsl-73c19386.js";import"./OutputDepth.glsl-179f1d8f.js";import"./OutputHighlight.glsl-7364b03b.js";import"./VisualVariables.glsl-b8290512.js";import"./DiscardOrAdjustAlphaBlend.glsl-5f837994.js";import"./AlphaCutoff-96178e0d.js";import"./TransparencyPassType-cd195b0e.js";import"./Normals.glsl-90e28525.js";import"./EvaluateSceneLighting.glsl-3bbc6edf.js";import"./SSAOBlur.glsl-c6f142fc.js";import"./ReadLinearDepth.glsl-7ff30f7d.js";import"./SSAO.glsl-6f3b4065.js";import"./DefaultMaterial.glsl-b4f4cbc5.js";import"./VertexColor.glsl-db21b96c.js";import"./VerticalOffset.glsl-86460edb.js";import"./MultipassTerrainTest.glsl-e79d40de.js";import"./DefaultTechniqueConfiguration-e8962072.js";import"./RealisticTree.glsl-2b30ed32.js";import"./Basemap-a8f7f439.js";import"./Collection-78126e82.js";import"./collectionUtils-3831b7c4.js";import"./deprecate-b9088bd3.js";import"./Loadable-48bc1293.js";import"./loadAll-7fd968fe.js";import"./Portal-8b65c9c4.js";import"./locale-30120714.js";import"./PortalGroup-bfe93c76.js";import"./PortalUser-4c8e1adc.js";import"./PortalItem-aa42c739.js";import"./messages-be07754e.js";import"./writeUtils-067c4f82.js";import"./layerUtils-034678f6.js";import"./Color-a42a8267.js";import"./colorUtils-639f4d25.js";import"./enumeration-3c281341.js";import"./opacityUtils-243aae26.js";import"./CollectionFlattener-3dd1f479.js";import"./TablesMixin-e7a6aab1.js";import"./Graphic-b46e2684.js";import"./PopupTemplate-6eb885db.js";import"./fieldUtils-31bfecd2.js";import"./arcadeOnDemand-c6d1b9f2.js";import"./number-347a3a44.js";import"./Identifiable-aa6d459d.js";import"./symbols-fa594797.js";import"./CIMSymbol-1379245a.js";import"./Symbol-fc4312a4.js";import"./symbolLayerUtils3D-1f8d4478.js";import"./Symbol3DAnchorPosition2D-c0f4a14d.js";import"./jsonUtils-03c4af61.js";import"./workers-898a7c4c.js";import"./Connection-a681777e.js";import"./Queue-3a0c055d.js";import"./intl-f1e98361.js";import"./TileInfo-34f80a8e.js";import"./widget-f7489a3f.js";import"./dom-5b7af1bf.js";import"./HandleOwner-e1406413.js";import"./executeQueryJSON-bcd96e1a.js";import"./normalizeUtils-ee4bf39f.js";import"./query-922e6fbf.js";import"./pbfQueryUtils-72f9b45b.js";import"./pbf-e1a6c35b.js";import"./OptimizedFeature-3de538c1.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-d9d8ef40.js";import"./FeatureSet-0573546e.js";import"./Field-f5fc9f6b.js";import"./fieldType-b1002185.js";import"./Query-ff8c2cfb.js";import"./TimeExtent-744afd75.js";import"./RelationshipQuery-db5fcd0c.js";import"./LegendOptions-e65e7a9c.js";import"./utils-725f8b4e.js";import"./BlendLayer-d8293c8d.js";import"./parser-2b40deea.js";import"./ItemCache-ee28c7ba.js";import"./MemCache-4b976a8b.js";import"./cimSymbolUtils-2e4dde89.js";import"./utils-c81a5c52.js";import"./jsonUtils-c56f8821.js";import"./UniqueValueRenderer-103ec66d.js";import"./diffUtils-1ac65748.js";import"./colorRamps-3a8ac20b.js";import"./sizeVariableUtils-d4870b0d.js";import"./visualVariableUtils-c59ab38d.js";import"./lengthUtils-d2d33f94.js";import"./jsonUtils-d7db3dc7.js";import"./styleUtils-4adfed9e.js";import"./DictionaryLoader-2cf5144e.js";import"./LRUCache-14115d91.js";import"./heatmapUtils-84e8c43b.js";import"./featureConversionUtils-01cdde8a.js";import"./TopFeaturesQuery-785f5453.js";import"./FeatureLayer-a9f3e6ec.js";import"./MultiOriginJSONSupport-27362d57.js";import"./LayerFloorInfo-2cd5e8ae.js";import"./FeatureLayerBase-aebdf2da.js";import"./HeightModelInfo-22ad72d7.js";import"./arcgisLayerUrl-0b2b7691.js";import"./OperationalLayer-24e6fa34.js";import"./ElevationInfo-ce9cacc2.js";import"./editsZScale-2015e7db.js";import"./APIKeyMixin-34d76a46.js";import"./ArcGISService-ea748edf.js";import"./CustomParametersMixin-807d2055.js";import"./EditBusLayer-40671d1a.js";import"./FeatureReductionLayer-4077b2ae.js";import"./labelingInfo-5c3a46f6.js";import"./labelUtils-a194a22a.js";import"./defaultsJSON-59981e75.js";import"./OrderedLayer-e7edf19c.js";import"./PortalLayer-f1a64f99.js";import"./RefreshableLayer-1c078c47.js";import"./ScaleRangeLayer-271178b7.js";import"./TemporalLayer-39c07299.js";import"./TimeInfo-c89d0ef4.js";import"./FeatureTemplate-746d033e.js";import"./FeatureType-c83c5f49.js";import"./fieldProperties-7547b373.js";import"./FieldsIndex-aa6dd3fa.js";import"./versionUtils-92993d41.js";import"./styleUtils-da81b13f.js";import"./popupUtils-07fe66a7.js";import"./colorUtils-82440b70.js";import"./mat2d-d0b91e3e.js";import"./Scheduler-8433672d.js";import"./GraphicsLayer-10573c27.js";import"./enums-0fc02184.js";import"./TileStrategy-4189758f.js";import"./TileStore-787dbea4.js";import"./TileKey-0750ad58.js";import"./rbush-8e36784a.js";import"./quickselect-322ec8e1.js";import"./capabilities-3636c6a4.js";import"./scaleUtils-b32a50d8.js";import"./ElevationSamplerData-7decf898.js";import"./WaterSurface.glsl-fc8a5726.js";import"./NormalUtils.glsl-a59958d7.js";import"./HUD.glsl-80cf9a21.js";import"./edgeProcessing-3ca548e1.js";import"./deduplicate-b0bc48cc.js";import"./projection-aa2a8986.js";import"./Octree-1a841545.js";import"./HUDMaterial.glsl-4bf3c7df.js";import"./sdfPrimitives-a24e9cb2.js";import"./floatRGBA-fa8308d2.js";import"./dehydratedFeatures-4eeb381a.js";import"./quantizationUtils-33aba427.js";import"./labelFormatUtils-4d730eaa.js";import"./I3SUtil-3ffd3baa.js";import"./I3SBinaryReader-3d2c2faa.js";import"./LineCallout.glsl-a0056465.js";import"./earcut-58237617.js";import"./QueryEngineResult-665bf7fb.js";import"./WhereClause-2b5b05b2.js";import"./utils-30a9a7e0.js";import"./generateRendererUtils-a996108f.js";import"./utils-1f4fcfec.js";import"./json-48e3ea08.js";import"./MeshComponent-f50df6af.js";import"./MarkerSizing.glsl-c6fa192a.js";import"./RibbonLine.glsl-2a3b4d4e.js";import"./LineStipple.glsl-de782d6a.js";import"./callExpressionWithFeature-a7532499.js";import"./LineMarker.glsl-8f444621.js";import"./NativeLine.glsl-cdbbf172.js";import"./Path.glsl-60b36878.js";import"./ColorMaterial.glsl-8310ffb3.js";import"./Pattern.glsl-d3388745.js";import"./EffectView-d3bf37ed.js";import"./LercDecoder-73115fd2.js";import"./config-1337d16e.js";import"./workerHelper-c6d4a8cb.js";import"./Subtype-5b01b21f.js";import"./datetime-4f774298.js";import"./elevationInfoUtils-427916a5.js";import"./ExportImageParameters-f328a234.js";import"./sublayerUtils-ba7f61bc.js";import"./webStyleSymbolUtils-55ed91cd.js";import"./enums-4b2a86a0.js";import"./capabilities-a18453f6.js";import"./I3SIndexInfo-acc8ea15.js";import"./I3SLayerDefinitions-f6c057a8.js";import"./popupUtils-e8f3d062.js";import"./ImageMaterial-0dc3e395.js";import"./ImageMaterial.glsl-2969e37d.js";import"./ShadedColorMaterial.glsl-7dee9441.js";function yi(t){switch(t.type){case"building-scene":case"csv":case"dimension":case"feature":case"geo-rss":case"geojson":case"graphics":case"group":case"integrated-mesh":case"kml":case"line-of-sight":case"map-notes":case"ogc-feature":case"oriented-imagery":case"point-cloud":case"route":case"scene":case"stream":case"voxel":case"subtype-group":case"unknown":case"unsupported":case"wfs":case null:return!1;case"base-dynamic":case"base-elevation":case"base-tile":case"bing-maps":case"elevation":case"imagery":case"imagery-tile":case"map-image":case"media":case"open-street-map":case"tile":case"vector-tile":case"wcs":case"web-tile":case"wms":case"wmts":return!0;default:return Xt(t.type),!1}}const wt="esri.views.3d.analysis.Slice.SliceController",B=qt.getLogger(wt);let g=class extends Y{constructor(t){super(t),this._handles=new z,this._internalChange=!1,this._currentSlicePlane=null}initialize(){this._handles.add(this.analysis.excludedLayers.on("before-add",t=>{const i=t.item;i!=null&&(i instanceof et||i instanceof Qt)?i instanceof et&&yi(i)?(B.error("excludedLayers",`Layer '${i.title}, id:${i.id}' of type '${i.type}' can not be individually excluded from slicing. Use 'excludeGroundSurface' instead.`),t.preventDefault()):this.analysis.excludedLayers.includes(i)&&t.preventDefault():(B.error("excludedLayers","Invalid layer type, layer must derive from Layer or BuildingComponentSublayer"),t.preventDefault())})),vi(this.view,this),this._handles.add([_(()=>this.analysisViewData.plane,()=>{this._internalChange||this._updateSlicePlaneFromBoundedPlane(),this._updateLayerViews()},{sync:!0}),_(()=>this.analysis.excludeGroundSurface,()=>this._updateLayerViews(),{sync:!0}),this.analysis.excludedLayers.on("change",()=>this._updateLayerViews()),_(()=>[this.analysisViewData.active,this.analysisViewData.visible],()=>{this._updateActiveController(),this._updateViewSlicePlane()},{sync:!0}),_(()=>this._allLayerAndSubLayerViews,()=>this._updateLayerViews())]),this._handles.add([_(()=>this.analysis.shape,()=>{this._internalChange||(this._updateBoundedPlaneFromSlicePlane(),this._updateViewSlicePlane())},{sync:!0})],"analysis"),this._updateActiveController(),this._updateBoundedPlaneFromSlicePlane(),this._updateViewSlicePlane()}destroy(){this.analysisViewData.active&&(this.analysisViewData.active=!1,this.view.slicePlane=null),wi(this.view,this),this._handles.destroy(),this.set("view",null)}get _allLayerAndSubLayerViews(){const t=this.view.allLayerViews.items;return t.concat(t.filter(Et).flatMap(({sublayerViews:i})=>i.items))}_updateBoundedPlaneFromSlicePlane(){const t=this.analysis.shape,i=this._currentSlicePlane;if(p(i)&&p(t)||r(i)&&r(t)&&t.equals(i))return;let e=null,a=null;if(r(t)&&r(t.position)){const s=t.position.spatialReference,o=Tt(t,this.view);p(o)&&Wt(this.analysis,s,B),e=St(o,this.view,{tiltEnabled:this.analysis.tiltEnabled},c()),r(e)&&(a={heading:t.heading,tilt:t.tilt,position:t.position,width:t.width,height:t.height})}this._currentSlicePlane=a,this._internalChange=!0,this.analysisViewData.plane=e,this._internalChange=!1}_updateSlicePlaneFromBoundedPlane(){const t=this.analysisViewData.plane,i=pt(t,this.view,this.view.spatialReference,new ht);let e=null;r(i)&&(e={heading:i.heading,tilt:i.tilt,position:i.position,width:i.width,height:i.height}),this._currentSlicePlane=e,this._internalChange=!0,this.analysis.shape=i,this._internalChange=!1,this._updateViewSlicePlane()}_updateActiveController(){if(K)return;const t=gt(this.view);if(this.analysisViewData.active)r(t.activeController)&&t.activeController!==this?(K=!0,t.activeController.analysisViewData.active=!1,K=!1):r(t.activeController)&&t.activeController,this._updateLayerViews(),t.activeController=this;else{if(r(t.activeController)&&t.activeController!==this)return;r(t.activeController)&&t.activeController===this&&(t.activeController=null,this._updateLayerViews())}}_updateViewSlicePlane(){_i(this.view)}_updateLayerViews(){const t=r(this.analysisViewData.plane)&&this.analysisViewData.visible&&this.analysisViewData.active,i=[],e=a=>{"layers"in a?a.layers.forEach(e):i.push(a)};this.analysis.excludedLayers.forEach(e),this.view.allLayerViews.forEach(a=>{a.destroyed||("slicePlaneEnabled"in a&&(a.slicePlaneEnabled=t&&!i.includes(a.layer)),"sublayerViews"in a&&a.sublayerViews.forEach(s=>{s.slicePlaneEnabled=t&&!i.includes(s.sublayer)}))}),this.view.basemapTerrain!=null&&(this.view.basemapTerrain.slicePlaneEnabled=t&&!this.analysis.excludeGroundSurface)}};n([l()],g.prototype,"view",void 0),n([l()],g.prototype,"analysis",void 0),n([l()],g.prototype,"analysisViewData",void 0),n([l()],g.prototype,"_allLayerAndSubLayerViews",null),g=n([H(wt)],g);const P=new Map;let K=!1;function _i(t){const i=gt(t).activeController;r(i)&&r(i.analysisViewData.plane)&&i.analysisViewData.visible?t.slicePlane=i.analysisViewData.plane:t.slicePlane=null}function vi(t,i){P.has(t)||P.set(t,{all:[],activeController:null}),P.get(t).all.push(i)}function gt(t){return P.get(t)}function wi(t,i){if(!P.has(t))throw new Error("view expected in global slice register");const e=P.get(t),a=e.all.lastIndexOf(i);if(a===-1)throw new Error("controller expected in global slice register");e.all.splice(a,1),e.all.length===0&&P.delete(t)}var Z;let h=Z=class extends ui{constructor(t){super(t),this._clock=ti,this._previewPlaneOpacity=1,this.removeIncompleteOnCancel=!1,this.layersMode="none",this.shiftManipulator=null,this.rotateHeadingManipulator=null,this.rotateTiltManipulator=null,this.resizeManipulators=null,this._handles=new z,this._viewHandles=new z,this._frameTask=null,this._pointerMoveTimerMs=Ct,this._prevPointerMoveTimeout=null,this._previewPlaneGridVisualElement=null,this._previewPlaneOutlineVisualElement=null,this._startPlane=c(),this._previewPlane=null,this._activeKeyModifiers={},this._lastCursorPosition=ii(),this._resizeHandles=[{direction:[1,0]},{direction:[1,1]},{direction:[0,1]},{direction:[-1,1]},{direction:[-1,0]},{direction:[-1,-1]},{direction:[0,-1]},{direction:[1,-1]}],this._intersector=jt(t.view.state.viewingMode),this._intersector.options.store=Zt.MIN}initialize(){if(this.analysis==null)throw new Error("SliceTool requires valid analysis, but null was provided.");this._rotateHeadingImage=li(this.view.toolViewManager.textures),this._rotateTiltImage=pi(this.view.toolViewManager.textures);const t=e=>{this._updateManipulatorsInteractive(e),e.grabbing||(r(this.analysisViewData.plane)&&m(this.analysisViewData.plane,this._startPlane),this.inputState=null)};this.shiftManipulator=xt(this.view),this.manipulators.add(this.shiftManipulator),this.shiftManipulator.events.on("grab-changed",e=>{this._onShiftGrab(e),t(this.shiftManipulator)}),this._handles.add(this._createShiftDragPipeline(this.shiftManipulator)),this.rotateHeadingManipulator=W(this.view,this._rotateHeadingImage.texture),this.manipulators.add(this.rotateHeadingManipulator),this.rotateHeadingManipulator.events.on("grab-changed",e=>{this._onRotateHeadingGrab(e),t(this.rotateHeadingManipulator)}),this._handles.add(this._createRotateHeadingDragPipeline(this.rotateHeadingManipulator)),this.rotateTiltManipulator=W(this.view,this._rotateTiltImage.texture),this.manipulators.add(this.rotateTiltManipulator),this.rotateTiltManipulator.events.on("grab-changed",e=>{this._onRotateTiltGrab(e),t(this.rotateTiltManipulator)}),this._handles.add(this._createRotateTiltDragPipeline(this.rotateTiltManipulator)),this.resizeManipulators=this._resizeHandles.map((e,a)=>{const s=kt(this.view,e);return s.events.on("grab-changed",o=>{this._onResizeGrab(o,a),t(s)}),this._handles.add(this._createResizeDragPipeline(s)),s}),this.manipulators.addMany(this.resizeManipulators),this._previewPlaneGridVisualElement=ut(this.view),this._previewPlaneOutlineVisualElement=mt(this.view),this._previewPlaneOutlineVisualElement.width=dt,this._handles.add(_(()=>this.analysisViewData.plane,()=>this._updateManipulators(),Nt));const i=_(()=>this.state,e=>{e==="sliced"&&this.finishToolCreation()},F);this._handles.add([i,_(()=>this.view.state.camera,()=>this._onCameraChange())])}destroy(){this._rotateHeadingImage=J(this._rotateHeadingImage),this._rotateTiltImage=J(this._rotateTiltImage),this._handles=w(this._handles),this._viewHandles=w(this._viewHandles),this._removeFrameTask(),this._clearPointerMoveTimeout(),this._previewPlaneOutlineVisualElement=w(this._previewPlaneOutlineVisualElement),this._previewPlaneGridVisualElement=w(this._previewPlaneGridVisualElement)}get state(){const t=!!this.analysisViewData.plane,i=!!this.inputState;return t?t&&i?"slicing":t&&!i?"sliced":"ready":"ready"}get cursor(){return this._isPlacingSlicePlane||this.layersMode==="exclude"?"crosshair":r(this._creatingPointerId)?"grabbing":null}set analysis(t){if(t==null)throw new Error("SliceTool requires valid analysis, but null was provided.");this._handles.remove("analysis"),this._set("analysis",t)}get inputState(){return this._get("inputState")}set inputState(t){this._set("inputState",t),this.analysisViewData.showGrid=r(t)&&t.type==="resize",this._updateMaterials()}get _isPlacingSlicePlane(){return!this.inputState&&!this.analysisViewData.plane&&this.active}get _creatingPointerId(){return r(this.inputState)&&this.inputState.type==="shift"?this.inputState.creatingPointerId:null}enterExcludeLayerMode(){p(this.analysisViewData.plane)||(this._set("layersMode","exclude"),this.active||(this.view.activeTool=this))}exitExcludeLayerMode(){p(this.analysisViewData.plane)||(this._set("layersMode","none"),this.active&&(this.view.activeTool=null))}onDeactivate(){this._set("layersMode","none"),this._updatePreviewPlane(null)}onShow(){this._updateVisibility(!0)}onHide(){this._updateVisibility(!1)}_updateVisibility(t){this._updateManipulators(),t||this._clearPointerMoveTimeout()}onInputEvent(t){switch(t.type){case"pointer-drag":if(!U(t))return;this._isPlacingSlicePlane?this._onClickPlacePlane(t)&&t.stopPropagation():this._onPointerDrag(t)&&t.stopPropagation();break;case"pointer-move":this._onPointerMove(t);break;case"pointer-up":this._onPointerUp(t)&&t.stopPropagation();break;case"immediate-click":if(!U(t))return;this._onClickPlacePlane(t)&&t.stopPropagation();break;case"click":if(!U(t))return;this._onClickExcludeLayer(t)&&t.stopPropagation();break;case"drag":this.inputState&&t.stopPropagation();break;case"key-down":this._onKeyDown(t)&&t.stopPropagation();break;case"key-up":this._onKeyUp(t)&&t.stopPropagation()}}onEditableChange(){this.analysisViewData.editable=this.internallyEditable}_onPointerDrag(t){const i=this.inputState;if(t.pointerId===this._creatingPointerId&&r(i)&&i.type==="shift"){const e=M(t);return this.shiftManipulator.events.emit("drag",{action:i.hasBeenDragged?"update":"start",pointerType:t.pointerType,start:e,screenPoint:e}),i.hasBeenDragged=!0,!0}return!1}_onPointerMove(t){this._lastCursorPosition.x=t.x,this._lastCursorPosition.y=t.y,this._resetPointerMoveTimeout(),t.pointerType!=="touch"&&this._updatePreviewPlane(M(t),this._activeKeyModifiers)}_onCameraChange(){this._updatePreviewPlane(this._lastCursorPosition,this._activeKeyModifiers),this._updateManipulators()}_onPointerUp(t){if(t.pointerId===this._creatingPointerId&&r(this.analysisViewData.plane)){const i=M(t);return this.shiftManipulator.events.emit("drag",{action:"end",start:i,screenPoint:i}),m(this.analysisViewData.plane,this._startPlane),this.inputState=null,!0}return!1}_onClickPlacePlane(t){if(this.layersMode==="exclude")return!1;if(this._isPlacingSlicePlane){const i=M(t),e=c();if(this._pickPlane(i,!1,this._activeKeyModifiers,e)){if(m(e,this._startPlane),this.analysis.shape=pt(e,this.view,this.view.spatialReference,new ht),t.type==="pointer-drag"){const a=this._calculatePickRay(i);this.inputState=lt(a,t.pointerId,e.origin,e)}return!0}}return!1}_onClickExcludeLayer(t){return!(this.layersMode!=="exclude"||!this.created)&&(this.view.hitTest(M(t)).then(i=>{if(i.results.length){const e=i.results[0],a=(e==null?void 0:e.type)==="graphic"&&e.graphic;if(a){const s=a.sourceLayer||a.layer;s&&this.analysis.excludedLayers.push(s)}}else i.ground.layer?this.analysis.excludedLayers.push(i.ground.layer):this.analysis.excludeGroundSurface=!0}),this._set("layersMode","none"),this.active&&(this.view.activeTool=null),!0)}_onKeyDown(t){return(t.key===L||t.key===G)&&(this._activeKeyModifiers[t.key]=!0,r(this._previewPlane)&&this._updatePreviewPlane(this._lastCursorPosition,this._activeKeyModifiers),!0)}_onKeyUp(t){return!(t.key!==L&&t.key!==G||!this._activeKeyModifiers[t.key])&&(delete this._activeKeyModifiers[t.key],r(this._previewPlane)&&this._updatePreviewPlane(this._lastCursorPosition,this._activeKeyModifiers),!0)}_onShiftGrab(t){if(t.action!=="start"||p(this.analysisViewData.plane))return;const i=this._calculatePickRay(t.screenPoint);m(this.analysisViewData.plane,this._startPlane),this.inputState=lt(i,null,this.shiftManipulator.renderLocation,this.analysisViewData.plane)}_createShiftDragPipeline(t){return C(t,(i,e,a)=>{const s=this.inputState;if(p(s)||s.type!=="shift")return;const o=r(this.analysisViewData.plane)?m(this.analysisViewData.plane,c()):null;e.next(k(this.view,s.shiftPlane)).next(this._shiftDragAdjustSensitivity(s)).next(this._shiftDragUpdatePlane(s)),a.next(()=>{r(o)&&this._updateBoundedPlane(o)})})}_shiftDragAdjustSensitivity(t){return i=>{if(p(this.analysisViewData.plane))return null;const e=.001,a=Math.min((1-Math.abs(x(q(this.analysisViewData.plane),i.ray.direction)/E(i.ray.direction)))/e,1),s=-ot(this._startPlane.plane,i.renderEnd),o=-ot(this._startPlane.plane,t.startPoint);return t.depth=t.depth*(1-a)+s*a-o,i}}_shiftDragUpdatePlane(t){return()=>{if(p(this.analysisViewData.plane))return;const i=st(d.get(),this._startPlane.origin),e=st(d.get(),q(this._startPlane));O(e,e,-t.depth),rt(e,e,i);const a=it(e,this.analysisViewData.plane.basis1,this.analysisViewData.plane.basis2,c());this._updateBoundedPlane(a)}}_onRotateHeadingGrab(t){if(t.action!=="start"||p(this.analysisViewData.plane))return;const i=X(this.analysisViewData.plane,this.view.renderCoordsHelper,tt.HEADING,j()),e=this._calculatePickRay(t.screenPoint),a=N();$(i,e,a)&&(m(this.analysisViewData.plane,this._startPlane),this.inputState={type:"rotate",rotatePlane:i,startPoint:a})}_createRotateHeadingDragPipeline(t){return C(t,(i,e,a)=>{const s=this.inputState;if(p(s)||s.type!=="rotate")return;const o=r(this.analysisViewData.plane)?m(this.analysisViewData.plane,c()):null;e.next(k(this.view,s.rotatePlane)).next(this._rotateDragRenderPlaneToRotate(s)).next(this._rotateDragUpdatePlaneFromRotate()),a.next(()=>{r(o)&&this._updateBoundedPlane(o)})})}_onRotateTiltGrab(t){if(t.action!=="start"||p(this.analysisViewData.plane))return;const i=X(this.analysisViewData.plane,this.view.renderCoordsHelper,tt.TILT,j()),e=this._calculatePickRay(t.screenPoint),a=N();$(i,e,a)&&(m(this.analysisViewData.plane,this._startPlane),this.inputState={type:"rotate",rotatePlane:i,startPoint:a})}_createRotateTiltDragPipeline(t){return C(t,(i,e,a)=>{const s=this.inputState;if(p(s)||s.type!=="rotate")return;const o=r(this.analysisViewData.plane)?m(this.analysisViewData.plane,c()):null;e.next(k(this.view,s.rotatePlane)).next(this._rotateDragRenderPlaneToRotate(s)).next(this._rotateDragUpdatePlaneFromRotate()),a.next(()=>{r(o)&&this._updateBoundedPlane(o)})})}_rotateDragRenderPlaneToRotate(t){return i=>{if(p(this.analysisViewData.plane))return null;const e=ri(t.rotatePlane),a=hi(t.startPoint,i.renderEnd,this.analysisViewData.plane.origin,e);return{...i,rotateAxis:e,rotateAngle:a}}}_rotateDragUpdatePlaneFromRotate(){return t=>{if(p(this.analysisViewData.plane))return;const i=ai(T.get(),t.rotateAngle,t.rotateAxis);if(p(i))return;const e=nt(d.get(),this._startPlane.basis1,i),a=nt(d.get(),this._startPlane.basis2,i),s=it(this.analysisViewData.plane.origin,e,a,c());this._updateBoundedPlane(s)}}_onResizeGrab(t,i){if(t.action!=="start"||p(this.analysisViewData.plane))return;const e=this._calculatePickRay(t.screenPoint),a=d.get();$(this.analysisViewData.plane.plane,e,a)&&(m(this.analysisViewData.plane,this._startPlane),this.inputState={type:"resize",activeHandleIdx:i,startPoint:si(a)})}_createResizeDragPipeline(t){return C(t,(i,e,a)=>{const s=this.inputState;if(p(s)||s.type!=="resize"||p(this.analysisViewData.plane))return;const o=m(this.analysisViewData.plane,c());e.next(k(this.view,this.analysisViewData.plane.plane)).next(this._resizeDragUpdatePlane(s)),a.next(()=>{this._updateBoundedPlane(o)})})}_resizeDragUpdatePlane(t){return i=>{if(p(this.analysisViewData.plane))return;const e=this._resizeHandles[t.activeHandleIdx],a=$t(e,t.startPoint,i.renderEnd,this.view.state.camera,this._startPlane,m(this.analysisViewData.plane));this._updateBoundedPlane(a)}}_updateBoundedPlane(t){const i=this.analysisViewData;if(!r(i))throw new Error("valid internal object expected");i.plane=t}_updatePreviewPlane(t,i={}){let e=this._previewPlane;if(this._previewPlane=null,p(t))return this._removeFrameTask(),void this._updateManipulators();if(!this.analysisViewData.plane&&this.active){const a=r(e)?e:c();if(e=r(e)?m(e,gi):null,this._pickPlane(t,!0,i,a)){const s=Bt;let o=!1;r(e)&&(o=x(e.plane,a.plane)<s||x(A(d.get(),e.basis1),A(d.get(),a.basis1))<s),o&&(this._previewPlaneOpacity=0),this._previewPlane=a}}r(this._previewPlane)&&p(this._frameTask)&&this._previewPlaneOpacity===0?this._frameTask=Mt({update:({deltaTime:a})=>{this._previewPlaneOpacity=Math.min(this._previewPlaneOpacity+a/(1e3*zt),1),this._updateManipulators(),this._previewPlaneOpacity===1&&this._removeFrameTask()}}):p(this._previewPlane)&&r(this._frameTask)?this._removeFrameTask():r(this._previewPlane)&&this._updateManipulators()}_removeFrameTask(){this._frameTask=Q(this._frameTask)}_calculatePickRay(t){const i=ni(),e=at(t,Pi);return Yt(this.view.state.camera,e,i),A(i.direction,i.direction),i}_pickMinResult(t){const i=at(t,oi.get());return this.view.sceneIntersectionHelper.intersectToolIntersectorScreen(i,this._intersector),this._intersector.results.min}_pickPlane(t,i,e,a){const s=this._pickMinResult(t),o=d.get();if(!s.getIntersectionPoint(o))return!1;const u=s.getTransformedNormal(d.get()),V=this.view.state.camera;x(u,V.viewForward)>0&&O(u,u,-1);const R=Ht(o,V),Pt=(i?1:-1)*R*Kt,I=O(d.get(),u,Pt);rt(I,I,o);const ft=this.analysis.tiltEnabled?S.TILTED:S.HORIZONTAL_OR_VERTICAL,Vt=e[L]?S.VERTICAL:e[G]?S.HORIZONTAL:ft;return Rt(I,u,R,R,V,Vt,this.view.renderCoordsHelper,a),!0}_clearPointerMoveTimeout(){this._prevPointerMoveTimeout=Q(this._prevPointerMoveTimeout)}_resetPointerMoveTimeout(){this._clearPointerMoveTimeout(),this.shiftManipulator.state|=f,this.rotateHeadingManipulator.state|=f,this.rotateTiltManipulator.state|=f,this._prevPointerMoveTimeout=this._clock.setTimeout(()=>{this.shiftManipulator.state&=~f,this.rotateHeadingManipulator.state&=~f,this.rotateTiltManipulator.state&=~f},this._pointerMoveTimerMs)}_updateManipulators(){if(Z.disableEngineLayers)return;let t=null,i=!1;if(r(this.analysisViewData.plane))t=this.analysisViewData.plane,i=!1;else{if(!r(this._previewPlane))return this.shiftManipulator.available=!1,this.rotateHeadingManipulator.available=!1,this.rotateTiltManipulator.available=!1,this.resizeManipulators.forEach(u=>u.available=!1),this._previewPlaneOutlineVisualElement.visible=!1,void(this._previewPlaneGridVisualElement.visible=!1);t=this._previewPlane,i=!0}const e=ct(t,T.get());i?(this.shiftManipulator.available=!1,this.rotateHeadingManipulator.available=!1,this.rotateTiltManipulator.available=!1,this.resizeManipulators.forEach(u=>u.available=!1),this._previewPlaneOutlineVisualElement.attached=!0,this._previewPlaneGridVisualElement.attached=!0,this._previewPlaneOutlineVisualElement.visible=!0,this._previewPlaneGridVisualElement.visible=!0):(this.shiftManipulator.available=!0,this.rotateHeadingManipulator.available=!0,this.rotateTiltManipulator.available=this.analysis.tiltEnabled,this.resizeManipulators.forEach(u=>u.available=!0),It(this.shiftManipulator,e,t,this.view.state.camera),Lt(this.rotateHeadingManipulator,e,t,this.view.renderCoordsHelper),Gt(this.rotateTiltManipulator,e,t),this.resizeManipulators.forEach((u,V)=>Ot(u,this._resizeHandles[V],e,t)),this._previewPlaneOutlineVisualElement.visible=!1,this._previewPlaneGridVisualElement.visible=!1);const a=vt(d.get(),E(t.basis1),E(t.basis2),1),s=yt(T.get(),a),o=_t(s,e,s);this._previewPlaneOutlineVisualElement.transform=o,this._previewPlaneGridVisualElement.transform=o,this._updateMaterials()}_updateMaterials(){const t=[b[0],b[1],b[2],b[3]*this._previewPlaneOpacity];this._previewPlaneOutlineVisualElement.color=t;const i=[D[0],D[1],D[2],D[3]*this._previewPlaneOpacity],e=[0,0,0,0];this._previewPlaneGridVisualElement.backgroundColor=i,this._previewPlaneGridVisualElement.gridColor=e}_updateManipulatorsInteractive(t){if(!t.grabbing)return this.shiftManipulator.interactive=!0,this.rotateHeadingManipulator.interactive=!0,this.rotateTiltManipulator.interactive=!0,void this.resizeManipulators.forEach(i=>{i.interactive=!0});this.shiftManipulator.interactive=this.shiftManipulator===t,this.rotateHeadingManipulator.interactive=this.rotateHeadingManipulator===t,this.rotateTiltManipulator.interactive=this.rotateTiltManipulator===t,this.resizeManipulators.forEach(i=>{i.interactive=i===t})}testData(){return{plane:this.analysisViewData.plane,setPointerMoveTimerMs:t=>{this._pointerMoveTimerMs=t}}}};function lt(t,i,e,a){const s=At(e,q(a),t.direction,j()),o=N();return $(s,t,o)?{type:"shift",creatingPointerId:i,hasBeenDragged:!1,shiftPlane:s,depth:0,startPoint:o}:null}function U(t){return t.pointerType!=="mouse"||t.button===0}h.disableEngineLayers=!1,n([l()],h.prototype,"_clock",void 0),n([l({constructOnly:!0})],h.prototype,"view",void 0),n([l()],h.prototype,"analysisViewData",void 0),n([l({readOnly:!0})],h.prototype,"state",null),n([l({readOnly:!0})],h.prototype,"cursor",null),n([l()],h.prototype,"analysis",null),n([l()],h.prototype,"removeIncompleteOnCancel",void 0),n([l({readOnly:!0})],h.prototype,"layersMode",void 0),n([l({value:null})],h.prototype,"inputState",null),n([l()],h.prototype,"_isPlacingSlicePlane",null),n([l()],h.prototype,"_creatingPointerId",null),h=Z=n([H("esri.views.3d.analysis.Slice.SliceTool")],h);const gi=c(),Pi=ei(),fi=h;let v=class extends Y{constructor(t){super(t),this._handles=new z,this._gridVisualElement=null,this._outlineVisualElement=null,this.showGrid=!1,this.preview=!0}initialize(){const t=this.analysisViewData;if(p(t))throw new Error("expected internal object to be valid");this._gridVisualElement=ut(this.view),this._outlineVisualElement=mt(this.view),this._handles.add([_(()=>({visible:r(t.plane)&&this.analysisViewData.visible,active:this.analysisViewData.active,preview:this.preview,showGrid:this.showGrid}),i=>this._updateMaterials(i),F),_(()=>t.plane,i=>this._updatePlane(i),F)],"internal")}destroy(){this._handles.destroy(),this._gridVisualElement=w(this._gridVisualElement),this._outlineVisualElement=w(this._outlineVisualElement),this.set("view",null)}_updatePlane(t){if(p(t))return;this._gridVisualElement.attached=!0,this._outlineVisualElement.attached=!0;const i=vt(d.get(),E(t.basis1),E(t.basis2),1),e=yt(T.get(),i),a=ct(t,T.get()),s=_t(e,a,e);this._outlineVisualElement.transform=s,this._gridVisualElement.transform=s}_updateMaterials({visible:t,active:i,preview:e,showGrid:a}){this._outlineVisualElement.color=b,this._outlineVisualElement.width=e?dt:Ut,this._outlineVisualElement.stipplePattern=i?null:Jt(5),this._gridVisualElement.backgroundColor=D,this._gridVisualElement.gridColor=a?Ft:ci,this._gridVisualElement.visible=t,this._outlineVisualElement.visible=t}};n([l()],v.prototype,"view",void 0),n([l()],v.prototype,"analysis",void 0),n([l()],v.prototype,"analysisViewData",void 0),n([l()],v.prototype,"showGrid",void 0),n([l()],v.prototype,"preview",void 0),v=n([H("esri.views.3d.analysis.Slice.SliceVisualization")],v);let y=class extends Dt(Y){constructor(t){super(t),this.type="slice-view-3d",this.analysis=null,this.tool=null,this.analysisVisualization=null,this.analysisController=null,this.plane=null,this.active=!0}initialize(){this.analysisVisualization=new v({view:this.view,analysis:this.analysis,analysisViewData:this}),this.analysisController=new g({view:this.view,analysis:this.analysis,analysisViewData:this}),this.addHandles(mi(this,fi))}destroy(){di(this),this.analysisVisualization=w(this.analysisVisualization),this.analysisController=w(this.analysisController)}get showGrid(){var t;return((t=this.analysisVisualization)==null?void 0:t.showGrid)??!1}set showGrid(t){this.analysisVisualization&&(this.analysisVisualization.showGrid=t)}get editable(){return!this.analysisVisualization.preview}set editable(t){this.analysisVisualization.preview=!t}get testData(){return{visualization:this.analysisVisualization,controller:this.analysisController,tool:bt(this.tool)}}};n([l({readOnly:!0})],y.prototype,"type",void 0),n([l({constructOnly:!0,nonNullable:!0})],y.prototype,"analysis",void 0),n([l()],y.prototype,"tool",void 0),n([l()],y.prototype,"plane",void 0),n([l()],y.prototype,"active",void 0),n([l()],y.prototype,"showGrid",null),n([l()],y.prototype,"editable",null),y=n([H("esri.views.3d.analysis.SliceAnalysisView3D")],y);const Un=y;export{Un as default};
