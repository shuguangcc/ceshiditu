import{a as h,d as g}from"./ForwardLinearDepth.glsl-36f9eb3b.js";import{p as C,o as y,d as b,g as $,s,a as m,h as w}from"./MixExternalColor.glsl-25f0049c.js";import{h as d}from"./Matrix3PassUniform-da8eddae.js";import{u as p}from"./Slice.glsl-a612de15.js";import{r as O}from"./Transform.glsl-f15542a7.js";import{o as M,h as _,v as E,a as L,x as A,g as F,c as T,b as n}from"./PhysicallyBasedRendering.glsl-a986c926.js";import{e as S}from"./VertexColor.glsl-db21b96c.js";import{a as N}from"./VerticalOffset.glsl-86460edb.js";import{p as P,d as D,f as B,u as V}from"./EvaluateSceneLighting.glsl-3bbc6edf.js";import{n as v}from"./MultipassTerrainTest.glsl-e79d40de.js";import{s as z}from"./VisualVariables.glsl-b8290512.js";import{t as k}from"./AlphaCutoff-96178e0d.js";import{v as G,c as u,a as f}from"./View.glsl-8b12b8c2.js";import{e as R}from"./Float4PassUniform-3a47b7b3.js";import{o as c}from"./FloatPassUniform-d2dfc562.js";import{o as j,n as a}from"./ShaderBuilder-93e8045e.js";import{f as x}from"./Texture2DPassUniform-6e8ae673.js";import{o as W}from"./TransparencyPassType-cd195b0e.js";import{O as U}from"./VertexAttribute-9c5c630d.js";function q(o){const e=new j,{vertex:t,fragment:i,varyings:l}=e;return G(t,o),e.include(h),l.add("vpos","vec3"),e.include(z,o),e.include(C,o),e.include(N,o),o.output!==d.Color&&o.output!==d.Alpha||(u(e.vertex,o),e.include(y,o),e.include(O,o),o.offsetBackfaces&&e.include(b),o.instancedColor&&e.attributes.add(U.INSTANCECOLOR,"vec4"),l.add("vNormalWorld","vec3"),l.add("localvpos","vec3"),o.hasMultipassTerrain&&l.add("depth","float"),e.include(M,o),e.include(g,o),e.include($,o),e.include(S,o),t.uniforms.add(new R("externalColor",r=>r.externalColor)),l.add("vcolorExt","vec4"),t.code.add(a`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${o.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${a.float(k)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${o.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${o.hasMultipassTerrain?a`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),o.output===d.Alpha&&(e.include(p,o),e.include(s,o),e.include(v,o),i.uniforms.add([new c("opacity",r=>r.opacity),new c("layerOpacity",r=>r.layerOpacity)]),o.hasColorTexture&&i.uniforms.add(new x("tex",r=>r.texture)),i.include(m),i.code.add(a`
      void main() {
        discardBySlice(vpos);
        ${o.hasMultipassTerrain?a`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${o.hasColorTexture?a`
                vec4 texColor = texture2D(tex, ${o.hasColorTextureTransform?a`colorUV`:a`vuv0`});
                ${o.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:a`vec4 texColor = vec4(1.0);`}
        ${o.hasVertexColors?a`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:a`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        gl_FragColor = vec4(opacity_);
      }
    `)),o.output===d.Color&&(e.include(p,o),e.include(P,o),e.include(D,o),e.include(s,o),e.include(o.instancedDoublePrecision?_:E,o),e.include(v,o),u(e.fragment,o),L(i),B(i),V(i),i.uniforms.add([t.uniforms.get("localOrigin"),t.uniforms.get("view"),new f("ambient",r=>r.ambient),new f("diffuse",r=>r.diffuse),new c("opacity",r=>r.opacity),new c("layerOpacity",r=>r.layerOpacity)]),o.hasColorTexture&&i.uniforms.add(new x("tex",r=>r.texture)),e.include(A,o),e.include(F,o),i.include(m),e.extensions.add("GL_OES_standard_derivatives"),T(i),i.code.add(a`
      void main() {
        discardBySlice(vpos);
        ${o.hasMultipassTerrain?a`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${o.hasColorTexture?a`
                vec4 texColor = texture2D(tex, ${o.hasColorTextureTransform?a`colorUV`:a`vuv0`});
                ${o.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:a`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${o.pbrMode===n.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${o.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":o.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${o.hasVertexColors?a`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:a`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${o.snowCover?a`albedo = mix(albedo, vec3(1), 0.9);`:a``}
        ${a`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${o.pbrMode===n.Normal||o.pbrMode===n.Schematic?o.spherical?a`vec3 normalGround = normalize(vpos + localOrigin);`:a`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:a``}
        ${o.pbrMode===n.Normal||o.pbrMode===n.Schematic?a`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${o.snowCover?a`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:a`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${o.transparencyPassType===W.Color?a`gl_FragColor = premultiplyAlpha(gl_FragColor);`:a``}
      }
    `)),e.include(w,o),e}const po=Object.freeze(Object.defineProperty({__proto__:null,build:q},Symbol.toStringTag,{value:"Module"}));export{q as I,po as R};
