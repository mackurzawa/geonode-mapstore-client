(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[14831,98090],{532425:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(45697),i=n.n(r),o=n(124852),s=n.n(o);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(e){return e>100?"full":e>40?"medium":"small"},p=function(e){var t=e.size,n=e.style,r=void 0===n?{}:n,i=e.className,o=e.hidden;return s().createElement("div",{className:i,style:c({width:t,height:t,overflow:"hidden"},r)},!o&&s().createElement("div",{className:"mapstore-".concat(u(t),"-size-loader")}))};p.propTypes={size:i().number,className:i().string,style:i().object};const f=p},228261:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(124852),i=n.n(r),o=n(45697),s=n.n(o),a=["id","className","style","children"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function l(e){var t=e.id,n=e.className,r=e.style,o=e.children,s=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,a),l=n?" "+n:"";return i().createElement(i().Fragment,null,i().createElement("div",c({},s,{id:t,className:"gn-spinner".concat(l),style:r}),i().createElement("div",null)),o)}l.propTypes={id:s().string,className:s().string,style:s().object},l.defaultProps={};const u=l},51605:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r.Z});var r=n(228261)},93136:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>T});var r=n(124852),i=n.n(r),o=n(45697),s=n.n(o),a=n(171703),c=n(22222),l=n(322843),u=n(805346),p=n(757588),f=n(800827),h=n(532425),g=n(693473),m=n(51605),d=n(274621),y=n(925108),v=n(572036),b=n(162170),O=n(18576),j=n(73443),_=n(903828),E=n(452992),w=n(805803),P=n(782904),G=n(86638);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=(0,a.connect)((0,c.P1)([function(e){var t;return null==e||null===(t=e.gnsave)||void 0===t?void 0:t.saving}],(function(e){return{saving:e}})))((function(e){return e.saving?i().createElement("div",{style:{position:"absolute",width:"100%",height:"100%",backgroundColor:"rgba(255, 255, 255, 0.75)",top:"0px",zIndex:2e3,display:"flex",alignItems:"center",justifyContent:"center",right:"0px"}},i().createElement(h.Z,{size:150})):null}));function Z(e,t){var n=e.enabled,o=e.onClick,s=e.variant,a=e.size,c=e.loading,l=e.className,p=e.dirtyState,f=e.location,h=e.history,d=e.onStorePendingChanges,y=t.messages,v=(0,r.useRef)();return v.current=p,(0,r.useEffect)((function(){var e,t=null==h||null===(e=h.location)||void 0===e?void 0:e.pathname;function n(e){v.current&&((e||window.event).returnValue=null)}return window.addEventListener("beforeunload",n),function(){var e;window.removeEventListener("beforeunload",n),t!==(null==h||null===(e=h.location)||void 0===e?void 0:e.pathname)&&v.current&&(window.confirm((0,G.S$)(y,"gnviewer.prompPendingChanges"))?d(null):(d(v.current),h.replace(f)))}}),[]),n?i().createElement(g.Z,{variant:p?"warning":s||"primary",size:a,onClick:function(){return o()},disabled:c,className:l},i().createElement(u.Z,{msgId:"save"})," ",c&&i().createElement(m.Z,null)):null}Z.contextTypes={messages:s().object};var N=(0,a.connect)((0,c.P1)(d.jl,_.V$,_.il,f._H,E.IX,_.YR,(function(e,t,n,r,i,o){return{enabled:e&&!t&&(n||(null==r?void 0:r.canEdit)),loading:i,dirtyState:o}})),{onClick:j.nY,onStorePendingChanges:P.Xg.bind(null,"pendingChanges","value")})((0,w.EN)(Z));const T=(0,l.rx)("Save",{component:x,containers:{BurgerMenu:{name:"save",position:30,text:i().createElement(u.Z,{msgId:"save"}),icon:i().createElement(p.Glyphicon,{glyph:"floppy-open"}),action:j.nY,selector:(0,c.P1)(d.jl,_.V$,_.il,f._H,(function(e,t,n,r){return{style:e&&!t&&(n||null!=r&&r.canEdit)?{}:{display:"none"}}}))},ActionNavbar:{name:"Save",Component:N}},epics:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},O.ZP),reducers:{gnresource:v.Z,gnsave:b.Z,controls:y.Z}})},798090:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var r=n(613002),i=n(173381),o=n(421915),s=n(208204),a=n(28795),c=n(913580);function l(e){for(var t=[],n=0,r=e.length;n<r;++n)t.push(e[n].clone());return t}const u=function(e){function t(t){e.call(this),this.geometries_=t||null,this.listenGeometriesChange_()}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.unlistenGeometriesChange_=function(){if(this.geometries_)for(var e=0,t=this.geometries_.length;e<t;++e)(0,r.Ev)(this.geometries_[e],i.Z.CHANGE,this.changed,this)},t.prototype.listenGeometriesChange_=function(){if(this.geometries_)for(var e=0,t=this.geometries_.length;e<t;++e)(0,r.oL)(this.geometries_[e],i.Z.CHANGE,this.changed,this)},t.prototype.clone=function(){var e=new t(null);return e.setGeometries(this.geometries_),e},t.prototype.closestPointXY=function(e,t,n,r){if(r<(0,o.qf)(this.getExtent(),e,t))return r;for(var i=this.geometries_,s=0,a=i.length;s<a;++s)r=i[s].closestPointXY(e,t,n,r);return r},t.prototype.containsXY=function(e,t){for(var n=this.geometries_,r=0,i=n.length;r<i;++r)if(n[r].containsXY(e,t))return!0;return!1},t.prototype.computeExtent=function(e){(0,o.YN)(e);for(var t=this.geometries_,n=0,r=t.length;n<r;++n)(0,o.l7)(e,t[n].getExtent());return e},t.prototype.getGeometries=function(){return l(this.geometries_)},t.prototype.getGeometriesArray=function(){return this.geometries_},t.prototype.getSimplifiedGeometry=function(e){if(this.simplifiedGeometryRevision!=this.getRevision()&&((0,c.ZH)(this.simplifiedGeometryCache),this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),e<0||0!==this.simplifiedGeometryMaxMinSquaredTolerance&&e<this.simplifiedGeometryMaxMinSquaredTolerance)return this;var n=e.toString();if(this.simplifiedGeometryCache.hasOwnProperty(n))return this.simplifiedGeometryCache[n];for(var r=[],i=this.geometries_,o=!1,s=0,a=i.length;s<a;++s){var l=i[s],u=l.getSimplifiedGeometry(e);r.push(u),u!==l&&(o=!0)}if(o){var p=new t(null);return p.setGeometriesArray(r),this.simplifiedGeometryCache[n]=p,p}return this.simplifiedGeometryMaxMinSquaredTolerance=e,this},t.prototype.getType=function(){return a.Z.GEOMETRY_COLLECTION},t.prototype.intersectsExtent=function(e){for(var t=this.geometries_,n=0,r=t.length;n<r;++n)if(t[n].intersectsExtent(e))return!0;return!1},t.prototype.isEmpty=function(){return 0===this.geometries_.length},t.prototype.rotate=function(e,t){for(var n=this.geometries_,r=0,i=n.length;r<i;++r)n[r].rotate(e,t);this.changed()},t.prototype.scale=function(e,t,n){var r=n;r||(r=(0,o.qg)(this.getExtent()));for(var i=this.geometries_,s=0,a=i.length;s<a;++s)i[s].scale(e,t,r);this.changed()},t.prototype.setGeometries=function(e){this.setGeometriesArray(l(e))},t.prototype.setGeometriesArray=function(e){this.unlistenGeometriesChange_(),this.geometries_=e,this.listenGeometriesChange_(),this.changed()},t.prototype.applyTransform=function(e){for(var t=this.geometries_,n=0,r=t.length;n<r;++n)t[n].applyTransform(e);this.changed()},t.prototype.translate=function(e,t){for(var n=this.geometries_,r=0,i=n.length;r<i;++r)n[r].translate(e,t);this.changed()},t.prototype.disposeInternal=function(){this.unlistenGeometriesChange_(),e.prototype.disposeInternal.call(this)},t}(s.Z)}}]);