import"./geometry-5a216427.js";import{r as m,e as l}from"./typedArrayUtil-a8b5b3e9.js";import{D as c}from"./projection-d7b57a6c.js";import{g as s,W as p,T as f,D as u,j as S}from"./pixelUtils-c27b13a1.js";import{S as d,T as h,p as y}from"./RasterSymbolizer-e03bd61b.js";import{l as x,i as O}from"./utils-21771c3e.js";import{M as N,T as J,$ as b}from"./rasterProjectionHelper-967d22a7.js";import{d as g,m as w,f as B}from"./dataUtils-a4eff43b.js";import{a}from"./Extent-69509002.js";import"./ensureType-cf29afa9.js";import"./string-cdf077e6.js";import"./Error-653283ae.js";import"./Polyline-bf268e7b.js";import"./cast-7928d7aa.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-6684e352.js";import"./typeUtils-eb9416d0.js";import"./jsonMap-c1f958cf.js";import"./preload-helper-41c905a7.js";import"./mathUtils-2519596a.js";import"./vec3-a020a6f6.js";import"./vec3f64-2f9cef06.js";import"./common-c186b691.js";import"./vec4-790471c0.js";import"./unitUtils-47abac71.js";import"./Ellipsoid-89682c5e.js";import"./SimpleObservable-7dcdef1d.js";import"./mat4-44a0988f.js";import"./assets-0b172f07.js";import"./request-d3e98716.js";import"./aaBoundingRect-4a760199.js";import"./zscale-1e1fc911.js";import"./colorUtils-82440b70.js";import"./Color-a42a8267.js";import"./colorUtils-639f4d25.js";import"./enumeration-3c281341.js";import"./colorRamps-3a8ac20b.js";class ct{convertVectorFieldData(t){const e=s.fromJSON(t.pixelBlock),o=g(e,t.type);return Promise.resolve(m(o)&&o.toJSON())}async decode(t){const e=await d(t.data,t.options);return e&&e.toJSON()}symbolize(t){t.pixelBlock=s.fromJSON(t.pixelBlock),t.extent=t.extent?a.fromJSON(t.extent):null;const e=this.symbolizer.symbolize(t);return Promise.resolve(m(e)&&e.toJSON())}async updateSymbolizer(t){var e;this.symbolizer=h.fromJSON(t.symbolizerJSON),t.histograms&&((e=this.symbolizer)==null?void 0:e.rendererJSON.type)==="rasterStretch"&&(this.symbolizer.rendererJSON.histograms=t.histograms)}async updateRasterFunction(t){this.rasterFunction=x(t.rasterFunctionJSON)}async process(t){const e=this.rasterFunction.process({extent:a.fromJSON(t.extent),primaryPixelBlocks:t.primaryPixelBlocks.map(o=>m(o)?s.fromJSON(o):null),primaryRasterIds:t.primaryRasterIds});return m(e)?e.toJSON():null}stretch(t){const e=this.symbolizer.simpleStretch(s.fromJSON(t.srcPixelBlock),t.stretchParams);return Promise.resolve(m(e)&&e.toJSON())}estimateStatisticsHistograms(t){const e=y(s.fromJSON(t.srcPixelBlock));return Promise.resolve(e)}split(t){const e=p(s.fromJSON(t.srcPixelBlock),t.tileSize,t.maximumPyramidLevel);return e&&e.forEach((o,r)=>{e.set(r,o==null?void 0:o.toJSON())}),Promise.resolve(e)}async mosaicAndTransform(t){const e=t.srcPixelBlocks.map(n=>n?new s(n):null),o=f(e,t.srcMosaicSize,{blockWidths:t.blockWidths,alignmentInfo:t.alignmentInfo,clipOffset:t.clipOffset,clipSize:t.clipSize});let r,i=o;return t.coefs&&(i=u(o,t.destDimension,t.coefs,t.sampleSpacing,t.interpolation)),t.projectDirections&&t.gcsGrid&&(r=S(t.destDimension,t.gcsGrid),i=l(w(i,t.isUV?"vector-uv":"vector-magdir",r))),{pixelBlock:i==null?void 0:i.toJSON(),localNorthDirections:r}}async createFlowMesh(t,e){const o={data:new Float32Array(t.flowData.buffer),mask:new Uint8Array(t.flowData.maskBuffer),width:t.flowData.width,height:t.flowData.height},{vertexData:r,indexData:i}=await B(t.meshType,t.simulationSettings,o,e.signal);return{result:{vertexBuffer:r.buffer,indexBuffer:i.buffer},transferList:[r.buffer,i.buffer]}}async getProjectionOffsetGrid(t){const e=a.fromJSON(t.projectedExtent),o=a.fromJSON(t.srcBufferExtent);let r=null;t.datumTransformationSteps&&(r=new c({steps:t.datumTransformationSteps})),(t.includeGCSGrid||N(e.spatialReference,o.spatialReference,r))&&await J();const i=t.rasterTransform?O(t.rasterTransform):null;return b({...t,projectedExtent:e,srcBufferExtent:o,datumTransformation:r,rasterTransform:i})}}export{ct as default};