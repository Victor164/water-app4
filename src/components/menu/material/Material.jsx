import React from "react"
import './Material.css';

function Material () {
return ( <div className="content1">
<div></div>
<div className="item5">
<button className="btn3"><a href="/level">
    <img src="/images/1111.png" alt="level" ></img>
    <br></br>Уровни воды
    </a></button>
    </div>
<div></div>
<div className="item6">
<button className="btn3"><a href="/gabarit">
     <img src="/images/12.png" alt="gabarit"></img>
    <br></br>Габариты ВВП
    </a></button>
    </div>
<div></div>
<div className="item7">
<button className="btn3"><a href="/limit">
<img src="/images/13.png" alt="limit"></img>
<br></br>Лимитирующие перекаты
    </a></button>
</div>

</div>
)
}

export default Material;