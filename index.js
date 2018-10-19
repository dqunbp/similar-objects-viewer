import './styles/styles.scss'
import { onFileDrop } from './droppedFileReader'

var dropFileArea = document.getElementById('drop');
dropFileArea.ondragover = function () { return false; };
dropFileArea.ondragend = function () { return false; };
dropFileArea.ondrop = (e) => onFileDrop(e, onGeojsonLoad);


var google = L.tileLayer("http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}&s=Ga", {id: 0, attribution: false}),
  osm = L.tileLayer("http://a.tile.openstreetmap.org/{z}/{x}/{y}.png", {id: 1, attribution: false});

var baseMaps = {
  "Google": google,
  "OSM": osm
};
var leafletMap = L.map('map', {
  center: [58.623858, 49.666106],
  zoom: 12,
  layers: [google]
});

L.control.layers(baseMaps).addTo(leafletMap);

var defaultLayerStyle = {
  weight: 2,
  color: 'gray',
  opacity: .5,
  fillColor: 'lightgray',
  fill: true,
  radius: 6,
  fillOpacity: 0.4
};

var highlightFeatureStyle = {
  weight: 2,
  color: 'red',
  opacity: .4,
  fillColor: 'red',
  fill: true,
  radius: 6,
  fillOpacity: 0.3
};

var tileOptions = {
  zIndex: 201,
  maxZoom: 20,
  indexMaxZoom: 0,
  interactive: true,
  rendererFactory: L.canvas.tile,
  vectorTileLayerStyles: {
    sliced: defaultLayerStyle
  },
  getFeatureId: function (f) {
    return f.properties.id
  },
};

var tileLayer;
var highlitedFeatures = [];

function highlightFeature({ featureId, layer = tileLayer, style = highlightFeatureStyle } = {}) {
  layer.setFeatureStyle(featureId, style)
}

function unHighlightFeature(featureId, layer = tileLayer) {
  layer.resetFeatureStyle(featureId)
}

function onGeojsonLoad(data) {
  console.log('callback called with ', data);
  if (tileLayer) {
    tileLayer.remove();
  }
  tileLayer = L.vectorGrid.slicer(data, tileOptions).addTo(leafletMap);
  tileLayer.on('click', function ({ layer }) {
    var { id: targetFeatureId } = layer.properties;
    console.log('was clicked on feature with id: ', targetFeatureId);
    if (highlitedFeatures.length > 0) {
      tileLayer.resetFeatureStyle(targetFeatureId);
      highlitedFeatures.forEach((id) => unHighlightFeature(id));
      highlitedFeatures = [];
    }
    highlitedFeatures.push(targetFeatureId);
    highlightFeature({
      featureId: targetFeatureId,
      style: {
        ...highlightFeatureStyle,
        fillColor: 'yellow'
      }
    });
    var { similarity_objects = [] } = layer.properties;
    similarity_objects.forEach(({ id: featureId, similarity }) => {
      highlitedFeatures.push(featureId);
      highlightFeature({ featureId })
    })
  })
}