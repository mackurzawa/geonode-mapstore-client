(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[1157],{399534:(e,n,t)=>{"use strict";t.d(n,{Z:()=>r});var l=t(461365),o=t(569334);const r=(0,l.Z)(o.h_)},560466:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>b});var l=t(124852),o=t.n(l),r=t(322843),i=t(171703),c=t(22222),a=t(805346),s=t(693473),u=t(694745),d=t(399534),E=t(782904),m=t(903828),g=t(643892),v=t(957914),C=t(12530),f=t(532425),p=(0,i.connect)((0,c.P1)([function(e){var n,t;return null==e||null===(n=e.controls)||void 0===n||null===(t=n[C.zj.DELETE_RESOURCE])||void 0===t?void 0:t.value},function(e){var n,t;return null==e||null===(n=e.controls)||void 0===n||null===(t=n[C.zj.DELETE_RESOURCE])||void 0===t?void 0:t.loading}],(function(e,n){return{resources:e,enabled:!!e,loading:n}})),{onClose:E.Xg.bind(null,C.zj.DELETE_RESOURCE,"value",void 0),onDelete:g.EU.bind(null,C.zj.DELETE_RESOURCE)})((function(e){var n=e.enabled,t=e.resources,l=void 0===t?[]:t,r=e.onClose,i=void 0===r?function(){}:r,c=e.onDelete,s=void 0===c?function(){}:c,E=e.redirectTo,m=void 0===E?"/":E,g=e.loading;return o().createElement(d.Z,null,o().createElement(u.Z,{title:o().createElement(a.Z,{msgId:"gnviewer.deleteResourceTitle",msgParams:{count:l.length}}),show:n,fitContent:!0,clickOutEnabled:!1,modalClassName:"gn-simple-dialog",buttons:g?[]:[{text:o().createElement(a.Z,{msgId:"gnviewer.deleteResourceNo",msgParams:{count:l.length}}),onClick:function(){return i()}},{text:o().createElement(a.Z,{msgId:"gnviewer.deleteResourceYes",msgParams:{count:l.length}}),bsStyle:"danger",onClick:function(){return s(l,m)}}],onClose:g?null:function(){return i()}},o().createElement("ul",{className:"gn-card-grid",style:{listStyleType:"none",padding:"0.5rem",margin:0}},l.map((function(e,n){return o().createElement("li",{style:{padding:"0.25rem 0"},key:e.pk+"-"+n},o().createElement(v.Z,{data:e,layoutCardsStyle:"list",readOnly:!0}))}))),g&&o().createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(255, 255, 255, 0.8)",zIndex:2,display:"flex",alignItems:"center",justifyContent:"center"}},o().createElement(f.Z,{size:70}))))})),R=(0,i.connect)((0,c.P1)([m.yK],(function(e){return{resource:e}})),{onClick:E.Xg.bind(null,C.zj.DELETE_RESOURCE,"value")})((function(e){var n=e.onClick,t=e.size,l=e.resource;return o().createElement(s.Z,{variant:"danger",size:t,onClick:function(){n([l])}},o().createElement(a.Z,{msgId:"gnhome.delete"}))}));const b=(0,r.rx)("DeleteResource",{component:p,containers:{ActionNavbar:{name:"DeleteResource",Component:R}},epics:{},reducers:{}})}}]);