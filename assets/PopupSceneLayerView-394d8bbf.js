import{e as f,n as m}from"./cast-7928d7aa.js";import{a as u}from"./Error-653283ae.js";import{r as h}from"./typedArrayUtil-a8b5b3e9.js";import"./ensureType-cf29afa9.js";import"./string-cdf077e6.js";import{v as w,g as F}from"./fieldUtils-31bfecd2.js";import{s as l,d as P}from"./popupUtils-e8f3d062.js";const S=y=>{let a=class extends y{_validateFetchPopupFeatures(p){const{layer:e}=this,{popupEnabled:r}=e;return r?l(e,p)?void 0:new u("scenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{layer:e}):new u("scenelayerview3d:fetchPopupFeatures","Popups are disabled",{layer:e})}async prepareFetchPopupFeatures(p){}async fetchPopupFeatures(p,e){const r=this._validateFetchPopupFeatures(e);if(r)throw r;const o=h(e)?e.clientGraphics:null;if(!o||o.length===0)return[];const d=this.layer.type==="scene"&&h(this.layer.associatedLayer)?this.layer.associatedLayer:this.layer,n=w(this.layer.fieldsIndex,await P(d,l(this.layer,e)));await this.prepareFetchPopupFeatures(n);const c=new Set,i=[],s=[];for(const t of o)F(n,t,c)?s.push(t):i.push(t);return s.length===0?i:this.whenGraphicAttributes(s,[...c]).catch(()=>s).then(t=>i.concat(t))}};return a=f([m("esri.views.3d.layers.support.PopupSceneLayerView")],a),a};export{S as c};
