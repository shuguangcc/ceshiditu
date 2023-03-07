import{e as n,ak as p}from"./index-ca9d4bb6.js";import{R as h}from"./Bitmap-9413521d.js";import{r as l}from"./TiledDisplayObject-10689b23.js";import{w as f}from"./WGLContainer-69a07c3d.js";import{T as o}from"./color-57f9a08f.js";import{i as b}from"./TileContainer-4f12dc75.js";class u extends l{constructor(e,t,s,i,r,a,d=null){super(e,t,s,i,r,a),this.bitmap=new h(d,{immutable:!1,requestRenderOnSourceChangedEnabled:!1}),this.bitmap.coordScale=[r,a],this.bitmap.once("isReady",()=>this.ready())}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){super.beforeRender(e),this.bitmap.beforeRender(e)}afterRender(e){super.afterRender(e),this.bitmap.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return{dvs:n(),tileMat3:n()}}setTransform(e){super.setTransform(e),this.bitmap.transforms.dvs=this.transforms.dvs}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}}class v extends b{get requiresDedicatedFBO(){return this.children.some(e=>e.bitmap.blendFunction==="additive")}createTile(e){const t=this._tileInfoView.getTileBounds(p(),e),s=this._tileInfoView.getTileResolution(e.level),[i,r]=this._tileInfoView.tileInfo.size;return new u(e,s,t[0],t[3],i,r)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[f.bitmap],target:()=>this.children.map(s=>s.bitmap),drawPhase:o.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===o.MAP&&super.doRender(e)}}export{v as n};
