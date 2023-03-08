import{e as t,y as i,l as f,n as d,s as Q,K as W,v as X,D as Y,f as Z}from"./cast-7928d7aa.js";import{y as j,p as g,b as ee,l as te,C as F,_ as H}from"./UniqueValueRenderer-103ec66d.js";import{y as n}from"./string-cdf077e6.js";import{T as ie,u as se}from"./ensureType-cf29afa9.js";import{r as T}from"./Extent-69509002.js";import{S as $,w as re}from"./fieldUtils-31bfecd2.js";import{DictionaryLoader as q}from"./DictionaryLoader-2cf5144e.js";import{l as y}from"./Color-a42a8267.js";import{r as D}from"./enumeration-3c281341.js";import{s as M}from"./Error-653283ae.js";import{r as oe}from"./typedArrayUtil-a8b5b3e9.js";import{m as A,S as L,y as k}from"./symbols-fa594797.js";import{t as ne}from"./deprecate-b9088bd3.js";import{o as z}from"./screenUtils-410d12c0.js";import{i as E}from"./Clonable-ba795b08.js";import{c as le,i as ae,a as pe}from"./heatmapUtils-84e8c43b.js";var I;let w=I=class extends f{constructor(e){super(e),this.color=null,this.ratio=null}clone(){return new I({color:this.color,ratio:this.ratio})}};t([i({type:y,json:{type:[ie],default:null,write:!0}})],w.prototype,"color",void 0),t([i({type:Number,json:{write:!0}})],w.prototype,"ratio",void 0),w=I=t([d("esri.renderers.support.HeatmapColorStop")],w);const v=w;var V;let u=V=class extends j(g){constructor(e){super(e),this.config=null,this.fieldMap=null,this.scaleExpression=null,this.scaleExpressionTitle=null,this.url=null,this.type="dictionary"}get _loader(){return new q(this.url,this.config,this.fieldMap)}writeData(e,s){e&&(s.scalingExpressionInfo={expression:e,returnType:"number"})}writeVisualVariables(e,s,r,a){a!=null&&a.origin||super.writeVisualVariables(e,s,r,a)}clone(){return new V({config:n(this.config),scaleExpression:this.scaleExpression,scaleExpressionTitle:this.scaleExpressionTitle,fieldMap:n(this.fieldMap),url:n(this.url),visualVariables:n(this.visualVariables)})}async getSymbolAsync(e,s){return this._loader.getSymbolAsync(e,s)}async collectRequiredFields(e,s){await this.collectVVRequiredFields(e,s),this.scaleExpression&&await $(e,s,this.scaleExpression);for(const r in this.fieldMap){const a=this.fieldMap[r];s.has(a)&&e.add(a)}}get arcadeRequired(){return!0}getSymbol(){return null}getSymbols(){return[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce((e,s)=>e+s.getAttributeHash(),"")}getMeshHash(){return`${this.url}-${JSON.stringify(this.fieldMap)}`}getSymbolFields(){return this._loader.getSymbolFields()}};t([i({type:q})],u.prototype,"_loader",null),t([i({type:Object,json:{read:{source:"configuration"},write:{target:"configuration"}}})],u.prototype,"config",void 0),t([i({type:Object,json:{write:!0}})],u.prototype,"fieldMap",void 0),t([i({type:String,json:{read:{source:"scalingExpressionInfo.expression"},write:!0}})],u.prototype,"scaleExpression",void 0),t([T("scaleExpression")],u.prototype,"writeData",null),t([i({type:String,json:{read:{source:"scalingExpressionInfo.title"},write:{target:"scalingExpressionInfo.title",overridePolicy(e){return{enabled:!!e&&!!this.scaleExpression}}}}})],u.prototype,"scaleExpressionTitle",void 0),t([i({type:String,json:{write:!0}})],u.prototype,"url",void 0),t([T("visualVariables")],u.prototype,"writeVisualVariables",null),u=V=t([d("esri.renderers.DictionaryRenderer")],u);const ue=u;var P;let h=P=class extends f{constructor(e){super(e),this.color=null,this.field=null,this.label=null,this.valueExpression=null,this.valueExpressionTitle=null}castField(e){return e==null?e:typeof e=="function"?(M.getLogger(this.declaredClass).error(".field: field must be a string value"),null):se(e)}getAttributeHash(){return`${this.field}-${this.valueExpression}`}clone(){return new P({color:this.color&&this.color.clone(),field:this.field,label:this.label,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};t([i({type:y,json:{type:[Number],write:!0}})],h.prototype,"color",void 0),t([i({type:String,json:{write:!0}})],h.prototype,"field",void 0),t([Q("field")],h.prototype,"castField",null),t([i({type:String,json:{write:!0}})],h.prototype,"label",void 0),t([i({type:String,json:{write:!0}})],h.prototype,"valueExpression",void 0),t([i({type:String,json:{write:!0}})],h.prototype,"valueExpressionTitle",void 0),h=P=t([d("esri.renderers.support.AttributeColorInfo")],h);const B=h;var O;let x=O=class extends f{constructor(){super(...arguments),this.unit=null}clone(){return new O({unit:this.unit})}};t([i({type:String,json:{write:!0}})],x.prototype,"unit",void 0),x=O=t([d("esri.renderers.support.DotDensityLegendOptions")],x);const ye=x;var R;let l=R=class extends j(g){constructor(e){super(e),this.attributes=null,this.backgroundColor=new y([0,0,0,0]),this.dotBlendingEnabled=!0,this.dotShape="square",this.dotSize=1,this.legendOptions=null,this.outline=new A,this.dotValue=null,this.referenceScale=null,this.seed=1,this.type="dot-density"}calculateDotValue(e){if(this.referenceScale==null)return this.dotValue;const s=e/this.referenceScale*this.dotValue;return s<1?1:s}getSymbol(){return new L({outline:this.outline})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}getAttributeHash(){var e;return((e=this.attributes)==null?void 0:e.reduce((s,r)=>s+r.getAttributeHash(),""))??""}getMeshHash(){return JSON.stringify(this.outline)}clone(){return new R({attributes:n(this.attributes),backgroundColor:n(this.backgroundColor),dotBlendingEnabled:n(this.dotBlendingEnabled),dotShape:n(this.dotShape),dotSize:n(this.dotSize),dotValue:n(this.dotValue),legendOptions:n(this.legendOptions),outline:n(this.outline),referenceScale:n(this.referenceScale),visualVariables:n(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}getControllerHash(){var s;return`${(s=this.attributes)==null?void 0:s.map(r=>r.field||r.valueExpression||"")}-${this.outline&&JSON.stringify(this.outline.toJSON())||""}`}async collectRequiredFields(e,s){await this.collectVVRequiredFields(e,s);for(const r of this.attributes??[])r.valueExpression&&await $(e,s,r.valueExpression),r.field&&e.add(r.field)}};t([i({type:[B],json:{write:!0}})],l.prototype,"attributes",void 0),t([i({type:y,json:{write:!0}})],l.prototype,"backgroundColor",void 0),t([i({type:Boolean,json:{write:!0}})],l.prototype,"dotBlendingEnabled",void 0),t([i({type:String,json:{write:!1}})],l.prototype,"dotShape",void 0),t([i({type:Number,json:{write:!0}})],l.prototype,"dotSize",void 0),t([i({type:ye,json:{write:!0}})],l.prototype,"legendOptions",void 0),t([i({type:A,json:{default:null,write:!0}})],l.prototype,"outline",void 0),t([i({type:Number,json:{write:!0}})],l.prototype,"dotValue",void 0),t([i({type:Number,json:{write:!0}})],l.prototype,"referenceScale",void 0),t([i({type:Number,json:{write:!0}})],l.prototype,"seed",void 0),t([D({dotDensity:"dot-density"})],l.prototype,"type",void 0),l=R=t([d("esri.renderers.DotDensityRenderer")],l);const de=l;let b=class extends E(f){constructor(){super(...arguments),this.minLabel=null,this.maxLabel=null,this.title=null}};t([i({type:String,json:{write:!0}})],b.prototype,"minLabel",void 0),t([i({type:String,json:{write:!0}})],b.prototype,"maxLabel",void 0),t([i({type:String,json:{write:!0}})],b.prototype,"title",void 0),b=t([d("esri.renderers.support.HeatmapLegendOptions")],b);var _;const J="esri.renderers.HeatmapRenderer",he=M.getLogger(J);function C(e){if(e!=null){const{maxDensity:s,minDensity:r,radius:a}=e;if(s!=null||r!=null||a!=null){const{blurRadius:fe,maxPixelIntensity:we,minPixelIntensity:ve,...K}=e;return K}}return e}let o=_=class extends g{constructor(e){super(e),this.authoringInfo=null,this.colorStops=[new v({ratio:0,color:new y("rgba(255, 140, 0, 0)")}),new v({ratio:.75,color:new y("rgba(255, 140, 0, 1)")}),new v({ratio:.9,color:new y("rgba(255, 0,   0, 1)")})],this.field=null,this.fieldOffset=0,this.legendOptions=null,this.maxDensity=.04,this.minDensity=0,this.radius=18,this.referenceScale=0,this.type="heatmap",this.valueExpression=null,this.valueExpressionTitle=null,this._warnedProps={blurRadius:!1,maxPixelIntensity:!1,minPixelIntensity:!1}}normalizeCtorArgs(e){return C(e)}get blurRadius(){return le(this.radius)}set blurRadius(e){const s=this.maxPixelIntensity,r=this.minPixelIntensity;this._set("radius",ae(e)),this._warnAboutDeprecatedGaussianBlurProp("blurRadius","radius"),this._set("maxDensity",s*this._pixelIntensityToDensity),this._set("minDensity",r*this._pixelIntensityToDensity)}get maxPixelIntensity(){return this.maxDensity/this._pixelIntensityToDensity}set maxPixelIntensity(e){this._set("maxDensity",e*this._pixelIntensityToDensity),this._warnAboutDeprecatedGaussianBlurProp("maxPixelIntensity","maxDensity")}get minPixelIntensity(){return this.minDensity/this._pixelIntensityToDensity}set minPixelIntensity(e){this._set("minDensity",e*this._pixelIntensityToDensity),this._warnAboutDeprecatedGaussianBlurProp("minPixelIntensity","minDensity")}get _pixelIntensityToDensity(){return 24/(pe**2*this.blurRadius**4)}_warnAboutDeprecatedGaussianBlurProp(e,s){this._warnedProps[e]||W(this).getDefaultOrigin()==="user"&&(this._warnedProps[e]=!0,X(()=>{ne(he,e,{replacement:`${String(s)} (suggested value: ${this._get(s)})`,version:"4.24"})}))}read(e,s){e=C(e),super.read(e,s)}getSymbol(){return new k}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}async collectRequiredFields(e,s){const r=this.field,a=this.valueExpression;r&&typeof r=="string"&&await re(e,s,r),a&&typeof a=="string"&&await $(e,s,a)}getAttributeHash(){return null}getMeshHash(){return`${JSON.stringify(this.colorStops)}.${this.blurRadius}.${this.field}`}clone(){return new _({authoringInfo:this.authoringInfo&&this.authoringInfo.clone(),colorStops:n(this.colorStops),field:this.field,legendOptions:n(this.legendOptions),maxDensity:this.maxDensity,minDensity:this.minDensity,radius:this.radius,referenceScale:this.referenceScale,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};t([i({type:ee,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],o.prototype,"authoringInfo",void 0),t([i({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],o.prototype,"blurRadius",null),t([i({type:[v],json:{write:!0}})],o.prototype,"colorStops",void 0),t([i({type:String,json:{write:!0}})],o.prototype,"field",void 0),t([i({type:Number,json:{write:{overridePolicy:(e,s,r)=>({enabled:r==null})},origins:{"web-scene":{write:!1}}}})],o.prototype,"fieldOffset",void 0),t([i({type:b,json:{write:!0}})],o.prototype,"legendOptions",void 0),t([i({type:Number,json:{write:!0}})],o.prototype,"maxDensity",void 0),t([i({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],o.prototype,"maxPixelIntensity",null),t([i({type:Number,json:{write:!0}})],o.prototype,"minDensity",void 0),t([i({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],o.prototype,"minPixelIntensity",null),t([i({type:Number,cast:z,json:{write:!0}})],o.prototype,"radius",void 0),t([i({type:Number,range:{min:0},json:{default:0,write:!0}})],o.prototype,"referenceScale",void 0),t([D({heatmap:"heatmap"})],o.prototype,"type",void 0),t([i({type:String,json:{write:!0,origins:{"web-document":{write:!1},"portal-item":{write:!1}}}})],o.prototype,"valueExpression",void 0),t([i({type:String})],o.prototype,"valueExpressionTitle",void 0),t([i({readOnly:!0})],o.prototype,"_pixelIntensityToDensity",null),o=_=t([d(J)],o);const G=o;let m=class extends E(f){constructor(){super(...arguments),this.color=new y([0,0,0,0]),this.label=null,this.threshold=0}};t([i({type:y,json:{write:!0}})],m.prototype,"color",void 0),t([i({type:String,json:{write:!0}})],m.prototype,"label",void 0),t([i({type:Number,range:{min:0,max:1},json:{write:!0}})],m.prototype,"threshold",void 0),m=t([d("esri.renderers.support.OthersCategory")],m);let S=class extends E(f){constructor(){super(...arguments),this.title=null}};t([i({type:String,json:{write:!0}})],S.prototype,"title",void 0),S=t([d("esri.renderers.support.PieChartLegendOptions")],S);let p=class extends j(E(g)){constructor(e){super(e),this.attributes=null,this.backgroundFillSymbol=null,this.defaultColor=new y([0,0,0,0]),this.defaultLabel=null,this.holePercentage=0,this.othersCategory=new m,this.legendOptions=null,this.outline=null,this.size=12,this.type="pie-chart"}getSymbol(){var e;return new k({size:this.size?this.size/2+(((e=this.outline)==null?void 0:e.width)||0):0})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol(),this.backgroundFillSymbol].filter(oe)}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce((e,s)=>e+s.getAttributeHash(),"")}getMeshHash(){return this.getSymbols().reduce((e,s)=>e+JSON.stringify(s),"")}async collectRequiredFields(e,s){await this.collectVVRequiredFields(e,s);for(const r of this.attributes)r.valueExpression&&await $(e,s,r.valueExpression),r.field&&e.add(r.field)}};t([i({type:[B],json:{write:!0}})],p.prototype,"attributes",void 0),t([i({type:L,json:{default:null,write:!0}})],p.prototype,"backgroundFillSymbol",void 0),t([i({type:y,json:{write:!0}})],p.prototype,"defaultColor",void 0),t([i({type:String,json:{write:!0}})],p.prototype,"defaultLabel",void 0),t([i({type:Number,range:{min:0,max:1},json:{write:!0}})],p.prototype,"holePercentage",void 0),t([i({type:m,json:{write:!0}})],p.prototype,"othersCategory",void 0),t([i({type:S,json:{write:!0}})],p.prototype,"legendOptions",void 0),t([i({type:A,json:{default:null,write:!0}})],p.prototype,"outline",void 0),t([i({type:Number,cast:z,json:{write:!0}})],p.prototype,"size",void 0),t([D({pieChart:"pie-chart"})],p.prototype,"type",void 0),p=t([d("esri.renderers.PieChartRenderer")],p);const ce=p;var N;let c=N=class extends j(g){constructor(e){super(e),this.description=null,this.label=null,this.symbol=null,this.type="simple"}async collectRequiredFields(e,s){await Promise.all([this.collectSymbolFields(e,s),this.collectVVRequiredFields(e,s)])}async collectSymbolFields(e,s){await Promise.all(this.getSymbols().map(r=>r.collectRequiredFields(e,s)))}getSymbol(e,s){return this.symbol}async getSymbolAsync(e,s){return this.symbol}getSymbols(){return this.symbol?[this.symbol]:[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce((e,s)=>e+s.getAttributeHash(),"")}getMeshHash(){return this.getSymbols().reduce((e,s)=>e+JSON.stringify(s),"")}get arcadeRequired(){return this.arcadeRequiredForVisualVariables}clone(){return new N({description:this.description,label:this.label,symbol:this.symbol&&this.symbol.clone(),visualVariables:n(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}};t([i({type:String,json:{write:!0}})],c.prototype,"description",void 0),t([i({type:String,json:{write:!0}})],c.prototype,"label",void 0),t([i(te)],c.prototype,"symbol",void 0),t([D({simple:"simple"})],c.prototype,"type",void 0),c=N=t([d("esri.renderers.SimpleRenderer")],c);const U=c,me={key:"type",base:g,typeMap:{heatmap:G,simple:U,"unique-value":F,"class-breaks":H,"dot-density":de,dictionary:ue,"pie-chart":ce},errorContext:"renderer"},qe={key:"type",base:g,typeMap:{simple:U,"unique-value":F,"class-breaks":H,heatmap:G},errorContext:"renderer"};function Me(e,s){return be(e,null,s)}const ge=Y({types:me});function be(e,s,r){return e?e&&(e.styleName||e.styleUrl)&&e.type!=="uniqueValue"?(r&&r.messages&&r.messages.push(new Z("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+e.type+"'",{definition:e,context:r})),null):ge(e,s,r):null}export{v as a,me as b,qe as n,be as o,U as p,Me as t};
