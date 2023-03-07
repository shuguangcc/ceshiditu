import{N as d,a0 as u,G as y,H as m,w as h,r as c,cm as b}from"./index-ca9d4bb6.js";import g from"./FeatureLayerView2D-5809236f.js";import"./Container-ec9d6483.js";import"./definitions-3ddd14a8.js";import"./enums-64ab819c.js";import"./Texture-7d326100.js";import"./LayerView-388ff75e.js";import"./schemaUtils-13dc6ddb.js";import"./color-57f9a08f.js";import"./enums-55085e26.js";import"./VertexElementDescriptor-2925c6af.js";import"./utils-1a22bf67.js";import"./MaterialKey-2d131707.js";import"./visualVariablesUtils-d6149b49.js";import"./ExpandedCIM-a0f9d1be.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-5a84a117.js";import"./floatRGBA-66d42701.js";import"./util-4a846b97.js";import"./floorFilterUtils-080a7cd2.js";import"./popupUtils-3f0fc55d.js";import"./RefreshableLayerView-e37de74f.js";function f(i,e){return!i.visible||i.minScale!==0&&e>i.minScale||i.maxScale!==0&&e<i.maxScale}let n=class extends g{initialize(){this.addHandles([y(()=>this.view.scale,()=>this._update(),m)],"constructor")}isUpdating(){var o;const i=this.layer.sublayers.some(p=>p.renderer!=null),e=this._commandsQueue.updating,s=this._updatingRequiredFieldsPromise!=null,t=!this._proxy||!this._proxy.isReady,r=this._pipelineIsUpdating,a=this.tileRenderer==null||((o=this.tileRenderer)==null?void 0:o.updating),l=i&&(e||s||t||r||a);return h("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${l}
  -> hasRenderer ${i}
  -> hasPendingCommand ${e}
  -> updatingRequiredFields ${s}
  -> updatingProxy ${t}
  -> updatingPipeline ${r}
  -> updatingTileRenderer ${a}
`),l}_injectOverrides(i){let e=super._injectOverrides(i);const s=this.view.scale,t=this.layer.sublayers.filter(a=>f(a,s)).map(a=>a.subtypeCode);if(!t.length)return e;e=c(e)?e:new b().toJSON();const r=`NOT ${this.layer.subtypeField} IN (${t.join(",")})`;return e.where=e.where?`(${e.where}) AND (${r})`:r,e}_setLayersForFeature(i){const e=this.layer.fieldsIndex.get(this.layer.subtypeField),s=i.attributes[e.name],t=this.layer.sublayers.find(r=>r.subtypeCode===s);i.layer=i.sourceLayer=t}_createSchemaConfig(){const i={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map(r=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:r.labelingInfo,labelsVisible:r.labelsVisible,renderer:r.renderer,subtypeCode:r.subtypeCode,orderBy:null}))},e=this.layer.sublayers.map(r=>r.subtypeCode).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${e})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...i,definitionExpression:t}}};n=d([u("esri.views.2d.layers.SubtypeGroupLayerView2D")],n);const z=n;export{z as default};
