import{as as h,aG as m,e as d,b as c}from"./index-74d49a87.js";import{q as l}from"./DynamicLayerView3D-3a980df9.js";import{i as u}from"./WMSLayerView-cef0556a.js";import"./LayerView3D-3838457e.js";import"./projectExtentUtils-2ba254ff.js";import"./ImageMaterial-2cbfab0b.js";import"./LayerView-7b372130.js";import"./RefreshableLayerView-cb757f22.js";import"./ExportWMSImageParameters-b50dd82c.js";let r=class extends u(l){constructor(){super(...arguments),this.type="wms-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new h("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view"))),this.updatingHandles.add(()=>{var e;return(e=this.exportImageParameters)==null?void 0:e.version},()=>{this.updatingHandles.addPromise(this.refreshDebounced())})}createFetchPopupFeaturesQuery(e){const s=this.findExtentInfoAt(e),t=s.extent,i=new m(t[0],t[1],t[2],t[3],this._spatialReference),a=s.imageSize,n=a.width,p=a.height,o=i.width/n;return{extent:i,width:n,height:p,x:Math.round((e.x-i.xmin)/o),y:Math.round((i.ymax-e.y)/o)}}getFetchOptions(){return{timeExtent:this.timeExtent}}};r=d([c("esri.views.3d.layers.WMSLayerView3D")],r);const M=r;export{M as default};