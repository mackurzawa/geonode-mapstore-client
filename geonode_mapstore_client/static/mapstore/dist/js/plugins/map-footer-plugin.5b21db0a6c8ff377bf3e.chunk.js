(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[77785],{643526:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>P});var n=r(124852),o=r.n(n),i=r(45697),c=r.n(i),a=r(658252),u=r(867076);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function m(t,e){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},m(t,e)}function d(t,e){if(e&&("object"===l(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return b(t)}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},h(t)}function g(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var v={},w=(0,u.lifecycle)({componentDidMount:function(){if(v[this.props.id]){var t=document.getElementById(this.props.id);t&&t.parentNode&&!t.hasChildNodes()&&t.parentNode.replaceChild(v[this.props.id],t)}},shouldComponentUpdate:function(){return!1},componentWillUnmount:function(){v[this.props.id]=document.getElementById(this.props.id)}})((function(t){var e=t.id;return o().createElement("div",{id:e})})),O=[{element:o().createElement(w,{key:"attribution",id:"footer-attribution-container"})},{element:o().createElement(w,{key:"scalebar",id:"footer-scalebar-container"})}],j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}(u,t);var e,r,n,i,c=(n=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=h(n);if(i){var r=h(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return d(this,t)});function u(){var t;p(this,u);for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return g(b(t=c.call.apply(c,[this].concat(r))),"getPanels",(function(){return t.props.items.filter((function(t){return t.tools})).reduce((function(t,e){return t.concat(e.tools.map((function(t,r){return{name:e.name+r,panel:t,cfg:e.cfg.toolsCfg?e.cfg.toolsCfg[r]:{}}})))}),[])})),g(b(t),"getTools",(function(){return[O[0]].concat(s(t.props.items.sort((function(t,e){return e.position-t.position}))),[O[1]])})),t}return e=u,(r=[{key:"render",value:function(){return o().createElement(a.Z,{id:this.props.id,style:this.props.style,className:this.props.className,mapType:this.props.mapType,container:function(t){return o().createElement("div",t,t.children)},toolStyle:"primary",activeStyle:"default",stateSelector:"mapFooter",tool:function(t){return o().createElement("div",null,t.children)},tools:this.getTools(),panels:this.getPanels()})}}])&&y(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(o().Component);g(j,"propTypes",{className:c().string,style:c().object,items:c().array,id:c().string,mapType:c().string}),g(j,"defaultProps",{items:[],className:"mapstore-map-footer",style:{},id:"mapstore-map-footer",mapType:"leaflet"});const P={MapFooterPlugin:j,reducers:{}}}}]);