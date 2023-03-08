import{e as u,y as f,n as J,m as nt}from"./cast-7928d7aa.js";import{g as lt}from"./Graphic-b46e2684.js";import{d as ht}from"./HandleOwner-e1406413.js";import{l as I}from"./reactiveUtils-f41a4e00.js";import{r as x,t as V}from"./typedArrayUtil-a8b5b3e9.js";import"./ensureType-cf29afa9.js";import{u as S}from"./screenUtils-410d12c0.js";import{f as L,j as ct}from"./promiseUtils-6684e352.js";import{E as w,b as C}from"./FramebufferObject-50e1b68f.js";import{C as m,R as z,E as N,F as D,P as q,L as dt,G as mt,D as ut}from"./enums-64ab819c.js";import{E as pt}from"./Texture-e79b14e7.js";import{t as _}from"./VertexElementDescriptor-2925c6af.js";import{a as W,F as j,D as B}from"./dataUtils-a4eff43b.js";import{o as ft,i as _t}from"./WGLContainer-14075e1a.js";import{I as yt}from"./enums-4ca4641f.js";import"./geometry-5a216427.js";import{s as Y}from"./Error-653283ae.js";import{m as P}from"./mathUtils-2519596a.js";import{w as gt,a as xt}from"./Extent-69509002.js";import{l as vt,f as H,M as F,h as K,r as wt,b as Dt,i as At}from"./mat3-3fc68e72.js";import{e as Q}from"./mat3f32-d3d088e8.js";import{e as X}from"./EffectView-d3bf37ed.js";import"./string-cdf077e6.js";import{t as O}from"./vec2f32-461e65a9.js";import{g as St}from"./Utils-b2b4cf0c.js";function bt(a){const t=tt(U(a)),e=t,s=!0,i=Math.max(t/2,5),r=Math.round(S(a.maxPathLength)/i)+1,o=10,{density:n}=a;return{smoothing:S(a.smoothing),interpolate:!0,velocityScale:a.flowRepresentation==="flow-from"?1:-1,verticesPerLine:r,minSpeedThreshold:.001,segmentLength:i,maxTurnAngle:1,collisions:s,lineCollisionWidth:e,lineSpacing:o,density:n}}function tt(a){return a.kind==="constant"?a.value[0]:a.values[a.values.length-1]}function Z(a){const t=a.toRgba();return[t[0]/255,t[1]/255,t[2]/255,t[3]]}function $t(a){return{kind:"constant",value:[.1,.1,.1,1]}}function U(a){if(!a.hasVisualVariables("size"))return{kind:"constant",value:[S(a.trailWidth)]};const t=a.getVisualVariablesForType("size")[0],e=[],s=[];let i;if(t.stops){for(const r of t.stops)e.push(r.value),s.push(S(r.size));i=t.stops.length}else e.push(t.minDataValue,t.maxDataValue),s.push(S(t.minSize),S(t.maxSize)),i=2;return{kind:"ramp",stops:e,values:s,count:i}}function zt(a){if(!a.hasVisualVariables("color"))return{kind:"constant",value:Z(a.color)};const t=a.getVisualVariablesForType("color")[0],e=[],s=[];for(const i of t.stops)e.push(i.value),Array.prototype.push.apply(s,Z(i.color));return{kind:"ramp",stops:e,values:s,count:t.stops.length}}function Rt(a){if(!a.hasVisualVariables("opacity"))return{kind:"constant",value:[1]};const t=a.getVisualVariablesForType("opacity")[0],e=[],s=[];for(const i of t.stops)e.push(i.value),s.push(i.opacity);return{kind:"ramp",stops:e,values:s,count:t.stops.length}}function k(a,t,e,s){switch(t){case"int":a.setUniform1iv(e,s);break;case"float":a.setUniform1fv(e,s);break;case"vec2":a.setUniform2fv(e,s);break;case"vec3":a.setUniform3fv(e,s);break;case"vec4":a.setUniform4fv(e,s)}}function v(a,t,e,s){s.kind==="constant"?k(a,e,`u_${t}`,s.value):(k(a,"float",`u_${t}_stops`,s.stops),k(a,e,`u_${t}_values`,s.values),a.setUniform1i(`u_${t}_count`,s.count))}function Tt(a,t){let e=!0;return e=e&&a.collisions===t.collisions,e=e&&a.density===t.density,e=e&&a.interpolate===t.interpolate,e=e&&a.lineCollisionWidth===t.lineCollisionWidth,e=e&&a.lineSpacing===t.lineSpacing,e=e&&a.maxTurnAngle===t.maxTurnAngle,e=e&&a.minSpeedThreshold===t.minSpeedThreshold,e=e&&a.segmentLength===t.segmentLength,e=e&&a.smoothing===t.smoothing,e=e&&a.velocityScale===t.velocityScale,e=e&&a.verticesPerLine===t.verticesPerLine,e}function et(a,t){return a===t||!(!x(a)||!x(t))&&a.equals(t)}function at(a,t){if(!Tt(a.simulationSettings,t.simulationSettings)||!et(a.timeExtent,t.timeExtent))return!1;let e=!0;return e=e&&a.loadImagery===t.loadImagery,e=e&&a.createFlowMesh===t.createFlowMesh,e=e&&a.color.kind===t.color.kind,e=e&&a.opacity.kind===t.opacity.kind,e=e&&a.size.kind===t.size.kind,e}let st=class{constructor(t){this._params=t,this.animated=!1}isCompatible(t){if(!(t instanceof st)||!et(this._params.timeExtent,t._params.timeExtent))return!1;let e=!0;return e=e&&this._params.loadImagery===t._params.loadImagery,e=e&&this._params.color.kind===t._params.color.kind,e=e&&this._params.opacity.kind===t._params.opacity.kind,e}async load(t,e){const{extent:s,size:i}=t;L(e);const r=await this._params.loadImagery(s,i[0],i[1],this._params.timeExtent,e);return new Ot(r,{color:this._params.color,opacity:this._params.opacity})}render(t,e,s){const{context:i}=t,{program:r}=s;i.setFaceCullingEnabled(!1),i.setBlendingEnabled(!0),i.setBlendFunction(z.ONE,z.ONE_MINUS_SRC_ALPHA),i.useProgram(r),r.setUniformMatrix3fv("u_dvsMat3",e.dvsMat3),i.bindTexture(s.texture,0),r.setUniform1i("u_texture",0),r.setUniform1f("u_Min",s.min),r.setUniform1f("u_Max",s.max),v(r,"color","vec4",this._params.color),v(r,"opacity","float",this._params.opacity),i.bindVAO(s.vertexArray),i.drawArrays(N.TRIANGLE_STRIP,0,4)}};const E=new Map;E.set("a_position",0),E.set("a_texcoord",1);const Mt={geometry:[new _("a_position",2,m.UNSIGNED_SHORT,0,8),new _("a_texcoord",2,m.UNSIGNED_SHORT,4,8)]},It={vsPath:"raster/flow/imagery",fsPath:"raster/flow/imagery",attributes:E};let Ot=class{constructor(t,e){this._flowData=t,this._values=e}attach(t){const{context:e}=t,{width:s,height:i}=this._flowData,r=w.createVertex(e,D.STATIC_DRAW,new Uint16Array([0,0,0,1,s,0,1,1,0,i,0,0,s,i,1,0])),o=new C(e,E,Mt,{geometry:r}),n=[];this._values.color.kind==="ramp"&&n.push("vvColor"),this._values.opacity.kind==="ramp"&&n.push("vvOpacity");const l=t.painter.materialManager.getProgram(It,n);let d=1e6,y=-1e6;for(let h=0;h<i;h++)for(let c=0;c<s;c++)if(this._flowData.mask[h*s+c]!==0){const R=this._flowData.data[2*(h*s+c)+0],T=this._flowData.data[2*(h*s+c)+1],M=Math.sqrt(R*R+T*T);d=Math.min(d,M),y=Math.max(y,M)}const g=new Uint8Array(4*s*i);for(let h=0;h<i;h++)for(let c=0;c<s;c++)if(this._flowData.mask[h*s+c]!==0){const R=this._flowData.data[2*(h*s+c)+0],T=this._flowData.data[2*(h*s+c)+1],M=(Math.sqrt(R*R+T*T)-d)/(y-d);g[4*(h*s+c)+0]=255*M,g[4*(h*s+c)+1]=0,g[4*(h*s+c)+2]=0,g[4*(h*s+c)+3]=255}else g[4*(h*s+c)+0]=0,g[4*(h*s+c)+1]=0,g[4*(h*s+c)+2]=0,g[4*(h*s+c)+3]=0;const ot=new pt(e,{pixelFormat:q.RGBA,internalFormat:q.RGBA,samplingMode:dt.LINEAR,dataType:mt.UNSIGNED_BYTE,wrapMode:ut.CLAMP_TO_EDGE,flipped:!0,width:s,height:i},g);this.vertexArray=o,this.program=l,this.texture=ot,this.min=d,this.max=y,this._flowData=null}detach(){this.vertexArray.dispose(),this.texture.dispose()}get ready(){return this.program.isCompiled}},it=class{constructor(t){this._params=t}get animated(){return this._params.flowSpeed>0}isCompatible(t){return t instanceof it&&at(this._params,t._params)}async load(t,e){const{extent:s,size:i}=t;L(e);const r=await this._params.loadImagery(s,i[0],i[1],this._params.timeExtent,e),{vertexData:o,indexData:n}=await this._params.createFlowMesh("Particles",this._params.simulationSettings,r,e);return new Et(o,n,{color:this._params.color,opacity:this._params.opacity,size:this._params.size})}render(t,e,s){const{context:i}=t,{program:r}=s;i.setFaceCullingEnabled(!1),i.setBlendingEnabled(!0),i.setBlendFunction(z.ONE,z.ONE_MINUS_SRC_ALPHA),i.useProgram(r),r.setUniform1f("u_time",e.time),r.setUniform1f("u_trailLength",this._params.trailLength),r.setUniform1f("u_flowSpeed",this._params.flowSpeed),r.setUniform1f("u_featheringSize",this._params.featheringSize),r.setUniform1f("u_featheringOffset",this._params.featheringOffset),r.setUniform1f("u_introFade",this._params.introFade?1:0),r.setUniform1f("u_fadeToZero",this._params.fadeToZero?1:0),r.setUniform1f("u_decayRate",this._params.decayRate),r.setUniformMatrix3fv("u_dvsMat3",e.dvsMat3),r.setUniformMatrix3fv("u_displayViewMat3",e.displayViewMat3),v(r,"color","vec4",this._params.color),v(r,"opacity","float",this._params.opacity),v(r,"size","float",this._params.size),i.bindVAO(s.vertexArray),i.drawElements(N.TRIANGLES,s.indexCount,m.UNSIGNED_INT,0)}};const b=new Map;b.set("a_xyts0",0),b.set("a_xyts1",1),b.set("a_typeIdDurationSeed",2),b.set("a_extrudeInfo",3);const Ft={geometry:[new _("a_xyts0",4,m.FLOAT,0,64),new _("a_xyts1",4,m.FLOAT,16,64),new _("a_typeIdDurationSeed",4,m.FLOAT,32,64),new _("a_extrudeInfo",4,m.FLOAT,48,64)]},Vt={vsPath:"raster/flow/particles",fsPath:"raster/flow/particles",attributes:b};class Et{constructor(t,e,s){this._vertexData=t,this._indexData=e,this._values=s}attach(t){const{context:e}=t,s=w.createVertex(e,D.STATIC_DRAW,this._vertexData),i=w.createIndex(e,D.STATIC_DRAW,this._indexData),r=new C(e,b,Ft,{geometry:s},i),o=[];this._values.color.kind==="ramp"&&o.push("vvColor"),this._values.opacity.kind==="ramp"&&o.push("vvOpacity"),this._values.size.kind==="ramp"&&o.push("vvSize");const n=t.painter.materialManager.getProgram(Vt,o);this.vertexArray=r,this.program=n,this.indexCount=this._indexData.length,this._vertexData=null,this._indexData=null}detach(){this.vertexArray.dispose()}get ready(){return this.program.isCompiled}}let rt=class{constructor(t){this._styles=t}get animated(){return this._styles.reduce((t,e)=>t||e.animated,!1)}isCompatible(t){if(!(t instanceof rt)||this._styles.length!==t._styles.length)return!1;const e=this._styles.length;for(let s=0;s<e;s++)if(!this._styles[s].isCompatible(t._styles[s]))return!1;return!0}async load(t,e){const s=await Promise.all(this._styles.map(i=>i.load(t,e)));return new Ct(s)}render(t,e,s){for(let i=0;i<this._styles.length;i++)this._styles[i].render(t,e,s.resources[i])}};class Ct{constructor(t){this.resources=t}attach(t){for(const e of this.resources)e.attach(t)}detach(){for(const t of this.resources)t.detach()}get ready(){return this.resources.reduce((t,e)=>t&&e.ready,!0)}}class G{constructor(t){this._params=t}get animated(){return this._params.flowSpeed>0}isCompatible(t){return t instanceof G&&at(this._params,t._params)}async load(t,e){const{extent:s,size:i}=t;L(e);const r=await this._params.loadImagery(s,i[0],i[1],this._params.timeExtent,e),{vertexData:o,indexData:n}=await this._params.createFlowMesh("Streamlines",this._params.simulationSettings,r,e);return new Ut(o,n,{color:this._params.color,opacity:this._params.opacity,size:this._params.size})}render(t,e,s){const{context:i}=t,{program:r}=s;i.setFaceCullingEnabled(!1),i.setBlendingEnabled(!0),i.setBlendFunction(z.ONE,z.ONE_MINUS_SRC_ALPHA),i.useProgram(r),r.setUniform1f("u_time",e.time),r.setUniform1f("u_trailLength",this._params.trailLength),r.setUniform1f("u_flowSpeed",this._params.flowSpeed),r.setUniform1f("u_featheringSize",this._params.featheringSize),r.setUniform1f("u_featheringOffset",this._params.featheringOffset),r.setUniform1f("u_introFade",this._params.introFade?1:0),r.setUniform1f("u_fadeToZero",this._params.fadeToZero?1:0),r.setUniform1f("u_decayRate",this._params.decayRate),r.setUniformMatrix3fv("u_dvsMat3",e.dvsMat3),r.setUniformMatrix3fv("u_displayViewMat3",e.displayViewMat3),v(r,"color","vec4",this._params.color),v(r,"opacity","float",this._params.opacity),v(r,"size","float",this._params.size),i.bindVAO(s.vertexArray),i.drawElements(N.TRIANGLES,s.indexCount,m.UNSIGNED_INT,0)}}const $=new Map;$.set("a_positionAndSide",0),$.set("a_timeInfo",1),$.set("a_extrude",2),$.set("a_speed",3);const kt={geometry:[new _("a_positionAndSide",3,m.FLOAT,0,36),new _("a_timeInfo",3,m.FLOAT,12,36),new _("a_extrude",2,m.FLOAT,24,36),new _("a_speed",1,m.FLOAT,32,36)]},Pt={vsPath:"raster/flow/streamlines",fsPath:"raster/flow/streamlines",attributes:$};let Ut=class{constructor(t,e,s){this._vertexData=t,this._indexData=e,this._values=s}attach(t){const{context:e}=t,s=w.createVertex(e,D.STATIC_DRAW,this._vertexData),i=w.createIndex(e,D.STATIC_DRAW,this._indexData),r=new C(e,$,kt,{geometry:s},i),o=[];this._values.color.kind==="ramp"&&o.push("vvColor"),this._values.opacity.kind==="ramp"&&o.push("vvOpacity"),this._values.size.kind==="ramp"&&o.push("vvSize");const n=t.painter.materialManager.getProgram(Pt,o);this.vertexArray=r,this.program=n,this.indexCount=this._indexData.length,this._vertexData=null,this._indexData=null}detach(){this.vertexArray.dispose()}get ready(){return this.program.isCompiled}};const Lt=4,Nt=1,Gt=.5,qt=!0,Wt=!0,jt=2.3;function Bt(a,t){const{flowSpeed:e,trailLength:s}=a,i=bt(a);let r=null;const o={opacity:Rt(a),size:U(a)};let n=zt(a);if(a.background==="none")o.color=n;else{n.kind==="constant"&&(n={kind:"ramp",stops:[0,1],values:[0,0,0,1,n.value[0],n.value[1],n.value[2],n.value[3]],count:2});const y={loadImagery:t.loadImagery,timeExtent:t.timeExtent,color:n,opacity:{kind:"constant",value:[1]}};r=new st(y),o.color=$t()}const l={loadImagery:t.loadImagery,createFlowMesh:t.createFlowMesh,simulationSettings:i,timeExtent:t.timeExtent,trailLength:s,flowSpeed:e,featheringSize:Nt,featheringOffset:Gt,introFade:qt,fadeToZero:Wt,decayRate:jt,color:o.color,opacity:o.opacity,size:o.size},d=a.trailCap==="butt"||tt(U(a))<=Lt?new G(l):new it(l);return x(r)?new rt([r,d]):d}class Ht extends ft{constructor(){super(...arguments),this.flowStyle=null}get requiresDedicatedFBO(){return!1}doRender(t){super.doRender(t)}prepareRenderPasses(t){const e=t.registerRenderPass({name:"flow",brushes:[_t],target:()=>this.children,drawPhase:yt.MAP});return[...super.prepareRenderPasses(t),e]}}class Zt{constructor(t,e,s,i){this.state={name:"created"},this.flowStyle=t,this.extent=e,this.size=s,this.pixelRatio=i}async load(){const t=new AbortController;this.state={name:"loading",abortController:t};const e={extent:this.extent,size:this.size,pixelRatio:this.pixelRatio},s=await this.flowStyle.load(e,t.signal);this.state={name:"loaded",resources:s}}attach(t){if(this.state.name!=="loaded")return void Y.getLogger("esri.views.2d.engine.flow.FlowDisplayData").error("Only loaded resources can be attached.");const e=this.state.resources;e.attach(t),this.state={name:"attached",resources:e}}detach(){if(this.state.name==="loading")return this.state.abortController.abort(),void(this.state={name:"detached"});this.state.name==="attached"&&(this.state.resources.detach(),this.state={name:"detached"})}update(t){return this.flowStyle.isCompatible(t.flowStyle)?!(!this.extent.equals(t.extent)||this.size[0]!==t.size[0]||this.size[1]!==t.size[1]||this.pixelRatio!==t.pixelRatio)&&(this.flowStyle=t.flowStyle,!0):!1}}class Jt extends X{constructor(){super(...arguments),this._displayData=null}get displayData(){return this._displayData}set displayData(t){this._displayData=t,this.requestRender()}clear(){x(this._displayData)&&(this._displayData.detach(),this._displayData=null,this.requestRender())}setTransform(t){const{displayData:e}=this;if(V(e))return;const s=e.extent.xmin,i=e.extent.ymax,r=[0,0];t.toScreen(r,[s,i]);const o=(e.extent.xmax-e.extent.xmin)/e.size[0]/t.resolution,n=P(t.rotation),{dvs:l}=this.transforms;vt(l,[-1,1,0]),H(l,l,[2/(t.size[0]*t.pixelRatio),-2/(t.size[1]*t.pixelRatio),1]),F(l,l,[r[0],r[1],0]),K(l,l,n),H(l,l,[o*t.pixelRatio,o*t.pixelRatio,1])}_createTransforms(){return{dvs:Q()}}}const Yt=1.15;let A=class extends nt{constructor(t){super(t),this._flowDisplayObject=new Jt,this._loading=null}initialize(){this.flowContainer.addChild(this._flowDisplayObject)}destroy(){this._clear(),this.flowContainer.removeAllChildren()}get updating(){return this._loading!=null}update(t){const{flowStyle:e}=this.flowContainer;if(V(e))return void this._clear();const{extent:s,rotation:i,resolution:r,pixelRatio:o}=t.state,n=Qt(s,i);n.expand(Yt);const l=[Math.round((n.xmax-n.xmin)/r),Math.round((n.ymax-n.ymin)/r)],d=new Zt(e,n,l,o);if(x(this._loading)){if(this._loading.update(d))return;this._loading.detach(),this._loading=null}!V(this._flowDisplayObject.displayData)&&this._flowDisplayObject.displayData.update(d)||(d.load().then(()=>{this._flowDisplayObject.clear(),this._flowDisplayObject.displayData=this._loading,this._loading=null},y=>{ct(y)||(Y.getLogger(this.declaredClass).error("A resource failed to load.",y),this._loading=null)}),this._loading=d)}_clear(){this._flowDisplayObject.clear(),x(this._loading)&&(this._loading.detach(),this._loading=null)}};u([f()],A.prototype,"_loading",void 0),u([f()],A.prototype,"flowContainer",void 0),u([f()],A.prototype,"updating",null),A=u([J("esri.views.2d.engine.flow.FlowStrategy")],A);const Kt=A;function Qt(a,t){const e=new gt({x:(a.xmax+a.xmin)/2,y:(a.ymax+a.ymin)/2,spatialReference:a.spatialReference}),s=a.xmax-a.xmin,i=a.ymax-a.ymin,r=Math.abs(Math.cos(P(t))),o=Math.abs(Math.sin(P(t))),n=r*s+o*i,l=o*s+r*i,d=new xt({xmin:e.x-n/2,ymin:e.y-l/2,xmax:e.x+n/2,ymax:e.y+l/2,spatialReference:a.spatialReference});return d.centerAt(e),d}let p=class extends ht{constructor(){super(...arguments),this._loadImagery=(a,t,e,s,i)=>W(this.layer,a,t,e,s,i),this._createFlowMesh=(a,t,e,s)=>this.layer.createFlowMesh({meshType:a,flowData:e,simulationSettings:t},{signal:s}),this.attached=!1,this.container=null,this.layer=null,this.type="flow",this.timeExtent=null,this.redrawOrRefetch=async()=>{this._updateVisualization()}}get updating(){return!this._strategy||this._strategy.updating}attach(){const{layer:a}=this,t=()=>{this._loadImagery=(e,s,i,r,o)=>W(a,e,s,i,r,o),this._updateVisualization()};"multidimensionalDefinition"in a?this.handles.add(I(()=>a.multidimensionalDefinition,t)):this.handles.add([I(()=>a.mosaicRule,t),I(()=>a.renderingRule,t),I(()=>a.definitionExpression,t)]),this.container=new Ht,this._strategy=new Kt({flowContainer:this.container}),this._updateVisualization()}detach(){this._strategy.destroy(),this.container.removeAllChildren(),this.container=null,this.handles.removeAll()}update(a){a.stationary?this._strategy.update(a):this.layerView.requestUpdate()}hitTest(a){return new lt({attributes:{},geometry:a.clone(),layer:this.layer})}moveEnd(){}async doRefresh(){}_updateVisualization(){const{renderer:a}=this.layer;if(a.type!=="flow")return;const t=Bt(a,{loadImagery:this._loadImagery,createFlowMesh:this._createFlowMesh,timeExtent:this.timeExtent});this.container.flowStyle=t,this.layerView.requestUpdate()}};u([f()],p.prototype,"_strategy",void 0),u([f()],p.prototype,"attached",void 0),u([f()],p.prototype,"container",void 0),u([f()],p.prototype,"layer",void 0),u([f()],p.prototype,"layerView",void 0),u([f()],p.prototype,"type",void 0),u([f()],p.prototype,"updating",null),u([f()],p.prototype,"timeExtent",void 0),p=u([J("esri.views.2d.engine.flow.FlowView2D")],p);const Me=p;class Ie extends X{constructor(t=null){super(),this._source=null,this._symbolizerParameters=null,this._vaoInvalidated=!0,this.coordScale=[1,1],this.height=null,this.stencilRef=0,this.resolution=null,this.pixelRatio=1,this.x=0,this.y=0,this.rotation=0,this.rawPixelData=null,this.width=null,this.source=t}destroy(){var t,e;x(this.vaoData)&&((t=this.vaoData.magdir)==null||t.vao.dispose(),(e=this.vaoData.scalar)==null||e.vao.dispose(),this.vaoData=null)}get symbolizerParameters(){return this._symbolizerParameters}set symbolizerParameters(t){JSON.stringify(this._symbolizerParameters)!==JSON.stringify(t)&&(this._symbolizerParameters=t,this.invalidateVAO())}get source(){return this._source}set source(t){this._source=t,this.invalidateVAO()}invalidateVAO(){var t,e;!this._vaoInvalidated&&x(this.vaoData)&&((t=this.vaoData.magdir)==null||t.vao.dispose(),(e=this.vaoData.scalar)==null||e.vao.dispose(),this.vaoData=null,this._vaoInvalidated=!0,this.requestRender())}updateVectorFieldVAO(t){if(this._vaoInvalidated){if(this._vaoInvalidated=!1,x(this.source)&&V(this.vaoData)){const{style:e}=this.symbolizerParameters;switch(e){case"beaufort_ft":case"beaufort_km":case"beaufort_kn":case"beaufort_m":case"beaufort_mi":case"classified_arrow":case"ocean_current_kn":case"ocean_current_m":case"single_arrow":{const s=j(this.source,this.symbolizerParameters),i=this._createVectorFieldVAO(t.context,s);this.vaoData={magdir:i}}break;case"simple_scalar":{const s=B(this.source,this.symbolizerParameters),i=this._createVectorFieldVAO(t.context,s);this.vaoData={scalar:i}}break;case"wind_speed":{const s=j(this.source,this.symbolizerParameters),i=this._createVectorFieldVAO(t.context,s),r=B(this.source,this.symbolizerParameters),o=this._createVectorFieldVAO(t.context,r);this.vaoData={magdir:i,scalar:o}}}}this.ready(),this.requestRender()}}_createTransforms(){return{dvs:Q()}}setTransform(t){const e=wt(this.transforms.dvs),[s,i]=t.toScreenNoRotation([0,0],[this.x,this.y]),r=this.resolution/this.pixelRatio/t.resolution,o=r*this.width,n=r*this.height,l=Math.PI*this.rotation/180;F(e,e,O(s,i)),F(e,e,O(o/2,n/2)),K(e,e,-l),F(e,e,O(-o/2,-n/2)),Dt(e,e,O(o,n)),At(this.transforms.dvs,t.displayViewMat3,e)}onAttach(){this.invalidateVAO()}onDetach(){this.invalidateVAO()}_createVectorFieldVAO(t,e){const{vertexData:s,indexData:i}=e,r=w.createVertex(t,D.STATIC_DRAW,new Float32Array(s)),o=w.createIndex(t,D.STATIC_DRAW,new Uint32Array(i)),n=St("vector-field",{geometry:[{location:0,name:"a_pos",count:2,type:m.FLOAT,normalized:!1},{location:1,name:"a_offset",count:2,type:m.FLOAT,normalized:!1},{location:2,name:"a_vv",count:2,type:m.FLOAT,normalized:!1}]});return{vao:new C(t,n.attributes,n.bufferLayouts,{geometry:r},o),elementCount:i.length}}}export{Me as d,Ie as y};
