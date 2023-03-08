import{K as d,e as r,y as o,n as h}from"./cast-7928d7aa.js";import{l as b}from"./CollectionFlattener-3dd1f479.js";import{n as v}from"./loadAll-7fd968fe.js";import{r as u}from"./typedArrayUtil-a8b5b3e9.js";import{O as f}from"./MultiOriginJSONSupport-27362d57.js";import{l as m,U as y}from"./reactiveUtils-f41a4e00.js";import"./ensureType-cf29afa9.js";import{r as c}from"./Extent-69509002.js";import{b as _}from"./Layer-f0696768.js";import{n as g}from"./BlendLayer-d8293c8d.js";import{c as L}from"./OperationalLayer-24e6fa34.js";import{v as O}from"./PortalLayer-f1a64f99.js";import{t as w}from"./ScaleRangeLayer-271178b7.js";import{a as M}from"./lazyLayerLoader-c3848c13.js";import{l as V,d as $,t as C}from"./TablesMixin-e7a6aab1.js";import{y as x}from"./writeUtils-067c4f82.js";import"./string-cdf077e6.js";import"./Error-653283ae.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-6684e352.js";import"./Collection-78126e82.js";import"./Evented-515b9d9c.js";import"./SimpleObservable-7dcdef1d.js";import"./asyncUtils-62e8a185.js";import"./Loadable-48bc1293.js";import"./Promise-dfdee8ba.js";import"./Ellipsoid-89682c5e.js";import"./preload-helper-41c905a7.js";import"./geometry-5a216427.js";import"./Polyline-bf268e7b.js";import"./typeUtils-eb9416d0.js";import"./jsonMap-c1f958cf.js";import"./request-d3e98716.js";import"./Identifiable-aa6d459d.js";import"./parser-2b40deea.js";import"./colorUtils-639f4d25.js";import"./screenUtils-410d12c0.js";import"./mat4f32-77b3d8ac.js";import"./mat4-44a0988f.js";import"./vec3f64-2f9cef06.js";import"./common-c186b691.js";import"./TimeExtent-744afd75.js";import"./persistableUrlUtils-a16d0f55.js";import"./ElevationInfo-ce9cacc2.js";import"./fieldUtils-31bfecd2.js";import"./arcadeOnDemand-c6d1b9f2.js";import"./lengthUtils-d2d33f94.js";import"./unitUtils-47abac71.js";import"./opacityUtils-243aae26.js";import"./Portal-8b65c9c4.js";import"./locale-30120714.js";import"./PortalGroup-bfe93c76.js";import"./PortalUser-4c8e1adc.js";import"./PortalItem-aa42c739.js";import"./assets-0b172f07.js";import"./collectionUtils-3831b7c4.js";import"./layerUtils-034678f6.js";let t=class extends g(w(L(O(V($(f(_))))))){constructor(i){super(i),this._visibilityHandles={},this.allLayers=new b({getCollections:()=>[this.layers],getChildrenFunction:e=>"layers"in e?e.layers:null}),this.allTables=C(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group"}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles(m(()=>this.visible,this._onVisibilityChange.bind(this),y))}_writeLayers(i,e,p,s){const l=[];if(!i)return l;i.forEach(n=>{const a=x(n,s.webmap?s.webmap.getLayerJSONFromResourceInfo(n):null,s);u(a)&&a.layerType&&l.push(a)}),e.layers=l}set portalItem(i){this._set("portalItem",i)}set visibilityMode(i){const e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible)}load(i){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"],layerModuleTypeMap:M},i)),Promise.resolve(this)}loadAll(){return v(this,i=>{i(this.layers,this.tables)})}layerAdded(i){i.visible&&this.visibilityMode==="exclusive"?this._turnOffOtherLayers(i):this.visibilityMode==="inherited"&&(i.visible=this.visible),this._visibilityHandles[i.uid]=m(()=>i.visible,e=>this._onChildVisibilityChange(i,e),y)}layerRemoved(i){const e=this._visibilityHandles[i.uid];e&&(e.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(i){this.layers.forEach(e=>{e!==i&&(e.visible=!1)})}_enforceVisibility(i,e){if(!d(this).initialized)return;const p=this.layers;let s=p.find(l=>l.visible);switch(i){case"exclusive":p.length&&!s&&(s=p.getItemAt(0),s.visible=!0),this._turnOffOtherLayers(s);break;case"inherited":p.forEach(l=>{l.visible=e})}}_onVisibilityChange(i){this.visibilityMode==="inherited"&&this.layers.forEach(e=>{e.visible=i})}_onChildVisibilityChange(i,e){switch(this.visibilityMode){case"exclusive":e?this._turnOffOtherLayers(i):this._isAnyLayerVisible()||(i.visible=!0);break;case"inherited":i.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some(i=>i.visible)}};r([o({readOnly:!0,dependsOn:[]})],t.prototype,"allLayers",void 0),r([o({readOnly:!0})],t.prototype,"allTables",void 0),r([o()],t.prototype,"fullExtent",void 0),r([o({json:{read:!0,write:!0}})],t.prototype,"blendMode",void 0),r([o({json:{read:!1,write:{ignoreOrigin:!0}}})],t.prototype,"layers",void 0),r([c("layers")],t.prototype,"_writeLayers",null),r([o({type:["GroupLayer"]})],t.prototype,"operationalLayerType",void 0),r([o({json:{origins:{"web-document":{read:!1,write:!1}}}})],t.prototype,"portalItem",null),r([o()],t.prototype,"spatialReference",void 0),r([o({json:{read:!1},readOnly:!0,value:"group"})],t.prototype,"type",void 0),r([o({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],t.prototype,"visibilityMode",null),t=r([h("esri.layers.GroupLayer")],t);const Ai=t;export{Ai as default};