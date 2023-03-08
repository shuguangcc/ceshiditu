import{B as L}from"./cast-7928d7aa.js";import{a as v,s as R}from"./Error-653283ae.js";import{p as J,a as f,v as w,C as A,j as T,r as j,A as W,f as C}from"./promiseUtils-6684e352.js";import{e as D}from"./Queue-3a0c055d.js";import{_}from"./preload-helper-41c905a7.js";import{a as V}from"./request-d3e98716.js";import{h as E,r as $}from"./typedArrayUtil-a8b5b3e9.js";import{h as N}from"./string-cdf077e6.js";const B="20221121",H="f520630575ed53cf8b49e5f1492799065ee366e5";var h;(function(o){o[o.HANDSHAKE=0]="HANDSHAKE",o[o.OPEN=1]="OPEN",o[o.OPENED=2]="OPENED",o[o.RESPONSE=3]="RESPONSE",o[o.INVOKE=4]="INVOKE",o[o.ABORT=5]="ABORT",o[o.CLOSE=6]="CLOSE",o[o.OPEN_PORT=7]="OPEN_PORT",o[o.ON=8]="ON"})(h||(h={}));let Q=0;function K(){return Q++}function x(o){return o&&typeof o=="object"&&("result"in o||"transferList"in o)}function b(o){return o?typeof o=="string"?JSON.stringify({name:"message",message:o}):o.toJSON?JSON.stringify(o):JSON.stringify({name:o.name,message:o.message,details:o.details||{stack:o.stack}}):null}function M(o,e,t,s){if(e.type===h.OPEN_PORT)return void o.postMessage(e,[e.port]);if(e.type!==h.INVOKE&&e.type!==h.RESPONSE)return void o.postMessage(e);let r;if(x(t)?(r=P(t.transferList),e.data=t.result):(r=P(s),e.data=t),r){if(N("ff")){for(const n of r)if("byteLength"in n&&n.byteLength>267386880){const i="Worker call with large ArrayBuffer would crash Firefox";switch(e.type){case h.INVOKE:throw i;case h.RESPONSE:return void M(o,{type:h.RESPONSE,jobId:e.jobId,error:b(i)})}}}o.postMessage(e,r)}else o.postMessage(e)}function O(o){if(!o)return null;const e=o.data;return e?typeof e=="string"?JSON.parse(e):e:null}function P(o){if(!o||!o.length)return null;if(N("esri-workers-arraybuffer-transfer"))return o;const e=o.filter(t=>!F(t));return e.length?e:null}function F(o){return o instanceof ArrayBuffer||o&&o.constructor&&o.constructor.name==="ArrayBuffer"}const z={statsWorker:()=>_(()=>import("./statsWorker-cd95447d.js"),["./statsWorker-cd95447d.js","./geometry-5a216427.js","./ensureType-cf29afa9.js","./string-cdf077e6.js","./typedArrayUtil-a8b5b3e9.js","./Error-653283ae.js","./Extent-69509002.js","./cast-7928d7aa.js","./nextTick-3ee5a785.js","./promiseUtils-6684e352.js","./Ellipsoid-89682c5e.js","./Polyline-bf268e7b.js","./typeUtils-eb9416d0.js","./jsonMap-c1f958cf.js","./screenUtils-410d12c0.js","./quantizationUtils-33aba427.js","./jsonUtils-03c4af61.js","./fieldUtils-31bfecd2.js","./preload-helper-41c905a7.js","./arcadeOnDemand-c6d1b9f2.js","./heatmapUtils-84e8c43b.js","./mathUtils-2519596a.js","./vec3-a020a6f6.js","./vec3f64-2f9cef06.js","./common-c186b691.js","./vec4-790471c0.js","./vec4f64-e407da96.js","./utils-30a9a7e0.js","./generateRendererUtils-a996108f.js","./colorRamps-3a8ac20b.js","./Color-a42a8267.js","./colorUtils-639f4d25.js","./enumeration-3c281341.js","./Symbol-fc4312a4.js"],import.meta.url),geometryEngineWorker:()=>_(()=>import("./geometryEngineWorker-85b1ab98.js"),["./geometryEngineWorker-85b1ab98.js","./geometryEngineJSON-45c195fe.js","./geometryEngineBase-3dd302e0.js","./json-48e3ea08.js"],import.meta.url),CSVSourceWorker:()=>_(()=>import("./CSVSourceWorker-8021b701.js"),["./CSVSourceWorker-8021b701.js","./geometry-5a216427.js","./ensureType-cf29afa9.js","./string-cdf077e6.js","./typedArrayUtil-a8b5b3e9.js","./Error-653283ae.js","./Extent-69509002.js","./cast-7928d7aa.js","./nextTick-3ee5a785.js","./promiseUtils-6684e352.js","./Ellipsoid-89682c5e.js","./Polyline-bf268e7b.js","./typeUtils-eb9416d0.js","./jsonMap-c1f958cf.js","./request-d3e98716.js","./preload-helper-41c905a7.js","./asyncUtils-62e8a185.js","./projection-d7b57a6c.js","./mathUtils-2519596a.js","./vec3-a020a6f6.js","./vec3f64-2f9cef06.js","./common-c186b691.js","./vec4-790471c0.js","./unitUtils-47abac71.js","./SimpleObservable-7dcdef1d.js","./mat4-44a0988f.js","./assets-0b172f07.js","./aaBoundingRect-4a760199.js","./zscale-1e1fc911.js","./json-48e3ea08.js","./OptimizedFeature-3de538c1.js","./FeatureStore-b1ba4c29.js","./Evented-515b9d9c.js","./aaBoundingBox-fc742a4e.js","./featureConversionUtils-01cdde8a.js","./jsonUtils-03c4af61.js","./OptimizedFeatureSet-1d1ac4b9.js","./PooledRBush-26ba8fba.js","./quickselect-322ec8e1.js","./optimizedFeatureQueryEngineAdapter-4b9881eb.js","./centroid-13995b22.js","./utils-1f4fcfec.js","./normalizeUtils-ee4bf39f.js","./QueryEngine-a5c074c3.js","./MemCache-4b976a8b.js","./QueryEngineResult-665bf7fb.js","./quantizationUtils-33aba427.js","./ItemCache-ee28c7ba.js","./WhereClause-2b5b05b2.js","./utils-30a9a7e0.js","./generateRendererUtils-a996108f.js","./colorRamps-3a8ac20b.js","./Color-a42a8267.js","./colorUtils-639f4d25.js","./enumeration-3c281341.js","./Symbol-fc4312a4.js","./fieldUtils-31bfecd2.js","./arcadeOnDemand-c6d1b9f2.js","./QueryEngineCapabilities-42e44ded.js","./timeSupport-b43dc94c.js","./FieldsIndex-aa6dd3fa.js","./Scheduler-8433672d.js","./reactiveUtils-f41a4e00.js","./number-bd3c06fb.js","./locale-30120714.js","./clientSideDefaults-3539f8c8.js","./defaultsJSON-59981e75.js"],import.meta.url),EdgeProcessingWorker:()=>_(()=>import("./EdgeProcessingWorker-d20ec757.js"),["./EdgeProcessingWorker-d20ec757.js","./workerHelper-c6d4a8cb.js","./BufferView-646ba1de.js","./vec2-2cef68de.js","./common-c186b691.js","./vec3-a020a6f6.js","./vec3f64-2f9cef06.js","./vec4-790471c0.js","./InterleavedLayout-5e9cf734.js","./types-e1c0a5bf.js","./edgeProcessing-3ca548e1.js","./deduplicate-b0bc48cc.js","./mathUtils-2519596a.js","./VertexAttribute-9c5c630d.js","./enums-64ab819c.js","./VertexElementDescriptor-2925c6af.js","./typedArrayUtil-a8b5b3e9.js"],import.meta.url),ElevationSamplerWorker:()=>_(()=>import("./ElevationSamplerWorker-9fbd9661.js"),["./ElevationSamplerWorker-9fbd9661.js","./string-cdf077e6.js","./typedArrayUtil-a8b5b3e9.js","./PooledRBush-26ba8fba.js","./cast-7928d7aa.js","./Error-653283ae.js","./ensureType-cf29afa9.js","./nextTick-3ee5a785.js","./promiseUtils-6684e352.js","./quickselect-322ec8e1.js","./georeference-6f0b7692.js","./unitUtils-47abac71.js","./jsonMap-c1f958cf.js","./Extent-69509002.js","./Ellipsoid-89682c5e.js","./mat3f64-c6305894.js","./mat4-44a0988f.js","./vec3f64-2f9cef06.js","./common-c186b691.js","./mat4f64-1e28eae0.js","./mat3-3fc68e72.js","./projection-d7b57a6c.js","./preload-helper-41c905a7.js","./mathUtils-2519596a.js","./vec3-a020a6f6.js","./vec4-790471c0.js","./SimpleObservable-7dcdef1d.js","./Polyline-bf268e7b.js","./assets-0b172f07.js","./request-d3e98716.js","./aaBoundingRect-4a760199.js","./zscale-1e1fc911.js","./quat-5b263584.js","./quatf64-7fd38d64.js","./projection-aa2a8986.js","./BufferView-646ba1de.js","./vec2-2cef68de.js","./vec33-ce3aa99b.js"],import.meta.url),FeatureServiceSnappingSourceWorker:()=>_(()=>import("./FeatureServiceSnappingSourceWorker-49d947ee.js"),["./FeatureServiceSnappingSourceWorker-49d947ee.js","./cast-7928d7aa.js","./typedArrayUtil-a8b5b3e9.js","./string-cdf077e6.js","./Error-653283ae.js","./ensureType-cf29afa9.js","./nextTick-3ee5a785.js","./promiseUtils-6684e352.js","./Evented-515b9d9c.js","./reactiveUtils-f41a4e00.js","./HandleOwner-e1406413.js","./Extent-69509002.js","./Ellipsoid-89682c5e.js","./FeatureStore-b1ba4c29.js","./aaBoundingBox-fc742a4e.js","./aaBoundingRect-4a760199.js","./mathUtils-2519596a.js","./vec3-a020a6f6.js","./vec3f64-2f9cef06.js","./common-c186b691.js","./vec4-790471c0.js","./featureConversionUtils-01cdde8a.js","./jsonUtils-03c4af61.js","./Polyline-bf268e7b.js","./OptimizedFeature-3de538c1.js","./OptimizedFeatureSet-1d1ac4b9.js","./PooledRBush-26ba8fba.js","./quickselect-322ec8e1.js","./optimizedFeatureQueryEngineAdapter-4b9881eb.js","./centroid-13995b22.js","./QueryEngine-a5c074c3.js","./MemCache-4b976a8b.js","./unitUtils-47abac71.js","./jsonMap-c1f958cf.js","./normalizeUtils-ee4bf39f.js","./geometry-5a216427.js","./typeUtils-eb9416d0.js","./request-d3e98716.js","./preload-helper-41c905a7.js","./QueryEngineResult-665bf7fb.js","./quantizationUtils-33aba427.js","./ItemCache-ee28c7ba.js","./WhereClause-2b5b05b2.js","./utils-30a9a7e0.js","./generateRendererUtils-a996108f.js","./colorRamps-3a8ac20b.js","./Color-a42a8267.js","./colorUtils-639f4d25.js","./enumeration-3c281341.js","./Symbol-fc4312a4.js","./utils-1f4fcfec.js","./projection-d7b57a6c.js","./SimpleObservable-7dcdef1d.js","./mat4-44a0988f.js","./assets-0b172f07.js","./zscale-1e1fc911.js","./json-48e3ea08.js","./fieldUtils-31bfecd2.js","./arcadeOnDemand-c6d1b9f2.js","./QueryEngineCapabilities-42e44ded.js","./timeSupport-b43dc94c.js","./FieldsIndex-aa6dd3fa.js","./Scheduler-8433672d.js","./TileInfo-34f80a8e.js","./TimeInfo-c89d0ef4.js","./TimeExtent-744afd75.js","./Query-ff8c2cfb.js","./Field-f5fc9f6b.js","./fieldType-b1002185.js","./Clonable-ba795b08.js","./ElevationInfo-ce9cacc2.js","./lengthUtils-d2d33f94.js","./symbologySnappingCandidates-3493a4d4.js","./LRUCache-14115d91.js","./asyncUtils-62e8a185.js","./arcgisLayerUrl-0b2b7691.js","./persistableUrlUtils-a16d0f55.js","./pbfQueryUtils-72f9b45b.js","./pbf-e1a6c35b.js","./query-922e6fbf.js","./queryZScale-d9d8ef40.js","./byteSizeEstimations-f0cab514.js"],import.meta.url),GeoJSONSourceWorker:()=>_(()=>import("./GeoJSONSourceWorker-4b31384f.js"),["./GeoJSONSourceWorker-4b31384f.js","./request-d3e98716.js","./preload-helper-41c905a7.js","./Error-653283ae.js","./string-cdf077e6.js","./typedArrayUtil-a8b5b3e9.js","./promiseUtils-6684e352.js","./asyncUtils-62e8a185.js","./cast-7928d7aa.js","./ensureType-cf29afa9.js","./nextTick-3ee5a785.js","./jsonUtils-03c4af61.js","./Extent-69509002.js","./Ellipsoid-89682c5e.js","./Polyline-bf268e7b.js","./featureConversionUtils-01cdde8a.js","./OptimizedFeature-3de538c1.js","./OptimizedFeatureSet-1d1ac4b9.js","./FeatureStore-b1ba4c29.js","./Evented-515b9d9c.js","./aaBoundingBox-fc742a4e.js","./aaBoundingRect-4a760199.js","./mathUtils-2519596a.js","./vec3-a020a6f6.js","./vec3f64-2f9cef06.js","./common-c186b691.js","./vec4-790471c0.js","./PooledRBush-26ba8fba.js","./quickselect-322ec8e1.js","./optimizedFeatureQueryEngineAdapter-4b9881eb.js","./centroid-13995b22.js","./utils-1f4fcfec.js","./jsonMap-c1f958cf.js","./unitUtils-47abac71.js","./projection-d7b57a6c.js","./SimpleObservable-7dcdef1d.js","./mat4-44a0988f.js","./assets-0b172f07.js","./zscale-1e1fc911.js","./normalizeUtils-ee4bf39f.js","./geometry-5a216427.js","./typeUtils-eb9416d0.js","./json-48e3ea08.js","./QueryEngine-a5c074c3.js","./MemCache-4b976a8b.js","./QueryEngineResult-665bf7fb.js","./quantizationUtils-33aba427.js","./ItemCache-ee28c7ba.js","./WhereClause-2b5b05b2.js","./utils-30a9a7e0.js","./generateRendererUtils-a996108f.js","./colorRamps-3a8ac20b.js","./Color-a42a8267.js","./colorUtils-639f4d25.js","./enumeration-3c281341.js","./Symbol-fc4312a4.js","./fieldUtils-31bfecd2.js","./arcadeOnDemand-c6d1b9f2.js","./QueryEngineCapabilities-42e44ded.js","./timeSupport-b43dc94c.js","./FieldsIndex-aa6dd3fa.js","./Scheduler-8433672d.js","./reactiveUtils-f41a4e00.js","./geojson-e3044c2f.js","./clientSideDefaults-3539f8c8.js","./defaultsJSON-59981e75.js","./sourceUtils-17bbc359.js","./fieldType-b1002185.js"],import.meta.url),LercWorker:()=>_(()=>import("./LercWorker-7548a312.js"),["./LercWorker-7548a312.js","./mathUtils-2519596a.js","./vec3-a020a6f6.js","./vec3f64-2f9cef06.js","./common-c186b691.js","./vec4-790471c0.js"],import.meta.url),MemorySourceWorker:()=>_(()=>import("./MemorySourceWorker-68d06e03.js"),["./MemorySourceWorker-68d06e03.js","./Error-653283ae.js","./string-cdf077e6.js","./typedArrayUtil-a8b5b3e9.js","./jsonUtils-03c4af61.js","./Extent-69509002.js","./cast-7928d7aa.js","./ensureType-cf29afa9.js","./nextTick-3ee5a785.js","./promiseUtils-6684e352.js","./Ellipsoid-89682c5e.js","./Polyline-bf268e7b.js","./featureConversionUtils-01cdde8a.js","./OptimizedFeature-3de538c1.js","./OptimizedFeatureSet-1d1ac4b9.js","./objectIdUtils-789e911a.js","./FeatureStore-b1ba4c29.js","./Evented-515b9d9c.js","./aaBoundingBox-fc742a4e.js","./aaBoundingRect-4a760199.js","./mathUtils-2519596a.js","./vec3-a020a6f6.js","./vec3f64-2f9cef06.js","./common-c186b691.js","./vec4-790471c0.js","./PooledRBush-26ba8fba.js","./quickselect-322ec8e1.js","./optimizedFeatureQueryEngineAdapter-4b9881eb.js","./centroid-13995b22.js","./utils-1f4fcfec.js","./preload-helper-41c905a7.js","./jsonMap-c1f958cf.js","./unitUtils-47abac71.js","./projection-d7b57a6c.js","./SimpleObservable-7dcdef1d.js","./mat4-44a0988f.js","./assets-0b172f07.js","./request-d3e98716.js","./zscale-1e1fc911.js","./normalizeUtils-ee4bf39f.js","./geometry-5a216427.js","./typeUtils-eb9416d0.js","./json-48e3ea08.js","./QueryEngine-a5c074c3.js","./MemCache-4b976a8b.js","./QueryEngineResult-665bf7fb.js","./quantizationUtils-33aba427.js","./ItemCache-ee28c7ba.js","./WhereClause-2b5b05b2.js","./utils-30a9a7e0.js","./generateRendererUtils-a996108f.js","./colorRamps-3a8ac20b.js","./Color-a42a8267.js","./colorUtils-639f4d25.js","./enumeration-3c281341.js","./Symbol-fc4312a4.js","./fieldUtils-31bfecd2.js","./arcadeOnDemand-c6d1b9f2.js","./QueryEngineCapabilities-42e44ded.js","./timeSupport-b43dc94c.js","./FieldsIndex-aa6dd3fa.js","./Scheduler-8433672d.js","./reactiveUtils-f41a4e00.js","./clientSideDefaults-3539f8c8.js","./defaultsJSON-59981e75.js","./sourceUtils-17bbc359.js","./fieldType-b1002185.js"],import.meta.url),PBFDecoderWorker:()=>_(()=>import("./PBFDecoderWorker-1b48ab09.js"),["./PBFDecoderWorker-1b48ab09.js","./compilerUtils-034cacb8.js","./string-cdf077e6.js","./typedArrayUtil-a8b5b3e9.js","./cast-7928d7aa.js","./Error-653283ae.js","./ensureType-cf29afa9.js","./nextTick-3ee5a785.js","./promiseUtils-6684e352.js","./Extent-69509002.js","./Ellipsoid-89682c5e.js","./zscale-1e1fc911.js","./unitUtils-47abac71.js","./jsonMap-c1f958cf.js","./dehydratedFeatures-4eeb381a.js","./byteSizeEstimations-f0cab514.js","./aaBoundingBox-fc742a4e.js","./aaBoundingRect-4a760199.js","./mathUtils-2519596a.js","./vec3-a020a6f6.js","./vec3f64-2f9cef06.js","./common-c186b691.js","./vec4-790471c0.js","./quantizationUtils-33aba427.js","./jsonUtils-03c4af61.js","./Polyline-bf268e7b.js","./typeUtils-eb9416d0.js","./Field-f5fc9f6b.js","./enumeration-3c281341.js","./fieldType-b1002185.js","./featureConversionUtils-01cdde8a.js","./OptimizedFeature-3de538c1.js","./OptimizedFeatureSet-1d1ac4b9.js","./pbfQueryUtils-72f9b45b.js","./pbf-e1a6c35b.js"],import.meta.url),Pipeline:()=>_(()=>import("./Pipeline-93dd027c.js"),["./Pipeline-93dd027c.js","./cast-7928d7aa.js","./typedArrayUtil-a8b5b3e9.js","./string-cdf077e6.js","./Error-653283ae.js","./ensureType-cf29afa9.js","./nextTick-3ee5a785.js","./promiseUtils-6684e352.js","./HandleOwner-e1406413.js","./reactiveUtils-f41a4e00.js","./Extent-69509002.js","./Ellipsoid-89682c5e.js","./TileInfo-34f80a8e.js","./jsonMap-c1f958cf.js","./unitUtils-47abac71.js","./aaBoundingRect-4a760199.js","./mathUtils-2519596a.js","./vec3-a020a6f6.js","./vec3f64-2f9cef06.js","./common-c186b691.js","./vec4-790471c0.js","./preload-helper-41c905a7.js","./featureConversionUtils-01cdde8a.js","./jsonUtils-03c4af61.js","./Polyline-bf268e7b.js","./OptimizedFeature-3de538c1.js","./OptimizedFeatureSet-1d1ac4b9.js","./QueryEngine-a5c074c3.js","./MemCache-4b976a8b.js","./aaBoundingBox-fc742a4e.js","./normalizeUtils-ee4bf39f.js","./geometry-5a216427.js","./typeUtils-eb9416d0.js","./request-d3e98716.js","./QueryEngineResult-665bf7fb.js","./quantizationUtils-33aba427.js","./ItemCache-ee28c7ba.js","./WhereClause-2b5b05b2.js","./utils-30a9a7e0.js","./generateRendererUtils-a996108f.js","./colorRamps-3a8ac20b.js","./Color-a42a8267.js","./colorUtils-639f4d25.js","./enumeration-3c281341.js","./Symbol-fc4312a4.js","./utils-1f4fcfec.js","./projection-d7b57a6c.js","./SimpleObservable-7dcdef1d.js","./mat4-44a0988f.js","./assets-0b172f07.js","./zscale-1e1fc911.js","./json-48e3ea08.js","./fieldUtils-31bfecd2.js","./arcadeOnDemand-c6d1b9f2.js","./QueryEngineCapabilities-42e44ded.js","./timeSupport-b43dc94c.js","./FieldsIndex-aa6dd3fa.js","./Scheduler-8433672d.js","./FeatureStore2D-0e2bbd04.js","./CircularArray-cf56c6b0.js","./Evented-515b9d9c.js","./rbush-8e36784a.js","./quickselect-322ec8e1.js","./diffUtils-1ac65748.js","./Collection-78126e82.js","./FeatureSetReader-2d27cc52.js","./centroid-13995b22.js","./arcgisLayerUrl-0b2b7691.js","./persistableUrlUtils-a16d0f55.js","./ogcFeatureUtils-c12e31ff.js","./geojson-e3044c2f.js","./clientSideDefaults-3539f8c8.js","./defaultsJSON-59981e75.js","./fieldType-b1002185.js","./query-922e6fbf.js","./pbfQueryUtils-72f9b45b.js","./pbf-e1a6c35b.js","./queryZScale-d9d8ef40.js","./ComputedAttributeStorage-58146ac4.js","./definitions-2d0dd0cd.js","./visualVariablesUtils-8295a400.js","./screenUtils-410d12c0.js","./Utils-b2b4cf0c.js","./number-954e4ab6.js","./enums-4b2a86a0.js","./enums-4ca4641f.js","./enums-64ab819c.js","./Texture-e79b14e7.js","./context-util-1e3c8cfc.js","./VertexElementDescriptor-2925c6af.js","./visualVariablesUtils-496ec144.js","./TimeExtent-744afd75.js","./Query-ff8c2cfb.js","./Field-f5fc9f6b.js","./Clonable-ba795b08.js","./TileStore-787dbea4.js","./Queue-3a0c055d.js","./TileKey-0750ad58.js","./StreamFeatureManager-3d9d6b32.js","./createConnection-960a5f5a.js"],import.meta.url),PointCloudWorker:()=>_(()=>import("./PointCloudWorker-ca875a10.js"),["./PointCloudWorker-ca875a10.js","./typedArrayUtil-a8b5b3e9.js","./quat-5b263584.js","./mat3f64-c6305894.js","./quatf64-7fd38d64.js","./vec3f64-2f9cef06.js","./common-c186b691.js","./vec3-a020a6f6.js","./vec4-790471c0.js","./I3SBinaryReader-3d2c2faa.js","./Error-653283ae.js","./string-cdf077e6.js","./VertexAttribute-9c5c630d.js","./vec3f32-c9aa289f.js","./projection-d7b57a6c.js","./preload-helper-41c905a7.js","./mathUtils-2519596a.js","./promiseUtils-6684e352.js","./unitUtils-47abac71.js","./jsonMap-c1f958cf.js","./Extent-69509002.js","./cast-7928d7aa.js","./ensureType-cf29afa9.js","./nextTick-3ee5a785.js","./Ellipsoid-89682c5e.js","./SimpleObservable-7dcdef1d.js","./mat4-44a0988f.js","./Polyline-bf268e7b.js","./assets-0b172f07.js","./request-d3e98716.js","./aaBoundingRect-4a760199.js","./zscale-1e1fc911.js","./PointCloudWorkerUtil-e1c8092b.js","./PointCloudUniqueValueRenderer-fed7b0dd.js","./enumeration-3c281341.js","./LegendOptions-e65e7a9c.js","./Color-a42a8267.js","./colorUtils-639f4d25.js"],import.meta.url),RasterWorker:()=>_(()=>import("./RasterWorker-48a95193.js"),["./RasterWorker-48a95193.js","./geometry-5a216427.js","./ensureType-cf29afa9.js","./string-cdf077e6.js","./typedArrayUtil-a8b5b3e9.js","./Error-653283ae.js","./Extent-69509002.js","./cast-7928d7aa.js","./nextTick-3ee5a785.js","./promiseUtils-6684e352.js","./Ellipsoid-89682c5e.js","./Polyline-bf268e7b.js","./typeUtils-eb9416d0.js","./jsonMap-c1f958cf.js","./projection-d7b57a6c.js","./preload-helper-41c905a7.js","./mathUtils-2519596a.js","./vec3-a020a6f6.js","./vec3f64-2f9cef06.js","./common-c186b691.js","./vec4-790471c0.js","./unitUtils-47abac71.js","./SimpleObservable-7dcdef1d.js","./mat4-44a0988f.js","./assets-0b172f07.js","./request-d3e98716.js","./aaBoundingRect-4a760199.js","./zscale-1e1fc911.js","./pixelUtils-c27b13a1.js","./RasterSymbolizer-e03bd61b.js","./colorUtils-82440b70.js","./Color-a42a8267.js","./colorUtils-639f4d25.js","./utils-21771c3e.js","./enumeration-3c281341.js","./colorRamps-3a8ac20b.js","./rasterProjectionHelper-967d22a7.js","./dataUtils-a4eff43b.js"],import.meta.url),SceneLayerSnappingSourceWorker:()=>_(()=>import("./SceneLayerSnappingSourceWorker-35fbc811.js"),["./SceneLayerSnappingSourceWorker-35fbc811.js","./cast-7928d7aa.js","./typedArrayUtil-a8b5b3e9.js","./string-cdf077e6.js","./Error-653283ae.js","./ensureType-cf29afa9.js","./nextTick-3ee5a785.js","./promiseUtils-6684e352.js","./vec3-a020a6f6.js","./vec3f64-2f9cef06.js","./common-c186b691.js","./lineSegment-e6f72ff2.js","./mathUtils-2519596a.js","./vec4-790471c0.js","./sphere-4f5e644f.js","./mat4-44a0988f.js","./vec4f64-e407da96.js","./byteSizeEstimations-f0cab514.js","./mat3f64-c6305894.js","./mat4f64-1e28eae0.js","./quatf64-7fd38d64.js","./vec2f64-30dc1443.js","./QueryEngineResult-665bf7fb.js","./preload-helper-41c905a7.js","./Polyline-bf268e7b.js","./Extent-69509002.js","./Ellipsoid-89682c5e.js","./quantizationUtils-33aba427.js","./jsonUtils-03c4af61.js","./ItemCache-ee28c7ba.js","./MemCache-4b976a8b.js","./WhereClause-2b5b05b2.js","./utils-30a9a7e0.js","./generateRendererUtils-a996108f.js","./jsonMap-c1f958cf.js","./colorRamps-3a8ac20b.js","./Color-a42a8267.js","./colorUtils-639f4d25.js","./enumeration-3c281341.js","./Symbol-fc4312a4.js","./utils-1f4fcfec.js","./unitUtils-47abac71.js","./projection-d7b57a6c.js","./SimpleObservable-7dcdef1d.js","./assets-0b172f07.js","./request-d3e98716.js","./aaBoundingRect-4a760199.js","./zscale-1e1fc911.js","./normalizeUtils-ee4bf39f.js","./geometry-5a216427.js","./typeUtils-eb9416d0.js","./featureConversionUtils-01cdde8a.js","./OptimizedFeature-3de538c1.js","./OptimizedFeatureSet-1d1ac4b9.js","./json-48e3ea08.js","./fieldUtils-31bfecd2.js","./arcadeOnDemand-c6d1b9f2.js","./Octree-1a841545.js","./plane-45609588.js","./Util-a48361c6.js","./edgeProcessing-3ca548e1.js","./deduplicate-b0bc48cc.js","./InterleavedLayout-5e9cf734.js","./BufferView-646ba1de.js","./vec2-2cef68de.js","./types-e1c0a5bf.js","./VertexAttribute-9c5c630d.js","./enums-64ab819c.js","./VertexElementDescriptor-2925c6af.js"],import.meta.url),SceneLayerWorker:()=>_(()=>import("./SceneLayerWorker-dd02c2a0.js").then(o=>o.S),["./SceneLayerWorker-dd02c2a0.js","./typedArrayUtil-a8b5b3e9.js","./preload-helper-41c905a7.js","./assets-0b172f07.js","./Error-653283ae.js","./string-cdf077e6.js","./request-d3e98716.js","./promiseUtils-6684e352.js","./I3SNode-42b7a44e.js","./sphere-4f5e644f.js","./mathUtils-2519596a.js","./vec3-a020a6f6.js","./vec3f64-2f9cef06.js","./common-c186b691.js","./vec4-790471c0.js","./mat4-44a0988f.js","./vec4f64-e407da96.js","./nextTick-3ee5a785.js","./byteSizeEstimations-f0cab514.js","./mat3f64-c6305894.js","./mat4f64-1e28eae0.js","./quatf64-7fd38d64.js","./vec2f64-30dc1443.js"],import.meta.url),WFSSourceWorker:()=>_(()=>import("./WFSSourceWorker-5d203a56.js"),["./WFSSourceWorker-5d203a56.js","./asyncUtils-62e8a185.js","./cast-7928d7aa.js","./typedArrayUtil-a8b5b3e9.js","./string-cdf077e6.js","./Error-653283ae.js","./ensureType-cf29afa9.js","./nextTick-3ee5a785.js","./promiseUtils-6684e352.js","./Extent-69509002.js","./Ellipsoid-89682c5e.js","./featureConversionUtils-01cdde8a.js","./jsonUtils-03c4af61.js","./Polyline-bf268e7b.js","./OptimizedFeature-3de538c1.js","./OptimizedFeatureSet-1d1ac4b9.js","./FeatureStore-b1ba4c29.js","./Evented-515b9d9c.js","./aaBoundingBox-fc742a4e.js","./aaBoundingRect-4a760199.js","./mathUtils-2519596a.js","./vec3-a020a6f6.js","./vec3f64-2f9cef06.js","./common-c186b691.js","./vec4-790471c0.js","./PooledRBush-26ba8fba.js","./quickselect-322ec8e1.js","./optimizedFeatureQueryEngineAdapter-4b9881eb.js","./centroid-13995b22.js","./utils-1f4fcfec.js","./preload-helper-41c905a7.js","./jsonMap-c1f958cf.js","./unitUtils-47abac71.js","./projection-d7b57a6c.js","./SimpleObservable-7dcdef1d.js","./mat4-44a0988f.js","./assets-0b172f07.js","./request-d3e98716.js","./zscale-1e1fc911.js","./normalizeUtils-ee4bf39f.js","./geometry-5a216427.js","./typeUtils-eb9416d0.js","./json-48e3ea08.js","./QueryEngine-a5c074c3.js","./MemCache-4b976a8b.js","./QueryEngineResult-665bf7fb.js","./quantizationUtils-33aba427.js","./ItemCache-ee28c7ba.js","./WhereClause-2b5b05b2.js","./utils-30a9a7e0.js","./generateRendererUtils-a996108f.js","./colorRamps-3a8ac20b.js","./Color-a42a8267.js","./colorUtils-639f4d25.js","./enumeration-3c281341.js","./Symbol-fc4312a4.js","./fieldUtils-31bfecd2.js","./arcadeOnDemand-c6d1b9f2.js","./QueryEngineCapabilities-42e44ded.js","./timeSupport-b43dc94c.js","./FieldsIndex-aa6dd3fa.js","./Scheduler-8433672d.js","./reactiveUtils-f41a4e00.js","./geojson-e3044c2f.js","./sourceUtils-17bbc359.js","./wfsUtils-2489b407.js","./xmlUtils-444cb4c0.js","./Field-f5fc9f6b.js","./fieldType-b1002185.js"],import.meta.url),WorkerTileHandler:()=>_(()=>import("./WorkerTileHandler-a2c03c54.js"),["./WorkerTileHandler-a2c03c54.js","./promiseUtils-6684e352.js","./string-cdf077e6.js","./typedArrayUtil-a8b5b3e9.js","./Error-653283ae.js","./enums-0fc02184.js","./GeometryUtils-eebff0a0.js","./Rect-ea14f53a.js","./config-1337d16e.js","./StyleDefinition-7d58136b.js","./enums-4b2a86a0.js","./Geometry-daada628.js","./pbf-e1a6c35b.js","./ensureType-cf29afa9.js","./TileClipper-5dae42c4.js","./preload-helper-41c905a7.js","./assets-0b172f07.js","./request-d3e98716.js","./definitions-2d0dd0cd.js","./GeometryUtils-c093d234.js","./StyleRepository-14d163c2.js","./enums-64ab819c.js","./VertexElementDescriptor-2925c6af.js","./Color-a42a8267.js","./colorUtils-639f4d25.js","./mathUtils-2519596a.js","./vec3-a020a6f6.js","./vec3f64-2f9cef06.js","./common-c186b691.js","./vec4-790471c0.js","./colorUtils-82440b70.js","./earcut-58237617.js","./BidiEngine-836b7ef6.js"],import.meta.url)},{CLOSE:k,ABORT:y,INVOKE:I,RESPONSE:d,OPEN_PORT:S,ON:U}=h,G=2;class q{constructor(e){this._timer=null,this._cancelledJobIds=new Set,this._invokeMessages=[],this._invoke=e,this._timer=null,this._process=this._process.bind(this)}push(e){e.type===h.ABORT?this._cancelledJobIds.add(e.jobId):(this._invokeMessages.push(e),this._timer===null&&(this._timer=setTimeout(this._process,0)))}clear(){this._invokeMessages.length=0,this._cancelledJobIds.clear(),this._timer=null}_process(){this._timer=null;for(const e of this._invokeMessages)this._cancelledJobIds.has(e.jobId)||this._invoke(e);this._cancelledJobIds.clear(),this._invokeMessages.length=0}}class u{constructor(e,t,s){this._port=e,this._getNextJob=s,this._outJobs=new Map,this._inJobs=new Map,this._invokeQueue=new q(r=>this._onInvokeMessage(r)),this._client=t.client,this._onMessage=this._onMessage.bind(this),this._channel=t.channel,this._schedule=t.schedule,this._port.addEventListener("message",this._onMessage),this._port.start()}static connect(e){const t=new MessageChannel;let s;s=typeof e=="function"?new e:"default"in e&&typeof e.default=="function"?new e.default:e;const r=new u(t.port1,{channel:t,client:s},()=>null);return typeof s=="object"&&"remoteClient"in s&&(s.remoteClient=r),u.clients.set(r,s),t.port2}static loadWorker(e){const t=z[e];return t?t():Promise.resolve(null)}close(){this._post({type:k}),this._close()}isBusy(){return this._outJobs.size>0}invoke(e,t,s){const r=s&&s.signal,n=s&&s.transferList;if(!this._port)return Promise.reject(new v("worker:port-closed",`Cannot call invoke('${e}'), port is closed`,{methodName:e,data:t}));const i=K();return new Promise((l,a)=>{if(J(r))return this._processWork(),void a(f());const p=w(r,()=>{const c=this._outJobs.get(i);c&&(this._outJobs.delete(i),this._processWork(),E(c.abortHandle),this._post({type:y,jobId:i}),a(f()))}),m={resolve:l,reject:a,abortHandle:p,debugInfo:e};this._outJobs.set(i,m),this._post({type:I,jobId:i,methodName:e,abortable:r!=null},t,n)})}on(e,t){const s=new MessageChannel;function r(n){t(n.data)}return this._port.postMessage({type:h.ON,eventType:e,port:s.port2},[s.port2]),s.port1.addEventListener("message",r),s.port1.start(),{remove(){s.port1.postMessage({type:h.CLOSE}),s.port1.close(),s.port1.removeEventListener("message",r)}}}jobAdded(){this._processWork()}openPort(){const e=new MessageChannel;return this._post({type:S,port:e.port2}),e.port1}_processWork(){if(this._outJobs.size>=G)return;const e=this._getNextJob();if(!e)return;const{methodName:t,data:s,invokeOptions:r,deferred:n}=e;this.invoke(t,s,r).then(i=>n.resolve(i)).catch(i=>n.reject(i))}_close(){this._channel&&(this._channel=void 0),this._port.removeEventListener("message",this._onMessage),this._port.close(),this._outJobs.forEach(e=>{E(e.abortHandle),e.reject(f(`Worker closing, aborting job calling '${e.debugInfo}'`))}),this._inJobs.clear(),this._outJobs.clear(),this._invokeQueue.clear(),this._port=this._client=this._schedule=null}_onMessage(e){$(this._schedule)?this._schedule(()=>this._processMessage(e)):this._processMessage(e)}_processMessage(e){const t=O(e);if(t)switch(t.type){case d:this._onResponseMessage(t);break;case I:this._invokeQueue.push(t);break;case y:this._onAbortMessage(t);break;case k:this._onCloseMessage();break;case S:this._onOpenPortMessage(t);break;case U:this._onOnMessage(t)}}_onAbortMessage(e){const t=this._inJobs,s=e.jobId,r=t.get(s);this._invokeQueue.push(e),r&&(r.controller&&r.controller.abort(),t.delete(s))}_onCloseMessage(){const e=this._client;this._close(),e&&"destroy"in e&&u.clients.get(this)===e&&e.destroy(),u.clients.delete(this),e&&e.remoteClient&&(e.remoteClient=null)}_onInvokeMessage(e){const{methodName:t,jobId:s,data:r,abortable:n}=e,i=n?new AbortController:null,l=this._inJobs;let a,p=this._client,m=p[t];try{if(!m&&t&&t.includes(".")){const c=t.split(".");for(let g=0;g<c.length-1;g++)p=p[c[g]],m=p[c[g+1]]}if(typeof m!="function")throw new TypeError(`${t} is not a function`);a=m.call(p,r,{client:this,signal:i?i.signal:null})}catch(c){return void this._post({type:d,jobId:s,error:b(c)})}A(a)?(l.set(s,{controller:i,promise:a}),a.then(c=>{l.has(s)&&(l.delete(s),this._post({type:d,jobId:s},c))},c=>{l.has(s)&&(l.delete(s),T(c)||this._post({type:d,jobId:s,error:b(c||{message:`Error encountered at method ${t}`})}))})):this._post({type:d,jobId:s},a)}_onOpenPortMessage(e){new u(e.port,{client:this._client},()=>null)}_onOnMessage(e){const{port:t}=e,s=this._client.on(e.eventType,n=>{t.postMessage(n)}),r=j(e.port,"message",n=>{var i;((i=O(n))==null?void 0:i.type)===h.CLOSE&&(r.remove(),s.remove(),t.close())})}_onResponseMessage(e){const{jobId:t,error:s,data:r}=e,n=this._outJobs;if(!n.has(t))return;const i=n.get(t);n.delete(t),this._processWork(),E(i.abortHandle),s?i.reject(v.fromJSON(JSON.parse(s))):i.resolve(r)}_post(e,t,s){return M(this._port,e,t,s)}}u.kernelInfo={revision:H,version:V,buildDate:B},u.clients=new Map;class ie{constructor(){this._inUseClients=new Array,this._clients=new Array,this._clientPromises=new Array,this._ongoingJobsQueue=new D}destroy(){this.close()}get closed(){return!this._clients||!this._clients.length}open(e,t){return new Promise((s,r)=>{let n=!0;const i=l=>{C(t.signal),n&&(n=!1,l())};this._clients.length=e.length,this._clientPromises.length=e.length,this._inUseClients.length=e.length;for(let l=0;l<e.length;++l){const a=e[l];A(a)?this._clientPromises[l]=a.then(p=>(this._clients[l]=new u(p,t,()=>this._ongoingJobsQueue.pop()??null),i(s),this._clients[l]),()=>(i(r),null)):(this._clients[l]=new u(a,t,()=>this._ongoingJobsQueue.pop()??null),this._clientPromises[l]=Promise.resolve(this._clients[l]),i(s))}})}broadcast(e,t,s){const r=new Array(this._clientPromises.length);for(let n=0;n<this._clientPromises.length;++n){const i=this._clientPromises[n];r[n]=i.then(l=>l==null?void 0:l.invoke(e,t,s))}return r}close(){let e;for(;e=this._ongoingJobsQueue.pop();)e.deferred.reject(f(`Worker closing, aborting job calling '${e.methodName}'`));for(const t of this._clientPromises)t.then(s=>s==null?void 0:s.close());this._clients.length=0,this._clientPromises.length=0}invoke(e,t,s){let r;Array.isArray(s)?(R.getLogger("esri.core.workers.Connection").warn("invoke()","The transferList parameter is deprecated, use the options object instead"),r={transferList:s}):r=s;const n=W();this._ongoingJobsQueue.push({methodName:e,data:t,invokeOptions:r,deferred:n});for(let i=0;i<this._clientPromises.length;i++){const l=this._clients[i];l?l.jobAdded():this._clientPromises[i].then(a=>a==null?void 0:a.jobAdded())}return n.promise}on(e,t){return Promise.all(this._clientPromises).then(()=>L(this._clients.map(s=>s.on(e,t))))}openPorts(){return new Promise(e=>{const t=new Array(this._clientPromises.length);let s=t.length;for(let r=0;r<this._clientPromises.length;++r)this._clientPromises[r].then(n=>{n&&(t[r]=n.openPort()),--s==0&&e(t)})})}get test(){return{numClients:this._clients.length}}}export{H as a,B as e,O as f,ie as h,M as o,K as r,b as s,h as t,u as w};