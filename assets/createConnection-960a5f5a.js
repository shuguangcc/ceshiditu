import{_ as R}from"./preload-helper-41c905a7.js";import{e as p,y as _,n as b}from"./cast-7928d7aa.js";import"./geometry-5a216427.js";import{B as C,U as x}from"./request-d3e98716.js";import{a,s as c}from"./Error-653283ae.js";import{r as h,t as f,i as k,q as L}from"./typedArrayUtil-a8b5b3e9.js";import{U as E,D as F}from"./promiseUtils-6684e352.js";import"./ensureType-cf29afa9.js";import"./string-cdf077e6.js";import{o as O}from"./zscale-1e1fc911.js";import{n as N}from"./Evented-515b9d9c.js";import{c as v}from"./query-922e6fbf.js";import{x as q}from"./Query-ff8c2cfb.js";import{v as $}from"./jsonUtils-03c4af61.js";import{k as P}from"./Extent-69509002.js";import"./nextTick-3ee5a785.js";import"./Polyline-bf268e7b.js";import"./typeUtils-eb9416d0.js";import"./jsonMap-c1f958cf.js";import"./unitUtils-47abac71.js";import"./Ellipsoid-89682c5e.js";import"./normalizeUtils-ee4bf39f.js";import"./pbfQueryUtils-72f9b45b.js";import"./pbf-e1a6c35b.js";import"./OptimizedFeature-3de538c1.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-d9d8ef40.js";import"./TimeExtent-744afd75.js";import"./enumeration-3c281341.js";import"./Field-f5fc9f6b.js";import"./fieldType-b1002185.js";import"./Clonable-ba795b08.js";let y=class extends N.EventedAccessor{get connectionError(){return this.errorString?new a("stream-connection",this.errorString):null}onFeature(e){this.emit("data-received",e)}};p([_({readOnly:!0})],y.prototype,"connectionError",null),y=p([b("esri.layers.support.StreamConnection")],y);const j=y;var g;(function(e){e[e.CONNECTING=0]="CONNECTING",e[e.OPEN=1]="OPEN",e[e.CLOSING=2]="CLOSING",e[e.CLOSED=3]="CLOSED"})(g||(g={}));let m=class extends j{constructor(e){super(),this.errorString=null;const{geometryType:t,spatialReference:r,sourceSpatialReference:o}=e;this._config=e,this._featureZScaler=O(t,o,r),this._open()}async _open(){await this._tryCreateWebSocket(),this.destroyed||await this._handshake()}destroy(){h(this._websocket)&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null}get connectionStatus(){if(f(this._websocket))return"disconnected";switch(this._websocket.readyState){case g.CONNECTING:case g.OPEN:return"connected";case g.CLOSING:case g.CLOSED:return"disconnected"}}async _tryCreateWebSocket(e=this._config.source.path,t=1e3,r=0){try{if(this.destroyed)return;const o=C(e,this._config.customParameters);this._websocket=await this._createWebSocket(o),this.notifyChange("connectionStatus")}catch(o){const s=t/1e3;return this._config.maxReconnectionAttempts&&r>=this._config.maxReconnectionAttempts?(c.getLogger(this.declaredClass).error(new a("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void this.destroy()):(c.getLogger(this.declaredClass).error(new a("websocket-connection",`Failed to connect. Attempting to reconnect in ${s}s`,o)),await E(t),this._tryCreateWebSocket(e,Math.min(1.5*t,1e3*this._config.maxReconnectionInterval),r+1))}}_createWebSocket(e){return new Promise((t,r)=>{const o=new WebSocket(e);o.onopen=()=>{if(o.onopen=null,this.destroyed)return o.onclose=null,void o.close();o.onclose=s=>this._onClose(s),o.onerror=s=>this._onError(s),o.onmessage=s=>this._onMessage(s),t(o)},o.onclose=s=>{o.onopen=o.onclose=null,r(s)}})}async _handshake(e=1e4){const t=this._websocket;if(f(t))return;const r=F(),o=t.onmessage,{filter:s,outFields:n,spatialReference:d}=this._config;return r.timeout(e),t.onmessage=u=>{var i;let l=null;try{l=JSON.parse(u.data)}catch{}l&&typeof l=="object"||(c.getLogger(this.declaredClass).error(new a("websocket-connection","Protocol violation. Handshake failed - malformed message",u.data)),r.reject(),this.destroy()),((i=l.spatialReference)==null?void 0:i.wkid)!==(d==null?void 0:d.wkid)&&(c.getLogger(this.declaredClass).error(new a("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${d.wkid}`,u.data)),r.reject(),this.destroy()),l.format!=="json"&&(c.getLogger(this.declaredClass).error(new a("websocket-connection","Protocol violation. Handshake failed - format is not set",u.data)),r.reject(),this.destroy()),s&&l.filter!==s&&c.getLogger(this.declaredClass).error(new a("websocket-connection","Tried to set filter, but server doesn't support it")),n&&l.outFields!==n&&c.getLogger(this.declaredClass).error(new a("websocket-connection","Tried to set outFields, but server doesn't support it")),t.onmessage=o,r.resolve()},t.send(JSON.stringify({filter:s,outFields:n,format:"json",spatialReference:{wkid:d.wkid}})),r.promise}_onMessage(e){try{const t=JSON.parse(e.data);if(t.type!=="featureResult")throw new a("websocket-connection","Protocol violation - Expected to find message of type 'featureResult'",t);for(const r of t.features)h(this._featureZScaler)&&this._featureZScaler(r.geometry),this.onFeature(r)}catch(t){return c.getLogger(this.declaredClass).error(new a("websocket-connection","Failed to parse message",t)),void this.destroy()}}_onError(e){const t="Encountered an error over WebSocket connection";this._set("errorString",t),c.getLogger(this.declaredClass).error("websocket-connection",t)}_onClose(e){this._websocket=null,this.notifyChange("connectionStatus"),e.code!==1e3&&c.getLogger(this.declaredClass).error("websocket-connection",`WebSocket closed unexpectedly with error code ${e.code}`),this.destroyed||this._open()}};p([_()],m.prototype,"connectionStatus",null),p([_()],m.prototype,"errorString",void 0),m=p([b("esri.layers.graphics.sources.connections.WebSocketConnection")],m);const W=1e4,D={maxQueryDepth:5,maxRecordCountFactor:3};let w=class extends m{constructor(e){super({...D,...e})}async _open(){const e=await this._fetchServiceDefinition(this._config.source);e.timeInfo.trackIdField||c.getLogger(this.declaredClass).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const t=this._fetchWebSocketUrl(e.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),await this._buddyServicesQuery,await this._tryCreateWebSocket(t);const{filter:r,outFields:o}=this._config;this.destroyed||this._setFilter(r,o)}_onMessage(e){let t;try{t=this._enrich(JSON.parse(e.data)),h(this._featureZScaler)&&this._featureZScaler(t.geometry)}catch(r){return void c.getLogger(this.declaredClass).error(new a("geoevent-connection","Failed to parse message",r))}this.onFeature(t)}async _fetchServiceDefinition(e){const t={f:"json",...this._config.customParameters},r=x(e.path,{query:t,responseType:"json"}),o=(await r).data;return this._serviceDefinition=o,o}_fetchWebSocketUrl(e,t){const r=e[0],{urls:o,token:s}=r,n=this._inferWebSocketBaseUrl(o);return C(`${n}/subscribe`,{outSR:""+t.wkid,token:s})}_inferWebSocketBaseUrl(e){if(e.length===1)return e[0];for(const t of e)if(t.includes("wss"))return t;return c.getLogger(this.declaredClass).error(new a("geoevent-connection","Unable to infer WebSocket url",e)),null}async _setFilter(e,t){const r=this._websocket;if(f(r)||f(e)&&f(t))return;const o=JSON.stringify({filter:this._serializeFilter(e,t)});let s=!1;const n=F(),d=()=>{s||(this.destroyed||this._websocket!==r||c.getLogger(this.declaredClass).error(new a("geoevent-connection","Server timed out when setting filter")),n.reject())},u=l=>{const i=JSON.parse(l.data);i.filter&&(i.error&&(c.getLogger(this.declaredClass).error(new a("geoevent-connection","Failed to set service filter",i.error)),this._set("errorString",`Could not set service filter - ${i.error}`),n.reject(i.error)),r.onmessage=this._onMessage.bind(this),s=!0,n.resolve())};return r.onmessage=u,r.send(o),setTimeout(d,W),n.promise}_serializeFilter(e,t){const r={};if(f(e)&&f(t))return r;if(h(e)&&e.geometry)try{const o=$(e.geometry);if(o.type!=="extent")throw new a(`Expected extent but found type ${o.type}`);r.geometry=JSON.stringify(o.shiftCentralMeridian())}catch(o){c.getLogger(this.declaredClass).error(new a("geoevent-connection","Encountered an error when setting connection geometryDefinition",o))}return h(e)&&e.where&&e.where!=="1 = 1"&&(r.where=e.where),h(t)&&(r.outFields=t.join(",")),r}_enrich(e){if(!this._relatedFeatures)return e;const t=this._serviceDefinition.relatedFeatures.joinField,r=e.attributes[t];if(!this._relatedFeatures.has(r))return c.getLogger(this.declaredClass).warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:o,geometry:s}=this._relatedFeatures.get(r);for(const n in o)e.attributes[n]=o[n];return s&&(e.geometry=s),e.geometry||e.centroid||c.getLogger(this.declaredClass).error(new a("geoevent-connection","Found malformed feature - no geometry found",e)),e}async _queryBuddyServices(){try{const{relatedFeatures:e,keepLatestArchive:t}=this._serviceDefinition,r=this._queryRelatedFeatures(e),o=this._queryArchive(t);await r;const s=await o;if(!s)return;for(const n of s.features)this.onFeature(this._enrich(n))}catch(e){c.getLogger(this.declaredClass).error(new a("geoevent-connection","Encountered an error when querying buddy services",{error:e}))}}async _queryRelatedFeatures(e){if(!e)return;const t=await this._queryBuddy(e.featuresUrl);this._addRelatedFeatures(t)}async _queryArchive(e){if(e)return this._queryBuddy(e.featuresUrl)}async _queryBuddy(e){const t=new(await R(()=>import("./FeatureLayer-a9f3e6ec.js"),["./FeatureLayer-a9f3e6ec.js","./preload-helper-41c905a7.js","./cast-7928d7aa.js","./typedArrayUtil-a8b5b3e9.js","./string-cdf077e6.js","./Error-653283ae.js","./ensureType-cf29afa9.js","./nextTick-3ee5a785.js","./promiseUtils-6684e352.js","./PopupTemplate-6eb885db.js","./Clonable-ba795b08.js","./Collection-78126e82.js","./Evented-515b9d9c.js","./SimpleObservable-7dcdef1d.js","./Extent-69509002.js","./Ellipsoid-89682c5e.js","./fieldUtils-31bfecd2.js","./arcadeOnDemand-c6d1b9f2.js","./geometry-5a216427.js","./Polyline-bf268e7b.js","./typeUtils-eb9416d0.js","./jsonMap-c1f958cf.js","./enumeration-3c281341.js","./number-347a3a44.js","./locale-30120714.js","./Identifiable-aa6d459d.js","./UniqueValueRenderer-103ec66d.js","./symbols-fa594797.js","./CIMSymbol-1379245a.js","./Symbol-fc4312a4.js","./Color-a42a8267.js","./colorUtils-639f4d25.js","./mathUtils-2519596a.js","./vec3-a020a6f6.js","./vec3f64-2f9cef06.js","./common-c186b691.js","./vec4-790471c0.js","./screenUtils-410d12c0.js","./opacityUtils-243aae26.js","./symbolLayerUtils3D-1f8d4478.js","./aaBoundingBox-fc742a4e.js","./aaBoundingRect-4a760199.js","./request-d3e98716.js","./persistableUrlUtils-a16d0f55.js","./Symbol3DAnchorPosition2D-c0f4a14d.js","./collectionUtils-3831b7c4.js","./Portal-8b65c9c4.js","./Loadable-48bc1293.js","./Promise-dfdee8ba.js","./PortalGroup-bfe93c76.js","./PortalUser-4c8e1adc.js","./LegendOptions-e65e7a9c.js","./reactiveUtils-f41a4e00.js","./diffUtils-1ac65748.js","./colorRamps-3a8ac20b.js","./sizeVariableUtils-d4870b0d.js","./visualVariableUtils-c59ab38d.js","./Graphic-b46e2684.js","./jsonUtils-03c4af61.js","./compilerUtils-034cacb8.js","./lengthUtils-d2d33f94.js","./unitUtils-47abac71.js","./jsonUtils-d7db3dc7.js","./styleUtils-4adfed9e.js","./jsonUtils-c56f8821.js","./DictionaryLoader-2cf5144e.js","./LRUCache-14115d91.js","./MemCache-4b976a8b.js","./deprecate-b9088bd3.js","./heatmapUtils-84e8c43b.js","./vec4f64-e407da96.js","./MultiOriginJSONSupport-27362d57.js","./LayerFloorInfo-2cd5e8ae.js","./FeatureLayerBase-aebdf2da.js","./Field-f5fc9f6b.js","./fieldType-b1002185.js","./HeightModelInfo-22ad72d7.js","./arcgisLayerUrl-0b2b7691.js","./OperationalLayer-24e6fa34.js","./TimeExtent-744afd75.js","./ElevationInfo-ce9cacc2.js","./RelationshipQuery-db5fcd0c.js","./Query-ff8c2cfb.js","./Layer-f0696768.js","./HandleOwner-e1406413.js","./workers-898a7c4c.js","./Connection-a681777e.js","./Queue-3a0c055d.js","./assets-0b172f07.js","./intl-f1e98361.js","./messages-be07754e.js","./editsZScale-2015e7db.js","./queryZScale-d9d8ef40.js","./zscale-1e1fc911.js","./FeatureSet-0573546e.js","./APIKeyMixin-34d76a46.js","./ArcGISService-ea748edf.js","./BlendLayer-d8293c8d.js","./parser-2b40deea.js","./mat4f32-77b3d8ac.js","./mat4-44a0988f.js","./CustomParametersMixin-807d2055.js","./EditBusLayer-40671d1a.js","./FeatureReductionLayer-4077b2ae.js","./labelingInfo-5c3a46f6.js","./labelUtils-a194a22a.js","./defaultsJSON-59981e75.js","./OrderedLayer-e7edf19c.js","./PortalLayer-f1a64f99.js","./asyncUtils-62e8a185.js","./PortalItem-aa42c739.js","./RefreshableLayer-1c078c47.js","./ScaleRangeLayer-271178b7.js","./TemporalLayer-39c07299.js","./TimeInfo-c89d0ef4.js","./FeatureTemplate-746d033e.js","./FeatureType-c83c5f49.js","./fieldProperties-7547b373.js","./FieldsIndex-aa6dd3fa.js","./versionUtils-92993d41.js","./styleUtils-da81b13f.js","./TopFeaturesQuery-785f5453.js","./popupUtils-07fe66a7.js"],import.meta.url)).default({url:e}),{capabilities:r}=await t.load(),o=r.query.supportsMaxRecordCountFactor,s=r.query.supportsPagination,n=r.query.supportsCentroid,d=this._config.maxRecordCountFactor,u=t.capabilities.query.maxRecordCount,l=o?u*d:u,i=new q;if(i.outFields=k(this._config.outFields,["*"]),i.where=k(L(this._config.filter,"where"),"1=1"),i.returnGeometry=!0,i.returnExceededLimitFeatures=!0,i.outSpatialReference=P.fromJSON(this._config.spatialReference),n&&(i.returnCentroid=!0),o&&(i.maxRecordCountFactor=d),s)return i.num=l,t.destroy(),this._queryPages(e,i);const S=await v(e,i,this._config.sourceSpatialReference);return t.destroy(),S.data}async _queryPages(e,t,r=[],o=0){t.start=h(t.num)?o*t.num:null;const{data:s}=await v(e,t,this._config.sourceSpatialReference);return s.exceededTransferLimit&&o<this._config.maxQueryDepth?(s.features.forEach(n=>r.push(n)),this._queryPages(e,t,r,o+1)):(r.forEach(n=>s.features.push(n)),s)}_addRelatedFeatures(e){const t=new Map,r=e.features,o=this._serviceDefinition.relatedFeatures.joinField;for(const s of r){const n=s.attributes[o];t.set(n,s)}this._relatedFeatures=t}};w=p([b("esri.layers.graphics.sources.connections.GeoEventConnection")],w);const T=w;function ye(e,t,r,o,s,n,d,u){const l=e.path.indexOf("wss://")===0||e.path.indexOf("ws://")===0,i={source:e,sourceSpatialReference:t,spatialReference:r,geometryType:o,filter:s,maxReconnectionAttempts:n,maxReconnectionInterval:d,customParameters:u};return l?new m(i):new T(i)}export{ye as createConnection};