import{oV as w,lx as y,oW as I,oX as V,l as v,cY as H,k as p,hq as c,s as T,e as o,y as g,b as q}from"./index-74d49a87.js";import"./Rasterizer-2a7f140e.js";import"./Container-2d36bc3e.js";import"./BufferPool-0122daa7.js";import"./enums-b1d611e3.js";import"./WGLContainer-576ad576.js";import"./color-803f68ad.js";import"./MaterialKey-d0fce869.js";import"./utils-f5f1a968.js";import"./number-b10bd8f5.js";import"./StyleDefinition-7d58136b.js";import"./MagnifierPrograms-fa51fd51.js";import{a as U}from"./GraphicsView2D-1264803b.js";import"./AttributeStoreView-f7f49a44.js";import{t as Q,o as f,n as d}from"./imageUtils-a68d09e3.js";import{f as b}from"./LayerView2D-eda09360.js";import{n as S}from"./HighlightGraphicContainer-7bca2fe8.js";import{u as C}from"./LayerView-7b372130.js";import{i as k}from"./RefreshableLayerView-cb757f22.js";import{P as F,S as P}from"./MapServiceLayerViewHelper-540289c1.js";import{a as G}from"./drapedUtils-11ce819c.js";import"./_commonjsHelpers-2f3e7994.js";import"./cimAnalyzer-02b73f26.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./enums-4b2a86a0.js";import"./alignmentUtils-ae955d28.js";import"./definitions-19bfb61c.js";import"./Rect-ea14f53a.js";import"./rasterizingUtils-ea810fad.js";import"./WGLBrushVTLSymbol-b759c30b.js";import"./GeometryUtils-dd03fc25.js";import"./ShaderCompiler-77d0dcb6.js";import"./ProgramTemplate-e0452ecc.js";import"./heatmapTextureUtils-0aa3a2bc.js";import"./imageutils-96926fa1.js";import"./Matcher-c4e44d26.js";import"./visualVariablesUtils-2780c14d.js";import"./visualVariablesUtils-6ff5fadd.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-24df9e47.js";import"./ExpandedCIM-0010872c.js";import"./CircularArray-c86c79de.js";import"./ComputedAttributeStorage-167c4551.js";import"./arcadeTimeUtils-999b74fd.js";import"./executionError-fb3f283a.js";import"./centroid-d1553553.js";import"./normalizeUtilsSync-e634818e.js";import"./projectionSupport-23b402d8.js";import"./json-48e3ea08.js";import"./schemaUtils-5a41d104.js";import"./util-2bf6e249.js";import"./GraphicsView-bef23e3b.js";import"./BitmapTileContainer-bb073189.js";import"./Bitmap-2a86165d.js";import"./TileContainer-931ccd0f.js";import"./BaseGraphicContainer-55978f65.js";import"./FeatureContainer-83da4bfd.js";import"./floorFilterUtils-080a7cd2.js";import"./sublayerUtils-01edef31.js";import"./popupUtils-8b1a1adb.js";const R=[0,0];let h=class extends k(Q(b(C))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new w,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||this.layer.resampling!==!1}update(t){var e;this._fetchQueue.pause(),this._fetchQueue.state=t.state,this._tileStrategy.update(t),this._fetchQueue.resume(),(e=this._highlightView)==null||e.processUpdate(t)}attach(){const t="tileServers"in this.layer?this.layer.tileServers:null;if(this._tileInfoView=new y(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new I({tileInfoView:this._tileInfoView,concurrency:t&&10*t.length||10,process:(e,i)=>this.fetchTile(e,i)}),this._tileStrategy=new V({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),F(this,this.layer)){const e=this._highlightView=new U({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new S(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new P({createFetchPopupFeaturesQueryGeometry:(i,r)=>G(i,r,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(i,r)=>{e.graphicUpdateHandler({graphic:i,property:r})},layerView:this,updatingHandles:this.updatingHandles})}this.requestUpdate(),this.addAttachHandles(v(()=>this.resampling,()=>{this.doRefresh()})),super.attach()}detach(){var t;super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),(t=this._popupHighlightHelper)==null||t.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null}async fetchPopupFeatures(t,e){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeatures(t,e):[]}highlight(t){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(t):{remove(){}}}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){var e;return H((e=this.layer.tileInfo)==null?void 0:e.spatialReference,t)}async doRefresh(){!this.attached||this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(t=>this._enqueueTileFetch(t)))}isUpdating(){var t;return((t=this._fetchQueue)==null?void 0:t.updating)??!1}acquireTile(t){const e=this._bitmapView.createTile(t),i=e.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(R,e.key),i.resolution=this._tileInfoView.getTileResolution(e.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(e),this._bitmapView.addChild(e),this.requestUpdate(),e}releaseTile(t){this._fetchQueue.abort(t.key.id),this._bitmapView.removeChild(t),t.once("detach",()=>t.destroy()),this.requestUpdate()}async fetchTile(t,e={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:r,resamplingLevel:n=0}=e;if(!i)try{return await this._fetchImage(t,r)}catch(s){if(!p(s)&&!this.resampling)return f(this._tileInfoView.tileInfo.size);if(n<3){const m=this._tileInfoView.getTileParentId(t.id);if(m){const u=new c(m),_=await this.fetchTile(u,{...e,resamplingLevel:n+1});return d(this._tileInfoView,_,u,t)}}throw s}const a=new c(0,0,0,0);let l;try{if(await i.fetchAvailabilityUpsample(t.level,t.row,t.col,a,{signal:r}),a.level!==t.level&&!this.resampling)return f(this._tileInfoView.tileInfo.size);l=await this._fetchImage(a,r)}catch(s){if(p(s))throw s;l=await this._fetchImage(t,r)}return this.resampling?d(this._tileInfoView,l,a,t):l}async _enqueueTileFetch(t){if(!this._fetchQueue.has(t.key.id)){try{const e=await this._fetchQueue.push(t.key);t.bitmap.source=e,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.once("attach",()=>this.requestUpdate())}catch(e){p(e)||T.getLogger(this.declaredClass).error(e)}this.requestUpdate()}}async _fetchImage(t,e){return this.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:e})}};o([g()],h.prototype,"_fetchQueue",void 0),o([g()],h.prototype,"resampling",null),h=o([q("esri.views.2d.layers.TileLayerView2D")],h);const Bt=h;export{Bt as default};