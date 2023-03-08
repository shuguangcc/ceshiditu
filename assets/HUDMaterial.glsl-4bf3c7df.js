import{r as g}from"./typedArrayUtil-a8b5b3e9.js";import{r as x,a as F}from"./vec2-2cef68de.js";import{i as D,n as A}from"./vec2f64-30dc1443.js";import{l as O}from"./vec4f64-e407da96.js";import{e as _}from"./sdfPrimitives-a24e9cb2.js";import{h as d}from"./Matrix3PassUniform-da8eddae.js";import{u as T}from"./Slice.glsl-a612de15.js";import{d as $}from"./ObjectAndLayerIdColor.glsl-73c19386.js";import{b as B,c as H,u as E}from"./HUD.glsl-80cf9a21.js";import{a as M}from"./ReadLinearDepth.glsl-7ff30f7d.js";import{a as S}from"./RgbaFloatEncoding.glsl-6036ca34.js";import{u as V,a as h,e as v,i as L,f as R}from"./Texture2DPassUniform-6e8ae673.js";import{n as t,o as U}from"./ShaderBuilder-93e8045e.js";import{a as I}from"./OutputHighlight.glsl-7364b03b.js";import{s as G}from"./VisualVariables.glsl-b8290512.js";import{t as m,o as C}from"./AlphaCutoff-96178e0d.js";import{e as k,o as q}from"./TransparencyPassType-cd195b0e.js";import{c as W,t as N,i as X}from"./VerticalOffset.glsl-86460edb.js";import{e as u}from"./Float4PassUniform-3a47b7b3.js";import{G as Z,H as b,t as J}from"./VisualVariablePassParameters-5807c7dc.js";import{o as P}from"./FloatPassUniform-d2dfc562.js";import{O as p}from"./VertexAttribute-9c5c630d.js";function K(e,o){const{vertex:a,fragment:r}=e;o.hasMultipassGeometry&&a.include(B),o.hasMultipassTerrain&&e.varyings.add("depth","float"),a.code.add(t`
  void main(void) {
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel
      // filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${o.hasMultipassGeometry?t`
        // Don't draw vertices behind geometry
        if(geometryDepthTest(.5 + .5 * posProjCenter.xy / posProjCenter.w, projectAux.posView.z)){
          posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
        }`:""}

      ${o.hasMultipassTerrain?"depth = projectAux.posView.z;":""}
      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        // Project out of clip space
        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
      }

    } else {
      // Project out of clip space
      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
    }

    gl_Position = posProjCenter;
    gl_PointSize = 1.0;
  }
  `),o.hasMultipassTerrain&&r.include(M),o.hasMultipassTerrain&&r.uniforms.add([...V("terrainDepthTexture",(l,n)=>n.multipassTerrain.linearDepthTexture,o.hasWebGL2Context?h.None:h.InvSize),new v("nearFar",(l,n)=>n.camera.nearFar)]),r.include(S),r.code.add(t`
  void main() {
    gl_FragColor = vec4(1, 1, 1, 1);
    ${o.hasMultipassTerrain?t`
          vec2 uv = gl_FragCoord.xy;

          // Read the rgba data from the texture linear depth
          vec4 terrainDepthData = ${L(o,"terrainDepthTexture","uv")};

          float terrainDepth = linearDepthFromFloat(rgba2float(terrainDepthData), nearFar);

          // If HUD vertex is behind terrain and the terrain depth is not the initialize value (e.g. we are not looking at the sky)
          // Mark the HUD vertex as occluded by transparent terrain
          if(depth < terrainDepth && terrainDepthData != vec4(0,0,0,1)){
            gl_FragColor.g = 0.5;
          }`:""}
  }
  `)}function Q(e){const o=new U,a=e.signedDistanceFieldEnabled;if(o.include(H),o.include(E,e),o.include(T,e),e.occlusionPass)return o.include(K,e),o;const{vertex:r,fragment:l}=o;o.include(W),l.include(S),l.include(k),o.include(G,e),o.include($,e),o.varyings.add("vcolor","vec4"),o.varyings.add("vtc","vec2"),o.varyings.add("vsize","vec2"),e.binaryHighlightOcclusionEnabled&&o.varyings.add("voccluded","float"),r.uniforms.add([new u("viewport",(i,s)=>s.camera.fullViewport),new v("screenOffset",(i,s)=>x(w,2*i.screenOffset[0]*s.camera.pixelRatio,2*i.screenOffset[1]*s.camera.pixelRatio)),new v("anchorPosition",i=>j(i)),new u("materialColor",i=>i.color),new P("pixelRatio",(i,s)=>s.camera.pixelRatio)]),a&&(r.uniforms.add(new u("outlineColor",i=>i.outlineColor)),l.uniforms.add([new u("outlineColor",i=>z(i)?i.outlineColor:O),new P("outlineSize",i=>z(i)?i.outlineSize:0)])),e.hasScreenSizePerspective&&(N(r),X(r)),(e.debugDrawLabelBorder||e.binaryHighlightOcclusionEnabled)&&o.varyings.add("debugBorderCoords","vec4"),o.attributes.add(p.UV0,"vec2"),o.attributes.add(p.COLOR,"vec4"),o.attributes.add(p.SIZE,"vec2"),o.attributes.add(p.AUXPOS2,"vec4"),r.code.add(t`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      forwardObjectAndLayerIdColor();

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }
      vec2 inputSize;
      ${e.hasScreenSizePerspective?t`
      inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
      vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
         `:t`
      inputSize = size;
      vec2 screenOffsetScaled = screenOffset;`}

      ${e.vvSize?"inputSize *= vvScale(auxpos2).xx;":""}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);

      ${e.occlusionTestEnabled||e.binaryHighlightOcclusionEnabled?"bool visible = testVisibilityHUD(posProj);":""}

      ${e.binaryHighlightOcclusionEnabled?"voccluded = visible ? 0.0 : 1.0;":""}
    `);const n=t`vec2 uv01 = floor(uv0);
vec2 uv = uv0 - uv01;
quadOffset.xy = ((uv01 - anchorPosition) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;`,y=e.pixelSnappingEnabled?a?t`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:t`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:t`posProj += quadOffset;`;e.vvColor&&r.uniforms.add([new Z("vvColorColors",i=>i.vvColorColors,b),new J("vvColorValues",i=>i.vvColorValues,b)]),r.uniforms.add(new v("textureCoordinateScaleFactor",i=>g(i.texture)&&g(i.texture.descriptor.textureCoordinateScaleFactor)?i.texture.descriptor.textureCoordinateScaleFactor:D)),r.code.add(t`
    ${e.occlusionTestEnabled?"if (visible) {":""}
    ${n}
    ${e.vvColor?"vcolor = vvGetColor(auxpos2, vvColorValues, vvColorColors) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    bool alphaDiscard = vcolor.a < ${t.float(m)};
    ${a?`alphaDiscard = alphaDiscard && outlineColor.a < ${t.float(m)};`:""}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${y}
      gl_Position = posProj;
    }

    vtc = uv * textureCoordinateScaleFactor;

    ${e.debugDrawLabelBorder?"debugBorderCoords = vec4(uv01, 1.5 / combinedSize);":""}
    vsize = inputSize;
    ${e.occlusionTestEnabled?t`} else { vtc = vec2(0.0);
      ${e.debugDrawLabelBorder?"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);}":"}"}`:""}
  }
  `),l.uniforms.add(new R("tex",i=>i.texture));const f=e.debugDrawLabelBorder?t`(isBorder > 0.0 ? 0.0 : ${t.float(C)})`:t.float(C),c=t`
    ${e.debugDrawLabelBorder?t`
      float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`:""}

    ${a?t`
      vec4 fillPixelColor = vcolor;

      // Attempt to sample texel centers to avoid that thin cross outlines
      // disappear with large symbol sizes.
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041
      const float txSize = ${t.float(_)};
      const float texelSize = 1.0 / txSize;
      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgba2float(texture2D(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${f} ||
          fillPixelColor.a + outlinePixelColor.a < ${t.float(m)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        gl_FragColor = vec4(compositeColor, compositeAlpha);
      } else {
        if (fillAlphaFactor < ${f}) {
          discard;
        }

        gl_FragColor = premultiplyAlpha(fillPixelColor);
      }

      // visualize SDF:
      // gl_FragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:t`
          vec4 texColor = texture2D(tex, vtc, -0.5);
          if (texColor.a < ${f}) {
            discard;
          }
          gl_FragColor = texColor * premultiplyAlpha(vcolor);
          `}

    // Draw debug border with transparency, so that original texels along border are still partially visible
    ${e.debugDrawLabelBorder?t`gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`:""}
  `;return e.output===d.Alpha&&l.code.add(t`
      void main() {
        ${c}
        gl_FragColor = vec4(gl_FragColor.a);
      }
      `),e.output===d.ObjectAndLayerIdColor&&l.code.add(t`
      void main() {
        ${c}
        outputObjectAndLayerIdColor();
      }
      `),e.output===d.Color&&l.code.add(t`
    void main() {
      ${c}
      ${e.transparencyPassType===q.FrontFace?"gl_FragColor.rgb /= gl_FragColor.a;":""}
    }
    `),e.output===d.Highlight&&(o.include(I,e),l.code.add(t`
    void main() {
      ${c}
      ${e.binaryHighlightOcclusionEnabled?t`
          if (voccluded == 1.0) {
            gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
          } else {
            gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
          }`:"outputHighlight();"}
    }
    `)),o}function z(e){return e.outlineColor[3]>0&&e.outlineSize>0}function j(e,o=w){return e.textureIsSignedDistanceField?Y(e.anchorPosition,e.distanceFieldBoundingBox,o):F(o,e.anchorPosition),o}function Y(e,o,a){g(o)?x(a,e[0]*(o[2]-o[0])+o[0],e[1]*(o[3]-o[1])+o[1]):x(a,0,0)}const w=A(),ze=Object.freeze(Object.defineProperty({__proto__:null,build:Q,calculateAnchorPosForRendering:j},Symbol.toStringTag,{value:"Module"}));export{Q as B,j as H,ze as V};
