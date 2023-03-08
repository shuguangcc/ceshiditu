import{a as l,s as D}from"./Error-653283ae.js";import{y as S}from"./string-cdf077e6.js";import{O as U}from"./VertexAttribute-9c5c630d.js";function $(){const e=new Float32Array(4);return e[3]=1,e}function E(e){const t=new Float32Array(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function V(e,t,r,i){const o=new Float32Array(4);return o[0]=e,o[1]=t,o[2]=r,o[3]=i,o}function Y(e,t){return new Float32Array(e,t,4)}Object.freeze(Object.defineProperty({__proto__:null,create:$,clone:E,fromValues:V,createView:Y},Symbol.toStringTag,{value:"Module"}));const d=!0,m={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};function M(e,t,r){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,r+m.identifierOffset,m.identifierLength)),version:t.getUint16(r+m.versionOffset,d),checksum:t.getUint32(r+m.checksumOffset,d)}}const g={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};function R(e,t){return{sizeLo:e.getUint32(t+g.sizeLo,d),sizeHi:e.getUint32(t+g.sizeHi,d),minX:e.getFloat64(t+g.minX,d),minY:e.getFloat64(t+g.minY,d),minZ:e.getFloat64(t+g.minZ,d),maxX:e.getFloat64(t+g.maxX,d),maxY:e.getFloat64(t+g.maxY,d),maxZ:e.getFloat64(t+g.maxZ,d),errorX:e.getFloat64(t+g.errorX,d),errorY:e.getFloat64(t+g.errorY,d),errorZ:e.getFloat64(t+g.errorZ,d),count:e.getUint32(t+g.count,d),reserved:e.getUint32(t+g.reserved,d)}}function re(e){const t=new DataView(e,0);let r=0;const{identifier:i,version:o}=M(e,t,r);if(r+=m.byteCount,i!=="LEPCC     ")throw new l("lepcc-decode-error","Bad identifier");if(o>1)throw new l("lepcc-decode-error","Unknown version");const n=R(t,r);if(r+=g.byteCount,n.sizeHi*2**32+n.sizeLo!==e.byteLength)throw new l("lepcc-decode-error","Bad size");const a=new Float64Array(3*n.count),u=[],c=[],s=[],f=[];if(r=A(e,r,u),r=A(e,r,c),r=A(e,r,s),r=A(e,r,f),r!==e.byteLength)throw new l("lepcc-decode-error","Bad length");let y=0,w=0;for(let b=0;b<u.length;b++){w+=u[b];let v=0;for(let C=0;C<c[b];C++){v+=s[y];const P=f[y];a[3*y]=Math.min(n.maxX,n.minX+2*n.errorX*v),a[3*y+1]=Math.min(n.maxY,n.minY+2*n.errorY*w),a[3*y+2]=Math.min(n.maxZ,n.minZ+2*n.errorZ*P),y++}}return{errorX:n.errorX,errorY:n.errorY,errorZ:n.errorZ,result:a}}function A(e,t,r){const i=[];t=L(e,t,i);const o=[];for(let n=0;n<i.length;n++){o.length=0,t=L(e,t,o);for(let a=0;a<o.length;a++)r.push(o[a]+i[n])}return t}function L(e,t,r){const i=new DataView(e,t),o=i.getUint8(0),n=31&o,a=!!(32&o),u=(192&o)>>6;let c=0;if(u===0)c=i.getUint32(1,d),t+=5;else if(u===1)c=i.getUint16(1,d),t+=3;else{if(u!==2)throw new l("lepcc-decode-error","Bad count type");c=i.getUint8(1),t+=2}if(a)throw new l("lepcc-decode-error","LUT not implemented");const s=Math.ceil(c*n/8),f=new Uint8Array(e,t,s);let y=0,w=0,b=0;const v=-1>>>32-n;for(let C=0;C<c;C++){for(;w<n;)y|=f[b]<<w,w+=8,b+=1;r[C]=y&v,y>>>=n,w-=n,w+n>32&&(y|=f[b-1]>>8-w)}return t+b}const h={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16};function X(e,t){return{sizeLo:e.getUint32(t+h.sizeLo,d),sizeHi:e.getUint32(t+h.sizeHi,d),count:e.getUint32(t+h.count,d),colorMapCount:e.getUint16(t+h.colorMapCount,d),lookupMethod:e.getUint8(t+h.lookupMethod),compressionMethod:e.getUint8(t+h.compressionMethod)}}function Z(e){const t=new DataView(e,0);let r=0;const{identifier:i,version:o}=M(e,t,r);if(r+=m.byteCount,i!=="ClusterRGB")throw new l("lepcc-decode-error","Bad identifier");if(o>1)throw new l("lepcc-decode-error","Unknown version");const n=X(t,r);if(r+=h.byteCount,n.sizeHi*2**32+n.sizeLo!==e.byteLength)throw new l("lepcc-decode-error","Bad size");if((n.lookupMethod===2||n.lookupMethod===1)&&n.compressionMethod===0){if(3*n.colorMapCount+n.count+r!==e.byteLength||n.colorMapCount>256)throw new l("lepcc-decode-error","Bad count");const a=new Uint8Array(e,r,3*n.colorMapCount),u=new Uint8Array(e,r+3*n.colorMapCount,n.count),c=new Uint8Array(3*n.count);for(let s=0;s<n.count;s++){const f=u[s];c[3*s]=a[3*f],c[3*s+1]=a[3*f+1],c[3*s+2]=a[3*f+2]}return c}if(n.lookupMethod===0&&n.compressionMethod===0){if(3*n.count+r!==e.byteLength||n.colorMapCount!==0)throw new l("lepcc-decode-error","Bad count");return new Uint8Array(e,r).slice()}if(n.lookupMethod<=2&&n.compressionMethod===1){if(r+3!==e.byteLength||n.colorMapCount!==1)throw new l("lepcc-decode-error","Bad count");const a=t.getUint8(r),u=t.getUint8(r+1),c=t.getUint8(r+2),s=new Uint8Array(3*n.count);for(let f=0;f<n.count;f++)s[3*f]=a,s[3*f+1]=u,s[3*f+2]=c;return s}throw new l("lepcc-decode-error","Bad method "+n.lookupMethod+","+n.compressionMethod)}const p={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16};function H(e,t){return{sizeLo:e.getUint32(t+p.sizeLo,d),sizeHi:e.getUint32(t+p.sizeHi,d),count:e.getUint32(t+p.count,d),scaleFactor:e.getUint16(t+p.scaleFactor,d),bitsPerPoint:e.getUint8(t+p.bitsPerPoint),reserved:e.getUint8(t+p.reserved)}}function j(e){const t=new DataView(e,0);let r=0;const{identifier:i,version:o}=M(e,t,r);if(r+=m.byteCount,i!=="Intensity ")throw new l("lepcc-decode-error","Bad identifier");if(o>1)throw new l("lepcc-decode-error","Unknown version");const n=H(t,r);if(r+=p.byteCount,n.sizeHi*2**32+n.sizeLo!==e.byteLength)throw new l("lepcc-decode-error","Bad size");const a=new Uint16Array(n.count);if(n.bitsPerPoint===8){if(n.count+r!==e.byteLength)throw new l("lepcc-decode-error","Bad size");const u=new Uint8Array(e,r,n.count);for(let c=0;c<n.count;c++)a[c]=u[c]*n.scaleFactor}else if(n.bitsPerPoint===16){if(2*n.count+r!==e.byteLength)throw new l("lepcc-decode-error","Bad size");const u=new Uint16Array(e,r,n.count);for(let c=0;c<n.count;c++)a[c]=u[c]*n.scaleFactor}else{const u=[];if(L(e,r,u)!==e.byteLength)throw new l("lepcc-decode-error","Bad size");for(let c=0;c<n.count;c++)a[c]=u[c]*n.scaleFactor}return a}const z=D.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function _(e,t,r){let i="",o=0;for(;o<r;){const n=e[t+o];if(n<128)i+=String.fromCharCode(n),o++;else if(n>=192&&n<224){if(o+1>=r)throw new l("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const a=(31&n)<<6|63&e[t+o+1];i+=String.fromCharCode(a),o+=2}else if(n>=224&&n<240){if(o+2>=r)throw new l("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(15&n)<<12|(63&e[t+o+1])<<6|63&e[t+o+2];i+=String.fromCharCode(a),o+=3}else{if(!(n>=240&&n<248))throw new l("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(o+3>=r)throw new l("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(7&n)<<18|(63&e[t+o+1])<<12|(63&e[t+o+2])<<6|63&e[t+o+3];if(a>=65536){const u=55296+(a-65536>>10),c=56320+(1023&a);i+=String.fromCharCode(u,c)}else i+=String.fromCharCode(a);o+=4}}}return i}function B(e,t){const r={byteOffset:0,byteCount:0,fields:Object.create(null)};let i=0;for(let o=0;o<t.length;o++){const n=t[o],a=n.valueType||n.type,u=Q[a];r.fields[n.property]=u(e,i),i+=O[a].BYTES_PER_ELEMENT}return r.byteCount=i,r}function N(e,t,r){const i=[];let o,n,a=0;for(n=0;n<e;n+=1){if(o=t[n],o>0){if(i.push(_(r,a,o-1)),r[a+o-1]!==0)throw new l("string-array-error","Invalid string array: missing null termination.")}else i.push(null);a+=o}return i}function F(e,t){return new O[t.valueType](e,t.byteOffset,t.count*t.valuesPerElement)}function G(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}function W(e,t,r){const i=t.header!=null?B(e,t.header):{byteOffset:0,byteCount:0,fields:{count:r}},o={header:i,byteOffset:i.byteCount,byteCount:0,entries:Object.create(null)};let n=i.byteCount;for(let a=0;a<t.ordering.length;a++){const u=t.ordering[a],c=S(t[u]);if(c.count=i.fields.count,c.valueType==="String"){if(c.byteOffset=n,c.byteCount=i.fields[u+"ByteCount"],c.encoding!=="UTF-8")throw new l("unsupported-encoding","Unsupported String encoding.",{encoding:c.encoding})}else{if(!k(c.valueType))throw new l("unsupported-value-type","Unsupported binary valueType",{valueType:c.valueType});{const s=I(c.valueType);n+=n%s!=0?s-n%s:0,c.byteOffset=n,c.byteCount=s*c.valuesPerElement*c.count}}n+=c.byteCount,o.entries[u]=c}return o.byteCount=n-o.byteOffset,o}function T(e,t,r){if(t!==e&&z.error(`Invalid ${r} buffer size
 expected: ${e}, actual: ${t})`),t<e)throw new l("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}function q(e){return{isDraco:!1,isLegacy:!1,color:e.color!=null,normal:e.normal!=null,uv0:e.uv0!=null,uvRegion:e.uvRegion!=null,featureIndex:e.faceRange!=null&&e.featureId!=null}}function oe(e,t){const r=B(e,t&&t.header);let i=r.byteCount;const o={isDraco:!1,header:r,byteOffset:r.byteCount,byteCount:0,vertexAttributes:{}},n=r.fields,a=n.vertexCount!=null?n.vertexCount:n.count;for(const s of t.ordering){if(!t.vertexAttributes[s])continue;const f={...t.vertexAttributes[s],byteOffset:i,count:a},y=x[s]?x[s]:"_"+s;o.vertexAttributes[y]=f,i+=I(f.valueType)*f.valuesPerElement*a}const u=n.faceCount;if(t.faces&&u){o.faces={};for(const s of t.ordering){if(!t.faces[s])continue;const f={...t.faces[s],byteOffset:i,count:u};o.faces[s]=f,i+=I(f.valueType)*f.valuesPerElement*u}}const c=n.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&c){o.featureAttributes={};for(const s of t.featureAttributeOrder){if(!t.featureAttributes[s])continue;const f={...t.featureAttributes[s],byteOffset:i,count:c};o.featureAttributes[s]=f,i+=(f.valueType==="UInt64"?8:I(f.valueType))*f.valuesPerElement*c}}return T(i,e.byteLength,"geometry"),o.byteCount=i-o.byteOffset,o}function ie(e,t){return!e||!e.compressedAttributes||e.compressedAttributes.encoding!=="draco"?e?q(e):J(t):K(e.compressedAttributes.attributes)}function J(e){const t={isDraco:!1,isLegacy:!0,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1};for(const r of e.ordering)if(e.vertexAttributes[r])switch(r){case"position":break;case"normal":t.normal=!0;break;case"color":t.color=!0;break;case"uv0":t.uv0=!0;break;case"region":t.uvRegion=!0}return e.featureAttributes&&e.featureAttributeOrder&&(t.featureIndex=!0),t}function K(e){const t={isDraco:!0,isLegacy:!1,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1};for(const r of e)switch(r){case"position":break;case"normal":t.normal=!0;break;case"uv0":t.uv0=!0;break;case"color":t.color=!0;break;case"uv-region":t.uvRegion=!0;break;case"feature-index":t.featureIndex=!0}return t}const x={position:U.POSITION,normal:U.NORMAL,color:U.COLOR,uv0:U.UV0,region:U.UVREGION};function ce(e,t,r){if(e.encoding==="lepcc-rgb")return Z(t);if(e.encoding==="lepcc-intensity")return j(t);if(e.encoding!=null&&e.encoding!=="")throw new l("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(z.warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),e.ordering[0]==="ObjectIds"&&e.hasOwnProperty("objectIds")&&(z.warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");const i=W(t,e,r);T(i.byteOffset+i.byteCount,t.byteLength,"attribute");const o=i.entries.attributeValues||i.entries.objectIds;if(o){if(o.valueType==="String"){const n=i.entries.attributeByteCounts,a=F(t,n),u=G(t,o);return N(n.count,a,u)}return F(t,o)}throw new l("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const O={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},Q={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function k(e){return O.hasOwnProperty(e)}function I(e){return k(e)?O[e].BYTES_PER_ELEMENT:0}export{ce as I,re as c,$ as e,F as f,oe as g,Y as n,E as r,ie as w};