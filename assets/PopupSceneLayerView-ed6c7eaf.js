import{e as d,b as f,as as c,u as h,b8 as w,b9 as F}from"./index-74d49a87.js";import{s as l,d as P}from"./popupUtils-8b1a1adb.js";const m=u=>{let r=class extends u{_validateFetchPopupFeatures(p){const{layer:e}=this,{popupEnabled:t}=e;if(!t)throw new c("scenelayerview3d:fetchPopupFeatures","Popups are disabled",{layer:e});if(!l(e,p))throw new c("scenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{layer:e})}async prepareFetchPopupFeatures(p){}async fetchPopupFeatures(p,e){this._validateFetchPopupFeatures(e);const t=h(e)?e.clientGraphics:null;if(!t||t.length===0)return[];const y=this.layer.type==="scene"&&h(this.layer.associatedLayer)?this.layer.associatedLayer:this.layer;let i=[];"fieldsIndex"in this.layer&&(i=w(this.layer.fieldsIndex,await P(y,l(this.layer,e)))),await this.prepareFetchPopupFeatures(i);const o=new Set,n=[],a=[];for(const s of t)F(i,s,o)?a.push(s):n.push(s);return a.length===0?n:this.whenGraphicAttributes(a,[...o]).catch(()=>a).then(s=>n.concat(s))}};return r=d([f("esri.views.3d.layers.support.PopupSceneLayerView")],r),r};export{m as c};
