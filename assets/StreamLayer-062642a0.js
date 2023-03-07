import{N as t,O as s,a0 as I,bb as k,j4 as F,j5 as P,iA as _,j6 as D,iB as O,iC as E,f9 as C,fa as U,fb as N,fc as A,j3 as L,Y as S,s as p,r as J,au as G,j7 as f,kl as M,a3 as V,jI as q,aJ as z,_ as W,hI as m,cl as H,iG as Y,aR as B,U as Q,g_ as Z,j8 as K,ag as X,gS as ee,S as te,j9 as ie,ja as se,jb as re,jc as oe,hl as g,kr as ne,ks as ae,iI as le,aH as pe,je as de,iH as ce,bd as v,jf as ye,ff as ue,kt as me,ku as he,iJ as fe,eA as ge}from"./index-4acc98f2.js";var h;let l=h=class extends k{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new h({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};t([s({type:Number,json:{write:!0}})],l.prototype,"age",void 0),t([s({type:Number,json:{write:!0}})],l.prototype,"ageReceived",void 0),t([s({type:Number,json:{write:!0}})],l.prototype,"displayCount",void 0),t([s({type:Number,json:{write:!0}})],l.prototype,"maxObservations",void 0),l=h=t([I("esri.layers.support.PurgeOptions")],l);const j=l,b=fe();function w(e,r){return new p("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${r}`,{layer:e})}let i=class extends F(P(_(D(O(E(C(U(N(A(L(ge))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new j,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=S.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new p("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const r=J(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(G).then(()=>this._fetchService(r))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){f(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,r,o){const a=(r=r.layerDefinition||r).drawingInfo&&r.drawingInfo.renderer||void 0;if(a){const n=M(a,r,o)||void 0;return n||V.getLogger(this.declaredClass).error("Failed to create renderer",{rendererDefinition:r.drawingInfo.renderer,layer:this,context:o}),n}if(r.defaultSymbol)return r.types&&r.types.length?new q({defaultSymbol:u(r.defaultSymbol,r,o),field:r.typeIdField,uniqueValueInfos:r.types.map(n=>({id:n.id,symbol:u(n.symbol,n,o)}))}):new z({symbol:u(r.defaultSymbol,r,o)})}async connect(e){const[{createConnection:r}]=await Promise.all([W(()=>import("./createConnection-127be49e.js"),["./createConnection-127be49e.js","./index-4acc98f2.js","./index-bb38b130.css"],import.meta.url),this.load()]),o=this.geometryType?m.toJSON(this.geometryType):null,{customParameters:a=null,definitionExpression:n=null,geometryDefinition:c=null,maxReconnectionAttempts:x=0,maxReconnectionInterval:$=20,spatialReference:R=this.spatialReference}=e||this.createConnectionParameters(),d=r(this.parsedUrl,this.spatialReference,R,o,{geometry:c,where:n},x,$,a??void 0),T=H([this.on("send-message-to-socket",y=>d.sendMessageToSocket(y)),this.on("send-message-to-client",y=>d.sendMessageToClient(y))]);return d.once("destroy",T.remove),d}createConnectionParameters(){return{spatialReference:this.spatialReference,customParameters:this.customParameters,definitionExpression:this.definitionExpression,geometryDefinition:this.geometryDefinition,maxReconnectionAttempts:this.maxReconnectionAttempts,maxReconnectionInterval:this.maxReconnectionInterval}}createPopupTemplate(e){return Y(this,e)}createQuery(){const e=new B;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,r){if(!this.fields)return null;let o=null;return this.fields.some(a=>(a.name===e&&(o=a.domain),!!o)),o}getField(e){return this.fieldsIndex.get(e)}serviceSupportsSpatialReference(e){return!0}sendMessageToSocket(e){this.emit("send-message-to-socket",e)}sendMessageToClient(e){this.emit("send-message-to-client",e)}write(e,r){const o=r==null?void 0:r.messages;return this.webSocketUrl?(o==null||o.push(w(this,"using a custom websocket connection cannot be written to web scenes and web maps")),null):this.parsedUrl?super.write(e,r):(o==null||o.push(w(this,"using a client-side only connection without a url cannot be written to web scenes and web maps")),null)}async _fetchService(e){var r,o,a;if(!this.webSocketUrl&&this.parsedUrl){if(!this.sourceJSON){const{data:n}=await Q(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=n}}else{if(!((r=this.timeInfo)!=null&&r.trackIdField))throw new p("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField){const n=(o=this.fields.find(c=>c.type==="oid"))==null?void 0:o.name;if(!n)throw new p("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");this.objectIdField=n}if(!this.fields)throw new p("stream-layer:missing-metadata","The stream layer fields must be specified.");if(this.fields.some(n=>n.name===this.objectIdField)||this.fields.push(new Z({name:this.objectIdField,alias:this.objectIdField,type:"oid"})),!this.geometryType)throw new p("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.webSocketUrl&&(this.url=this.webSocketUrl)}return this.read(this.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:(a=this.portalItem)==null?void 0:a.portal,url:this.parsedUrl}),f(this.renderer,this.fieldsIndex),K(this.timeInfo,this.fieldsIndex),this.objectIdField||(this.objectIdField="__esri_stream_id__"),X(this,{origin:"service"})}};t([s({type:String})],i.prototype,"copyright",void 0),t([s({readOnly:!0})],i.prototype,"defaultPopupTemplate",null),t([s({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),t([s({type:String})],i.prototype,"displayField",void 0),t([s({type:ee})],i.prototype,"elevationInfo",void 0),t([s(b.fields)],i.prototype,"fields",void 0),t([s(b.fieldsIndex)],i.prototype,"fieldsIndex",void 0),t([s({type:te})],i.prototype,"geometryDefinition",void 0),t([s({type:m.apiValues,json:{read:{reader:m.read}}})],i.prototype,"geometryType",void 0),t([s(ie)],i.prototype,"labelsVisible",void 0),t([s({type:[se],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:re},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],i.prototype,"labelingInfo",void 0),t([s(oe)],i.prototype,"legendEnabled",void 0),t([s({type:["show","hide"]})],i.prototype,"listMode",void 0),t([s({type:g})],i.prototype,"maxReconnectionAttempts",void 0),t([s({type:g})],i.prototype,"maxReconnectionInterval",void 0),t([s(ne)],i.prototype,"maxScale",void 0),t([s(ae)],i.prototype,"minScale",void 0),t([s({type:String})],i.prototype,"objectIdField",void 0),t([s({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],i.prototype,"operationalLayerType",void 0),t([s(le)],i.prototype,"popupEnabled",void 0),t([s({type:pe,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],i.prototype,"popupTemplate",void 0),t([s({type:j})],i.prototype,"purgeOptions",void 0),t([s({types:de,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:ce,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],i.prototype,"renderer",null),t([v("service","renderer",["drawingInfo.renderer","defaultSymbol"]),v("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],i.prototype,"readRenderer",null),t([s(ye)],i.prototype,"screenSizePerspectiveEnabled",void 0),t([s()],i.prototype,"sourceJSON",void 0),t([s({type:S,json:{origins:{service:{read:{source:"spatialReference"}}}}})],i.prototype,"spatialReference",void 0),t([s({json:{read:!1}})],i.prototype,"type",void 0),t([s(ue)],i.prototype,"url",void 0),t([s({type:Number})],i.prototype,"updateInterval",void 0),t([s({type:String})],i.prototype,"webSocketUrl",void 0),i=t([I("esri.layers.StreamLayer")],i);const u=me({types:he}),be=i;export{be as default};
