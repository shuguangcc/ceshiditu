import{n as v}from"./vec4f64-e407da96.js";import{c as p,v as u,d as f,a as g}from"./View.glsl-8b12b8c2.js";import{o as s}from"./FloatPassUniform-d2dfc562.js";import{n as a,o as h}from"./ShaderBuilder-93e8045e.js";import{h as l}from"./Matrix3PassUniform-da8eddae.js";import{u as w}from"./Slice.glsl-a612de15.js";import{r as S}from"./Transform.glsl-f15542a7.js";import{n as C}from"./MultipassTerrainTest.glsl-e79d40de.js";import{t as P}from"./AlphaCutoff-96178e0d.js";import{e as b,o as z}from"./TransparencyPassType-cd195b0e.js";import{e as m}from"./Float4PassUniform-3a47b7b3.js";import{O as c}from"./VertexAttribute-9c5c630d.js";function N(o,r){if(!r.screenSizeEnabled)return;const i=o.vertex;p(i,r),i.uniforms.add(new s("perScreenPixelRatio",(e,n)=>n.camera.perScreenPixelRatio)),i.uniforms.add(new s("screenSizeScale",e=>e.screenSizeScale)),i.code.add(a`float computeRenderPixelSizeAt( vec3 pWorld ){
vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
float viewDirectionDistance = abs(dot(viewForward, pWorld - cameraPosition));
return viewDirectionDistance * perScreenPixelRatio;
}
vec3 screenSizeScaling(vec3 position, vec3 anchor){
return position * screenSizeScale * computeRenderPixelSizeAt(anchor) + anchor;
}`)}function F(o){const r=new h,i=o.hasMultipassTerrain&&(o.output===l.Color||o.output===l.Alpha);r.include(S,o),r.include(N,o),r.include(w,o);const{vertex:e,fragment:n}=r;return n.include(b),u(e,o),n.uniforms.add(new m("uColor",d=>d.color)),r.attributes.add(c.POSITION,"vec3"),r.varyings.add("vWorldPosition","vec3"),i&&r.varyings.add("depth","float"),o.screenSizeEnabled&&r.attributes.add(c.OFFSET,"vec3"),o.shadingEnabled&&(f(e),r.attributes.add(c.NORMAL,"vec3"),r.varyings.add("vViewNormal","vec3")),e.code.add(a`
    void main(void) {
      vWorldPosition = ${o.screenSizeEnabled?"screenSizeScaling(offset, position)":"position"};
  `),o.shadingEnabled&&e.code.add(a`vec3 worldNormal = normal;
vViewNormal = (viewNormal * vec4(worldNormal, 1)).xyz;`),e.code.add(a`
    ${i?"depth = (view * vec4(vWorldPosition, 1.0)).z;":""}
    gl_Position = transformPosition(proj, view, vWorldPosition);
  }
  `),i&&r.include(C,o),n.code.add(a`
    void main() {
      discardBySlice(vWorldPosition);
      ${i?"terrainDepthTest(gl_FragCoord, depth);":""}
    `),o.shadingEnabled?(n.uniforms.add(new g("shadingDirection",d=>d.shadingDirection)),n.uniforms.add(new m("shadedColor",d=>x(d.shadingTint,d.color))),n.code.add(a`vec3 viewNormalNorm = normalize(vViewNormal);
float shadingFactor = 1.0 - clamp(-dot(viewNormalNorm, shadingDirection), 0.0, 1.0);
vec4 finalColor = mix(uColor, shadedColor, shadingFactor);`)):n.code.add(a`vec4 finalColor = uColor;`),n.code.add(a`
      if (finalColor.a < ${a.float(P)}) {
        discard;
      }
      ${o.output===l.Alpha?a`gl_FragColor = vec4(finalColor.a);`:""}

      ${o.output===l.Color?a`gl_FragColor = highlightSlice(finalColor, vWorldPosition); ${o.transparencyPassType===z.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}`:""}
    }
    `),r}function x(o,r){const i=1-o[3],e=o[3]+r[3]*i;return e===0?(t[3]=e,t):(t[0]=(o[0]*o[3]+r[0]*r[3]*i)/e,t[1]=(o[1]*o[3]+r[1]*r[3]*i)/e,t[2]=(o[2]*o[3]+r[2]*r[3]*i)/e,t[3]=r[3],t)}const t=v(),I=Object.freeze(Object.defineProperty({__proto__:null,build:F},Symbol.toStringTag,{value:"Module"}));export{I as h,F as w};
