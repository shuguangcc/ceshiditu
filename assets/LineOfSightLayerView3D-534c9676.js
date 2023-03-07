import{l as h,be as d,u as e,as as o,ay as V,a as _,aw as c,B as p,bk as u,_ as A,e as t,y as l,b as f}from"./index-74d49a87.js";import{n as v}from"./LayerView3D-3838457e.js";import{u as m}from"./LayerView-7b372130.js";const w="analysis-view-handles";let i=class extends v(m){constructor(s){super(s),this.type="line-of-sight-3d",this._analysisModule=null}initialize(){this.handles.add(h(()=>this.layer.analysis,s=>{this._destroyAnalysisView(),e(s)&&this._createAnalysisView(s)},d),w)}destroy(){this.handles.remove(w),this._destroyAnalysisView()}async whenAnalysisView(){if(e(this.analysisView))return this.analysisView;if(e(this._createAnalysisViewTask))return this._createAnalysisViewTask.promise;throw new o("layerview:no-analysisview-for-analysis","The analysis has not been set on the LineOfSightLayer of this layer view")}isUpdating(){return e(this._createAnalysisViewTask)||e(this.analysisView)&&this.analysisView.updating}_createAnalysisView(s){const n=V(async a=>(this.analysisView=await this._createAnalysisViewPromise(s,a),this._createAnalysisViewTask===n&&(this._createAnalysisViewTask=null),this.analysisView));this._createAnalysisViewTask=n}_destroyAnalysisView(){this.analysisView=_(this.analysisView),this._createAnalysisViewTask=c(this._createAnalysisViewTask)}async _createAnalysisViewPromise(s,n){let a=this._analysisModule;if(p(a)){const y=await this._loadAnalysisModule();this._analysisModule=y,a=y}const r=new a.default({analysis:s,view:this.view,parent:this});if(await r.when(),u(n))throw r.destroy(),new o("layerview:no-analysisview-for-analysis","The analysis has not been added to the LineOfSightLayer of this layer view",{analysis:s});return r}_loadAnalysisModule(){return A(()=>import("./LineOfSightAnalysisView3D-ec4468eb.js"),["./LineOfSightAnalysisView3D-ec4468eb.js","./index-74d49a87.js","./index-45742df3.css","./LineVisualElement-904de9f6.js","./LineOfSightAnalysisTarget-adb61d03.js","./persistable-f8f00ae1.js","./multiOriginJSONSupportUtils-c978f4c3.js","./resourceExtension-6d3251a6.js","./elevationInfoUtils-3c9457ff.js","./analysisViewUtils-e5cbe5fd.js","./ImageMaterial-2cbfab0b.js","./PointVisualElement-da80c55c.js","./VisualElementResources-12bd7834.js"],import.meta.url)}};t([l()],i.prototype,"type",void 0),t([l()],i.prototype,"layer",void 0),t([l()],i.prototype,"analysisView",void 0),t([l()],i.prototype,"_createAnalysisViewTask",void 0),i=t([f("esri.views.3d.layers.LineOfSightLayerView3D")],i);const g=i;export{g as default};