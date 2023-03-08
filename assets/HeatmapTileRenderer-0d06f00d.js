import{e as m,n as p}from"./cast-7928d7aa.js";import"./Error-653283ae.js";import"./ensureType-cf29afa9.js";import"./typedArrayUtil-a8b5b3e9.js";import"./string-cdf077e6.js";import{l as a,u as l}from"./heatmapUtils-84e8c43b.js";import{n as h}from"./BitmapTileContainer-6fc690f1.js";import{o as d}from"./BaseTileRenderer-5775f08c.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-6684e352.js";import"./mathUtils-2519596a.js";import"./vec3-a020a6f6.js";import"./vec3f64-2f9cef06.js";import"./common-c186b691.js";import"./vec4-790471c0.js";import"./screenUtils-410d12c0.js";import"./vec4f64-e407da96.js";import"./aaBoundingRect-4a760199.js";import"./Extent-69509002.js";import"./Ellipsoid-89682c5e.js";import"./mat3f32-d3d088e8.js";import"./Bitmap-c332c5e6.js";import"./mat3-3fc68e72.js";import"./vec2f32-461e65a9.js";import"./EffectView-d3bf37ed.js";import"./Evented-515b9d9c.js";import"./TileKey-0750ad58.js";import"./vec2f64-30dc1443.js";import"./context-util-1e3c8cfc.js";import"./enums-64ab819c.js";import"./Texture-e79b14e7.js";import"./VertexElementDescriptor-2925c6af.js";import"./parser-2b40deea.js";import"./colorUtils-639f4d25.js";import"./mat4f32-77b3d8ac.js";import"./mat4-44a0988f.js";import"./WGLContainer-14075e1a.js";import"./WGLBrushVTLSymbol-dcfd88b4.js";import"./definitions-2d0dd0cd.js";import"./enums-4ca4641f.js";import"./number-954e4ab6.js";import"./FramebufferObject-50e1b68f.js";import"./StyleDefinition-7d58136b.js";import"./enums-4b2a86a0.js";import"./config-1337d16e.js";import"./GeometryUtils-c093d234.js";import"./pixelUtils-c27b13a1.js";import"./Utils-b2b4cf0c.js";import"./ShaderCompiler-77d0dcb6.js";import"./ProgramTemplate-afbd57f8.js";import"./MaterialKey-406a59ab.js";import"./alignmentUtils-ae955d28.js";import"./utils-26560131.js";import"./Color-a42a8267.js";import"./heatmapTextureUtils-d1d96768.js";import"./reactiveUtils-f41a4e00.js";import"./earcut-58237617.js";import"./vec2-2cef68de.js";import"./featureConversionUtils-01cdde8a.js";import"./jsonUtils-03c4af61.js";import"./Polyline-bf268e7b.js";import"./OptimizedFeature-3de538c1.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./TileContainer-07bccb79.js";import"./HandleOwner-e1406413.js";class c{constructor(){this.gradient=null,this.height=512,this.width=512}render(i){a(i,512,this.intensities,this.gradient,this.minDensity,this.maxDensity)}}let s=class extends d{constructor(t){super(t),this._intensityInfo={minDensity:0,maxDensity:0},this.type="heatmap",this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new h(t.tileInfoView)}createTile(t){const i=this._container.createTile(t);return this.tileInfoView.getTileCoords(i.bitmap,t),i.bitmap.resolution=this.tileInfoView.getTileResolution(t),i}onConfigUpdate(){const t=this.layer.renderer;if(t.type==="heatmap"){const{minDensity:i,maxDensity:e,colorStops:n}=t;this._intensityInfo.minDensity=i,this._intensityInfo.maxDensity=e,this._gradient=l(n),this.tiles.forEach(o=>{const r=o.bitmap.source;r&&(r.minDensity=i,r.maxDensity=e,r.gradient=this._gradient,o.bitmap.invalidateTexture())})}}hitTest(){return Promise.resolve([])}install(t){t.addChild(this._container)}uninstall(t){this._container.removeAllChildren(),t.removeChild(this._container)}disposeTile(t){this._container.removeChild(t),t.destroy()}supportsRenderer(t){return t&&t.type==="heatmap"}onTileData(t){const i=this.tiles.get(t.tileKey);if(!i)return;const e=t.intensityInfo,{minDensity:n,maxDensity:o}=this._intensityInfo,r=i.bitmap.source||new c;r.intensities=e&&e.matrix||null,r.minDensity=n,r.maxDensity=o,r.gradient=this._gradient,i.bitmap.source=r,this._container.addChild(i),this._container.requestRender(),this.requestUpdate()}onTileError(t){console.error(t)}lockGPUUploads(){}unlockGPUUploads(){}fetchResource(t,i){return console.error(t),Promise.reject()}};s=m([p("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],s);const Ct=s;export{Ct as default};
