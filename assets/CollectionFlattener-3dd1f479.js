import{e as n,y as l,n as f,E as u}from"./cast-7928d7aa.js";import{j as c}from"./Collection-78126e82.js";import{r as h,t as d}from"./typedArrayUtil-a8b5b3e9.js";import"./string-cdf077e6.js";import"./Error-653283ae.js";import"./ensureType-cf29afa9.js";let s=class extends c{constructor(t){super(t),this.getCollections=null}initialize(){this.own(u(()=>this._refresh()))}destroy(){this.getCollections=null}_refresh(){const t=h(this.getCollections)?this.getCollections():null;if(d(t))return void this.removeAll();let e=0;for(const r of t)h(r)&&(e=this._processCollection(e,r));this.splice(e,this.length)}_createNewInstance(t){return new c(t)}_processCollection(t,e){if(!e)return t;const r=this.itemFilterFunction?this.itemFilterFunction:o=>!!o;for(const o of e)if(o){if(r(o)){const i=this.indexOf(o,t);i>=0?i!==t&&this.reorder(o,t):this.add(o,t),++t}if(this.getChildrenFunction){const i=this.getChildrenFunction(o);if(Array.isArray(i))for(const p of i)t=this._processCollection(t,p);else t=this._processCollection(t,i)}}return t}};n([l()],s.prototype,"getCollections",void 0),n([l()],s.prototype,"getChildrenFunction",void 0),n([l()],s.prototype,"itemFilterFunction",void 0),s=n([f("esri.core.CollectionFlattener")],s);const _=s;export{_ as l};
