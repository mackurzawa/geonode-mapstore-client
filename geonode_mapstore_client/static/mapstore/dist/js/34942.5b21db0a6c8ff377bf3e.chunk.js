(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[34942,45992,56307],{556307:t=>{t.exports=window.L},45992:(t,r,e)=>{"use strict";e.d(r,{h:()=>p,Z:()=>l});var n=e(535937),o=e.n(n),i=e(836882),u=e(737275);function a(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?a(Object(e),!0).forEach((function(r){s(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function s(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}var p=function(t,r){var e,n,a,s,p=i.Z;if("custom"===t)e=r;else if(a=(s=t.split("."))[0],n=s[1],!(e=p[a]))throw new Error("No such provider ("+a+")");var l={url:e.url,options:e.options||{}};if(n&&"variants"in e){if(!(n in e.variants))throw new Error("No such variant of "+(a||e.url)+" ("+n+")");var f,b=e.variants[n];f="string"==typeof b?{variant:b}:b.options,l={url:b.url||l.url,options:c(c({},l.options||{}),f)}}else"function"==typeof l.url&&(l.url=l.url(s.splice(1,s.length-1).join(".")));var O="file:"===window.location.protocol||l.options.forceHTTP;0===l.url.indexOf("//")&&O&&(l.url="http:"+l.url),l.options.retina&&(r.detectRetina&&u.ZP.getBrowserProperties().retina?r.detectRetina=!1:l.options.retina=""),l.options.attribution&&(l.options.attribution=function t(r){return-1===r.indexOf("{attribution.")?r:r.replace(/\{attribution.(\w*)\}/,(function(r,e){return t(p[e].options.attribution)}))}(l.options.attribution));var v=c(c({},l.options),o()(r,(function(t){return void 0!==t})));return[l.url,v]};const l={getLayerConfig:p}}}]);