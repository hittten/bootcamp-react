import React from "react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Carto.css';
import carto from "@carto/carto-vl";
import '@carto/carto-vl/'

export class CartoGeoJson extends React.Component {
  componentDidMount() {

    carto.setDefaultConfig({serverURL: 'https://mls.visualization.telefonica.com/user/formacionweb'})
    carto.setDefaultAuth({
      username: 'formacionweb',
      apiKey: '8fcf128d5813f79a9ab8d618b58bf5c1c1d43e6d',
    });

    const map = new mapboxgl.Map({
      container: this.props.id,
      style: carto.basemaps.voyager,
      center: [-77.04, 38.89],
      zoom: 9,
      scrollZoom: true
    });

    const nav = new mapboxgl.NavigationControl({
      showCompass: false
    });
    map.addControl(nav, 'top-left');
    map.addControl(new mapboxgl.FullscreenControl(), 'top-left');

    fetch('https://libs.cartocdn.com/carto-vl/assets/stations.geojson')
      .then(response => response.json())
      .then(function(data){
        // Define layer
        const source = new carto.source.GeoJSON(data);
        const viz = new carto.Viz();
        const layer = new carto.Layer('layer', source, viz);

        layer.addTo(map, 'watername_ocean');
        // layer.on('loaded', hideLoader);
      });



    // const layer = new carto.Layer('layer', source, viz);
    // layer.addTo(map);
  }

  render() {
    return (
      <div className="map" id={this.props.id}>loading</div>
    );
  }
}
