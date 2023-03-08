import{a as h,d as y,b as O}from"./ForwardLinearDepth.glsl-36f9eb3b.js";import{h as t}from"./Matrix3PassUniform-da8eddae.js";import{u as c}from"./Slice.glsl-a612de15.js";import{r as s}from"./Transform.glsl-f15542a7.js";import{r as z}from"./vec2f64-30dc1443.js";import{e as w}from"./Texture2DPassUniform-6e8ae673.js";import{a as n,v as x,d as C,c as b}from"./View.glsl-8b12b8c2.js";import{t as d,H as p,G as S,v as V}from"./VisualVariablePassParameters-5807c7dc.js";import{n as r,o as P}from"./ShaderBuilder-93e8045e.js";import{O as v}from"./VertexAttribute-9c5c630d.js";import{o as N}from"./OutputDepth.glsl-179f1d8f.js";import{a as $}from"./OutputHighlight.glsl-7364b03b.js";import{p as A,d as _,f as R,u as D}from"./EvaluateSceneLighting.glsl-3bbc6edf.js";import{v as u,c as M}from"./PhysicallyBasedRendering.glsl-a986c926.js";import{n as L}from"./MultipassTerrainTest.glsl-e79d40de.js";import{e as T}from"./Normals.glsl-90e28525.js";import{r as f}from"./NormalUtils.glsl-a59958d7.js";import{e as U,o as E}from"./TransparencyPassType-cd195b0e.js";import{o as g}from"./FloatPassUniform-d2dfc562.js";const m=8;function j(o,e){o.attributes.add(v.FEATUREVALUE,"vec4");const i=o.vertex;i.code.add(r`bool isCapVertex() {
return featureValue.w == 1.0;
}`),i.uniforms.add(new w("size",a=>a.size)),e.vvSize?(i.uniforms.add(new n("vvSizeMinSize",a=>a.vvSizeMinSize)),i.uniforms.add(new n("vvSizeMaxSize",a=>a.vvSizeMaxSize)),i.uniforms.add(new n("vvSizeOffset",a=>a.vvSizeOffset)),i.uniforms.add(new n("vvSizeFactor",a=>a.vvSizeFactor)),i.code.add(r`vec2 getSize() {
return size * clamp(vvSizeOffset + featureValue.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).xz;
}`)):i.code.add(r`vec2 getSize(){
return size;
}`),e.vvOpacity?(i.constants.add("vvOpacityNumber","int",m),i.uniforms.add([new d("vvOpacityValues",a=>a.vvOpacityValues,m),new d("vvOpacityOpacities",a=>a.vvOpacityOpacities,m)]),i.code.add(r`vec4 applyOpacity(vec4 color) {
float value = featureValue.z;
if (value <= vvOpacityValues[0]) {
return vec4( color.xyz, vvOpacityOpacities[0]);
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return vec4( color.xyz, mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f));
}
}
return vec4( color.xyz, vvOpacityOpacities[vvOpacityNumber - 1]);
}`)):i.code.add(r`vec4 applyOpacity(vec4 color){
return color;
}`),e.vvColor?(i.constants.add("vvColorNumber","int",p),i.uniforms.add([new d("vvColorValues",a=>a.vvColorValues,p),new S("vvColorColors",a=>a.vvColorColors,p)]),i.code.add(r`vec4 getColor() {
float value = featureValue.y;
if (value <= vvColorValues[0]) {
return applyOpacity(vvColorColors[0]);
}
for (int i = 1; i < vvColorNumber; ++i) {
if (vvColorValues[i] >= value) {
float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
return applyOpacity(mix(vvColorColors[i-1], vvColorColors[i], f));
}
}
return applyOpacity(vvColorColors[vvColorNumber - 1]);
}`)):i.code.add(r`vec4 getColor(){
return applyOpacity(vec4(1, 1, 1, 1));
}`),o.include(h),o.attributes.add(v.PROFILERIGHT,"vec4"),o.attributes.add(v.PROFILEUP,"vec4"),o.attributes.add(v.PROFILEVERTEXANDNORMAL,"vec4"),i.code.add(r`vec3 calculateVPos() {
vec2 size = getSize();
vec3 origin = position;
vec3 right = profileRight.xyz;
vec3 up = profileUp.xyz;
vec3 forward = cross(up, right);
vec2 profileVertex = profileVertexAndNormal.xy * size;
vec2 profileNormal = profileVertexAndNormal.zw;
float positionOffsetAlongProfilePlaneNormal = 0.0;
float normalOffsetAlongProfilePlaneNormal = 0.0;`),i.code.add(r`if(!isCapVertex()) {
vec2 rotationRight = vec2(profileRight.w, profileUp.w);
float maxDistance = length(rotationRight);`),i.code.add(r`rotationRight = maxDistance > 0.0 ? normalize(rotationRight) : vec2(0, 0);
float rx = dot(profileVertex, rotationRight);
if (abs(rx) > maxDistance) {
vec2 rotationUp = vec2(-rotationRight.y, rotationRight.x);
float ry = dot(profileVertex, rotationUp);
profileVertex = rotationRight * maxDistance * sign(rx) + rotationUp * ry;
}
}else{
positionOffsetAlongProfilePlaneNormal = profileRight.w * size[0];
normalOffsetAlongProfilePlaneNormal = profileUp.w;
}
vec3 offset = right * profileVertex.x + up * profileVertex.y + forward * positionOffsetAlongProfilePlaneNormal;
return origin + offset;
}`),i.code.add(r`vec3 localNormal() {
vec3 right = profileRight.xyz;
vec3 up = profileUp.xyz;
vec3 forward = cross(up, right);
vec2 profileNormal = profileVertexAndNormal.zw;
vec3 normal = right * profileNormal.x + up * profileNormal.y;
if(isCapVertex()) {
normal += forward * profileUp.w;
}
return normal;
}`)}class lo extends V{constructor(){super(...arguments),this.size=z(1,1)}}function B(o){const e=new P,{vertex:i,fragment:a}=e;switch(x(i,o),e.varyings.add("vpos","vec3"),e.include(j,o),o.output!==t.Color&&o.output!==t.Alpha||(e.include(s,o),e.include(u,o),e.include(y,o),e.varyings.add("vnormal","vec3"),e.varyings.add("vcolor","vec4"),o.hasMultipassTerrain&&e.varyings.add("depth","float"),i.code.add(r`
      void main() {
        vpos = calculateVPos();
        vnormal = normalize(localNormal());

        ${o.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        gl_Position = transformPosition(proj, view, vpos);

        ${o.output===t.Color?"forwardLinearDepth();":""}

        vcolor = getColor();
      }
    `)),e.include(L,o),o.output){case t.Alpha:e.include(c,o),a.uniforms.add(new g("opacity",l=>l.opacity)),a.code.add(r`
      void main() {
        discardBySlice(vpos);
        ${o.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        float combinedOpacity = vcolor.a * opacity;
        gl_FragColor = vec4(combinedOpacity);
      }
    `);break;case t.Color:e.include(c,o),e.include(A,o),e.include(_,o),e.include(u,o),e.include(T,o),b(a,o),R(a),D(a),a.uniforms.add([i.uniforms.get("localOrigin"),new n("ambient",l=>l.ambient),new n("diffuse",l=>l.diffuse),new n("specular",l=>l.specular),new g("opacity",l=>l.opacity)]),a.include(U),M(a),a.code.add(r`
        void main() {
          discardBySlice(vpos);
          ${o.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

          shadingParams.viewDirection = normalize(vpos - cameraPosition);
          shadingParams.normalView = vnormal;
          vec3 normal = shadingNormal(shadingParams);
          float ssao = evaluateAmbientOcclusionInverse();

          float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
          vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
          ${o.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":o.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
          vec3 albedo = vcolor.rgb * max(ambient, diffuse); // combine the old material parameters into a single one
          float combinedOpacity = vcolor.a * opacity;
          albedo += 0.25 * specular; // don't completely ignore specular for now

          vec3 shadedColor = evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight);
          gl_FragColor = vec4(shadedColor, combinedOpacity);
          gl_FragColor = highlightSlice(gl_FragColor, vpos);
          ${o.transparencyPassType===E.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
        }
      `);break;case t.Depth:case t.Shadow:case t.ShadowHighlight:case t.ShadowExludeHighlight:e.include(s,o),O(e),e.varyings.add("depth","float"),i.code.add(r`void main() {
vpos = calculateVPos();
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
}`),e.include(c,o),e.include(N,o),a.code.add(r`void main() {
discardBySlice(vpos);
outputDepth(depth);
}`);break;case t.Normal:e.include(s,o),e.include(f,o),C(i),e.varyings.add("vnormal","vec3"),i.code.add(r`void main(void) {
vpos = calculateVPos();
vnormal = normalize((viewNormal * vec4(localNormal(), 1.0)).xyz);
gl_Position = transformPosition(proj, view, vpos);
}`),e.include(c,o),a.code.add(r`void main() {
discardBySlice(vpos);
vec3 normal = normalize(vnormal);
if (gl_FrontFacing == false) normal = -normal;
gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
}`);break;case t.Highlight:e.include(s,o),e.include(f,o),e.varyings.add("vnormal","vec3"),i.code.add(r`void main(void) {
vpos = calculateVPos();
gl_Position = transformPosition(proj, view, vpos);
}`),e.include(c,o),e.include($,o),a.code.add(r`void main() {
discardBySlice(vpos);
outputHighlight();
}`)}return e}const no=Object.freeze(Object.defineProperty({__proto__:null,build:B},Symbol.toStringTag,{value:"Module"}));export{B as F,no as _,lo as p};
