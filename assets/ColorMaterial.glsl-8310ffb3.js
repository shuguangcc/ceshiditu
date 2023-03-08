import{b as n,t as u}from"./ForwardLinearDepth.glsl-36f9eb3b.js";import{h as e}from"./Matrix3PassUniform-da8eddae.js";import{u as m}from"./Slice.glsl-a612de15.js";import{r as s}from"./Transform.glsl-f15542a7.js";import{d as f}from"./ObjectAndLayerIdColor.glsl-73c19386.js";import{e as c}from"./VertexColor.glsl-db21b96c.js";import{o as h}from"./OutputDepth.glsl-179f1d8f.js";import{a as g}from"./OutputHighlight.glsl-7364b03b.js";import{n as C}from"./MultipassTerrainTest.glsl-e79d40de.js";import{t as $}from"./AlphaCutoff-96178e0d.js";import{e as y,o as _}from"./TransparencyPassType-cd195b0e.js";import{v as b}from"./View.glsl-8b12b8c2.js";import{e as O}from"./Float4PassUniform-3a47b7b3.js";import{o as j,n as t}from"./ShaderBuilder-93e8045e.js";import{O as v}from"./VertexAttribute-9c5c630d.js";function w(o){const r=new j,{vertex:l,fragment:a}=r,p=o.output===e.Depth,i=o.hasMultipassTerrain&&(o.output===e.Color||o.output===e.Alpha);return b(l,o),r.include(s,o),r.include(c,o),r.include(f,o),r.attributes.add(v.POSITION,"vec3"),r.varyings.add("vpos","vec3"),i&&r.varyings.add("depth","float"),p&&(r.include(h,o),n(r),u(r)),l.code.add(t`
    void main(void) {
      vpos = position;
      forwardNormalizedVertexColor();
      forwardObjectAndLayerIdColor();
      ${i?"depth = (view * vec4(vpos, 1.0)).z;":""}
      gl_Position = ${p?t`transformPositionWithDepth(proj, view, vpos, nearFar, linearDepth);`:t`transformPosition(proj, view, vpos);`}
    }
  `),r.include(m,o),i&&r.include(C,o),a.include(y),a.uniforms.add(new O("eColor",d=>d.color)),o.output===e.Highlight&&r.include(g,o),a.code.add(t`
  void main() {
    discardBySlice(vpos);
    ${i?"terrainDepthTest(gl_FragCoord, depth);":""}
    vec4 fColor = ${o.hasVertexColors?"vColor * eColor;":"eColor;"}

    if (fColor.a < ${t.float($)}) {
      discard;
    }

    ${o.output===e.Alpha?t`gl_FragColor = vec4(fColor.a);`:""}

    ${o.output===e.Color?t`gl_FragColor = highlightSlice(fColor, vpos); ${o.transparencyPassType===_.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}`:""}
    ${o.output===e.Highlight?t`outputHighlight();`:""};
    ${o.output===e.Depth?t`outputDepth(linearDepth);`:""};
    ${o.output===e.ObjectAndLayerIdColor?t`outputObjectAndLayerIdColor();`:""}
  }
  `),r}const W=Object.freeze(Object.defineProperty({__proto__:null,build:w},Symbol.toStringTag,{value:"Module"}));export{W as f,w as v};
