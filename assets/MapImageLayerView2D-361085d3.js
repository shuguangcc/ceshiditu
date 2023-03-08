import{N as a,O as o,aQ as g,a0 as m,aA as l,j as d,a3 as u,G as c}from"./index-f01cff9b.js";import{a as y}from"./BitmapContainer-1e22902f.js";import{f,u as x}from"./LayerView-db2c0e08.js";import{a as w}from"./GraphicsView2D-5e82d560.js";import{n as v}from"./HighlightGraphicContainer-4d76b7a1.js";import{v as _}from"./ExportStrategy-5124ef0b.js";import{c as H}from"./ExportImageParameters-45e40a56.js";import{i as I}from"./RefreshableLayerView-b73bf9b8.js";import{S as V,a as P}from"./drapedUtils-aefce67e.js";import"./WGLContainer-1abeec00.js";import"./definitions-3ddd14a8.js";import"./VertexArrayObject-6376a37c.js";import"./Texture-b2a996e5.js";import"./enums-64ab819c.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-cdbb17e1.js";import"./enums-55085e26.js";import"./ProgramTemplate-cf272cee.js";import"./MaterialKey-570efa49.js";import"./utils-d9ebc9e3.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./Container-f60ceb6d.js";import"./earcut-61f7b102.js";import"./ExpandedCIM-4ecff5c2.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-15416bc4.js";import"./floatRGBA-f904fb0d.js";import"./normalizeUtilsSync-87d2417e.js";import"./projectionSupport-1110abf5.js";import"./json-48e3ea08.js";import"./AttributeStoreView-768c4556.js";import"./TiledDisplayObject-31ec8579.js";import"./visualVariablesUtils-af612041.js";import"./visualVariablesUtils-6bb61b46.js";import"./Matcher-ff50db5f.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-e1ed5ff0.js";import"./devEnvironmentUtils-5002a058.js";import"./schemaUtils-67c5b5c8.js";import"./util-e65ccdde.js";import"./ComputedAttributeStorage-fd4b23bf.js";import"./arcadeTimeUtils-481c21a7.js";import"./executionError-fb3f283a.js";import"./centroid-f786a505.js";import"./BaseGraphicContainer-ef0f435a.js";import"./FeatureContainer-449b9eb9.js";import"./TileContainer-5aead427.js";import"./vec3f32-ad1dc57f.js";import"./Bitmap-ffb998c2.js";import"./floorFilterUtils-080a7cd2.js";import"./sublayerUtils-2af13365.js";import"./scaleUtils-42d42171.js";import"./popupUtils-7ab76eff.js";const U=t=>{let e=class extends t{initialize(){this.exportImageParameters=new H({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){var i;return((i=this.view)==null?void 0:i.floors)??null}get exportImageVersion(){var i;return(i=this.exportImageParameters)==null||i.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){var i;return!!super.canResume()&&!((i=this.timeExtent)!=null&&i.isEmpty)}};return a([o()],e.prototype,"exportImageParameters",void 0),a([o({readOnly:!0})],e.prototype,"floors",null),a([o({readOnly:!0})],e.prototype,"exportImageVersion",null),a([o()],e.prototype,"layer",void 0),a([o()],e.prototype,"suspended",void 0),a([o(g)],e.prototype,"timeExtent",void 0),e=a([m("esri.views.layers.MapImageLayerView")],e),e};let s=class extends U(I(f(x))){constructor(){super(...arguments),this._highlightGraphics=new l,this._updateHash=""}fetchPopupFeatures(t,e){return this._popupHighlightHelper.fetchPopupFeatures(t,e)}update(t){const e=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==e&&(this._updateHash=e,this.strategy.update(t).catch(r=>{d(r)||u.getLogger(this.declaredClass).error(r)}),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t)}attach(){const{imageMaxWidth:t,imageMaxHeight:e,version:r}=this.layer,i=r>=10.3,n=r>=10;this._bitmapContainer=new y,this.container.addChild(this._bitmapContainer),this._highlightView=new w({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new v(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new V({createFetchPopupFeaturesQueryGeometry:(p,h)=>P(p,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(p,h)=>{this._highlightView.graphicUpdateHandler({graphic:p,property:h})},layerView:this,updatingHandles:this.updatingHandles}),this.strategy=new _({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:e,imageRotationSupported:i,imageNormalizationSupported:n,hidpi:!0}),this.addAttachHandles(c(()=>this.exportImageVersion,()=>this.requestUpdate())),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,r,i){return this.layer.fetchImage(t,e,r,{timeExtent:this.timeExtent,floors:this.floors,...i})}fetchImageBitmap(t,e,r,i){return this.layer.fetchImageBitmap(t,e,r,{timeExtent:this.timeExtent,floors:this.floors,...i})}highlight(t){return this._popupHighlightHelper.highlight(t)}};a([o()],s.prototype,"strategy",void 0),a([o()],s.prototype,"updating",void 0),s=a([m("esri.views.2d.layers.MapImageLayerView2D")],s);const St=s;export{St as default};