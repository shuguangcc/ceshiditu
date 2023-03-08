import{e as l,y as c,n as w}from"./cast-7928d7aa.js";import{s as g}from"./Error-653283ae.js";import{j as p}from"./promiseUtils-6684e352.js";import{l as I}from"./reactiveUtils-f41a4e00.js";import"./typedArrayUtil-a8b5b3e9.js";import"./ensureType-cf29afa9.js";import{E as f}from"./Extent-69509002.js";import{t as S,n as d}from"./imageUtils-8298e401.js";import{y as T}from"./LayerView2D-9c021b91.js";import{h as v}from"./TileStore-787dbea4.js";import{e as y}from"./TileKey-0750ad58.js";import{y as V,r as x}from"./TileStrategy-4189758f.js";import{u as M}from"./LayerView-b83ced89.js";import{i as q}from"./RefreshableLayerView-1faf24ee.js";import"./string-cdf077e6.js";import"./nextTick-3ee5a785.js";import"./Ellipsoid-89682c5e.js";import"./BitmapTileContainer-6fc690f1.js";import"./aaBoundingRect-4a760199.js";import"./mathUtils-2519596a.js";import"./vec3-a020a6f6.js";import"./vec3f64-2f9cef06.js";import"./common-c186b691.js";import"./vec4-790471c0.js";import"./mat3f32-d3d088e8.js";import"./Bitmap-c332c5e6.js";import"./mat3-3fc68e72.js";import"./vec2f32-461e65a9.js";import"./EffectView-d3bf37ed.js";import"./Evented-515b9d9c.js";import"./vec2f64-30dc1443.js";import"./context-util-1e3c8cfc.js";import"./enums-64ab819c.js";import"./Texture-e79b14e7.js";import"./VertexElementDescriptor-2925c6af.js";import"./parser-2b40deea.js";import"./colorUtils-639f4d25.js";import"./screenUtils-410d12c0.js";import"./mat4f32-77b3d8ac.js";import"./mat4-44a0988f.js";import"./WGLContainer-14075e1a.js";import"./WGLBrushVTLSymbol-dcfd88b4.js";import"./definitions-2d0dd0cd.js";import"./enums-4ca4641f.js";import"./number-954e4ab6.js";import"./FramebufferObject-50e1b68f.js";import"./StyleDefinition-7d58136b.js";import"./enums-4b2a86a0.js";import"./config-1337d16e.js";import"./GeometryUtils-c093d234.js";import"./pixelUtils-c27b13a1.js";import"./Utils-b2b4cf0c.js";import"./ShaderCompiler-77d0dcb6.js";import"./ProgramTemplate-afbd57f8.js";import"./MaterialKey-406a59ab.js";import"./alignmentUtils-ae955d28.js";import"./utils-26560131.js";import"./heatmapUtils-84e8c43b.js";import"./vec4f64-e407da96.js";import"./Color-a42a8267.js";import"./heatmapTextureUtils-d1d96768.js";import"./earcut-58237617.js";import"./vec2-2cef68de.js";import"./featureConversionUtils-01cdde8a.js";import"./jsonUtils-03c4af61.js";import"./Polyline-bf268e7b.js";import"./OptimizedFeature-3de538c1.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./TileContainer-07bccb79.js";import"./Collection-78126e82.js";import"./SimpleObservable-7dcdef1d.js";import"./collectionUtils-3831b7c4.js";import"./geometry-5a216427.js";import"./typeUtils-eb9416d0.js";import"./jsonMap-c1f958cf.js";import"./Queue-3a0c055d.js";import"./rbush-8e36784a.js";import"./quickselect-322ec8e1.js";import"./Query-ff8c2cfb.js";import"./TimeExtent-744afd75.js";import"./enumeration-3c281341.js";import"./Field-f5fc9f6b.js";import"./fieldType-b1002185.js";import"./Clonable-ba795b08.js";import"./HandleOwner-e1406413.js";import"./Identifiable-aa6d459d.js";import"./Promise-dfdee8ba.js";const R=[102113,102100,3857,3785,900913],Q=[0,0];let s=class extends q(S(T(M))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this._tileRequests=new Map,this.layer=null}get tileMatrixSet(){const t=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return t?(t.id!==this.layer.activeLayer.tileMatrixSetId&&(this.layer.activeLayer.tileMatrixSetId=t.id),t):null}update(t){this._fetchQueue.pause(),this._fetchQueue.state=t.state,this._tileStrategy.update(t),this._fetchQueue.resume()}attach(){if(!this.tileMatrixSet)return;const{tileInfo:t}=this.tileMatrixSet;this._tileInfoView=new v(t),this._fetchQueue=new V({tileInfoView:this._tileInfoView,concurrency:16,process:(e,i)=>this.fetchTile(e,i)}),this._tileStrategy=new x({cachePolicy:"keep",resampling:!0,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.handles.add(I(()=>{var e,i;return[(i=(e=this.layer)==null?void 0:e.activeLayer)==null?void 0:i.styleId,this.tileMatrixSet]},()=>this._refresh()),this.declaredClass),super.attach()}detach(){var t,e;super.detach(),this.handles.remove(this.declaredClass),(t=this._tileStrategy)==null||t.destroy(),(e=this._fetchQueue)==null||e.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}releaseTile(t){this._fetchQueue.abort(t.key.id),this._bitmapView.removeChild(t),t.once("detach",()=>t.destroy()),this.requestUpdate()}acquireTile(t){const e=this._bitmapView.createTile(t),i=e.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(Q,e.key),i.resolution=this._tileInfoView.getTileResolution(e.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(e),this._bitmapView.addChild(e),this.requestUpdate(),e}async doRefresh(){!this.attached||this.updateRequested||this.suspended||this._refresh()}isUpdating(){var t;return((t=this._fetchQueue)==null?void 0:t.updating)??!1}async fetchTile(t,e={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:r,resamplingLevel:h=0}=e;if(!i)return this._fetchImage(t,r);const o=new y(0,0,0,0);let m;try{await i.fetchAvailabilityUpsample(t.level,t.row,t.col,o,{signal:r}),m=await this._fetchImage(o,r)}catch(a){if(p(a))throw a;if(h<3){const n=this._tileInfoView.getTileParentId(t.id);if(n){const u=new y(n),_=await this.fetchTile(u,{...e,resamplingLevel:h+1});return d(this._tileInfoView,_,u,t)}}throw a}return d(this._tileInfoView,m,o,t)}canResume(){const t=super.canResume();return t&&this.tileMatrixSet!==null}supportsSpatialReference(t){return this.layer.activeLayer.tileMatrixSets.some(e=>f(e.tileInfo.spatialReference,t))}async _enqueueTileFetch(t){if(!this._fetchQueue.has(t.key.id)){try{const e=await this._fetchQueue.push(t.key);t.bitmap.source=e,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.once("attach",()=>this.requestUpdate())}catch(e){p(e)||g.getLogger(this.declaredClass).error(e)}this.requestUpdate()}}async _fetchImage(t,e){return this.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:e})}_refresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(t=>{if(!t.bitmap.source)return;const e={id:t.key.id,fulfilled:!1,promise:this._fetchQueue.push(t.key).then(i=>{t.bitmap.source=i}).catch(i=>{p(i)||(t.bitmap.source=null)}).finally(()=>{t.requestRender(),e.fulfilled=!0})};this._tileRequests.set(t,e)})}_getTileMatrixSetBySpatialReference(t){const e=this.view.spatialReference;if(!t.tileMatrixSets)return null;let i=t.tileMatrixSets.find(r=>f(r.tileInfo.spatialReference,e));return!i&&e.isWebMercator&&(i=t.tileMatrixSets.find(r=>R.includes(r.tileInfo.spatialReference.wkid))),i}};l([c()],s.prototype,"_fetchQueue",void 0),l([c({readOnly:!0})],s.prototype,"tileMatrixSet",null),s=l([w("esri.views.2d.layers.WMTSLayerView2D")],s);const he=s;export{he as default};