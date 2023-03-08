import{r as d}from"./typedArrayUtil-a8b5b3e9.js";import{i as s}from"./vec2f64-30dc1443.js";import{h as n}from"./Matrix3PassUniform-da8eddae.js";import{u as c}from"./Slice.glsl-a612de15.js";import{r as m}from"./Transform.glsl-f15542a7.js";import{n as u}from"./MultipassTerrainTest.glsl-e79d40de.js";import{o as l}from"./AlphaCutoff-96178e0d.js";import{e as v,o as g}from"./TransparencyPassType-cd195b0e.js";import{v as f}from"./View.glsl-8b12b8c2.js";import{e as h,f as x}from"./Texture2DPassUniform-6e8ae673.js";import{o as C}from"./FloatPassUniform-d2dfc562.js";import{o as $,n as t}from"./ShaderBuilder-93e8045e.js";import{O as p}from"./VertexAttribute-9c5c630d.js";function y(o){const r=new $,{vertex:i,fragment:a}=r;return f(i,o),r.include(m,o),r.attributes.add(p.POSITION,"vec3"),r.attributes.add(p.UV0,"vec2"),r.varyings.add("vpos","vec3"),o.hasMultipassTerrain&&r.varyings.add("depth","float"),i.uniforms.add(new h("textureCoordinateScaleFactor",e=>d(e.texture)&&d(e.texture.descriptor.textureCoordinateScaleFactor)?e.texture.descriptor.textureCoordinateScaleFactor:s)),i.code.add(t`
    void main(void) {
      vpos = position;
      ${o.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0 * textureCoordinateScaleFactor;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),r.include(c,o),r.include(u,o),a.uniforms.add([new x("tex",e=>e.texture),new C("opacity",e=>e.opacity)]),r.varyings.add("vTexCoord","vec2"),o.output===n.Alpha?a.code.add(t`
    void main() {
      discardBySlice(vpos);
      ${o.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture2D(tex, vTexCoord).a * opacity;
      if (alpha  < ${t.float(l)}) {
        discard;
      }

      gl_FragColor = vec4(alpha);
    }
    `):(a.include(v),a.code.add(t`
    void main() {
      discardBySlice(vpos);
      ${o.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
      gl_FragColor = texture2D(tex, vTexCoord) * opacity;

      if (gl_FragColor.a < ${t.float(l)}) {
        discard;
      }

      gl_FragColor = highlightSlice(gl_FragColor, vpos);
      ${o.transparencyPassType===g.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    }
    `)),r}const B=Object.freeze(Object.defineProperty({__proto__:null,build:y},Symbol.toStringTag,{value:"Module"}));export{y as f,B as w};
