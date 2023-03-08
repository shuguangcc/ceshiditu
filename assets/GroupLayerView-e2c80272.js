import{e as l,y as a,n as p}from"./cast-7928d7aa.js";import{j as n}from"./Collection-78126e82.js";import{t as V,n as d}from"./collectionUtils-3831b7c4.js";import{t as o}from"./typedArrayUtil-a8b5b3e9.js";import{l as y,U as h}from"./reactiveUtils-f41a4e00.js";import"./ensureType-cf29afa9.js";import{u as w}from"./LayerView-b83ced89.js";import"./string-cdf077e6.js";import"./Error-653283ae.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-6684e352.js";import"./Evented-515b9d9c.js";import"./SimpleObservable-7dcdef1d.js";import"./HandleOwner-e1406413.js";import"./Identifiable-aa6d459d.js";import"./Promise-dfdee8ba.js";let r=class extends w{constructor(i){super(i),this.type="group",this.layerViews=new n}_allLayerViewVisibility(i){this.layerViews.forEach(e=>{e.visible=i})}initialize(){this.handles.add([this.layerViews.on("change",i=>this._layerViewsChangeHandler(i)),y(()=>this.layer.visibilityMode,()=>this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(null)),h),y(()=>this.visible,i=>{this._applyVisibility(()=>this._allLayerViewVisibility(i),()=>{})},h)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}set layerViews(i){this._set("layerViews",d(i,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((i,e)=>i+e.updatingProgress,0)/this.layerViews.length}isUpdating(){return this.layerViews.some(i=>i.updating)}_hasLayerViewVisibleOverrides(){return this.layerViews.some(i=>i._isOverridden("visible"))}_findLayerViewForLayer(i){return i&&this.layerViews.find(e=>e.layer===i)}_firstVisibleOnLayerOrder(){const i=this.layer.layers.find(e=>{var s;return(s=this._findLayerViewForLayer(e))==null?void 0:s.visible});return i&&this._findLayerViewForLayer(i)}_applyExclusiveVisibility(i){o(i)&&(i=this._firstVisibleOnLayerOrder(),o(i)&&this.layerViews.length>0&&(i=this._findLayerViewForLayer(this.layer.layers.getItemAt(0)))),this.layerViews.forEach(e=>{e.visible=e===i})}_layerViewsChangeHandler(i){this.handles.remove("grouplayerview:visible"),this.handles.add(this.layerViews.map(s=>y(()=>s.visible,t=>this._applyVisibility(()=>{t!==this.visible&&(s.visible=this.visible)},()=>this._applyExclusiveVisibility(t?s:null)),h)).toArray(),"grouplayerview:visible");const e=i.added[i.added.length-1];this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(e!=null&&e.visible?e:null))}_applyVisibility(i,e){var s,t;this._hasLayerViewVisibleOverrides()&&(((s=this.layer)==null?void 0:s.visibilityMode)==="inherited"?i():((t=this.layer)==null?void 0:t.visibilityMode)==="exclusive"&&e())}};l([a({cast:V})],r.prototype,"layerViews",null),l([a({readOnly:!0})],r.prototype,"updatingProgress",null),l([a()],r.prototype,"view",void 0),r=l([p("esri.views.layers.GroupLayerView")],r);const H=r;export{H as default};
