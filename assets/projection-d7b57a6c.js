import{_ as ge}from"./preload-helper-41c905a7.js";import{a as Rt}from"./Error-653283ae.js";import{b as Ot,a as Tt,m as Mt,N as Nt}from"./mathUtils-2519596a.js";import{t as R,e as gt,r as L}from"./typedArrayUtil-a8b5b3e9.js";import{f as ht,O as be}from"./promiseUtils-6684e352.js";import{$ as Lt,I as dt,p as Gt,b as It,c as mt}from"./unitUtils-47abac71.js";import{G as yt}from"./cast-7928d7aa.js";import{e as Ft}from"./SimpleObservable-7dcdef1d.js";import{x as Wt,r as wt,o as Ut}from"./mat4-44a0988f.js";import{o as Je,r as Dt,u as Ht,e as kt,z as Bt,s as $t}from"./vec3-a020a6f6.js";import{n as _e}from"./vec3f64-2f9cef06.js";import{E as J,I as te,w as Qe,a as xt,G as jt,m as vt,T as Yt,S as bt,P as Kt,s as Xt}from"./Extent-69509002.js";import{v as zt,m as Zt,a as qt}from"./Polyline-bf268e7b.js";import{a as Vt}from"./assets-0b172f07.js";import{h as Jt}from"./string-cdf077e6.js";import{a as Qt}from"./aaBoundingRect-4a760199.js";import{s as h,e as ce,t as se}from"./Ellipsoid-89682c5e.js";import{o as en}from"./zscale-1e1fc911.js";let Te,s=null;function et(){return!!s}function tn(){return!!Jt("esri-wasm")}function tt(){return Te||(Te=ge(()=>import("./pe-wasm-b4e8afc6.js"),[],import.meta.url).then(e=>e.p).then(({default:e})=>e({locateFile:n=>Vt(`esri/geometry/support/${n}`)})).then(e=>{rt(e)}),Te)}var he,N,Le;(function(e){function n(i,u,_){s.ensureCache.prepare();const E=Z(_),P=_===E,c=s.ensureFloat64(E),l=s._pe_geog_to_proj(s.getPointer(i),u,c);return l&&x(_,u,c,P),l}function t(i,u,_,E){switch(E){case N.PE_TRANSFORM_P_TO_G:return r(i,u,_);case N.PE_TRANSFORM_G_TO_P:return n(i,u,_)}return 0}function r(i,u,_){return a(i,u,_,0)}function a(i,u,_,E){s.ensureCache.prepare();const P=Z(_),c=_===P,l=s.ensureFloat64(P),p=s._pe_proj_to_geog_center(s.getPointer(i),u,l,E);return p&&x(_,u,l,c),p}e.geogToProj=n,e.projGeog=t,e.projToGeog=r,e.projToGeogCenter=a})(he||(he={})),function(e){function n(){e.PE_BUFFER_MAX=s.PeDefs.prototype.PE_BUFFER_MAX,e.PE_NAME_MAX=s.PeDefs.prototype.PE_NAME_MAX,e.PE_MGRS_MAX=s.PeDefs.prototype.PE_MGRS_MAX,e.PE_USNG_MAX=s.PeDefs.prototype.PE_USNG_MAX,e.PE_DD_MAX=s.PeDefs.prototype.PE_DD_MAX,e.PE_DDM_MAX=s.PeDefs.prototype.PE_DDM_MAX,e.PE_DMS_MAX=s.PeDefs.prototype.PE_DMS_MAX,e.PE_UTM_MAX=s.PeDefs.prototype.PE_UTM_MAX,e.PE_PARM_MAX=s.PeDefs.prototype.PE_PARM_MAX,e.PE_TYPE_NONE=s.PeDefs.prototype.PE_TYPE_NONE,e.PE_TYPE_GEOGCS=s.PeDefs.prototype.PE_TYPE_GEOGCS,e.PE_TYPE_PROJCS=s.PeDefs.prototype.PE_TYPE_PROJCS,e.PE_TYPE_GEOGTRAN=s.PeDefs.prototype.PE_TYPE_GEOGTRAN,e.PE_TYPE_COORDSYS=s.PeDefs.prototype.PE_TYPE_COORDSYS,e.PE_TYPE_UNIT=s.PeDefs.prototype.PE_TYPE_UNIT,e.PE_TYPE_LINUNIT=s.PeDefs.prototype.PE_TYPE_LINUNIT,e.PE_STR_OPTS_NONE=s.PeDefs.prototype.PE_STR_OPTS_NONE,e.PE_STR_AUTH_NONE=s.PeDefs.prototype.PE_STR_AUTH_NONE,e.PE_STR_AUTH_TOP=s.PeDefs.prototype.PE_STR_AUTH_TOP,e.PE_STR_NAME_CANON=s.PeDefs.prototype.PE_STR_NAME_CANON,e.PE_PARM_X0=s.PeDefs.prototype.PE_PARM_X0,e.PE_PARM_ND=s.PeDefs.prototype.PE_PARM_ND,e.PE_TRANSFORM_1_TO_2=s.PeDefs.prototype.PE_TRANSFORM_1_TO_2,e.PE_TRANSFORM_2_TO_1=s.PeDefs.prototype.PE_TRANSFORM_2_TO_1,e.PE_TRANSFORM_P_TO_G=s.PeDefs.prototype.PE_TRANSFORM_P_TO_G,e.PE_TRANSFORM_G_TO_P=s.PeDefs.prototype.PE_TRANSFORM_G_TO_P,e.PE_HORIZON_RECT=s.PeDefs.prototype.PE_HORIZON_RECT,e.PE_HORIZON_POLY=s.PeDefs.prototype.PE_HORIZON_POLY,e.PE_HORIZON_LINE=s.PeDefs.prototype.PE_HORIZON_LINE,e.PE_HORIZON_DELTA=s.PeDefs.prototype.PE_HORIZON_DELTA}e.init=n}(N||(N={})),function(e){const n={},t={},r=f=>{if(f){const S=f.getType();switch(S){case N.PE_TYPE_GEOGCS:f=s.castObject(f,s.PeGeogcs);break;case N.PE_TYPE_PROJCS:f=s.castObject(f,s.PeProjcs);break;case N.PE_TYPE_GEOGTRAN:f=s.castObject(f,s.PeGeogtran);break;default:S&N.PE_TYPE_UNIT&&(f=s.castObject(f,s.PeUnit))}}return f};function a(){s.PeFactory.prototype.initialize(null)}function i(f){return u(N.PE_TYPE_COORDSYS,f)}function u(f,S){let C=null,O=n[f];if(O||(O={},n[f]=O),O.hasOwnProperty(String(S)))C=O[S];else{const g=s.PeFactory.prototype.factoryByType(f,S);s.compare(g,s.NULL)||(C=g,O[S]=C)}return C=r(C),C}function _(f,S){let C=null,O=t[f];if(O||(O={},t[f]=O),O.hasOwnProperty(S))C=O[S];else{const g=s.PeFactory.prototype.fromString(f,S);s.compare(g,s.NULL)||(C=g,O[S]=C)}return C=r(C),C}function E(f){return u(N.PE_TYPE_GEOGCS,f)}function P(f){return u(N.PE_TYPE_GEOGTRAN,f)}function c(f){return s.PeFactory.prototype.getCode(f)}function l(f){return u(N.PE_TYPE_PROJCS,f)}function p(f){return u(N.PE_TYPE_UNIT,f)}e.initialize=a,e.coordsys=i,e.factoryByType=u,e.fromString=_,e.geogcs=E,e.geogtran=P,e.getCode=c,e.projcs=l,e.unit=p}(Le||(Le={}));let nt=null;var le,de,Ge,Ie,fe,me,pe,Se,ye;function rt(e){function n(i,u,_){i[u]=_(i[u])}s=e,N.init(),le.init(),fe.init(),pe.init(),Se.init(),nt=class extends s.PeGCSExtent{destroy(){s.destroy(this)}};const t=[s.PeDatum,s.PeGeogcs,s.PeGeogtran,s.PeObject,s.PeParameter,s.PePrimem,s.PeProjcs,s.PeSpheroid,s.PeUnit];for(const i of t)n(i.prototype,"getName",u=>function(){return u.call(this,new Array(N.PE_NAME_MAX))});for(const i of[s.PeGeogtran,s.PeProjcs])n(i.prototype,"getParameters",u=>function(){const _=new Array(N.PE_PARM_MAX);let E=u.call(this);for(let P=0;P<_.length;P++){const c=s.getValue(E,"*");_[P]=c?s.wrapPointer(c,s.PeParameter):null,E+=Int32Array.BYTES_PER_ELEMENT}return _});n(s.PeHorizon.prototype,"getCoord",i=>function(){const u=this.getSize();if(!u)return null;const _=[];return x(_,u,i.call(this)),_}),n(s.PeGTlistExtendedEntry.prototype,"getEntries",i=>{const u=s._pe_getPeGTlistExtendedGTsSize();return function(){let _=null;const E=i.call(this);if(!s.compare(E,s.NULL)){_=[E];const P=this.getSteps();if(P>1){const c=s.getPointer(E);for(let l=1;l<P;l++)_.push(s.wrapPointer(c+u*l,s.PeGTlistExtendedGTs))}}return _}});const r=s._pe_getPeHorizonSize(),a=i=>function(){let u=this._cache;if(u||(u=new Map,this._cache=u),u.has(i))return u.get(i);let _=null;const E=i.call(this);if(!s.compare(E,s.NULL)){_=[E];const P=E.getNump();if(P>1){const c=s.getPointer(E);for(let l=1;l<P;l++)_.push(s.wrapPointer(c+r*l,s.PeHorizon))}}return u.set(i,_),_};n(s.PeProjcs.prototype,"horizonGcsGenerate",a),n(s.PeProjcs.prototype,"horizonPcsGenerate",a),s.PeObject.prototype.toString=function(i=N.PE_STR_OPTS_NONE){s.ensureCache.prepare();const u=s.getPointer(this),_=s.ensureInt8(new Array(N.PE_BUFFER_MAX));return s.UTF8ToString(s._pe_object_to_string_ext(u,i,_))}}function U(e){if(!e)return;const n=s.getClass(e);if(!n)return;const t=s.getCache(n);if(!t)return;const r=s.getPointer(e);r&&delete t[r]}function ue(e,n){const t=[],r=new Array(n);for(let a=0;a<e;a++)t.push(s.ensureInt8(r));return t}function Z(e){let n;return Array.isArray(e[0])?(n=[],e.forEach(t=>{n.push(t[0],t[1])})):n=e,n}function x(e,n,t,r=!1){if(r)for(let a=0;a<2*n;a++)e[a]=s.getValue(t+a*Float64Array.BYTES_PER_ELEMENT,"double");else{const a=e.length===0;for(let i=0;i<n;i++)a&&(e[i]=new Array(2)),e[i][0]=s.getValue(t,"double"),e[i][1]=s.getValue(t+Float64Array.BYTES_PER_ELEMENT,"double"),t+=2*Float64Array.BYTES_PER_ELEMENT}}(function(e){let n;function t(){e.PE_GTLIST_OPTS_COMMON=s.PeGTlistExtended.prototype.PE_GTLIST_OPTS_COMMON,n=s._pe_getPeGTlistExtendedEntrySize()}function r(a,i,u,_,E,P){let c=null;const l=new s.PeInteger(P);try{const p=s.PeGTlistExtended.prototype.getGTlist(a,i,u,_,E,l);if((P=l.val)&&(c=[p],P>1)){const f=s.getPointer(p);for(let S=1;S<P;S++)c.push(s.wrapPointer(f+n*S,s.PeGTlistExtendedEntry))}}finally{s.destroy(l)}return c}e.init=t,e.getGTlist=r})(le||(le={})),function(e){function n(t){if(t&&t.length){for(const r of t)U(r),r.getEntries().forEach(a=>{U(a);const i=a.getGeogtran();U(i),i.getParameters().forEach(U),[i.getGeogcs1(),i.getGeogcs2()].forEach(u=>{U(u);const _=u.getDatum();U(_),U(_.getSpheroid()),U(u.getPrimem()),U(u.getUnit())})});s.PeGTlistExtendedEntry.prototype.Delete(t[0])}}e.destroy=n}(de||(de={})),function(e){function n(t,r,a,i,u){s.ensureCache.prepare();const _=Z(a),E=a===_,P=s.ensureFloat64(_);let c=0;i&&(c=s.ensureFloat64(i));const l=s._pe_geog_to_geog(s.getPointer(t),r,P,c,u);return l&&x(a,r,P,E),l}e.geogToGeog=n}(Ge||(Ge={})),function(e){const n=(P,c,l,p,f,S)=>{let C,O;switch(s.ensureCache.prepare(),P){case"dd":C=s._pe_geog_to_dd,O=N.PE_DD_MAX;break;case"ddm":C=s._pe_geog_to_ddm,O=N.PE_DDM_MAX;break;case"dms":C=s._pe_geog_to_dms,O=N.PE_DMS_MAX}let g=0;c&&(g=s.getPointer(c));const D=Z(p),H=s.ensureFloat64(D),k=ue(l,O),w=C(g,l,H,f,s.ensureInt32(k));if(w)for(let G=0;G<l;G++)S[G]=s.UTF8ToString(k[G]);return w},t=(P,c,l,p,f)=>{let S;switch(s.ensureCache.prepare(),P){case"dd":S=s._pe_dd_to_geog;break;case"ddm":S=s._pe_ddm_to_geog;break;case"dms":S=s._pe_dms_to_geog}let C=0;c&&(C=s.getPointer(c));const O=p.map(k=>s.ensureString(k)),g=s.ensureInt32(O),D=s.ensureFloat64(new Array(2*l)),H=S(C,l,g,D);return H&&x(f,l,D),H};function r(P,c,l,p,f){return n("dms",P,c,l,p,f)}function a(P,c,l,p){return t("dms",P,c,l,p)}function i(P,c,l,p,f){return n("ddm",P,c,l,p,f)}function u(P,c,l,p){return t("ddm",P,c,l,p)}function _(P,c,l,p,f){return n("dd",P,c,l,p,f)}function E(P,c,l,p){return t("dd",P,c,l,p)}e.geogToDms=r,e.dmsToGeog=a,e.geogToDdm=i,e.ddmToGeog=u,e.geogToDd=_,e.ddToGeog=E}(Ie||(Ie={})),function(e){function n(){e.PE_MGRS_STYLE_NEW=s.PeNotationMgrs.prototype.PE_MGRS_STYLE_NEW,e.PE_MGRS_STYLE_OLD=s.PeNotationMgrs.prototype.PE_MGRS_STYLE_OLD,e.PE_MGRS_STYLE_AUTO=s.PeNotationMgrs.prototype.PE_MGRS_STYLE_AUTO,e.PE_MGRS_180_ZONE_1_PLUS=s.PeNotationMgrs.prototype.PE_MGRS_180_ZONE_1_PLUS,e.PE_MGRS_ADD_SPACES=s.PeNotationMgrs.prototype.PE_MGRS_ADD_SPACES}function t(a,i,u,_,E,P,c){s.ensureCache.prepare();let l=0;a&&(l=s.getPointer(a));const p=Z(u),f=s.ensureFloat64(p),S=ue(i,N.PE_MGRS_MAX),C=s.ensureInt32(S),O=s._pe_geog_to_mgrs_extended(l,i,f,_,E,P,C);if(O)for(let g=0;g<i;g++)c[g]=s.UTF8ToString(S[g]);return O}function r(a,i,u,_,E){s.ensureCache.prepare();let P=0;a&&(P=s.getPointer(a));const c=u.map(S=>s.ensureString(S)),l=s.ensureInt32(c),p=s.ensureFloat64(new Array(2*i)),f=s._pe_mgrs_to_geog_extended(P,i,l,_,p);return f&&x(E,i,p),f}e.init=n,e.geogToMgrsExtended=t,e.mgrsToGeogExtended=r}(fe||(fe={})),function(e){function n(r,a,i,u,_,E,P){s.ensureCache.prepare();let c=0;r&&(c=s.getPointer(r));const l=Z(i),p=s.ensureFloat64(l),f=ue(a,N.PE_MGRS_MAX),S=s.ensureInt32(f),C=s._pe_geog_to_usng(c,a,p,u,_,E,S);if(C)for(let O=0;O<a;O++)P[O]=s.UTF8ToString(f[O]);return C}function t(r,a,i,u){s.ensureCache.prepare();let _=0;r&&(_=s.getPointer(r));const E=i.map(p=>s.ensureString(p)),P=s.ensureInt32(E),c=s.ensureFloat64(new Array(2*a)),l=s._pe_usng_to_geog(_,a,P,c);return l&&x(u,a,c),l}e.geogToUsng=n,e.usngToGeog=t}(me||(me={})),function(e){function n(){e.PE_UTM_OPTS_NONE=s.PeNotationUtm.prototype.PE_UTM_OPTS_NONE,e.PE_UTM_OPTS_ADD_SPACES=s.PeNotationUtm.prototype.PE_UTM_OPTS_ADD_SPACES,e.PE_UTM_OPTS_NS=s.PeNotationUtm.prototype.PE_UTM_OPTS_NS}function t(a,i,u,_,E){s.ensureCache.prepare();let P=0;a&&(P=s.getPointer(a));const c=Z(u),l=s.ensureFloat64(c),p=ue(i,N.PE_UTM_MAX),f=s.ensureInt32(p),S=s._pe_geog_to_utm(P,i,l,_,f);if(S)for(let C=0;C<i;C++)E[C]=s.UTF8ToString(p[C]);return S}function r(a,i,u,_,E){s.ensureCache.prepare();let P=0;a&&(P=s.getPointer(a));const c=u.map(S=>s.ensureString(S)),l=s.ensureInt32(c),p=s.ensureFloat64(new Array(2*i)),f=s._pe_utm_to_geog(P,i,l,_,p);return f&&x(E,i,p),f}e.init=n,e.geogToUtm=t,e.utmToGeog=r}(pe||(pe={})),function(e){const n=new Map;function t(){e.PE_PCSINFO_OPTION_NONE=s.PePCSInfo.prototype.PE_PCSINFO_OPTION_NONE,e.PE_PCSINFO_OPTION_DOMAIN=s.PePCSInfo.prototype.PE_PCSINFO_OPTION_DOMAIN,e.PE_POLE_OUTSIDE_BOUNDARY=s.PePCSInfo.prototype.PE_POLE_OUTSIDE_BOUNDARY,e.PE_POLE_POINT=s.PePCSInfo.prototype.PE_POLE_POINT}function r(a,i=e.PE_PCSINFO_OPTION_DOMAIN){let u=null,_=null;return n.has(a)&&(_=n.get(a),_[i]&&(u=_[i])),u||(u=s.PePCSInfo.prototype.generate(a,i),_||(_=[],n.set(a,_)),_[i]=u),u}e.init=t,e.generate=r}(Se||(Se={})),function(e){function n(){return s.PeVersion.prototype.version_string()}e.versionString=n}(ye||(ye={}));const nn=Object.freeze(Object.defineProperty({__proto__:null,get _pe(){return s},isLoaded:et,isSupported:tn,load:tt,get PeCSTransformations(){return he},get PeDefs(){return N},get PeFactory(){return Le},get PeGCSExtent(){return nt},get PeGTlistExtended(){return le},get PeGTlistExtendedEntry(){return de},get PeGTTransformations(){return Ge},get PeNotationDms(){return Ie},get PeNotationMgrs(){return fe},get PeNotationUsng(){return me},get PeNotationUtm(){return pe},get PePCSInfo(){return Se},get PeVersion(){return ye},_init:rt},Symbol.toStringTag,{value:"Module"})),jn=Math.PI/180,vn=/SPHEROID\[([^\]]+)]/i,B=h.radius,I=h.eccentricitySquared,rn={a1:B*I,a2:B*I*B*I,a3:B*I*I/2,a4:B*I*B*I*2.5,a5:B*I+B*I*I/2,a6:1-I},Yn={4267:{a:63782064e-1,f:1/294.9786982},4269:{a:6378137,f:1/298.257222101},4326:{a:h.radius,f:h.flattening},104900:{a:2439700,f:0},104901:{a:6051e3,f:0},104902:{a:6051800,f:0},104903:{a:ce.radius,f:ce.flattening},104904:{a:3393400,f:1/192.0430107526882},104905:{a:se.radius,f:se.flattening},104906:{a:6200,f:0},104907:{a:11100,f:0},104908:{a:71492e3,f:.06487439154031222},104909:{a:8200,f:0},104910:{a:83500,f:0},104911:{a:1e4,f:0},104912:{a:2409300,f:0},104913:{a:15e3,f:0},104914:{a:4e4,f:0},104915:{a:1562090,f:0},104916:{a:2632345,f:0},104917:{a:85e3,f:0},104918:{a:1821460,f:0},104919:{a:5e3,f:0},104920:{a:12e3,f:0},104921:{a:3e4,f:3},104922:{a:18e3,f:0},104923:{a:14e3,f:0},104924:{a:49300,f:0},104925:{a:60268e3,f:1/10.2079945799458},104926:{a:16e3,f:0},104927:{a:9500,f:0},104928:{a:56e4,f:0},104929:{a:249400,f:0},104930:{a:59500,f:0},104931:{a:16e3,f:0},104932:{a:133e3,f:0},104933:{a:718e3,f:0},104934:{a:888e3,f:0},104935:{a:1986300,f:0},104936:{a:1e4,f:0},104937:{a:41900,f:0},104938:{a:11e4,f:0},104939:{a:50100,f:0},104940:{a:764e3,f:0},104941:{a:11e3,f:0},104942:{a:529800,f:0},104943:{a:2575e3,f:0},104944:{a:25559e3,f:1/43.61604095563141},104945:{a:578900,f:0},104946:{a:33e3,f:0},104947:{a:21e3,f:0},104948:{a:13e3,f:0},104949:{a:31e3,f:0},104950:{a:27e3,f:0},104951:{a:42e3,f:0},104952:{a:235800,f:0},104953:{a:761400,f:0},104954:{a:15e3,f:0},104955:{a:54e3,f:0},104956:{a:77e3,f:0},104957:{a:27e3,f:0},104958:{a:788900,f:0},104959:{a:584700,f:0},104960:{a:24764e3,f:.01708124697141011},104961:{a:74e3,f:0},104962:{a:79e3,f:0},104963:{a:104e3,f:.14423076923076922},104964:{a:29e3,f:0},104965:{a:17e4,f:0},104966:{a:208e3,f:0},104967:{a:4e4,f:0},104968:{a:1352600,f:0},104969:{a:1195e3,f:0},104970:{a:593e3,f:0},104971:{a:se.radius,f:0},104972:{a:47e4,f:0},104973:{a:255e3,f:0},104974:{a:2439400,f:0}};let Ee=0;class ne{constructor(n){this.uid=Ee++,n?(this._wkt=n.wkt!=null?n.wkt:null,this._wkid=n.wkid!=null?n.wkid:-1,this._isInverse=n.isInverse!=null&&n.isInverse===!0):(this._wkt=null,this._wkid=-1,this._isInverse=!1)}static fromGE(n){const t=new ne;return t._wkt=n.wkt,t._wkid=n.wkid,t._isInverse=n.isInverse,t}get wkt(){return this._wkt}set wkt(n){this._wkt=n,this.uid=Ee++}get wkid(){return this._wkid}set wkid(n){this._wkid=n,this.uid=Ee++}get isInverse(){return this._isInverse}set isInverse(n){this._isInverse=n,this.uid=Ee++}getInverse(){const n=new ne;return n._wkt=this.wkt,n._wkid=this._wkid,n._isInverse=!this.isInverse,n}}class j{constructor(n){if(this.steps=[],this._cachedProjection={},this._chain="",this._gtlistentry=null,n&&n.steps)for(const t of n.steps)t instanceof ne?this.steps.push(t):this.steps.push(new ne({wkid:t.wkid,wkt:t.wkt,isInverse:t.isInverse}))}static cacheKey(n,t){return[n.wkid!==void 0&&n.wkid!==null?n.wkid.toString():"-1",n.wkt!==void 0&&n.wkt!==null?n.wkt.toString():"",t.wkid!==void 0&&t.wkid!==null?t.wkid.toString():"-1",t.wkt!==void 0&&t.wkt!==null?t.wkt.toString():""].join(",")}static fromGE(n){const t=new j;let r="";for(const a of n.steps){const i=ne.fromGE(a);t.steps.push(i),r+=i.uid.toString()+","}return t._cachedProjection={},t._gtlistentry=null,t._chain=r,t}getInverse(){const n=new j;n.steps=[];for(let t=this.steps.length-1;t>=0;t--){const r=this.steps[t];n.steps.push(r.getInverse())}return n}getGTListEntry(){let n="";for(const t of this.steps)n+=t.uid.toString()+",";return n!==this._chain&&(this._gtlistentry=null,this._cachedProjection={},this._chain=n),this._gtlistentry}assignCachedGe(n,t,r){this._cachedProjection[j.cacheKey(n,t)]=r}getCachedGeTransformation(n,t){let r="";for(const i of this.steps)r+=i.uid.toString()+",";r!==this._chain&&(this._gtlistentry=null,this._cachedProjection={},this._chain=r);const a=this._cachedProjection[j.cacheKey(n,t)];return a===void 0?null:a}}let z=null,ie=null,Me=null,Ne={};const ot=new Ft;function st(){return!!z&&et()}function Fe(e){return R(Me)&&(Me=Promise.all([tt(),ge(()=>import("./geometryEngineBase-3dd302e0.js"),[],import.meta.url).then(n=>n.g),ge(()=>import("./hydrated-be86c8b3.js"),["./hydrated-be86c8b3.js","./Extent-69509002.js","./cast-7928d7aa.js","./typedArrayUtil-a8b5b3e9.js","./string-cdf077e6.js","./Error-653283ae.js","./ensureType-cf29afa9.js","./nextTick-3ee5a785.js","./promiseUtils-6684e352.js","./Ellipsoid-89682c5e.js","./Polyline-bf268e7b.js"],import.meta.url)])),Me.then(([,n,{hydratedAdapter:t}])=>{ht(e),ie=t,z=n.default,z._enableProjection(nn),ot.notify()})}function on(e,n,t=null,r=null){return Array.isArray(e)?e.length===0?[]:Ke(ie,e,e[0].spatialReference,n,t,r):Ke(ie,[e],e.spatialReference,n,t,r)[0]}function Ke(e,n,t,r,a=null,i=null){if(R(t)||R(r))return n;if(Ce(t,r,a))return n.map(u=>gt(un(u,t,r)));if(R(a)){const u=j.cacheKey(t,r);Ne[u]!==void 0?a=Ne[u]:(a=an(t,r,void 0),R(a)&&(a=new j),Ne[u]=a)}if(R(z)||R(e))throw new He;return L(i)?z._project(e,n,t,r,a,i):z._project(e,n,t,r,a)}function bn(e,n){const t=sn([e],n);return L(t.pending)?{pending:t.pending,geometry:null}:L(t.geometries)?{pending:null,geometry:t.geometries[0]}:{pending:null,geometry:null}}function sn(e,n){if(!st()){for(const t of e)if(L(t)&&!J(t.spatialReference,n)&&te(t.spatialReference)&&te(n)&&!Ce(t.spatialReference,n))return yt(ot),{pending:Fe(),geometries:null}}return{pending:null,geometries:e.map(t=>R(t)?null:J(t.spatialReference,n)?t:te(t.spatialReference)&&te(n)?_n(t,n):null)}}function an(e,n,t=null){if(R(e)||R(n))return null;if(R(z)||R(ie))throw new He;const r=z._getTransformation(ie,e,n,t,t==null?void 0:t.spatialReference);return r!==null?j.fromGE(r):null}class He extends Rt{constructor(){super("projection:not-loaded","projection engine not fully loaded yet, please call load()")}}var o;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.SPHERICAL_ECEF=1]="SPHERICAL_ECEF",e[e.WGS84=2]="WGS84",e[e.WEB_MERCATOR=3]="WEB_MERCATOR",e[e.WGS84_ECEF=4]="WGS84_ECEF",e[e.CGCS2000=5]="CGCS2000",e[e.WGS84_COMPARABLE_LON_LAT=6]="WGS84_COMPARABLE_LON_LAT",e[e.SPHERICAL_MARS_PCPF=7]="SPHERICAL_MARS_PCPF",e[e.GCSMARS2000=8]="GCSMARS2000",e[e.SPHERICAL_MOON_PCPF=9]="SPHERICAL_MOON_PCPF",e[e.GCSMOON2000=10]="GCSMOON2000",e[e.LON_LAT=11]="LON_LAT",e[e.PLATE_CARREE=12]="PLATE_CARREE"})(o||(o={}));function _n(e,n){try{const t=on(e,n);if(t==null)return null;"xmin"in e&&"xmin"in t&&(t.zmin=e.zmin,t.zmax=e.zmax);const r=en(t.type,e.spatialReference,n);return L(r)&&r(t),t}catch(t){if(!(t instanceof He))throw t;return null}}function Ce(e,n,t){return!t&&(!!J(e,n)||te(e)&&te(n)&&!!$e(e,n,je))}async function Kn(e,n,t,r){if(st())return be(r);if(Array.isArray(e)){for(const{source:a,dest:i,geographicTransformation:u}of e)if(!Ce(a,i,u))return Fe(r)}else if(!Ce(e,n,t))return Fe(r);return be(r)}function Xn(e,n){switch($e(e,n,je)){case T:return"copy3";case Y:return"wgs84ToSphericalECEF";case Q:return"wgs84ToWebMercator";case v:return"wgs84ToPlateCarree";case K:return"wgs84ToWGS84ECEF";case V:return"webMercatorToWGS84";case Et:return"webMercatorToSphericalECEF";case Pt:return"webMercatorToWGS84ECEF";case ct:return"webMercatorToPlateCarree";case X:return"wgs84ECEFToWGS84";case pt:return"wgs84ECEFToSphericalECEF";case St:return"wgs84ECEFToWebMercator";case b:return"sphericalECEFToWGS84";case lt:return"sphericalECEFToWebMercator";case De:return"sphericalMarsPCPFToMars2000";case Ue:return"sphericalMoonPCPFToMoon2000";case ft:return"sphericalECEFToWGS84ECEF";case we:return"mars2000ToSphericalPCPF";case We:return"moon2000ToSphericalPCPF";default:return null}}function un(e,n,t){return e?"x"in e?at(e,n,new Qe,t,0):"xmin"in e?cn(e,n,new xt,t,0):"rings"in e?it(e,n,new zt,t,0):"paths"in e?Pn(e,n,new Zt,t,0):"points"in e?En(e,n,new qt,t,0):null:null}function zn(e,n,t=n.spatialReference,r=0){return L(t)&&L(e.spatialReference)&&L(at(e,e.spatialReference,n,t,r))}function at(e,n,t,r,a){A[0]=e.x,A[1]=e.y;const i=e.z;return A[2]=i!==void 0?i:a,F(A,n,0,A,r,0,1)?(t.x=A[0],t.y=A[1],t.spatialReference=r,i===void 0?(t.z=void 0,t.hasZ=!1):(t.z=A[2],t.hasZ=!0),e.m===void 0?(t.m=void 0,t.hasM=!1):(t.m=e.m,t.hasM=!0),t):null}function En(e,n,t,r,a){const{points:i,hasZ:u,hasM:_}=e,E=[],P=i.length,c=[];for(const l of i)c.push(l[0],l[1],u?l[2]:a);if(!F(c,n,0,c,r,0,P))return null;for(let l=0;l<P;++l){const p=3*l,f=c[p],S=c[p+1];u&&_?E.push([f,S,c[p+2],i[l][3]]):u?E.push([f,S,c[p+2]]):_?E.push([f,S,i[l][2]]):E.push([f,S])}return t.points=E,t.spatialReference=r,t.hasZ=u,t.hasM=_,t}function Pn(e,n,t,r,a){const{paths:i,hasZ:u,hasM:_}=e,E=[];return _t(i,u??!1,_??!1,n,E,r,a)?(t.paths=E,t.spatialReference=r,t.hasZ=u,t.hasM=_,t):null}function Zn({hasZ:e,spatialReference:n,paths:t},r,a=0){const i=W(n,oe),u=d[i][o.WGS84_COMPARABLE_LON_LAT];if(R(u))return!1;const _=e?E=>E:E=>Je(A,E[0],E[1],a);for(const E of t){const P=[];for(const c of E){const l=[0,0,a];u(_(c),0,l,0),P.push(l)}r.push(P)}return!0}function qn({hasZ:e,spatialReference:n,rings:t},r,a=0){const i=W(n,oe),u=d[i][o.WGS84_COMPARABLE_LON_LAT];if(R(u))return!1;const _=e?E=>E:E=>Je(A,E[0],E[1],a);for(const E of t){const P=[];for(const c of E){const l=[0,0,a];u(_(c),0,l,0),P.push(l)}r.push(P)}return!0}function Vn(e,n,t=n.spatialReference,r=0){return L(e.spatialReference)&&L(t)&&L(it(e,e.spatialReference,n,t,r))}function it(e,n,t,r,a){const{rings:i,hasZ:u,hasM:_}=e,E=[];return _t(i,u??!1,_??!1,n,E,r,a)?(t.rings=E,t.spatialReference=r,t.hasZ=u,t.hasM=_,t):null}function cn(e,n,t,r,a){const{xmin:i,ymin:u,xmax:_,ymax:E,hasZ:P,hasM:c}=e;return Xe(i,u,P?e.zmin:a,n,A,r)?(t.xmin=A[0],t.ymin=A[1],P&&(t.zmin=A[2]),Xe(_,E,P?e.zmax:a,n,A,r)?(t.xmax=A[0],t.ymax=A[1],P&&(t.zmax=A[2]),c&&(t.mmin=e.mmin,t.mmax=e.mmax),t.spatialReference=r,t):null):null}function Jn(e,n,t){if(R(n)||R(t))return null;const r=new Qe({spatialReference:t});return F(e,n,0,A,t,0,1)?(r.x=A[0],r.y=A[1],r.z=A[2],r):null}function Qn(e,n,t){return F(e,n,0,A,t.spatialReference,0,1)?(t.x=A[0],t.y=A[1],t.z=A[2],t):null}function er(e,n,t,r=0){A[0]=e.x,A[1]=e.y;const a=e.z;return A[2]=a!==void 0?a:r,F(A,e.spatialReference,0,n,t,0,1)}function Xe(e,n,t,r,a,i){return M[0]=e,M[1]=n,M[2]=t,F(M,r,0,a,i,0,1)}function ze(e,n,t,r){return!(R(n)||R(r)||e.length<2)&&(e.length===2&&(M[0]=e[0],M[1]=e[1],M[2]=0,e=M),F(e,n,0,t,r,0,1))}function tr(e,n){A[0]=e.x,A[1]=e.y;const t=e.z;return A[2]=t!==void 0?t:0,ln(A,e.spatialReference,n)}function ln(e,n,t){return fn(e,n,t)}function fn(e,n,t){if(R(n))return!1;const r=W(n,oe),a=d[r][o.WGS84_COMPARABLE_LON_LAT];return!R(a)&&(a(e,0,M,0),t!==M&&(t[0]=M[0],t[1]=M[1],t.length>2&&(t[2]=M[2])),!0)}function F(e,n,t,r,a,i,u=1){const _=$e(n,a,je);if(R(_))return!1;if(_===T){if(e===r&&t===i)return!0;const P=t+3*u;for(let c=t,l=i;c<P;c++,l++)r[l]=e[c];return!0}const E=t+3*u;for(let P=t,c=i;P<E;P+=3,c+=3)_(e,P,r,c);return!0}function nr(e,n,t,r,a){Dt(A,e),Ht(Pe,e,n),ze(A,t,A,a),ze(Pe,t,Pe,a),kt(r,Pe,A),Bt(r,r)}function _t(e,n,t,r,a,i,u=0){const _=new Array;for(const P of e)for(const c of P)_.push(c[0],c[1],n?c[2]:u);if(!F(_,r,0,_,i,0,_.length/3))return!1;let E=0;a.length=0;for(const P of e){const c=new Array;for(const l of P)n&&t?c.push([_[E++],_[E++],_[E++],l[3]]):n?c.push([_[E++],_[E++],_[E++]]):t?(c.push([_[E++],_[E++],l[2]]),E++):(c.push([_[E++],_[E++]]),E++);a.push(c)}return!0}function rr(e,n,t,r){if(R(n)||R(r))return!1;const a=Ct(n,r,Nn);if(a.projector===T)return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],!0;if(R(a.projector))return!1;const{source:i,dest:u}=a;if(u.spatialReferenceId===o.WEB_MERCATOR){const _=d[i.spatialReferenceId][o.WGS84];return!R(_)&&(_(e,0,m,0),Q(m,0,t,0),t[3]=Ze(m[1],e[2],e[3],h.radius),!0)}if(i.spatialReferenceId!==o.WGS84&&i.spatialReferenceId!==o.CGCS2000||u.spatialReferenceId!==o.PLATE_CARREE){a.projector(e,0,t,0);const _=i.metersPerUnit??1,E=u.metersPerUnit??1;t[3]=e[3]*_/E}else{const _=d[i.spatialReferenceId][o.SPHERICAL_ECEF],E=d[o.SPHERICAL_ECEF][o.PLATE_CARREE];let P=e[3];L(_)&&L(E)&&(P=Ze(e[1],e[2],e[3],h.radius)),a.projector(e,0,t,0),t[3]=P}return!0}function Ze(e,n,t,r){const a=r+n;if(a<r/2||t>a)return Number.MAX_VALUE;const i=Math.abs(y*e)+Math.asin(t/a);return i>=Math.PI/2?Number.MAX_VALUE:t/Math.cos(i)}function or(e,n,t,r){return e!=null&&(J(n,r)?(Qt(t,e),!0):(M[0]=e[0],M[1]=e[1],M[2]=0,!!F(M,n,0,M,r,0,1)&&(t[0]=M[0],t[1]=M[1],M[0]=e[2],M[1]=e[3],M[2]=0,!!F(M,n,0,M,r,0,1)&&(t[2]=M[0],t[3]=M[1],!0))))}function sr(e,n,t,r){if(R(n)||R(r))return!1;const a=W(n,oe),i=W(r,At);if(a===i&&a!==o.UNKNOWN||J(n,r))return t[0]=1,t[1]=1,t[2]=1,!0;if(a===o.SPHERICAL_ECEF){const u=$t(e),_=u/Math.sqrt(e[0]*e[0]+e[1]*e[1]),E=u/h.radius;if(i===o.WEB_MERCATOR)return t[0]=_*E,t[1]=_*E,t[2]=1,!0;if(i===o.WGS84||i===o.CGCS2000){const P=ae;return t[0]=P*_*E,t[1]=P*E,t[2]=1,!0}}else if(a===o.PLATE_CARREE){if(i===o.WGS84||i===o.CGCS2000)return t[0]=ae,t[1]=ae,t[2]=1,!0;if(i===o.WEB_MERCATOR){const u=e[1]/h.radius;return t[0]=1,t[1]=1/Math.cos(u),t[2]=1,!0}}return!1}function ar(e,n,t,r){if(R(e)||R(r))return!1;const a=W(e,oe),i=W(r,At);if(a===i&&!qe(i)&&(a!==o.UNKNOWN||J(e,r)))return Wt(t,n),!0;if(qe(i)){const u=d[a][o.LON_LAT],_=d[o.LON_LAT][i];return!R(u)&&!R(_)&&(u(n,0,m,0),_(m,0,$,0),ut(y*m[0],y*m[1],t),t[12]=$[0],t[13]=$[1],t[14]=$[2],!0)}if((i===o.WEB_MERCATOR||i===o.PLATE_CARREE)&&(a===o.WGS84||a===o.CGCS2000&&i===o.PLATE_CARREE||a===o.SPHERICAL_ECEF||a===o.WEB_MERCATOR)){const u=d[a][o.LON_LAT],_=d[o.LON_LAT][i];return!R(u)&&!R(_)&&(u(n,0,m,0),_(m,0,$,0),a===o.SPHERICAL_ECEF?pn(y*m[0],y*m[1],t):wt(t),t[12]=$[0],t[13]=$[1],t[14]=$[2],!0)}return!1}function qe(e){return e===o.SPHERICAL_ECEF||e===o.SPHERICAL_MARS_PCPF||e===o.SPHERICAL_MOON_PCPF}function ut(e,n,t){const r=Math.sin(e),a=Math.cos(e),i=Math.sin(n),u=Math.cos(n),_=t;return _[0]=-r,_[4]=-i*a,_[8]=u*a,_[12]=0,_[1]=a,_[5]=-i*r,_[9]=u*r,_[13]=0,_[2]=0,_[6]=u,_[10]=i,_[14]=0,_[3]=0,_[7]=0,_[11]=0,_[15]=1,_}function pn(e,n,t){return ut(e,n,t),Ut(t,t),t}function W(e,n){return e?n.spatialReference===e?n.spatialReferenceId:(n.spatialReference=e,"metersPerUnit"in n&&(n.metersPerUnit=Lt(e,1)),e.wkt===dt.wkt?n.spatialReferenceId=o.SPHERICAL_ECEF:jt(e)?n.spatialReferenceId=o.WGS84:vt(e)?n.spatialReferenceId=o.WEB_MERCATOR:Yt(e)?n.spatialReferenceId=o.PLATE_CARREE:e.wkt===Gt.wkt?n.spatialReferenceId=o.WGS84_ECEF:e.wkid===bt.CGCS2000?n.spatialReferenceId=o.CGCS2000:e.wkt===It.wkt?n.spatialReferenceId=o.SPHERICAL_MARS_PCPF:e.wkt===mt.wkt?n.spatialReferenceId=o.SPHERICAL_MOON_PCPF:Kt(e)?n.spatialReferenceId=o.GCSMARS2000:Xt(e)?n.spatialReferenceId=o.GCSMOON2000:n.spatialReferenceId=o.UNKNOWN):o.UNKNOWN}function T(e,n,t,r){e!==t&&(t[r++]=e[n++],t[r++]=e[n++],t[r]=e[n])}function V(e,n,t,r){t[r++]=re*(e[n++]/h.radius),t[r++]=re*(Math.PI/2-2*Math.atan(Math.exp(-e[n++]/h.radius))),t[r]=e[n]}function Et(e,n,t,r){V(e,n,t,r),Y(t,r,t,r)}function Pt(e,n,t,r){V(e,n,t,r),K(t,r,t,r)}function Sn(e,n,t,r,a){const i=.4999999*Math.PI,u=Tt(y*e[n+1],-i,i),_=Math.sin(u);t[r++]=y*e[n]*a.radius,t[r++]=a.halfSemiMajorAxis*Math.log((1+_)/(1-_)),t[r]=e[n+2]}function Q(e,n,t,r){Sn(e,n,t,r,h)}const Ve=h.radius*Math.PI/180,ae=180/(h.radius*Math.PI);function v(e,n,t,r){t[r]=e[n]*Ve,t[r+1]=e[n+1]*Ve,t[r+2]=e[n+2]}function q(e,n,t,r){t[r]=e[n]*ae,t[r+1]=e[n+1]*ae,t[r+2]=e[n+2]}function ct(e,n,t,r){V(e,n,t,r),v(t,r,t,r)}function Cn(e,n,t,r){X(e,n,t,r),v(t,r,t,r)}function An(e,n,t,r){b(e,n,t,r),v(t,r,t,r)}function Rn(e,n,t,r){q(e,n,t,r),Y(t,r,t,r)}function On(e,n,t,r){q(e,n,t,r),Q(t,r,t,r)}function Tn(e,n,t,r){q(e,n,t,r),K(t,r,t,r)}function ir(e){if(R(e))return!1;const n=W(e,oe);return!!d[n][o.WGS84_COMPARABLE_LON_LAT]}function _r(e,n,t,r){const a=Math.cos(t);e[0]=Math.cos(n)*a*r,e[1]=Math.sin(n)*a*r,e[2]=Math.sin(t)*r}function ke(e,n,t,r,a){const i=a+e[n+2],u=y*e[n+1],_=y*e[n],E=Math.cos(u);t[r++]=Math.cos(_)*E*i,t[r++]=Math.sin(_)*E*i,t[r]=Math.sin(u)*i}function We(e,n,t,r){ke(e,n,t,r,ce.radius)}function we(e,n,t,r){ke(e,n,t,r,se.radius)}function Y(e,n,t,r){ke(e,n,t,r,h.radius)}function Be(e,n,t,r,a){const i=e[n],u=e[n+1],_=e[n+2],E=Math.sqrt(i*i+u*u+_*_),P=Nt(_/(E===0?1:E)),c=Math.atan2(u,i);t[r++]=re*c,t[r++]=re*P,t[r]=E-a}function Ue(e,n,t,r){Be(e,n,t,r,ce.radius)}function De(e,n,t,r){Be(e,n,t,r,se.radius)}function b(e,n,t,r){Be(e,n,t,r,h.radius)}function lt(e,n,t,r){b(e,n,t,r),Q(t,r,t,r)}function ft(e,n,t,r){b(e,n,t,r),K(t,r,t,r)}function Mn(e,n,t,r,a){const i=y*e[n],u=y*e[n+1],_=e[n+2],E=Math.sin(u),P=Math.cos(u),c=a.radius/Math.sqrt(1-a.eccentricitySquared*E*E);t[r++]=(c+_)*P*Math.cos(i),t[r++]=(c+_)*P*Math.sin(i),t[r++]=(c*(1-a.eccentricitySquared)+_)*E}function K(e,n,t,r){Mn(e,n,t,r,h)}function X(e,n,t,r){const a=rn,i=e[n],u=e[n+1],_=e[n+2];let E,P,c,l,p,f,S,C,O,g,D,H,k,w,G,Ae,Re,Oe,ee,ve,Ye;E=Math.abs(_),P=i*i+u*u,c=Math.sqrt(P),l=P+_*_,p=Math.sqrt(l),ve=Math.atan2(u,i),f=_*_/l,S=P/l,w=a.a2/p,G=a.a3-a.a4/p,S>.3?(C=E/p*(1+S*(a.a1+w+f*G)/p),ee=Math.asin(C),g=C*C,O=Math.sqrt(1-g)):(O=c/p*(1-f*(a.a5-w-S*G)/p),ee=Math.acos(O),g=1-O*O,C=Math.sqrt(g)),D=1-h.eccentricitySquared*g,H=h.radius/Math.sqrt(D),k=a.a6*H,w=c-H*O,G=E-k*C,Re=O*w+C*G,Ae=O*G-C*w,Oe=Ae/(k/D+Re),ee+=Oe,Ye=Re+Ae*Oe/2,_<0&&(ee=-ee),t[r++]=re*ve,t[r++]=re*ee,t[r]=Ye}function pt(e,n,t,r){X(e,n,t,r),Y(t,r,t,r)}function St(e,n,t,r){X(e,n,t,r),Q(t,r,t,r)}const d={[o.WGS84]:{[o.CGCS2000]:null,[o.GCSMARS2000]:null,[o.GCSMOON2000]:null,[o.LON_LAT]:T,[o.WGS84_COMPARABLE_LON_LAT]:T,[o.SPHERICAL_ECEF]:Y,[o.SPHERICAL_MARS_PCPF]:null,[o.SPHERICAL_MOON_PCPF]:null,[o.UNKNOWN]:null,[o.WEB_MERCATOR]:Q,[o.PLATE_CARREE]:v,[o.WGS84]:T,[o.WGS84_ECEF]:K},[o.CGCS2000]:{[o.CGCS2000]:T,[o.GCSMARS2000]:null,[o.GCSMOON2000]:null,[o.LON_LAT]:T,[o.WGS84_COMPARABLE_LON_LAT]:T,[o.SPHERICAL_ECEF]:Y,[o.SPHERICAL_MARS_PCPF]:null,[o.SPHERICAL_MOON_PCPF]:null,[o.UNKNOWN]:null,[o.WEB_MERCATOR]:null,[o.PLATE_CARREE]:v,[o.WGS84]:null,[o.WGS84_ECEF]:K},[o.GCSMARS2000]:{[o.CGCS2000]:null,[o.GCSMARS2000]:T,[o.GCSMOON2000]:null,[o.LON_LAT]:T,[o.WGS84_COMPARABLE_LON_LAT]:null,[o.SPHERICAL_ECEF]:null,[o.SPHERICAL_MARS_PCPF]:we,[o.SPHERICAL_MOON_PCPF]:null,[o.UNKNOWN]:null,[o.WEB_MERCATOR]:null,[o.PLATE_CARREE]:null,[o.WGS84]:null,[o.WGS84_ECEF]:null},[o.GCSMOON2000]:{[o.CGCS2000]:null,[o.GCSMARS2000]:null,[o.GCSMOON2000]:T,[o.LON_LAT]:T,[o.WGS84_COMPARABLE_LON_LAT]:null,[o.SPHERICAL_ECEF]:null,[o.SPHERICAL_MARS_PCPF]:null,[o.SPHERICAL_MOON_PCPF]:We,[o.UNKNOWN]:null,[o.WEB_MERCATOR]:null,[o.PLATE_CARREE]:null,[o.WGS84]:null,[o.WGS84_ECEF]:null},[o.WEB_MERCATOR]:{[o.CGCS2000]:null,[o.GCSMARS2000]:null,[o.GCSMOON2000]:null,[o.LON_LAT]:V,[o.WGS84_COMPARABLE_LON_LAT]:V,[o.SPHERICAL_ECEF]:Et,[o.SPHERICAL_MARS_PCPF]:null,[o.SPHERICAL_MOON_PCPF]:null,[o.UNKNOWN]:null,[o.WEB_MERCATOR]:T,[o.PLATE_CARREE]:ct,[o.WGS84]:V,[o.WGS84_ECEF]:Pt},[o.WGS84_ECEF]:{[o.CGCS2000]:X,[o.GCSMARS2000]:null,[o.GCSMOON2000]:null,[o.LON_LAT]:X,[o.WGS84_COMPARABLE_LON_LAT]:X,[o.SPHERICAL_ECEF]:pt,[o.SPHERICAL_MARS_PCPF]:null,[o.SPHERICAL_MOON_PCPF]:null,[o.UNKNOWN]:null,[o.WEB_MERCATOR]:St,[o.PLATE_CARREE]:Cn,[o.WGS84]:X,[o.WGS84_ECEF]:T},[o.SPHERICAL_ECEF]:{[o.CGCS2000]:b,[o.GCSMARS2000]:null,[o.GCSMOON2000]:null,[o.LON_LAT]:b,[o.WGS84_COMPARABLE_LON_LAT]:b,[o.SPHERICAL_ECEF]:T,[o.SPHERICAL_MARS_PCPF]:null,[o.SPHERICAL_MOON_PCPF]:null,[o.UNKNOWN]:null,[o.WEB_MERCATOR]:lt,[o.PLATE_CARREE]:An,[o.WGS84]:b,[o.WGS84_ECEF]:ft},[o.SPHERICAL_MARS_PCPF]:{[o.CGCS2000]:null,[o.GCSMARS2000]:De,[o.GCSMOON2000]:null,[o.LON_LAT]:De,[o.WGS84_COMPARABLE_LON_LAT]:null,[o.SPHERICAL_ECEF]:null,[o.SPHERICAL_MARS_PCPF]:T,[o.SPHERICAL_MOON_PCPF]:null,[o.UNKNOWN]:null,[o.WEB_MERCATOR]:null,[o.PLATE_CARREE]:null,[o.WGS84]:null,[o.WGS84_ECEF]:null},[o.SPHERICAL_MOON_PCPF]:{[o.CGCS2000]:null,[o.GCSMARS2000]:null,[o.GCSMOON2000]:Ue,[o.LON_LAT]:Ue,[o.WGS84_COMPARABLE_LON_LAT]:null,[o.SPHERICAL_ECEF]:null,[o.SPHERICAL_MARS_PCPF]:null,[o.SPHERICAL_MOON_PCPF]:T,[o.UNKNOWN]:null,[o.WEB_MERCATOR]:null,[o.PLATE_CARREE]:null,[o.WGS84]:null,[o.WGS84_ECEF]:null},[o.UNKNOWN]:{[o.CGCS2000]:null,[o.GCSMARS2000]:null,[o.GCSMOON2000]:null,[o.LON_LAT]:null,[o.WGS84_COMPARABLE_LON_LAT]:null,[o.SPHERICAL_ECEF]:null,[o.SPHERICAL_MARS_PCPF]:null,[o.SPHERICAL_MOON_PCPF]:null,[o.UNKNOWN]:T,[o.WEB_MERCATOR]:null,[o.PLATE_CARREE]:null,[o.WGS84]:null,[o.WGS84_ECEF]:null},[o.LON_LAT]:{[o.CGCS2000]:T,[o.GCSMARS2000]:T,[o.GCSMOON2000]:T,[o.LON_LAT]:T,[o.WGS84_COMPARABLE_LON_LAT]:T,[o.SPHERICAL_ECEF]:Y,[o.SPHERICAL_MARS_PCPF]:we,[o.SPHERICAL_MOON_PCPF]:We,[o.UNKNOWN]:null,[o.WEB_MERCATOR]:Q,[o.PLATE_CARREE]:v,[o.WGS84]:T,[o.WGS84_ECEF]:K},[o.WGS84_COMPARABLE_LON_LAT]:{[o.CGCS2000]:null,[o.GCSMARS2000]:null,[o.GCSMOON2000]:null,[o.LON_LAT]:T,[o.WGS84_COMPARABLE_LON_LAT]:T,[o.SPHERICAL_ECEF]:Y,[o.SPHERICAL_MARS_PCPF]:null,[o.SPHERICAL_MOON_PCPF]:null,[o.UNKNOWN]:null,[o.WEB_MERCATOR]:null,[o.PLATE_CARREE]:v,[o.WGS84]:T,[o.WGS84_ECEF]:K},[o.PLATE_CARREE]:{[o.CGCS2000]:q,[o.GCSMARS2000]:null,[o.GCSMOON2000]:null,[o.LON_LAT]:q,[o.WGS84_COMPARABLE_LON_LAT]:q,[o.SPHERICAL_ECEF]:Rn,[o.SPHERICAL_MARS_PCPF]:null,[o.SPHERICAL_MOON_PCPF]:null,[o.UNKNOWN]:null,[o.WEB_MERCATOR]:On,[o.PLATE_CARREE]:T,[o.WGS84]:q,[o.WGS84_ECEF]:Tn}};function $e(e,n,t=xe()){return R(e)||R(n)?null:Ct(e,n,t).projector}function Ct(e,n,t){if(R(e)||R(n)||t.source.spatialReference===e&&t.dest.spatialReference===n)return t;const r=W(e,t.source),a=W(n,t.dest);return r===o.UNKNOWN&&a===o.UNKNOWN?J(e,n)?t.projector=T:t.projector=null:t.projector=d[r][a],t}function xe(){return{source:{spatialReference:null,spatialReferenceId:o.UNKNOWN,metersPerUnit:1},dest:{spatialReference:null,spatialReferenceId:o.UNKNOWN,metersPerUnit:1},projector:T}}const oe={spatialReference:null,spatialReferenceId:o.UNKNOWN},At={spatialReference:null,spatialReferenceId:o.UNKNOWN},je=xe(),Nn=xe(),y=Mt(1),re=Ot(1),M=_e(),m=_e(),$=_e(),A=_e(),Pe=_e();export{Ce as A,Xe as B,Be as C,j as D,Le as E,Zn as F,sn as G,Qn as H,nr as K,Se as O,un as P,ir as R,Xn as S,qn as W,ut as X,ar as Z,Kn as _,Sn as a,Yn as b,vn as c,Jn as d,st as e,_r as f,er as g,he as h,jn as i,ze as j,Ge as k,Ke as l,an as m,rr as n,Vn as o,zn as p,sr as q,on as r,N as s,Fe as t,bn as u,or as v,ln as w,F as x,tr as y,_n as z};
