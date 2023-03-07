import{aE as m,bl as l,B as d,e as h,b as p}from"./index-74d49a87.js";import{q as g}from"./DynamicLayerView3D-3a980df9.js";import{m as u}from"./ImageryLayerView-1596f988.js";import"./LayerView3D-3838457e.js";import"./projectExtentUtils-2ba254ff.js";import"./ImageMaterial-2cbfab0b.js";import"./LayerView-7b372130.js";import"./RefreshableLayerView-cb757f22.js";import"./popupUtils-8b1a1adb.js";let r=class extends u(g){constructor(){super(...arguments),this.type="imagery-3d",this.redrawDebounced=m(async e=>{this.redraw((a,t)=>this._redrawImage(a,t),e)},2e3)}initialize(){this.handles.add([l(()=>this.view.basemapTerrain.ready,()=>this._initializeMaximumDataResolution(),{once:!0,initial:!0}),this.layer.on("redraw",()=>this.updatingHandles.addPromise(this.redrawDebounced()))]),this.updatingHandles.add(()=>{var e,a;return(a=(e=this.layer)==null?void 0:e.exportImageServiceParameters)==null?void 0:a.version},()=>{this.updatingHandles.addPromise(this.refreshDebounced())}),this.updatingHandles.add(()=>{var e;return(e=this.layer)==null?void 0:e.renderer},()=>{this.updatingHandles.addPromise(this.refreshDebounced())}),this.updatingHandles.add(()=>this.timeExtent,()=>this.updatingHandles.addPromise(this.refreshDebounced()))}_initializeMaximumDataResolution(){this.maximumDataResolution=this.layer.loaded?this.layer.serviceRasterInfo.pixelSize:null}getFetchOptions(){return{timeExtent:this.timeExtent}}async processResult(e,a,t){a.imageOrCanvasElement?e.image=a.imageOrCanvasElement:(e.image=document.createElement("canvas"),e.pixelData=a.pixelData,await this._redrawImage(e,t))}async _redrawImage(e,a){if(!(e.image instanceof HTMLCanvasElement)||d(e.pixelData))throw new Error;const t=e.image,s=t.getContext("2d"),o=await this.layer.applyRenderer(e.pixelData,{signal:a}),i=this.layer.applyFilter(o).pixelBlock;if(d(i))throw new Error;t.width=i.width,t.height=i.height;const n=s.createImageData(i.width,i.height);n.data.set(i.getAsRGBA()),s.putImageData(n,0,0)}};r=h([p("esri.views.3d.layers.ImageryLayerView3D")],r);const H=r;export{H as default};