import React from "react"
import './VVP.css';
import { YMaps, Map, Placemark } from "react-yandex-maps";




function VVP () {
return (<div>
    <div></div>
    <div></div>

<div className="grid-container">
<div className="item1">
<YMaps>
    <div>
      <Map defaultState={{ center: [53.902207, 27.561676], zoom: 5 }} />
    </div>
  </YMaps>
{/* <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A484bab4bbd70e81e0c2dc5fa4ab8d9488549414838b0090bf5842b07c61aeb96&amp;source=constructor" width="1700" height="850" frameborder="0"></iframe>   */}
</div>

</div>
</div> 

)
}

export default VVP;

