import{e as r,y as p,n as s}from"./cast-7928d7aa.js";import"./typedArrayUtil-a8b5b3e9.js";import"./ensureType-cf29afa9.js";function n(t){return"portalItem"in t}const o=t=>{let i=class extends t{get apiKey(){var e;return this._isOverridden("apiKey")?this._get("apiKey"):n(this)?(e=this.portalItem)==null?void 0:e.apiKey:null}set apiKey(e){e!=null?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return r([p({type:String})],i.prototype,"apiKey",null),i=r([s("esri.layers.mixins.APIKeyMixin")],i),i};export{o as i};