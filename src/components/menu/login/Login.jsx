import React from "react"
//import './Menu.css';

function Login () {
return ( <div className="sib">
<form class="form-1">
    <p class="field">
        <input type="text" name="login" placeholder="Логин"/>
        <i class="icon-user icon-large"></i>
    </p>
        <p class="field">
        <input type="password" name="password" placeholder="Пароль"/>
        <i class="icon-lock icon-large"></i>
    </p>      
    <p className="button">
        <button type="submit" name="submit" className="button">Войти</button>
    </p>
</form>
</div>
)
}

export default Login;