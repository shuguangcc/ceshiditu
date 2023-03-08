import{e as g,n as f}from"./cast-7928d7aa.js";import{k as w}from"./PopupTemplate-6eb885db.js";import{j as u}from"./Collection-78126e82.js";import{l,h}from"./reactiveUtils-f41a4e00.js";import"./Error-653283ae.js";import"./ensureType-cf29afa9.js";import"./typedArrayUtil-a8b5b3e9.js";import"./string-cdf077e6.js";import{t as d,p as n}from"./jsonUtils-c56f8821.js";import b from"./FeatureSet-0573546e.js";import{y as S}from"./LayerView2D-9c021b91.js";import{i as V}from"./GraphicContainer-66edeaa1.js";import{o as v}from"./BaseGraphicContainer-aa7dd916.js";import{u as _}from"./LayerView-b83ced89.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-6684e352.js";import"./Clonable-ba795b08.js";import"./Extent-69509002.js";import"./Ellipsoid-89682c5e.js";import"./fieldUtils-31bfecd2.js";import"./preload-helper-41c905a7.js";import"./arcadeOnDemand-c6d1b9f2.js";import"./geometry-5a216427.js";import"./Polyline-bf268e7b.js";import"./typeUtils-eb9416d0.js";import"./jsonMap-c1f958cf.js";import"./enumeration-3c281341.js";import"./number-347a3a44.js";import"./locale-30120714.js";import"./Identifiable-aa6d459d.js";import"./Evented-515b9d9c.js";import"./SimpleObservable-7dcdef1d.js";import"./UniqueValueRenderer-103ec66d.js";import"./symbols-fa594797.js";import"./CIMSymbol-1379245a.js";import"./Symbol-fc4312a4.js";import"./Color-a42a8267.js";import"./colorUtils-639f4d25.js";import"./mathUtils-2519596a.js";import"./vec3-a020a6f6.js";import"./vec3f64-2f9cef06.js";import"./common-c186b691.js";import"./vec4-790471c0.js";import"./screenUtils-410d12c0.js";import"./opacityUtils-243aae26.js";import"./symbolLayerUtils3D-1f8d4478.js";import"./aaBoundingBox-fc742a4e.js";import"./aaBoundingRect-4a760199.js";import"./request-d3e98716.js";import"./persistableUrlUtils-a16d0f55.js";import"./Symbol3DAnchorPosition2D-c0f4a14d.js";import"./collectionUtils-3831b7c4.js";import"./Portal-8b65c9c4.js";import"./Loadable-48bc1293.js";import"./Promise-dfdee8ba.js";import"./PortalGroup-bfe93c76.js";import"./PortalUser-4c8e1adc.js";import"./LegendOptions-e65e7a9c.js";import"./diffUtils-1ac65748.js";import"./colorRamps-3a8ac20b.js";import"./sizeVariableUtils-d4870b0d.js";import"./visualVariableUtils-c59ab38d.js";import"./Graphic-b46e2684.js";import"./jsonUtils-03c4af61.js";import"./compilerUtils-034cacb8.js";import"./lengthUtils-d2d33f94.js";import"./unitUtils-47abac71.js";import"./jsonUtils-d7db3dc7.js";import"./styleUtils-4adfed9e.js";import"./DictionaryLoader-2cf5144e.js";import"./LRUCache-14115d91.js";import"./MemCache-4b976a8b.js";import"./deprecate-b9088bd3.js";import"./heatmapUtils-84e8c43b.js";import"./vec4f64-e407da96.js";import"./Field-f5fc9f6b.js";import"./fieldType-b1002185.js";import"./utils-26560131.js";import"./mat3f32-d3d088e8.js";import"./EffectView-d3bf37ed.js";import"./mat3-3fc68e72.js";import"./TileKey-0750ad58.js";import"./vec2f64-30dc1443.js";import"./context-util-1e3c8cfc.js";import"./enums-64ab819c.js";import"./Texture-e79b14e7.js";import"./VertexElementDescriptor-2925c6af.js";import"./parser-2b40deea.js";import"./mat4f32-77b3d8ac.js";import"./mat4-44a0988f.js";import"./enums-4ca4641f.js";import"./MaterialKey-406a59ab.js";import"./alignmentUtils-ae955d28.js";import"./Utils-b2b4cf0c.js";import"./number-954e4ab6.js";import"./enums-4b2a86a0.js";import"./definitions-2d0dd0cd.js";import"./cimAnalyzer-721530a4.js";import"./fontUtils-b94d5e06.js";import"./BidiEngine-836b7ef6.js";import"./utils-c81a5c52.js";import"./mat2d-d0b91e3e.js";import"./vec2-2cef68de.js";import"./vec2f32-461e65a9.js";import"./Rect-ea14f53a.js";import"./callExpressionWithFeature-a7532499.js";import"./quantizationUtils-33aba427.js";import"./GeometryUtils-eebff0a0.js";import"./floatRGBA-fa8308d2.js";import"./HandleOwner-e1406413.js";import"./normalizeUtilsSync-9c84b89e.js";import"./normalizeUtils-ee4bf39f.js";import"./utils-1f4fcfec.js";import"./projection-d7b57a6c.js";import"./assets-0b172f07.js";import"./zscale-1e1fc911.js";import"./featureConversionUtils-01cdde8a.js";import"./OptimizedFeature-3de538c1.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./json-48e3ea08.js";import"./labelingInfo-5c3a46f6.js";import"./labelUtils-a194a22a.js";import"./defaultsJSON-59981e75.js";import"./FramebufferObject-50e1b68f.js";import"./FeatureContainer-f14037ae.js";import"./Queue-3a0c055d.js";import"./visualVariablesUtils-8295a400.js";import"./visualVariablesUtils-496ec144.js";import"./TileContainer-07bccb79.js";import"./WGLContainer-14075e1a.js";import"./WGLBrushVTLSymbol-dcfd88b4.js";import"./StyleDefinition-7d58136b.js";import"./config-1337d16e.js";import"./GeometryUtils-c093d234.js";import"./pixelUtils-c27b13a1.js";import"./ShaderCompiler-77d0dcb6.js";import"./ProgramTemplate-afbd57f8.js";import"./heatmapTextureUtils-d1d96768.js";import"./earcut-58237617.js";import"./capabilities-3636c6a4.js";import"./Matcher-1892b043.js";import"./TileStrategy-4189758f.js";import"./TileStore-787dbea4.js";import"./rbush-8e36784a.js";import"./quickselect-322ec8e1.js";import"./Query-ff8c2cfb.js";import"./TimeExtent-744afd75.js";import"./tileUtils-caf0c827.js";import"./TileClipper-5dae42c4.js";import"./Geometry-daada628.js";import"./ExpandedCIM-676cf2ac.js";import"./devEnvironmentUtils-5002a058.js";import"./schemaUtils-615a0d3f.js";import"./LayerFloorInfo-2cd5e8ae.js";import"./createSymbolSchema-41fdd7db.js";import"./rendererUtils-3275688e.js";import"./FeatureReductionLayer-4077b2ae.js";import"./BlendLayer-d8293c8d.js";import"./OperationalLayer-24e6fa34.js";import"./ElevationInfo-ce9cacc2.js";import"./util-38c30a14.js";import"./ComputedAttributeStorage-58146ac4.js";import"./FeatureSetReader-2d27cc52.js";import"./centroid-13995b22.js";import"./FieldsIndex-aa6dd3fa.js";import"./GraphicsView-935faaa9.js";import"./vec3f32-c9aa289f.js";let y=class extends S(_){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(i,o){if(!this.graphicsViews.length)return null;const p=this.layer;return this.graphicsViews.reverse().map(t=>{const r=this._popupTemplates.get(t),e=t.hitTest(i);for(const m of e)m.layer=p,m.sourceLayer=p,m.popupTemplate=r;return e}).flat().map(t=>({type:"graphic",graphic:t,layer:p,mapPoint:i}))}update(i){if(this.graphicsViews)for(const o of this.graphicsViews)o.processUpdate(i)}attach(){this.handles.add([l(()=>{var i;return(i=this.layer)==null?void 0:i.featureCollections},i=>{this._clear();for(const{popupInfo:o,featureSet:p,layerDefinition:t}of i){const r=b.fromJSON(p),e=new u(r.features),m=t.drawingInfo,c=o?w.fromJSON(o):null,s=d(m.renderer),a=new v({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:e,renderer:s,container:new V(this.view.featuresTilingScheme)});this._graphicsViewMap[r.geometryType]=a,this._popupTemplates.set(a,c),r.geometryType!=="polygon"||this.layer.polygonSymbol?r.geometryType!=="polyline"||this.layer.lineSymbol?r.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=s.symbol):this.layer.lineSymbol=s.symbol:this.layer.polygonSymbol=s.symbol,this.graphicsViews.push(a),this.container.addChild(a.container)}},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.polygonSymbol},i=>{this._graphicsViewMap.polygon.renderer=new n({symbol:i})},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.lineSymbol},i=>{this._graphicsViewMap.polyline.renderer=new n({symbol:i})},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.pointSymbol},i=>{this._graphicsViewMap.point.renderer=new n({symbol:i})},h)],"georsslayerview")}detach(){this.handles.remove("georsslayerview"),this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews)i.viewChange()}_clear(){this.container.removeAllChildren();for(const i of this.graphicsViews)i.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=g([f("esri.views.2d.layers.GeoRSSLayerView2D")],y);const Ut=y;export{Ut as default};
