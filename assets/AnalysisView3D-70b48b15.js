import{c as o,e,y as i,n as s}from"./cast-7928d7aa.js";import{r as p}from"./typedArrayUtil-a8b5b3e9.js";import{m as a}from"./Promise-dfdee8ba.js";import"./ensureType-cf29afa9.js";const d=n=>{let t=class extends a(n){constructor(){super(...arguments),this.parent=null,this._userInteractive=!1,this._interactiveViewModelCount=0}get interactive(){return this._interactiveViewModelCount>0||this._userInteractive}set interactive(r){this._userInteractive=r}get updating(){return!1}get visible(){return!p(this.parent)||this.parent.visible&&!this.parent.suspended}set visible(r){this._overrideIfSome("visible",r)}forceInteractiveForViewModel(){return this._interactiveViewModelCount++,o(()=>this._interactiveViewModelCount--)}};return e([i({readOnly:!0})],t.prototype,"type",void 0),e([i({constructOnly:!0})],t.prototype,"analysis",void 0),e([i({constructOnly:!0})],t.prototype,"parent",void 0),e([i({constructOnly:!0})],t.prototype,"view",void 0),e([i({type:Boolean})],t.prototype,"interactive",null),e([i()],t.prototype,"_userInteractive",void 0),e([i({readOnly:!0})],t.prototype,"updating",null),e([i()],t.prototype,"visible",null),e([i()],t.prototype,"_interactiveViewModelCount",void 0),t=e([s("esri.views.3d.analysis.AnalysisView3D")],t),t};export{d as n};
