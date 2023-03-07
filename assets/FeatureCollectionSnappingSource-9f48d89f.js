import{f as $,u as p,l as h,h as m,bq as E,n7 as F,d as V,a1 as y,e as r,y as a,b as C,eW as D}from"./index-74d49a87.js";import{y as A}from"./elevationInfoUtils-3c9457ff.js";import{f as I,b as q}from"./DimensionAnalysisView3D-2e404786.js";import{i as R,p as x}from"./queryEngineUtils-aca21275.js";import{r as d,a as G,n as v}from"./symbologySnappingCandidates-ea3ae5fa.js";import"./LineVisualElement-904de9f6.js";import"./LengthDimension-ab6848c2.js";import"./Segment-a1fa4b06.js";import"./analysisViewUtils-e5cbe5fd.js";import"./ImageMaterial-2cbfab0b.js";import"./Factory-8247a6e0.js";import"./RightAngleQuadVisualElement-ba7b8aa2.js";import"./VisualElementResources-12bd7834.js";import"./PointVisualElement-da80c55c.js";import"./colorUtils-c0f43caf.js";import"./EditGeometryOperations-023b3d76.js";import"./QueryEngineResult-10a77c28.js";import"./WhereClause-d3d68e94.js";import"./executionError-fb3f283a.js";import"./utils-2505602d.js";import"./generateRendererUtils-dce0e007.js";import"./projectionSupport-23b402d8.js";import"./json-48e3ea08.js";import"./utils-7cfc8659.js";import"./dehydratedFeatureComparison-4083c3a5.js";import"./RenderTexture-32de94fb.js";import"./VertexSnappingCandidate-3ec17136.js";let o=class extends ${get availability(){return 1}get updating(){return this.layerSource.updating}get _snappingElevationAligner(){const{view:e}=this,{layer:t}=this.layerSource,i=p(e)&&e.type==="3d";if(!i||t.type==="subtype-group")return d();const n=async(s,l)=>(await D(e.whenLayerView(t),l)).elevationAlignPointsInFeatures(s,l);return d(i,{elevationInfo:t.elevationInfo,alignPointsInFeatures:n,spatialReference:e.spatialReference})}get _snappingElevationFilter(){const{view:e}=this,t=p(e)&&e.type==="3d"&&this.layerSource.layer.type!=="subtype-group";return G(t)}get _symbologySnappingFetcher(){const{view:e}=this,{layer:t}=this.layerSource;return p(e)&&e.type==="3d"&&t.type!=="subtype-group"?v(this._symbologySnappingSupported,async(i,n)=>{const s=await e.whenLayerView(t);return y(n),s.queryForSymbologySnapping({candidates:i,spatialReference:e.spatialReference},n)}):v()}get _symbologySnappingSupported(){return p(this._layerView3D)&&this._layerView3D.symbologySnappingSupported}initialize(){const{view:e}=this,{layer:t}=this.layerSource;p(e)&&e.type==="3d"&&t.type!=="subtype-group"&&(e.whenLayerView(t).then(i=>this._layerView3D=i),this.addHandles([e.elevationProvider.on("elevation-change",({context:i})=>{const{elevationInfo:n}=t;A(i,n)&&this._snappingElevationAligner.notifyElevationSourceChange()}),h(()=>t.elevationInfo,()=>this._snappingElevationAligner.notifyElevationSourceChange(),m),h(()=>{var i;return p(this._layerView3D)?(i=this._layerView3D.processor)==null?void 0:i.renderer:null},()=>this._symbologySnappingFetcher.notifySymbologyChange(),m),E(()=>{var i;return(i=F(this._layerView3D))==null?void 0:i.layer},["edits","apply-edits","graphic-update"],()=>this._symbologySnappingFetcher.notifySymbologyChange())]))}constructor(e){super(e),this.view=null,this._layerView3D=null}refresh(){}async fetchCandidates(e,t){var c;const{layer:i}=this.layerSource,n=i.source;if(!(n!=null&&n.querySnapping))return[];const s=I(i),l=q(e,((c=V(this.view))==null?void 0:c.type)??"2d",s),S=await n.querySnapping(l,{signal:t});y(t);const g=await this._snappingElevationAligner.alignCandidates(S.candidates,t);y(t);const u=await this._symbologySnappingFetcher.fetch(g,t);y(t);const f=u.length===0?g:[...g,...u],w=this._snappingElevationFilter.filter(l,f),_=this._getGroundElevation;return w.map(b=>R(b,_))}get _getGroundElevation(){return x(this.view)}};r([a({constructOnly:!0})],o.prototype,"layerSource",void 0),r([a({constructOnly:!0})],o.prototype,"view",void 0),r([a()],o.prototype,"_snappingElevationAligner",null),r([a()],o.prototype,"_snappingElevationFilter",null),r([a()],o.prototype,"_symbologySnappingFetcher",null),r([a()],o.prototype,"_layerView3D",void 0),r([a()],o.prototype,"_symbologySnappingSupported",null),r([a()],o.prototype,"_getGroundElevation",null),o=r([C("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")],o);export{o as FeatureCollectionSnappingSource};
