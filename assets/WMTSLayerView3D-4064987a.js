import{lz as f,u as s,bd as c,s as d,dc as m,B as u,e as o,y as n,b as p}from"./index-74d49a87.js";import{n as g}from"./LayerView3D-3838457e.js";import{c as y}from"./TiledLayerView3D-4c7e8e34.js";import{u as I}from"./LayerView-7b372130.js";import{i as x}from"./RefreshableLayerView-cb757f22.js";let r=class extends x(y(g(I))){constructor(){super(...arguments),this.type="wmts-3d"}get hasMixedImageFormats(){return!0}_getCompatibleTileInfoMatrixSet(t,e=!1){const i=f(this.layer);if(s(i)){if(c.isCollection(i))return i.find(h=>{const a=t(h);return s(a)&&(e?d.getLogger(this.declaredClass).error("The selected tile matrix set is not compatible with the view",a):this.addResolvingPromise(Promise.reject(a))),a==null});const l=t(i);return s(l)&&(e?d.getLogger(this.declaredClass).error("The selected tile matrix set is not compatible with the view",l):this.addResolvingPromise(Promise.reject(l))),i}return null}initialize(){this._getCompatibleTileInfoMatrixSet(e=>this._getTileInfoSupportError(e.tileInfo,e.fullExtent));const t=m(()=>{var e,i;return(i=(e=this.view)==null?void 0:e.basemapTerrain)==null?void 0:i.tilingSchemeLocked}).then(()=>{const e=this._getCompatibleTileInfoMatrixSet(i=>this._getTileInfoError(i.tileInfo,i.fullExtent));u(e)||(e.id!==null&&this.layer.activeLayer.tileMatrixSetId!==e.id&&(this.layer.activeLayer.tileMatrixSetId=e.id),e.tileInfo&&(this.tileInfo=e.tileInfo),this.layer.fullExtent=e.fullExtent)});this.addResolvingPromise(t),this.when(()=>this._postInitialize())}refresh(){this.emit("data-changed")}canResume(){if(!super.canResume())return!1;const t=this.layer.activeLayer.tileMatrixSet;return s(t)&&!this._getTileInfoError(t.tileInfo,t.fullExtent)}async doRefresh(){this.suspended||this.emit("data-changed")}_postInitialize(){this.updatingHandles.add(()=>{var t,e;return(e=(t=this.layer)==null?void 0:t.activeLayer)==null?void 0:e.styleId},()=>this.refresh()),this.updatingHandles.add(()=>{var t;return(t=this.layer)==null?void 0:t.activeLayer},t=>{const e=this._getCompatibleTileInfoMatrixSet(i=>this._getTileInfoError(i.tileInfo,i.fullExtent),!0);s(e)&&e.id!==null&&t.tileMatrixSetId!==e.id&&(this.layer.activeLayer.tileMatrixSetId=e.id),this.notifyChange("suspended"),this.canResume()&&this.refresh()})}_getTileInfoError(t,e){return this._getTileInfoSupportError(t,e)||this._getTileInfoCompatibilityError(t,this.view.basemapTerrain.tilingScheme)}};o([n({readOnly:!0})],r.prototype,"hasMixedImageFormats",null),o([n()],r.prototype,"layer",void 0),o([n()],r.prototype,"suspended",void 0),r=o([p("esri.views.3d.layers.WMTSLayerView3d")],r);const b=r;export{b as default};
