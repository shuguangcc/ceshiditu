import{e as r,y as i,n as l}from"./cast-7928d7aa.js";import{s as o}from"./Error-653283ae.js";import{r as n}from"./typedArrayUtil-a8b5b3e9.js";import"./ensureType-cf29afa9.js";import{m as p,S as u}from"./arcgisLayerUrl-0b2b7691.js";const c=s=>{let e=class extends s{get title(){if(this._get("title")&&this.originOf("title")!=="defaults")return this._get("title");if(this.url){const t=p(this.url);if(n(t)&&t.title)return t.title}return this._get("title")||""}set title(t){this._set("title",t)}set url(t){this._set("url",u(t,o.getLogger(this.declaredClass)))}};return r([i()],e.prototype,"title",null),r([i({type:String})],e.prototype,"url",null),e=r([l("esri.layers.mixins.ArcGISService")],e),e};export{c as p};
