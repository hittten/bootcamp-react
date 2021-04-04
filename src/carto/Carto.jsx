import React from "react";
import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
import './Carto.css';
import carto from "@carto/carto-vl";
import '@carto/carto-vl/'

export class Carto extends React.Component {
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.props.id,
      style: carto.basemaps.voyager,
      center: [0, 30],
      zoom: 2
    });

    carto.setDefaultConfig({serverURL: 'https://mls.visualization.telefonica.com/user/formacionweb'})
    carto.setDefaultAuth({
      username: 'formacionweb',
      apiKey: '8fcf128d5813f79a9ab8d618b58bf5c1c1d43e6d',
    });

    const viz = new carto.Viz(`
        width: 4
        strokeWidth: 0.5
        strokeColor: black
        color: rgb(10,185,107)
      `);
    const source = new carto.source.Dataset(this.props.dataSet);
    const layer = new carto.Layer('layer', source, viz);
    layer.addTo(map);
  }

  render() {
    return (
      <div className="map" id={this.props.id}>loading</div>
    );
  }
}
