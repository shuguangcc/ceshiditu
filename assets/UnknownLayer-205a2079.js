import{v as n,e as t,y as p,n as s}from"./cast-7928d7aa.js";import{a}from"./Error-653283ae.js";import{O as y}from"./MultiOriginJSONSupport-27362d57.js";import"./typedArrayUtil-a8b5b3e9.js";import"./ensureType-cf29afa9.js";import{b as l}from"./Layer-f0696768.js";import{v as u}from"./PortalLayer-f1a64f99.js";import"./string-cdf077e6.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-6684e352.js";import"./preload-helper-41c905a7.js";import"./geometry-5a216427.js";import"./Extent-69509002.js";import"./Ellipsoid-89682c5e.js";import"./Polyline-bf268e7b.js";import"./typeUtils-eb9416d0.js";import"./jsonMap-c1f958cf.js";import"./request-d3e98716.js";import"./Evented-515b9d9c.js";import"./Identifiable-aa6d459d.js";import"./Loadable-48bc1293.js";import"./Promise-dfdee8ba.js";import"./asyncUtils-62e8a185.js";import"./Portal-8b65c9c4.js";import"./locale-30120714.js";import"./PortalGroup-bfe93c76.js";import"./PortalUser-4c8e1adc.js";import"./PortalItem-aa42c739.js";import"./assets-0b172f07.js";let r=class extends u(y(l)){constructor(o){super(o),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(new Promise((o,e)=>{n(()=>{const i=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let m="Unknown layer type";i&&(m+=" "+i),e(new a("layer:unknown-layer-type",m,{layerType:i}))})}))}read(o,e){super.read({resourceInfo:o},e)}write(){return null}};t([p({readOnly:!0})],r.prototype,"resourceInfo",void 0),t([p({type:["show","hide"]})],r.prototype,"listMode",void 0),t([p({json:{read:!1},readOnly:!0,value:"unknown"})],r.prototype,"type",void 0),r=t([s("esri.layers.UnknownLayer")],r);const H=r;export{H as default};