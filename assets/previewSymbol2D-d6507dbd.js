import{l as C}from"./Color-a42a8267.js";import{a as R}from"./Error-653283ae.js";import{o as A}from"./fontUtils-b94d5e06.js";import{u as v,e as B}from"./screenUtils-410d12c0.js";import{f as T,y as Z,h as U}from"./utils-725f8b4e.js";import{cP as z,cQ as V,cR as F,cS as W}from"./index-455b69b8.js";import{u as j}from"./colorUtils-4aa5b1d6.js";import"./colorUtils-639f4d25.js";import"./mathUtils-2519596a.js";import"./vec3-a020a6f6.js";import"./vec3f64-2f9cef06.js";import"./common-c186b691.js";import"./vec4-790471c0.js";import"./typedArrayUtil-a8b5b3e9.js";import"./ensureType-cf29afa9.js";import"./string-cdf077e6.js";import"./preload-helper-41c905a7.js";import"./symbols-fa594797.js";import"./cast-7928d7aa.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-6684e352.js";import"./CIMSymbol-1379245a.js";import"./enumeration-3c281341.js";import"./jsonMap-c1f958cf.js";import"./Extent-69509002.js";import"./Ellipsoid-89682c5e.js";import"./fieldUtils-31bfecd2.js";import"./arcadeOnDemand-c6d1b9f2.js";import"./geometry-5a216427.js";import"./Polyline-bf268e7b.js";import"./typeUtils-eb9416d0.js";import"./Symbol-fc4312a4.js";import"./opacityUtils-243aae26.js";import"./symbolLayerUtils3D-1f8d4478.js";import"./aaBoundingBox-fc742a4e.js";import"./aaBoundingRect-4a760199.js";import"./request-d3e98716.js";import"./persistableUrlUtils-a16d0f55.js";import"./Symbol3DAnchorPosition2D-c0f4a14d.js";import"./Collection-78126e82.js";import"./Evented-515b9d9c.js";import"./SimpleObservable-7dcdef1d.js";import"./collectionUtils-3831b7c4.js";import"./Portal-8b65c9c4.js";import"./Loadable-48bc1293.js";import"./Promise-dfdee8ba.js";import"./locale-30120714.js";import"./PortalGroup-bfe93c76.js";import"./PortalUser-4c8e1adc.js";import"./Clonable-ba795b08.js";import"./asyncUtils-62e8a185.js";import"./BlendLayer-d8293c8d.js";import"./parser-2b40deea.js";import"./mat4f32-77b3d8ac.js";import"./mat4-44a0988f.js";import"./assets-0b172f07.js";import"./ItemCache-ee28c7ba.js";import"./MemCache-4b976a8b.js";import"./cimSymbolUtils-2e4dde89.js";import"./utils-c81a5c52.js";import"./Basemap-a8f7f439.js";import"./deprecate-b9088bd3.js";import"./loadAll-7fd968fe.js";import"./PortalItem-aa42c739.js";import"./messages-be07754e.js";import"./writeUtils-067c4f82.js";import"./layerUtils-034678f6.js";import"./compilerUtils-034cacb8.js";import"./CollectionFlattener-3dd1f479.js";import"./TablesMixin-e7a6aab1.js";import"./Layer-f0696768.js";import"./Identifiable-aa6d459d.js";import"./Graphic-b46e2684.js";import"./PopupTemplate-6eb885db.js";import"./number-347a3a44.js";import"./jsonUtils-03c4af61.js";import"./Cyclical-b66238c6.js";import"./reactiveUtils-f41a4e00.js";import"./workers-898a7c4c.js";import"./Connection-a681777e.js";import"./Queue-3a0c055d.js";import"./intl-f1e98361.js";import"./projection-d7b57a6c.js";import"./unitUtils-47abac71.js";import"./zscale-1e1fc911.js";import"./TileInfo-34f80a8e.js";import"./widget-f7489a3f.js";import"./uuid-73213768.js";import"./dom-5b7af1bf.js";import"./HandleOwner-e1406413.js";import"./byteSizeEstimations-f0cab514.js";import"./executeQueryJSON-bcd96e1a.js";import"./normalizeUtils-ee4bf39f.js";import"./query-922e6fbf.js";import"./pbfQueryUtils-72f9b45b.js";import"./pbf-e1a6c35b.js";import"./OptimizedFeature-3de538c1.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-d9d8ef40.js";import"./FeatureSet-0573546e.js";import"./Field-f5fc9f6b.js";import"./fieldType-b1002185.js";import"./Query-ff8c2cfb.js";import"./TimeExtent-744afd75.js";import"./RelationshipQuery-db5fcd0c.js";import"./LegendOptions-e65e7a9c.js";import"./jsonUtils-c56f8821.js";import"./UniqueValueRenderer-103ec66d.js";import"./diffUtils-1ac65748.js";import"./colorRamps-3a8ac20b.js";import"./sizeVariableUtils-d4870b0d.js";import"./visualVariableUtils-c59ab38d.js";import"./lengthUtils-d2d33f94.js";import"./jsonUtils-d7db3dc7.js";import"./styleUtils-4adfed9e.js";import"./DictionaryLoader-2cf5144e.js";import"./LRUCache-14115d91.js";import"./heatmapUtils-84e8c43b.js";import"./vec4f64-e407da96.js";import"./featureConversionUtils-01cdde8a.js";import"./TopFeaturesQuery-785f5453.js";import"./FeatureLayer-a9f3e6ec.js";import"./MultiOriginJSONSupport-27362d57.js";import"./LayerFloorInfo-2cd5e8ae.js";import"./FeatureLayerBase-aebdf2da.js";import"./HeightModelInfo-22ad72d7.js";import"./arcgisLayerUrl-0b2b7691.js";import"./OperationalLayer-24e6fa34.js";import"./ElevationInfo-ce9cacc2.js";import"./editsZScale-2015e7db.js";import"./APIKeyMixin-34d76a46.js";import"./ArcGISService-ea748edf.js";import"./CustomParametersMixin-807d2055.js";import"./EditBusLayer-40671d1a.js";import"./FeatureReductionLayer-4077b2ae.js";import"./labelingInfo-5c3a46f6.js";import"./labelUtils-a194a22a.js";import"./defaultsJSON-59981e75.js";import"./OrderedLayer-e7edf19c.js";import"./PortalLayer-f1a64f99.js";import"./RefreshableLayer-1c078c47.js";import"./ScaleRangeLayer-271178b7.js";import"./TemporalLayer-39c07299.js";import"./TimeInfo-c89d0ef4.js";import"./FeatureTemplate-746d033e.js";import"./FeatureType-c83c5f49.js";import"./fieldProperties-7547b373.js";import"./FieldsIndex-aa6dd3fa.js";import"./versionUtils-92993d41.js";import"./styleUtils-da81b13f.js";import"./popupUtils-07fe66a7.js";import"./colorUtils-82440b70.js";import"./mat2d-d0b91e3e.js";import"./Scheduler-8433672d.js";import"./GraphicsLayer-10573c27.js";import"./ViewingMode-5d7d590b.js";import"./enums-0fc02184.js";import"./vec2-2cef68de.js";import"./vec2f64-30dc1443.js";import"./mat3-3fc68e72.js";import"./mat3f32-d3d088e8.js";import"./vec2f32-461e65a9.js";import"./TileStrategy-4189758f.js";import"./TileStore-787dbea4.js";import"./TileKey-0750ad58.js";import"./rbush-8e36784a.js";import"./quickselect-322ec8e1.js";import"./capabilities-3636c6a4.js";import"./context-util-1e3c8cfc.js";import"./sphere-4f5e644f.js";import"./mat3f64-c6305894.js";import"./mat4f64-1e28eae0.js";import"./quatf64-7fd38d64.js";import"./lineSegment-e6f72ff2.js";import"./plane-45609588.js";import"./scaleUtils-b32a50d8.js";import"./ElevationSamplerData-7decf898.js";import"./PhysicallyBasedRendering.glsl-a986c926.js";import"./View.glsl-8b12b8c2.js";import"./ShaderBuilder-93e8045e.js";import"./FloatPassUniform-d2dfc562.js";import"./Float4PassUniform-3a47b7b3.js";import"./RgbaFloatEncoding.glsl-6036ca34.js";import"./Texture2DPassUniform-6e8ae673.js";import"./vec3f32-c9aa289f.js";import"./VertexAttribute-9c5c630d.js";import"./Texture2DDrawUniform-22924c6f.js";import"./basicInterfaces-19ed850e.js";import"./PiUtils.glsl-0c0898f0.js";import"./ReadLinearDepth.glsl-7ff30f7d.js";import"./WaterSurface.glsl-fc8a5726.js";import"./ForwardLinearDepth.glsl-36f9eb3b.js";import"./Matrix3PassUniform-da8eddae.js";import"./Slice.glsl-a612de15.js";import"./Transform.glsl-f15542a7.js";import"./OutputHighlight.glsl-7364b03b.js";import"./MultipassTerrainTest.glsl-e79d40de.js";import"./NormalUtils.glsl-a59958d7.js";import"./AlphaCutoff-96178e0d.js";import"./TransparencyPassType-cd195b0e.js";import"./EvaluateSceneLighting.glsl-3bbc6edf.js";import"./VisualVariablePassParameters-5807c7dc.js";import"./enums-64ab819c.js";import"./VertexElementDescriptor-2925c6af.js";import"./FramebufferObject-50e1b68f.js";import"./Texture-e79b14e7.js";import"./Util-a48361c6.js";import"./SSAOBlur.glsl-c6f142fc.js";import"./ScreenSpacePass-00f8c8a4.js";import"./SSAO.glsl-6f3b4065.js";import"./ShaderTechniqueConfiguration-9f5b4555.js";import"./HUD.glsl-80cf9a21.js";import"./VerticalOffset.glsl-86460edb.js";import"./objectResourceUtils-ef6e3cdf.js";import"./devEnvironmentUtils-5002a058.js";import"./BufferView-646ba1de.js";import"./vec33-ce3aa99b.js";import"./DefaultMaterial_COLOR_GAMMA-9831d979.js";import"./types-e1c0a5bf.js";import"./Version-9baeb7ac.js";import"./quat-5b263584.js";import"./Texture-bbae5d9d.js";import"./TextureOnly.glsl-18701a3b.js";import"./InterleavedLayout-5e9cf734.js";import"./MixExternalColor.glsl-25f0049c.js";import"./symbolColorUtils-604c5345.js";import"./ObjectAndLayerIdColor.glsl-73c19386.js";import"./OutputDepth.glsl-179f1d8f.js";import"./VisualVariables.glsl-b8290512.js";import"./DiscardOrAdjustAlphaBlend.glsl-5f837994.js";import"./Normals.glsl-90e28525.js";import"./DefaultMaterial.glsl-b4f4cbc5.js";import"./VertexColor.glsl-db21b96c.js";import"./DefaultTechniqueConfiguration-e8962072.js";import"./RealisticTree.glsl-2b30ed32.js";import"./edgeProcessing-3ca548e1.js";import"./deduplicate-b0bc48cc.js";import"./projection-aa2a8986.js";import"./Octree-1a841545.js";import"./HUDMaterial.glsl-4bf3c7df.js";import"./sdfPrimitives-a24e9cb2.js";import"./floatRGBA-fa8308d2.js";import"./dehydratedFeatures-4eeb381a.js";import"./quantizationUtils-33aba427.js";import"./labelFormatUtils-4d730eaa.js";import"./I3SUtil-3ffd3baa.js";import"./I3SBinaryReader-3d2c2faa.js";import"./LineCallout.glsl-a0056465.js";import"./earcut-58237617.js";import"./QueryEngineResult-665bf7fb.js";import"./WhereClause-2b5b05b2.js";import"./utils-30a9a7e0.js";import"./generateRendererUtils-a996108f.js";import"./utils-1f4fcfec.js";import"./json-48e3ea08.js";import"./MeshComponent-f50df6af.js";import"./MarkerSizing.glsl-c6fa192a.js";import"./RibbonLine.glsl-2a3b4d4e.js";import"./LineStipple.glsl-de782d6a.js";import"./callExpressionWithFeature-a7532499.js";import"./LineMarker.glsl-8f444621.js";import"./NativeLine.glsl-cdbbf172.js";import"./Path.glsl-60b36878.js";import"./ColorMaterial.glsl-8310ffb3.js";import"./Pattern.glsl-d3388745.js";import"./EffectView-d3bf37ed.js";import"./LercDecoder-73115fd2.js";import"./config-1337d16e.js";import"./workerHelper-c6d4a8cb.js";import"./Subtype-5b01b21f.js";import"./datetime-4f774298.js";import"./elevationInfoUtils-427916a5.js";import"./ExportImageParameters-f328a234.js";import"./sublayerUtils-ba7f61bc.js";import"./webStyleSymbolUtils-55ed91cd.js";import"./enums-4b2a86a0.js";const q="picture-fill",H="picture-marker",Q="simple-fill",G="simple-line",I="simple-marker",J="text",K="Aa",N=z.size,x=z.maxSize,X=z.maxOutlineSize,Y=z.lineWidth,E=225,_=document.createElement("canvas");function O(o,i){const t=_.getContext("2d"),r=[];return i&&(i.weight&&r.push(i.weight),i.size&&r.push(i.size+"px"),i.family&&r.push(i.family)),t.font=r.join(" "),t.measureText(o).width}const $=7.2/2.54,ii=72/2.54;function oi(o){if(o.length===0)return 0;if(o.length>2){const i=B(1),t=parseFloat(o);switch(o.slice(-2)){case"px":return t;case"pt":return t*i;case"in":return 72*t*i;case"pc":return 12*t*i;case"mm":return t*$*i;case"cm":return t*ii*i}}return parseFloat(o)}function k(o){const i=o==null?void 0:o.size;return{width:i!=null&&typeof i=="object"&&"width"in i?v(i.width):null,height:i!=null&&typeof i=="object"&&"height"in i?v(i.height):null}}async function ti(o,i){const t=i.fill,r=o.color;if((t==null?void 0:t.type)==="pattern"&&r&&o.type!==q){const u=await U(t.src,r.toCss(!0));t.src=u,i.fill=t}}async function ri(o,i,t,r){if(!("font"in o)||!o.font||i.shape.type!=="text")return;try{await A(o.font)}catch{}const{width:u}=k(r),c=/[\uE600-\uE6FF]/.test(i.shape.text);u!=null||c||(t[0]=O(i.shape.text,{weight:i.font.weight,size:i.font.size,family:i.font.family}))}function D(o,i){return o>i?"dark":"light"}function mi(o,i){var M;const t=typeof(i==null?void 0:i.size)=="number"?i==null?void 0:i.size:null,r=t!=null?v(t):null,u=(i==null?void 0:i.maxSize)!=null?v(i.maxSize):null,c=(i==null?void 0:i.rotation)!=null?i.rotation:"angle"in o?o.angle:null,y=T(o);let l=Z(o);pi(o,245)!=="dark"||i!=null&&i.ignoreWhiteSymbols||(l={width:.75,...l,color:"#bdc3c7"});const n={shape:null,fill:y,stroke:l,offset:[0,0]};l!=null&&l.width&&(l.width=Math.min(l.width,X));const h=(l==null?void 0:l.width)||0;let g=(i==null?void 0:i.size)!=null&&((i==null?void 0:i.scale)==null||(i==null?void 0:i.scale)),m=0,p=0,b=!1;switch(o.type){case I:{const a=o.style,{width:s,height:e}=k(i),w=s===e&&s!=null?s:r??Math.min(v(o.size),u||x);switch(m=w,p=w,a){case"circle":n.shape={type:"circle",cx:0,cy:0,r:.5*w},g||(m+=h,p+=h);break;case"cross":n.shape={type:"path",path:[{command:"M",values:[0,.5*p]},{command:"L",values:[m,.5*p]},{command:"M",values:[.5*m,0]},{command:"L",values:[.5*m,p]}]};break;case"diamond":n.shape={type:"path",path:[{command:"M",values:[0,.5*p]},{command:"L",values:[.5*m,0]},{command:"L",values:[m,.5*p]},{command:"L",values:[.5*m,p]},{command:"Z",values:[]}]},g||(m+=h,p+=h);break;case"square":n.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[m,0]},{command:"L",values:[m,p]},{command:"L",values:[0,p]},{command:"Z",values:[]}]},g||(m+=h,p+=h),c&&(b=!0);break;case"triangle":n.shape={type:"path",path:[{command:"M",values:[.5*m,0]},{command:"L",values:[m,p]},{command:"L",values:[0,p]},{command:"Z",values:[]}]},g||(m+=h,p+=h),c&&(b=!0);break;case"x":n.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[m,p]},{command:"M",values:[m,0]},{command:"L",values:[0,p]}]},c&&(b=!0);break;case"path":n.shape={type:"path",path:o.path||""},g||(m+=h,p+=h),c&&(b=!0),g=!0}break}case G:{const{width:a,height:s}=k(i),e=s??r??h,w=a??Y;l&&(l.width=e),m=w,p=e;const f=((M=n==null?void 0:n.stroke)==null?void 0:M.cap)||"butt",d=f==="round";g=!0,n.stroke&&(n.stroke.cap=f==="butt"?"square":f),n.shape={type:"path",path:[{command:"M",values:[d?e/2:0,p/2]},{command:"L",values:[d?m-e/2:m,p/2]}]};break}case q:case Q:{const a=typeof(i==null?void 0:i.symbolConfig)=="object"&&(i==null?void 0:i.symbolConfig.isSquareFill),{width:s,height:e}=k(i);m=!a&&s!==e||s==null?r??N:s,p=!a&&s!==e||e==null?m:e,g||(m+=h,p+=h),g=!0,n.shape=a?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[m,0]},{command:"L",values:[m,p]},{command:"L",values:[0,p]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:V.fill[0];break}case H:{const a=Math.min(v(o.width),u||x),s=Math.min(v(o.height),u||x),{width:e,height:w}=k(i),f=e===w&&e!=null?e:r??Math.max(a,s),d=a/s;m=d<=1?Math.ceil(f*d):f,p=d<=1?f:Math.ceil(f/d),n.shape={type:"image",x:-Math.round(m/2),y:-Math.round(p/2),width:m,height:p,src:o.url||""},c&&(b=!0);break}case J:{const a=o,s=(i==null?void 0:i.overrideText)||a.text||K,e=a.font,{width:w,height:f}=k(i),d=f??r??Math.min(v(e.size),u||x),P=O(s,{weight:e.weight,size:d,family:e.family}),L=/[\uE600-\uE6FF]/.test(s);m=w??(L?d:P),p=d;let S=.25*oi((e?d:0).toString());L&&(S+=5),n.shape={type:"text",text:s,x:a.xoffset||0,y:a.yoffset||S,align:"middle",alignBaseline:a.verticalAlignment,decoration:e&&e.decoration,rotated:a.rotated,kerning:a.kerning},n.font=e&&{size:d,style:e.style,decoration:e.decoration,weight:e.weight,family:e.family};break}}return{shapeDescriptor:n,size:[m,p],renderOptions:{node:i==null?void 0:i.node,scale:g,opacity:i==null?void 0:i.opacity,rotation:c,useRotationSize:b,effectView:i==null?void 0:i.effectView}}}async function hp(o,i){const{shapeDescriptor:t,size:r,renderOptions:u}=mi(o,i);if(!t.shape)throw new R("symbolPreview: renderPreviewHTML2D","symbol not supported.");await ti(o,t),await ri(o,t,r,i);const c=[[t]];if(typeof(i==null?void 0:i.symbolConfig)=="object"&&(i!=null&&i.symbolConfig.applyColorModulation)){const y=.6*r[0];c.unshift([{...t,offset:[-y,0],fill:F(t.fill,-.3)}]),c.push([{...t,offset:[y,0],fill:F(t.fill,.3)}]),r[0]+=2*y,u.scale=!1}return W(c,r,u)}function pi(o,i=E){const t=T(o),r=Z(o),u=!t||"type"in t?null:new C(t),c=r!=null&&r.color?new C(r==null?void 0:r.color):null,y=u?D(j(u),i):null,l=c?D(j(c),i):null;return l?y?y===l?y:i>=E?"light":"dark":l:y}export{pi as getContrastingBackgroundTheme,mi as getRenderSymbolParameters,hp as previewSymbol2D};