import{N as a,O as s,a0 as j,aN as k,t as d,ar as c,q as w,eU as E,bY as J,r as p,c as b,eV as g,eW as x,bq as m,aV as z,eX as $,a_ as f,b as M}from"./index-ca9d4bb6.js";import{a as U}from"./normalizeUtilsSync-3f67bc52.js";import{e as u}from"./mat3f64-221ce671.js";let n=class extends k{constructor(e){super(e)}get bounds(){const e=this.coords;return d(e)||d(e.extent)?null:c(e.extent)}get coords(){var o;const e=(o=w(this.element.georeference))==null?void 0:o.coords;return E(e,this.spatialReference).geometry}get normalizedCoords(){return J.fromJSON(U(this.coords))}get normalizedBounds(){const e=p(this.normalizedCoords)?this.normalizedCoords.extent:null;return p(e)?c(e):null}};a([s()],n.prototype,"spatialReference",void 0),a([s()],n.prototype,"element",void 0),a([s()],n.prototype,"bounds",null),a([s()],n.prototype,"coords",null),a([s()],n.prototype,"normalizedCoords",null),a([s()],n.prototype,"normalizedBounds",null),n=a([j("esri.layers.support.MediaElementView")],n);const t=M(),l=u(),i=u(),y=u();function _(e,o,r){return b(t,o[0],o[1],1),g(t,t,x(l,r)),t[2]===0?m(e,t[0],t[1]):m(e,t[0]/t[2],t[1]/t[2])}function A(e,o,r){return h(i,o[0],o[1],o[2],o[3],o[4],o[5],o[6],o[7]),h(y,r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7]),z(e,$(i,i),y),e[8]!==0&&(e[0]/=e[8],e[1]/=e[8],e[2]/=e[8],e[3]/=e[8],e[4]/=e[8],e[5]/=e[8],e[6]/=e[8],e[7]/=e[8],e[8]/=e[8]),e}function h(e,o,r,v,C,N,V,q,B){f(e,o,v,N,r,C,V,1,1,1),b(t,q,B,1),$(l,e);const[O,R,S]=g(t,t,x(l,l));return f(l,O,0,0,0,R,0,0,0,S),z(e,l,e)}export{_ as h,A as j,n as u};
