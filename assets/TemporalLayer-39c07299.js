import{e as t,y as i,n as l}from"./cast-7928d7aa.js";import{T as a}from"./TimeExtent-744afd75.js";import{l as m,v as u,e as d}from"./TimeInfo-c89d0ef4.js";import"./typedArrayUtil-a8b5b3e9.js";import"./ensureType-cf29afa9.js";import{o as y}from"./Extent-69509002.js";import{b as w}from"./fieldUtils-31bfecd2.js";const g=p=>{let e=class extends p{constructor(){super(...arguments),this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0}readOffset(o,f){const r=f.timeInfo.exportOptions;if(!r)return null;const s=r.timeOffset,n=d.fromJSON(r.timeOffsetUnits);return s&&n?new m({value:s,unit:n}):null}set timeInfo(o){w(o,this.fieldsIndex),this._set("timeInfo",o)}};return t([i({type:a,json:{write:!1}})],e.prototype,"timeExtent",void 0),t([i({type:m})],e.prototype,"timeOffset",void 0),t([y("service","timeOffset",["timeInfo.exportOptions"])],e.prototype,"readOffset",null),t([i({value:null,type:u,json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],e.prototype,"timeInfo",null),t([i({type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation"},origins:{"web-scene":{read:!1,write:!1}}}})],e.prototype,"useViewTime",void 0),e=t([l("esri.layers.mixins.TemporalLayer")],e),e};export{g as a};
