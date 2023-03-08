import{e as s,y as l,n as I,S as b,T}from"./cast-7928d7aa.js";import{a as S}from"./Error-653283ae.js";import{V as G}from"./request-d3e98716.js";import{r as m}from"./typedArrayUtil-a8b5b3e9.js";import"./ensureType-cf29afa9.js";import{a as f,k as A,r as c}from"./Extent-69509002.js";import{T as w,n as u}from"./TimeExtent-744afd75.js";import{f as h}from"./persistableUrlUtils-a16d0f55.js";import"./string-cdf077e6.js";import{x as O}from"./ElevationInfo-ce9cacc2.js";import{r as v}from"./opacityUtils-243aae26.js";function M(a){if(!a)return a;const{start:e,end:r}=a;return new w({start:m(e)?u(e,-e.getTimezoneOffset(),"minutes"):e,end:m(r)?u(r,-r.getTimezoneOffset(),"minutes"):r})}function j(a){if(!a)return a;const{start:e,end:r}=a;return new w({start:m(e)?u(e,e.getTimezoneOffset(),"minutes"):e,end:m(r)?u(r,r.getTimezoneOffset(),"minutes"):r})}const P={type:Boolean,value:!0,json:{origins:{service:{read:!1,write:!1},"web-map":{read:!1,write:!1}},name:"screenSizePerspective",write:!0}},J={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(a,e)=>!e.disablePopup},write:{enabled:!0,writer(a,e,r){e[r]=!a}}}},k={type:Boolean,value:!0,nonNullable:!0,json:{name:"showLabels",write:!0}},H={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:h}}},K={type:Boolean,value:!0,nonNullable:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:!0}},U={value:null,type:O,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:!0}};function _(a){return{type:a,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const d={type:Number,json:{origins:{"web-document":{write:!0,read:!0},"portal-item":{write:!0}}}},Q={...d,json:{...d.json,origins:{"web-document":{...d.json.origins["web-document"],write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(a,e,r)=>r&&r.origin!=="service"||!e.drawingInfo||e.drawingInfo.transparency===void 0?e.layerDefinition&&e.layerDefinition.drawingInfo&&e.layerDefinition.drawingInfo.transparency!==void 0?v(e.layerDefinition.drawingInfo.transparency):void 0:v(e.drawingInfo.transparency)}}},X={type:w,readOnly:!0,get(){var p,o;if(!((p=this.layer)!=null&&p.timeInfo))return null;const{datesInUnknownTimezone:a,timeOffset:e,useViewTime:r}=this.layer,i=(o=this.view)==null?void 0:o.timeExtent;let n=this.layer.timeExtent;a&&(n=j(n));let t=r?i&&n?i.intersection(n):i||n:n;if(!t||t.isEmpty||t.isAllTime)return t;e&&(t=t.offset(-e.value,e.unit)),a&&(t=M(t));const y=this._get("timeExtent");return t.equals(y)?y:t}},Y={type:f,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:(a,e)=>{const r=f.fromJSON(a);return e.spatialReference!=null&&typeof e.spatialReference=="object"&&(r.spatialReference=A.fromJSON(e.spatialReference)),r}}}},read:!1}},Z={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},ee={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.minScale"},write:{target:"layerDefinition.minScale"}}},re={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.maxScale"},write:{target:"layerDefinition.maxScale"}}},$={json:{write:{ignoreOrigin:!0},origins:{"web-map":{read:!1,write:!1}}}},D={"web-scene/operational-layers":{ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,GroupLayer:!0,IntegratedMeshLayer:!0,OGCFeatureLayer:!0,PointCloudLayer:!0,WebTiledLayer:!0,CSV:!0,GeoJSON:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,KML:!0,RasterDataLayer:!0,Voxel:!0,LineOfSightLayer:!0},"web-scene/basemap":{ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,WebTiledLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,ArcGISImageServiceLayer:!0,WMS:!0,ArcGISMapServiceLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-map/operational-layers":{ArcGISAnnotationLayer:!0,ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,CSV:!0,GeoRSS:!0,GeoJSON:!0,GroupLayer:!0,KML:!0,OGCFeatureLayer:!0,OrientedImageryLayer:!0,SubtypeGroupLayer:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},"web-map/basemap":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0},"web-map/tables":{ArcGISFeatureLayer:!0},"portal-item/operational-layers":{ArcGISFeatureLayer:!0,ArcGISSceneServiceLayer:!0,PointCloudLayer:!0,BuildingSceneLayer:!0,IntegratedMeshLayer:!0,OrientedImageryLayer:!0}},ie=a=>{let e=class extends a{constructor(){super(...arguments),this.title=null}writeListMode(r,i,n,t){(t&&t.layerContainerType==="ground"||r&&b(this,n,{},t))&&(i[n]=r)}writeOperationalLayerType(r,i,n,t){!r||t&&t.layerContainerType==="tables"||(i.layerType=r)}writeTitle(r,i){i.title=r??"Layer"}read(r,i){i&&(i.layer=this),T(this,r,n=>super.read(r,n),i)}write(r,i){var y,p;if(i!=null&&i.origin){const o=`${i.origin}/${i.layerContainerType||"operational-layers"}`,L=D[o];let g=L&&L[this.operationalLayerType];if(this.operationalLayerType==="ArcGISTiledElevationServiceLayer"&&o==="web-scene/operational-layers"&&(g=!1),this.operationalLayerType==="ArcGISDimensionLayer"&&o==="web-map/operational-layers"&&(g=!1),!g)return(y=i.messages)==null||y.push(new S("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${o}'`,{layer:this})),null}const n=super.write(r,{...i,layer:this}),t=!!i&&!!i.messages&&!!i.messages.filter(o=>o instanceof S&&o.name==="web-document-write:property-required").length;return G(n==null?void 0:n.url)?((p=i==null?void 0:i.messages)==null||p.push(new S("layer:invalid-url",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Blob URL cannot be written to web scenes and web maps`,{layer:this})),null):!this.url&&t?null:n}beforeSave(){}};return s([l({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],e.prototype,"id",void 0),s([l($)],e.prototype,"listMode",void 0),s([c("listMode")],e.prototype,"writeListMode",null),s([l({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1}}}})],e.prototype,"operationalLayerType",void 0),s([c("operationalLayerType")],e.prototype,"writeOperationalLayerType",null),s([l(d)],e.prototype,"opacity",void 0),s([l({type:String,json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],e.prototype,"title",void 0),s([c("title"),c(["web-scene"],"title")],e.prototype,"writeTitle",null),s([l({type:Boolean,json:{name:"visibility"}})],e.prototype,"visible",void 0),e=s([I("esri.layers.mixins.OperationalLayer")],e),e};export{$ as D,re as I,K as a,Y as b,ie as c,U as d,H as f,X as g,Z as j,P as l,k as m,J as p,Q as u,ee as v,d as w,_ as y};
