(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[41103],{399534:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(461365),o=n(569334);const l=(0,r.Z)(o.h_)},993451:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var r=n(86638),o=n(45697),l=n.n(o),a=n(984596),i=n.n(a),c=n(701469),u=n.n(c),s=n(414293),d=n.n(s),f=n(747037),v=n.n(f),p=n(867076),b=["messages"];function g(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"label";if(u()(t))return t.map((function(o){var l=(0,r.S$)(e,o[n]||v()(o)&&o||"");return y(y({},o),{},O({},n,d()(l)?t:l))}));var o=(0,r.S$)(e,t);return d()(o)?t:o},j=function(e,t,n){return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;return y(y({},r),{},O({},o,e[o]&&h(t,e[o],n)))}};const E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label";return(0,p.compose)((0,p.getContext)({messages:l().object}),(0,p.mapProps)((function(n){var r=n.messages,o=g(n,b);return y(y({},o),i()(e).reduce(j(o,r,t),{}))})))}},716333:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>A});var r=n(124852),o=n.n(r),l=n(171703),a=n(22222),i=n(322843),c=n(782904),u=n(805346),s=n(757588),d=n(800827),f=n(274621),v=n(693473),p=n(73443),b=n(925108),g=n(572036),m=n(162170),y=n(18576),O=n(236368),h=n(903828),j=n(12530),E=n(643892),S=n(452992),C=["resources","onSave","onCopy","isNew","closeOnSave","labelId"];function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){Z(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=(0,l.connect)((0,a.P1)([function(e){var t,n;return null==e||null===(t=e.controls)||void 0===t||null===(n=t[j.zj.COPY_RESOURCE])||void 0===n?void 0:n.value},d._H,function(e){var t;return null==e||null===(t=e.gnresource)||void 0===t?void 0:t.loading},function(e){var t;return null==e||null===(t=e.gnsave)||void 0===t?void 0:t.saving},function(e){var t;return null==e||null===(t=e.gnsave)||void 0===t?void 0:t.error},function(e){var t;return null==e||null===(t=e.gnsave)||void 0===t?void 0:t.success},h.fg,h.V$,S.SJ],(function(e,t,n,r,o,l,a,i,c){return{enabled:!!e,contentId:a||(null==t?void 0:t.id),resource:null==e?void 0:e[0],loading:c||n,saving:r,error:o,success:l,isNew:i}})),{onClose:c.Xg.bind(null,j.zj.COPY_RESOURCE,"value",void 0),onSave:p.Vj,onCopy:E.EU.bind(null,j.zj.COPY_RESOURCE),onClear:p.rG})((function(e){e.resources;var t,n=e.onSave,r=e.onCopy,l=e.isNew,a=e.closeOnSave,i=e.labelId,c=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,C);return o().createElement(O.Z,P({},c,{hideDescription:!l,copy:!l,key:(null==c||null===(t=c.resource)||void 0===t?void 0:t.pk)||"new",labelId:i||"save",onSave:function(e,t,o){var i;l?n(e,t,o):r([I(I({},null==c?void 0:c.resource),{},{title:t.name||(null==c||null===(i=c.resource)||void 0===i?void 0:i.title)})]),a&&c.onClose()}}))})),x=(0,l.connect)((0,a.P1)(f.jl,h.ez,h.yK,h.YR,h.V$,(function(e,t,n,r,o){return{enabled:e&&t&&((null==n?void 0:n.is_copyable)||o),resource:n,disabled:!!r}})),{onClick:c.Xg.bind(null,j.zj.COPY_RESOURCE,"value")})((function(e){var t=e.enabled,n=e.onClick,r=e.variant,l=e.size,a=e.resource,i=e.disabled;return t?o().createElement(v.Z,{variant:r||"primary",size:l,disabled:i,onClick:function(){return n([a])}},o().createElement(u.Z,{msgId:"saveAs"})):null}));const A=(0,i.rx)("SaveAs",{component:k,containers:{BurgerMenu:{name:"saveAs",position:30,text:o().createElement(u.Z,{msgId:"saveAs"}),icon:o().createElement(s.Glyphicon,{glyph:"floppy-open"}),action:c.Xg.bind(null,"saveAs",null),selector:(0,a.P1)(f.jl,h.ez,(function(e,t){return{style:e&&t?{}:{display:"none"}}}))},ActionNavbar:{name:"SaveAs",Component:x}},epics:I({},y.ZP),reducers:{gnresource:g.Z,gnsave:m.Z,controls:b.Z}})},236368:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(124852),o=n.n(r),l=n(45697),a=n.n(l),i=n(694745),c=n(805346),u=n(757588),s=n(993451),d=n(532425),f=n(399534);function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,l=[],a=!0,i=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);a=!0);}catch(e){i=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(i)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var b=(0,s.Z)("placeholder")(u.FormControl);function g(e){var t=e.update,n=e.error,l=e.success,a=e.labelId,s=e.resource,p=e.contentId,g=e.saving,m=e.loading,y=e.enabled,O=e.onClose,h=e.onSave,j=e.onClear,E=e.hideDescription,S=e.copy,C=v((0,r.useState)(),2),P=C[0],w=C[1],I=v((0,r.useState)(""),2),Z=I[0],k=I[1],x=v((0,r.useState)(""),2),A=x[0],D=x[1],_=v((0,r.useState)(!1),2),R=_[0],z=_[1],U=(0,r.useRef)();U.current={contentId:p,resource:s};var F=(0,r.useRef)(null);(0,r.useEffect)((function(){j()}),[y]),(0,r.useEffect)((function(){if(!m){var e=U.current.resource||{};w(e.thumbnail_url),k(e.title),D(e.abstract),z(e.title?void 0:"error")}}),[y,m]);var T=m||g;return o().createElement(f.Z,null,o().createElement("div",{ref:F,onKeyUp:function(e){return e.stopPropagation(),(13===e.keyCode||"Enter"===e.code)&&(r=(n=S?{title:Z,isUpdate:t,content:p,image:P,text:A,reload:!1}:{title:Z,isUpdate:t,content:p,image:P,text:A,reload:!0}).title,o=n.isUpdate,l=n.content,a=n.image,i=n.text,c=n.reload,h(o?l:void 0,{thumbnail:a,name:r,description:i},c));var n,r,o,l,a,i,c}},o().createElement(i.Z,{title:o().createElement(c.Z,{msgId:a}),show:y,fitContent:!0,clickOutEnabled:!1,buttons:T?[]:[{text:o().createElement(c.Z,{msgId:"close"}),onClick:function(){return O()}},{text:o().createElement(c.Z,{msgId:a}),disabled:!!R,bsStyle:"primary",onClick:function(){return h(t?p:void 0,{thumbnail:P,name:Z,description:A},!0)}}],onClose:T?null:function(){return O()}},n&&o().createElement(u.Alert,{bsStyle:"danger",style:{margin:0}},o().createElement("div",null,o().createElement(c.Z,{msgId:"map.mapError.errorDefault"}))),l&&o().createElement(u.Alert,{bsStyle:"success",style:{margin:0}},o().createElement("div",null,o().createElement(c.Z,{msgId:"saveDialog.saveSuccessMessage"}))),o().createElement(u.Form,{onSubmit:function(e){return e.preventDefault()}},o().createElement(u.FormGroup,{validationState:R},o().createElement(u.ControlLabel,null,o().createElement(c.Z,{msgId:"gnviewer.title"})),o().createElement(b,{autoFocus:!0,placeholder:"gnviewer.titlePlaceholder",value:Z,onChange:function(e){k(e.target.value),z(e.target.value?void 0:"error")},onBlur:function(e){z(e.target.value?void 0:"error")}})),!E&&o().createElement(u.FormGroup,null,o().createElement(u.ControlLabel,null,o().createElement(c.Z,{msgId:"saveDialog.description"})),o().createElement(b,{placeholder:"saveDialog.descriptionPlaceholder",value:A,onChange:function(e){return D(e.target.value)}}))),T&&o().createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(255, 255, 255, 0.8)",zIndex:2,display:"flex",alignItems:"center",justifyContent:"center"}},o().createElement(d.Z,{size:70})))))}g.propTypes={update:a().bool,labelId:a().string,contentId:a().oneOfType([a().string,a().number]),resource:a().object,loading:a().bool,enabled:a().bool,onClose:a().func,onSave:a().func,onInit:a().func,onClear:a().func,error:a().oneOfType([a().string,a().object]),success:a().oneOfType([a().string,a().object]),thumbnailOptions:a().object},g.defaultProps={update:!1,resource:{},loading:!1,enabled:!1,onClose:function(){},onSave:function(){},onInit:function(){},onClear:function(){},thumbnailOptions:{width:300,height:250,type:"image/jpeg",quality:.9,contain:!1}};const m=g}}]);