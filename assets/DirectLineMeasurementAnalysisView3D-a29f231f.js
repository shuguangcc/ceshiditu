import{e as r,y as l,n as ue,m as pe,t as ge}from"./cast-7928d7aa.js";import{s as f,t as g,r as x,i as Me}from"./typedArrayUtil-a8b5b3e9.js";import"./ensureType-cf29afa9.js";import{t as De,e as $,i as R,u as Te,s as xe,a as Re,f as X,r as Ge}from"./analysisThemeUtils-eba5c5ba.js";import{n as je}from"./AnalysisView3D-70b48b15.js";import{s as Ne}from"./Error-653283ae.js";import{r as H,g as B,y as J,j as Ie,M as Y,w as Ue,v as Z}from"./quantityFormatUtils-ba1f6cd1.js";import{l as S,w as A}from"./reactiveUtils-f41a4e00.js";import{x as he,o as ee,z as te,e as Ee,_ as He,O as ie,g as Be,u as We}from"./vec3-a020a6f6.js";import{n as y}from"./vec3f64-2f9cef06.js";import{geodesicLength as Fe}from"./geometryEngine-62e3ccf4.js";import{m as ke}from"./Polyline-bf268e7b.js";import{A as ye,g as se,y as we}from"./projection-d7b57a6c.js";import{a as Qe,I as qe,p as Ke,K as Xe,E as Je}from"./unitUtils-47abac71.js";import{bJ as Ye,bK as Ze,aO as et,aN as tt,be as it,aU as ne}from"./index-455b69b8.js";import{b as st,a as nt,n as at,c as W}from"./LineVisualElement-69b2e868.js";import{l as V}from"./Color-a42a8267.js";import"./intl-f1e98361.js";import{_ as F,s as rt,m as ot}from"./mathUtils-2519596a.js";import{x as ze,s as me}from"./screenUtils-410d12c0.js";import{j as be}from"./vec2-2cef68de.js";import{g as ae,m as fe,l as D,I as Le}from"./Segment-97608ed7.js";import{e as lt}from"./mat4f64-1e28eae0.js";import{r as re,n as _e}from"./vec4f64-e407da96.js";import{c as k}from"./sphere-4f5e644f.js";import{E as dt,d as ct,j as ht,c as T}from"./VisualVariablePassParameters-5807c7dc.js";import{T as ut}from"./InterleavedLayout-5e9cf734.js";import{h as pt}from"./Matrix3PassUniform-da8eddae.js";import{g as gt,A as mt,E as _t,t as vt}from"./objectResourceUtils-ef6e3cdf.js";import{O as L}from"./VertexAttribute-9c5c630d.js";import{_ as yt}from"./preload-helper-41c905a7.js";import{t as wt,e as bt,o as ft,W as Lt,a as Pt,_ as Ot}from"./EvaluateSceneLighting.glsl-3bbc6edf.js";import{e as oe}from"./ShaderTechniqueConfiguration-9f5b4555.js";import{o as ve}from"./TransparencyPassType-cd195b0e.js";import{s as St}from"./DefaultTechniqueConfiguration-e8962072.js";import{v as At}from"./View.glsl-8b12b8c2.js";import{e as le}from"./Float4PassUniform-3a47b7b3.js";import{o as de}from"./FloatPassUniform-d2dfc562.js";import{o as Et,n as ce}from"./ShaderBuilder-93e8045e.js";import{I as zt,E as Ct}from"./enums-64ab819c.js";import{S as $t}from"./RightAngleQuadVisualElement-d5a5e64b.js";import{s as Vt}from"./locale-30120714.js";import{u as Mt}from"./messages-be07754e.js";const Ce="esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementController",Dt=Ne.getLogger(Ce),Tt=1e5;let E=class extends pe{constructor(e){super(e),this._unitNormalizer=new De,this._handles=new ge,this._tempStartPosition=y(),this._tempEndPosition=y(),this._tempCornerPosition=y()}initialize(){const e=this.view.spatialReference,t=Qe(e),s=t===qe?Ke:t;this._sphericalPCPF=s;const n=ye(e,s);this._unitNormalizer.spatialReference=n?s:e,this._handles.add([S(()=>({viewData:this.viewData,startPoint:this.analysis.startPoint}),({viewData:i,startPoint:a})=>{i.elevationAlignedStartPoint=this._applyProjectionAndElevationAlignment(a)},A),S(()=>({viewData:this.viewData,endPoint:this.analysis.endPoint}),({viewData:i,endPoint:a})=>{i.elevationAlignedEndPoint=this._applyProjectionAndElevationAlignment(a)},A),S(()=>({result:this._computedResult,viewData:this.viewData}),({result:i,viewData:a})=>{a.result=i},A)])}destroy(){this._handles=f(this._handles)}_applyProjectionAndElevationAlignment(e){if(g(e))return e;const t=st(e,this.view.spatialReference,this.view.elevationProvider);return g(t)?(nt(this.analysis,e.spatialReference,Dt),null):t}get _computedResult(){const{elevationAlignedStartPoint:e,elevationAlignedEndPoint:t,measurementMode:s}=this.viewData;if(g(e)||g(t))return null;const n=this._euclideanDistances(e,t),i=this._geodesicDistance(e,t,n.horizontal.value),a=s===$.Geodesic||s===$.Auto&&n.horizontal.value>Tt?"geodesic":"euclidean";return{mode:a,distance:a==="euclidean"?n.direct:i,directDistance:n.direct,horizontalDistance:n.horizontal,verticalDistance:n.vertical,geodesicDistance:i}}_euclideanDistances(e,t){const s=e.clone();s.z=t.z;const n=this._tempStartPosition,i=this._tempEndPosition,a=this._tempCornerPosition,d=this.view.spatialReference,c=this._sphericalPCPF,o=ye(d,c)?c:d;se(e,n,o),se(t,i,o),se(s,a,o);const h=he(n,i),u=he(a,i),m=Math.abs(t.z-e.z),b=j=>this._unitNormalizer.normalizeDistance(j),w=b(h),z=b(u),G=b(m);return{direct:H(w,"meters"),horizontal:H(z,"meters"),vertical:H(G,"meters")}}_geodesicDistance(e,t,s){const n=e.spatialReference,i=new ke({spatialReference:n});i.addPath([e,t]);const a=n.isGeographic&&Ye(n)?Ze([i],"meters")[0]:n.isWebMercator?Fe(i,"meters"):null,d=x(a)?a:this._fallbackGeodesicDistance(e,t,s);return H(d,"meters")}_fallbackGeodesicDistance(e,t,s){if(we(e,Pe)&&we(t,Oe)){const n=new tt;return et(n,Pe,Oe),n.distance}return s}};r([l()],E.prototype,"view",void 0),r([l()],E.prototype,"analysis",void 0),r([l()],E.prototype,"viewData",void 0),r([l()],E.prototype,"_computedResult",null),E=r([ue(Ce)],E);const Pe=y(),Oe=y();var v,O;(function(e){e[e.None=0]="None",e[e.Direct=1]="Direct",e[e.Triangle=2]="Triangle",e[e.ProjectedGeodesic=3]="ProjectedGeodesic"})(v||(v={})),function(e){e[e.Auto=0]="Auto",e[e.AboveSegment=1]="AboveSegment",e[e.BelowSegment=2]="BelowSegment"}(O||(O={}));function xt(e){const t=new Et,{vertex:s,fragment:n}=t;At(s,e),s.uniforms.add(new de("width",a=>a.width)),t.attributes.add(L.POSITION,"vec3"),t.attributes.add(L.NORMAL,"vec3"),t.attributes.add(L.UV0,"vec2"),t.attributes.add(L.AUXPOS1,"float"),t.varyings.add("vtc","vec2"),t.varyings.add("vlength","float"),t.varyings.add("vradius","float"),s.code.add(ce`void main(void) {
vec3 bitangent = normal;
vtc = uv0;
vlength = auxpos1;
vradius = 0.5 * width;
vec4 pos = view * vec4(position + vradius * bitangent * uv0.y, 1.0);
gl_Position = proj * pos;
}`),n.uniforms.add([new de("outlineSize",a=>a.outlineSize),new le("outlineColor",a=>a.outlineColor),new de("stripeLength",a=>a.stripeLength),new le("stripeEvenColor",a=>a.stripeEvenColor),new le("stripeOddColor",a=>a.stripeOddColor)]);const i=1/Math.sqrt(2);return n.code.add(ce`
    const float INV_SQRT2 = ${ce.float(i)};

    vec4 arrowColor(vec2 tc, float len) {
      float d = INV_SQRT2 * (tc.x - abs(tc.y));
      d = min(d, INV_SQRT2 * (len - tc.x - abs(tc.y)));
      d = min(d, 1.0 - abs(tc.y));

      if (d < 0.0) {
        return vec4(0.0);
      } else if (d < outlineSize) {
        return outlineColor;
      } else {
        return fract(0.5 / stripeLength * tc.x * vradius) >= 0.5 ? stripeOddColor : stripeEvenColor;
      }
    }

    void main(void) {
      vec2 ntc = vec2(vtc.x / vradius, vtc.y);
      vec4 color = arrowColor(ntc, vlength / vradius);
      if (color.a == 0.0) {
        discard;
      }
      gl_FragColor = color;
    }
  `),t}const Rt=Object.freeze(Object.defineProperty({__proto__:null,build:xt},Symbol.toStringTag,{value:"Module"}));class q extends bt{constructor(t,s,n){super(t,s,n)}initializeProgram(t){return new ft(t.rctx,q.shader.get().build(this.configuration),dt)}_setPipelineState(t){const s=t===ve.NONE,n=this.configuration;return Lt({blending:n.transparent?s?gt:mt(t):null,polygonOffset:this.configuration.polygonOffsetEnabled&&{factor:0,units:-4},depthTest:{func:zt.LESS},depthWrite:Pt,colorWrite:Ot})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}get primitiveType(){return Ct.TRIANGLE_STRIP}}q.shader=new wt(Rt,()=>yt(()=>import("./MeasurementArrow.glsl-87cb84eb.js"),["./MeasurementArrow.glsl-87cb84eb.js","./View.glsl-8b12b8c2.js","./mat4-44a0988f.js","./vec3f64-2f9cef06.js","./common-c186b691.js","./mat4f32-77b3d8ac.js","./vec3-a020a6f6.js","./ShaderBuilder-93e8045e.js","./typedArrayUtil-a8b5b3e9.js","./Error-653283ae.js","./string-cdf077e6.js","./VertexAttribute-9c5c630d.js","./cast-7928d7aa.js","./ensureType-cf29afa9.js","./nextTick-3ee5a785.js","./promiseUtils-6684e352.js","./analysisThemeUtils-eba5c5ba.js","./unitUtils-47abac71.js","./jsonMap-c1f958cf.js","./Extent-69509002.js","./Ellipsoid-89682c5e.js","./screenUtils-410d12c0.js","./vec2-2cef68de.js","./Color-a42a8267.js","./colorUtils-639f4d25.js","./mathUtils-2519596a.js","./vec4-790471c0.js","./colorUtils-4aa5b1d6.js","./AnalysisView3D-70b48b15.js","./Promise-dfdee8ba.js","./quantityFormatUtils-ba1f6cd1.js","./index-455b69b8.js","./Basemap-a8f7f439.js","./preload-helper-41c905a7.js","./Collection-78126e82.js","./Evented-515b9d9c.js","./SimpleObservable-7dcdef1d.js","./collectionUtils-3831b7c4.js","./deprecate-b9088bd3.js","./Loadable-48bc1293.js","./loadAll-7fd968fe.js","./asyncUtils-62e8a185.js","./request-d3e98716.js","./Portal-8b65c9c4.js","./locale-30120714.js","./PortalGroup-bfe93c76.js","./PortalUser-4c8e1adc.js","./PortalItem-aa42c739.js","./assets-0b172f07.js","./messages-be07754e.js","./writeUtils-067c4f82.js","./layerUtils-034678f6.js","./compilerUtils-034cacb8.js","./enumeration-3c281341.js","./opacityUtils-243aae26.js","./CollectionFlattener-3dd1f479.js","./TablesMixin-e7a6aab1.js","./Layer-f0696768.js","./geometry-5a216427.js","./Polyline-bf268e7b.js","./typeUtils-eb9416d0.js","./Identifiable-aa6d459d.js","./Graphic-b46e2684.js","./PopupTemplate-6eb885db.js","./Clonable-ba795b08.js","./fieldUtils-31bfecd2.js","./arcadeOnDemand-c6d1b9f2.js","./number-347a3a44.js","./symbols-fa594797.js","./CIMSymbol-1379245a.js","./Symbol-fc4312a4.js","./symbolLayerUtils3D-1f8d4478.js","./aaBoundingBox-fc742a4e.js","./aaBoundingRect-4a760199.js","./persistableUrlUtils-a16d0f55.js","./Symbol3DAnchorPosition2D-c0f4a14d.js","./jsonUtils-03c4af61.js","./Cyclical-b66238c6.js","./reactiveUtils-f41a4e00.js","./workers-898a7c4c.js","./Connection-a681777e.js","./Queue-3a0c055d.js","./intl-f1e98361.js","./projection-d7b57a6c.js","./zscale-1e1fc911.js","./TileInfo-34f80a8e.js","./widget-f7489a3f.js","./uuid-73213768.js","./dom-5b7af1bf.js","./HandleOwner-e1406413.js","./byteSizeEstimations-f0cab514.js","./executeQueryJSON-bcd96e1a.js","./normalizeUtils-ee4bf39f.js","./query-922e6fbf.js","./pbfQueryUtils-72f9b45b.js","./pbf-e1a6c35b.js","./OptimizedFeature-3de538c1.js","./OptimizedFeatureSet-1d1ac4b9.js","./queryZScale-d9d8ef40.js","./FeatureSet-0573546e.js","./Field-f5fc9f6b.js","./fieldType-b1002185.js","./Query-ff8c2cfb.js","./TimeExtent-744afd75.js","./RelationshipQuery-db5fcd0c.js","./LegendOptions-e65e7a9c.js","./utils-725f8b4e.js","./BlendLayer-d8293c8d.js","./parser-2b40deea.js","./ItemCache-ee28c7ba.js","./MemCache-4b976a8b.js","./cimSymbolUtils-2e4dde89.js","./utils-c81a5c52.js","./jsonUtils-c56f8821.js","./UniqueValueRenderer-103ec66d.js","./diffUtils-1ac65748.js","./colorRamps-3a8ac20b.js","./sizeVariableUtils-d4870b0d.js","./visualVariableUtils-c59ab38d.js","./lengthUtils-d2d33f94.js","./jsonUtils-d7db3dc7.js","./styleUtils-4adfed9e.js","./DictionaryLoader-2cf5144e.js","./LRUCache-14115d91.js","./heatmapUtils-84e8c43b.js","./vec4f64-e407da96.js","./featureConversionUtils-01cdde8a.js","./TopFeaturesQuery-785f5453.js","./FeatureLayer-a9f3e6ec.js","./MultiOriginJSONSupport-27362d57.js","./LayerFloorInfo-2cd5e8ae.js","./FeatureLayerBase-aebdf2da.js","./HeightModelInfo-22ad72d7.js","./arcgisLayerUrl-0b2b7691.js","./OperationalLayer-24e6fa34.js","./ElevationInfo-ce9cacc2.js","./editsZScale-2015e7db.js","./APIKeyMixin-34d76a46.js","./ArcGISService-ea748edf.js","./CustomParametersMixin-807d2055.js","./EditBusLayer-40671d1a.js","./FeatureReductionLayer-4077b2ae.js","./labelingInfo-5c3a46f6.js","./labelUtils-a194a22a.js","./defaultsJSON-59981e75.js","./OrderedLayer-e7edf19c.js","./PortalLayer-f1a64f99.js","./RefreshableLayer-1c078c47.js","./ScaleRangeLayer-271178b7.js","./TemporalLayer-39c07299.js","./TimeInfo-c89d0ef4.js","./FeatureTemplate-746d033e.js","./FeatureType-c83c5f49.js","./fieldProperties-7547b373.js","./FieldsIndex-aa6dd3fa.js","./versionUtils-92993d41.js","./styleUtils-da81b13f.js","./popupUtils-07fe66a7.js","./colorUtils-82440b70.js","./mat2d-d0b91e3e.js","./Scheduler-8433672d.js","./GraphicsLayer-10573c27.js","./ViewingMode-5d7d590b.js","./enums-0fc02184.js","./vec2f64-30dc1443.js","./mat3-3fc68e72.js","./mat3f32-d3d088e8.js","./vec2f32-461e65a9.js","./TileStrategy-4189758f.js","./TileStore-787dbea4.js","./TileKey-0750ad58.js","./rbush-8e36784a.js","./quickselect-322ec8e1.js","./capabilities-3636c6a4.js","./context-util-1e3c8cfc.js","./sphere-4f5e644f.js","./mat3f64-c6305894.js","./mat4f64-1e28eae0.js","./quatf64-7fd38d64.js","./lineSegment-e6f72ff2.js","./plane-45609588.js","./scaleUtils-b32a50d8.js","./ElevationSamplerData-7decf898.js","./PhysicallyBasedRendering.glsl-a986c926.js","./FloatPassUniform-d2dfc562.js","./Float4PassUniform-3a47b7b3.js","./RgbaFloatEncoding.glsl-6036ca34.js","./Texture2DPassUniform-6e8ae673.js","./vec3f32-c9aa289f.js","./Texture2DDrawUniform-22924c6f.js","./basicInterfaces-19ed850e.js","./PiUtils.glsl-0c0898f0.js","./ReadLinearDepth.glsl-7ff30f7d.js","./WaterSurface.glsl-fc8a5726.js","./ForwardLinearDepth.glsl-36f9eb3b.js","./Matrix3PassUniform-da8eddae.js","./Slice.glsl-a612de15.js","./Transform.glsl-f15542a7.js","./OutputHighlight.glsl-7364b03b.js","./MultipassTerrainTest.glsl-e79d40de.js","./NormalUtils.glsl-a59958d7.js","./AlphaCutoff-96178e0d.js","./TransparencyPassType-cd195b0e.js","./EvaluateSceneLighting.glsl-3bbc6edf.js","./VisualVariablePassParameters-5807c7dc.js","./enums-64ab819c.js","./VertexElementDescriptor-2925c6af.js","./FramebufferObject-50e1b68f.js","./Texture-e79b14e7.js","./Util-a48361c6.js","./SSAOBlur.glsl-c6f142fc.js","./ScreenSpacePass-00f8c8a4.js","./SSAO.glsl-6f3b4065.js","./ShaderTechniqueConfiguration-9f5b4555.js","./HUD.glsl-80cf9a21.js","./VerticalOffset.glsl-86460edb.js","./objectResourceUtils-ef6e3cdf.js","./devEnvironmentUtils-5002a058.js","./BufferView-646ba1de.js","./vec33-ce3aa99b.js","./DefaultMaterial_COLOR_GAMMA-9831d979.js","./types-e1c0a5bf.js","./Version-9baeb7ac.js","./quat-5b263584.js","./Texture-bbae5d9d.js","./TextureOnly.glsl-18701a3b.js","./InterleavedLayout-5e9cf734.js","./MixExternalColor.glsl-25f0049c.js","./symbolColorUtils-604c5345.js","./ObjectAndLayerIdColor.glsl-73c19386.js","./OutputDepth.glsl-179f1d8f.js","./VisualVariables.glsl-b8290512.js","./DiscardOrAdjustAlphaBlend.glsl-5f837994.js","./Normals.glsl-90e28525.js","./DefaultMaterial.glsl-b4f4cbc5.js","./VertexColor.glsl-db21b96c.js","./DefaultTechniqueConfiguration-e8962072.js","./RealisticTree.glsl-2b30ed32.js","./edgeProcessing-3ca548e1.js","./deduplicate-b0bc48cc.js","./projection-aa2a8986.js","./Octree-1a841545.js","./HUDMaterial.glsl-4bf3c7df.js","./sdfPrimitives-a24e9cb2.js","./floatRGBA-fa8308d2.js","./dehydratedFeatures-4eeb381a.js","./quantizationUtils-33aba427.js","./labelFormatUtils-4d730eaa.js","./I3SUtil-3ffd3baa.js","./I3SBinaryReader-3d2c2faa.js","./LineCallout.glsl-a0056465.js","./earcut-58237617.js","./QueryEngineResult-665bf7fb.js","./WhereClause-2b5b05b2.js","./utils-30a9a7e0.js","./generateRendererUtils-a996108f.js","./utils-1f4fcfec.js","./json-48e3ea08.js","./MeshComponent-f50df6af.js","./MarkerSizing.glsl-c6fa192a.js","./RibbonLine.glsl-2a3b4d4e.js","./LineStipple.glsl-de782d6a.js","./callExpressionWithFeature-a7532499.js","./LineMarker.glsl-8f444621.js","./NativeLine.glsl-cdbbf172.js","./Path.glsl-60b36878.js","./ColorMaterial.glsl-8310ffb3.js","./Pattern.glsl-d3388745.js","./EffectView-d3bf37ed.js","./LercDecoder-73115fd2.js","./config-1337d16e.js","./workerHelper-c6d4a8cb.js","./Subtype-5b01b21f.js","./datetime-4f774298.js","./elevationInfoUtils-427916a5.js","./ExportImageParameters-f328a234.js","./sublayerUtils-ba7f61bc.js","./webStyleSymbolUtils-55ed91cd.js","./enums-4b2a86a0.js","./index-8e3f441a.css","./geometryEngine-62e3ccf4.js","./geometryEngineBase-3dd302e0.js","./hydrated-be86c8b3.js","./LineVisualElement-69b2e868.js","./Segment-97608ed7.js","./TextOverlayItem-a6091360.js","./RightAngleQuadVisualElement-d5a5e64b.js"],import.meta.url));let Q=class extends St{constructor(){super(...arguments),this.polygonOffsetEnabled=!1,this.transparent=!1,this.transparencyPassType=ve.NONE}};r([oe()],Q.prototype,"polygonOffsetEnabled",void 0),r([oe()],Q.prototype,"transparent",void 0),r([oe({count:ve.COUNT})],Q.prototype,"transparencyPassType",void 0);class Gt extends ct{constructor(t){super(t,new Nt),this._configuration=new Q}getConfiguration(t,s){return this._configuration.polygonOffsetEnabled=this.parameters.polygonOffset,this._configuration.transparent=this.parameters.stripeEvenColor[3]<1||this.parameters.stripeOddColor[3]<1||this.parameters.outlineColor[3]<1,this._configuration.transparencyPassType=s.transparencyPassType,this._configuration}dispose(){}intersect(){}requiresSlot(t,s){return s===pt.Color&&t===_t.OPAQUE_MATERIAL}createGLMaterial(t){return new jt(t)}createBufferWriter(){return new kt}}class jt extends vt{beginSlot(t){return this.ensureTechnique(q,t)}}class Nt extends ht{constructor(){super(...arguments),this.width=32,this.outlineSize=.2,this.outlineColor=re(1,.5,0,1),this.stripeEvenColor=re(1,1,1,1),this.stripeOddColor=re(1,.5,0,1),this.stripeLength=1,this.polygonOffset=!1}}const It=ut().vec3f(L.POSITION).vec3f(L.NORMAL).vec2f(L.UV0).f32(L.AUXPOS1),Ut=y(),Ht=y(),Bt=y(),Wt=y(),Ft=y();class kt{constructor(){this.vertexBufferLayout=It}allocate(t){return this.vertexBufferLayout.createBuffer(t)}elementCount(t){return 2*(t.indices.get(L.POSITION).length/2+1)}write(t,s,n,i,a){const d=n.vertexAttributes.get(L.POSITION).data,c=n.vertexAttributes.get(L.NORMAL).data,o=d.length/3,h=n&&n.indices&&n.indices.get(L.POSITION);h&&h.length!==2*(o-1)&&console.warn("MeasurementArrowMaterial does not support indices");const u=Ut,m=Ht,b=Bt,w=Wt,z=Ft,G=i.position,j=i.normal,N=i.uv0;let I=0;for(let P=0;P<o;++P){const K=3*P;if(ee(u,d[K],d[K+1],d[K+2]),P<o-1){const C=3*(P+1);ee(m,d[C],d[C+1],d[C+2]),ee(z,c[C],c[C+1],c[C+2]),te(z,z),Ee(b,m,u),te(b,b),He(w,z,b),te(w,w)}const Ve=he(u,m);t&&s&&(ie(u,u,t),ie(m,m,t),ie(w,w,s));const M=a+2*P,U=M+1;G.setVec(M,u),G.setVec(U,u),j.setVec(M,w),j.setVec(U,w),N.set(M,0,I),N.set(M,1,-1),N.set(U,0,I),N.set(U,1,1),P<o-1&&(I+=Ve)}const $e=i.auxpos1;for(let P=0;P<2*o;++P)$e.set(a+P,I)}}class Qt extends at{constructor(t){super(t),this._parameters={arrowWidth:16,arrowOutlineColor:V.toUnitRGBA(R()),arrowStripeEvenColor:V.toUnitRGBA(Te()),arrowStripeOddColor:V.toUnitRGBA(R()),arrowSubdivisions:128},this._handles=null,this._origin=y(),this._originTransform=lt(),this._arrowCenter=y(),this._renderOccluded=T.OccludeAndTransparent,this._geometry=null,this._stripeLength=1,this._stripesEnabled=!0,this._opacity=1,this.applyProps(t)}get renderOccluded(){return this._renderOccluded}set renderOccluded(t){t!==this._renderOccluded&&(this._renderOccluded=t,this._arrowMaterial&&this._arrowMaterial.setParameters({renderOccluded:t}))}get geometry(){return this._geometry}set geometry(t){this._geometry=t,this._geometryChanged()}get stripeLength(){return this._stripeLength}set stripeLength(t){this._stripeLength=t,this.attached&&this._arrowMaterial.setParameters({stripeLength:this._stripeLength})}get stripesEnabled(){return this._stripesEnabled}set stripesEnabled(t){if(this._stripesEnabled=t,this.attached){const s=this.opacity,{arrowStripeEvenColor:n,arrowStripeOddColor:i}=this._parameters,a=F(Se,this._stripesEnabled?n:i,s);this._arrowMaterial.setParameters({stripeEvenColor:a})}}get opacity(){return this._opacity}set opacity(t){t!==this._opacity&&(this._opacity=t,this._updateArrowOpacity())}createExternalResources(){const{arrowStripeEvenColor:t,arrowStripeOddColor:s,arrowOutlineColor:n}=this._parameters,i=this._stripesEnabled?t:s;this._arrowMaterial=new Gt({outlineColor:n,stripeEvenColor:i,stripeOddColor:s,renderOccluded:this.renderOccluded,polygonOffset:!0}),this._handles=new ge,this._handles.add(S(()=>this.view.state.camera,()=>{this._viewChanged()}))}destroyExternalResources(){this._arrowMaterial=null,this._handles.destroy(),this._handles=null}forEachExternalMaterial(t){t(this._arrowMaterial)}createGeometries(t){if(g(this._geometry)||g(this._geometry.startRenderSpace)||g(this._geometry.endRenderSpace))return;const s=this._createArrowGeometry(this._geometry.startRenderSpace,this._geometry.endRenderSpace,this._origin,this._geometry);t.addGeometry(s,this._arrowMaterial,this._originTransform),this._viewChanged()}_createArrowGeometry(t,s,n,i){const a=this.view.renderCoordsHelper,d=[],c=[],o=(h,u)=>{const m=k.get();Ee(m,h,n),d.push(m),c.push(u)};if(i.type==="euclidean"){i.eval(.5,this._arrowCenter);const h=k.get();a.worldUpAtPosition(this._arrowCenter,h),o(t,h),o(s,h)}else{i.eval(.5,this._arrowCenter);const h=this._parameters.arrowSubdivisions+1&-2;for(let u=0;u<h;++u){const m=u/(h-1),b=k.get(),w=k.get();i.eval(m,b),a.worldUpAtPosition(b,w),o(b,w)}}return it(d,c)}_geometryChanged(){this.recreateGeometry()}_viewChanged(){if(this.view.ready&&this.attached&&x(this._geometry)){const t=this.view.state.camera.computeScreenPixelSizeAt(this._arrowCenter);this._arrowMaterial.setParameters({width:this._parameters.arrowWidth*t})}}_updateArrowOpacity(){const t=this.opacity,{arrowStripeEvenColor:s,arrowStripeOddColor:n,arrowOutlineColor:i}=this._parameters,a=F(Se,this._stripesEnabled?s:n,t),d=F(qt,i,t),c=F(Kt,n,t);this._arrowMaterial.setParameters({stripeEvenColor:a,outlineColor:d,stripeOddColor:c})}}const Se=_e(),qt=_e(),Kt=_e();let _=class extends pe{constructor(e){super(e),this._params={triangleColor:new Float32Array(V.toUnitRGBA(R(.75))),triangleLineWidth:3,geodesicProjectionLineWidth:2,geodesicProjectionLineColor:new Float32Array(V.toUnitRGBA(R(.75))),guideLineWidth:2,guideStippleLengthPixels:6,direcLabelFontSize:16,horizontalLabelFontSize:12,verticalLabelFontSize:12},this._handles=new ge,this._segmentVisualElement=null,this._triangleVisualElement=null,this._rightAngleQuad=null,this._projectedGeodesicLine=null,this._geodesicStartHint=null,this._geodesicEndHint=null,this._segmentLabel=null,this._verticalLabel=null,this._horizontalLabel=null,this._startPosition=y(),this._endPosition=y(),this._cornerPosition=y(),this._startPositionAtSeaLevel=y(),this._endPositionAtSeaLevel=y(),this._triangleOrientationOverride=null,this.messages=null,this.loadingMessages=!0,this.visualElementOrientation=O.Auto,this.triangleCollapseRatioThreshold=.03}get visible(){return this.analysisView.visible}get viewMode(){const{elevationAlignedStartPoint:e,elevationAlignedEndPoint:t}=this.analysisView;if(g(e)||g(t)||e.equals(t))return v.None;const s=this.analysisView.result;if(g(s))return v.Direct;if(s.mode==="geodesic")return this._requiresGeodesicGuideAt(this._startPosition)||this._requiresGeodesicGuideAt(this._endPosition)?v.ProjectedGeodesic:v.Direct;const{verticalDistance:n,horizontalDistance:i}=s,a=n.value,d=i.value;return Math.min(a/d,d/a)<this.triangleCollapseRatioThreshold?v.Direct:v.Triangle}get actualVisualizedMeasurement(){if(g(this.analysisView.result))switch(this.analysisView.measurementMode){case $.Auto:case $.Euclidean:default:return"euclidean";case $.Geodesic:return"geodesic"}return this.analysisView.result.mode}get allowVisualElementsOrientationChange(){return g(this._triangleOrientationOverride)}set allowVisualElementsOrientationChange(e){g(this._triangleOrientationOverride)!==e&&(g(this._triangleOrientationOverride)?this._triangleOrientationOverride=this._actualVisualElementsOrientation:this._triangleOrientationOverride=null)}get labels(){const e=this.actualVisualizedMeasurement==="geodesic";return{direct:this._segmentLabel,horizontal:e?this._segmentLabel:this._horizontalLabel,vertical:this._verticalLabel}}initialize(){const e=this._params,t={attached:!0,view:this.view};this._segmentVisualElement=new Qt({...t,geometry:null,renderOccluded:T.OccludeAndTransparent}),this._triangleVisualElement=new W({...t,width:e.triangleLineWidth,color:e.triangleColor,renderOccluded:T.OccludeAndTransparent}),this._rightAngleQuad=new $t({...t,color:new Float32Array(V.toUnitRGBA(R(.75))),renderOccluded:T.OccludeAndTransparent});const s={...t,polygonOffset:!0,renderOccluded:T.OccludeAndTransparent};this._projectedGeodesicLine=new W({...s,width:e.geodesicProjectionLineWidth,color:e.geodesicProjectionLineColor,stipplePattern:ne(e.guideStippleLengthPixels)}),this._geodesicStartHint=new W({...s,width:e.guideLineWidth,color:e.geodesicProjectionLineColor,stipplePattern:ne(e.guideStippleLengthPixels)}),this._geodesicEndHint=new W({...s,width:e.guideLineWidth,color:e.geodesicProjectionLineColor,stipplePattern:ne(e.guideStippleLengthPixels)});const n={...t,backgroundColor:xe(.6),textColor:Re()};this._segmentLabel=new ae({...n,fontSize:e.direcLabelFontSize}),this._verticalLabel=new ae({...n,fontSize:e.verticalLabelFontSize}),this._horizontalLabel=new ae({...n,fontSize:e.horizontalLabelFontSize}),this._handles.add([S(()=>{const{elevationAlignedStartPoint:i,elevationAlignedEndPoint:a}=this.analysisView,d=this.view;return{view:d,camera:d.state.camera,viewMode:this.viewMode,elevationAlignedStartPoint:i,elevationAlignedEndPoint:a,orientation:this._actualVisualElementsOrientation,visualizedMeasurement:this.actualVisualizedMeasurement,stripeLength:this._measurementArrowStripeLength}},i=>this._updateGeometryAndViewMode(i),A),S(()=>({visible:this.visible,viewMode:this.viewMode}),i=>this._updateVisualElementVisibility(i),A),S(()=>({text:this._labelsText,visualizedMeasurement:this.actualVisualizedMeasurement}),i=>this._updateLabelText(i),A),S(()=>({visible:this.visible,viewMode:this.viewMode}),i=>this._updateLabelVisibility(i),A),S(()=>this._measurementArrowStripeLength,i=>this._updateSegmentStripeLength(i),A),Vt(async()=>this._updateMessageBundle())]),this._updateMessageBundle()}destroy(){this._handles=f(this._handles),this._segmentVisualElement=f(this._segmentVisualElement),this._triangleVisualElement=f(this._triangleVisualElement),this._rightAngleQuad=f(this._rightAngleQuad),this._projectedGeodesicLine=f(this._projectedGeodesicLine),this._geodesicStartHint=f(this._geodesicStartHint),this._geodesicEndHint=f(this._geodesicEndHint),this._segmentLabel=f(this._segmentLabel),this._verticalLabel=f(this._verticalLabel),this._horizontalLabel=f(this._horizontalLabel),this.set("view",null)}_updateVisualElementVisibility({visible:e,viewMode:t}){if(this._segmentVisualElement.visible=!1,this._triangleVisualElement.visible=!1,this._rightAngleQuad.visible=!1,this._projectedGeodesicLine.visible=!1,this._geodesicStartHint.visible=!1,this._geodesicEndHint.visible=!1,e)switch(t){case v.None:break;case v.Direct:this._segmentVisualElement.visible=!0;break;case v.Triangle:this._segmentVisualElement.visible=!0,this._triangleVisualElement.visible=!0,this._rightAngleQuad.visible=!0;break;case v.ProjectedGeodesic:this._segmentVisualElement.visible=!0,this._projectedGeodesicLine.visible=!0,this._geodesicStartHint.visible=!0,this._geodesicEndHint.visible=!0}}_updateGeometryAndViewMode({view:e,camera:t,viewMode:s,elevationAlignedStartPoint:n,elevationAlignedEndPoint:i,orientation:a,visualizedMeasurement:d,stripeLength:c}){const o=e.renderCoordsHelper;if(g(o)||g(n)||g(i)||n.equals(i))return;let h=this._startPosition,u=this._endPosition;o.toRenderCoords(n,h),o.toRenderCoords(i,u);const m=a===O.AboveSegment?1:-1,b=m*(o.getAltitude(u)-o.getAltitude(h));b<0&&(h=this._endPosition,u=this._startPosition);const w=d==="geodesic"?new fe(this._startPosition,this._endPosition,o.spatialReference):new D(this._startPosition,this._endPosition);switch(this._segmentVisualElement.geometry=w,this._updateSegmentStripeLength(c),s){case v.Direct:this._updateSegment(w,a);break;case v.Triangle:this._updateSegmentAndTriangle({view:e,camera:t,segment:w,orientation:a,startPosition:h,endPosition:u,deltaSign:m,altitudeDelta:b});break;case v.ProjectedGeodesic:this._updateSegmentAndProjection({view:e,orientation:a,startPosition:h,endPosition:u})}}_updateSegment(e,t){this._segmentLabel.anchor=t===O.AboveSegment?"top":"bottom",this._segmentLabel.geometry={type:"segment",segment:e,sampleLocation:"center"}}_updateSegmentAndTriangle({view:{renderCoordsHelper:e},camera:t,segment:s,orientation:n,startPosition:i,endPosition:a,deltaSign:d,altitudeDelta:c}){const o=this._cornerPosition;e.worldUpAtPosition(i,o),Be(o,o,d*Math.abs(c)),We(o,o,i),this._triangleVisualElement.geometry=[[[i[0],i[1],i[2]],[o[0],o[1],o[2]],[a[0],a[1],a[2]]]],this._rightAngleQuad.geometry={previous:i,center:o,next:a};const h=new D(i,o),u=new D(o,a),m=Xt(i,a,o,n,t);this._segmentLabel.anchor=m.segment,this._segmentLabel.geometry={type:"segment",segment:s,sampleLocation:"center"},this._verticalLabel.geometry={type:"segment",segment:h,sampleLocation:"center"},this._verticalLabel.anchor=m.vertical,this._horizontalLabel.geometry={type:"segment",segment:u,sampleLocation:"center"},this._horizontalLabel.anchor=m.horizontal}_updateSegmentAndProjection({view:{renderCoordsHelper:e},orientation:t,startPosition:s,endPosition:n}){e.setAltitude(this._startPositionAtSeaLevel,0,s),e.setAltitude(this._endPositionAtSeaLevel,0,n);const i=new fe(this._startPositionAtSeaLevel,this._endPositionAtSeaLevel,e.spatialReference);this._projectedGeodesicLine.setGeometryFromSegment(i),this._geodesicStartHint.setGeometryFromSegment(new D(this._startPositionAtSeaLevel,s)),this._geodesicEndHint.setGeometryFromSegment(new D(this._endPositionAtSeaLevel,n)),this._segmentLabel.geometry={type:"segment",segment:i,sampleLocation:"center"},this._segmentLabel.anchor=t===O.AboveSegment?"top":"bottom"}_updateLabelText({text:e,visualizedMeasurement:t}){x(e)?(this._segmentLabel.text=t==="euclidean"?e.euclideanDistance:e.geodesicDistance,this._horizontalLabel.text=e.horizontalDistance,this._verticalLabel.text=e.verticalDistance):(this._segmentLabel.text=null,this._horizontalLabel.text=null,this._verticalLabel.text=null),this.notifyChange("labels")}_updateLabelVisibility({visible:e,viewMode:t}){const s=this._segmentLabel,n=this._horizontalLabel,i=this._verticalLabel;if(s.visible=!1,n.visible=!1,i.visible=!1,e)switch(t){case v.Direct:s.visible=!0;break;case v.Triangle:s.visible=!0,n.visible=!0,i.visible=!0;break;case v.ProjectedGeodesic:s.visible=!0;case v.None:}}get _labelsText(){if(this.destroyed)return null;const e=this.messages,t=this.analysisView.result;if(g(t)||g(e))return null;const{directDistance:s,horizontalDistance:n,verticalDistance:i,geodesicDistance:a}=t,d=this.analysisView.unit,c=o=>({euclideanDistance:"",geodesicDistance:"",horizontalDistance:"",verticalDistance:"",...o});switch(d){case"metric":return c({euclideanDistance:s&&Y(e,s),geodesicDistance:a&&Y(e,a),horizontalDistance:n&&Y(e,n),verticalDistance:i&&Ue(e,i)});case"imperial":return c({euclideanDistance:s&&J(e,s),geodesicDistance:a&&J(e,a),horizontalDistance:n&&J(e,n),verticalDistance:i&&Ie(e,i)});default:return c({euclideanDistance:s&&B(e,s,d),geodesicDistance:a&&B(e,a,d),horizontalDistance:n&&B(e,n,d),verticalDistance:i&&B(e,i,d)})}}_updateSegmentStripeLength(e){const t=this._segmentVisualElement;x(e)?(t.stripeLength=e,t.stripesEnabled=!0):t.stripesEnabled=!1}get _actualVisualElementsOrientation(){if(x(this._triangleOrientationOverride))return this._triangleOrientationOverride;const e=this.visualElementOrientation;return e===O.Auto?this.view.state.camera.aboveGround?O.AboveSegment:O.BelowSegment:e}_requiresGeodesicGuideAt(e){const t=this.view;if(!(t!=null&&t.state))return!1;const s=t.state.camera,n=t.renderCoordsHelper,i=s.computeScreenPixelSizeAt(e);return n.getAltitude(e)/i>=10}get _measurementArrowStripeLength(){const{result:e,unit:t}=this.analysisView;if(g(e))return null;let s=null;const n=e.directDistance;switch(t){case"metric":s=n&&Z(n,"meters");break;case"imperial":s=n&&Z(n,Xe(n.value,n.unit));break;default:s=n&&Z(n,t)}return g(s)?null:rt(s.value/30)*Je(1,s.unit,"meters")}_updateMessageBundle(){this.loadingMessages=!0,Mt("esri/core/t9n/Units").then(e=>{this.messages=e}).finally(()=>{this.loadingMessages=!1})}get testData(){var e;return{labels:this.labels,stripeLength:(e=this._segmentVisualElement)==null?void 0:e.stripeLength}}};function Xt(e,t,s,n,i){const a=Jt,d=Yt;i.projectToRenderScreen(s,a),i.projectToRenderScreen(t,d);const c={segment:"bottom",horizontal:"top",vertical:a[0]<d[0]?"left":"right"};{const o=Zt,h=ei;if(X(e,s,o,i),X(e,t,h,i),be(o,h)>=Ae){const u=Math.sign(o[1])===Math.sign(h[1]);c.segment=u?Le(c.vertical):c.vertical}else{const u=ti;X(s,t,u,i),be(u,h)>=Ae&&(c.segment=Math.sign(u[0])===Math.sign(h[0])?Le(c.horizontal):c.horizontal)}}if(n===O.BelowSegment){const o=h=>h==="top"?"bottom":"top";c.segment=o(c.segment),c.horizontal=o(c.horizontal),c.vertical=o(c.vertical)}return c}r([l()],_.prototype,"_triangleOrientationOverride",void 0),r([l()],_.prototype,"messages",void 0),r([l()],_.prototype,"view",void 0),r([l()],_.prototype,"analysis",void 0),r([l()],_.prototype,"analysisView",void 0),r([l()],_.prototype,"loadingMessages",void 0),r([l()],_.prototype,"visible",null),r([l()],_.prototype,"viewMode",null),r([l()],_.prototype,"actualVisualizedMeasurement",null),r([l()],_.prototype,"visualElementOrientation",void 0),r([l()],_.prototype,"triangleCollapseRatioThreshold",void 0),r([l()],_.prototype,"allowVisualElementsOrientationChange",null),r([l()],_.prototype,"labels",null),r([l()],_.prototype,"_labelsText",null),r([l()],_.prototype,"_actualVisualElementsOrientation",null),r([l()],_.prototype,"_measurementArrowStripeLength",null),_=r([ue("esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementVisualization")],_);const Ae=Math.cos(ot(12)),Jt=ze(),Yt=ze(),Zt=me(),ei=me(),ti=me();let p=class extends je(pe){constructor(e){super(e),this.type="direct-line-measurement-view-3d",this.analysis=null,this.result=null,this.measurementMode=$.Auto,this.elevationAlignedStartPoint=null,this.elevationAlignedEndPoint=null}initialize(){const e=this.view,t=this.analysis;this._analysisVisualization=new _({view:e,analysis:t,analysisView:this}),this._analysisController=new E({view:e,analysis:t,viewData:this})}destroy(){this._analysisController=f(this._analysisController),this._analysisVisualization=f(this._analysisVisualization)}get updating(){var e;return!!((e=this._analysisVisualization)!=null&&e.loadingMessages)}get viewMode(){return this._analysisVisualization.viewMode}get actualVisualizedMeasurement(){return this._analysisVisualization.actualVisualizedMeasurement}get visualElementOrientation(){return this._analysisVisualization.visualElementOrientation}set visualElementOrientation(e){this._analysisVisualization.visualElementOrientation=e}get allowVisualElementsOrientationChange(){return this._analysisVisualization.allowVisualElementsOrientationChange}set allowVisualElementsOrientationChange(e){this._analysisVisualization.allowVisualElementsOrientationChange=e}get triangleCollapseRatioThreshold(){return this._analysisVisualization.triangleCollapseRatioThreshold}set triangleCollapseRatioThreshold(e){this._analysisVisualization.triangleCollapseRatioThreshold=e}get directLabelText(){return this._analysisVisualization.labels.direct.text}get horizontalLabelText(){return this._analysisVisualization.labels.horizontal.text}get verticalLabelText(){return this._analysisVisualization.labels.vertical.text}get unit(){return Me(this.analysis.unit,this._defaultUnit)}get testData(){var e;return this.destroyed?{labels:null,stripeLength:null,visualization:null,controller:null}:{...(e=this._analysisVisualization)==null?void 0:e.testData,visualization:this._analysisVisualization,controller:this._analysisController}}};r([l()],p.prototype,"updating",null),r([l({readOnly:!0})],p.prototype,"type",void 0),r([l({constructOnly:!0,nonNullable:!0})],p.prototype,"analysis",void 0),r([l()],p.prototype,"result",void 0),r([l()],p.prototype,"measurementMode",void 0),r([l()],p.prototype,"elevationAlignedStartPoint",void 0),r([l()],p.prototype,"elevationAlignedEndPoint",void 0),r([l({readOnly:!0})],p.prototype,"viewMode",null),r([l({readOnly:!0})],p.prototype,"actualVisualizedMeasurement",null),r([l()],p.prototype,"visualElementOrientation",null),r([l()],p.prototype,"allowVisualElementsOrientationChange",null),r([l()],p.prototype,"triangleCollapseRatioThreshold",null),r([l({readOnly:!0})],p.prototype,"directLabelText",null),r([l({readOnly:!0})],p.prototype,"horizontalLabelText",null),r([l({readOnly:!0})],p.prototype,"verticalLabelText",null),r([l()],p.prototype,"_analysisVisualization",void 0),r([l()],p.prototype,"_analysisController",void 0),r([l()],p.prototype,"unit",null),r([l(Ge)],p.prototype,"_defaultUnit",void 0),p=r([ue("esri.views.3d.analysis.DirectLineMeasurementAnalysisView3D")],p);const ii=p,Qi=Object.freeze(Object.defineProperty({__proto__:null,default:ii},Symbol.toStringTag,{value:"Module"}));export{Qi as D,xt as n};