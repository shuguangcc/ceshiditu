import{t as l,iZ as x,eZ as T,jX as h,N as s,O as i,ai as w,gS as O,a0 as f,aN as Z,i_ as C,r,ah as m,aK as H,G as L,aP as E,aM as S,b6 as v,q as F,jY as M,eU as G,jZ as K,j_ as U,fa as X,fc as Y,eA as k}from"./index-f01cff9b.js";import{c as B}from"./Analysis-1261b9c0.js";import{g as c}from"./persistable-64bce8e6.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./resourceExtension-00a7acad.js";function R(e,t){return I(e)===I(t)}function I(e){if(l(e))return null;const t=e.layer!=null?e.layer.id:"";let n=null;return n=e.objectId!=null?e.objectId:e.layer!=null&&"objectIdField"in e.layer&&e.layer.objectIdField!=null&&e.attributes!=null?e.attributes[e.layer.objectIdField]:e.uid,n==null?null:`o-${t}-${n}`}const _={json:{write:{writer:D,target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:J}}}};function D(e,t){var n;l(e)||((n=e.layer)==null?void 0:n.objectIdField)==null||e.attributes==null||(t.feature={layerId:e.layer.id,objectId:e.attributes[e.layer.objectIdField]})}function J(e){if(e.layerId!=null&&e.objectId!=null)return{uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}let u=class extends x(T(Z)){constructor(t){super(t),this.position=null,this.elevationInfo=null,this.feature=null}equals(t){return h(this.position,t.position)&&h(this.elevationInfo,t.elevationInfo)&&R(this.feature,t.feature)}};s([i({type:w}),c()],u.prototype,"position",void 0),s([i({type:O}),c()],u.prototype,"elevationInfo",void 0),s([i(_)],u.prototype,"feature",void 0),u=s([f("esri.analysis.LineOfSightAnalysisObserver")],u);const z=u;let p=class extends x(C){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return h(this.position,e.position)&&h(this.elevationInfo,e.elevationInfo)&&R(this.feature,e.feature)}};s([i({type:w}),c()],p.prototype,"position",void 0),s([i({type:O}),c()],p.prototype,"elevationInfo",void 0),s([i(_)],p.prototype,"feature",void 0),p=s([f("esri.analysis.LineOfSightAnalysisTarget")],p);const A=p;function Q(e){return e?ee:te}function V(e,t){return l(t)||!t.mode?Q(e).mode:t.mode}function W(e,t){return V(!!r(e)&&e.hasZ,t)}const ee={mode:"absolute-height",offset:0},te={mode:"on-the-ground",offset:null},b=m.ofType(A);let a=class extends B{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles(L(()=>this._computeExtent(),e=>{(l(e)||l(e.pending))&&this._set("extent",r(e)?e.extent:null)},E))}get targets(){return this._get("targets")||new b}set targets(e){this._set("targets",S(e,this.targets,b))}get spatialReference(){return r(this.observer)&&r(this.observer.position)?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){return[v(this.observer,e=>e.position)]}async waitComputeExtent(){const e=this._computeExtent();return r(e)?F(e.pending):Promise.resolve()}_computeExtent(){const e=this.spatialReference;if(l(this.observer)||l(this.observer.position)||l(e))return null;const t=y=>W(y.position,y.elevationInfo)==="absolute-height",n=this.observer.position,j=M(n.x,n.y,n.z,n.x,n.y,n.z);for(const y of this.targets)if(r(y.position)){const d=G(y.position,e);if(r(d.pending))return{pending:d.pending,extent:null};if(r(d.geometry)){const{x:N,y:q,z:P}=d.geometry;K(j,[N,q,P])}}const g=U(j,e);return t(this.observer)&&this.targets.every(t)||(g.zmin=void 0,g.zmax=void 0),{pending:null,extent:g}}clear(){this.observer=null,this.targets.removeAll()}};s([i({type:["line-of-sight"]})],a.prototype,"type",void 0),s([i({type:z,json:{read:!0,write:!0}})],a.prototype,"observer",void 0),s([i({cast:H,type:b,nonNullable:!0,json:{read:!0,write:!0}})],a.prototype,"targets",null),s([i({value:null,readOnly:!0})],a.prototype,"extent",void 0),s([i({readOnly:!0})],a.prototype,"spatialReference",null),s([i({readOnly:!0})],a.prototype,"requiredPropertiesForEditing",null),a=s([f("esri.analysis.LineOfSightAnalysis")],a);const $=a,se=m.ofType(A);let o=class extends X(Y(k)){constructor(e){super(e),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new $,this.opacity=1}initialize(){this.addHandles(L(()=>this.analysis,(e,t)=>{r(t)&&t.parent===this&&(t.parent=null),r(e)&&(e.parent=this)},E))}async load(){return r(this.analysis)&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){return v(this.analysis,e=>e.observer)}set observer(e){v(this.analysis,t=>t.observer=e)}get targets(){return r(this.analysis)?this.analysis.targets:new m}set targets(e){var t;S(e,(t=this.analysis)==null?void 0:t.targets)}get fullExtent(){return r(this.analysis)?this.analysis.extent:null}get spatialReference(){return r(this.analysis)?F(this.analysis.spatialReference):null}releaseAnalysis(e){this.analysis===e&&(this.analysis=new $)}};s([i({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),s([i({type:["LineOfSightLayer"]})],o.prototype,"operationalLayerType",void 0),s([i({type:z,json:{read:!0,write:{ignoreOrigin:!0}}})],o.prototype,"observer",null),s([i({type:se,json:{read:!0,write:{ignoreOrigin:!0}}})],o.prototype,"targets",null),s([i({nonNullable:!0,json:{read:!1,write:!1}})],o.prototype,"analysis",void 0),s([i({readOnly:!0})],o.prototype,"fullExtent",null),s([i({readOnly:!0})],o.prototype,"spatialReference",null),s([i({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],o.prototype,"opacity",void 0),s([i({type:["show","hide"]})],o.prototype,"listMode",void 0),o=s([f("esri.layers.LineOfSightLayer")],o);const ue=o;export{ue as default};