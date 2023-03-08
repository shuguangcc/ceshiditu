import{bE as _,iZ as j,bj as v,aL as y,G as m,cJ as g,r as h,S as d,ie as F,ah as b,N as s,O as l,jW as $,bd as p,a0 as S,P as M,iA as C,iC as I,iB as N,fa as P,fb as K,fc as R,bX as T,Y as w,f3 as A,au as J,be as W,ff as z,eA as G}from"./index-f01cff9b.js";import{j as H,S as E,g as x,d as k}from"./kmlUtils-8ba2e2fe.js";var u;let o=u=class extends _.EventedMixin(j(M)){constructor(...e){super(...e),this.description=null,this.id=null,this.networkLink=null,this.sublayers=null,this.title=null,this.sourceJSON=null,this.fullExtent=null,this.addHandles([v(()=>this.sublayers,"after-add",({item:t})=>{t.parent=this,t.layer=this.layer},y),v(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},y),m(()=>this.sublayers,(t,r)=>{if(r)for(const i of r)i.layer=i.parent=null;if(t)for(const i of t)i.parent=this,i.layer=this.layer},y)])}initialize(){g(()=>this.networkLink).then(()=>g(()=>this.visible===!0)).then(()=>this.load())}load(e){var i;if(!this.networkLink||this.networkLink.viewFormat)return;const t=h(e)?e.signal:null,r=this._fetchService(((i=this._get("networkLink"))==null?void 0:i.href)??"",t).then(n=>{var f;const O=H(n.sublayers);this.fullExtent=d.fromJSON(O),this.sourceJSON=n;const c=F(b.ofType(u),E(u,n));this.sublayers?this.sublayers.addMany(c):this.sublayers=c,(f=this.layer)==null||f.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")});return this.addResolvingPromise(r),Promise.resolve(this)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,t){return!!t.visibility}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(t=>t.layer=e)}_fetchService(e,t){return x(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then(r=>k(r.data))}};s([l()],o.prototype,"description",void 0),s([l()],o.prototype,"id",void 0),s([l({readOnly:!0,value:null})],o.prototype,"networkLink",void 0),s([l({json:{write:{allowNull:!0}}})],o.prototype,"parent",void 0),s([l({type:b.ofType(u),json:{write:{allowNull:!0}}})],o.prototype,"sublayers",void 0),s([l({value:null,json:{read:{source:"name",reader:e=>$(e)}}})],o.prototype,"title",void 0),s([l({value:!0})],o.prototype,"visible",null),s([p("visible",["visibility"])],o.prototype,"readVisible",null),s([l()],o.prototype,"sourceJSON",void 0),s([l({value:null})],o.prototype,"layer",null),s([l({type:d})],o.prototype,"fullExtent",void 0),o=u=s([S("esri.layers.support.KMLSublayer")],o);const L=o,V=["kml","xml"];let a=class extends C(I(N(P(K(R(G)))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new T({getCollections:()=>[this.sublayers],getChildrenFunction:t=>t.sublayers}),this.outSpatialReference=w.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.addHandles([m(()=>this.sublayers,(e,t)=>{t&&t.forEach(r=>{r.parent=null,r.layer=null}),e&&e.forEach(r=>{r.parent=this,r.layer=this})},y),this.on("sublayer-update",()=>this.notifyChange("fullExtent"))])}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}readSublayersFromItemOrWebMap(e,t){this._visibleFolders=t.visibleFolders}readSublayers(e,t,r){return E(L,t,r,this._visibleFolders)}writeSublayers(e,t){const r=[],i=e.toArray();for(;i.length;){const n=i[0];n.networkLink||(n.visible&&r.push(n.id),n.sublayers&&i.push(...n.sublayers.toArray())),i.shift()}t.visibleFolders=r}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?A(this.url,V)||"KML":e||""}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,t=[],r=i=>{i.visible&&(t.push(i),i.sublayers&&i.sublayers.forEach(r))};return e&&e.forEach(r),t}get fullExtent(){return this._recomputeFullExtent()}load(e){const t=h(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"],supportsData:!1},e).catch(J).then(()=>this._fetchService(t))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(e){const t=await Promise.resolve().then(()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:x(this.url??"",this.outSpatialReference,this.refreshInterval,e)),r=k(t.data);r&&this.read(r,{origin:"service"})}_recomputeFullExtent(){let e=null;h(this.extent)&&(e=this.extent.clone());const t=r=>{if(r.sublayers)for(const i of r.sublayers.items)t(i),i.visible&&i.fullExtent&&(h(e)?e.union(i.fullExtent):e=i.fullExtent.clone())};return t(this),e}};s([l({readOnly:!0})],a.prototype,"allSublayers",void 0),s([l({type:w})],a.prototype,"outSpatialReference",void 0),s([l({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],a.prototype,"path",void 0),s([l({readOnly:!0,json:{read:!1,write:!1}})],a.prototype,"legendEnabled",void 0),s([l({type:["show","hide","hide-children"]})],a.prototype,"listMode",void 0),s([l({type:["KML"]})],a.prototype,"operationalLayerType",void 0),s([l({})],a.prototype,"resourceInfo",void 0),s([l({type:b.ofType(L),json:{write:{ignoreOrigin:!0}}})],a.prototype,"sublayers",void 0),s([p(["web-map","portal-item"],"sublayers",["visibleFolders"])],a.prototype,"readSublayersFromItemOrWebMap",null),s([p("service","sublayers",["sublayers"])],a.prototype,"readSublayers",null),s([W("sublayers")],a.prototype,"writeSublayers",null),s([l({readOnly:!0,json:{read:!1}})],a.prototype,"type",void 0),s([l({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],a.prototype,"title",null),s([l(z)],a.prototype,"url",void 0),s([l({readOnly:!0})],a.prototype,"visibleSublayers",null),s([l({type:d})],a.prototype,"extent",void 0),s([l()],a.prototype,"fullExtent",null),a=s([S("esri.layers.KMLLayer")],a);const D=a;export{D as default};