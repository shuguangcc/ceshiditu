import{s as x,u as c,kb as C,J as y,eW as fe,_ as J,fE as L,rz as Be,sP as Ve,bg as Ze,bk as qe,a1 as We,B as Y,as as oe,dt as ue,jh as Oe,eP as pe,e3 as Ee,ds as X,qi as he,qj as ge,qk as me,qe as de,qg as xe,qh as ye,c5 as Ie,ju as we,sQ as U,sR as H,d1 as Je,q1 as V,a4 as Ce,ck as Q,sS as ae,q4 as ie,mS as Ye,q3 as Xe,dM as He,ma as _e,cm as ze,b1 as Qe,aD as Ke,b0 as et,oY as tt,l as nt,aG as le,sT as W,v as rt,sU as st,e as A,y as F,b as ot,gd as re,du as at,aL as it,H as lt}from"./index-74d49a87.js";import{r as ne,b as ct,x as ft,_ as ut,L as K}from"./georeference-4ba130cc.js";const ce=x.getLogger("esri.geometry.support.meshUtils.centerAt");function pt(e,n,t){if(!e.vertexAttributes||!e.vertexAttributes.position)return;const r=(t==null?void 0:t.origin)??e.origin;c(e.transform)?((t==null?void 0:t.geographic)!=null&&t.geographic!==e.transform.geographic&&ce.warn(`Specifying the 'geographic' parameter (${t.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`),ht(e.transform,n,r)):ne(e.spatialReference,t)?gt(e,n,r):mt(e,n,r)}function ht(e,n,t){const r=n.x-t.x,s=n.y-t.y,a=n.hasZ&&t.hasZ?n.z-t.z:0,o=e.origin;e.origin=[o[0]+r,o[1]+s,o[2]+a]}function gt(e,n,t){const r=ct(e.vertexAttributes,t,{geographic:!0}),{position:s,normal:a,tangent:o}=ft(r,n,{geographic:!0});e.vertexAttributes.position=s,e.vertexAttributes.normal=a,e.vertexAttributes.tangent=o,e.vertexAttributesChanged()}function mt(e,n,t){const r=yt,s=xt;if(C(n,s,e.spatialReference)){if(!C(t,r,e.spatialReference)){const a=e.origin;r[0]=a.x,r[1]=a.y,r[2]=a.z,ce.error(`Failed to project specified origin (wkid:${t.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}).`)}dt(e.vertexAttributes.position,s,r),e.vertexAttributesChanged()}else ce.error(`Failed to project centerAt location (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid})`)}function dt(e,n,t){if(e)for(let r=0;r<e.length;r+=3)for(let s=0;s<3;s++)e[r+s]+=n[s]-t[s]}const xt=y(),yt=y();async function wt(e,n,t){const{loadGLTFMesh:r}=await fe(J(()=>import("./loadGLTFMesh-48c4d7a3.js"),["./loadGLTFMesh-48c4d7a3.js","./index-74d49a87.js","./index-45742df3.css","./georeference-4ba130cc.js"],import.meta.url),t),s=await Se(n,t),a=r(new L({x:0,y:0,z:0,spatialReference:e.spatialReference}),s.url,{resolveFile:vt(s),useTransform:!0,signal:c(t)?t.signal:null});a.then(()=>s.dispose(),()=>s.dispose());const{vertexAttributes:o,components:i}=await a;e.vertexAttributes=o,e.components=i}function vt(e){const n=Be(e.url);return t=>{const r=Ve(t,n,n),s=r?r.replace(/^ *\.\//,""):null;return(s?e.files.get(s):null)??t}}async function Se(e,n){return e instanceof Blob?ee.fromBlob(e):typeof e=="string"?new ee(e):Array.isArray(e)?bt(e,n):At(e,n)}async function bt(e,n){const t=new Map;let r=null;const s=await Ze(e.map(async o=>({name:o.name,source:await Se(o instanceof Blob?o:o.source,n)}))),a=[];for(const o of s)o&&(qe(n)?o.source.dispose():a.push(o));We(n);for(const{name:o,source:i}of a)(Y(r)||/\.(gltf|glb)/i.test(o))&&(r=i.url),t.set(o,i.url),i.files&&i.files.forEach((l,u)=>t.set(u,l));if(Y(r))throw new oe("mesh-load-external:missing-files","Missing files to load external mesh source");return new ee(r,()=>a.forEach(({source:o})=>o.dispose()),t)}async function At(e,n){const{default:t}=await fe(J(()=>import("./index-74d49a87.js").then(s=>s.vH),["./index-74d49a87.js","./index-45742df3.css"],import.meta.url),n),r=typeof e.multipart[0]=="string"?await Promise.all(e.multipart.map(async s=>(await t(s,{responseType:"array-buffer"})).data)):e.multipart;return ee.fromBlob(new Blob(r))}let ee=class ke{constructor(n,t=()=>{},r=new Map){this.url=n,this.dispose=t,this.files=r}static fromBlob(n){const t=URL.createObjectURL(n);return new ke(t,()=>URL.revokeObjectURL(t))}};function $t(e,n,t){e.vertexAttributes&&e.vertexAttributes.position&&(c(e.transform)?((t==null?void 0:t.geographic)!=null&&t.geographic!==e.transform.geographic&&x.getLogger("esri.geometry.support.meshUtils.offset").warn(`Specifying the 'geographic' parameter (${t.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`),Rt(e.transform,n)):ne(e.spatialReference,t)?Ft(e,n):Mt(e,n))}function Rt(e,n){const t=e.origin;e.origin=ue(y(),t,n)}function Ft(e,n){const t=e.spatialReference,r=e.vertexAttributes.position,s=e.vertexAttributes.normal,a=e.vertexAttributes.tangent,o=new Float64Array(r.length),i=c(s)?new Float32Array(s.length):null,l=c(a)?new Float32Array(a.length):null,u=e.extent.center,f=Lt;Oe(t,[u.x,u.y,u.z],ve,pe(t)),Ee(be,ve),X(f,n,be),he(r,t,o),c(s)&&c(i)&&ge(s,r,o,t,i),c(a)&&c(l)&&me(a,r,o,t,l),De(o,f),de(o,r,t),c(s)&&c(i)&&xe(i,r,o,t,s),c(a)&&c(l)&&ye(l,r,o,t,a),e.vertexAttributesChanged()}function Mt(e,n){De(e.vertexAttributes.position,n),e.vertexAttributesChanged()}function De(e,n){if(e)for(let t=0;t<e.length;t+=3)for(let r=0;r<3;r++)e[t+r]+=n[r]}const Lt=y(),ve=Ie(),be=we();function Pt(){const{faceDescriptions:e,faceVertexOffsets:n,uvScales:t}=kt,r=4*e.length,s=new Float64Array(3*r),a=new Float32Array(3*r),o=new Float32Array(2*r),i=new Uint32Array(2*e.length*3);let l=0,u=0,f=0,p=0;for(let g=0;g<e.length;g++){const h=e[g],v=l/3;for(const d of n)i[p++]=v+d;const P=h.corners;for(let d=0;d<4;d++){const $=P[d];let b=0;o[f++]=.25*t[d][0]+h.uvOrigin[0],o[f++]=h.uvOrigin[1]-.25*t[d][1];for(let R=0;R<3;R++)h.axis[R]!==0?(s[l++]=.5*h.axis[R],a[u++]=h.axis[R]):(s[l++]=.5*$[b++],a[u++]=0)}}return{position:s,normal:a,uv:o,faces:i}}function Ot(e,n){const t=e.components[0],r=t.faces,s=Dt[n],a=6*s,o=new Array(6),i=new Array(r.length-6);let l=0,u=0;for(let f=0;f<r.length;f++)f>=a&&f<a+6?o[l++]=r[f]:i[u++]=r[f];if(c(e.vertexAttributes.uv)){const f=new Float32Array(e.vertexAttributes.uv),p=4*s*2,g=[0,1,1,1,1,0,0,0];for(let h=0;h<g.length;h++)f[p+h]=g[h];e.vertexAttributes.uv=f}return e.components=[new U({faces:o,material:t.material}),new U({faces:i})],e}function Et(e=0){const n=Math.round(8*2**e),t=2*n,r=(n-1)*(t+1)+2*t,s=new Float64Array(3*r),a=new Float32Array(3*r),o=new Float32Array(2*r),i=new Uint32Array(3*((n-1)*t*2));let l=0,u=0,f=0,p=0;for(let g=0;g<=n;g++){const h=g/n*Math.PI+.5*Math.PI,v=Math.cos(h),P=Math.sin(h);m[2]=P;const d=g===0||g===n,$=d?t-1:t;for(let b=0;b<=$;b++){const R=b/$*2*Math.PI;m[0]=-Math.sin(R)*v,m[1]=Math.cos(R)*v;for(let O=0;O<3;O++)s[l]=.5*m[O],a[l]=m[O],++l;o[u++]=(b+(d?.5:0))/t,o[u++]=g/n,g!==0&&b!==t&&(g!==n&&(i[f++]=p,i[f++]=p+1,i[f++]=p-t),g!==1&&(i[f++]=p,i[f++]=p-t,i[f++]=p-t-1)),p++}}return{position:s,normal:a,uv:o,faces:i}}function It(e=0){const t=Math.round(16*2**e),r=(5-1)*(t+1)+2*t,s=new Float64Array(3*r),a=new Float32Array(3*r),o=new Float32Array(2*r),i=new Uint32Array(3*(4*t));let l=0,u=0,f=0,p=0,g=0;for(let h=0;h<=5;h++){const v=h===0||h===5,P=h<=1||h>=5-1,d=h===2||h===4,$=v?t-1:t;for(let b=0;b<=$;b++){const R=b/$*2*Math.PI,O=v?0:.5;m[0]=O*Math.sin(R),m[1]=O*-Math.cos(R),m[2]=h<=2?.5:-.5;for(let z=0;z<3;z++)s[l++]=m[z],a[u++]=P?z===2?h<=1?1:-1:0:z===2?0:m[z]/O;o[f++]=(b+(v?.5:0))/t,o[f++]=h<=1?1*h/3:h<=3?1*(h-2)/3+1/3:1*(h-4)/3+2/3,d||h===0||b===t||(h!==5&&(i[p++]=g,i[p++]=g+1,i[p++]=g-t),h!==1&&(i[p++]=g,i[p++]=g-t,i[p++]=g-t-1)),g++}}return{position:s,normal:a,uv:o,faces:i}}function Ct(e,n){const t=typeof n=="number"?n:n!=null?n.width:1,r=typeof n=="number"?n:n!=null?n.height:1;switch(e){case"up":case"down":return{width:t,depth:r};case"north":case"south":return{width:t,height:r};case"east":case"west":return{depth:t,height:r}}}function _t(e){const n=B.facingAxisOrderSwap[e],t=B.position,r=B.normal,s=new Float64Array(t.length),a=new Float32Array(r.length);let o=0;for(let i=0;i<4;i++){const l=o;for(let u=0;u<3;u++){const f=n[u],p=Math.abs(f)-1,g=f>=0?1:-1;s[o]=t[l+p]*g,a[o]=r[l+p]*g,o++}}return{position:s,normal:a,uv:new Float32Array(B.uv),faces:new Uint32Array(B.faces),isPlane:!0}}const S=1,k=2,D=3,B={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[D,S,k],west:[-D,-S,k],north:[-S,D,k],south:[S,-D,k],up:[S,k,D],down:[S,-k,-D]}};function Z(e,n,t){e.isPlane||zt(e),St(e,t==null?void 0:t.size);const{vertexAttributes:r,transform:s}=ut(e,n,t);return{vertexAttributes:new H({...r,uv:e.uv}),transform:s,components:[new U({faces:e.faces,material:t&&t.material||null})],spatialReference:n.spatialReference}}function zt(e){for(let n=0;n<e.position.length;n+=3)e.position[n+2]+=.5}function St(e,n){if(n==null)return;const t=typeof n=="number"?[n,n,n]:[n.width!=null?n.width:1,n.depth!=null?n.depth:1,n.height!=null?n.height:1];E[0]=t[0],E[4]=t[1],E[8]=t[2];for(let r=0;r<e.position.length;r+=3){for(let s=0;s<3;s++)m[s]=e.position[r+s];X(m,m,E);for(let s=0;s<3;s++)e.position[r+s]=m[s]}if(t[0]!==t[1]||t[1]!==t[2]){E[0]=1/t[0],E[4]=1/t[1],E[8]=1/t[2];for(let r=0;r<e.normal.length;r+=3){for(let s=0;s<3;s++)m[s]=e.normal[r+s];X(m,m,E),Je(m,m);for(let s=0;s<3;s++)e.normal[r+s]=m[s]}}}const kt={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},Dt={south:0,east:1,north:2,west:3,up:4,down:5},m=y(),E=we(),je=x.getLogger("esri.geometry.support.meshUtils.rotate");function jt(e,n,t){if(!e.vertexAttributes||!e.vertexAttributes.position||n[3]===0)return;const r=e.spatialReference;if(c(e.transform)){(t==null?void 0:t.geographic)!=null&&t.geographic!==e.transform.geographic&&je.warn(`Specifying the 'geographic' parameter (${t.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`);const s=(t==null?void 0:t.origin)??e.transform.getOriginPoint(r);Tt(e.transform,n,s)}else{const s=(t==null?void 0:t.origin)??e.origin;ne(e.spatialReference,t)?Nt(e,n,s):Gt(e,n,s)}}function Tt(e,n,t){const r=Ce(T,t.x,t.y,t.z),s=Q(T,r,e.origin);e.applyLocalInverse(s,Ae),e.rotation=ae(e.rotation,n,V()),e.applyLocalInverse(s,s),Q(s,s,Ae),e.translation=ue(y(),e.translation,s)}function Nt(e,n,t){const r=e.spatialReference,s=pe(r),a=Te;C(t,a,s)||C(e.origin,a,s);const o=e.vertexAttributes.position,i=e.vertexAttributes.normal,l=e.vertexAttributes.tangent,u=new Float64Array(o.length),f=c(i)?new Float32Array(i.length):null,p=c(l)?new Float32Array(l.length):null;Oe(s,a,te,s),Ee(Re,te);const g=$e;X(ie($e),ie(n),Re),g[3]=n[3],he(o,r,u),c(i)&&c(f)&&ge(i,o,u,r,f),c(l)&&c(p)&&me(l,o,u,r,p),G(u,g,3,a),de(u,o,r),c(i)&&c(f)&&(G(f,g,3),xe(f,o,u,r,i)),c(l)&&c(p)&&(G(p,g,4),ye(p,o,u,r,l)),e.vertexAttributesChanged()}function Gt(e,n,t){const r=Te;if(!C(t,r,e.spatialReference)){const s=e.origin;r[0]=s.x,r[1]=s.y,r[2]=s.z,je.error(`Failed to project specified origin (wkid:${t.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}).`)}G(e.vertexAttributes.position,n,3,r),G(e.vertexAttributes.normal,n,3),G(e.vertexAttributes.tangent,n,4),e.vertexAttributesChanged()}function G(e,n,t,r=_e){if(!Y(e)){Ye(te,Xe(n),ie(n));for(let s=0;s<e.length;s+=t){for(let a=0;a<3;a++)T[a]=e[s+a]-r[a];He(T,T,te);for(let a=0;a<3;a++)e[s+a]=T[a]+r[a]}}}const T=y(),Ae=y(),$e=V(),te=Ie(),Re=we(),Te=y(),Ne=x.getLogger("esri.geometry.support.meshUtils.scale");function Ut(e,n,t){if(!e.vertexAttributes||!e.vertexAttributes.position)return;const r=e.spatialReference;if(c(e.transform)){(t==null?void 0:t.geographic)!=null&&t.geographic!==e.transform.geographic&&Ne.warn(`Specifying the 'geographic' parameter (${t.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`);const s=(t==null?void 0:t.origin)??e.transform.getOriginPoint(r);Bt(e.transform,n,s)}else{const s=ne(e.spatialReference,t),a=t&&t.origin||e.origin;s?Vt(e,n,a):Zt(e,n,a)}}function Bt(e,n,t){const r=Ce(N,t.x,t.y,t.z),s=Q(N,r,e.origin);e.applyLocalInverse(s,Fe);const a=ze(y(),e.scale,n);e.scale=a,e.applyLocalInverse(s,s),Q(s,s,Fe),e.translation=ue(y(),e.translation,s)}function Vt(e,n,t){const r=e.spatialReference,s=pe(r),a=Ue;C(t,a,s)||C(e.origin,a,s);const o=e.vertexAttributes.position,i=e.vertexAttributes.normal,l=e.vertexAttributes.tangent,u=new Float64Array(o.length),f=c(i)?new Float32Array(i.length):null,p=c(l)?new Float32Array(l.length):null;he(o,r,u),c(i)&&c(f)&&ge(i,o,u,r,f),c(l)&&c(p)&&me(l,o,u,r,p),Ge(u,n,a),de(u,o,r),c(i)&&c(f)&&xe(f,o,u,r,i),c(l)&&c(p)&&ye(p,o,u,r,l),e.vertexAttributesChanged()}function Zt(e,n,t){const r=Ue;if(!C(t,r,e.spatialReference)){const s=e.origin;r[0]=s.x,r[1]=s.y,r[2]=s.z,Ne.error(`Failed to project specified origin (wkid:${t.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}).`)}Ge(e.vertexAttributes.position,n,r),e.vertexAttributesChanged()}function Ge(e,n,t=_e){if(e)for(let r=0;r<e.length;r+=3){for(let s=0;s<3;s++)N[s]=e[r+s]-t[s];ze(N,N,n);for(let s=0;s<3;s++)e[r+s]=N[s]+t[s]}}const N=y(),Fe=y(),Ue=y();var M;const _="esri.geometry.Mesh";let w=M=class extends Qe(Ke.LoadableMixin(et(tt))){constructor(e){super(e),this.components=null,this.transform=null,this.external=null,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new H,this.type="mesh"}initialize(){(Y(this.external)||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when(()=>{this.handles.add(nt(()=>{var e;return{vertexAttributes:this.vertexAttributes,components:(e=this.components)==null?void 0:e.map(n=>n.clone())}},()=>this._set("external",null),{once:!0,sync:!0}))})}get hasExtent(){return!this.loaded&&c(this.external)&&c(this.external.extent)||this.loaded&&this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0)}get _boundingInfo(){const e=this.vertexAttributes.position,n=this.spatialReference;if(e.length===0||this.components&&this.components.length===0)return{extent:new le({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:n}),center:new L({x:0,y:0,z:0,spatialReference:n})};const t=c(this.transform)?this.transform.project(e,n):e;let r=1/0,s=1/0,a=1/0,o=-1/0,i=-1/0,l=-1/0,u=0,f=0,p=0;const g=t.length,h=1/(g/3);let v=0;for(;v<g;){const P=t[v++],d=t[v++],$=t[v++];r=Math.min(r,P),s=Math.min(s,d),a=Math.min(a,$),o=Math.max(o,P),i=Math.max(i,d),l=Math.max(l,$),u+=h*P,f+=h*d,p+=h*$}return{extent:new le({xmin:r,ymin:s,zmin:a,xmax:o,ymax:i,zmax:l,spatialReference:n}),center:new L({x:u,y:f,z:p,spatialReference:n})}}get anchor(){if(c(this.transform))return this.transform.getOriginPoint(this.spatialReference);const e=this._boundingInfo;return new L({x:e.center.x,y:e.center.y,z:e.extent.zmin,spatialReference:this.spatialReference})}get origin(){return c(this.transform)?this.transform.getOriginPoint(this.spatialReference):this._boundingInfo.center}get extent(){return!this.loaded&&c(this.external)&&c(this.external.extent)?this.external.extent.clone():this._boundingInfo.extent}addComponent(e){this.loaded?(this.components||(this.components=[]),this.components.push(U.from(e)),this.notifyChange("components")):x.getLogger(this.declaredClass).error("addComponent()","Mesh must be loaded before applying operations")}removeComponent(e){if(this.loaded){if(this.components){const n=this.components.indexOf(e);if(n!==-1)return this.components.splice(n,1),void this.notifyChange("components")}x.getLogger(this.declaredClass).error("removeComponent()","Provided component is not part of the list of components")}else x.getLogger(this.declaredClass).error("removeComponent()","Mesh must be loaded before applying operations")}rotate(e,n,t,r){return W(se.x,e,j),W(se.y,n,Me),W(se.z,t,Le),ae(j,Me,j),ae(j,Le,j),jt(this,j,r),this}offset(e,n,t,r){return this.loaded?(q[0]=e,q[1]=n,q[2]=t,$t(this,q,r),this):(x.getLogger(this.declaredClass).error("offset()","Mesh must be loaded before applying operations"),this)}scale(e,n){return this.loaded?(Ut(this,e,n),this):(x.getLogger(this.declaredClass).error("scale()","Mesh must be loaded before applying operations"),this)}centerAt(e,n){return this.loaded?(pt(this,e,n),this):(x.getLogger(this.declaredClass).error("centerAt()","Mesh must be loaded before applying operations"),this)}load(e){return c(this.external)&&this.addResolvingPromise(wt(this,this.external.source,e)),Promise.resolve(this)}updateExternalSource(e){this._set("external",e)}clone(){let e=null;if(this.components){const t=new Map,r=new Map;e=this.components.map(s=>s.cloneWithDeduplication(t,r))}const n={components:e,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes.clone(),transform:c(this.transform)?this.transform.clone():null,external:c(this.external)?{source:this.external.source,extent:c(this.external.extent)?this.external.extent.clone():null}:null};return new M(n)}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(e){const n=J(()=>import("./gltfexport-9c90cd01.js"),["./gltfexport-9c90cd01.js","./index-74d49a87.js","./index-45742df3.css","./georeference-4ba130cc.js","./imageutils-96926fa1.js"],import.meta.url),t=this.load(),r=await Promise.all([n,t]),{toBinaryGLTF:s}=r[0];return s(this,e)}static createBox(e,n){if(!(e instanceof L))return x.getLogger(_).error(".createBox()","expected location to be a Point instance"),null;const t=new M(Z(Pt(),e,n));return n&&n.imageFace&&n.imageFace!=="all"?Ot(t,n.imageFace):t}static createSphere(e,n){return e instanceof L?new M(Z(Et(n&&n.densificationFactor||0),e,n)):(x.getLogger(_).error(".createSphere()","expected location to be a Point instance"),null)}static createCylinder(e,n){return e instanceof L?new M(Z(It(n&&n.densificationFactor||0),e,n)):(x.getLogger(_).error(".createCylinder()","expected location to be a Point instance"),null)}static createPlane(e,n){if(!(e instanceof L))return x.getLogger(_).error(".createPlane()","expected location to be a Point instance"),null;const t=(n==null?void 0:n.facing)??"up",r=Ct(t,n==null?void 0:n.size);return new M(Z(_t(t),e,{...n,size:r}))}static createFromPolygon(e,n){if(!(e instanceof rt))return x.getLogger(_).error(".createFromPolygon()","expected polygon to be a Polygon instance"),null;const t=st(e);return new M({vertexAttributes:new H({position:t.position}),components:[new U({faces:t.faces,shading:"flat",material:(n==null?void 0:n.material)??null})],spatialReference:e.spatialReference})}static async createFromGLTF(e,n,t){if(!(e instanceof L))throw x.getLogger(_).error(".createfromGLTF()","expected location to be a Point instance"),new oe("invalid-input","Expected location to be a Point instance");const{loadGLTFMesh:r}=await fe(J(()=>import("./loadGLTFMesh-48c4d7a3.js"),["./loadGLTFMesh-48c4d7a3.js","./index-74d49a87.js","./index-45742df3.css","./georeference-4ba130cc.js"],import.meta.url),t);return new M(await r(e,n,t))}static createWithExternalSource(e,n,t){var o;const r=(t==null?void 0:t.extent)??null,s=((o=t==null?void 0:t.transform)==null?void 0:o.clone())??new K;s.origin=[e.x,e.y,e.z??0];const a=e.spatialReference;return new M({external:{source:n,extent:r},transform:s,spatialReference:a})}static createIncomplete(e,n){var a;const t=((a=n==null?void 0:n.transform)==null?void 0:a.clone())??new K;t.origin=[e.x,e.y,e.z??0];const r=e.spatialReference,s=new M({transform:t,spatialReference:r});return s.addResolvingPromise(Promise.reject(new oe("mesh-incomplete","Mesh resources are not complete"))),s}};A([F({type:[U],json:{write:!0}})],w.prototype,"components",void 0),A([F({type:K,json:{write:!0}})],w.prototype,"transform",void 0),A([F({constructOnly:!0})],w.prototype,"external",void 0),A([F({readOnly:!0})],w.prototype,"hasExtent",null),A([F({readOnly:!0})],w.prototype,"_boundingInfo",null),A([F({readOnly:!0})],w.prototype,"anchor",null),A([F({readOnly:!0})],w.prototype,"origin",null),A([F({readOnly:!0,json:{read:!1}})],w.prototype,"extent",null),A([F({readOnly:!0,json:{read:!1,write:!0,default:!0}})],w.prototype,"hasZ",void 0),A([F({readOnly:!0,json:{read:!1,write:!0,default:!1}})],w.prototype,"hasM",void 0),A([F({type:H,nonNullable:!0,json:{write:!0}})],w.prototype,"vertexAttributes",void 0),w=M=A([ot(_)],w);const se={x:re(1,0,0),y:re(0,1,0),z:re(0,0,1)},j=V(),Me=V(),Le=V(),q=y(),Pe=w;function en(e,n,t){const r=t.features;t.features=[],delete t.geometryType;const s=at.fromJSON(t);if(s.geometryType="mesh",!t.assetMaps)return s;const a=Xt(n,t.assetMaps),o=s.spatialReference??it.WGS84,i=t.globalIdFieldName,{outFields:l}=e,u=c(l)&&l.length>0?qt(l.includes("*")?null:new Set(l)):()=>({});for(const f of r){const p=Wt(f,i,o,n,a);c(p)&&s.features.push(new lt({geometry:p,attributes:u(f)}))}return s}function qt(e){return({attributes:n})=>{if(!n)return{};if(!e)return n;for(const t in n)e.has(t)||delete n[t];return n}}function Wt(e,n,t,r,s){const a=e.attributes[n],o=s.get(a);if(o==null||o.status===I.FAILED||o.url==null)return null;const i=Jt(e,t,r),l=le.fromJSON(e.geometry);l.spatialReference=t;const u=Yt(e.attributes,r,o.projectVertices);return o.status===I.PENDING?Pe.createIncomplete(i,{extent:l,transform:u}):Pe.createWithExternalSource(i,[{name:o.name,source:o.url}],{extent:l,transform:u})}function Jt({attributes:e},n,{transformFieldRoles:t}){return new L({x:e[t.originX],y:e[t.originY],z:e[t.originZ],spatialReference:n})}function Yt(e,{transformFieldRoles:n},t){return new K({translation:[e[n.translationX],-e[n.translationZ],e[n.translationY]],rotation:W([e[n.rotationX],e[n.rotationZ],e[n.rotationY]],e[n.rotationDeg]),scale:[e[n.scaleX],e[n.scaleY],e[n.scaleZ]],geographic:t})}var I;function Xt(e,n){const t=new Map;for(const r of n){const s=r.parentGlobalId;if(s==null)continue;const a=r.assetName,o=r.assetURL,i=r.conversionStatus;let l=t.get(s);if(l==null)switch(l={name:a,status:I.FAILED,url:o,projectVertices:Ht(r.flags).projectVertices},t.set(s,l),i){case"COMPLETED":case"SUBMITTED":l.status=I.COMPLETED;break;case"INPROGRESS":l.status=I.PENDING;break;default:l.status=I.FAILED}else console.warn(`Multiple asset parts not expected. Ignoring additional parts. conflicting assetname: ${r.assetName}`)}return t}function Ht(e){return{projectVertices:e.includes("PROJECT_VERTICES")}}(function(e){e[e.FAILED=0]="FAILED",e[e.PENDING=1]="PENDING",e[e.COMPLETED=2]="COMPLETED"})(I||(I={}));export{en as meshFeatureSetFromJSON};
