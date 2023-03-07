import{b3 as O,nX as F,bq as f,cH as y,l as m,dc as g,u as p,aG as d,u1 as $,bd as b,e as s,y as i,u2 as M,iF as h,b as S,aD as j,t7 as I,t9 as C,t8 as K,rn as N,ro as P,rp as R,d2 as T,aL as w,pM as H,gH as J,iG as z,rt as A,d7 as G}from"./index-74d49a87.js";import{j as W,S as x,g as E,d as k}from"./kmlUtils-05d9f96b.js";var u;let a=u=class extends O.EventedMixin(F(j)){constructor(...e){super(...e),this.description=null,this.id=null,this.networkLink=null,this.sublayers=null,this.title=null,this.sourceJSON=null,this.fullExtent=null,this.addHandles([f(()=>this.sublayers,"after-add",({item:t})=>{t.parent=this,t.layer=this.layer},y),f(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},y),m(()=>this.sublayers,(t,r)=>{if(r)for(const l of r)l.layer=l.parent=null;if(t)for(const l of t)l.parent=this,l.layer=this.layer},y)])}initialize(){g(()=>this.networkLink).then(()=>g(()=>this.visible===!0)).then(()=>this.load())}load(e){var l;if(!this.networkLink||this.networkLink.viewFormat)return;const t=p(e)?e.signal:null,r=this._fetchService(((l=this._get("networkLink"))==null?void 0:l.href)??"",t).then(n=>{var v;const _=W(n.sublayers);this.fullExtent=d.fromJSON(_),this.sourceJSON=n;const c=$(b.ofType(u),x(u,n));this.sublayers?this.sublayers.addMany(c):this.sublayers=c,(v=this.layer)==null||v.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")});return this.addResolvingPromise(r),Promise.resolve(this)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,t){return!!t.visibility}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(t=>t.layer=e)}_fetchService(e,t){return E(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then(r=>k(r.data))}};s([i()],a.prototype,"description",void 0),s([i()],a.prototype,"id",void 0),s([i({readOnly:!0,value:null})],a.prototype,"networkLink",void 0),s([i({json:{write:{allowNull:!0}}})],a.prototype,"parent",void 0),s([i({type:b.ofType(u),json:{write:{allowNull:!0}}})],a.prototype,"sublayers",void 0),s([i({value:null,json:{read:{source:"name",reader:e=>M(e)}}})],a.prototype,"title",void 0),s([i({value:!0})],a.prototype,"visible",null),s([h("visible",["visibility"])],a.prototype,"readVisible",null),s([i()],a.prototype,"sourceJSON",void 0),s([i({value:null})],a.prototype,"layer",null),s([i({type:d})],a.prototype,"fullExtent",void 0),a=u=s([S("esri.layers.support.KMLSublayer")],a);const L=a,q=["kml","xml"];let o=class extends I(C(K(N(P(R(G)))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new T({getCollections:()=>[this.sublayers],getChildrenFunction:t=>t.sublayers}),this.outSpatialReference=w.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.addHandles([m(()=>this.sublayers,(e,t)=>{t&&t.forEach(r=>{r.parent=null,r.layer=null}),e&&e.forEach(r=>{r.parent=this,r.layer=this})},y),this.on("sublayer-update",()=>this.notifyChange("fullExtent"))])}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}readSublayersFromItemOrWebMap(e,t){this._visibleFolders=t.visibleFolders}readSublayers(e,t,r){return x(L,t,r,this._visibleFolders)}writeSublayers(e,t){const r=[],l=e.toArray();for(;l.length;){const n=l[0];n.networkLink||(n.visible&&r.push(n.id),n.sublayers&&l.push(...n.sublayers.toArray())),l.shift()}t.visibleFolders=r}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?H(this.url,q)||"KML":e||""}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,t=[],r=l=>{l.visible&&(t.push(l),l.sublayers&&l.sublayers.forEach(r))};return e&&e.forEach(r),t}get fullExtent(){return this._recomputeFullExtent()}load(e){const t=p(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"],supportsData:!1},e).catch(J).then(()=>this._fetchService(t))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(e){const t=await Promise.resolve().then(()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:E(this.url??"",this.outSpatialReference,this.refreshInterval,e)),r=k(t.data);r&&this.read(r,{origin:"service"})}_recomputeFullExtent(){let e=null;p(this.extent)&&(e=this.extent.clone());const t=r=>{if(r.sublayers)for(const l of r.sublayers.items)t(l),l.visible&&l.fullExtent&&(p(e)?e.union(l.fullExtent):e=l.fullExtent.clone())};return t(this),e}};s([i({readOnly:!0})],o.prototype,"allSublayers",void 0),s([i({type:w})],o.prototype,"outSpatialReference",void 0),s([i({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],o.prototype,"path",void 0),s([i({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"legendEnabled",void 0),s([i({type:["show","hide","hide-children"]})],o.prototype,"listMode",void 0),s([i({type:["KML"]})],o.prototype,"operationalLayerType",void 0),s([i({})],o.prototype,"resourceInfo",void 0),s([i({type:b.ofType(L),json:{write:{ignoreOrigin:!0}}})],o.prototype,"sublayers",void 0),s([h(["web-map","portal-item"],"sublayers",["visibleFolders"])],o.prototype,"readSublayersFromItemOrWebMap",null),s([h("service","sublayers",["sublayers"])],o.prototype,"readSublayers",null),s([z("sublayers")],o.prototype,"writeSublayers",null),s([i({readOnly:!0,json:{read:!1}})],o.prototype,"type",void 0),s([i({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],o.prototype,"title",null),s([i(A)],o.prototype,"url",void 0),s([i({readOnly:!0})],o.prototype,"visibleSublayers",null),s([i({type:d})],o.prototype,"extent",void 0),s([i()],o.prototype,"fullExtent",null),o=s([S("esri.layers.KMLLayer")],o);const U=o;export{U as default};