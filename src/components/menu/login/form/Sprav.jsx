import * as React  from 'react';

import { YMaps, Map, Placemark, FullscreenControl,ListBoxItem,ListBox, Button,SearchControl,TypeSelector, Polyline, Circle, GeolocationControl,RouteEditor, RouteButton,RoutePanel } from "react-yandex-maps";


class Sprav extends React.Component {
  constructor(props) {
      super(props);
      this.initMap = this.initMap.bind(this);
      this.coordinates = [
          [52.435071071779745,31.01805450000001],
          [52.083107137592435,23.688582999999998],
          [52.110753636465255,26.013656499999954],
      ];
      this.ymap = null;
      this.mapRef = null;
  }

  initMap(ymap, mapRef) {
      if (ymap) this.ymap = ymap;
      if (mapRef) this.mapRef = mapRef;
      if (!this.ymap || !this.mapRef) return;

      let multiRoute = new this.ymap.multiRouter.MultiRoute({
          referencePoints: this.coordinates
      });// Подписка на событие готовности маршрута.
      multiRoute.model.events.add('requestsuccess', function() {
          // Получение ссылки на активный маршрут.
          var activeRoute = multiRoute.getActiveRoute();
          // Получение коллекции путей активного маршрута.
          var activeRoutePaths = activeRoute.getPaths();
          // Проход по коллекции путей.
          activeRoutePaths.each(function(path) {
              console.log("Длина пути: " + path.properties.get("distance").text);
              console.log("Время прохождения пути: " + path.properties.get("duration").text);
          });
      });
      
      multiRoute.editor.stop();
      this.mapRef.geoObjects.add(multiRoute);
  }

  render() {
      const mapData = {
          center: [54.133392, 27.577899],
          zoom: 7,
      };

      const query = {
          lang: 'ru_RU',
          load: 'package.full',
          apikey: 'c3af61e0-13a7-42ce-967f-211edbc2c15d' 
      };

      return (
          <div>
              <YMaps query={query}>
                  <Map
                      width = '100%' 
                      height='700px'
                      defaultState={mapData}
                      instanceRef={(ref) => this.initMap(null, ref)}
                      onLoad={(ymap) => this.initMap(ymap, null)}>
                      <RouteEditor/>
                      <RoutePanel/>
                      {this.coordinates.map((coordinate, idx) => <Placemark geometry={coordinate} key={idx}/>)}
                  </Map>
              </YMaps>
              <div onClick={() => this.initMap()}>TEST</div>
              {/* <iframe  width='100%' height='700px' src="https://brouter.de/brouter-web/#map=7/53.817/28.740/standard,route-quality&profile=river"></iframe> */}
          </div>
      );
  }
}

export default Sprav;
