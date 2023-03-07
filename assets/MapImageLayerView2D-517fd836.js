import{oV as n,k as g,s as d,l,e as o,y as s,b as u}from"./index-74d49a87.js";import{a as c}from"./BitmapContainer-11eb2efa.js";import{f}from"./LayerView2D-eda09360.js";import{a as y}from"./GraphicsView2D-1264803b.js";import{n as H}from"./HighlightGraphicContainer-7bca2fe8.js";import{v as _}from"./ExportStrategy-db7a3a18.js";import{u as w}from"./LayerView-7b372130.js";import{p as v}from"./MapImageLayerView-bc836ece.js";import{i as x}from"./RefreshableLayerView-cb757f22.js";import{S as $}from"./MapServiceLayerViewHelper-540289c1.js";import{a as U}from"./drapedUtils-11ce819c.js";import"./WGLContainer-576ad576.js";import"./definitions-19bfb61c.js";import"./WGLBrushVTLSymbol-b759c30b.js";import"./enums-b1d611e3.js";import"./number-b10bd8f5.js";import"./StyleDefinition-7d58136b.js";import"./enums-4b2a86a0.js";import"./GeometryUtils-dd03fc25.js";import"./color-803f68ad.js";import"./ShaderCompiler-77d0dcb6.js";import"./ProgramTemplate-e0452ecc.js";import"./MaterialKey-d0fce869.js";import"./alignmentUtils-ae955d28.js";import"./utils-f5f1a968.js";import"./heatmapTextureUtils-0aa3a2bc.js";import"./Container-2d36bc3e.js";import"./cimAnalyzer-02b73f26.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./normalizeUtilsSync-e634818e.js";import"./projectionSupport-23b402d8.js";import"./json-48e3ea08.js";import"./AttributeStoreView-f7f49a44.js";import"./visualVariablesUtils-2780c14d.js";import"./visualVariablesUtils-6ff5fadd.js";import"./Matcher-c4e44d26.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-24df9e47.js";import"./ExpandedCIM-0010872c.js";import"./schemaUtils-5a41d104.js";import"./util-2bf6e249.js";import"./ComputedAttributeStorage-167c4551.js";import"./arcadeTimeUtils-999b74fd.js";import"./executionError-fb3f283a.js";import"./centroid-d1553553.js";import"./GraphicsView-bef23e3b.js";import"./BaseGraphicContainer-55978f65.js";import"./FeatureContainer-83da4bfd.js";import"./TileContainer-931ccd0f.js";import"./Bitmap-2a86165d.js";import"./ExportImageParameters-d7cdd086.js";import"./floorFilterUtils-080a7cd2.js";import"./sublayerUtils-01edef31.js";import"./popupUtils-8b1a1adb.js";let p=class extends v(x(f(w))){constructor(){super(...arguments),this._highlightGraphics=new n,this._updateHash=""}fetchPopupFeatures(t,i){return this._popupHighlightHelper.fetchPopupFeatures(t,i)}update(t){const i=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==i&&(this._updateHash=i,this.strategy.update(t).catch(e=>{g(e)||d.getLogger(this.declaredClass).error(e)}),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t)}attach(){const{imageMaxWidth:t,imageMaxHeight:i,version:e}=this.layer,r=e>=10.3,m=e>=10;this._bitmapContainer=new c,this.container.addChild(this._bitmapContainer),this._highlightView=new y({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new H(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new $({createFetchPopupFeaturesQueryGeometry:(a,h)=>U(a,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(a,h)=>{this._highlightView.graphicUpdateHandler({graphic:a,property:h})},layerView:this,updatingHandles:this.updatingHandles}),this.strategy=new _({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:i,imageRotationSupported:r,imageNormalizationSupported:m,hidpi:!0}),this.addAttachHandles(l(()=>this.exportImageVersion,()=>this.requestUpdate())),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,i,e,r){return this.layer.fetchImage(t,i,e,{timeExtent:this.timeExtent,floors:this.floors,...r})}fetchImageBitmap(t,i,e,r){return this.layer.fetchImageBitmap(t,i,e,{timeExtent:this.timeExtent,floors:this.floors,...r})}highlight(t){return this._popupHighlightHelper.highlight(t)}};o([s()],p.prototype,"strategy",void 0),o([s()],p.prototype,"updating",void 0),p=o([u("esri.views.2d.layers.MapImageLayerView2D")],p);const St=p;export{St as default};
