parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"6Hyr":[function(require,module,exports) {

},{}],"hBQj":[function(require,module,exports) {
"use strict";function e(e){var t=Math.floor(Math.log(e)/Math.log(1024));return Math.round(e/Math.pow(1024,t)*100)/100+" "+["B","kB","MB","GB"][t]}function t(t,r){t.preventDefault();var n=new FileReader,a=t.target;n.readAsText(t.dataTransfer.files[0]),a.innerHTML+="<br/>",a.innerHTML+="<br/>Loading... "+t.dataTransfer.files[0].name.toString();var i=(new Date).getTime();n.onload=function(t){var n=(new Date).setTime((new Date).getTime()-i);a.innerHTML+=" "+n+"ms";try{a.innerHTML+="<br/>&nbsp;Parsing... "+e(t.target.result.length),i=(new Date).getTime();var o=JSON.parse(t.target.result);n=(new Date).setTime((new Date).getTime()-i),a.innerHTML+=" "+n+"ms",r(o)}catch(s){a.innerHTML+="<br/>&nbsp;Error: "+s}}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.onFileDrop=t;
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./styles/styles.scss");var e=require("./droppedFileReader");function r(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{},i=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),i.forEach(function(r){t(e,r,o[r])})}return e}function t(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var o=document.getElementById("drop");o.ondragover=function(){return!1},o.ondragend=function(){return!1},o.ondrop=function(r){return(0,e.onFileDrop)(r,g)};var i=L.tileLayer("http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}&s=Ga",{id:0,attribution:!1}),l=L.tileLayer("http://a.tile.openstreetmap.org/{z}/{x}/{y}.png",{id:1,attribution:!1}),n={Google:i,OSM:l},a=L.map("map",{center:[58.623858,49.666106],zoom:12,layers:[i]});L.control.layers(n).addTo(a);var c,u={weight:2,color:"gray",opacity:.5,fillColor:"lightgray",fill:!0,radius:6,fillOpacity:.4},d={weight:2,color:"red",opacity:.4,fillColor:"red",fill:!0,radius:6,fillOpacity:.3},s={zIndex:201,maxZoom:20,indexMaxZoom:0,interactive:!0,rendererFactory:L.canvas.tile,vectorTileLayerStyles:{sliced:u},getFeatureId:function(e){return e.properties.id}},y=[];function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.featureId,t=e.layer,o=void 0===t?c:t,i=e.style,l=void 0===i?d:i;o.setFeatureStyle(r,l)}function p(e){(arguments.length>1&&void 0!==arguments[1]?arguments[1]:c).resetFeatureStyle(e)}function g(e){console.log("callback called with ",e),c&&c.remove(),(c=L.vectorGrid.slicer(e,s).addTo(a)).on("click",function(e){var t=e.layer,o=t.properties.id;console.log("was clicked on feature with id: ",o),y.length>0&&(c.resetFeatureStyle(o),y.forEach(function(e){return p(e)}),y=[]),y.push(o),f({featureId:o,style:r({},d,{fillColor:"yellow"})});var i=t.properties.similarity_objects;(void 0===i?[]:i).forEach(function(e){var r=e.id;e.similarity;y.push(r),f({featureId:r})})})}
},{"./styles/styles.scss":"6Hyr","./droppedFileReader":"hBQj"}]},{},["Focm"], null)
//# sourceMappingURL=similar-objects-viewer.f14c9bcd.map