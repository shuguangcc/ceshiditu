import{c as j,e as x,y as _,n as V}from"./cast-7928d7aa.js";import{c as q,b as W}from"./asyncUtils-62e8a185.js";import{s as w}from"./Error-653283ae.js";import{t as T,r as P}from"./typedArrayUtil-a8b5b3e9.js";import{x as k,j as b,E as B,v as Y,p as Z,a as G,f as N}from"./promiseUtils-6684e352.js";import{j as J}from"./reactiveUtils-f41a4e00.js";import"./ensureType-cf29afa9.js";import{a as z}from"./Extent-69509002.js";import{s as v,l as S,E as K,I as Q,u as $,a as C,U as X}from"./aaBoundingRect-4a760199.js";import{ab as ee,g as te,ac as ie,ad as M,ae as R,af as ae,ag as re}from"./index-455b69b8.js";import{n as se}from"./LayerView3D-9d740636.js";import{d as ne}from"./objectResourceUtils-ef6e3cdf.js";import{O as f}from"./VertexAttribute-9c5c630d.js";import{l as oe}from"./projectExtentUtils-9adea3ba.js";import{i as le}from"./basicInterfaces-19ed850e.js";import{L as he}from"./Texture-bbae5d9d.js";import{p as de}from"./ImageMaterial-0dc3e395.js";import{u as ce}from"./LayerView-b83ced89.js";import{i as me}from"./RefreshableLayerView-1faf24ee.js";import{D as H}from"./enums-64ab819c.js";function ge(e,t,i){const r=v(e)/S(e),a={width:i,height:i};return r>1.0001?a.height=i/r:r<.9999&&(a.width=i*r),a.width=Math.round(a.width/(v(e)/v(t))),a.height=Math.round(a.height/(S(e)/S(t))),a}function U(e){return ee([[e[0],e[1],-1],[e[2],e[1],-1],[e[2],e[3],-1],[e[0],e[3],-1]])}function ue(e,t){if(!K(e,t))return U(t);const i=[e[1]-t[1],Math.min(e[3],t[3])-Math.max(e[1],t[1]),t[3]-e[3],123456],r=[e[0]-t[0],Math.min(e[2],t[2])-Math.max(e[0],t[0]),t[2]-e[2],123456],a=t[2]-t[0],o=t[3]-t[1],s=r[0]>0&&r[2]>0?3:2,n=i[0]>0&&i[2]>0?3:2,d=(n+1)*(s+1),l=new Float64Array(3*d),c=new Float32Array(2*d),h=new Array(6*(n*s-1));let E=0,A=0,D=0,m=0,u=0;for(let p=0;p<4;p++){const O=i[p];if(O<=0)continue;let I=0;for(let y=0;y<4;y++){const L=r[y];L<=0||(l[A++]=t[0]+I,l[A++]=t[1]+E,l[A++]=-1,c[D++]=I/a,c[D++]=E/o,y<3&&p<3&&(y!==1||p!==1)&&(h[u++]=m,h[u++]=m+1,h[u++]=m+s+1,h[u++]=m+1,h[u++]=m+s+2,h[u++]=m+s+1),m++,I+=L)}E+=O}const F=new Array(h.length);return new ne([[f.POSITION,{size:3,data:l,exclusive:!0}],[f.NORMAL,{size:3,data:fe,exclusive:!0}],[f.UV0,{size:2,data:c,exclusive:!0}]],[[f.POSITION,h],[f.NORMAL,F],[f.UV0,h]])}const fe=[0,0,1];let g=class extends me(se(ce)){constructor(){super(...arguments),this.drapeSourceType=te.RasterImage,this.updatePolicy=le.SYNC,this.fullExtentInLocalViewSpatialReference=null,this.maximumDataResolution=null,this._images=new Array,this._extents=new Array,this._overlays=new Array,this.updateWhenStationary=!0,this._drapeSourceRenderer=null,this.refreshDebounced=k(async e=>{this.destroyed||await this._doRefresh(e).catch(t=>{b(t)||w.getLogger(this.declaredClass).error(t)})},2e3)}initialize(){this._drapeSourceRenderer=this.view.basemapTerrain.overlayManager.registerGeometryDrapeSource(this),this.handles.add(j(()=>this.view.basemapTerrain.overlayManager.unregisterDrapeSource(this))),this.addResolvingPromise(oe(this).then(e=>this._set("fullExtentInLocalViewSpatialReference",e))),this.updatingHandles.add(()=>this.suspended,()=>this._suspendedChangeHandler()),this.handles.add(this.view.resourceController.scheduler.registerIdleStateCallbacks(()=>{this._isScaleRangeActive()&&this.notifyChange("suspended")},()=>{})),this._isScaleRangeLayer()&&this.updatingHandles.add(()=>this.layer.effectiveScaleRange,()=>this.notifyChange("suspended"))}destroy(){this.clear()}setDrapingExtent(e,t){this._spatialReference=t,e.forEach(i=>{this._overlays[i.index]=i,this._updateImageExtent(i)})}_updateImageExtent(e){const t=this._clippedExtent(e.extent,pe);if(T(t))return;const i=ge(e.extent,t,e.resolution);let r=e.pixelRatio*this.view.state.pixelRatio;if("imageMaxWidth"in this.layer||"imageMaxHeight"in this.layer){const o=this.layer.imageMaxWidth,s=this.layer.imageMaxHeight;if(i.width>o){const n=o/i.width;i.height=Math.floor(i.height*n),i.width=o,r*=n}if(i.height>s){const n=s/i.height;i.width=Math.floor(i.width*n),i.height=s,r*=n}}const a=this._extents[e.index];a&&Q(a.extent,t)&&this._imageSizeEquals(t,a.imageSize,i)||(this._extents[e.index]={extent:$(t),imageSize:i,pixelRatio:r},this.suspended||this._fetch(e.index).catch(o=>{b(o)||w.getLogger(this.declaredClass).error(o)}))}clear(){for(let e=0;e<this._images.length;e++)this._clearImage(e)}async doRefresh(){return this._doRefresh()}async _doRefresh(e){if(this.suspended)return;const t=[];for(let i=0;i<this._extents.length;i++)this._extents[i]&&t.push(this._fetch(i,e));await B(t)}canResume(){if(!super.canResume())return!1;const e=this.layer;if(this._isScaleRangeActive()){const{minScale:t,maxScale:i}=e.effectiveScaleRange,r=this.view.scale;if(r<i||t>0&&r>t)return!1}return!0}isUpdating(){return this._images.some(e=>!!e.loadingPromise)}async processResult(e,t,i){(t instanceof HTMLImageElement||t instanceof HTMLCanvasElement)&&(e.image=t)}findExtentInfoAt(e){for(const t of this._extents){const i=t.extent;if(new z(i[0],i[1],i[2],i[3],this._spatialReference).contains(e))return t}return null}getFetchOptions(){}async redraw(e,t){await q(this._images,async(i,r)=>{i&&(await e(i,t),await this._createStageObjects(r,i.image,t))})}_imageSizeEquals(e,t,i){if(!this.maximumDataResolution)return!1;const r=v(e)/this.maximumDataResolution.x,a=S(e)/this.maximumDataResolution.y,o=r/t.width,s=a/t.height,n=r/i.width,d=a/i.height,l=Math.abs(o-n),c=Math.abs(s-d),h=ie.TESTS_DISABLE_OPTIMIZATIONS?0:1.5;return l<=h&&c<=h}async _fetch(e,t){if(this.suspended)return;const i=this._extents[e],r=i.extent;this._images[e]||(this._images[e]={texture:null,material:null,renderGeometry:null,loadingPromise:null,loadingAbortController:null,image:null,pixelData:null,renderExtent:$(r)});const a=this._images[e];a.loadingAbortController&&(a.loadingAbortController.abort(),a.loadingAbortController=null);const o=new z(r[0],r[1],r[2],r[3],this._spatialReference);if(o.width===0||o.height===0)return void this._clearImage(e);const s=new AbortController;a.loadingAbortController=s,Y(t,()=>s.abort());const n=s.signal,d=this._waitFetchReady(n).then(async()=>{const l={requestAsImageElement:!0,pixelRatio:this._overlays[e].pixelRatio,...this.getFetchOptions(),signal:n},{height:c,width:h}=i.imageSize;return this.layer.fetchImage(o,h,c,l)}).then(l=>{if(Z(n))throw w.getLogger(this.declaredClass).warnOnce("A call to fetchImage resolved even though the request was aborted. fetchImage should not resolve if options.signal.aborted is true."),G();return this.processResult(a,l)}).then(()=>{C(a.renderExtent,r)}).finally(()=>{d===a.loadingPromise&&(a.loadingPromise=null,a.loadingAbortController=null)});a.loadingPromise=d,this.notifyChange("updating"),await d.then(async()=>{if(n.aborted)throw G();await this._createStageObjects(e,a.image,n),this.notifyChange("updating")}).catch(l=>{throw l&&!b(l)&&w.getLogger(this.declaredClass).error(l),this.notifyChange("updating"),l})}_clearImage(e){const t=this._images[e];if(t){P(t.renderGeometry)&&(this._drapeSourceRenderer.removeGeometries([t.renderGeometry],M.UPDATE),t.renderGeometry=null);const i=this.view._stage;i.remove(t.texture),t.texture=null,i.remove(t.material),t.material=null,t.loadingAbortController&&(t.loadingAbortController.abort(),t.loadingAbortController=null),t.loadingPromise=null,t.image=null,t.pixelData=null}}async _createStageObjects(e,t,i){const r=this.view._stage,a=this._images[e],o=()=>{r.remove(a.texture),a.texture=null,P(a.renderGeometry)&&(this._drapeSourceRenderer.removeGeometries([a.renderGeometry],M.UPDATE),a.renderGeometry=null)};if(t){const s=new he(t,{width:t.width,height:t.height,preMultiplyAlpha:!0,wrap:{s:H.CLAMP_TO_EDGE,t:H.CLAMP_TO_EDGE}});let n;if(await W(this._images[e===R.INNER?R.OUTER:R.INNER].loadingPromise),N(i),e===R.INNER)n=U(a.renderExtent);else{const d=this._images[0].renderExtent;if(!d)return void o();n=ue(d,a.renderExtent)}o(),r.add(s),await r.loadImmediate(s),a.texture=s,T(a.material)?(a.material=new de({transparent:!0,textureId:s.id}),r.add(a.material)):a.material.setParameters({textureId:s.id}),a.renderGeometry=new ae(n,a.material),a.renderGeometry.origin=this._overlays[e].renderLocalOrigin,this._drapeSourceRenderer.addGeometries([a.renderGeometry],M.UPDATE)}else o(),r.remove(a.material),a.material=null}_isScaleRangeLayer(){return"effectiveScaleRange"in this.layer}_isScaleRangeActive(){const e=this.layer;if(!this._isScaleRangeLayer())return!1;const{minScale:t,maxScale:i}=e.effectiveScaleRange;return re(t,i)}_clippedExtent(e,t){if(this.view.viewingMode!=="local")return C(t,e);const i=this.view.basemapTerrain;return i.ready?X(e,i.extent,t):C(t,e)}_suspendedChangeHandler(){this.suspended?this.clear():this.refreshDebounced()}async _waitFetchReady(e){await J(()=>this.view.stationary,e),N(e)}};x([_()],g.prototype,"layer",void 0),x([_()],g.prototype,"suspended",void 0),x([_({readOnly:!0})],g.prototype,"fullExtentInLocalViewSpatialReference",void 0),x([_()],g.prototype,"updating",void 0),g=x([V("esri.views.3d.layers.DynamicLayerView3D")],g);const Ne=g,pe=$();export{Ne as F};