import{l,h,du as g,bd as f,jD as w,p4 as u,p5 as n,e as d,b}from"./index-74d49a87.js";import{f as S}from"./LayerView2D-eda09360.js";import{i as V}from"./GraphicContainer-acd65922.js";import{a as _}from"./GraphicsView2D-1264803b.js";import{u as T}from"./LayerView-7b372130.js";import"./Container-2d36bc3e.js";import"./definitions-19bfb61c.js";import"./enums-b1d611e3.js";import"./BaseGraphicContainer-55978f65.js";import"./FeatureContainer-83da4bfd.js";import"./AttributeStoreView-f7f49a44.js";import"./visualVariablesUtils-2780c14d.js";import"./color-803f68ad.js";import"./enums-4b2a86a0.js";import"./number-b10bd8f5.js";import"./visualVariablesUtils-6ff5fadd.js";import"./TileContainer-931ccd0f.js";import"./WGLContainer-576ad576.js";import"./WGLBrushVTLSymbol-b759c30b.js";import"./StyleDefinition-7d58136b.js";import"./GeometryUtils-dd03fc25.js";import"./ShaderCompiler-77d0dcb6.js";import"./ProgramTemplate-e0452ecc.js";import"./MaterialKey-d0fce869.js";import"./alignmentUtils-ae955d28.js";import"./utils-f5f1a968.js";import"./heatmapTextureUtils-0aa3a2bc.js";import"./cimAnalyzer-02b73f26.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./normalizeUtilsSync-e634818e.js";import"./projectionSupport-23b402d8.js";import"./json-48e3ea08.js";import"./Matcher-c4e44d26.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-24df9e47.js";import"./ExpandedCIM-0010872c.js";import"./schemaUtils-5a41d104.js";import"./util-2bf6e249.js";import"./ComputedAttributeStorage-167c4551.js";import"./arcadeTimeUtils-999b74fd.js";import"./executionError-fb3f283a.js";import"./centroid-d1553553.js";import"./GraphicsView-bef23e3b.js";let y=class extends S(T){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,r){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().map(t=>{const i=this._popupTemplates.get(t),s=t.hitTest(e);for(const p of s)p.layer=o,p.sourceLayer=o,p.popupTemplate=i;return s}).flat().map(t=>({type:"graphic",graphic:t,layer:o,mapPoint:e}))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e)}attach(){this.addAttachHandles([l(()=>{var e;return(e=this.layer)==null?void 0:e.featureCollections},e=>{this._clear();for(const{popupInfo:r,featureSet:o,layerDefinition:t}of e){const i=g.fromJSON(o),s=new f(i.features),p=t.drawingInfo,c=r?w.fromJSON(r):null,a=u(p.renderer),m=new _({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:s,renderer:a,container:new V(this.view.featuresTilingScheme)});this._graphicsViewMap[i.geometryType]=m,this._popupTemplates.set(m,c),i.geometryType!=="polygon"||this.layer.polygonSymbol?i.geometryType!=="polyline"||this.layer.lineSymbol?i.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(m),this.container.addChild(m.container)}},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.polygonSymbol},e=>{this._graphicsViewMap.polygon.renderer=new n({symbol:e})},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.lineSymbol},e=>{this._graphicsViewMap.polyline.renderer=new n({symbol:e})},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.pointSymbol},e=>{this._graphicsViewMap.point.renderer=new n({symbol:e})},h)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=d([b("esri.views.2d.layers.GeoRSSLayerView2D")],y);const fe=y;export{fe as default};