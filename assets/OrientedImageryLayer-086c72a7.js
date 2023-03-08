import{e as t,y as r,n as i}from"./cast-7928d7aa.js";import{a as m}from"./Error-653283ae.js";import"./typedArrayUtil-a8b5b3e9.js";import"./ensureType-cf29afa9.js";import e from"./FeatureLayer-a9f3e6ec.js";import"./string-cdf077e6.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-6684e352.js";import"./preload-helper-41c905a7.js";import"./PopupTemplate-6eb885db.js";import"./Clonable-ba795b08.js";import"./Collection-78126e82.js";import"./Evented-515b9d9c.js";import"./SimpleObservable-7dcdef1d.js";import"./Extent-69509002.js";import"./Ellipsoid-89682c5e.js";import"./fieldUtils-31bfecd2.js";import"./arcadeOnDemand-c6d1b9f2.js";import"./geometry-5a216427.js";import"./Polyline-bf268e7b.js";import"./typeUtils-eb9416d0.js";import"./jsonMap-c1f958cf.js";import"./enumeration-3c281341.js";import"./number-347a3a44.js";import"./locale-30120714.js";import"./Identifiable-aa6d459d.js";import"./UniqueValueRenderer-103ec66d.js";import"./symbols-fa594797.js";import"./CIMSymbol-1379245a.js";import"./Symbol-fc4312a4.js";import"./Color-a42a8267.js";import"./colorUtils-639f4d25.js";import"./mathUtils-2519596a.js";import"./vec3-a020a6f6.js";import"./vec3f64-2f9cef06.js";import"./common-c186b691.js";import"./vec4-790471c0.js";import"./screenUtils-410d12c0.js";import"./opacityUtils-243aae26.js";import"./symbolLayerUtils3D-1f8d4478.js";import"./aaBoundingBox-fc742a4e.js";import"./aaBoundingRect-4a760199.js";import"./request-d3e98716.js";import"./persistableUrlUtils-a16d0f55.js";import"./Symbol3DAnchorPosition2D-c0f4a14d.js";import"./collectionUtils-3831b7c4.js";import"./Portal-8b65c9c4.js";import"./Loadable-48bc1293.js";import"./Promise-dfdee8ba.js";import"./PortalGroup-bfe93c76.js";import"./PortalUser-4c8e1adc.js";import"./LegendOptions-e65e7a9c.js";import"./reactiveUtils-f41a4e00.js";import"./diffUtils-1ac65748.js";import"./colorRamps-3a8ac20b.js";import"./sizeVariableUtils-d4870b0d.js";import"./visualVariableUtils-c59ab38d.js";import"./Graphic-b46e2684.js";import"./jsonUtils-03c4af61.js";import"./compilerUtils-034cacb8.js";import"./lengthUtils-d2d33f94.js";import"./unitUtils-47abac71.js";import"./jsonUtils-d7db3dc7.js";import"./styleUtils-4adfed9e.js";import"./jsonUtils-c56f8821.js";import"./DictionaryLoader-2cf5144e.js";import"./LRUCache-14115d91.js";import"./MemCache-4b976a8b.js";import"./deprecate-b9088bd3.js";import"./heatmapUtils-84e8c43b.js";import"./vec4f64-e407da96.js";import"./MultiOriginJSONSupport-27362d57.js";import"./LayerFloorInfo-2cd5e8ae.js";import"./FeatureLayerBase-aebdf2da.js";import"./Field-f5fc9f6b.js";import"./fieldType-b1002185.js";import"./HeightModelInfo-22ad72d7.js";import"./arcgisLayerUrl-0b2b7691.js";import"./OperationalLayer-24e6fa34.js";import"./TimeExtent-744afd75.js";import"./ElevationInfo-ce9cacc2.js";import"./RelationshipQuery-db5fcd0c.js";import"./Query-ff8c2cfb.js";import"./Layer-f0696768.js";import"./HandleOwner-e1406413.js";import"./workers-898a7c4c.js";import"./Connection-a681777e.js";import"./Queue-3a0c055d.js";import"./assets-0b172f07.js";import"./intl-f1e98361.js";import"./messages-be07754e.js";import"./editsZScale-2015e7db.js";import"./queryZScale-d9d8ef40.js";import"./zscale-1e1fc911.js";import"./FeatureSet-0573546e.js";import"./APIKeyMixin-34d76a46.js";import"./ArcGISService-ea748edf.js";import"./BlendLayer-d8293c8d.js";import"./parser-2b40deea.js";import"./mat4f32-77b3d8ac.js";import"./mat4-44a0988f.js";import"./CustomParametersMixin-807d2055.js";import"./EditBusLayer-40671d1a.js";import"./FeatureReductionLayer-4077b2ae.js";import"./labelingInfo-5c3a46f6.js";import"./labelUtils-a194a22a.js";import"./defaultsJSON-59981e75.js";import"./OrderedLayer-e7edf19c.js";import"./PortalLayer-f1a64f99.js";import"./asyncUtils-62e8a185.js";import"./PortalItem-aa42c739.js";import"./RefreshableLayer-1c078c47.js";import"./ScaleRangeLayer-271178b7.js";import"./TemporalLayer-39c07299.js";import"./TimeInfo-c89d0ef4.js";import"./FeatureTemplate-746d033e.js";import"./FeatureType-c83c5f49.js";import"./fieldProperties-7547b373.js";import"./FieldsIndex-aa6dd3fa.js";import"./versionUtils-92993d41.js";import"./styleUtils-da81b13f.js";import"./TopFeaturesQuery-785f5453.js";import"./popupUtils-07fe66a7.js";let o=class extends e{constructor(p){super(p),this.geometryType="point",this.type="oriented-imagery",this.operationalLayerType="OrientedImageryLayer"}_verifySource(){if(super._verifySource(),this.geometryType!=="point")throw new m("feature-layer:invalid-geometry-type","OrientedImageryLayer only supports point geometry type")}};t([r()],o.prototype,"cameraProperties",void 0),t([r()],o.prototype,"coverage",void 0),t([r()],o.prototype,"coveragePercent",void 0),t([r()],o.prototype,"defaultSearchLocation",void 0),t([r()],o.prototype,"depthImage",void 0),t([r()],o.prototype,"digitalElevationModel",void 0),t([r()],o.prototype,"geometryType",void 0),t([r()],o.prototype,"imageProperties",void 0),t([r()],o.prototype,"maximumDistance",void 0),t([r({json:{read:!1},value:"oriented-imagery",readOnly:!0})],o.prototype,"type",void 0),t([r({type:["OrientedImageryLayer"]})],o.prototype,"operationalLayerType",void 0),o=t([i("esri.layers.OrientedImageryLayer")],o);const xt=o;export{xt as default};