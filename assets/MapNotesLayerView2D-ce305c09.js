import{e as f,n as w}from"./cast-7928d7aa.js";import{g as y}from"./Graphic-b46e2684.js";import{j as _}from"./Collection-78126e82.js";import{r as m,t as V}from"./typedArrayUtil-a8b5b3e9.js";import{l as h,h as a,a as v}from"./reactiveUtils-f41a4e00.js";import"./Error-653283ae.js";import"./ensureType-cf29afa9.js";import"./string-cdf077e6.js";import{i as C}from"./utils-26560131.js";import{r as b}from"./GroupContainer-3e969041.js";import{y as H}from"./LayerView2D-9c021b91.js";import{i as c}from"./GraphicContainer-66edeaa1.js";import{o as g}from"./BaseGraphicContainer-aa7dd916.js";import{u as T}from"./LayerView-b83ced89.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-6684e352.js";import"./geometry-5a216427.js";import"./Extent-69509002.js";import"./Ellipsoid-89682c5e.js";import"./Polyline-bf268e7b.js";import"./typeUtils-eb9416d0.js";import"./jsonMap-c1f958cf.js";import"./PopupTemplate-6eb885db.js";import"./Clonable-ba795b08.js";import"./fieldUtils-31bfecd2.js";import"./preload-helper-41c905a7.js";import"./arcadeOnDemand-c6d1b9f2.js";import"./enumeration-3c281341.js";import"./number-347a3a44.js";import"./locale-30120714.js";import"./Identifiable-aa6d459d.js";import"./symbols-fa594797.js";import"./CIMSymbol-1379245a.js";import"./Symbol-fc4312a4.js";import"./Color-a42a8267.js";import"./colorUtils-639f4d25.js";import"./mathUtils-2519596a.js";import"./vec3-a020a6f6.js";import"./vec3f64-2f9cef06.js";import"./common-c186b691.js";import"./vec4-790471c0.js";import"./screenUtils-410d12c0.js";import"./opacityUtils-243aae26.js";import"./symbolLayerUtils3D-1f8d4478.js";import"./aaBoundingBox-fc742a4e.js";import"./aaBoundingRect-4a760199.js";import"./request-d3e98716.js";import"./persistableUrlUtils-a16d0f55.js";import"./Symbol3DAnchorPosition2D-c0f4a14d.js";import"./collectionUtils-3831b7c4.js";import"./Portal-8b65c9c4.js";import"./Loadable-48bc1293.js";import"./Promise-dfdee8ba.js";import"./PortalGroup-bfe93c76.js";import"./PortalUser-4c8e1adc.js";import"./jsonUtils-03c4af61.js";import"./Evented-515b9d9c.js";import"./SimpleObservable-7dcdef1d.js";import"./mat3f32-d3d088e8.js";import"./EffectView-d3bf37ed.js";import"./mat3-3fc68e72.js";import"./TileKey-0750ad58.js";import"./vec2f64-30dc1443.js";import"./context-util-1e3c8cfc.js";import"./enums-64ab819c.js";import"./Texture-e79b14e7.js";import"./VertexElementDescriptor-2925c6af.js";import"./parser-2b40deea.js";import"./mat4f32-77b3d8ac.js";import"./mat4-44a0988f.js";import"./enums-4ca4641f.js";import"./MaterialKey-406a59ab.js";import"./alignmentUtils-ae955d28.js";import"./Utils-b2b4cf0c.js";import"./number-954e4ab6.js";import"./enums-4b2a86a0.js";import"./definitions-2d0dd0cd.js";import"./heatmapUtils-84e8c43b.js";import"./vec4f64-e407da96.js";import"./WGLContainer-14075e1a.js";import"./WGLBrushVTLSymbol-dcfd88b4.js";import"./FramebufferObject-50e1b68f.js";import"./StyleDefinition-7d58136b.js";import"./vec2f32-461e65a9.js";import"./config-1337d16e.js";import"./GeometryUtils-c093d234.js";import"./pixelUtils-c27b13a1.js";import"./ShaderCompiler-77d0dcb6.js";import"./ProgramTemplate-afbd57f8.js";import"./heatmapTextureUtils-d1d96768.js";import"./earcut-58237617.js";import"./vec2-2cef68de.js";import"./featureConversionUtils-01cdde8a.js";import"./OptimizedFeature-3de538c1.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./cimAnalyzer-721530a4.js";import"./fontUtils-b94d5e06.js";import"./BidiEngine-836b7ef6.js";import"./utils-c81a5c52.js";import"./mat2d-d0b91e3e.js";import"./Rect-ea14f53a.js";import"./callExpressionWithFeature-a7532499.js";import"./quantizationUtils-33aba427.js";import"./GeometryUtils-eebff0a0.js";import"./floatRGBA-fa8308d2.js";import"./HandleOwner-e1406413.js";import"./normalizeUtilsSync-9c84b89e.js";import"./normalizeUtils-ee4bf39f.js";import"./utils-1f4fcfec.js";import"./unitUtils-47abac71.js";import"./projection-d7b57a6c.js";import"./assets-0b172f07.js";import"./zscale-1e1fc911.js";import"./json-48e3ea08.js";import"./labelingInfo-5c3a46f6.js";import"./labelUtils-a194a22a.js";import"./defaultsJSON-59981e75.js";import"./jsonUtils-d7db3dc7.js";import"./FeatureContainer-f14037ae.js";import"./Queue-3a0c055d.js";import"./visualVariablesUtils-8295a400.js";import"./visualVariablesUtils-496ec144.js";import"./TileContainer-07bccb79.js";import"./lengthUtils-d2d33f94.js";import"./capabilities-3636c6a4.js";import"./Matcher-1892b043.js";import"./TileStrategy-4189758f.js";import"./TileStore-787dbea4.js";import"./rbush-8e36784a.js";import"./quickselect-322ec8e1.js";import"./Query-ff8c2cfb.js";import"./TimeExtent-744afd75.js";import"./Field-f5fc9f6b.js";import"./fieldType-b1002185.js";import"./tileUtils-caf0c827.js";import"./TileClipper-5dae42c4.js";import"./Geometry-daada628.js";import"./LRUCache-14115d91.js";import"./MemCache-4b976a8b.js";import"./ExpandedCIM-676cf2ac.js";import"./devEnvironmentUtils-5002a058.js";import"./styleUtils-4adfed9e.js";import"./schemaUtils-615a0d3f.js";import"./LayerFloorInfo-2cd5e8ae.js";import"./diffUtils-1ac65748.js";import"./createSymbolSchema-41fdd7db.js";import"./rendererUtils-3275688e.js";import"./FeatureReductionLayer-4077b2ae.js";import"./BlendLayer-d8293c8d.js";import"./UniqueValueRenderer-103ec66d.js";import"./LegendOptions-e65e7a9c.js";import"./colorRamps-3a8ac20b.js";import"./sizeVariableUtils-d4870b0d.js";import"./visualVariableUtils-c59ab38d.js";import"./compilerUtils-034cacb8.js";import"./jsonUtils-c56f8821.js";import"./DictionaryLoader-2cf5144e.js";import"./deprecate-b9088bd3.js";import"./OperationalLayer-24e6fa34.js";import"./ElevationInfo-ce9cacc2.js";import"./util-38c30a14.js";import"./ComputedAttributeStorage-58146ac4.js";import"./FeatureSetReader-2d27cc52.js";import"./centroid-13995b22.js";import"./FieldsIndex-aa6dd3fa.js";import"./GraphicsView-935faaa9.js";import"./vec3f32-c9aa289f.js";const d="sublayers",n="layerView",$=Object.freeze({remove(){},pause(){},resume(){}});let l=class extends H(T){constructor(){super(...arguments),this._highlightIds=new Map,this.container=new b}async fetchPopupFeatures(i){return Array.from(this.graphicsViews(),t=>t.hitTest(i).filter(r=>!!r.popupTemplate)).flat()}*graphicsViews(){m(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():m(this._graphicsViews)?yield*this._graphicsViews:yield*[]}async hitTest(i,t){return Array.from(this.graphicsViews(),r=>{const p=r.hitTest(i);if(m(this._graphicsViewsFeatureCollectionMap)){const e=this._graphicsViewsFeatureCollectionMap.get(r);for(const o of p)!o.popupTemplate&&e.popupTemplate&&(o.popupTemplate=e.popupTemplate),o.sourceLayer=o.layer=this.layer}return p}).flat().map(r=>({type:"graphic",graphic:r,layer:this.layer,mapPoint:i}))}highlight(i){let t;return typeof i=="number"?t=[i]:i instanceof y?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(r=>r&&r.uid):_.isCollection(i)&&(t=i.map(r=>r&&r.uid).toArray()),t=t.filter(r=>r!=null),t.length?(this._addHighlight(t),{remove:()=>{this._removeHighlight(t)}}):$}update(i){for(const t of this.graphicsViews())t.processUpdate(i)}attach(){const i=this.view,t=()=>this.requestUpdate(),r=this.layer.featureCollections;if(m(r)&&r.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const p of r){const e=new c(this.view.featuresTilingScheme),o=new g({view:i,graphics:p.source,renderer:p.renderer,requestUpdateCallback:t,container:e});this._graphicsViewsFeatureCollectionMap.set(o,p),this.container.addChild(o.container),this.handles.add([h(()=>p.visible,s=>o.container.visible=s,a),h(()=>o.updating,()=>this.notifyChange("updating"),a)],n)}this._updateHighlight()}else m(this.layer.sublayers)&&this.handles.add(v(()=>this.layer.sublayers,"change",()=>this._createGraphicsViews(),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),d)}detach(){this._destroyGraphicsViews(),this.handles.remove(d)}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.handles.remove(n);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),V(this.layer.sublayers))return;const i=[],t=this.view,r=()=>this.requestUpdate();for(const p of this.layer.sublayers){const e=new C,o=new c(this.view.featuresTilingScheme);o.fadeTransitionEnabled=!0;const s=new g({view:t,graphics:p.graphics,requestUpdateCallback:r,container:o});this.handles.add([p.on("graphic-update",s.graphicUpdateHandler),h(()=>p.visible,u=>s.container.visible=u,a),h(()=>s.updating,()=>this.notifyChange("updating"),a)],n),e.addChild(s.container),this.container.addChild(e),i.push(s)}this._graphicsViews=i,this._updateHighlight()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t);this._highlightIds.set(t,r+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t)-1;r===0?this._highlightIds.delete(t):this._highlightIds.set(t,r)}this._updateHighlight()}_updateHighlight(){const i=Array.from(this._highlightIds.keys());for(const t of this.graphicsViews())t.setHighlight(i)}};l=f([w("esri.views.2d.layers.MapNotesLayerView2D")],l);const Ur=l;export{Ur as default};
