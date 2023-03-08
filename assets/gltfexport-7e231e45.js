import{v as Q}from"./request-d3e98716.js";import{E as G}from"./promiseUtils-6684e352.js";import{w as D}from"./Extent-69509002.js";import{s as q}from"./Error-653283ae.js";import{r as tt}from"./ensureType-cf29afa9.js";import{t as J,r as w,C as et}from"./typedArrayUtil-a8b5b3e9.js";import{K as st,k as it}from"./quat-5b263584.js";import{o as rt,r as nt,e as ot}from"./quatf64-7fd38d64.js";import{o as B,e as $,_ as at,z as ht,F as v}from"./vec3-a020a6f6.js";import{n as S,f as ct,t as P,l as K}from"./vec3f64-2f9cef06.js";import{a as ft}from"./MeshComponent-f50df6af.js";import{M as ut}from"./georeference-6f0b7692.js";import{C as d,D as T}from"./enums-64ab819c.js";import{o as Y,i as lt,g as dt,s as pt}from"./imageutils-b39249d8.js";import"./preload-helper-41c905a7.js";import"./string-cdf077e6.js";import"./cast-7928d7aa.js";import"./nextTick-3ee5a785.js";import"./Ellipsoid-89682c5e.js";import"./mat3f64-c6305894.js";import"./common-c186b691.js";import"./vec4-790471c0.js";import"./earcut-58237617.js";import"./Polyline-bf268e7b.js";import"./deduplicate-b0bc48cc.js";import"./mathUtils-2519596a.js";import"./Color-a42a8267.js";import"./colorUtils-639f4d25.js";import"./persistableUrlUtils-a16d0f55.js";import"./unitUtils-47abac71.js";import"./jsonMap-c1f958cf.js";import"./mat4-44a0988f.js";import"./mat4f64-1e28eae0.js";import"./mat3-3fc68e72.js";import"./projection-d7b57a6c.js";import"./SimpleObservable-7dcdef1d.js";import"./assets-0b172f07.js";import"./aaBoundingRect-4a760199.js";import"./zscale-1e1fc911.js";import"./projection-aa2a8986.js";import"./BufferView-646ba1de.js";import"./vec2-2cef68de.js";import"./vec33-ce3aa99b.js";var I;(function(i){i[i.JSON=1313821514]="JSON",i[i.BIN=5130562]="BIN"})(I||(I={}));class A{constructor(t,e){if(!t)throw new Error("GLB requires a JSON gltf chunk");this._length=A.HEADER_SIZE,this._length+=A.CHUNK_HEADER_SIZE;const s=this._textToArrayBuffer(t);if(this._length+=this._alignTo(s.byteLength,4),e&&(this._length+=A.CHUNK_HEADER_SIZE,this._length+=e.byteLength,e.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this._length),this._outView=new DataView(this.buffer),this._writeHeader();const r=this._writeChunk(s,12,I.JSON,32);e&&this._writeChunk(e,r,I.BIN)}_writeHeader(){this._outView.setUint32(0,A.MAGIC,!0),this._outView.setUint32(4,A.VERSION,!0),this._outView.setUint32(8,this._length,!0)}_writeChunk(t,e,s,r=0){const n=this._alignTo(t.byteLength,4);for(this._outView.setUint32(e,n,!0),this._outView.setUint32(e+=4,s,!0),this._writeArrayBuffer(this._outView.buffer,t,e+=4,0,t.byteLength),e+=t.byteLength;e%4;)r&&this._outView.setUint8(e,r),e++;return e}_writeArrayBuffer(t,e,s,r,n){new Uint8Array(t,s,n).set(new Uint8Array(e,r,n),0)}_textToArrayBuffer(t){return new TextEncoder().encode(t).buffer}_alignTo(t,e){return e*Math.ceil(t/e)}}A.HEADER_SIZE=12,A.CHUNK_HEADER_SIZE=8,A.MAGIC=1179937895,A.VERSION=2;var x,y,R,_,k,C,H;(function(i){i[i.External=0]="External",i[i.DataURI=1]="DataURI",i[i.GLB=2]="GLB"})(x||(x={})),function(i){i[i.External=0]="External",i[i.DataURI=1]="DataURI",i[i.GLB=2]="GLB"}(y||(y={})),function(i){i[i.ARRAY_BUFFER=34962]="ARRAY_BUFFER",i[i.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(R||(R={})),function(i){i.SCALAR="SCALAR",i.VEC2="VEC2",i.VEC3="VEC3",i.VEC4="VEC4",i.MAT2="MAT2",i.MAT3="MAT3",i.MAT4="MAT4"}(_||(_={})),function(i){i[i.POINTS=0]="POINTS",i[i.LINES=1]="LINES",i[i.LINE_LOOP=2]="LINE_LOOP",i[i.LINE_STRIP=3]="LINE_STRIP",i[i.TRIANGLES=4]="TRIANGLES",i[i.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",i[i.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(k||(k={})),function(i){i.OPAQUE="OPAQUE",i.MASK="MASK",i.BLEND="BLEND"}(C||(C={})),function(i){i[i.NoColor=0]="NoColor",i[i.FaceColor=1]="FaceColor",i[i.VertexColor=2]="VertexColor"}(H||(H={}));let _t=class{constructor(t,e,s,r,n){this._buffer=t,this._componentType=s,this._dataType=r,this._data=[],this._isFinalized=!1,this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,e.bufferViews||(e.bufferViews=[]),this.index=e.bufferViews.length,this._bufferView={buffer:t.index,byteLength:-1,target:n};const o=this._getElementSize();o>=4&&n!==R.ELEMENT_ARRAY_BUFFER&&(this._bufferView.byteStride=o),e.bufferViews.push(this._bufferView),this._numComponentsForDataType=this._calculateNumComponentsForDataType()}push(t){const e=this._data.length;if(this._data.push(t),this._accessorIndex>=0){const s=e%this._numComponentsForDataType,r=this._accessorMin[s];this._accessorMin[s]=typeof r!="number"?t:Math.min(r,t);const n=this._accessorMax[s];this._accessorMax[s]=typeof n!="number"?t:Math.max(n,t)}}get dataSize(){return this._data.length*this._sizeComponentType()}get byteSize(){function t(e,s){return s*Math.ceil(e/s)}return t(this.dataSize,4)}getByteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}get byteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}_createTypedArray(t,e){switch(this._componentType){case d.BYTE:return new Int8Array(t,e);case d.FLOAT:return new Float32Array(t,e);case d.SHORT:return new Int16Array(t,e);case d.UNSIGNED_BYTE:return new Uint8Array(t,e);case d.UNSIGNED_INT:return new Uint32Array(t,e);case d.UNSIGNED_SHORT:return new Uint16Array(t,e)}}writeOutToBuffer(t,e){this._createTypedArray(t,e).set(this._data)}writeAsync(t){if(this._asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this._asyncWritePromise=t.then(e=>{const s=new Uint8Array(e);for(let r=0;r<s.length;++r)this._data.push(s[r]);delete this._asyncWritePromise}),this._asyncWritePromise}startAccessor(t){if(this._accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this._accessorIndex=this._data.length,this._accessorAttribute=t;const e=this._numComponentsForDataType;this._accessorMin=new Array(e),this._accessorMax=new Array(e)}endAccessor(){if(this._accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");const t=this._getElementSize(),e=this._numComponentsForDataType,s=(this._data.length-this._accessorIndex)/e;if(s%1)throw new Error("An accessor was ended with missing component values");for(let n=0;n<this._accessorMin.length;++n)typeof this._accessorMin[n]!="number"&&(this._accessorMin[n]=0),typeof this._accessorMax[n]!="number"&&(this._accessorMax[n]=0);const r={byteOffset:t*(this._accessorIndex/e),componentType:this._componentType,count:s,type:this._dataType,min:this._accessorMin,max:this._accessorMax,name:this._accessorAttribute};switch(this._accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this._componentType){case d.UNSIGNED_BYTE:case d.UNSIGNED_SHORT:r.normalized=!0}}return this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,r}get finalized(){return this._finalizedPromise?this._finalizedPromise:this._isFinalized?this._finalizedPromise=Promise.resolve():this._finalizedPromise=new Promise(t=>this._finalizedPromiseResolve=t)}finalize(){const t=this._bufferView;return new Promise(e=>{const s=this._buffer.getViewFinalizePromises(this);this._asyncWritePromise&&s.push(this._asyncWritePromise),e(G(s))}).then(()=>{this._isFinalized=!0,t.byteOffset=this.getByteOffset(),t.byteLength=this.dataSize,this._finalizedPromiseResolve&&this._finalizedPromiseResolve()})}_getElementSize(){return this._sizeComponentType()*this._numComponentsForDataType}_sizeComponentType(){switch(this._componentType){case d.BYTE:case d.UNSIGNED_BYTE:return 1;case d.SHORT:case d.UNSIGNED_SHORT:return 2;case d.UNSIGNED_INT:case d.FLOAT:return 4}}_calculateNumComponentsForDataType(){switch(this._dataType){case _.SCALAR:return 1;case _.VEC2:return 2;case _.VEC3:return 3;case _.VEC4:case _.MAT2:return 4;case _.MAT3:return 9;case _.MAT4:return 16}}};class Z{constructor(t){this._gltf=t,this._bufferViews=[],this._isFinalized=!1,t.buffers||(t.buffers=[]),this.index=t.buffers.length;const e={byteLength:-1};t.buffers.push(e),this._buffer=e}addBufferView(t,e,s){if(this._finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");const r=new _t(this,this._gltf,t,e,s);return this._bufferViews.push(r),r}getByteOffset(t){let e=0;for(const s of this._bufferViews){if(s===t)return e;e+=s.byteSize}throw new Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(t){const e=[];for(const s of this._bufferViews){if(t&&s===t)return e;e.push(s.finalized)}return e}getArrayBuffer(){if(!this._isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");const t=this._getTotalSize(),e=new ArrayBuffer(t);let s=0;for(const r of this._bufferViews)r.writeOutToBuffer(e,s),s+=r.byteSize;return e}finalize(){var t;if(this._finalizePromise)throw new Error(`Buffer ${this.index} was already finalized`);return this._finalizePromise=new Promise(e=>{e(G(this.getViewFinalizePromises()))}).then(()=>{this._isFinalized=!0;const e=this.getArrayBuffer();this._buffer.byteLength=e.byteLength,this._buffer.uri=e}),(t=this._gltf.extras)==null||t.promises.push(this._finalizePromise),this._finalizePromise}_getTotalSize(){let t=0;for(const e of this._bufferViews)t+=e.byteSize;return t}}function mt(i,t){if(i.components)for(const e of i.components)e.faces&&e.shading==="smooth"&&gt(e,t)}function gt(i,t){J(t.normal)&&(t.normal=new Float32Array(t.position.length));const e=i.faces,{position:s,normal:r}=t,n=e.length/3;for(let o=0;o<n;++o){const h=3*e[3*o+0],a=3*e[3*o+1],c=3*e[3*o+2],l=B(At,s[h+0],s[h+1],s[h+2]),u=B(Tt,s[a+0],s[a+1],s[a+2]),m=B(yt,s[c+0],s[c+1],s[c+2]),N=$(u,u,l),b=$(m,m,l),p=at(N,N,b);r[h+0]+=p[0],r[h+1]+=p[1],r[h+2]+=p[2],r[a+0]+=p[0],r[a+1]+=p[1],r[a+2]+=p[2],r[c+0]+=p[0],r[c+1]+=p[1],r[c+2]+=p[2]}for(let o=0;o<r.length;o+=3)B(O,r[o],r[o+1],r[o+2]),ht(O,O),r[o+0]=O[0],r[o+1]=O[1],r[o+2]=O[2]}function wt(i){if(w(i.transform))return i.transform.getOriginPoint(i.spatialReference);const t=i.extent.xmax-i.extent.width/2,e=i.extent.ymax-i.extent.height/2,s=i.extent.zmin;return new D({x:t,y:e,z:s,spatialReference:i.extent.spatialReference})}const At=S(),Tt=S(),yt=S(),O=S(),bt=q.getLogger("gltf");class Et{constructor(t,e,s){this.params={},this._materialMap=new Array,this._imageMap=new Map,this._textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:t.copyright,generator:t.generator},extras:{options:e,binChunkBuffer:null,promises:[]}},s&&(this.params=s),this._addScenes(t)}_addScenes(t){this.gltf.scene=t.defaultScene;const e=this.gltf.extras,s=e.options.bufferOutputType===x.GLB||e.options.imageOutputType===y.GLB;s&&(e.binChunkBuffer=new Z(this.gltf)),t.forEachScene(r=>{this._addScene(r)}),s&&e.binChunkBuffer.finalize()}_addScene(t){this.gltf.scenes||(this.gltf.scenes=[]);const e={};t.name&&(e.name=t.name),t.forEachNode(s=>{e.nodes||(e.nodes=[]);const r=this._addNode(s);e.nodes.push(r)}),this.gltf.scenes.push(e)}_addNode(t){this.gltf.nodes||(this.gltf.nodes=[]);const e={};t.name&&(e.name=t.name);const s=t.translation;v(s,ct)||(e.translation=P(s));const r=t.rotation;st(r,rt)||(e.rotation=nt(r));const n=t.scale;v(n,K)||(e.scale=P(n)),t.mesh&&t.mesh.vertexAttributes.position?e.mesh=this._addMesh(t.mesh):t.forEachNode(h=>{e.children||(e.children=[]);const a=this._addNode(h);e.children.push(a)});const o=this.gltf.nodes.length;return this.gltf.nodes.push(e),o}_addMesh(t){this.gltf.meshes||(this.gltf.meshes=[]);const e={primitives:[]},s=this.gltf.extras,r=s.options.bufferOutputType===x.GLB;let n;n=r?s.binChunkBuffer:new Z(this.gltf),this.params.origin||(this.params.origin=wt(t));const o=ut(t.vertexAttributes,t.transform,this.params.origin,{geographic:this.params.geographic,unit:"meters"});mt(t,o),this._flipYZAxis(o);const h=n.addBufferView(d.FLOAT,_.VEC3,R.ARRAY_BUFFER);let a,c,l,u;o.normal&&(a=n.addBufferView(d.FLOAT,_.VEC3,R.ARRAY_BUFFER)),t.vertexAttributes.uv&&(c=n.addBufferView(d.FLOAT,_.VEC2,R.ARRAY_BUFFER)),o.tangent&&(l=n.addBufferView(d.FLOAT,_.VEC4,R.ARRAY_BUFFER)),t.vertexAttributes.color&&(u=n.addBufferView(d.UNSIGNED_BYTE,_.VEC4,R.ARRAY_BUFFER)),h.startAccessor("POSITION"),a&&a.startAccessor("NORMAL"),c&&c.startAccessor("TEXCOORD_0"),l&&l.startAccessor("TANGENT"),u&&u.startAccessor("COLOR_0");const m=o.position.length/3,{position:N,normal:b,tangent:p}=o,{color:g,uv:E}=t.vertexAttributes;for(let f=0;f<m;++f)h.push(N[3*f+0]),h.push(N[3*f+1]),h.push(N[3*f+2]),a&&w(b)&&(a.push(b[3*f+0]),a.push(b[3*f+1]),a.push(b[3*f+2])),c&&w(E)&&(c.push(E[2*f+0]),c.push(E[2*f+1])),l&&w(p)&&(l.push(p[4*f+0]),l.push(p[4*f+1]),l.push(p[4*f+2]),l.push(p[4*f+3])),u&&w(g)&&(u.push(g[4*f+0]),u.push(g[4*f+1]),u.push(g[4*f+2]),u.push(g[4*f+3]));const j=h.endAccessor(),U=this._addAccessor(h.index,j);let L,z,V,F,M;if(a){const f=a.endAccessor();L=this._addAccessor(a.index,f)}if(c){const f=c.endAccessor();z=this._addAccessor(c.index,f)}if(l){const f=l.endAccessor();V=this._addAccessor(l.index,f)}if(u){const f=u.endAccessor();F=this._addAccessor(u.index,f)}t.components&&t.components.length>0&&t.components[0].faces?(M=n.addBufferView(d.UNSIGNED_INT,_.SCALAR,R.ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(M,t.components,e,U,L,z,V,F)):this._addMeshVertexNonIndexed(t.components,e,U,L,z,V,F),h.finalize(),a&&a.finalize(),c&&c.finalize(),l&&l.finalize(),M&&M.finalize(),u&&u.finalize(),r||n.finalize();const X=this.gltf.meshes.length;return this.gltf.meshes.push(e),X}_flipYZAxis({position:t,normal:e,tangent:s}){this._flipYZBuffer(t,3),this._flipYZBuffer(e,3),this._flipYZBuffer(s,4)}_flipYZBuffer(t,e){if(!J(t))for(let s=1,r=2;s<t.length;s+=e,r+=e){const n=t[s],o=t[r];t[s]=o,t[r]=-n}}_addMaterial(t){if(t===null)return;const e=this._materialMap.indexOf(t);if(e!==-1)return e;this.gltf.materials||(this.gltf.materials=[]);const s={};switch(t.alphaMode){case"mask":s.alphaMode=C.MASK;break;case"auto":case"blend":s.alphaMode=C.BLEND}t.alphaCutoff!==.5&&(s.alphaCutoff=t.alphaCutoff),t.doubleSided&&(s.doubleSided=t.doubleSided),s.pbrMetallicRoughness={};const r=h=>h**2.1,n=h=>{const a=h.toRgba();return a[0]=r(a[0]/255),a[1]=r(a[1]/255),a[2]=r(a[2]/255),a};if(w(t.color)&&(s.pbrMetallicRoughness.baseColorFactor=n(t.color)),w(t.colorTexture)&&(s.pbrMetallicRoughness.baseColorTexture={index:this._addTexture(t.colorTexture)}),w(t.normalTexture)&&(s.normalTexture={index:this._addTexture(t.normalTexture)}),t instanceof ft){if(w(t.emissiveTexture)&&(s.emissiveTexture={index:this._addTexture(t.emissiveTexture)}),w(t.emissiveColor)){const h=n(t.emissiveColor);s.emissiveFactor=[h[0],h[1],h[2]]}w(t.occlusionTexture)&&(s.occlusionTexture={index:this._addTexture(t.occlusionTexture)}),w(t.metallicRoughnessTexture)&&(s.pbrMetallicRoughness.metallicRoughnessTexture={index:this._addTexture(t.metallicRoughnessTexture)}),s.pbrMetallicRoughness.metallicFactor=t.metallic,s.pbrMetallicRoughness.roughnessFactor=t.roughness}else s.pbrMetallicRoughness.metallicFactor=1,s.pbrMetallicRoughness.roughnessFactor=1,bt.warnOnce("Meshes exported to GLTF without MeshMaterialMetallicRoughness material will appear different when imported back.");const o=this.gltf.materials.length;return this.gltf.materials.push(s),this._materialMap.push(t),o}_addTexture(t){const e=this.gltf.textures??[];return this.gltf.textures=e,tt(this._textureMap,t,()=>{const s={sampler:this._addSampler(t),source:this._addImage(t)},r=e.length;return e.push(s),r})}_addImage(t){const e=this._imageMap.get(t);if(e!=null)return e;this.gltf.images||(this.gltf.images=[]);const s={};if(t.url)s.uri=t.url;else{const n=t.data;s.extras=n;for(let h=0;h<this.gltf.images.length;++h)if(n===this.gltf.images[h].extras)return h;const o=this.gltf.extras;switch(o.options.imageOutputType){case y.GLB:{const h=o.binChunkBuffer.addBufferView(d.UNSIGNED_BYTE,_.SCALAR),a=Y(n).then(({data:c,type:l})=>(s.mimeType=l,c));h.writeAsync(a).then(()=>{h.finalize()}),s.bufferView=h.index;break}case y.DataURI:s.uri=lt(n);break;default:o.promises.push(Y(n).then(({data:h,type:a})=>{s.uri=h,s.mimeType=a}))}}const r=this.gltf.images.length;return this.gltf.images.push(s),this._imageMap.set(t,r),r}_addSampler(t){this.gltf.samplers||(this.gltf.samplers=[]);let e=T.REPEAT,s=T.REPEAT;if(typeof t.wrap=="string")switch(t.wrap){case"clamp":e=T.CLAMP_TO_EDGE,s=T.CLAMP_TO_EDGE;break;case"mirror":e=T.MIRRORED_REPEAT,s=T.MIRRORED_REPEAT}else{switch(t.wrap.vertical){case"clamp":s=T.CLAMP_TO_EDGE;break;case"mirror":s=T.MIRRORED_REPEAT}switch(t.wrap.horizontal){case"clamp":e=T.CLAMP_TO_EDGE;break;case"mirror":e=T.MIRRORED_REPEAT}}const r={wrapS:e,wrapT:s};for(let o=0;o<this.gltf.samplers.length;++o)if(JSON.stringify(r)===JSON.stringify(this.gltf.samplers[o]))return o;const n=this.gltf.samplers.length;return this.gltf.samplers.push(r),n}_addAccessor(t,e){this.gltf.accessors||(this.gltf.accessors=[]);const s={bufferView:t,byteOffset:e.byteOffset,componentType:e.componentType,count:e.count,type:e.type,min:e.min,max:e.max,name:e.name};e.normalized&&(s.normalized=!0);const r=this.gltf.accessors.length;return this.gltf.accessors.push(s),r}_addMeshVertexIndexed(t,e,s,r,n,o,h,a){for(const c of e){t.startAccessor("INDICES");for(let m=0;m<c.faces.length;++m)t.push(c.faces[m]);const l=t.endAccessor(),u={attributes:{POSITION:r},indices:this._addAccessor(t.index,l),material:this._addMaterial(c.material)};n&&c.shading!=="flat"&&(u.attributes.NORMAL=n),o&&(u.attributes.TEXCOORD_0=o),h&&c.shading!=="flat"&&(u.attributes.TANGENT=h),a&&(u.attributes.COLOR_0=a),s.primitives.push(u)}}_addMeshVertexNonIndexed(t,e,s,r,n,o,h){const a={attributes:{POSITION:s}};r&&(a.attributes.NORMAL=r),n&&(a.attributes.TEXCOORD_0=n),o&&(a.attributes.TANGENT=o),h&&(a.attributes.COLOR_0=h),t&&(a.material=this._addMaterial(t[0].material)),e.primitives.push(a)}}let Rt=class{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}addScene(t){if(this._scenes.includes(t))throw new Error("Scene already added");this._scenes.push(t)}removeScene(t){et(this._scenes,t)}forEachScene(t){this._scenes.forEach(t)}};class xt{constructor(){this.name="",this._nodes=[]}addNode(t){if(this._nodes.includes(t))throw new Error("Node already added");this._nodes.push(t)}forEachNode(t){this._nodes.forEach(t)}}class Nt{constructor(t){this.mesh=t,this.name="",this.translation=S(),this.rotation=ot(),this.scale=P(K),this._nodes=[]}addNode(t){if(this._nodes.includes(t))throw new Error("Node already added");this._nodes.push(t)}forEachNode(t){this._nodes.forEach(t)}set rotationAngles(t){it(this.rotation,t[0],t[1],t[2])}}const Ot="model.gltf",W="model.glb";function St(i,t,e){var u;const s=new Et(i,t=t||{},e);let r=s.params;r?r.origin||(r.origin=new D({x:-1,y:-1,z:-1})):r={origin:new D({x:-1,y:-1,z:-1})};const n=r.origin,o=s.gltf,h=((u=o.extras)==null?void 0:u.promises)??[];let a=1,c=1,l=null;return G(h).then(()=>{const m={origin:n};delete o.extras;const N=typeof t.jsonSpacing=="number"?t.jsonSpacing:4,b=JSON.stringify(o,(p,g)=>{if(p!=="extras"){if(g instanceof ArrayBuffer){if(dt(g))switch(t.imageOutputType){case y.DataURI:case y.GLB:break;case y.External:default:{const E=`img${c}.png`;return c++,m[E]=g,E}}switch(t.bufferOutputType){case x.DataURI:return pt(g);case x.GLB:if(l)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(l=g);case x.External:default:{const E=`data${a}.bin`;return a++,m[E]=g,E}}}return g}},N);return t.bufferOutputType===x.GLB||t.imageOutputType===y.GLB?m[W]=new A(b,l).buffer:m[Ot]=b,m})}function Mt(i,t){return St(i,{bufferOutputType:x.GLB,imageOutputType:y.GLB,jsonSpacing:0},t)}class Bt{constructor(t,e){this._file={type:"model/gltf-binary",data:t},this.origin=e}buffer(){return Promise.resolve(this._file)}download(t){Q(new Blob([this._file.data],{type:this._file.type}),t)}}function be(i,t){const e=new Rt,s=new xt;return e.addScene(s),s.addNode(new Nt(i)),Mt(e,t).then(r=>new Bt(r[W],r.origin))}export{be as toBinaryGLTF};
