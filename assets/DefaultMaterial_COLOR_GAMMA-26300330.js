import{a as X}from"./vec33-62fbb334.js";import{s as se,r as ae,c as ie,e as ue}from"./types-e1c0a5bf.js";import{ei as W,f as fe,lx as Q,t as Z,U as le,aw as ce,au as de,s as d,g$ as pe,ly as me,a1 as he,bl as ye,ga as Te,ls as we,lz as xe,gn as ge,de as _e,h8 as k,a3 as P,r as H,dg as be,lm as Se}from"./index-73a6a617.js";import{e as ee,r as z}from"./mat4f64-1413b4a7.js";import{D as G,L as j,C as p,E as I}from"./enums-64ab819c.js";import{r as te}from"./Version-b84ee121.js";import{x as Ee}from"./quat-dee8ffd3.js";import{e as Oe}from"./quatf64-3363c48e.js";import{B as Ne,g as Re,d as Ae,i as V,c as q,u as re,x as Ie,L as Be,O as Ce,E as Me,F as ve,w as Le,q as $e,A as Fe,V as Ue}from"./BufferView-5441f899.js";import{r as De,n as Pe,o as Ge,t as je}from"./resourceUtils-71fe9113.js";import{o as Ve,t as He}from"./Indices-76dea05f.js";function ze(n,t,e){if(n.count!==t.count)return void X.error("source and destination buffers need to have the same number of elements");const r=n.count,o=e[0],s=e[1],a=e[2],l=e[3],i=e[4],u=e[5],f=e[6],c=e[7],h=e[8],T=e[9],w=e[10],m=e[11],y=e[12],b=e[13],S=e[14],_=e[15],x=n.typedBuffer,E=n.typedBufferStride,g=t.typedBuffer,N=t.typedBufferStride;for(let A=0;A<r;A++){const R=A*E,C=A*N,M=g[C],v=g[C+1],L=g[C+2],$=g[C+3];x[R]=o*M+i*v+h*L+y*$,x[R+1]=s*M+u*v+T*L+b*$,x[R+2]=a*M+f*v+w*L+S*$,x[R+3]=l*M+c*v+m*L+_*$}}function ke(n,t,e){if(n.count!==t.count)return void X.error("source and destination buffers need to have the same number of elements");const r=n.count,o=e[0],s=e[1],a=e[2],l=e[3],i=e[4],u=e[5],f=e[6],c=e[7],h=e[8],T=n.typedBuffer,w=n.typedBufferStride,m=t.typedBuffer,y=t.typedBufferStride;for(let b=0;b<r;b++){const S=b*w,_=b*y,x=m[_],E=m[_+1],g=m[_+2],N=m[_+3];T[S]=o*x+l*E+f*g,T[S+1]=s*x+i*E+c*g,T[S+2]=a*x+u*E+h*g,T[S+3]=N}}function qe(n,t){const e=Math.min(n.count,t.count),r=n.typedBuffer,o=n.typedBufferStride,s=t.typedBuffer,a=t.typedBufferStride;for(let l=0;l<e;l++){const i=l*o,u=l*a,f=s[u],c=s[u+1],h=s[u+2],T=f*f+c*c+h*h;if(T>0){const w=1/Math.sqrt(T);r[i]=w*f,r[i+1]=w*c,r[i+2]=w*h}}}function Ke(n,t,e){const r=Math.min(n.count,t.count),o=n.typedBuffer,s=n.typedBufferStride,a=t.typedBuffer,l=t.typedBufferStride;for(let i=0;i<r;i++){const u=i*s,f=i*l;o[u]=e*a[f],o[u+1]=e*a[f+1],o[u+2]=e*a[f+2],o[u+3]=e*a[f+3]}}function Je(n,t,e){const r=Math.min(n.count,t.count),o=n.typedBuffer,s=n.typedBufferStride,a=t.typedBuffer,l=t.typedBufferStride;for(let i=0;i<r;i++){const u=i*s,f=i*l;o[u]=a[f]>>e,o[u+1]=a[f+1]>>e,o[u+2]=a[f+2]>>e,o[u+3]=a[f+3]>>e}}Object.freeze(Object.defineProperty({__proto__:null,normalize:qe,scale:Ke,shiftRight:Je,transformMat3:ke,transformMat4:ze},Symbol.toStringTag,{value:"Module"}));function Ye(n,t,e){const r=n.typedBuffer,o=n.typedBufferStride,s=t.typedBuffer,a=t.typedBufferStride,l=e?e.count:t.count;let i=(e&&e.dstIndex?e.dstIndex:0)*o,u=(e&&e.srcIndex?e.srcIndex:0)*a;for(let f=0;f<l;++f){for(let c=0;c<9;++c)r[i+c]=s[u+c];i+=o,u+=a}}Object.freeze(Object.defineProperty({__proto__:null,copy:Ye},Symbol.toStringTag,{value:"Module"}));function Xe(n,t,e){const r=n.typedBuffer,o=n.typedBufferStride,s=t.typedBuffer,a=t.typedBufferStride,l=e?e.count:t.count;let i=(e&&e.dstIndex?e.dstIndex:0)*o,u=(e&&e.srcIndex?e.srcIndex:0)*a;for(let f=0;f<l;++f){for(let c=0;c<16;++c)r[i+c]=s[u+c];i+=o,u+=a}}Object.freeze(Object.defineProperty({__proto__:null,copy:Xe},Symbol.toStringTag,{value:"Module"}));function We(n,t,e){const r=n.typedBuffer,o=n.typedBufferStride,s=t.typedBuffer,a=t.typedBufferStride,l=e?e.count:t.count;let i=(e&&e.dstIndex?e.dstIndex:0)*o,u=(e&&e.srcIndex?e.srcIndex:0)*a;for(let f=0;f<l;++f)r[i]=s[u],i+=o,u+=a}function D(n,t){const e=n.count;t||(t=new n.TypedArrayConstructor(e));for(let r=0;r<e;r++)t[r]=n.get(r);return t}Object.freeze(Object.defineProperty({__proto__:null,copy:We,makeDense:D},Symbol.toStringTag,{value:"Module"}));function ne(n,t,e){const r=n.typedBuffer,o=n.typedBufferStride,s=t.typedBuffer,a=t.typedBufferStride,l=e?e.count:t.count;let i=(e&&e.dstIndex?e.dstIndex:0)*o,u=(e&&e.srcIndex?e.srcIndex:0)*a;for(let f=0;f<l;++f)r[i]=s[u],r[i+1]=s[u+1],i+=o,u+=a}function Qe(n,t,e){const r=n.typedBuffer,o=n.typedBufferStride,s=t.typedBuffer,a=t.typedBufferStride,l=e?e.count:t.count;let i=(e&&e.dstIndex?e.dstIndex:0)*o,u=(e&&e.srcIndex?e.srcIndex:0)*a;if(se(t.elementType)){const f=ae(t.elementType);if(ie(t.elementType))for(let c=0;c<l;++c)r[i]=Math.max(s[u]/f,-1),r[i+1]=Math.max(s[u+1]/f,-1),i+=o,u+=a;else for(let c=0;c<l;++c)r[i]=s[u]/f,r[i+1]=s[u+1]/f,i+=o,u+=a}else ne(n,t,e);return n}function Ze(n,t,e,r){const o=n.typedBuffer,s=n.typedBufferStride,a=(r==null?void 0:r.count)??n.count;let l=((r==null?void 0:r.dstIndex)??0)*s;for(let i=0;i<a;++i)o[l]=t,o[l+1]=e,l+=s}Object.freeze(Object.defineProperty({__proto__:null,copy:ne,fill:Ze,normalizeIntegerBuffer:Qe},Symbol.toStringTag,{value:"Module"}));function et(n,t,e){const r=n.typedBuffer,o=n.typedBufferStride,s=t.typedBuffer,a=t.typedBufferStride,l=e?e.count:t.count;let i=(e&&e.dstIndex?e.dstIndex:0)*o,u=(e&&e.srcIndex?e.srcIndex:0)*a;for(let f=0;f<l;++f)r[i]=s[u],r[i+1]=s[u+1],r[i+2]=s[u+2],r[i+3]=s[u+3],i+=o,u+=a}function tt(n,t,e,r,o,s){const a=n.typedBuffer,l=n.typedBufferStride,i=(s==null?void 0:s.count)??n.count;let u=((s==null?void 0:s.dstIndex)??0)*l;for(let f=0;f<i;++f)a[u]=t,a[u+1]=e,a[u+2]=r,a[u+3]=o,u+=l}Object.freeze(Object.defineProperty({__proto__:null,copy:et,fill:tt},Symbol.toStringTag,{value:"Module"}));function vt(n,t){return new n(new ArrayBuffer(t*n.ElementCount*ue(n.ElementType)))}let Lt=class{constructor(t){this._streamDataRequester=t}async loadJSON(t,e){return this._load("json",t,e)}async loadBinary(t,e){return W(t)?(fe(e),Q(t)):this._load("binary",t,e)}async loadImage(t,e){return this._load("image",t,e)}async _load(t,e,r){if(Z(this._streamDataRequester))return(await le(e,{responseType:rt[t]})).data;const o=await ce(this._streamDataRequester.request(e,t,r));if(o.ok===!0)return o.value;throw de(o.error),new d("",`Request for resource failed: ${o.error}`)}};const rt={image:"image",binary:"array-buffer",json:"json"};function nt(n={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,colorTextureTransform:null,normalTextureTransform:null,occlusionTextureTransform:null,emissiveTextureTransform:null,metallicRoughnessTextureTransform:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...n}}function ot(n,t={}){return{data:n,parameters:{wrap:{s:G.REPEAT,t:G.REPEAT,...t.wrap},noUnpackFlip:!0,mipmap:!1,...t}}}let K=class{constructor(t){this._data=t,this._offset4=0,this._dataUint32=new Uint32Array(this._data,0,Math.floor(this._data.byteLength/4))}readUint32(){const t=this._offset4;return this._offset4+=1,this._dataUint32[t]}readUint8Array(t){const e=4*this._offset4;return this._offset4+=t/4,new Uint8Array(this._data,e,t)}remainingBytes(){return this._data.byteLength-4*this._offset4}};var B,J;(function(n){n.SCALAR="SCALAR",n.VEC2="VEC2",n.VEC3="VEC3",n.VEC4="VEC4",n.MAT2="MAT2",n.MAT3="MAT3",n.MAT4="MAT4"})(B||(B={})),function(n){n[n.ARRAY_BUFFER=34962]="ARRAY_BUFFER",n[n.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(J||(J={}));const oe={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},st={pbrMetallicRoughness:oe,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},at={ESRI_externalColorMixMode:"tint"},Y=(n={})=>{const t={...oe,...n.pbrMetallicRoughness},e=it({...at,...n.extras});return{...st,...n,pbrMetallicRoughness:t,extras:e}};function it(n){switch(n.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:pe(n.ESRI_externalColorMixMode),n.ESRI_externalColorMixMode="tint"}return n}const ut={magFilter:j.LINEAR,minFilter:j.LINEAR_MIPMAP_LINEAR,wrapS:G.REPEAT,wrapT:G.REPEAT},ft=n=>({...ut,...n});function lt(n){let t,e;return n.replace(/^(.*\/)?([^/]*)$/,(r,o,s)=>(t=o||"",e=s||"","")),{dirPart:t,filePart:e}}const F={MAGIC:1179937895,CHUNK_TYPE_JSON:1313821514,CHUNK_TYPE_BIN:5130562,MIN_HEADER_LENGTH:20};class O{constructor(t,e,r,o){if(this._context=t,this.uri=e,this.json=r,this._glbBuffer=o,this._bufferLoaders=new Map,this._textureLoaders=new Map,this._textureCache=new Map,this._materialCache=new Map,this._nodeParentMap=new Map,this._nodeTransformCache=new Map,this._supportedExtensions=["KHR_texture_basisu"],this._baseUri=lt(this.uri).dirPart,this._checkVersionSupported(),this._checkRequiredExtensionsSupported(),r.scenes==null)throw new d("gltf-loader-unsupported-feature","Scenes must be defined.");if(r.meshes==null)throw new d("gltf-loader-unsupported-feature","Meshes must be defined");if(r.nodes==null)throw new d("gltf-loader-unsupported-feature","Nodes must be defined.");this._computeNodeParents()}static async load(t,e,r){if(W(e)){const a=he(e);if(a&&a.mediaType!=="model/gltf-binary")try{const i=JSON.parse(a.isBase64?atob(a.data):a.data);return new O(t,e,i)}catch{}const l=Q(e);if(O._isGLBData(l))return this._fromGLBData(t,e,l)}if(e.endsWith(".gltf")){const a=await t.loadJSON(e,r);return new O(t,e,a)}const o=await t.loadBinary(e,r);if(O._isGLBData(o))return this._fromGLBData(t,e,o);const s=await t.loadJSON(e,r);return new O(t,e,s)}static _isGLBData(t){if(t==null)return!1;const e=new K(t);return e.remainingBytes()>=4&&e.readUint32()===F.MAGIC}static async _fromGLBData(t,e,r){const o=await O._parseGLBData(r);return new O(t,e,o.json,o.binaryData)}static async _parseGLBData(t){const e=new K(t);if(e.remainingBytes()<12)throw new d("gltf-loader-error","GLB binary data is insufficiently large.");const r=e.readUint32(),o=e.readUint32(),s=e.readUint32();if(r!==F.MAGIC)throw new d("gltf-loader-error","Magic first 4 bytes do not fit to expected GLB value.");if(t.byteLength<s)throw new d("gltf-loader-error","GLB binary data is smaller than header specifies.");if(o!==2)throw new d("gltf-loader-unsupported-feature","An unsupported GLB container version was detected. Only version 2 is supported.");let a,l,i=0;for(;e.remainingBytes()>=8;){const u=e.readUint32(),f=e.readUint32();if(i===0){if(f!==F.CHUNK_TYPE_JSON)throw new d("gltf-loader-error","First GLB chunk must be JSON.");if(u<0)throw new d("gltf-loader-error","No JSON data found.");a=await De(e.readUint8Array(u))}else if(i===1){if(f!==F.CHUNK_TYPE_BIN)throw new d("gltf-loader-unsupported-feature","Second GLB chunk expected to be BIN.");l=e.readUint8Array(u)}else P.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] More than 2 GLB chunks detected. Skipping.");i+=1}if(!a)throw new d("gltf-loader-error","No GLB JSON chunk detected.");return{json:a,binaryData:l}}async getBuffer(t,e){const r=this.json.buffers[t];if(r.uri==null){if(this._glbBuffer==null)throw new d("gltf-loader-error","GLB buffer not present");return this._glbBuffer}const o=await this._getBufferLoader(t,e);if(o.byteLength!==r.byteLength)throw new d("gltf-loader-error","Buffer byte lengths should match.");return o}async _getBufferLoader(t,e){const r=this._bufferLoaders.get(t);if(r)return r;const o=this.json.buffers[t].uri,s=this._context.loadBinary(this._resolveUri(o),e).then(a=>new Uint8Array(a));return this._bufferLoaders.set(t,s),s}async getAccessor(t,e){if(!this.json.accessors)throw new d("gltf-loader-unsupported-feature","Accessors missing.");const r=this.json.accessors[t];if((r==null?void 0:r.bufferView)==null)throw new d("gltf-loader-unsupported-feature","Some accessor does not specify a bufferView.");if(r.type in[B.MAT2,B.MAT3,B.MAT4])throw new d("gltf-loader-unsupported-feature",`AttributeType ${r.type} is not supported`);const o=this.json.bufferViews[r.bufferView],s=await this.getBuffer(o.buffer,e),a=pt[r.type],l=mt[r.componentType],i=a*l,u=o.byteStride||i;return{raw:s.buffer,byteStride:u,byteOffset:s.byteOffset+(o.byteOffset||0)+(r.byteOffset||0),entryCount:r.count,isDenselyPacked:u===i,componentCount:a,componentByteSize:l,componentType:r.componentType,min:r.min,max:r.max,normalized:!!r.normalized}}async getIndexData(t,e){if(t.indices==null)return;const r=await this.getAccessor(t.indices,e);if(r.isDenselyPacked)switch(r.componentType){case p.UNSIGNED_BYTE:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case p.UNSIGNED_SHORT:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case p.UNSIGNED_INT:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case p.UNSIGNED_BYTE:return D(this._wrapAccessor(Ae,r));case p.UNSIGNED_SHORT:return D(this._wrapAccessor(Re,r));case p.UNSIGNED_INT:return D(this._wrapAccessor(Ne,r))}}async getPositionData(t,e){if(t.attributes.POSITION==null)throw new d("gltf-loader-unsupported-feature","No POSITION vertex data found.");const r=await this.getAccessor(t.attributes.POSITION,e);if(r.componentType!==p.FLOAT)throw new d("gltf-loader-unsupported-feature","Expected type FLOAT for POSITION vertex attribute, but found "+p[r.componentType]);if(r.componentCount!==3)throw new d("gltf-loader-unsupported-feature","POSITION vertex attribute must have 3 components, but found "+r.componentCount.toFixed());return this._wrapAccessor(V,r)}async getNormalData(t,e){if(t.attributes.NORMAL==null)throw new d("gltf-loader-error","No NORMAL vertex data found.");const r=await this.getAccessor(t.attributes.NORMAL,e);if(r.componentType!==p.FLOAT)throw new d("gltf-loader-unsupported-feature","Expected type FLOAT for NORMAL vertex attribute, but found "+p[r.componentType]);if(r.componentCount!==3)throw new d("gltf-loader-unsupported-feature","NORMAL vertex attribute must have 3 components, but found "+r.componentCount.toFixed());return this._wrapAccessor(V,r)}async getTangentData(t,e){if(t.attributes.TANGENT==null)throw new d("gltf-loader-error","No TANGENT vertex data found.");const r=await this.getAccessor(t.attributes.TANGENT,e);if(r.componentType!==p.FLOAT)throw new d("gltf-loader-unsupported-feature","Expected type FLOAT for TANGENT vertex attribute, but found "+p[r.componentType]);if(r.componentCount!==4)throw new d("gltf-loader-unsupported-feature","TANGENT vertex attribute must have 4 components, but found "+r.componentCount.toFixed());return new q(r.raw,r.byteOffset,r.byteStride,r.byteOffset+r.byteStride*r.entryCount)}async getTextureCoordinates(t,e){if(t.attributes.TEXCOORD_0==null)throw new d("gltf-loader-error","No TEXCOORD_0 vertex data found.");const r=await this.getAccessor(t.attributes.TEXCOORD_0,e);if(r.componentCount!==2)throw new d("gltf-loader-unsupported-feature","TEXCOORD_0 vertex attribute must have 2 components, but found "+r.componentCount.toFixed());if(r.componentType===p.FLOAT)return this._wrapAccessor(re,r);if(!r.normalized)throw new d("gltf-loader-unsupported-feature","Integer component types are only supported for a normalized accessor for TEXCOORD_0.");return ht(r)}async getVertexColors(t,e){if(t.attributes.COLOR_0==null)throw new d("gltf-loader-error","No COLOR_0 vertex data found.");const r=await this.getAccessor(t.attributes.COLOR_0,e);if(r.componentCount!==4&&r.componentCount!==3)throw new d("gltf-loader-unsupported-feature","COLOR_0 attribute must have 3 or 4 components, but found "+r.componentCount.toFixed());if(r.componentCount===4){if(r.componentType===p.FLOAT)return this._wrapAccessor(q,r);if(r.componentType===p.UNSIGNED_BYTE)return this._wrapAccessor(Ie,r);if(r.componentType===p.UNSIGNED_SHORT)return this._wrapAccessor(Be,r)}else if(r.componentCount===3){if(r.componentType===p.FLOAT)return this._wrapAccessor(V,r);if(r.componentType===p.UNSIGNED_BYTE)return this._wrapAccessor(Ce,r);if(r.componentType===p.UNSIGNED_SHORT)return this._wrapAccessor(Me,r)}throw new d("gltf-loader-unsupported-feature","Unsupported component type for COLOR_0 attribute: "+p[r.componentType])}hasPositions(t){return t.attributes.POSITION!==void 0}hasNormals(t){return t.attributes.NORMAL!==void 0}hasVertexColors(t){return t.attributes.COLOR_0!==void 0}hasTextureCoordinates(t){return t.attributes.TEXCOORD_0!==void 0}hasTangents(t){return t.attributes.TANGENT!==void 0}async getMaterial(t,e,r){var s,a,l,i,u,f,c,h,T,w;let o=t.material?this._materialCache.get(t.material):void 0;if(!o){const m=t.material!=null?Y(this.json.materials[t.material]):Y(),y=m.pbrMetallicRoughness,b=this.hasVertexColors(t),S=this.getTexture(y.baseColorTexture,e),_=this.getTexture(m.normalTexture,e),x=r?this.getTexture(m.occlusionTexture,e):void 0,E=r?this.getTexture(m.emissiveTexture,e):void 0,g=r?this.getTexture(y.metallicRoughnessTexture,e):void 0,N=t.material!=null?t.material:-1;o={alphaMode:m.alphaMode,alphaCutoff:m.alphaCutoff,color:y.baseColorFactor,doubleSided:!!m.doubleSided,colorTexture:await S,normalTexture:await _,name:m.name,id:N,occlusionTexture:await x,emissiveTexture:await E,emissiveFactor:m.emissiveFactor,metallicFactor:y.metallicFactor,roughnessFactor:y.roughnessFactor,metallicRoughnessTexture:await g,hasVertexColors:b,ESRI_externalColorMixMode:m.extras.ESRI_externalColorMixMode,colorTextureTransform:(a=(s=y==null?void 0:y.baseColorTexture)==null?void 0:s.extensions)==null?void 0:a.KHR_texture_transform,normalTextureTransform:(i=(l=m.normalTexture)==null?void 0:l.extensions)==null?void 0:i.KHR_texture_transform,occlusionTextureTransform:(f=(u=m.occlusionTexture)==null?void 0:u.extensions)==null?void 0:f.KHR_texture_transform,emissiveTextureTransform:(h=(c=m.emissiveTexture)==null?void 0:c.extensions)==null?void 0:h.KHR_texture_transform,metallicRoughnessTextureTransform:(w=(T=y==null?void 0:y.metallicRoughnessTexture)==null?void 0:T.extensions)==null?void 0:w.KHR_texture_transform}}return o}async getTexture(t,e){if(!t)return;if((t.texCoord||0)!==0)throw new d("gltf-loader-unsupported-feature","Only TEXCOORD with index 0 is supported.");const r=t.index,o=this.json.textures[r],s=ft(o.sampler!=null?this.json.samplers[o.sampler]:{}),a=this._getTextureSourceId(o),l=this.json.images[a],i=await this._loadTextureImageData(r,o,e);return ye(this._textureCache,r,()=>{const u=c=>c===33071||c===33648||c===10497,f=c=>{throw new d("gltf-loader-error",`Unexpected TextureSampler WrapMode: ${c}`)};return{data:i,wrapS:u(s.wrapS)?s.wrapS:f(s.wrapS),wrapT:u(s.wrapT)?s.wrapT:f(s.wrapT),minFilter:s.minFilter,name:l.name,id:r}})}getNodeTransform(t){if(t===void 0)return ct;let e=this._nodeTransformCache.get(t);if(!e){const r=this.getNodeTransform(this._getNodeParent(t)),o=this.json.nodes[t];o.matrix?e=Te(ee(),r,o.matrix):o.translation||o.rotation||o.scale?(e=z(r),o.translation&&we(e,e,o.translation),o.rotation&&(U[3]=Ee(U,o.rotation),xe(e,e,U[3],U)),o.scale&&ge(e,e,o.scale)):e=z(r),this._nodeTransformCache.set(t,e)}return e}_wrapAccessor(t,e){return new t(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*(e.entryCount-1)+e.componentByteSize*e.componentCount)}_resolveUri(t){return _e(t,this._baseUri)}_getNodeParent(t){return this._nodeParentMap.get(t)}_checkVersionSupported(){const t=te.parse(this.json.asset.version,"glTF");dt.validate(t)}_checkRequiredExtensionsSupported(){const t=this.json;if(t.extensionsRequired&&!t.extensionsRequired.every(e=>this._supportedExtensions.includes(e)))throw new d("gltf-loader-unsupported-feature","gltf loader was not able to load unsupported feature. Required extensions: "+t.extensionsRequired.join(", "))}_computeNodeParents(){this.json.nodes.forEach((t,e)=>{t.children&&t.children.forEach(r=>{this._nodeParentMap.set(r,e)})})}async _loadTextureImageData(t,e,r){const o=this._textureLoaders.get(t);if(o)return o;const s=this._createTextureLoader(e,r);return this._textureLoaders.set(t,s),s}_getTextureSourceId(t){if(t.extensions!==void 0&&t.extensions.KHR_texture_basisu!==null)return t.extensions.KHR_texture_basisu.source;if(t.source!==null)return t.source;throw new d("gltf-loader-unsupported-feature","Source is expected to be defined for a texture. It can also be omitted in favour of an KHR_texture_basisu extension tag.")}async _createTextureLoader(t,e){const r=this._getTextureSourceId(t),o=this.json.images[r];if(o.uri){if(o.uri.endsWith(".ktx2")){const i=await this._context.loadBinary(this._resolveUri(o.uri),e);return new Pe(new Uint8Array(i))}return this._context.loadImage(this._resolveUri(o.uri),e)}if(o.bufferView==null)throw new d("gltf-loader-unsupported-feature","Image bufferView must be defined.");if(o.mimeType==null)throw new d("gltf-loader-unsupported-feature","Image mimeType must be defined.");const s=this.json.bufferViews[o.bufferView],a=await this.getBuffer(s.buffer,e);if(s.byteStride!=null)throw new d("gltf-loader-unsupported-feature","byteStride not supported for image buffer");const l=a.byteOffset+(s.byteOffset||0);return Ge(new Uint8Array(a.buffer,l,s.byteLength),o.mimeType)}async getLoadedBuffersSize(){if(this._glbBuffer)return this._glbBuffer.byteLength;const t=await k(Array.from(this._bufferLoaders.values())),e=await k(Array.from(this._textureLoaders.values()));return t.reduce((r,o)=>r+((o==null?void 0:o.byteLength)??0),0)+e.reduce((r,o)=>r+(o?je(o)?o.data.byteLength:o.width*o.height*4:0),0)}}const ct=me(ee(),Math.PI/2),dt=new te(2,0,"glTF"),U=Oe(),pt={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},mt={[p.BYTE]:1,[p.UNSIGNED_BYTE]:1,[p.SHORT]:2,[p.UNSIGNED_SHORT]:2,[p.FLOAT]:4,[p.UNSIGNED_INT]:4};function ht(n){switch(n.componentType){case p.BYTE:return new Ue(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case p.UNSIGNED_BYTE:return new Fe(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case p.SHORT:return new $e(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case p.UNSIGNED_SHORT:return new Le(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case p.UNSIGNED_INT:return new ve(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case p.FLOAT:return new re(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount)}}let yt=0;async function Ut(n,t,e={},r=!0){const o=await O.load(n,t,e),s="gltf_"+yt++,a={lods:[],materials:new Map,textures:new Map,meta:Tt(o)},l=!(!o.json.asset.extras||o.json.asset.extras.ESRI_type!=="symbolResource"),i=new Map;await wt(o,async(f,c,h,T)=>{const w=i.get(h)??0;i.set(h,w+1);const m=f.mode!==void 0?f.mode:I.TRIANGLES,y=m===I.TRIANGLES||m===I.TRIANGLE_STRIP||m===I.TRIANGLE_FAN?m:null;if(Z(y))return void P.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Unsupported primitive mode ("+I[m]+"). Skipping primitive.");if(!o.hasPositions(f))return void P.getLogger("esri.views.3d.glTF").warn("Skipping primitive without POSITION vertex attribute.");const b=o.getPositionData(f,e),S=o.getMaterial(f,e,r),_=o.hasNormals(f)?o.getNormalData(f,e):null,x=o.hasTangents(f)?o.getTangentData(f,e):null,E=o.hasTextureCoordinates(f)?o.getTextureCoordinates(f,e):null,g=o.hasVertexColors(f)?o.getVertexColors(f,e):null,N=o.getIndexData(f,e),A={transform:z(c),attributes:{position:await b,normal:_?await _:null,texCoord0:E?await E:null,color:g?await g:null,tangent:x?await x:null},indices:await N,primitiveType:y,material:gt(a,await S,s)};let R=null;H(a.meta)&&H(a.meta.ESRI_lod)&&a.meta.ESRI_lod.metric==="screenSpaceRadius"&&(R=a.meta.ESRI_lod.thresholds[h]),a.lods[h]=a.lods[h]||{parts:[],name:T,lodThreshold:R},a.lods[h].parts[w]=A});for(const f of a.lods)f.parts=f.parts.filter(c=>!!c);const u=await o.getLoadedBuffersSize();return{model:a,meta:{isEsriSymbolResource:l,uri:o.uri},customMeta:{},size:u}}function Tt(n){const t=n.json;let e=null;return t.nodes.forEach(r=>{const o=r.extras;H(o)&&(o.ESRI_proxyEllipsoid||o.ESRI_lod)&&(e=o)}),e}async function wt(n,t){const e=n.json,r=e.scenes[e.scene||0].nodes,o=r.length>1,s=[];for(const l of r){const i=e.nodes[l];s.push(a(l,0)),xt(i)&&!o&&i.extensions.MSFT_lod.ids.forEach((u,f)=>a(u,f+1))}async function a(l,i){const u=e.nodes[l],f=n.getNodeTransform(l);if(u.weights!=null&&P.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Morph targets are not supported."),u.mesh!=null){const c=e.meshes[u.mesh];for(const h of c.primitives)s.push(t(h,f,i,c.name))}for(const c of u.children||[])s.push(a(c,i))}await Promise.all(s)}function xt(n){return n.extensions&&n.extensions.MSFT_lod&&Array.isArray(n.extensions.MSFT_lod.ids)}function gt(n,t,e){const r=s=>{const a=`${e}_tex_${s&&s.id}${s&&s.name?"_"+s.name:""}`;if(s&&!n.textures.has(a)){const l=ot(s.data,{wrap:{s:s.wrapS,t:s.wrapT},mipmap:_t.includes(s.minFilter),noUnpackFlip:!0});n.textures.set(a,l)}return a},o=`${e}_mat_${t.id}_${t.name}`;if(!n.materials.has(o)){const s=nt({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?r(t.colorTexture):void 0,textureNormal:t.normalTexture?r(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?r(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?r(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?r(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],colorTextureTransform:t.colorTextureTransform,normalTextureTransform:t.normalTextureTransform,occlusionTextureTransform:t.occlusionTextureTransform,emissiveTextureTransform:t.emissiveTextureTransform,metallicRoughnessTextureTransform:t.metallicRoughnessTextureTransform,metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor});n.materials.set(o,s)}return o}const _t=[j.LINEAR_MIPMAP_LINEAR,j.LINEAR_MIPMAP_NEAREST];function Dt(n,t=Ve){return typeof n=="number"?t(n):be(n)||Se(n)?new Uint32Array(n):n}function Pt(n){const t=typeof n=="number"?n:n.length;if(t<3)return[];const e=t-2,r=He(e);if(typeof n=="number"){let o=0;for(let s=0;s<e;s+=1)s%2==0?(r[o++]=s,r[o++]=s+1,r[o++]=s+2):(r[o++]=s+1,r[o++]=s,r[o++]=s+2)}else{let o=0;for(let s=0;s<e;s+=1)if(s%2==0){const a=n[s],l=n[s+1],i=n[s+2];r[o++]=a,r[o++]=l,r[o++]=i}else{const a=n[s+1],l=n[s],i=n[s+2];r[o++]=a,r[o++]=l,r[o++]=i}}return r}function Gt(n){const t=typeof n=="number"?n:n.length;if(t<3)return new Uint16Array(0);const e=t-2,r=e<=65536?new Uint16Array(3*e):new Uint32Array(3*e);if(typeof n=="number"){let o=0;for(let s=0;s<e;++s)r[o++]=0,r[o++]=s+1,r[o++]=s+2;return r}{const o=n[0];let s=n[1],a=0;for(let l=0;l<e;++l){const i=n[l+2];r[a++]=o,r[a++]=s,r[a++]=i,s=i}return r}}const jt=2.1;export{ke as a,Qe as b,Ke as c,Dt as d,et as e,Pt as f,qe as g,Ze as h,Gt as i,Je as j,Ut as m,Lt as n,jt as o,vt as r,tt as t};
