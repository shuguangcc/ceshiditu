import{e as o,n as s}from"./cast-7928d7aa.js";import"./Error-653283ae.js";import"./ensureType-cf29afa9.js";import"./typedArrayUtil-a8b5b3e9.js";import"./string-cdf077e6.js";import{I as d}from"./enums-4ca4641f.js";import{t as a}from"./BaseGraphicContainer-aa7dd916.js";import{_ as h}from"./enums-64ab819c.js";let e=class extends a{doRender(r){r.drawPhase===d.HIGHLIGHT&&super.doRender(r)}renderChildren(r){if(this.attributeView.update(),!this.children.some(n=>n.hasData))return;this.attributeView.bindTextures(r.context),super.renderChildren(r);const{painter:i}=r,t=i.effects.highlight;t.bind(r),r.context.setColorMask(!0,!0,!0,!0),r.context.clear(h.COLOR_BUFFER_BIT),this._renderChildren(r,t.defines.concat(["highlightAll"])),t.draw(r),t.unbind()}};e=o([s("esri.views.2d.layers.support.HighlightGraphicContainer")],e);const C=e;export{C as n};