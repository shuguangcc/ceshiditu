import{N as u,O as m,a0 as E,aN as I,w as D,a3 as W,cD as O,cW as q,cX as P,cY as $,bE as H,t as S,D as w,e as V}from"./index-ca9d4bb6.js";import{J as G}from"./definitions-3ddd14a8.js";import{M as A,P as F,G as L,D as N,L as U}from"./enums-64ab819c.js";import{E as j}from"./Texture-7d326100.js";const R=-1;let d=class extends I{constructor(i){super(i),this._from=null,this._to=null,this._final=null,this._current=[],this._time=0,this.duration=D("mapview-transitions-duration"),this.effects=[]}set effect(i){if(this._get("effect")!==(i=i||"")){this._set("effect",i);try{this._transitionTo(x(i))}catch(t){this._transitionTo([]),W.getLogger(this.declaredClass).warn("Invalid Effect",{effect:i,error:t})}}}get hasEffects(){return this.transitioning||!!this.effects.length}set scale(i){this._updateForScale(i)}get transitioning(){return this._to!==null}canTransitionTo(i){try{return this.scale>0&&M(this._current,x(i),this.scale)}catch{return!1}}transitionStep(i,t){this._applyTimeTransition(i),this._updateForScale(t)}endTransitions(){this._applyTimeTransition(this.duration)}_transitionTo(i){this.scale>0&&M(this._current,i,this.scale)?(this._final=i,this._to=O(i),B(this._current,this._to,this.scale),this._from=O(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=i),this._set("effects",this._current[0]?O(this._current[0].effects):[])}_applyTimeTransition(i){if(!(this._to&&this._from&&this._current&&this._final))return;this._time+=i;const t=Math.min(1,this._time/this.duration);for(let e=0;e<this._current.length;e++){const s=this._current[e],n=this._from[e],o=this._to[e];s.scale=X(n.scale,o.scale,t);for(let r=0;r<s.effects.length;r++){const c=s.effects[r],h=n.effects[r],p=o.effects[r];c.interpolate(h,p,t)}}t===1&&(this._current=this._final,this._set("effects",this._current[0]?O(this._current[0].effects):[]),this._from=this._to=this._final=null)}_updateForScale(i){if(this._set("scale",i),this._current.length===0)return;const t=this._current,e=this._current.length-1;let s,n,o=1;if(t.length===1||i>=t[0].scale)n=s=t[0].effects;else if(i<=t[e].scale)n=s=t[e].effects;else for(let r=0;r<e;r++){const c=t[r],h=t[r+1];if(c.scale>=i&&h.scale<=i){o=(i-c.scale)/(h.scale-c.scale),s=c.effects,n=h.effects;break}}for(let r=0;r<this.effects.length;r++)this.effects[r].interpolate(s[r],n[r],o)}};function x(i){const t=q(i)||[];return Y(t)?[{scale:R,effects:t}]:t}function M(i,t,e){var s,n,o,r;return!((s=i[0])!=null&&s.effects)||!((n=t[0])!=null&&n.effects)?!0:!((((o=i[0])==null?void 0:o.scale)===R||((r=t[0])==null?void 0:r.scale)===R)&&(i.length>1||t.length>1)&&e<=0)&&P(i[0].effects,t[0].effects)}function B(i,t,e){const s=i.length>t.length?i:t,n=i.length>t.length?t:i,o=n[n.length-1],r=(o==null?void 0:o.scale)??e,c=(o==null?void 0:o.effects)??[];for(let h=n.length;h<s.length;h++)n.push({scale:r,effects:[...c]});for(let h=0;h<s.length;h++)n[h].scale=n[h].scale===R?e:n[h].scale,s[h].scale=s[h].scale===R?e:s[h].scale,$(n[h].effects,s[h].effects)}function X(i,t,e){return i+(t-i)*e}function Y(i){const t=i[0];return!!t&&"type"in t}u([m()],d.prototype,"_to",void 0),u([m()],d.prototype,"duration",void 0),u([m({value:""})],d.prototype,"effect",null),u([m({readOnly:!0})],d.prototype,"effects",void 0),u([m({readOnly:!0})],d.prototype,"hasEffects",null),u([m({value:0})],d.prototype,"scale",null),u([m({readOnly:!0})],d.prototype,"transitioning",null),d=u([E("esri.layers.effects.EffectView")],d);const k=1/D("mapview-transitions-duration");let J=class extends H{constructor(){super(...arguments),this._fadeOutResolver=null,this._fadeInResolver=null,this._clips=null,this.computedVisible=!0,this.computedOpacity=1,this.fadeTransitionEnabled=!1,this.inFadeTransition=!1,this._isReady=!1,this._opacity=1,this.parent=null,this._stage=null,this._visible=!0}get clips(){return this._clips}set clips(t){this._clips=t,this.requestRender()}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(t){this._opacity!==t&&(this._opacity=Math.min(1,Math.max(t,0)),this.requestRender())}get stage(){return this._stage}set stage(t){var s;if(this._stage===t)return;const e=this._stage;this._stage=t,t?(s=this._stage)!=null&&s.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):e==null||e.trashDisplayObject(this)}get transforms(){return this._getTransforms()}_getTransforms(){return S(this._transforms)&&(this._transforms=this._createTransforms()),this._transforms}get visible(){return this._visible}set visible(t){this._visible!==t&&(this._visible=t,this.requestRender())}fadeIn(){return this._fadeInResolver||(this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.opacity=1,this.computedOpacity=0,this.fadeTransitionEnabled=!0,this._fadeInResolver=w(),this.requestRender()),this._fadeInResolver.promise}fadeOut(){return this._fadeOutResolver||(this.opacity=0,this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this.fadeTransitionEnabled=!0,this._fadeOutResolver=w(),this.requestRender()),this._fadeOutResolver.promise}endTransitions(){var t,e;(t=this._fadeInResolver)==null||t.call(this),this._fadeInResolver=null,(e=this._fadeOutResolver)==null||e.call(this),this._fadeOutResolver=null,this.computedOpacity=this.visible?this.opacity:0,this.requestRender()}beforeRender(t){this.updateTransitionProperties(t.deltaTime,t.state.scale)}afterRender(t){this._fadeInResolver&&this.computedOpacity===this.opacity?(this._fadeInResolver(),this._fadeInResolver=null):this._fadeOutResolver&&this.computedOpacity===0&&(this._fadeOutResolver(),this._fadeOutResolver=null)}remove(){var t;(t=this.parent)==null||t.removeChild(this)}setTransform(t){}processRender(t){this.stage&&this.computedVisible&&this.doRender(t)}requestRender(){this.stage&&this.stage.requestRender()}processDetach(){this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.onDetach(),this.emit("detach")}updateTransitionProperties(t,e){if(this.fadeTransitionEnabled){const s=this._fadeOutResolver||!this.visible?0:this.opacity,n=this.computedOpacity;if(n===s)this.computedVisible=this.visible;else{const o=t*k;this.computedOpacity=n>s?Math.max(s,n-o):Math.min(s,n+o),this.computedVisible=this.computedOpacity>0;const r=s===this.computedOpacity;this.inFadeTransition=!r,r||this.requestRender()}}else this.computedOpacity=this.opacity,this.computedVisible=this.visible}onAttach(){}onDetach(){}doRender(t){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}};const z=1,nt=[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],ht=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],v=256,_={outlineWidth:1.3,outerHaloWidth:.4,innerHaloWidth:.4,outlinePosition:0},T=W.getLogger("esri.views.2d.engine.webgl.painter.highlight.HighlightGradient");function K(i,t){t.fillColor[0]=i.color.r/255,t.fillColor[1]=i.color.g/255,t.fillColor[2]=i.color.b/255,t.fillColor[3]=i.color.a,i.haloColor?(t.outlineColor[0]=i.haloColor.r/255,t.outlineColor[1]=i.haloColor.g/255,t.outlineColor[2]=i.haloColor.b/255,t.outlineColor[3]=i.haloColor.a):(t.outlineColor[0]=t.fillColor[0],t.outlineColor[1]=t.fillColor[1],t.outlineColor[2]=t.fillColor[2],t.outlineColor[3]=t.fillColor[3]),t.fillColor[3]*=i.fillOpacity,t.outlineColor[3]*=i.haloOpacity,t.fillColor[0]*=t.fillColor[3],t.fillColor[1]*=t.fillColor[3],t.fillColor[2]*=t.fillColor[3],t.outlineColor[0]*=t.outlineColor[3],t.outlineColor[1]*=t.outlineColor[3],t.outlineColor[2]*=t.outlineColor[3],t.outlineWidth=_.outlineWidth,t.outerHaloWidth=_.outerHaloWidth,t.innerHaloWidth=_.innerHaloWidth,t.outlinePosition=_.outlinePosition}const Q=[0,0,0,0];class Z{constructor(){this._convertedHighlightOptions={fillColor:[.2*.75,.6*.75,.675,.75],outlineColor:[.2*.9,.54,.81,.9],outlinePosition:_.outlinePosition,outlineWidth:_.outlineWidth,innerHaloWidth:_.innerHaloWidth,outerHaloWidth:_.outerHaloWidth},this._shadeTexChanged=!0,this._texelData=new Uint8Array(4*v),this._minMaxDistance=[0,0]}setHighlightOptions(t){const e=this._convertedHighlightOptions;K(t,e);const s=e.outlinePosition-e.outlineWidth/2-e.outerHaloWidth,n=e.outlinePosition-e.outlineWidth/2,o=e.outlinePosition+e.outlineWidth/2,r=e.outlinePosition+e.outlineWidth/2+e.innerHaloWidth,c=Math.sqrt(Math.PI/2)*z,h=Math.abs(s)>c?Math.round(10*(Math.abs(s)-c))/10:0,p=Math.abs(r)>c?Math.round(10*(Math.abs(r)-c))/10:0;let g;h&&!p?T.error("The outer rim of the highlight is "+h+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards)."):!h&&p?T.error("The inner rim of the highlight is "+p+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards)."):h&&p&&T.error("The highlight is "+Math.max(h,p)+"px away from the edge of the feature; consider reducing some width values.");const l=[void 0,void 0,void 0,void 0];function b(a,C,f){l[0]=(1-f)*a[0]+f*C[0],l[1]=(1-f)*a[1]+f*C[1],l[2]=(1-f)*a[2]+f*C[2],l[3]=(1-f)*a[3]+f*C[3]}const{_texelData:y}=this;for(let a=0;a<v;++a)g=s+a/(v-1)*(r-s),g<s?(l[4*a+0]=0,l[4*a+1]=0,l[4*a+2]=0,l[4*a+3]=0):g<n?b(Q,e.outlineColor,(g-s)/(n-s)):g<o?[l[0],l[1],l[2],l[3]]=e.outlineColor:g<r?b(e.outlineColor,e.fillColor,(g-o)/(r-o)):[l[4*a+0],l[4*a+1],l[4*a+2],l[4*a+3]]=e.fillColor,y[4*a+0]=255*l[0],y[4*a+1]=255*l[1],y[4*a+2]=255*l[2],y[4*a+3]=255*l[3];this._minMaxDistance[0]=s,this._minMaxDistance[1]=r,this._shadeTexChanged=!0}applyHighlightOptions(t,e){this._shadeTex||(this._shadeTex=new j(t,{target:A.TEXTURE_2D,pixelFormat:F.RGBA,dataType:L.UNSIGNED_BYTE,wrapMode:N.CLAMP_TO_EDGE,width:v,height:1,samplingMode:U.LINEAR})),this._shadeTexChanged&&(this._shadeTex.updateData(0,0,0,v,1,this._texelData),this._shadeTexChanged=!1),t.bindTexture(this._shadeTex,G),e.setUniform2fv("u_minMaxDistance",this._minMaxDistance)}destroy(){var t;(t=this._shadeTex)==null||t.dispose(),this._shadeTex=null}}class ot extends J{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this.children=[],this._effectView=null,this._highlightOptions=null,this._highlightGradient=null}get blendMode(){return this._blendMode}set blendMode(t){this._blendMode=t,this.requestRender()}get clips(){return this._clips}set clips(t){this._clips=t,this.children.forEach(e=>e.clips=t)}get computedEffects(){var t;return((t=this._effectView)==null?void 0:t.effects)??null}get effect(){var t;return((t=this._effectView)==null?void 0:t.effect)??""}set effect(t){(this._effectView||t)&&(this._effectView||(this._effectView=new d),this._effectView.effect=t,this.requestRender())}get highlightOptions(){return this._highlightOptions}set highlightOptions(t){if(!t)return this._highlightOptions=null,void(this._highlightGradient&&(this._highlightGradient.destroy(),this._highlightGradient=null,this.requestRender()));this._highlightOptions&&this._highlightOptions.equals(t)||(this._highlightOptions=t,this._highlightGradient||(this._highlightGradient=new Z),this._highlightGradient.setHighlightOptions(t),this.requestRender())}updateTransitionProperties(t,e){super.updateTransitionProperties(t,e),this._effectView&&(this._effectView.transitionStep(t,e),this._effectView.transitioning&&this.requestRender())}doRender(t){const e=this.createRenderParams(t);this.renderChildren(e)}addChild(t){return this.addChildAt(t,this.children.length)}addChildAt(t,e=this.children.length){if(!t||this.contains(t))return t;this._needsSort=!0;const s=t.parent;return s&&s!==this&&s.removeChild(t),e>=this.children.length?this.children.push(t):this.children.splice(e,0,t),this._childrenSet.add(t),t.parent=this,t.stage=this.stage,this!==this.stage&&(t.clips=this.clips),this.requestRender(),t}contains(t){return this._childrenSet.has(t)}endTransitions(){super.endTransitions(),this._effectView&&(this._effectView.endTransitions(),this.requestRender())}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const t of this.children)this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null;this.children.length=0}removeChild(t){return this.contains(t)?this.removeChildAt(this.children.indexOf(t)):t}removeChildAt(t){if(t<0||t>=this.children.length)return null;this._needsSort=!0;const e=this.children.splice(t,1)[0];return this._childrenSet.delete(e),this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null,e}sortChildren(t){this._needsSort&&(this.children.sort(t),this._needsSort=!1)}beforeRender(t){super.beforeRender(t);for(const e of this.children)e.beforeRender(t)}afterRender(t){super.afterRender(t);for(const e of this.children)e.afterRender(t)}_createTransforms(){return{dvs:V()}}onAttach(){super.onAttach();const t=this.stage;for(const e of this.children)e.stage=t}onDetach(){super.onDetach();for(const t of this.children)t.stage=null}renderChildren(t){for(const e of this.children)e.processRender(t)}createRenderParams(t){return{...t,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:t.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition,highlightGradient:this._highlightGradient||t.highlightGradient}}}export{d as a,ot as h,ht as i,z as o,J as r,nt as t};
