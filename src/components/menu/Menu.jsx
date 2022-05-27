import React from "react"
import './Menu.css';

function Menu () {
    
return ( <div>
<div className="header">
     <a href="/vvp">Схема ВВП</a>
     <a href="/table">Уведомления для судоводителей</a>
     <a href="/material">Данные о фарватере</a>
     <a href="/gidrometeo">Гидрометеологические условия</a>
     <a href="/login">Вход</a>
</div>
<div className="h">
    <div className="im">
    <a href="/"><img src="char2.png" alt="logo1" ></img></a>
    </div>
<details>
    <summary>   
        <span data-css-icon="down" className="m">Меню</span>
    </summary>
    <div id="open" className="dropdown-contentt">
     <a href="/">Главная</a>
     <a href="/vvp">Схема ВВП</a>
     <a href="/table">Уведомления для судоводителей</a>
     <a href="/material">Данные о фарватере</a>
     <a href="/gidrometeo">Гидрометеологические условия</a>
     <a href="/login">Вход</a>
     </div>
     </details>
</div>
</div>

)
}

export default Menu;