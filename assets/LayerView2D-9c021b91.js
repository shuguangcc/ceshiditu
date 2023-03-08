import{e,y as i,n as d,l as b}from"./cast-7928d7aa.js";import{j as q}from"./Collection-78126e82.js";import{n as P}from"./collectionUtils-3831b7c4.js";import{a as $}from"./Error-653283ae.js";import{l as c,w as h,a as A}from"./reactiveUtils-f41a4e00.js";import"./typedArrayUtil-a8b5b3e9.js";import"./ensureType-cf29afa9.js";import{i as j}from"./utils-26560131.js";import"./geometry-5a216427.js";import{p as V,a as x}from"./Extent-69509002.js";import{v as C}from"./jsonUtils-03c4af61.js";import{v as U}from"./Polyline-bf268e7b.js";let u=class extends b{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};e([i({readOnly:!0})],u.prototype,"version",null),u=e([d("esri.views.layers.support.ClipArea")],u);const w=u;var f;let p=f=class extends w{constructor(a){super(a),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new f({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};e([i({type:[Number,String],json:{write:!0}})],p.prototype,"left",void 0),e([i({type:[Number,String],json:{write:!0}})],p.prototype,"right",void 0),e([i({type:[Number,String],json:{write:!0}})],p.prototype,"top",void 0),e([i({type:[Number,String],json:{write:!0}})],p.prototype,"bottom",void 0),p=f=e([d("esri.views.layers.support.ClipRect")],p);const N=p;var g;const M={base:V,key:"type",typeMap:{extent:x,polygon:U}};let y=g=class extends w{constructor(a){super(a),this.type="geometry",this.geometry=null}clone(){var a;return new g({geometry:((a=this.geometry)==null?void 0:a.clone())??null})}commitVersionProperties(){this.commitProperty("geometry")}};e([i({types:M,json:{read:C,write:!0}})],y.prototype,"geometry",void 0),y=g=e([d("esri.views.layers.support.Geometry")],y);const T=y;let m=class extends w{constructor(a){super(a),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};e([i({type:[[[Number]]],json:{write:!0}})],m.prototype,"path",void 0),m=e([d("esri.views.layers.support.Path")],m);const _=m,v=q.ofType({key:"type",base:null,typeMap:{rect:N,path:_,geometry:T}}),K=a=>{let r=class extends a{constructor(){super(...arguments),this.attached=!1,this.clips=new v,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1}initialize(){var n,l,R;const t=((n=this.view)==null?void 0:n.spatialReferenceLocked)??!0;((l=this.view)==null?void 0:l.spatialReference)&&t&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new $("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new j),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.handles.add([c(()=>this.suspended,s=>{this.container&&(this.container.visible=!s),this.view&&!s&&this.updateRequested&&this.view.requestUpdate()},h),c(()=>{var s;return((s=this.layer)==null?void 0:s.opacity)??1},s=>{this.container&&(this.container.opacity=s)},h),c(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",s=>{this.container&&(this.container.blendMode=s)},h),c(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,s=>{this.container&&(this.container.effect=s)},h),A(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)},h),c(()=>{var s;return{scale:(s=this.view)==null?void 0:s.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}},({scale:s})=>{const S=s&&this.isVisibleAtScale(s);S!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",S)},h)]),(R=this.view)!=null&&R.whenLayerView?this.view.whenLayerView(this.layer).then(s=>{s===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var o;const t=(o=this.view)==null?void 0:o.spatialReference;return t==null||this.supportsSpatialReference(t)}get updating(){var t;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!((t=this.updatingHandles)!=null&&t.updating))}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.detach(),this.updateRequested=!1)}isVisibleAtScale(t){const o=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!o)return!0;const{minScale:n,maxScale:l}=o;return(n===0||t<=n)&&(l===0||t>=l)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(t){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",t),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(t))):this.updateRequested=!1}hitTest(t,o){return Promise.resolve(null)}supportsSpatialReference(t){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const t=super.getSuspendInfo(),o=!this.spatialReferenceSupported,n=this.visibleAtCurrentScale;return o&&(t.spatialReferenceNotSupported=o),n&&(t.outsideScaleRange=n),t}};return e([i()],r.prototype,"attached",void 0),e([i({type:v,set(t){const o=P(t,this._get("clips"),v);this._set("clips",o)}})],r.prototype,"clips",void 0),e([i()],r.prototype,"container",void 0),e([i()],r.prototype,"moving",void 0),e([i({readOnly:!0})],r.prototype,"spatialReferenceSupported",null),e([i({readOnly:!0})],r.prototype,"updateParameters",void 0),e([i()],r.prototype,"updateRequested",void 0),e([i()],r.prototype,"updating",null),e([i()],r.prototype,"view",void 0),e([i({readOnly:!0})],r.prototype,"visibleAtCurrentScale",void 0),r=e([d("esri.views.2d.layers.LayerView2D")],r),r};export{K as y};