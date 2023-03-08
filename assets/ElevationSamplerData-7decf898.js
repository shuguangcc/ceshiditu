import"./geometry-5a216427.js";import"./string-cdf077e6.js";import{s as d}from"./Error-653283ae.js";import{t as m,i as R}from"./typedArrayUtil-a8b5b3e9.js";import{$ as y}from"./unitUtils-47abac71.js";import{f as p,u as $,w as v}from"./aaBoundingRect-4a760199.js";import{w,M as g}from"./Extent-69509002.js";const c=d.getLogger("esri.layers.support.ElevationSampler");class f{queryElevation(t){return D(t.clone(),this)}on(){return M}projectIfRequired(t,e){return x(t,e)}}class A extends f{constructor(t,e,i){super(),this.tile=t,this.noDataValue=i;const n=t.tile.extent;this.extent=p(n,e.spatialReference),this.extent.zmin=t.zmin,this.extent.zmax=t.zmax,this._aaExtent=n;const a=y(e.spatialReference),o=e.lodAt(t.tile.level).resolution*a;this.demResolution={min:o,max:o}}get spatialReference(){return this.extent.spatialReference}contains(t){const e=this.projectIfRequired(t,this.spatialReference);return!m(e)&&this.containsAt(e.x,e.y)}containsAt(t,e){return v(this._aaExtent,t,e)}elevationAt(t,e){if(!this.containsAt(t,e)){const i=this.extent,n=`${i.xmin}, ${i.ymin}, ${i.xmax}, ${i.ymax}`;return c.warn("#elevationAt()",`Point used to sample elevation (${t}, ${e}) is outside of the sampler extent (${n})`),this.noDataValue}return R(this.tile.sample(t,e),this.noDataValue)}}class _ extends f{constructor(t,e,i){let n;super(),typeof e=="number"?(this.noDataValue=e,n=null):(n=e,this.noDataValue=i),this.samplers=n?t.map(o=>new A(o,n,this.noDataValue)):t;const a=this.samplers[0];if(a){this.extent=a.extent.clone();const{min:o,max:h}=a.demResolution;this.demResolution={min:o,max:h};for(let l=1;l<this.samplers.length;l++){const u=this.samplers[l];this.extent.union(u.extent),this.demResolution.min=Math.min(this.demResolution.min,u.demResolution.min),this.demResolution.max=Math.max(this.demResolution.max,u.demResolution.max)}}else this.extent=p($(),n.spatialReference),this.demResolution={min:0,max:0}}get spatialReference(){return this.extent.spatialReference}elevationAt(t,e){for(const i of this.samplers)if(i.containsAt(t,e))return i.elevationAt(t,e);return c.warn("#elevationAt()",`Point used to sample elevation (${t}, ${e}) is outside of the sampler`),this.noDataValue}}function D(s,t){const e=x(s,t.spatialReference);if(!e)return null;switch(s.type){case"point":V(s,e,t);break;case"polyline":k(s,e,t);break;case"multipoint":z(s,e,t)}return s}function x(s,t){if(m(s))return null;const e=s.spatialReference;if(e.equals(t))return s;const i=g(s,t);return i||c.error(`Cannot project geometry spatial reference (wkid:${e.wkid}) to elevation sampler spatial reference (wkid:${t.wkid})`),i}function V(s,t,e){s.z=e.elevationAt(t.x,t.y)}function k(s,t,e){r.spatialReference=t.spatialReference;const i=s.hasM&&!s.hasZ;for(let n=0;n<s.paths.length;n++){const a=s.paths[n],o=t.paths[n];for(let h=0;h<a.length;h++){const l=a[h],u=o[h];r.x=u[0],r.y=u[1],i&&(l[3]=l[2]),l[2]=e.elevationAt(r.x,r.y)}}s.hasZ=!0}function z(s,t,e){r.spatialReference=t.spatialReference;const i=s.hasM&&!s.hasZ;for(let n=0;n<s.points.length;n++){const a=s.points[n],o=t.points[n];r.x=o[0],r.y=o[1],i&&(a[3]=a[2]),a[2]=e.elevationAt(r.x,r.y)}s.hasZ=!0}const r=new w,M={remove(){}};class C{constructor({values:t,width:e,height:i,noDataValue:n},a){this.pixelData=t,this.width=e,this.height=i,this.safeWidth=.99999999*(e-1),this.noDataValue=n,this.dx=(e-1)/(a[2]-a[0]),this.dy=(e-1)/(a[3]-a[1]),this.x0=a[0],this.y1=a[3]}}export{D as h,_ as p,C as t};
