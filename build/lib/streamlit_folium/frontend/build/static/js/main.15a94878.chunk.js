(this.webpackJsonpstreamlit_folium=this.webpackJsonpstreamlit_folium||[]).push([[0],{7:function(e,t,_){"use strict";_.d(t,"a",(function(){return i}));var o=6378137;function a(e){return e*Math.PI/180}function n(e){return 180*e/Math.PI}function r(e,t,_,o){var r=a(e[1]),i=a(e[0]),l=t/_,c=Math.asin(Math.sin(r)*Math.cos(l)+Math.cos(r)*Math.sin(l)*Math.cos(o));return[n(i+Math.atan2(Math.sin(o)*Math.sin(l)*Math.cos(r),Math.cos(l)-Math.sin(r)*Math.sin(c))),n(c)]}function i(e,t){for(var _=arguments.length>2&&void 0!==arguments[2]?arguments[2]:32,a=[],n=0;n<_;++n)a.push(r(e,t,o,2*Math.PI*n/_));return a.push(a[0]),{type:"Polygon",coordinates:[a]}}},9:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _home_runner_work_streamlit_folium_streamlit_folium_streamlit_folium_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),streamlit_component_lib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),underscore__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8),_circle_to_polygon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7);function onMapClick(e){window.__GLOBAL_DATA__.lat_lng_clicked=e.latlng,debouncedUpdateComponentValue(window.map)}var debouncedUpdateComponentValue=Object(underscore__WEBPACK_IMPORTED_MODULE_2__.a)(updateComponentValue,250);function updateComponentValue(e){var t=window.__GLOBAL_DATA__,_=t.previous_data,o=e.getBounds(),a=e.getZoom(),n={last_clicked:t.lat_lng_clicked,last_object_clicked:t.last_object_clicked,last_object_clicked_tooltip:t.last_object_clicked_tooltip,last_object_clicked_popup:t.last_object_clicked_popup,all_drawings:t.all_drawings,last_active_drawing:t.last_active_drawing,bounds:o,zoom:a,last_circle_radius:t.last_circle_radius,last_circle_polygon:t.last_circle_polygon,center:e.getCenter()},r={};r=t.returned_objects?Object.fromEntries(Object.entries(n).filter((function(e){var _=Object(_home_runner_work_streamlit_folium_streamlit_folium_streamlit_folium_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__.a)(e,1)[0];return t.returned_objects.includes(_)}))):n,JSON.stringify(_)!==JSON.stringify(r)&&(t.previous_data=r,streamlit_component_lib__WEBPACK_IMPORTED_MODULE_1__.a.setComponentValue(r))}function onMapMove(e){debouncedUpdateComponentValue(window.map)}function extractContent(e){var t=document.createElement("span");return t.innerHTML=e,(t.textContent||t.innerText).trim()}function onDraw(e){var t=window.__GLOBAL_DATA__,_=e.layerType,o=e.layer;if("circle"===_){var a=[o._latlng.lng,o._latlng.lat],n=o.options.radius,r=Object(_circle_to_polygon__WEBPACK_IMPORTED_MODULE_3__.a)(a,n),i=e.layer.feature=e.layer.feature||{};i.type="Feature",i.properties=i.properties||{},i.properties.radius=n,t.last_circle_radius=n/1e3,t.last_circle_polygon=r}return onLayerClick(e)}function onLayerClick(e){var t=window.__GLOBAL_DATA__;if(t.last_object_clicked=e.latlng,e.sourceTarget._tooltip&&e.sourceTarget._tooltip._content){var _=extractContent(e.sourceTarget.getTooltip().getContent());t.last_object_clicked_tooltip=_}else if(e.target._tooltip&&e.target._tooltip._content){var o=e.target.getTooltip().getContent()(e.sourceTarget).innerText;t.last_object_clicked_tooltip=o}if(e.sourceTarget._popup&&e.sourceTarget._popup._content){var a=e.sourceTarget.getPopup().getContent().innerText;t.last_object_clicked_popup=a}else if(e.target._popup&&e.target._popup._content){var n=e.target.getPopup().getContent()(e.sourceTarget).innerText;t.last_object_clicked_popup=n}var r=[];e.layer&&e.layer.toGeoJSON&&(t.last_active_drawing=e.layer.toGeoJSON()),window.drawnItems.toGeoJSON&&(r=window.drawnItems.toGeoJSON().features),t.all_drawings=r,debouncedUpdateComponentValue(window.map)}function onRender(event){var data=event.detail,script=data.args.script,height=data.args.height,width=data.args.width,html=data.args.html,returned_objects=data.args.returned_objects,_default=data.args.default,zoom=data.args.zoom,center=data.args.center,feature_group=data.args.feature_group,return_on_hover=data.args.return_on_hover;if(!window.map){var parent_div=document.getElementById("parent"),div1=document.getElementById("map_div"),div2=document.getElementById("map_div2");if(div2&&(div2.style.height="".concat(height,"px"),div2.style.width="".concat(width,"px")),div1){if(div1.style.height="".concat(height,"px"),div1.style.width="".concat(width,"px"),-1!==script.indexOf("document.getElementById('export')")){var a=document.createElement("a");a.href="#",a.id="export",a.innerHTML="Export",document.body.appendChild(a)}var render_script=document.createElement("script");window.__GLOBAL_DATA__={lat_lng_clicked:null,last_object_clicked:null,last_object_clicked_tooltip:null,last_object_clicked_popup:null,all_drawings:null,last_active_drawing:null,zoom:null,last_circle_radius:null,last_circle_polygon:null,returned_objects:returned_objects,previous_data:_default,last_zoom:null,last_center:null,last_feature_group:null},-1!==script.indexOf("map_div2")&&(null===parent_div||void 0===parent_div||parent_div.classList.remove("single"),null===parent_div||void 0===parent_div||parent_div.classList.add("double")),render_script.innerHTML=script+"window.map = map_div; window.initComponent(map_div, ".concat(return_on_hover,");"),document.body.appendChild(render_script);var html_div=document.createElement("div");html_div.innerHTML=html,document.body.appendChild(html_div)}}if(feature_group&&feature_group!==window.__GLOBAL_DATA__.last_feature_group)for(var key in window.feature_group&&window.map.removeLayer(window.feature_group),eval(feature_group),window.__GLOBAL_DATA__.last_feature_group=feature_group,window.map._layers){var layer=window.map._layers[key];layer.off("click",onLayerClick),layer.on("click",onLayerClick),return_on_hover&&(layer.off("mouseover",onLayerClick),layer.on("mouseover",onLayerClick))}zoom&&zoom!==window.__GLOBAL_DATA__.last_zoom&&(window.map.setZoom(zoom),window.__GLOBAL_DATA__.last_zoom=zoom),center&&JSON.stringify(center)!==JSON.stringify(window.__GLOBAL_DATA__.last_center)&&(window.map.panTo(center),window.__GLOBAL_DATA__.last_center=center)}window.initComponent=function(e,t){for(var _ in e.on("click",onMapClick),e.on("moveend",onMapMove),e._layers){var o=e._layers[_];o.on("click",onLayerClick),t&&o.on("mouseover",onLayerClick)}e.on("draw:created",onDraw),e.on("draw:edited",onDraw),e.on("draw:deleted",onDraw),streamlit_component_lib__WEBPACK_IMPORTED_MODULE_1__.a.setFrameHeight(),updateComponentValue(e)},streamlit_component_lib__WEBPACK_IMPORTED_MODULE_1__.a.events.addEventListener(streamlit_component_lib__WEBPACK_IMPORTED_MODULE_1__.a.RENDER_EVENT,onRender),streamlit_component_lib__WEBPACK_IMPORTED_MODULE_1__.a.setComponentReady(),streamlit_component_lib__WEBPACK_IMPORTED_MODULE_1__.a.setFrameHeight()}},[[9,1,2]]]);
//# sourceMappingURL=main.15a94878.chunk.js.map