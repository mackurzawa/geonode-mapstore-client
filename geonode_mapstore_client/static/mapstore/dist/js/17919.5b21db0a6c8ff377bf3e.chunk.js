(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[17919],{39190:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Feature:()=>q,LLayer:()=>f,LMap:()=>g,MeasurementSupport:()=>u,Overview:()=>c,ScaleBar:()=>d,default:()=>p});var n=r(130072),s=r(145697),i=r(790596),m=r(505904),o=r(722404),a=r(809056),q=n.Z,f=s.Z,g=i.Z,u=m.Z,c=o.Z,d=a.Z;const p={LLayer:f,LMap:g,MeasurementSupport:u,Overview:c,ScaleBar:d,Feature:q}},808797:(e,t,r)=>{"use strict";r.d(t,{rp:()=>a,Ov:()=>f,wd:()=>g,L0:()=>u}),r(701469);var n=r(91175),s=r.n(n),i=r(807654),m=r.n(i);function o(e){var t=Math.floor(e),r=60*(e-t),n=Math.floor(r),s=60*(r-n);return t+"° "+n+"' "+Math.floor(s)+"'' "}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.measureTrueBearing,n=void 0!==r&&r,s=t.fractionDigits,i=void 0===s?0:s,m="";if(n){var a="";e>=0&&e<10?a="00":e>10&&e<100&&(a="0");var q=i>0?e.toFixed(i):Math.floor(e);m=a+q+"°"}else e>=0&&e<90?m="N "+o(e)+"E":e>90&&e<=180?m="S "+o(180-e)+"E":e>180&&e<270?m="S "+o(e-180)+"W":e>=270&&e<=360&&(m="N "+o(360-e)+"W");return m}var q={yd:{ft:3,m:.9144,km:9144e-7,yd:1,mi:.00056818181818,nm:.00049373650107},ft:{ft:1,m:.3048,km:3048e-7,yd:.33333333333334,mi:.0001893932,nm:164579e-9},m:{ft:3.28084,m:1,km:.001,yd:1.0936132983377,mi:621371e-9,nm:.000539956803},km:{ft:3280.84,m:1e3,km:1,yd:1093.6132983377,mi:.62137121212121,nm:.5399568207343395},mi:{ft:5280.000168959982,m:1609.3440514990027,km:1.6093440514990027,yd:1760,mi:1,nm:.8689762697078849},nm:{ft:6076.115679999979,m:1852.0000592639938,km:1.8520000592639938,yd:2025.3718285214,mi:1.150779484848481,nm:1},sqft:{sqft:1,sqm:.09290304,sqkm:9.2903043596611e-8,sqmi:3.587e-8,sqnm:2.7051601137505e-8},sqyd:{sqft:8.9999247491639,sqm:.83612040133779,sqkm:8.3612040133779e-7,sqyd:1,sqmi:3.228278917579e-7,sqnm:2.4346237458194e-7},sqm:{sqft:10.76391,sqm:1,sqkm:1e-6,sqyd:1.196,sqmi:3.8610215854245e-7,sqnm:2.91181e-7},sqkm:{sqft:10763910,sqm:1e6,sqkm:1,sqyd:1196e3,sqmi:.38610215854245,sqnm:.291181},sqmi:{sqft:27878398.920726,sqm:2589988.110336,sqkm:2.589988110336,sqyd:27878398.920726,sqmi:1,sqnm:.75415532795574},sqnm:{sqft:36966388.603652,sqm:3434290.0120544,sqkm:3.4342900120544,sqyd:36966388.603652,sqmi:1.325986786715,sqnm:1}};function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"m",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"m";return q[t]&&q[t][r]?e*q[t][r]:e}var g=function(e){return!m()(parseFloat(e[0]))&&!m()(parseFloat(e[1]))},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.coordinates,r=e.type,n=t;if("LineString"===r){if((n=t.filter(g)).length<2)return[]}else if("Polygon"===r){if((n=s()(t).filter(g)).length<3)return[[]];n=[n.concat([s()(n)])]}return n}},664250:(e,t,r)=>{"use strict";r.d(t,{a:()=>q});var n=r(701469),s=r.n(n),i=r(896309),m=r(421915),o=r(869669),a=function(e,t,r,n){if(s()(t)&&s()(t[0])&&s()(t[0][0])){var m=(0,i.reproject)(t[0][0],n,r);return Math.sqrt(Math.pow(e[0]-m.x,2)+Math.pow(e[1]-m.y,2))}return 100},q=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t;if(!e.getGeometry()||"Polygon"!==e.getGeometry().getType()||e.getProperties().center&&0===e.getProperties().center.length)return e;if(e.getProperties()&&e.getProperties().isCircle&&e.getProperties().center&&e.getProperties().center[0]&&e.getProperties().center[1]){var n,s=e.getGeometry().getExtent();n=e.getProperties().center?[(n=(0,i.reproject)(e.getProperties().center,"EPSG:4326",t)).x,n.y]:(0,m.qg)(s);var q=e.getProperties().crs===t?e.getProperties().radius:a(n,e.getGeometry().getCoordinates(),t,r);return e.setGeometry(new o.Z(n,q)),e}return e}}}]);