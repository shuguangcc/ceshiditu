import{an as V,q as p,r as m,aY as S,u as h,al as z,bG as _,eh as y,D as R}from"./index-ca9d4bb6.js";import{G as I}from"./AttributeStoreView-fbedcce7.js";import{i as x}from"./TileContainer-4f12dc75.js";import{z as f,$ as b}from"./color-57f9a08f.js";import{e as g,c as q}from"./utils-1a22bf67.js";function d(v,e){const t=e.length;if(v<e[0].value||t===1)return e[0].size;for(let s=1;s<t;s++)if(v<e[s].value){const i=(v-e[s-1].value)/(e[s].value-e[s-1].value);return e[s-1].size+i*(e[s].size-e[s-1].size)}return e[t-1].size}class w{constructor(){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this.outsideLabelsVisible=!1,this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1},this._technique=g}getSizeVVFieldStops(e){const t=this._vvSizeFieldStops;if(t)switch(t.type){case"static":return t;case"level-dependent":return V(t.levels[e],()=>{let s=1/0,i=0;for(const a in t.levels){const l=parseFloat(a),u=Math.abs(e-l);u<s&&(s=u,i=l)}if(s===1/0)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])};const r=2**((e-i)/2),o=p(t.levels[i]),n=new Float32Array(o.values);return n[2]*=r,n[3]*=r,{sizes:p(o.sizes),values:n}});default:return}}get vvMaterialParameters(){return this._vvMaterialParameters}update(e){m(this._vvInfo)&&this._updateVisualVariables(this._vvInfo.vvRanges,e)}setInfo(e,t,s){this._updateEffects(s),this._vvInfo=t,this._technique=q(e),this.rendererSchema=this._technique.createOrUpdateRendererSchema(this.rendererSchema,e)}getVariation(){return{...this._technique.getVariation(this.rendererSchema),outsideLabelsVisible:this.outsideLabelsVisible,supportsTextureFloat:S("2d").supportsTextureFloat}}getVariationHash(){return this._technique.getVariationHash(this.rendererSchema)<<1|(this.outsideLabelsVisible?1:0)}_updateEffects(e){m(e)?this.outsideLabelsVisible=e.excludedLabelsVisible:this.outsideLabelsVisible=!1}_updateVisualVariables(e,t){const s=this._vvMaterialParameters;if(s.vvOpacityEnabled=!1,s.vvSizeEnabled=!1,s.vvColorEnabled=!1,s.vvRotationEnabled=!1,!e)return;const i=e.size;if(i){if(s.vvSizeEnabled=!0,i.minMaxValue){const a=i.minMaxValue;let l,u;if(f(a.minSize)&&f(a.maxSize))if(b(a.minSize)&&b(a.maxSize))l=h(a.minSize),u=h(a.maxSize);else{const c=t.scale;l=h(d(c,a.minSize.stops)),u=h(d(c,a.maxSize.stops))}this.vvSizeMinMaxValue.set([a.minDataValue,a.maxDataValue,l,u])}if(i.scaleStops&&(this.vvSizeScaleStopsValue=h(d(t.scale,i.scaleStops.stops))),i.unitValue){const a=z(t.spatialReference)/_[i.unitValue.unit];this.vvSizeUnitValueToPixelsRatio=a/t.resolution}i.fieldStops&&(this._vvSizeFieldStops=i.fieldStops)}const r=e.color;r&&(s.vvColorEnabled=!0,this.vvColorValues.set(r.values),this.vvColors.set(r.colors));const o=e.opacity;o&&(s.vvOpacityEnabled=!0,this.vvOpacityValues.set(o.values),this.vvOpacities.set(o.opacities));const n=e.rotation;n&&(s.vvRotationEnabled=!0,s.vvRotationType=n.type)}}class O extends x{constructor(e){super(e),this._rendererInfo=new w,this._materialItemsRequestQueue=new y,this.attributeView=new I(()=>this.onAttributeStoreUpdate())}destroy(){this.children.forEach(e=>e.destroy()),this.removeAllChildren(),this.attributeView.destroy(),this._materialItemsRequestQueue.clear()}setRendererInfo(e,t,s){this._rendererInfo.setInfo(e,t,s),this.requestRender()}async getMaterialItems(e,t){if(!e||e.length===0)return[];const s=R();return this._materialItemsRequestQueue.push({items:e,abortOptions:t,resolver:s}),this.requestRender(),s.promise}doRender(e){if(e.context.capabilities.enable("textureFloat"),e.context.capabilities.enable("vao"),this._materialItemsRequestQueue.length>0){let t=this._materialItemsRequestQueue.pop();for(;t;)this._processMaterialItemRequest(e,t),t=this._materialItemsRequestQueue.pop()}super.doRender(e)}renderChildren(e){for(const t of this.children)t.commit(e);this._rendererInfo.update(e.state),super.renderChildren(e)}updateTransforms(e){if(this.children.some(t=>t.hasData))for(const t of this.children)t.setTransform(e)}createRenderParams(e){const t=super.createRenderParams(e);return t.rendererInfo=this._rendererInfo,t.attributeView=this.attributeView,t}onAttributeStoreUpdate(){}_processMaterialItemRequest(e,{items:t,abortOptions:s,resolver:i}){const{painter:r,pixelRatio:o}=e,n=t.map(a=>r.textureManager.rasterizeItem(a.symbol,o,a.glyphIds,s));Promise.all(n).then(a=>{if(!this.stage)return void i.reject();const l=a.map((u,c)=>({id:t[c].id,mosaicItem:u}));i.resolve(l)},i.reject)}}export{O as o};
