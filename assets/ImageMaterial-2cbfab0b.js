import{bR as m,iW as P,iX as y,bw as _,bZ as $,u as g,iY as O,c2 as c,bS as S,iZ as A,i_ as x,i$ as C,i as o,eu as v,j0 as b,j1 as p,c7 as E,_ as w,j2 as F,X as T,e as n,cg as l,et as d,c8 as j,c9 as D,ca as N,cb as M,j3 as R,j4 as I,j5 as L,cc as U,j6 as W,cd as B,ce as G,j7 as z,cf as H,j8 as q,ch as Q,j9 as V,ja as X,E as u,jb as Z,jc as Y,jd as k,je as J}from"./index-74d49a87.js";function K(a){const e=new m,{vertex:t,fragment:s}=e;return P(t,a),e.include(y,a),e.attributes.add(_.POSITION,"vec3"),e.attributes.add(_.UV0,"vec2"),e.varyings.add("vpos","vec3"),a.hasMultipassTerrain&&e.varyings.add("depth","float"),t.uniforms.add(new $("textureCoordinateScaleFactor",r=>g(r.texture)&&g(r.texture.descriptor.textureCoordinateScaleFactor)?r.texture.descriptor.textureCoordinateScaleFactor:O)),t.code.add(c`
    void main(void) {
      vpos = position;
      ${a.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0 * textureCoordinateScaleFactor;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),e.include(S,a),e.include(A,a),s.uniforms.add([new x("tex",r=>r.texture),new C("opacity",r=>r.opacity)]),e.varyings.add("vTexCoord","vec2"),a.output===o.Alpha?s.code.add(c`
    void main() {
      discardBySlice(vpos);
      ${a.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture2D(tex, vTexCoord).a * opacity;
      if (alpha  < ${c.float(v)}) {
        discard;
      }

      gl_FragColor = vec4(alpha);
    }
    `):(s.include(b),s.code.add(c`
    void main() {
      discardBySlice(vpos);
      ${a.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
      gl_FragColor = texture2D(tex, vTexCoord) * opacity;

      if (gl_FragColor.a < ${c.float(v)}) {
        discard;
      }

      gl_FragColor = highlightSlice(gl_FragColor, vpos);
      ${a.transparencyPassType===p.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    }
    `)),e}const ee=Object.freeze(Object.defineProperty({__proto__:null,build:K},Symbol.toStringTag,{value:"Module"}));class h extends j{initializeProgram(e){return new D(e.rctx,h.shader.get().build(this.configuration),N)}_setPipelineState(e,t){const s=this.configuration,r=e===p.NONE,f=e===p.FrontFace;return M({blending:s.output!==o.Color&&s.output!==o.Alpha||!s.transparent?null:r?te:R(e),culling:I(s.cullFace),depthTest:{func:L(e)},depthWrite:r?s.writeDepth?U:null:W(e),colorWrite:B,stencilWrite:s.hasOccludees?G:null,stencilTest:s.hasOccludees?t?z:H:null,polygonOffset:r||f?null:q(s.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}h.shader=new E(ee,()=>w(()=>import("./ImageMaterial.glsl-9915ea65.js"),["./ImageMaterial.glsl-9915ea65.js","./index-74d49a87.js","./index-45742df3.css"],import.meta.url));const te=F(T.ONE,T.ONE_MINUS_SRC_ALPHA);class i extends Q{constructor(){super(...arguments),this.output=o.Color,this.cullFace=d.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=p.NONE,this.hasMultipassTerrain=!1,this.cullAboveGround=!1}}n([l({count:o.COUNT})],i.prototype,"output",void 0),n([l({count:d.COUNT})],i.prototype,"cullFace",void 0),n([l()],i.prototype,"hasSlicePlane",void 0),n([l()],i.prototype,"transparent",void 0),n([l()],i.prototype,"enableOffset",void 0),n([l()],i.prototype,"writeDepth",void 0),n([l()],i.prototype,"hasOccludees",void 0),n([l({count:p.COUNT})],i.prototype,"transparencyPassType",void 0),n([l()],i.prototype,"hasMultipassTerrain",void 0),n([l()],i.prototype,"cullAboveGround",void 0);class ie extends V{constructor(e){super(e,new se),this.supportsEdges=!0,this._configuration=new i}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<X,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration}requiresSlot(e,t){return t===o.Color||t===o.Alpha||t===o.Highlight?e===u.DRAPED_MATERIAL?!0:t===o.Highlight?e===u.OPAQUE_MATERIAL:e===(this.parameters.transparent?this.parameters.writeDepth?u.TRANSPARENT_MATERIAL:u.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:u.OPAQUE_MATERIAL):!1}createGLMaterial(e){return new ae(e)}createBufferWriter(){return new Z(Y)}}class ae extends k{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(h,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}beginSlot(e){return this._output!==o.Color&&this._output!==o.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}class se extends J{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=d.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0}}export{ie as c,K as f};
