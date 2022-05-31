import React from "react"
import './Material.css';

function Material () {
return ( <div className="content1">
<div></div>
<div className="item5">
<button className="btn3"><a href="/level">
    <img src="/images/Уровни.png" alt="level" ></img>
    <br></br>Уровни воды на гидропостах
    </a></button>
    </div>
<div></div>
<div className="item6">
<button className="btn3"><a href="https://pogoda.by">
    <img src="/images/Гидромет.png" alt="meteo" ></img>
    <br></br>Гидрометеологические условия
    </a></button>
    </div>
<div></div>
<div className="item7">
<button className="btn3"><a href="/gabarit">
     <img src="/images/Навигации.png" alt="gabarit"></img>
    <br></br>Сроки навигации
    </a></button>
    </div>
<div></div>
<div className="item8">
<button className="btn3"><a href="/limit">
<img src="/images/13.png" alt="limit"></img>
<br></br>Глубины на лимитирующих перекатах
    </a></button>
</div>

</div>
)
}

export default Material;