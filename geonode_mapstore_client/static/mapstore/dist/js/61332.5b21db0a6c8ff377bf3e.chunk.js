(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[61332],{232062:(t,e,o)=>{"use strict";o.d(e,{Z:()=>i});const i=function(t){function e(e,o,i,n,r){t.call(this,e,o,r),this.originalEvent=i,this.pixel=o.getEventPixel(i),this.coordinate=o.getCoordinateFromPixel(this.pixel),this.dragging=void 0!==n&&n}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.preventDefault=function(){t.prototype.preventDefault.call(this),this.originalEvent.preventDefault()},e.prototype.stopPropagation=function(){t.prototype.stopPropagation.call(this),this.originalEvent.stopPropagation()},e}(o(110255).Z)},486968:(t,e,o)=>{"use strict";o.d(e,{Z:()=>i});const i=function(t){function e(e,o,i,n,r){t.call(this,e,o,i.originalEvent,n,r),this.pointerEvent=i}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(o(232062).Z)},110255:(t,e,o)=>{"use strict";o.d(e,{Z:()=>i});const i=function(t){function e(e,o,i){t.call(this,e),this.map=o,this.frameState=void 0!==i?i:null}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(o(9520).ZP)},634681:(t,e,o)=>{"use strict";o.d(e,{Z:()=>n});var i=function(t,e){this.dispatcher=t,this.mapping_=e};i.prototype.getEvents=function(){return Object.keys(this.mapping_)},i.prototype.getHandlerForEvent=function(t){return this.mapping_[t]};const n=i},468338:(t,e,o)=>{"use strict";o.d(e,{yA:()=>n,T2:()=>r,R:()=>l,ZP:()=>h});var i=o(634681),n=1,r="mouse";function s(t){if(!this.isEventSimulatedFromTouch_(t)){n.toString()in this.pointerMap&&this.cancel(t);var e=l(t,this.dispatcher);this.pointerMap[n.toString()]=t,this.dispatcher.down(e,t)}}function p(t){if(!this.isEventSimulatedFromTouch_(t)){var e=l(t,this.dispatcher);this.dispatcher.move(e,t)}}function c(t){if(!this.isEventSimulatedFromTouch_(t)){var e=this.pointerMap[n.toString()];if(e&&e.button===t.button){var o=l(t,this.dispatcher);this.dispatcher.up(o,t),this.cleanupMouse()}}}function a(t){if(!this.isEventSimulatedFromTouch_(t)){var e=l(t,this.dispatcher);this.dispatcher.enterOver(e,t)}}function u(t){if(!this.isEventSimulatedFromTouch_(t)){var e=l(t,this.dispatcher);this.dispatcher.leaveOut(e,t)}}function l(t,e){var o=e.cloneEvent(t,t),i=o.preventDefault;return o.preventDefault=function(){t.preventDefault(),i()},o.pointerId=n,o.isPrimary=!0,o.pointerType=r,o}const h=function(t){function e(e){var o={mousedown:s,mousemove:p,mouseup:c,mouseover:a,mouseout:u};t.call(this,e,o),this.pointerMap=e.pointerMap,this.lastTouches=[]}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.isEventSimulatedFromTouch_=function(t){for(var e=this.lastTouches,o=t.clientX,i=t.clientY,n=0,r=e.length,s=void 0;n<r&&(s=e[n]);n++){var p=Math.abs(o-s[0]),c=Math.abs(i-s[1]);if(p<=25&&c<=25)return!0}return!1},e.prototype.cancel=function(t){var e=l(t,this.dispatcher);this.dispatcher.cancel(e,t),this.cleanupMouse()},e.prototype.cleanupMouse=function(){delete this.pointerMap[n.toString()]},e}(i.Z)},315565:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>s});var i=o(898185),n=o(378288),r=function(t){var e=t||{};this.font_=e.font,this.rotation_=e.rotation,this.rotateWithView_=e.rotateWithView,this.scale_=e.scale,this.text_=e.text,this.textAlign_=e.textAlign,this.textBaseline_=e.textBaseline,this.fill_=void 0!==e.fill?e.fill:new i.default({color:"#333"}),this.maxAngle_=void 0!==e.maxAngle?e.maxAngle:Math.PI/4,this.placement_=void 0!==e.placement?e.placement:n.Z.POINT,this.overflow_=!!e.overflow,this.stroke_=void 0!==e.stroke?e.stroke:null,this.offsetX_=void 0!==e.offsetX?e.offsetX:0,this.offsetY_=void 0!==e.offsetY?e.offsetY:0,this.backgroundFill_=e.backgroundFill?e.backgroundFill:null,this.backgroundStroke_=e.backgroundStroke?e.backgroundStroke:null,this.padding_=void 0===e.padding?null:e.padding};r.prototype.clone=function(){return new r({font:this.getFont(),placement:this.getPlacement(),maxAngle:this.getMaxAngle(),overflow:this.getOverflow(),rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),scale:this.getScale(),text:this.getText(),textAlign:this.getTextAlign(),textBaseline:this.getTextBaseline(),fill:this.getFill()?this.getFill().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,offsetX:this.getOffsetX(),offsetY:this.getOffsetY(),backgroundFill:this.getBackgroundFill()?this.getBackgroundFill().clone():void 0,backgroundStroke:this.getBackgroundStroke()?this.getBackgroundStroke().clone():void 0})},r.prototype.getOverflow=function(){return this.overflow_},r.prototype.getFont=function(){return this.font_},r.prototype.getMaxAngle=function(){return this.maxAngle_},r.prototype.getPlacement=function(){return this.placement_},r.prototype.getOffsetX=function(){return this.offsetX_},r.prototype.getOffsetY=function(){return this.offsetY_},r.prototype.getFill=function(){return this.fill_},r.prototype.getRotateWithView=function(){return this.rotateWithView_},r.prototype.getRotation=function(){return this.rotation_},r.prototype.getScale=function(){return this.scale_},r.prototype.getStroke=function(){return this.stroke_},r.prototype.getText=function(){return this.text_},r.prototype.getTextAlign=function(){return this.textAlign_},r.prototype.getTextBaseline=function(){return this.textBaseline_},r.prototype.getBackgroundFill=function(){return this.backgroundFill_},r.prototype.getBackgroundStroke=function(){return this.backgroundStroke_},r.prototype.getPadding=function(){return this.padding_},r.prototype.setOverflow=function(t){this.overflow_=t},r.prototype.setFont=function(t){this.font_=t},r.prototype.setMaxAngle=function(t){this.maxAngle_=t},r.prototype.setOffsetX=function(t){this.offsetX_=t},r.prototype.setOffsetY=function(t){this.offsetY_=t},r.prototype.setPlacement=function(t){this.placement_=t},r.prototype.setFill=function(t){this.fill_=t},r.prototype.setRotation=function(t){this.rotation_=t},r.prototype.setScale=function(t){this.scale_=t},r.prototype.setStroke=function(t){this.stroke_=t},r.prototype.setText=function(t){this.text_=t},r.prototype.setTextAlign=function(t){this.textAlign_=t},r.prototype.setTextBaseline=function(t){this.textBaseline_=t},r.prototype.setBackgroundFill=function(t){this.backgroundFill_=t},r.prototype.setBackgroundStroke=function(t){this.backgroundStroke_=t},r.prototype.setPadding=function(t){this.padding_=t};const s=r},378288:(t,e,o)=>{"use strict";o.d(e,{Z:()=>i});const i={POINT:"point",LINE:"line"}}}]);