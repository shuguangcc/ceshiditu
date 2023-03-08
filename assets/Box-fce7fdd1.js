import{e as d,y as u,n as nt}from"./cast-7928d7aa.js";import"./geometry-5a216427.js";import{g as R}from"./Graphic-b46e2684.js";import{n as lt}from"./Evented-515b9d9c.js";import{s as X,r as D,t as S}from"./typedArrayUtil-a8b5b3e9.js";import{b as mt}from"./quantityFormatUtils-ba1f6cd1.js";import{f as _t,l as k,w as dt}from"./reactiveUtils-f41a4e00.js";import"./ensureType-cf29afa9.js";import{u as I}from"./aaBoundingRect-4a760199.js";import{v as B,m as Q,a as ut,r as P,h as V}from"./Polyline-bf268e7b.js";import{w as g}from"./Extent-69509002.js";import{y as M,S as U,m as gt}from"./symbols-fa594797.js";import{cJ as vt,c7 as W,cI as x,cK as $,cL as ft,cM as yt,cH as Gt}from"./index-455b69b8.js";import{h as xt,D as wt}from"./GraphicMover-5e891e04.js";import{i as bt,p as St}from"./ExtentTooltipInfos-4b5e4bb7.js";import{b as F,h as z}from"./automaticLengthMeasurementUtils-24c52b73.js";import{r as kt}from"./TranslateTooltipInfos-4fb7abcc.js";import"./string-cdf077e6.js";import"./Error-653283ae.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-6684e352.js";import"./typeUtils-eb9416d0.js";import"./jsonMap-c1f958cf.js";import"./PopupTemplate-6eb885db.js";import"./Clonable-ba795b08.js";import"./Collection-78126e82.js";import"./SimpleObservable-7dcdef1d.js";import"./fieldUtils-31bfecd2.js";import"./preload-helper-41c905a7.js";import"./arcadeOnDemand-c6d1b9f2.js";import"./enumeration-3c281341.js";import"./number-347a3a44.js";import"./locale-30120714.js";import"./Identifiable-aa6d459d.js";import"./jsonUtils-03c4af61.js";import"./unitUtils-47abac71.js";import"./Ellipsoid-89682c5e.js";import"./mathUtils-2519596a.js";import"./vec3-a020a6f6.js";import"./vec3f64-2f9cef06.js";import"./common-c186b691.js";import"./vec4-790471c0.js";import"./CIMSymbol-1379245a.js";import"./Symbol-fc4312a4.js";import"./Color-a42a8267.js";import"./colorUtils-639f4d25.js";import"./screenUtils-410d12c0.js";import"./opacityUtils-243aae26.js";import"./symbolLayerUtils3D-1f8d4478.js";import"./aaBoundingBox-fc742a4e.js";import"./request-d3e98716.js";import"./persistableUrlUtils-a16d0f55.js";import"./Symbol3DAnchorPosition2D-c0f4a14d.js";import"./collectionUtils-3831b7c4.js";import"./Portal-8b65c9c4.js";import"./Loadable-48bc1293.js";import"./Promise-dfdee8ba.js";import"./PortalGroup-bfe93c76.js";import"./PortalUser-4c8e1adc.js";import"./Basemap-a8f7f439.js";import"./deprecate-b9088bd3.js";import"./loadAll-7fd968fe.js";import"./asyncUtils-62e8a185.js";import"./PortalItem-aa42c739.js";import"./assets-0b172f07.js";import"./messages-be07754e.js";import"./writeUtils-067c4f82.js";import"./layerUtils-034678f6.js";import"./compilerUtils-034cacb8.js";import"./CollectionFlattener-3dd1f479.js";import"./TablesMixin-e7a6aab1.js";import"./Layer-f0696768.js";import"./Cyclical-b66238c6.js";import"./workers-898a7c4c.js";import"./Connection-a681777e.js";import"./Queue-3a0c055d.js";import"./intl-f1e98361.js";import"./projection-d7b57a6c.js";import"./mat4-44a0988f.js";import"./zscale-1e1fc911.js";import"./TileInfo-34f80a8e.js";import"./widget-f7489a3f.js";import"./uuid-73213768.js";import"./dom-5b7af1bf.js";import"./HandleOwner-e1406413.js";import"./byteSizeEstimations-f0cab514.js";import"./executeQueryJSON-bcd96e1a.js";import"./normalizeUtils-ee4bf39f.js";import"./query-922e6fbf.js";import"./pbfQueryUtils-72f9b45b.js";import"./pbf-e1a6c35b.js";import"./OptimizedFeature-3de538c1.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-d9d8ef40.js";import"./FeatureSet-0573546e.js";import"./Field-f5fc9f6b.js";import"./fieldType-b1002185.js";import"./Query-ff8c2cfb.js";import"./TimeExtent-744afd75.js";import"./RelationshipQuery-db5fcd0c.js";import"./LegendOptions-e65e7a9c.js";import"./utils-725f8b4e.js";import"./BlendLayer-d8293c8d.js";import"./parser-2b40deea.js";import"./mat4f32-77b3d8ac.js";import"./ItemCache-ee28c7ba.js";import"./MemCache-4b976a8b.js";import"./cimSymbolUtils-2e4dde89.js";import"./utils-c81a5c52.js";import"./jsonUtils-c56f8821.js";import"./UniqueValueRenderer-103ec66d.js";import"./diffUtils-1ac65748.js";import"./colorRamps-3a8ac20b.js";import"./sizeVariableUtils-d4870b0d.js";import"./visualVariableUtils-c59ab38d.js";import"./lengthUtils-d2d33f94.js";import"./jsonUtils-d7db3dc7.js";import"./styleUtils-4adfed9e.js";import"./DictionaryLoader-2cf5144e.js";import"./LRUCache-14115d91.js";import"./heatmapUtils-84e8c43b.js";import"./vec4f64-e407da96.js";import"./featureConversionUtils-01cdde8a.js";import"./TopFeaturesQuery-785f5453.js";import"./FeatureLayer-a9f3e6ec.js";import"./MultiOriginJSONSupport-27362d57.js";import"./LayerFloorInfo-2cd5e8ae.js";import"./FeatureLayerBase-aebdf2da.js";import"./HeightModelInfo-22ad72d7.js";import"./arcgisLayerUrl-0b2b7691.js";import"./OperationalLayer-24e6fa34.js";import"./ElevationInfo-ce9cacc2.js";import"./editsZScale-2015e7db.js";import"./APIKeyMixin-34d76a46.js";import"./ArcGISService-ea748edf.js";import"./CustomParametersMixin-807d2055.js";import"./EditBusLayer-40671d1a.js";import"./FeatureReductionLayer-4077b2ae.js";import"./labelingInfo-5c3a46f6.js";import"./labelUtils-a194a22a.js";import"./defaultsJSON-59981e75.js";import"./OrderedLayer-e7edf19c.js";import"./PortalLayer-f1a64f99.js";import"./RefreshableLayer-1c078c47.js";import"./ScaleRangeLayer-271178b7.js";import"./TemporalLayer-39c07299.js";import"./TimeInfo-c89d0ef4.js";import"./FeatureTemplate-746d033e.js";import"./FeatureType-c83c5f49.js";import"./fieldProperties-7547b373.js";import"./FieldsIndex-aa6dd3fa.js";import"./versionUtils-92993d41.js";import"./styleUtils-da81b13f.js";import"./popupUtils-07fe66a7.js";import"./colorUtils-82440b70.js";import"./mat2d-d0b91e3e.js";import"./Scheduler-8433672d.js";import"./GraphicsLayer-10573c27.js";import"./ViewingMode-5d7d590b.js";import"./enums-0fc02184.js";import"./vec2-2cef68de.js";import"./vec2f64-30dc1443.js";import"./mat3-3fc68e72.js";import"./mat3f32-d3d088e8.js";import"./vec2f32-461e65a9.js";import"./TileStrategy-4189758f.js";import"./TileStore-787dbea4.js";import"./TileKey-0750ad58.js";import"./rbush-8e36784a.js";import"./quickselect-322ec8e1.js";import"./capabilities-3636c6a4.js";import"./context-util-1e3c8cfc.js";import"./sphere-4f5e644f.js";import"./mat3f64-c6305894.js";import"./mat4f64-1e28eae0.js";import"./quatf64-7fd38d64.js";import"./lineSegment-e6f72ff2.js";import"./plane-45609588.js";import"./scaleUtils-b32a50d8.js";import"./ElevationSamplerData-7decf898.js";import"./PhysicallyBasedRendering.glsl-a986c926.js";import"./View.glsl-8b12b8c2.js";import"./ShaderBuilder-93e8045e.js";import"./FloatPassUniform-d2dfc562.js";import"./Float4PassUniform-3a47b7b3.js";import"./RgbaFloatEncoding.glsl-6036ca34.js";import"./Texture2DPassUniform-6e8ae673.js";import"./vec3f32-c9aa289f.js";import"./VertexAttribute-9c5c630d.js";import"./Texture2DDrawUniform-22924c6f.js";import"./basicInterfaces-19ed850e.js";import"./PiUtils.glsl-0c0898f0.js";import"./ReadLinearDepth.glsl-7ff30f7d.js";import"./WaterSurface.glsl-fc8a5726.js";import"./ForwardLinearDepth.glsl-36f9eb3b.js";import"./Matrix3PassUniform-da8eddae.js";import"./Slice.glsl-a612de15.js";import"./Transform.glsl-f15542a7.js";import"./OutputHighlight.glsl-7364b03b.js";import"./MultipassTerrainTest.glsl-e79d40de.js";import"./NormalUtils.glsl-a59958d7.js";import"./AlphaCutoff-96178e0d.js";import"./TransparencyPassType-cd195b0e.js";import"./EvaluateSceneLighting.glsl-3bbc6edf.js";import"./VisualVariablePassParameters-5807c7dc.js";import"./enums-64ab819c.js";import"./VertexElementDescriptor-2925c6af.js";import"./FramebufferObject-50e1b68f.js";import"./Texture-e79b14e7.js";import"./Util-a48361c6.js";import"./SSAOBlur.glsl-c6f142fc.js";import"./ScreenSpacePass-00f8c8a4.js";import"./SSAO.glsl-6f3b4065.js";import"./ShaderTechniqueConfiguration-9f5b4555.js";import"./HUD.glsl-80cf9a21.js";import"./VerticalOffset.glsl-86460edb.js";import"./objectResourceUtils-ef6e3cdf.js";import"./devEnvironmentUtils-5002a058.js";import"./BufferView-646ba1de.js";import"./vec33-ce3aa99b.js";import"./DefaultMaterial_COLOR_GAMMA-9831d979.js";import"./types-e1c0a5bf.js";import"./Version-9baeb7ac.js";import"./quat-5b263584.js";import"./Texture-bbae5d9d.js";import"./TextureOnly.glsl-18701a3b.js";import"./InterleavedLayout-5e9cf734.js";import"./MixExternalColor.glsl-25f0049c.js";import"./symbolColorUtils-604c5345.js";import"./ObjectAndLayerIdColor.glsl-73c19386.js";import"./OutputDepth.glsl-179f1d8f.js";import"./VisualVariables.glsl-b8290512.js";import"./DiscardOrAdjustAlphaBlend.glsl-5f837994.js";import"./Normals.glsl-90e28525.js";import"./DefaultMaterial.glsl-b4f4cbc5.js";import"./VertexColor.glsl-db21b96c.js";import"./DefaultTechniqueConfiguration-e8962072.js";import"./RealisticTree.glsl-2b30ed32.js";import"./edgeProcessing-3ca548e1.js";import"./deduplicate-b0bc48cc.js";import"./projection-aa2a8986.js";import"./Octree-1a841545.js";import"./HUDMaterial.glsl-4bf3c7df.js";import"./sdfPrimitives-a24e9cb2.js";import"./floatRGBA-fa8308d2.js";import"./dehydratedFeatures-4eeb381a.js";import"./quantizationUtils-33aba427.js";import"./labelFormatUtils-4d730eaa.js";import"./I3SUtil-3ffd3baa.js";import"./I3SBinaryReader-3d2c2faa.js";import"./LineCallout.glsl-a0056465.js";import"./earcut-58237617.js";import"./QueryEngineResult-665bf7fb.js";import"./WhereClause-2b5b05b2.js";import"./utils-30a9a7e0.js";import"./generateRendererUtils-a996108f.js";import"./utils-1f4fcfec.js";import"./json-48e3ea08.js";import"./MeshComponent-f50df6af.js";import"./MarkerSizing.glsl-c6fa192a.js";import"./RibbonLine.glsl-2a3b4d4e.js";import"./LineStipple.glsl-de782d6a.js";import"./callExpressionWithFeature-a7532499.js";import"./LineMarker.glsl-8f444621.js";import"./NativeLine.glsl-cdbbf172.js";import"./Path.glsl-60b36878.js";import"./ColorMaterial.glsl-8310ffb3.js";import"./Pattern.glsl-d3388745.js";import"./EffectView-d3bf37ed.js";import"./LercDecoder-73115fd2.js";import"./config-1337d16e.js";import"./workerHelper-c6d4a8cb.js";import"./Subtype-5b01b21f.js";import"./datetime-4f774298.js";import"./elevationInfoUtils-427916a5.js";import"./ExportImageParameters-f328a234.js";import"./sublayerUtils-ba7f61bc.js";import"./webStyleSymbolUtils-55ed91cd.js";import"./enums-4b2a86a0.js";import"./GraphicManipulator-7826bc29.js";import"./euclideanLengthMeasurementUtils-3ebdcf15.js";import"./measurementUtils-c86e49dc.js";import"./geometryEngine-62e3ccf4.js";import"./geometryEngineBase-3dd302e0.js";import"./hydrated-be86c8b3.js";function j(t){let e=0,i=0;const r=t.length;let o,s=t[i];for(i=0;i<r-1;i++)o=t[i+1],e+=(o[0]-s[0])*(o[1]+s[1]),s=o;return e>=0}function L(t,e,i,r){const o=[];for(const s of t){const p=s.slice(0);o.push(p);const c=e*(s[0]-r.x)-i*(s[1]-r.y)+r.x,a=i*(s[0]-r.x)+e*(s[1]-r.y)+r.y;p[0]=c,p[1]=a}return o}function T(t,e,i){const r=t.spatialReference,o=e*Math.PI/180,s=Math.cos(o),p=Math.sin(o);if("xmin"in t&&(i=i??t.center,t=new B({spatialReference:r,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]})),"paths"in t){i=i??t.extent.center;const c=[];for(const a of t.paths)c.push(L(a,s,p,i));return new Q({spatialReference:r,paths:c})}if("rings"in t){i=i??t.extent.center;const c=[];for(const a of t.rings){const n=j(a),h=L(a,s,p,i);j(h)!==n&&h.reverse(),c.push(h)}return new B({spatialReference:r,rings:c})}if("x"in t){i=i??t;const c=new g({x:s*(t.x-i.x)-p*(t.y-i.y)+i.x,y:p*(t.x-i.x)+s*(t.y-i.y)+i.y,spatialReference:r});return t.z!=null&&(c.z=t.z),t.m!=null&&(c.m=t.m),c}return"points"in t?(i=i??t.extent.center,new ut({points:L(t.points,s,p,i),spatialReference:r})):null}class Rt{constructor(e,i,r,o){this.graphics=e,this.mover=i,this.dx=r,this.dy=o,this.type="move-start"}}class It{constructor(e,i,r,o){this.graphics=e,this.mover=i,this.dx=r,this.dy=o,this.type="move"}}class q{constructor(e,i,r,o){this.graphics=e,this.mover=i,this.dx=r,this.dy=o,this.type="move-stop"}}class Mt{constructor(e,i,r){this.graphics=e,this.mover=i,this.angle=r,this.type="rotate-start"}}class Ot{constructor(e,i,r){this.graphics=e,this.mover=i,this.angle=r,this.type="rotate"}}class J{constructor(e,i,r){this.graphics=e,this.mover=i,this.angle=r,this.type="rotate-stop"}}class Ct{constructor(e,i,r,o){this.graphics=e,this.mover=i,this.xScale=r,this.yScale=o,this.type="scale-start"}}class Ht{constructor(e,i,r,o){this.graphics=e,this.mover=i,this.xScale=r,this.yScale=o,this.type="scale"}}class K{constructor(e,i,r,o){this.graphics=e,this.mover=i,this.xScale=r,this.yScale=o,this.type="scale-stop"}}const m=vt.transformGraphics,w={centerIndicator:new M({style:"cross",size:m.center.size,color:m.center.color}),fill:{default:new U({color:m.fill.color,outline:{color:m.fill.outlineColor,join:"round",width:1}}),active:new U({color:m.fill.stagedColor,outline:{color:m.fill.outlineColor,join:"round",style:"dash",width:1}})},handles:{default:new M({style:"square",size:m.vertex.size,color:m.vertex.color,outline:{color:m.vertex.outlineColor,width:1}}),hover:new M({style:"square",size:m.vertex.hoverSize,color:m.vertex.hoverColor,outline:{color:m.vertex.hoverOutlineColor,width:1}})},rotator:{default:new M({style:"circle",size:m.vertex.size,color:m.vertex.color,outline:{color:m.vertex.outlineColor,width:1}}),hover:new M({style:"circle",size:m.vertex.hoverSize,color:m.vertex.hoverColor,outline:{color:m.vertex.hoverOutlineColor,width:1}})},rotatorLine:new gt({color:m.line.color,width:1})};let _=class extends lt.EventedAccessor{constructor(t){super(t),this._activeHandleGraphic=null,this._graphicAttributes={esriSketchTool:"box"},this._mover=null,this._centerGraphic=null,this._backgroundGraphic=null,this._vertexGraphics=[],this._rotateHandleGraphic=null,this._rotateGraphicOffset=20,this._angleOfRotation=0,this._rotateLineGraphic=null,this._startInfo=null,this._tooltip=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this.type="box",this.callbacks={onMoveStart(){},onMove(){},onMoveStop(){},onScaleStart(){},onScale(){},onScaleStop(){},onRotateStart(){},onRotate(){},onRotateStop(){},onGraphicClick(){}},this.enableMovement=!0,this.enableRotation=!0,this.enableScaling=!0,this.graphics=[],this.highlightsEnabled=!0,this.layer=null,this.preserveAspectRatio=!1,this.showCenterGraphic=!0,this.symbols=w,this.tooltipOptions=new W,this.view=null,this._getBounds=(()=>{const e=I();return(i,r)=>{i[0]=Number.POSITIVE_INFINITY,i[1]=Number.POSITIVE_INFINITY,i[2]=Number.NEGATIVE_INFINITY,i[3]=Number.NEGATIVE_INFINITY;for(const o of r){if(!o)continue;let s,p,c,a;if(o.type==="point")s=c=o.x,p=a=o.y;else if(o.type==="multipoint"){const n=P(o);[s,p,c,a]=V(e,[n])}else if(o.type==="extent")[s,p,c,a]=[o.xmin,o.ymin,o.xmax,o.ymax];else{const n=P(o);[s,p,c,a]=V(e,n)}i[0]=Math.min(s,i[0]),i[1]=Math.min(p,i[1]),i[2]=Math.max(c,i[2]),i[3]=Math.max(a,i[3])}return i}})()}initialize(){const t=this.view;this._highlightHelper=new xt({view:t}),this._tooltip=new F({view:t}),this._setup(),this.addHandles([_t(()=>t==null?void 0:t.ready,()=>{const{layer:e,view:i}=this;Gt(i,e)},{once:!0,initial:!0}),k(()=>this.preserveAspectRatio,()=>{this._activeHandleGraphic&&(this._scaleGraphic(this._activeHandleGraphic),this._updateGraphics(),this._updateTooltip(this._activeHandleGraphic))}),k(()=>t==null?void 0:t.scale,()=>{this._updateRotateGraphic(),this._updateRotateLineGraphic()}),k(()=>this.graphics,()=>this.refresh()),k(()=>this.layer,(e,i)=>{i&&this._resetGraphics(i),this.refresh()}),k(()=>this.highlightsEnabled,()=>{var e;(e=this._highlightHelper)==null||e.removeAll(),this._setUpHighlights()}),k(()=>this.tooltipOptions.enabled,e=>{this._tooltip=e?new F({view:this.view}):X(this._tooltip)},dt),this.on("move-start",e=>{var i,r;return(r=(i=this.callbacks)==null?void 0:i.onMoveStart)==null?void 0:r.call(i,e)}),this.on("move",e=>{var i,r;return(r=(i=this.callbacks)==null?void 0:i.onMove)==null?void 0:r.call(i,e)}),this.on("move-stop",e=>{var i,r;return(r=(i=this.callbacks)==null?void 0:i.onMoveStop)==null?void 0:r.call(i,e)}),this.on("rotate-start",e=>{var i,r;return(r=(i=this.callbacks)==null?void 0:i.onRotateStart)==null?void 0:r.call(i,e)}),this.on("rotate",e=>{var i,r;return(r=(i=this.callbacks)==null?void 0:i.onRotate)==null?void 0:r.call(i,e)}),this.on("rotate-stop",e=>{var i,r;return(r=(i=this.callbacks)==null?void 0:i.onRotateStop)==null?void 0:r.call(i,e)}),this.on("scale-start",e=>{var i,r;return(r=(i=this.callbacks)==null?void 0:i.onScaleStart)==null?void 0:r.call(i,e)}),this.on("scale",e=>{var i,r;return(r=(i=this.callbacks)==null?void 0:i.onScale)==null?void 0:r.call(i,e)}),this.on("scale-stop",e=>{var i,r;return(r=(i=this.callbacks)==null?void 0:i.onScaleStop)==null?void 0:r.call(i,e)})])}destroy(){this._reset(),this._tooltip=X(this._tooltip)}get state(){var i;const t=((i=this.view)==null?void 0:i.ready)??!1,e=this.graphics.length&&this.layer;return t&&e?"active":t?"ready":"disabled"}isUIGraphic(t){return this._vertexGraphics.includes(t)||t===this._backgroundGraphic||t===this._centerGraphic||t===this._rotateHandleGraphic||t===this._rotateLineGraphic}move(t,e){if(this._mover&&this.graphics.length){for(const i of this.graphics){const r=i.geometry,o=x(r,t,e,this.view);i.geometry=o}this.refresh(),this.emit("move-stop",new q(this.graphics,null,t,e))}}scale(t,e){if(this._mover&&this.graphics.length){for(const i of this.graphics){const r=i.geometry,o=$(r,t,e);i.geometry=o}this.refresh(),this.emit("scale-stop",new K(this.graphics,null,t,e))}}rotate(t,e){if(this._mover&&this.graphics.length){if(!e){const i=this._vertexGraphics[1].geometry.x,r=this._vertexGraphics[3].geometry.y;e=new g(i,r,this.view.spatialReference)}for(const i of this.graphics){const r=i.geometry,o=T(r,t,e);i.geometry=o}this.refresh(),this.emit("rotate-stop",new J(this.graphics,null,t))}}refresh(){this._reset(),this._setup()}reset(){this.graphics=[]}_setup(){this.state==="active"&&(this._setUpHighlights(),this._setupGraphics(),this._setupMover(),this._updateGraphics())}_reset(){this._highlightHelper.removeAll(),this._resetGraphicStateVars(),this._resetGraphics(),this._updateTooltip(),this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"}_resetGraphicStateVars(){this._startInfo=null,this._activeHandleGraphic=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this._angleOfRotation=0}_resetGraphics(t){(t=t||this.layer)&&(t.removeMany(this._vertexGraphics),t.remove(this._backgroundGraphic),t.remove(this._centerGraphic),t.remove(this._rotateHandleGraphic),t.remove(this._rotateLineGraphic)),this._vertexGraphics=[],this._backgroundGraphic=null,this._centerGraphic=null,this._rotateHandleGraphic=null,this._rotateLineGraphic=null}_setupMover(){let t=[];this.enableScaling&&(t=t.concat(this._vertexGraphics)),this.enableMovement&&(t=t.concat(this.graphics,this._backgroundGraphic)),this.enableRotation&&t.push(this._rotateHandleGraphic),this.showCenterGraphic&&t.push(this._centerGraphic),this._mover=new wt({enableMoveAllGraphics:!1,highlightsEnabled:!1,indicatorsEnabled:!1,view:this.view,graphics:t,callbacks:{onGraphicClick:e=>this._onGraphicClickCallback(e),onGraphicMoveStart:e=>this._onGraphicMoveStartCallback(e),onGraphicMove:e=>this._onGraphicMoveCallback(e),onGraphicMoveStop:e=>this._onGraphicMoveStopCallback(e),onGraphicPointerOver:e=>this._onGraphicPointerOverCallback(e),onGraphicPointerOut:e=>this._onGraphicPointerOutCallback(e)}})}_getStartInfo(t){const[e,i,r,o]=this._getBoxBounds(I()),s=Math.abs(r-e),p=Math.abs(o-i),c=(r+e)/2,a=(o+i)/2,{x:n,y:h}=t.geometry;return{width:s,height:p,centerX:c,centerY:a,startX:n,startY:h,graphicInfos:this._getGraphicInfos(),box:this._backgroundGraphic.geometry,rotate:this._rotateHandleGraphic.geometry}}_getGraphicInfos(){return this.graphics.map(t=>this._getGraphicInfo(t))}_getGraphicInfo(t){const e=t.geometry,[i,r,o,s]=this._getBounds(I(),[e]);return{width:Math.abs(o-i),height:Math.abs(s-r),centerX:(o+i)/2,centerY:(s+r)/2,geometry:e}}_onGraphicClickCallback(t){t.viewEvent.stopPropagation(),this.emit("graphic-click",t),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(t)}_onGraphicMoveStartCallback(t){const{_angleOfRotation:e,_xScale:i,_yScale:r,_backgroundGraphic:o,_vertexGraphics:s,_rotateHandleGraphic:p,symbols:c}=this,a=t.graphic;this._resetGraphicStateVars(),this._hideGraphicsBeforeUpdate(),o.symbol=c.fill.active,this._startInfo=this._getStartInfo(a),this._updateTooltip(a,t.viewEvent),a===p?(this.view.cursor="grabbing",this.emit("rotate-start",new Mt(this.graphics,a,e))):s.includes(a)?(this._activeHandleGraphic=a,this.emit("scale-start",new Ct(this.graphics,a,i,r))):this.emit("move-start",new Rt(this.graphics,a,t.dx,t.dy))}_onGraphicMoveCallback(t){const e=t.graphic;if(this._startInfo)if(this._vertexGraphics.includes(e))this._scaleGraphic(e),this._updateTooltip(e,t.viewEvent),this.emit("scale",new Ht(this.graphics,e,this._xScale,this._yScale));else if(e===this._rotateHandleGraphic)this._rotateGraphic(e),this._updateTooltip(e,t.viewEvent),this.emit("rotate",new Ot(this.graphics,e,this._angleOfRotation));else{const{dx:i,dy:r}=t;this._totalDx+=i,this._totalDy+=r,this._moveGraphic(e,i,r),this._updateTooltip(e,t.viewEvent),this.emit("move",new It(this.graphics,e,i,r))}}_onGraphicMoveStopCallback(t){const e=t.graphic;if(!this._startInfo)return void this.refresh();const{_angleOfRotation:i,_totalDx:r,_totalDy:o,_xScale:s,_yScale:p,_vertexGraphics:c,_rotateHandleGraphic:a}=this;this.refresh(),e===a?(this.view.cursor="pointer",this.emit("rotate-stop",new J(this.graphics,e,i))):c.includes(e)?this.emit("scale-stop",new K(this.graphics,e,s,p)):this.emit("move-stop",new q(this.graphics,e,r,o))}_onGraphicPointerOverCallback(t){const{_backgroundGraphic:e,_vertexGraphics:i,graphics:r,_rotateHandleGraphic:o,symbols:s,view:p}=this,c=t.graphic;if(c===o)return o.symbol=s.rotator.hover,p.cursor="pointer",void this._updateTooltip(c);if(r.includes(c)||c===e)return void(p.cursor="move");if(!i.includes(c))return void(p.cursor="pointer");this._updateTooltip(c),t.graphic.symbol=s.handles.hover;const a=p.rotation;let n,h=t.index;switch(h<8&&(a>=0&&a<45?h%=8:h=a>=45&&a<90?(h+1)%8:a>=90&&a<135?(h+2)%8:a>=135&&a<180?(h+3)%8:a>=180&&a<225?(h+4)%8:a>=225&&a<270?(h+5)%8:a>=270&&a<315?(h+6)%8:(h+7)%8),h){case 0:case 4:n="nwse-resize";break;case 1:case 5:n="ns-resize";break;case 2:case 6:n="nesw-resize";break;case 3:case 7:n="ew-resize";break;default:n="pointer"}p.cursor=n}_onGraphicPointerOutCallback(t){const{_vertexGraphics:e,_rotateHandleGraphic:i,symbols:r,view:o}=this;t.graphic===i?i.symbol=r.rotator.default:e.includes(t.graphic)&&(t.graphic.symbol=r.handles.default),o.cursor="default",this._updateTooltip()}_scaleGraphic(t){const{_startInfo:e,_vertexGraphics:i,preserveAspectRatio:r,view:o}=this,{centerX:s,centerY:p,startX:c,startY:a}=e,{resolution:n,transform:h}=o.state,l=i.indexOf(t);l!==1&&l!==5||this._updateX(t,s),l!==3&&l!==7||this._updateY(t,p);const{x:v,y:f}=t.geometry,Z=h[0]*v+h[2]*f+h[4],tt=h[1]*v+h[3]*f+h[5],O=e.graphicInfos.map(b=>b.geometry);if(r){const b=h[0]*s+h[2]*p+h[4],C=h[1]*s+h[3]*p+h[5],y=h[0]*c+h[2]*a+h[4],G=h[1]*c+h[3]*a+h[5];this._xScale=this._yScale=ft(b,C,y,G,Z,tt);for(const H of O){const E=O.indexOf(H);this.graphics[E].geometry=$(H,this._xScale,this._yScale,[s,p])}this._updateBackgroundGraphic()}else{const{width:b,height:C}=e;let y=v-c,G=a-f;if(l===1||l===5?y=0:l!==3&&l!==7||(G=0),y===0&&G===0)return;const H=b+(c>s?y:-1*y),E=C+(a<p?G:-1*G),it=s+y/2,et=p+G/2;this._xScale=H/b||1,this._yScale=E/C||1,l===1||l===5?this._xScale=1:l!==3&&l!==7||(this._yScale=1);const rt=(it-s)/n,ot=(et-p)/n,st=$(e.box,this._xScale,this._yScale);this._backgroundGraphic.geometry=x(st,rt,ot,o,!0);const{centerX:Y,centerY:N}=this._getGraphicInfo(this._backgroundGraphic),at=(Y-s)/n,pt=-1*(N-p)/n;for(const A of O){const ht=O.indexOf(A),ct=$(A,this._xScale,this._yScale,[s,p]);this.graphics[ht].geometry=x(ct,at,pt,o,!0)}this._centerGraphic.geometry=new g(Y,N,o.spatialReference)}}_rotateGraphic(t){const{centerX:e,centerY:i,startX:r,startY:o,box:s,rotate:p}=this._startInfo,c=new g(r,o,this.view.spatialReference),a=new g(e,i,this.view.spatialReference),n=t.geometry;this._angleOfRotation=yt(c,n,a);const h=this._startInfo.graphicInfos.map(l=>l.geometry);for(const l of h){const v=h.indexOf(l),f=T(l,this._angleOfRotation,a);this.graphics[v].geometry=f}this._backgroundGraphic.geometry=T(s,this._angleOfRotation,a),this._rotateHandleGraphic.geometry=T(p,this._angleOfRotation,a)}_moveGraphic(t,e,i){if(this.graphics.includes(t)){const r=this._backgroundGraphic.geometry;this._backgroundGraphic.geometry=x(r,e,i,this.view);for(const o of this.graphics)o!==t&&(o.geometry=x(o.geometry,e,i,this.view))}else if(t===this._centerGraphic){const r=this._backgroundGraphic.geometry;this._backgroundGraphic.geometry=x(r,e,i,this.view)}if(t===this._backgroundGraphic||t===this._centerGraphic)for(const r of this.graphics)r.geometry=x(r.geometry,e,i,this.view)}_setUpHighlights(){var t;this.highlightsEnabled&&this.graphics.length&&((t=this._highlightHelper)==null||t.add(this.graphics))}_setupGraphics(){const{_graphicAttributes:t,symbols:e}=this;this._centerGraphic=new R(null,e.centerIndicator,t),this.showCenterGraphic&&this.layer.add(this._centerGraphic),this._backgroundGraphic=new R(null,e.fill.default,t),this.layer.add(this._backgroundGraphic),this._rotateLineGraphic=new R(null,e.rotatorLine,t),this._rotateHandleGraphic=new R(null,e.rotator.default,t),this.enableRotation&&!this._hasExtentGraphic()&&this.layer.addMany([this._rotateLineGraphic,this._rotateHandleGraphic]);for(let i=0;i<8;i++)this._vertexGraphics.push(new R(null,e.handles.default,t));this.enableScaling&&this.layer.addMany(this._vertexGraphics)}_updateGraphics(){this._updateBackgroundGraphic(),this._updateHandleGraphics(),this._updateCenterGraphic(),this._updateRotateGraphic(),this._updateRotateLineGraphic()}_hideGraphicsBeforeUpdate(){this._centerGraphic.visible=!1,this._rotateHandleGraphic.visible=!1,this._rotateLineGraphic.visible=!1,this._vertexGraphics.forEach(t=>t.visible=!1)}_updateHandleGraphics(){const t=this._getCoordinates(!0);this._vertexGraphics.forEach((e,i)=>{const[r,o]=t[i];this._updateXY(e,r,o)})}_updateBackgroundGraphic(){const t=this._getCoordinates();this._backgroundGraphic.geometry=new B({rings:t,spatialReference:this.view.spatialReference})}_updateCenterGraphic(){const[t,e,i,r]=this._getBoxBounds(I()),o=(i+t)/2,s=(r+e)/2;this._centerGraphic.geometry=new g(o,s,this.view.spatialReference)}_updateRotateGraphic(){if(!this._vertexGraphics.length)return;const{x:t,y:e}=this._vertexGraphics[1].geometry,i=e+this.view.state.resolution*this._rotateGraphicOffset;this._rotateHandleGraphic.geometry=new g(t,i,this.view.spatialReference)}_updateRotateLineGraphic(){if(!this._vertexGraphics.length||!this._rotateHandleGraphic||!this._rotateHandleGraphic.geometry)return;const t=this._vertexGraphics[1].geometry,e=this._rotateHandleGraphic.geometry;this._rotateLineGraphic.geometry=new Q({paths:[[t.x,t.y],[e.x,e.y]],spatialReference:this.view.spatialReference})}_updateXY(t,e,i){t.geometry=new g(e,i,this.view.spatialReference)}_updateX(t,e){const i=t.geometry.y;t.geometry=new g(e,i,this.view.spatialReference)}_updateY(t,e){const i=t.geometry.x;t.geometry=new g(i,e,this.view.spatialReference)}_hasExtentGraphic(){return this.graphics.some(t=>t&&D(t.geometry)&&t.geometry.type==="extent")}_getBoxBounds(t){const e=this.graphics.map(i=>i.geometry);return this._getBounds(t,e)}_getCoordinates(t){const[e,i,r,o]=this._getBoxBounds(I());if(t){const s=(e+r)/2,p=(o+i)/2;return[[e,o],[s,o],[r,o],[r,p],[r,i],[s,i],[e,i],[e,p]]}return[[e,o],[r,o],[r,i],[e,i]]}_updateTooltip(t,e){if(S(this._tooltip))return;if(!t)return void this._tooltip.clear();const{_backgroundGraphic:i,graphics:r,_vertexGraphics:o,_rotateHandleGraphic:s}=this;t===s?this._updateRotateTooltip():o.includes(t)?this._updateScaleTooltip():(r.includes(t)||t===i)&&this._updateMoveTooltip(e)}_updateRotateTooltip(){S(this._tooltip)||(this._tooltip.info=new bt({tooltipOptions:this.tooltipOptions,angle:-this._angleOfRotation}))}_updateScaleTooltip(){const{_tooltip:t,_xScale:e,_yScale:i,tooltipOptions:r,view:o}=this;if(S(t))return;const s=o.spatialReference,p=this._getCoordinates(),c=new g(p[0][0],p[0][1],s),a=new g(p[1][0],p[1][1],s),n=new g(p[2][0],p[2][1],s),h=z(c,a),l=z(a,n);if(S(h)||S(l))return;const v=Math.abs(e),f=Math.abs(i);t.info=new St({tooltipOptions:r,xScale:v,yScale:f,xSize:h,ySize:l})}_updateMoveTooltip(t){const{_tooltip:e,tooltipOptions:i,view:r}=this;if(S(e))return;const o=new kt({tooltipOptions:i});if(t){const{x:s,y:p}=t.origin,c=r.toMap(t),a=r.toMap({x:s,y:p}),n=z(a,c);o.distance=D(n)?n:mt}e.info=o}};d([u()],_.prototype,"_tooltip",void 0),d([u({readOnly:!0})],_.prototype,"type",void 0),d([u()],_.prototype,"callbacks",void 0),d([u()],_.prototype,"enableMovement",void 0),d([u()],_.prototype,"enableRotation",void 0),d([u()],_.prototype,"enableScaling",void 0),d([u()],_.prototype,"graphics",void 0),d([u()],_.prototype,"highlightsEnabled",void 0),d([u()],_.prototype,"layer",void 0),d([u()],_.prototype,"preserveAspectRatio",void 0),d([u()],_.prototype,"showCenterGraphic",void 0),d([u({readOnly:!0})],_.prototype,"state",null),d([u({value:w,cast(t){const{centerIndicator:e=w.centerIndicator,fill:i=w.fill,handles:r=w.handles,rotator:o=w.rotator,rotatorLine:s=w.rotatorLine}=t||{};return{centerIndicator:e,fill:i,handles:r,rotator:o,rotatorLine:s}}})],_.prototype,"symbols",void 0),d([u({type:W})],_.prototype,"tooltipOptions",void 0),d([u({constructOnly:!0})],_.prototype,"view",void 0),_=d([nt("esri.views.draw.support.Box")],_);const qs=_;export{qs as default};
