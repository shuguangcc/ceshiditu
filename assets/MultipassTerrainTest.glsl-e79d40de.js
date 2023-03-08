import{a as i}from"./ReadLinearDepth.glsl-7ff30f7d.js";import{f as o,e as n}from"./Texture2DPassUniform-6e8ae673.js";import{n as f}from"./ShaderBuilder-93e8045e.js";function p(e,t){t.hasMultipassTerrain&&(e.fragment.include(i),e.fragment.uniforms.add(new o("terrainDepthTexture",(a,r)=>r.multipassTerrain.linearDepthTexture)),e.fragment.uniforms.add(new n("nearFar",(a,r)=>r.camera.nearFar)),e.fragment.uniforms.add(new n("inverseViewport",(a,r)=>r.inverseViewport)),e.fragment.code.add(f`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `))}class u{constructor(){this.enabled=!1,this.cullAboveGround=!1}}export{p as n,u as o};
