import{h as i}from"./string-cdf077e6.js";import{I as n}from"./enums-4ca4641f.js";import{o as l,h as o,x as a}from"./WGLContainer-14075e1a.js";const c=(s,e)=>s.key.level-e.key.level!=0?s.key.level-e.key.level:s.key.row-e.key.row!=0?s.key.row-e.key.row:s.key.col-e.key.col;class p extends l{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(c),this.setStencilReference(e),super.renderChildren(e)}createRenderParams(e){const{state:r}=e,t=super.createRenderParams(e);return t.requiredLevel=this._tileInfoView.getClosestInfoForScale(r.scale).level,t.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(r.scale),t}prepareRenderPasses(e){const r=super.prepareRenderPasses(e);return r.push(e.registerRenderPass({name:"stencil",brushes:[o],drawPhase:n.DEBUG|n.MAP|n.HIGHLIGHT,target:()=>this.getStencilTarget()})),i("esri-tiles-debug")&&r.push(e.registerRenderPass({name:"tileInfo",brushes:[a],drawPhase:n.DEBUG,target:()=>this.children})),r}getStencilTarget(){return this.children}setStencilReference(e){let r=1;for(const t of this.children)t.stencilRef=r++}}export{p as i};