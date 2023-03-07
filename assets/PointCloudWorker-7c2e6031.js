import{t as O,r as d,hj as x,Y as A,gb as $,hk as k}from"./index-73a6a617.js";import{S as D}from"./quat-dee8ffd3.js";import{w as F,l as R,c as U,I as z,e as B}from"./I3SBinaryReader-2552b1bc.js";import{r as J,n as S}from"./vec3f32-ad1dc57f.js";import{a as N,b as V,d as T}from"./PointCloudUniqueValueRenderer-577bd4ee.js";import"./mat3f64-221ce671.js";import"./quatf64-3363c48e.js";import"./VertexAttribute-15d1866a.js";function _(i,t,l,o){const{rendererJSON:f,isRGBRenderer:p}=i;let n=null,a=null;if(t&&p)n=t;else if(t&&(f==null?void 0:f.type)==="pointCloudUniqueValueRenderer"){a=N.fromJSON(f);const e=a.colorUniqueValueInfos;n=new Uint8Array(3*o);const u=v(a.fieldTransformType);for(let r=0;r<o;r++){const c=(u?u(t[r]):t[r])+"";for(let s=0;s<e.length;s++)if(e[s].values.includes(c)){n[3*r]=e[s].color.r,n[3*r+1]=e[s].color.g,n[3*r+2]=e[s].color.b;break}}}else if(t&&(f==null?void 0:f.type)==="pointCloudStretchRenderer"){a=V.fromJSON(f);const e=a.stops;n=new Uint8Array(3*o);const u=v(a.fieldTransformType);for(let r=0;r<o;r++){const c=u?u(t[r]):t[r],s=e.length-1;if(c<e[0].value)n[3*r]=e[0].color.r,n[3*r+1]=e[0].color.g,n[3*r+2]=e[0].color.b;else if(c>=e[s].value)n[3*r]=e[s].color.r,n[3*r+1]=e[s].color.g,n[3*r+2]=e[s].color.b;else for(let b=1;b<e.length;b++)if(c<e[b].value){const m=(c-e[b-1].value)/(e[b].value-e[b-1].value);n[3*r]=e[b].color.r*m+e[b-1].color.r*(1-m),n[3*r+1]=e[b].color.g*m+e[b-1].color.g*(1-m),n[3*r+2]=e[b].color.b*m+e[b-1].color.b*(1-m);break}}}else if(t&&(f==null?void 0:f.type)==="pointCloudClassBreaksRenderer"){a=T.fromJSON(f);const e=a.colorClassBreakInfos;n=new Uint8Array(3*o);const u=v(a.fieldTransformType);for(let r=0;r<o;r++){const c=u?u(t[r]):t[r];for(let s=0;s<e.length;s++)if(c>=e[s].minValue&&c<=e[s].maxValue){n[3*r]=e[s].color.r,n[3*r+1]=e[s].color.g,n[3*r+2]=e[s].color.b;break}}}else{n=new Uint8Array(3*o);for(let e=0;e<n.length;e++)n[e]=255}if(l&&a&&a.colorModulation){const e=a.colorModulation.minValue,u=a.colorModulation.maxValue,r=.3;for(let c=0;c<o;c++){const s=l[c],b=s>=u?1:s<=e?r:r+(1-r)*(s-e)/(u-e);n[3*c]=b*n[3*c],n[3*c+1]=b*n[3*c+1],n[3*c+2]=b*n[3*c+2]}}return n}function q(i,t){if(i.encoding==null||i.encoding===""){const l=F(t,i);if(O(l.vertexAttributes.position))return;const o=R(t,l.vertexAttributes.position),f=l.header.fields,p=[f.offsetX,f.offsetY,f.offsetZ],n=[f.scaleX,f.scaleY,f.scaleZ],a=o.length/3,e=new Float64Array(3*a);for(let u=0;u<a;u++)e[3*u]=o[3*u]*n[0]+p[0],e[3*u+1]=o[3*u+1]*n[1]+p[1],e[3*u+2]=o[3*u+2]*n[2]+p[2];return e}if(i.encoding==="lepcc-xyz")return U(t).result}function g(i,t,l){return d(i)&&i.attributeInfo.useElevation?t?E(t,l):null:d(i)&&i.attributeInfo.storageInfo?z(i.attributeInfo.storageInfo,i.buffer,l):null}function E(i,t){const l=new Float64Array(t);for(let o=0;o<t;o++)l[o]=i[3*o+2];return l}function P(i,t,l,o,f){const p=i.length/3;let n=0;for(let a=0;a<p;a++){let e=!0;for(let u=0;u<o.length&&e;u++){const{filterJSON:r}=o[u],c=f[u].values[a];switch(r.type){case"pointCloudValueFilter":{const s=r.mode==="exclude";r.values.includes(c)===s&&(e=!1);break}case"pointCloudBitfieldFilter":{const s=w(r.requiredSetBits),b=w(r.requiredClearBits);(c&s)===s&&!(c&b)||(e=!1);break}case"pointCloudReturnFilter":{const s=15&c,b=c>>>4&15,m=b>1,C=s===1,y=s===b;let I=!1;for(const h of r.includedReturns)if(h==="last"&&y||h==="firstOfMany"&&C&&m||h==="lastOfMany"&&y&&m||h==="single"&&!m){I=!0;break}I||(e=!1);break}}}e&&(l[n]=a,i[3*n]=i[3*a],i[3*n+1]=i[3*a+1],i[3*n+2]=i[3*a+2],t[3*n]=t[3*a],t[3*n+1]=t[3*a+1],t[3*n+2]=t[3*a+2],n++)}return n}function v(i){return i==null||i==="none"?null:i==="low-four-bit"?t=>15&t:i==="high-four-bit"?t=>(240&t)>>4:i==="absolute-value"?t=>Math.abs(t):i==="modulo-ten"?t=>t%10:null}function w(i){let t=0;for(const l of i||[])t|=1<<l;return t}class Y{transform(t){const l=this._transform(t),o=[l.points.buffer,l.rgb.buffer];d(l.pointIdFilterMap)&&o.push(l.pointIdFilterMap.buffer);for(const f of l.attributes)"buffer"in f.values&&x(f.values.buffer)&&f.values.buffer!==l.rgb.buffer&&o.push(f.values.buffer);return Promise.resolve({result:l,transferList:o})}_transform(t){const l=q(t.schema,t.geometryBuffer);let o=l.length/3,f=null;const p=[],n=g(t.primaryAttributeData,l,o);d(t.primaryAttributeData)&&n&&p.push({attributeInfo:t.primaryAttributeData.attributeInfo,values:n});const a=g(t.modulationAttributeData,l,o);d(t.modulationAttributeData)&&a&&p.push({attributeInfo:t.modulationAttributeData.attributeInfo,values:a});let e=_(t.rendererInfo,n,a,o);if(t.filterInfo&&t.filterInfo.length>0&&d(t.filterAttributesData)){const r=t.filterAttributesData.filter(d).map(c=>{const s=g(c,l,o),b={attributeInfo:c.attributeInfo,values:s};return p.push(b),b});f=new Uint32Array(o),o=P(l,e,f,t.filterInfo,r)}for(const r of t.userAttributesData){const c=g(r,l,o);p.push({attributeInfo:r.attributeInfo,values:c})}3*o<e.length&&(e=new Uint8Array(e.buffer.slice(0,3*o))),this._applyElevationOffsetInPlace(l,o,t.elevationOffset);const u=this._transformCoordinates(l,o,t.obb,A.fromJSON(t.inSR),A.fromJSON(t.outSR));return{obb:t.obb,points:u,rgb:e,attributes:p,pointIdFilterMap:f}}_transformCoordinates(t,l,o,f,p){if(!$(t,f,0,t,p,0,l))throw new Error("Can't reproject");const n=J(o.center[0],o.center[1],o.center[2]),a=S(),e=S();D(M,o.quaternion);const u=new Float32Array(3*l);for(let r=0;r<l;r++)a[0]=t[3*r]-n[0],a[1]=t[3*r+1]-n[1],a[2]=t[3*r+2]-n[2],k(e,a,M),o.halfSize[0]=Math.max(o.halfSize[0],Math.abs(e[0])),o.halfSize[1]=Math.max(o.halfSize[1],Math.abs(e[1])),o.halfSize[2]=Math.max(o.halfSize[2],Math.abs(e[2])),u[3*r]=a[0],u[3*r+1]=a[1],u[3*r+2]=a[2];return u}_applyElevationOffsetInPlace(t,l,o){if(o!==0)for(let f=0;f<l;f++)t[3*f+2]+=o}}const M=B();function W(){return new Y}export{W as default};
