import{e as n,y as r,n as u}from"./cast-7928d7aa.js";import{l,w as c,j as y}from"./reactiveUtils-f41a4e00.js";import{t as v,h as d}from"./typedArrayUtil-a8b5b3e9.js";import"./ensureType-cf29afa9.js";import{bu as f}from"./index-455b69b8.js";import{j as w}from"./asyncUtils-62e8a185.js";import{v as h}from"./promiseUtils-6684e352.js";let o=class extends f{constructor(t){super(t)}initialize(){this.addHandles(l(()=>this.analysisViewData.visible,t=>this.visible=t,c))}deactivate(){this.onDeactivate(),this.created||this.analysis.clear()}resetCreated(){this._set("created",!1)}};n([r({constructOnly:!0})],o.prototype,"analysis",void 0),n([r()],o.prototype,"analysisViewData",void 0),o=n([u("esri.views.interactive.AnalysisToolBase")],o);function B(t,i){t.interactive=!0;const{tool:e,view:s}=t;s.activeTool=e;let a=h(i,()=>{s.activeTool===e&&(s.activeTool=null)});return w(async p=>{await y(()=>v(e)||!e.active,p),a=d(a)},i)}function C(t,i){return l(()=>t.interactive,()=>$(t,i),c)}function $(t,i){t.interactive?D(t,i):m(t)}function D(t,i){m(t);const{view:e,analysis:s}=t,a=new i({view:e,analysis:s,analysisViewData:t});return t.tool=a,e.tools.add(a),a}function m(t){const{view:i,tool:e}=t;v(e)||(i.tools.remove(e),t.tool=null)}export{o as a,B as c,m,C as s};