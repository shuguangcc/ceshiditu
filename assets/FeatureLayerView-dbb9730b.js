import{e as l,y as u,n as N}from"./cast-7928d7aa.js";import{s as j,a as h}from"./Error-653283ae.js";import{r as d,t as y}from"./typedArrayUtil-a8b5b3e9.js";import{E as I}from"./promiseUtils-6684e352.js";import{l as C,w as Q,a as v}from"./reactiveUtils-f41a4e00.js";import"./ensureType-cf29afa9.js";import{g as S}from"./OperationalLayer-24e6fa34.js";import{w as B,y as D}from"./FeatureReductionLayer-4077b2ae.js";import{T as R,v as q,W as _,D as M,j as O,O as T,z as L,d as F,w as g,x as z}from"./fieldUtils-31bfecd2.js";import{o as P}from"./ExportImageParameters-f328a234.js";import{x as A}from"./Query-ff8c2cfb.js";import{i as U}from"./arcadeOnDemand-c6d1b9f2.js";import{s as w,d as k}from"./popupUtils-e8f3d062.js";const $="esri.views.layers.FeatureLayerView",E=j.getLogger($),se=G=>{let a=class extends G{constructor(...t){super(...t),this._updatingRequiredFieldsPromise=null,this.filter=null,this.timeExtent=null,this.layer=null,this.requiredFields=[],this.view=null}initialize(){this.handles.add([C(()=>{var e;const t=this.layer;return[(e=t==null?void 0:t.elevationInfo)==null?void 0:e.featureExpressionInfo,t&&"displayField"in t?t.displayField:null,t==null?void 0:t.timeInfo,t&&"renderer"in t&&t.renderer,t&&"labelingInfo"in t&&t.labelingInfo,t&&"floorInfo"in t&&t.floorInfo,this.filter,this.featureEffect,this.timeExtent]},()=>this._handleRequiredFieldsChange(),Q),v(()=>{var t;return(t=this.view)==null?void 0:t.floors},"change",()=>this._handleRequiredFieldsChange()),v(()=>{const t=this.layer;return t&&"sublayers"in t&&t.sublayers},"change",()=>this._handleRequiredFieldsChange())])}get availableFields(){const{layer:t,layer:{fieldsIndex:e},requiredFields:r}=this;return"outFields"in t&&t.outFields?R(e,[...q(e,t.outFields),...r]):R(e,r)}get featureEffect(){return this.layer&&"featureEffect"in this.layer?this.layer.featureEffect:null}set featureEffect(t){this._override("featureEffect",t)}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(t){E.error("#maximumNumberOfFeatures=","Setting maximum number of features is not supported")}get maximumNumberOfFeaturesExceeded(){return!1}highlight(t){throw new Error("missing implementation")}createQuery(){const t={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference},e=d(this.filter)?this.filter.createQuery(t):new A(t);if(this.layer.type==="feature"){const r=P(this);d(r)&&(e.where=e.where?`(${e.where}) AND (${r})`:r)}return d(this.timeExtent)&&(e.timeExtent=d(e.timeExtent)?e.timeExtent.intersection(this.timeExtent):this.timeExtent.clone()),e}createAggregateQuery(){const t={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference};return new A(t)}queryFeatures(t,e){throw new Error("missing implementation")}queryObjectIds(t,e){throw new Error("missing implementation")}queryFeatureCount(t,e){throw new Error("missing implementation")}queryExtent(t,e){throw new Error("missing implementation")}async fetchPopupFeatures(t,e){const r=this.validateFetchPopupFeatures(e);if(r)throw r;return this.fetchClientPopupFeatures(e)}_loadArcadeModules(t){if(t.get("expressionInfos.length")||Array.isArray(t.content)&&t.content.some(e=>e.type==="expression"))return U()}_handleRequiredFieldsChange(){const t=this._updateRequiredFields();this._set("_updatingRequiredFieldsPromise",t),t.then(()=>{this._updatingRequiredFieldsPromise===t&&this._set("_updatingRequiredFieldsPromise",null)})}async _updateRequiredFields(){if(!this.layer||!this.view)return;const t=this.view.type==="3d",{layer:e,layer:{fieldsIndex:r,objectIdField:o}}=this,f="renderer"in e&&e.renderer,n="orderBy"in e&&e.orderBy,s="featureReduction"in e?e.featureReduction:null,i=new Set,m=await I([f?f.collectRequiredFields(i,r):null,_(i,e),t?M(i,e):null,d(this.filter)?O(i,e,this.filter):null,d(this.featureEffect)?O(i,e,this.featureEffect.filter):null,s?T(i,e,s):null,n?L(i,e,n):null]);if(e.timeInfo&&this.timeExtent&&F(i,e.fieldsIndex,[e.timeInfo.startField,e.timeInfo.endField]),e.type==="feature"&&(e.floorInfo&&F(i,e.fieldsIndex,[e.floorInfo.floorField]),t&&d(e.infoFor3D)&&(e.globalIdField==null&&E.error("globalIdField missing on 3DObjectFeatureLayer"),F(i,e.fieldsIndex,[e.globalIdField]))),e.type==="subtype-group"){g(i,r,e.subtypeField);const p=e.sublayers.map(x=>{var b;return Promise.all([(b=x.renderer)==null?void 0:b.collectRequiredFields(i,r),_(i,x)])});await I(p)}for(const p of m)p.error&&E.error(p.error);g(i,r,o),t&&"displayField"in e&&e.displayField&&g(i,r,e.displayField);const c=Array.from(i).sort();this._set("requiredFields",c)}validateFetchPopupFeatures(t){if(y(t))return null;for(const e of t.clientGraphics){const r=e.layer;if("popupEnabled"in r&&!r.popupEnabled)return new h("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:r});if(e.isAggregate){const o="featureReduction"in r?r.featureReduction:null;if(!(o&&"popupTemplate"in o&&o.popupEnabled&&o.popupTemplate))return new h("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:r})}else if("popupTemplate"in r&&!w(r,t))return new h("featurelayerview:fetchPopupFeatures","Layer does not define a popup template",{layer:r})}}async fetchClientPopupFeatures(t){const e=d(t)?t.clientGraphics:null;if(!e||e.length===0)return[];const r=new Array(e.length),o=new Map,f=await this.createPopupQuery(t);for(let n=0;n<e.length;n++){const s=e[n];if(s.isAggregate){r[n]=s;continue}const{layer:i}=s;if(!("popupEnabled"in i))continue;const m=q(this.layer.fieldsIndex,f.outFields),c=w(i,t);if(y(c))continue;const p=await this._loadArcadeModules(c);p&&p.arcadeUtils.hasGeometryOperations(c)||!z(m,s)?o.set(s.getObjectId(),n):r[n]=s}if(this.layer.type==="stream"||o.size===0)return r.filter(Boolean);f.objectIds=Array.from(o.keys());try{const n=await this.layer.queryFeatures(f);for(const s of n.features)r[o.get(s.getObjectId())]=s}catch{}return r.filter(Boolean)}async createPopupQuery(t){const e=this.layer.createQuery(),r=new Set;let o=!1;const f=d(t)&&t.clientGraphics?t.clientGraphics.map(n=>n.layer):[this.layer];for(const n of f){if(!("popupEnabled"in n))continue;const s=w(n,t);if(y(s))continue;const i=await this._loadArcadeModules(s),m=i&&i.arcadeUtils.hasGeometryOperations(s);o=!(this.layer.geometryType!=="point"&&!m);const c=await k(this.layer,s);for(const p of c)r.add(p)}if(e.returnGeometry=o,e.returnZ=o,e.returnM=o,e.outFields=Array.from(r),e.outSpatialReference=this.view.spatialReference,this.layer.type==="feature"){const n=P(this);d(n)&&(e.where=e.where?`(${e.where}) AND (${n})`:n)}return e}canResume(){return!!super.canResume()&&(!d(this.timeExtent)||!this.timeExtent.isEmpty)}};return l([u()],a.prototype,"_updatingRequiredFieldsPromise",void 0),l([u({readOnly:!0})],a.prototype,"availableFields",null),l([u({type:B})],a.prototype,"featureEffect",null),l([u({type:D})],a.prototype,"filter",void 0),l([u(S)],a.prototype,"timeExtent",void 0),l([u()],a.prototype,"layer",void 0),l([u({type:Number})],a.prototype,"maximumNumberOfFeatures",null),l([u({readOnly:!0,type:Boolean})],a.prototype,"maximumNumberOfFeaturesExceeded",null),l([u({readOnly:!0})],a.prototype,"requiredFields",void 0),l([u()],a.prototype,"suspended",void 0),l([u()],a.prototype,"view",void 0),a=l([N($)],a),a};export{se as A};
