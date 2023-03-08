import{e as l}from"./typedArrayUtil-a8b5b3e9.js";import{r as c}from"./vec2-2cef68de.js";import{n as h}from"./vec2f64-30dc1443.js";import{o as g}from"./ScreenSpacePass-00f8c8a4.js";import{a as P}from"./ReadLinearDepth.glsl-7ff30f7d.js";import{r as f}from"./vec4-790471c0.js";import{n as y}from"./vec4f64-e407da96.js";import{e as n,f as i}from"./Texture2DPassUniform-6e8ae673.js";import{e as S}from"./Float4PassUniform-3a47b7b3.js";import{n as a,o as w}from"./ShaderBuilder-93e8045e.js";import{o as s}from"./FloatPassUniform-d2dfc562.js";function z(r){r.fragment.uniforms.add(new S("projInfo",(e,t)=>F(t))),r.fragment.uniforms.add(new n("zScale",(e,t)=>x(t))),r.fragment.code.add(a`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function F(r){const e=r.camera.projectionMatrix;return e[11]===0?f(m,2/(r.camera.fullWidth*e[0]),2/(r.camera.fullHeight*e[5]),(1+e[12])/e[0],(1+e[13])/e[5]):f(m,-2/(r.camera.fullWidth*e[0]),-2/(r.camera.fullHeight*e[5]),(1-e[8])/e[0],(1-e[9])/e[5])}const m=y();function x(r){return r.camera.projectionMatrix[11]===0?c(u,0,1):c(u,1,0)}const u=h(),p=16,T=.5;function b(){const r=new w,e=r.fragment;return r.include(g),e.include(P),r.include(z),e.uniforms.add(new s("radius",(t,o)=>d(o))),e.code.add(a`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn-bias, 0.0);
}`),e.code.add(a`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.uniforms.add([new n("nearFar",(t,o)=>o.camera.nearFar),new i("normalMap",t=>t.normalTexture),new i("depthMap",t=>t.depthTexture),new n("zScale",(t,o)=>x(o)),new s("projScale",t=>t.projScale),new i("rnm",t=>t.noiseTexture),new n("rnmScale",(t,o)=>c(v,o.camera.fullWidth/l(t.noiseTexture).descriptor.width,o.camera.fullHeight/l(t.noiseTexture).descriptor.height)),new s("intensity",(t,o)=>4*T/d(o)**6),new n("screenSize",(t,o)=>c(v,o.camera.fullWidth,o.camera.fullHeight))]),e.code.add(a`
    void main(void) {
      fillSphere();
      vec3 fres = normalize((texture2D(rnm, uv * rnmScale).xyz * 2.0) - vec3(1.0));
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
        gl_FragColor = vec4(0.0);
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy,currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture2D(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w<0.5;

      float sum = .0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${a.int(p)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        //don't use current or very nearby samples
        if ( abs(offset.x)<2.0 || abs(offset.y)<2.0) continue;

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        if (isTerrain) {
          bool isTerrainTap = texture2D(normalMap, tcTap).w<0.5;
          if (isTerrainTap) {
            continue;
          }
        }

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum+= aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${a.int(p)}),0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4)/2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;
      gl_FragColor = vec4(A);
    }
  `),r}function d(r){return Math.max(10,20*r.camera.computeRenderPixelSizeAtDist(Math.abs(4*r.camera.relativeElevation)))}const v=h(),k=Object.freeze(Object.defineProperty({__proto__:null,build:b},Symbol.toStringTag,{value:"Module"}));export{b as d,z as n,k as x};
