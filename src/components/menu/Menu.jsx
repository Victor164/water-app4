import React from "react"
import './Menu.css';

function Menu () {
    
return ( <div>
<div className="header">
     <a href="/table">Cводная информация</a>
     <a href="/sib">Бюллетени</a>
     <a href="/material">Материалы</a>
     <a href="/vvp">Схема ВВП</a>
     <a href="/login">Вход</a>
</div>
<div className="h">
    <div className="im">
    <img src="char2.png" alt="logo1"></img>
    </div>
<details>
    <summary>   
        <span data-css-icon="down" className="m">Меню</span>
    </summary>
    <div id="open" className="dropdown-contentt">
     <a href="/">Главная</a>
     <a href="/table">Cводная информация</a>
     <a href="/sib">Бюллетени</a>
     <a href="/material">Материалы</a>
     <a href="/vvp">Схема ВВП</a>
     <a href="/login">Вход</a>
     </div>
     </details>
</div>
</div>

)
}

export default Menu;