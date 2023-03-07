import{e as t,y as i,b as d,iD as S,aM as q,oY as $,aG as P,v as A,bd as V,l4 as j,oZ as x,as as C,l,be as p,bq as O}from"./index-74d49a87.js";import{h as U}from"./Container-2d36bc3e.js";let u=class extends S{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};t([i({readOnly:!0})],u.prototype,"version",null),u=t([d("esri.views.layers.support.ClipArea")],u);const w=u;var g;let h=g=class extends w{constructor(o){super(o),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new g({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};t([i({type:[Number,String],json:{write:!0}})],h.prototype,"left",void 0),t([i({type:[Number,String],json:{write:!0}})],h.prototype,"right",void 0),t([i({type:[Number,String],json:{write:!0}})],h.prototype,"top",void 0),t([i({type:[Number,String],json:{write:!0}})],h.prototype,"bottom",void 0),h=g=t([d("esri.views.layers.support.ClipRect")],h);const M=h;var f;const N={base:$,key:"type",typeMap:{extent:P,polygon:A}};let y=f=class extends w{constructor(o){super(o),this.type="geometry",this.geometry=null}clone(){var o;return new f({geometry:((o=this.geometry)==null?void 0:o.clone())??null})}commitVersionProperties(){this.commitProperty("geometry")}};t([i({types:N,json:{read:q,write:!0}})],y.prototype,"geometry",void 0),y=f=t([d("esri.views.layers.support.Geometry")],y);const H=y;let m=class extends w{constructor(o){super(o),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};t([i({type:[[[Number]]],json:{write:!0}})],m.prototype,"path",void 0),m=t([d("esri.views.layers.support.Path")],m);const T=m,v=V.ofType({key:"type",base:null,typeMap:{rect:M,path:T,geometry:H}}),L=o=>{let r=class extends o{constructor(){super(...arguments),this.attached=!1,this.clips=new v,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){var n,c,R;const e=((n=this.view)==null?void 0:n.spatialReferenceLocked)??!0;((c=this.view)==null?void 0:c.spatialReference)&&e&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new C("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new U),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([l(()=>this.suspended,s=>{this.container&&(this.container.visible=!s),this.view&&!s&&this.updateRequested&&this.view.requestUpdate()},p),l(()=>{var s;return((s=this.layer)==null?void 0:s.opacity)??1},s=>{this.container&&(this.container.opacity=s)},p),l(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",s=>{this.container&&(this.container.blendMode=s)},p),l(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,s=>{this.container&&(this.container.effect=s)},p),l(()=>this.highlightOptions,s=>this.container.highlightOptions=s,p),O(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)},p),l(()=>{var s;return{scale:(s=this.view)==null?void 0:s.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}},({scale:s})=>{const b=s!=null&&this.isVisibleAtScale(s);b!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",b)},p)],"constructor"),(R=this.view)!=null&&R.whenLayerView?this.view.whenLayerView(this.layer).then(s=>{s===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var a;const e=(a=this.view)==null?void 0:a.spatialReference;return e==null||this.supportsSpatialReference(e)}get updating(){var e;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!((e=this.updatingHandles)!=null&&e.updating))}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const a=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!a)return!0;const{minScale:n,maxScale:c}=a;return(n===0||e<=n)&&(c===0||e>=c)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,a){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),a=!this.spatialReferenceSupported,n=this.visibleAtCurrentScale;return a&&(e.spatialReferenceNotSupported=a),n&&(e.outsideScaleRange=n),e}addAttachHandles(e){this.addHandles(e,"attach")}};return t([i()],r.prototype,"attached",void 0),t([i({type:v,set(e){const a=j(e,this._get("clips"),v);this._set("clips",a)}})],r.prototype,"clips",void 0),t([i()],r.prototype,"container",void 0),t([i()],r.prototype,"moving",void 0),t([i({readOnly:!0})],r.prototype,"spatialReferenceSupported",null),t([i({readOnly:!0})],r.prototype,"updateParameters",void 0),t([i()],r.prototype,"updateRequested",void 0),t([i()],r.prototype,"updating",null),t([i()],r.prototype,"view",void 0),t([i({readOnly:!0})],r.prototype,"visibleAtCurrentScale",void 0),t([i({type:x})],r.prototype,"highlightOptions",void 0),r=t([d("esri.views.2d.layers.LayerView2D")],r),r};export{L as f};
