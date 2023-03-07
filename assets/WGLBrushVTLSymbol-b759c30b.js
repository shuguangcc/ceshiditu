import{hZ as oe,a3 as le,u as V,ab as W,g1 as Z,I as C,Y as O,L as fe,$ as ce,T as ue,B as F,ad as z,g2 as de,ic as K,h1 as pe}from"./index-74d49a87.js";import{Z as A,_ as ie,$ as J}from"./definitions-19bfb61c.js";import{T as k}from"./enums-b1d611e3.js";import{M as j}from"./number-b10bd8f5.js";import{r as q,l as N,n as ee}from"./StyleDefinition-7d58136b.js";import{c as te}from"./GeometryUtils-dd03fc25.js";class Q{constructor(){this.name=this.constructor.name||"UnnamedBrush",this.brushEffect=null}prepareState(r,e){}draw(r,e,t){}drawMany(r,e,t){for(const l of e)l.visible&&this.draw(r,l,t)}}class Ue extends Q{constructor(){super(...arguments),this._color=oe(1,0,0,1),this._patternMatrix=le(),this._programOptions={id:!1,pattern:!1}}dispose(){this._vao&&(this._vao.dispose(),this._vao=null)}drawMany(r,e){const{context:t,painter:l,styleLayerUID:o,requestRender:a,allowDelayedRender:E}=r;this._loadWGLResources(r);const y=r.displayLevel,f=r.styleLayer,P=f.backgroundMaterial,_=l.vectorTilesMaterialManager,v=f.getPaintValue("background-color",y),m=f.getPaintValue("background-opacity",y),S=f.getPaintValue("background-pattern",y),D=S!==void 0,h=v[3]*m,x=1|window.devicePixelRatio,U=r.spriteMosaic;let I,T;const c=x>ie?2:1,d=r.drawPhase===k.HITTEST,p=this._programOptions;p.id=d,p.pattern=D;const n=_.getMaterialProgram(t,P,p);if(E&&V(a)&&!n.compiled)a();else{if(t.bindVAO(this._vao),t.useProgram(n),D){const s=U.getMosaicItemPosition(S,!0);if(V(s)){const{tl:u,br:i,page:M}=s;I=i[0]-u[0],T=i[1]-u[1];const g=U.getPageSize(M);V(g)&&(U.bind(t,W.LINEAR,M,A),n.setUniform4f("u_tlbr",u[0],u[1],i[0],i[1]),n.setUniform2fv("u_mosaicSize",g),n.setUniform1i("u_texture",A))}n.setUniform1f("u_opacity",m)}else this._color[0]=h*v[0],this._color[1]=h*v[1],this._color[2]=h*v[2],this._color[3]=h,n.setUniform4fv("u_color",this._color);if(n.setUniform1f("u_depth",f.z||0),d){const s=j(o+1);n.setUniform4fv("u_id",s)}for(const s of e){if(n.setUniform1f("u_coord_range",s.rangeX),n.setUniformMatrix3fv("u_dvsMat3",s.transforms.dvs),D){const u=Math.max(2**(Math.round(y)-s.key.level),1),i=c*s.width*u,M=i/Z(I),g=i/Z(T);this._patternMatrix[0]=M,this._patternMatrix[4]=g,n.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix)}t.setStencilFunction(C.EQUAL,0,255),t.drawArrays(O.TRIANGLE_STRIP,0,4)}}}_loadWGLResources(r){if(this._vao)return;const{context:e,styleLayer:t}=r,l=t.backgroundMaterial,o=new Int8Array([0,0,1,0,0,1,1,1]),a=fe.createVertex(e,ce.STATIC_DRAW,o),E=new ue(e,l.getAttributeLocations(),l.getLayoutInfo(),{geometry:a});this._vao=E}}let Pe=class extends Q{constructor(){super(...arguments),this._programOptions={id:!1}}dispose(){}drawMany(r,e){const{context:t,displayLevel:l,requiredLevel:o,state:a,drawPhase:E,painter:y,spriteMosaic:f,styleLayerUID:P,requestRender:_,allowDelayedRender:v}=r;if(!e.some(p=>{var n;return((n=p.layerData.get(P))==null?void 0:n.circleIndexCount)??!1}))return;const m=r.styleLayer,S=m.circleMaterial,D=y.vectorTilesMaterialManager,h=1.2,x=m.getPaintValue("circle-translate",l),U=m.getPaintValue("circle-translate-anchor",l),I=E===k.HITTEST,T=this._programOptions;T.id=I;const c=D.getMaterialProgram(t,S,T);if(v&&V(_)&&!c.compiled)return void _();t.useProgram(c),c.setUniformMatrix3fv("u_displayMat3",U===q.VIEWPORT?a.displayMat3:a.displayViewMat3),c.setUniform2fv("u_circleTranslation",x),c.setUniform1f("u_depth",m.z),c.setUniform1f("u_antialiasingWidth",h);let d=-1;if(I){const p=j(P+1);c.setUniform4fv("u_id",p)}for(const p of e){if(!p.layerData.has(P))continue;p.key.level!==d&&(d=p.key.level,S.setDataUniforms(c,l,m,d,f));const n=p.layerData.get(P);if(!n.circleIndexCount)continue;n.prepareForRendering(t);const s=n.circleVertexArrayObject;F(s)||(t.bindVAO(s),c.setUniformMatrix3fv("u_dvsMat3",p.transforms.dvs),o!==p.key.level?t.setStencilFunction(C.EQUAL,p.stencilRef,255):t.setStencilFunction(C.GREATER,255,255),t.drawElements(O.TRIANGLES,n.circleIndexCount,z.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*n.circleIndexStart),p.triangleCount+=n.circleIndexCount/3)}}};const ae=1/65536;class Te extends Q{constructor(){super(...arguments),this._fillProgramOptions={id:!1,pattern:!1},this._outlineProgramOptions={id:!1}}dispose(){}drawMany(r,e){const{displayLevel:t,drawPhase:l,renderPass:o,spriteMosaic:a,styleLayerUID:E}=r;let y=!1;for(const c of e)if(c.layerData.has(E)){const d=c.layerData.get(E);if(d.fillIndexCount>0||d.outlineIndexCount>0){y=!0;break}}if(!y)return;const f=r.styleLayer,P=f.getPaintProperty("fill-pattern"),_=P!==void 0,v=_&&P.isDataDriven;let m;if(_&&!v){const c=P.getValue(t);m=a.getMosaicItemPosition(c,!0)}const S=!_&&f.getPaintValue("fill-antialias",t);let D=!0,h=1;if(!_){const c=f.getPaintProperty("fill-color"),d=f.getPaintProperty("fill-opacity");if(!(c!=null&&c.isDataDriven)&&!(d!=null&&d.isDataDriven)){const p=f.getPaintValue("fill-color",t);h=f.getPaintValue("fill-opacity",t)*p[3],h>=1&&(D=!1)}}if(D&&o==="opaque")return;let x;l===k.HITTEST&&(x=j(E+1));const U=f.getPaintValue("fill-translate",t),I=f.getPaintValue("fill-translate-anchor",t);(D||o!=="translucent")&&this._drawFill(r,E,f,e,U,I,_,m,v,x);const T=!f.hasDataDrivenOutlineColor&&f.outlineUsesFillColor&&h<1;S&&o!=="opaque"&&!T&&this._drawOutline(r,E,f,e,U,I,x)}_drawFill(r,e,t,l,o,a,E,y,f,P){if(E&&!f&&F(y))return;const{context:_,displayLevel:v,state:m,drawPhase:S,painter:D,pixelRatio:h,spriteMosaic:x,requestRender:U,allowDelayedRender:I}=r,T=t.fillMaterial,c=D.vectorTilesMaterialManager,d=h>ie?2:1,p=S===k.HITTEST,n=this._fillProgramOptions;n.id=p,n.pattern=E;const s=c.getMaterialProgram(_,T,n);if(I&&V(U)&&!s.compiled)return void U();if(_.useProgram(s),V(y)){const{page:i}=y,M=x.getPageSize(i);V(M)&&(x.bind(_,W.LINEAR,i,A),s.setUniform2fv("u_mosaicSize",M),s.setUniform1i("u_texture",A))}s.setUniformMatrix3fv("u_displayMat3",a===q.VIEWPORT?m.displayMat3:m.displayViewMat3),s.setUniform2fv("u_fillTranslation",o),s.setUniform1f("u_depth",t.z+ae),p&&s.setUniform4fv("u_id",P);let u=-1;for(const i of l){if(!i.layerData.has(e))continue;i.key.level!==u&&(u=i.key.level,T.setDataUniforms(s,v,t,u,x));const M=i.layerData.get(e);if(!M.fillIndexCount)continue;M.prepareForRendering(_);const g=M.fillVertexArrayObject;if(!F(g)){if(_.bindVAO(g),s.setUniformMatrix3fv("u_dvsMat3",i.transforms.dvs),_.setStencilFunction(C.EQUAL,i.stencilRef,255),E){const L=Math.max(2**(Math.round(v)-i.key.level),1),w=i.rangeX/(d*i.width*L);s.setUniform1f("u_patternFactor",w)}if(f){const L=M.patternMap;if(!L)continue;for(const[w,G]of L){const $=x.getPageSize(w);V($)&&(x.bind(_,W.LINEAR,w,A),s.setUniform2fv("u_mosaicSize",$),s.setUniform1i("u_texture",A),_.drawElements(O.TRIANGLES,G[1],z.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*G[0]))}}else _.drawElements(O.TRIANGLES,M.fillIndexCount,z.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*M.fillIndexStart);i.triangleCount+=M.fillIndexCount/3}}}_drawOutline(r,e,t,l,o,a,E){const{context:y,displayLevel:f,state:P,drawPhase:_,painter:v,pixelRatio:m,spriteMosaic:S,requestRender:D,allowDelayedRender:h}=r,x=t.outlineMaterial,U=v.vectorTilesMaterialManager,I=.75/m,T=_===k.HITTEST,c=this._outlineProgramOptions;c.id=T;const d=U.getMaterialProgram(y,x,c);if(h&&V(D)&&!d.compiled)return void D();y.useProgram(d),d.setUniformMatrix3fv("u_displayMat3",a===q.VIEWPORT?P.displayMat3:P.displayViewMat3),d.setUniform2fv("u_fillTranslation",o),d.setUniform1f("u_depth",t.z+ae),d.setUniform1f("u_outline_width",I),T&&d.setUniform4fv("u_id",E);let p=-1;for(const n of l){if(!n.layerData.has(e))continue;n.key.level!==p&&(p=n.key.level,x.setDataUniforms(d,f,t,p,S));const s=n.layerData.get(e);if(s.prepareForRendering(y),!s.outlineIndexCount)continue;const u=s.outlineVertexArrayObject;F(u)||(y.bindVAO(u),d.setUniformMatrix3fv("u_dvsMat3",n.transforms.dvs),y.setStencilFunction(C.EQUAL,n.stencilRef,255),y.drawElements(O.TRIANGLES,s.outlineIndexCount,z.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*s.outlineIndexStart),n.triangleCount+=s.outlineIndexCount/3)}}}class xe extends Q{constructor(){super(...arguments),this._programOptions={id:!1,pattern:!1,sdf:!1}}dispose(){}drawMany(r,e){const{context:t,displayLevel:l,state:o,drawPhase:a,painter:E,pixelRatio:y,spriteMosaic:f,styleLayerUID:P,requestRender:_,allowDelayedRender:v}=r;if(!e.some(g=>{var L;return((L=g.layerData.get(P))==null?void 0:L.lineIndexCount)??!1}))return;const m=r.styleLayer,S=m.lineMaterial,D=E.vectorTilesMaterialManager,h=m.getPaintValue("line-translate",l),x=m.getPaintValue("line-translate-anchor",l),U=m.getPaintProperty("line-pattern"),I=U!==void 0,T=I&&U.isDataDriven;let c,d;if(I&&!T){const g=U.getValue(l);c=f.getMosaicItemPosition(g)}let p=!1;if(!I){const g=m.getPaintProperty("line-dasharray");if(d=g!==void 0,p=d&&g.isDataDriven,d&&!p){const L=g.getValue(l),w=m.getDashKey(L,m.getLayoutValue("line-cap",l));c=f.getMosaicItemPosition(w)}}const n=1/y,s=a===k.HITTEST,u=this._programOptions;u.id=s,u.pattern=I,u.sdf=d;const i=D.getMaterialProgram(t,S,u);if(v&&V(_)&&!i.compiled)return void _();if(t.useProgram(i),i.setUniformMatrix3fv("u_displayViewMat3",o.displayViewMat3),i.setUniformMatrix3fv("u_displayMat3",x===q.VIEWPORT?o.displayMat3:o.displayViewMat3),i.setUniform2fv("u_lineTranslation",h),i.setUniform1f("u_depth",m.z),i.setUniform1f("u_antialiasing",n),s){const g=j(P+1);i.setUniform4fv("u_id",g)}if(c&&V(c)){const{page:g}=c,L=f.getPageSize(g);V(L)&&(f.bind(t,W.LINEAR,g,A),i.setUniform2fv("u_mosaicSize",L),i.setUniform1i("u_texture",A))}let M=-1;for(const g of e){if(!g.layerData.has(P))continue;g.key.level!==M&&(M=g.key.level,S.setDataUniforms(i,l,m,M,f));const L=2**(l-M)/y;i.setUniform1f("u_zoomFactor",L);const w=g.layerData.get(P);if(!w.lineIndexCount)continue;w.prepareForRendering(t);const G=w.lineVertexArrayObject;if(!F(G)){if(t.bindVAO(G),i.setUniformMatrix3fv("u_dvsMat3",g.transforms.dvs),t.setStencilFunction(C.EQUAL,g.stencilRef,255),T||p){const $=w.patternMap;if(!$)continue;for(const[Y,R]of $){const B=f.getPageSize(Y);V(B)&&(f.bind(t,W.LINEAR,Y,A),i.setUniform2fv("u_mosaicSize",B),i.setUniform1i("u_texture",A),t.drawElements(O.TRIANGLES,R[1],z.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*R[0]))}}else t.drawElements(O.TRIANGLES,w.lineIndexCount,z.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*w.lineIndexStart);g.triangleCount+=w.lineIndexCount/3}}}}const me=1/65536;class Ie extends Q{constructor(){super(...arguments),this._iconProgramOptions={id:!1,sdf:!1},this._sdfProgramOptions={id:!1},this._spritesTextureSize=de()}dispose(){}drawMany(r,e){const{drawPhase:t,styleLayerUID:l}=r,o=r.styleLayer;let a;t===k.HITTEST&&(a=j(l+1)),this._drawIcons(r,o,e,a),this._drawText(r,o,e,a)}_drawIcons(r,e,t,l){const{context:o,displayLevel:a,drawPhase:E,painter:y,spriteMosaic:f,state:P,styleLayerUID:_,requestRender:v,allowDelayedRender:m}=r,S=e.iconMaterial,D=y.vectorTilesMaterialManager;let h,x=!1;for(const M of t)if(M.layerData.has(_)&&(h=M.layerData.get(_),h.iconPerPageElementsMap.size>0)){x=!0;break}if(!x)return;const U=e.getPaintValue("icon-translate",a),I=e.getPaintValue("icon-translate-anchor",a);let T=e.getLayoutValue("icon-rotation-alignment",a);T===N.AUTO&&(T=e.getLayoutValue("symbol-placement",a)===ee.POINT?N.VIEWPORT:N.MAP);const c=T===N.MAP,d=e.getLayoutValue("icon-keep-upright",a)&&c,p=h.isIconSDF,n=E===k.HITTEST,s=this._iconProgramOptions;s.id=n,s.sdf=p;const u=D.getMaterialProgram(o,S,s);if(m&&V(v)&&!u.compiled)return void v();o.useProgram(u),u.setUniformMatrix3fv("u_displayViewMat3",T===N.MAP?P.displayViewMat3:P.displayMat3),u.setUniformMatrix3fv("u_displayMat3",I===q.VIEWPORT?P.displayMat3:P.displayViewMat3),u.setUniform2fv("u_iconTranslation",U),u.setUniform1f("u_depth",e.z),u.setUniform1f("u_mapRotation",te(P.rotation)),u.setUniform1f("u_keepUpright",d?1:0),u.setUniform1f("u_level",10*a),u.setUniform1i("u_texture",A),u.setUniform1f("u_fadeDuration",K/1e3),n&&u.setUniform4fv("u_id",l);let i=-1;for(const M of t){if(!M.layerData.has(_)||(M.key.level!==i&&(i=M.key.level,S.setDataUniforms(u,a,e,i,f)),h=M.layerData.get(_),h.iconPerPageElementsMap.size===0))continue;h.prepareForRendering(o),h.updateOpacityInfo();const g=h.iconVertexArrayObject;if(!F(g)){o.bindVAO(g),u.setUniformMatrix3fv("u_dvsMat3",M.transforms.dvs),u.setUniform1f("u_time",(performance.now()-h.lastOpacityUpdate)/1e3);for(const[L,w]of h.iconPerPageElementsMap)this._renderIconRange(r,u,w,L,M)}}}_renderIconRange(r,e,t,l,o){const{context:a,spriteMosaic:E}=r;this._spritesTextureSize[0]=E.getWidth(l)/4,this._spritesTextureSize[1]=E.getHeight(l)/4,e.setUniform2fv("u_mosaicSize",this._spritesTextureSize),E.bind(a,W.LINEAR,l,A),a.setStencilTestEnabled(!0),a.setStencilFunction(C.GREATER,255,255),a.setStencilWriteMask(0),a.drawElements(O.TRIANGLES,t[1],z.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*t[0]),o.triangleCount+=t[1]/3}_drawText(r,e,t,l){const{context:o,displayLevel:a,drawPhase:E,glyphMosaic:y,painter:f,pixelRatio:P,spriteMosaic:_,state:v,styleLayerUID:m,requestRender:S,allowDelayedRender:D}=r,h=e.textMaterial,x=f.vectorTilesMaterialManager;let U,I=!1;for(const b of t)if(b.layerData.has(m)&&(U=b.layerData.get(m),U.glyphPerPageElementsMap.size>0)){I=!0;break}if(!I)return;const T=e.getPaintProperty("text-opacity");if(T&&!T.isDataDriven&&T.getValue(a)===0)return;const c=e.getPaintProperty("text-color"),d=!c||c.isDataDriven||c.getValue(a)[3]>0,p=e.getPaintProperty("text-halo-width"),n=e.getPaintProperty("text-halo-color"),s=(!p||p.isDataDriven||p.getValue(a)>0)&&(!n||n.isDataDriven||n.getValue(a)[3]>0);if(!d&&!s)return;const u=24/8;let i=e.getLayoutValue("text-rotation-alignment",a);i===N.AUTO&&(i=e.getLayoutValue("symbol-placement",a)===ee.POINT?N.VIEWPORT:N.MAP);const M=i===N.MAP,g=e.getLayoutValue("text-keep-upright",a)&&M,L=E===k.HITTEST,w=.8*u/P;this._glyphTextureSize||(this._glyphTextureSize=pe(y.width/4,y.height/4));const G=e.getPaintValue("text-translate",a),$=e.getPaintValue("text-translate-anchor",a),Y=this._sdfProgramOptions;Y.id=L;const R=x.getMaterialProgram(o,h,Y);if(D&&V(S)&&!R.compiled)return void S();o.useProgram(R),R.setUniformMatrix3fv("u_displayViewMat3",i===N.MAP?v.displayViewMat3:v.displayMat3),R.setUniformMatrix3fv("u_displayMat3",$===q.VIEWPORT?v.displayMat3:v.displayViewMat3),R.setUniform2fv("u_textTranslation",G),R.setUniform1f("u_depth",e.z+me),R.setUniform2fv("u_mosaicSize",this._glyphTextureSize),R.setUniform1f("u_mapRotation",te(v.rotation)),R.setUniform1f("u_keepUpright",g?1:0),R.setUniform1f("u_level",10*a),R.setUniform1i("u_texture",J),R.setUniform1f("u_antialiasingWidth",w),R.setUniform1f("u_fadeDuration",K/1e3),L&&R.setUniform4fv("u_id",l);let B=-1;for(const b of t){if(!b.layerData.has(m)||(b.key.level!==B&&(B=b.key.level,h.setDataUniforms(R,a,e,B,_)),U=b.layerData.get(m),U.glyphPerPageElementsMap.size===0))continue;U.prepareForRendering(o),U.updateOpacityInfo();const X=U.textVertexArrayObject;if(F(X))continue;o.bindVAO(X),R.setUniformMatrix3fv("u_dvsMat3",b.transforms.dvs),o.setStencilTestEnabled(!0),o.setStencilFunction(C.GREATER,255,255),o.setStencilWriteMask(0);const re=(performance.now()-U.lastOpacityUpdate)/1e3;R.setUniform1f("u_time",re),U.glyphPerPageElementsMap.forEach((ne,se)=>{this._renderGlyphRange(o,ne,se,y,R,s,d,b)})}}_renderGlyphRange(r,e,t,l,o,a,E,y){l.bind(r,W.LINEAR,t,J),a&&(o.setUniform1f("u_halo",1),r.drawElements(O.TRIANGLES,e[1],z.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*e[0]),y.triangleCount+=e[1]/3),E&&(o.setUniform1f("u_halo",0),r.drawElements(O.TRIANGLES,e[1],z.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*e[0]),y.triangleCount+=e[1]/3)}}export{Ie as M,Pe as a,xe as c,Ue as d,Te as m,Q as t};
