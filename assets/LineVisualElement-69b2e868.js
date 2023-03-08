import{t as p,r as a,i as w,e as f}from"./typedArrayUtil-a8b5b3e9.js";import{z as P}from"./projection-d7b57a6c.js";import{aP as b,H as v,aV as O,aW as R,aX as E,aY as x}from"./index-455b69b8.js";import{n as G,x as y}from"./mat4-44a0988f.js";import{e as C}from"./mat4f64-1e28eae0.js";import{o as _,O as j}from"./vec3-a020a6f6.js";import{f as $,n}from"./vec3f64-2f9cef06.js";import{r as M,j as u}from"./EffectView-d3bf37ed.js";import{l as H}from"./reactiveUtils-f41a4e00.js";import{i as W}from"./basicInterfaces-19ed850e.js";import{c as D}from"./VisualVariablePassParameters-5807c7dc.js";function I(l,e,s,t=!1){const r=P(l,e);return p(r)?null:(r.hasZ&&!t||!a(s)||(r.z=w(b(s,r),0)),r)}function J(l,e,s){s.warnOnce(`Failed to project analysis geometry (id: '${l.id}'), projection from spatial reference (wkid: '${e.wkid}') to view spatial reference is not supported. Projection may be possible after calling projection.load().`)}class F{constructor(e){this._attached=!1,this._resourcesCreated=!1,this._visible=!0,this.view=e,this._handle=H(()=>this.view.ready,s=>{this._resourcesCreated&&(s?this._createResources():this._destroyResources())})}applyProps(e){let s=!1;for(const t in e)t in this?t==="attached"?s=e[t]:this[t]=e[t]:console.error("Cannot set unknown property",t);this.attached=s}destroy(){this.attached=!1,this._handle.remove()}get attached(){return this._attached}set attached(e){e!==this._attached&&this.view._stage&&(this._attached=e,this._attached&&!this._resourcesCreated?this._createResources():!this._attached&&this._resourcesCreated&&this._destroyResources())}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.attached&&this.updateVisibility(e))}_createResources(){this.createResources(),this._resourcesCreated=!0,this.visible||this.updateVisibility(!1)}_destroyResources(){this.destroyResources(),this._resourcesCreated=!1}}class V extends F{constructor(e){super(e.view),this._resources=null,this._transform=C()}get object(){return a(this._resources)?this._resources.object:null}get transform(){return this._transform}set transform(e){G(this._transform,e),a(this._resources)&&(this._resources.object.transformation=this._transform)}recreate(){this.attached&&this.createResources()}recreateGeometry(){if(p(this._resources))return;const e=this._resources.object,s=this.view._stage;s.removeMany(e.geometries),e.removeAllGeometries(),this.createGeometries(e),this.visible||e.setVisible(this.visible),s.addMany(e.geometries)}createResources(){this.destroyResources();const e=this.view._stage;if(!e)return;const s=new v({isPickable:!1,updatePolicy:W.SYNC});e.add(s);const t=new O({castShadow:!1});t.transformation=this._transform,this.createExternalResources(),this.createGeometries(t),e.addMany(t.geometries),this.forEachExternalMaterial(r=>e.add(r)),e.add(t),s.add(t),this.visible||t.setVisible(!1),this._resources={layer:s,object:t}}destroyResources(){const e=this.view._stage;!p(this._resources)&&e&&(e.remove(this._resources.object),e.remove(this._resources.layer),this.forEachExternalMaterial(s=>{e.remove(s),s.dispose()}),e.removeMany(this._resources.object.geometries),this._resources.object.dispose(),this.destroyExternalResources(),this._resources=null)}updateVisibility(e){p(this._resources)||this._resources.object.setVisible(e)}}class K extends V{constructor(e,s){super(e),this._hasExternalMaterial=!1,this._renderOccluded=D.OccludeAndTransparent,this._width=1,this._color=M(1,0,1,1),this._innerWidth=1,this._innerColor=null,this._stipplePattern=null,this._stippleOffColor=null,this._stipplePreferContinuous=!0,this._writeDepthEnabled=!0,this._falloff=0,this._polygonOffset=!1,this._material=s,this._hasExternalMaterial=a(s),this.applyProps(e)}setGeometryFromRenderSpacePoint(e,s=1e3){const t=[];t.push([[e[0]-s,e[1]+0,e[2]+0],[e[0]+s,e[1]+0,e[2]+0]]),t.push([[e[0]-0,e[1]-s,e[2]+0],[e[0]+0,e[1]+s,e[2]+0]]),t.push([[e[0]-0,e[1]+0,e[2]-s],[e[0]+0,e[1]+0,e[2]+s]]),this.geometry=t}setGeometryFromExtent(e){const s=this.view.spatialReference,t=n(),r=n(),o=100,i=[];_(t,e[0],e[1],o),this.view.renderCoordsHelper.toRenderCoords(t,s,r),i.push([r[0],r[1],r[2]]),_(t,e[2],e[1],o),this.view.renderCoordsHelper.toRenderCoords(t,s,r),i.push([r[0],r[1],r[2]]),_(t,e[2],e[3],o),this.view.renderCoordsHelper.toRenderCoords(t,s,r),i.push([r[0],r[1],r[2]]),_(t,e[0],e[3],o),this.view.renderCoordsHelper.toRenderCoords(t,s,r),i.push([r[0],r[1],r[2]]),_(t,e[0],e[1],o),this.view.renderCoordsHelper.toRenderCoords(t,s,r),i.push([r[0],r[1],r[2]]),_(t,e[0],e[1],o),this.view.renderCoordsHelper.toRenderCoords(t,s,r),i.push([r[0],r[1],r[2]]),this.geometry=[i]}setGeometryFromFrustum(e){const s=[];e.lines.forEach(t=>{s.push([t.origin[0],t.origin[1],t.origin[2]]),s.push([t.endpoint[0],t.endpoint[1],t.endpoint[2]])}),this.geometry=[s]}setGeometryFromBoundedPlane(e){const s=[],t=e.origin,r=e.basis1,o=e.basis2,i=.5,h=n(),m=n(),c=n(),d=n();h[0]=t[0]-r[0]*i-o[0]*i,h[1]=t[1]-r[1]*i-o[1]*i,h[2]=t[2]-r[2]*i-o[2]*i,m[0]=t[0]-r[0]*i+o[0]*i,m[1]=t[1]-r[1]*i+o[1]*i,m[2]=t[2]-r[2]*i+o[2]*i,c[0]=t[0]+r[0]*i+o[0]*i,c[1]=t[1]+r[1]*i+o[1]*i,c[2]=t[2]+r[2]*i+o[2]*i,d[0]=t[0]+r[0]*i-o[0]*i,d[1]=t[1]+r[1]*i-o[1]*i,d[2]=t[2]+r[2]*i-o[2]*i,s.push([h[0],h[1],h[2]]),s.push([m[0],m[1],m[2]]),s.push([c[0],c[1],c[2]]),s.push([d[0],d[1],d[2]]),s.push([h[0],h[1],h[2]]),this.geometry=[s]}setGeometryFromSegment(e){const s=e.endRenderSpace;this.transform=y(g,s);const{points:t}=e.createRenderGeometry(s,this.view.renderCoordsHelper);this.geometry=[t]}setGeometryFromSegments(e,s=$){this.transform=y(g,s),this.geometry=e.map(t=>t.createRenderGeometry(s,this.view.renderCoordsHelper).points)}getTransformedGeometry(){return p(this._geometry)?null:this._geometry.map(e=>e.map(s=>j(n(),s,this.transform)))}get renderOccluded(){return a(this._material)?this._material.parameters.renderOccluded:this._renderOccluded}set renderOccluded(e){this._renderOccluded=e,a(this._material)&&this._material.setParameters({renderOccluded:e})}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this.recreateGeometry()}get width(){return a(this._material)?this._material.parameters.width:this._width}set width(e){this._width=e,a(this._material)&&this._material.setParameters({width:e})}get color(){return a(this._material)?this._material.parameters.color:this._color}set color(e){this._color=u(e),a(this._material)&&this._material.setParameters({color:this._color})}get innerWidth(){return a(this._material)?this._material.parameters.innerWidth:this._innerWidth}set innerWidth(e){this._innerWidth=e,a(this._material)&&this._material.setParameters({innerWidth:e})}get innerColor(){return a(this._material)?this._material.parameters.innerColor:this._innerColor}set innerColor(e){this._innerColor=a(e)?u(e):e,a(this._material)&&this._material.setParameters({innerColor:this._innerColor})}get stipplePattern(){return a(this._material)?this._material.parameters.stipplePattern:this._stipplePattern}set stipplePattern(e){this._stipplePattern=e,a(this._material)&&this._material.setParameters({stipplePattern:e})}get stippleOffColor(){return a(this._material)?this._material.parameters.stippleOffColor:this._stippleOffColor}set stippleOffColor(e){this._stippleOffColor=a(e)?u(e):null,a(this._material)&&this._material.setParameters({stippleOffColor:this._stippleOffColor})}get stipplePreferContinuous(){return a(this._material)?this._material.parameters.stipplePreferContinuous:this._stipplePreferContinuous}set stipplePreferContinuous(e){this._stipplePreferContinuous=e,a(this._material)&&this._material.setParameters({stipplePreferContinuous:e})}get writeDepthEnabled(){return a(this._material)?this._material.parameters.writeDepth:this._writeDepthEnabled}set writeDepthEnabled(e){this._writeDepthEnabled=e,a(this._material)&&this._material.setParameters({writeDepth:e})}get falloff(){return a(this._material)?this._material.parameters.falloff:this._falloff}set falloff(e){this._falloff=e,a(this._material)&&this._material.setParameters({falloff:e})}get polygonOffset(){return a(this._material)?this._material.parameters.hasPolygonOffset:this._polygonOffset}set polygonOffset(e){this._polygonOffset=e,a(this._material)&&this._material.setParameters({hasPolygonOffset:e})}createExternalResources(){this._hasExternalMaterial||(this._material=new R({width:this._width,color:this._color,stippleOffColor:this._stippleOffColor,stipplePattern:this._stipplePattern,stipplePreferContinuous:this._stipplePreferContinuous,isClosed:!1,falloff:this._falloff,innerColor:this._innerColor,innerWidth:this._innerWidth,hasPolygonOffset:this._polygonOffset,renderOccluded:this._renderOccluded,writeDepth:this._writeDepthEnabled}))}destroyExternalResources(){this._hasExternalMaterial||(this._material=null)}createGeometries(e){for(const s of E(this.geometry)){const t=x(s);e.addGeometry(t,f(this._material))}}forEachExternalMaterial(e){this._hasExternalMaterial||e(f(this._material))}}const g=C();export{J as a,I as b,K as c,V as n,F as t};
