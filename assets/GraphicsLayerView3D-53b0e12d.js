import{bl as c,a as h,d,B as n,as as u,bm as m,e as t,y as o,b as g}from"./index-74d49a87.js";import{n as y}from"./LayerView3D-3838457e.js";import{m as b,a as f}from"./queryForSymbologySnapping-1a4edcba.js";import{A as v}from"./GraphicsProcessor-b227957b.js";import{l as S}from"./projectExtentUtils-2ba254ff.js";import{u as w}from"./LayerView-7b372130.js";import"./elevationInfoUtils-3c9457ff.js";import"./Graphics3DObjectStates-135fd699.js";import"./optimizedFeatureQueryEngineAdapter-dc9b72d8.js";import"./centroid-d1553553.js";import"./PooledRBush-83d0be85.js";let i=class extends y(w){constructor(){super(...arguments),this.type="graphics-3d",this.symbologySnappingSupported=!0,this._slicePlaneEnabled=!1,this.fullExtentInLocalViewSpatialReference=null}initialize(){this._set("processor",new v({owner:this,scaleVisibilityEnabled:!0,frustumVisibilityEnabled:!0})),this.addResolvingPromise(this.processor.initializePromise),this.handles.add(this.layer.on("graphic-update",e=>this.processor.graphicsCore.graphicUpdateHandler(e))),this.addResolvingPromise(S(this).then(e=>this.fullExtentInLocalViewSpatialReference=e)),this.layer.internal?this.notifyChange("updating"):this.handles.add(c(()=>{var e,s;return(s=(e=this.view)==null?void 0:e.basemapTerrain)==null?void 0:s.ready},()=>()=>this.notifyChange("updating"),{once:!0}))}destroy(){this.handles.removeAll(),this.updatingHandles.removeAll(),this._set("processor",h(this.processor))}get loadedGraphics(){return this.layer.graphics}get legendEnabled(){var e;return this.canResume()&&!((e=this.processor)!=null&&e.frustumVisibilitySuspended)}get slicePlaneEnabled(){const e=this.layer.internal;return this._slicePlaneEnabled&&!e}set slicePlaneEnabled(e){this._slicePlaneEnabled=e}getSuspendInfo(){var s,r;const e=super.getSuspendInfo();return e.outsideScaleRange=((s=this.processor)==null?void 0:s.scaleVisibilitySuspended)??!1,e.outsideOfView=((r=this.processor)==null?void 0:r.frustumVisibilitySuspended)??!1,e}async fetchPopupFeatures(e,s){var r;return((r=d(s))==null?void 0:r.clientGraphics)??[]}getHit(e){return this.processor.getHit(e)}whenGraphicBounds(e,s){return this.processor.whenGraphicBounds(e,s)}computeAttachmentOrigin(e,s){var r;return(r=this.processor)==null?void 0:r.computeAttachmentOrigin(e,s)}getSymbolLayerSize(e,s){return this.processor.getSymbolLayerSize(e,s)}queryGraphics(){return Promise.resolve(this.loadedGraphics)}maskOccludee(e){return this.processor.maskOccludee(e)}highlight(e){return this.processor.highlight(e)}async elevationAlignPointsInFeatures(e,s){const{processor:r}=this;if(n(r)||n(r.graphics3DGraphics))throw new u("graphicslayerview3d:missing-processor","A Graphics3D processor is needed to resolve graphics elevation.");const{graphics3DGraphics:l}=r,p=a=>typeof a=="number"?l.get(a):void 0;return b(this.view,this.layer,p,e,s)}async queryForSymbologySnapping(e,s){return f(this.processor,e,s)}get updatePolicy(){var e;return((e=this.processor)==null?void 0:e.graphicsCore.effectiveUpdatePolicy)||m.SYNC}canResume(){var e;return super.canResume()&&!((e=this.processor)!=null&&e.scaleVisibilitySuspended)}isUpdating(){var e,s,r;return!(!((e=this.processor)!=null&&e.updating)&&(this.layer.internal||(r=(s=this.view)==null?void 0:s.basemapTerrain)!=null&&r.ready))}get performanceInfo(){var e,s;return{displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:-1,totalNumberOfFeatures:-1,nodes:0,core:null,updating:this.updating,elevationUpdating:((e=this.processor)==null?void 0:e.elevationAlignment.updating)??!1,visibilityFrustum:!((s=this.processor)!=null&&s.frustumVisibilitySuspended)}}getUsedMemory(){var e,s;return((s=(e=this.processor)==null?void 0:e.graphicsCore)==null?void 0:s.usedMemory)??0}getUnloadedMemory(){var e,s;return(s=(e=this.processor)==null?void 0:e.graphicsCore)==null?void 0:s.unprocessedMemoryEstimate}ignoresMemoryFactor(){return!0}};t([o()],i.prototype,"loadedGraphics",null),t([o({readOnly:!0})],i.prototype,"legendEnabled",null),t([o()],i.prototype,"layer",void 0),t([o({readOnly:!0})],i.prototype,"processor",void 0),t([o()],i.prototype,"_slicePlaneEnabled",void 0),t([o({type:Boolean})],i.prototype,"slicePlaneEnabled",null),i=t([g("esri.views.3d.layers.GraphicsLayerView3D")],i);const _=i;export{_ as default};