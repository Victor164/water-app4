import React from "react"
import './App.css';
import Table from './components/menu/table/Table';
import Menu from './components/menu/Menu';
import Sib from './components/menu/sib/Sib';
import { BrowserRouter,Route, Routes} from 'react-router-dom';

import VVP from "./components/menu/vvp/VVP";
import Login from "./components/menu/login/Login";
import Material from "./components/menu/material/Material";
import Level from "./components/menu/material/level/Level";
import Gabarit from "./components/menu/material/gabarit/Gabarit";
import Limit from "./components/menu/material/limit/Limit";
import Mogilev from "./components/menu/material/level/placelevel/dnepr/Mogilev";
import Zlobin from "./components/menu/material/level/placelevel/dnepr/Zlobin";
import Rechitsa from "./components/menu/material/level/placelevel/dnepr/Rechitsa";
import Loev from "./components/menu/material/level/placelevel/dnepr/Loev";
import Berezino from "./components/menu/material/level/placelevel/berezina/Berezino";
import Bobruysk from "./components/menu/material/level/placelevel/berezina/Bobruysk";
import Svetlogorsk from "./components/menu/material/level/placelevel/berezina/Svetlogorsk";
import Slavgorod from "./components/menu/material/level/placelevel/sozh/Slavgorod";
import Gomel from "./components/menu/material/level/placelevel/sozh/Gomel";
import Pinsk from "./components/menu/material/level/placelevel/pripyat/Pinsk";
import Korobe from "./components/menu/material/level/placelevel/pripyat/Korobe";
import Chernichi from "./components/menu/material/level/placelevel/pripyat/Chernichi";
import Mozyr from "./components/menu/material/level/placelevel/pripyat/Mozyr";
import Gorin from "./components/menu/material/level/placelevel/goryn/Gorin";
import Syrag from "./components/menu/material/level/placelevel/dvina/Syrag";
import Vitebsk from "./components/menu/material/level/placelevel/dvina/Vitebsk";
import Polotsk from "./components/menu/material/level/placelevel/dvina/Polotsk";
import Grodno from "./components/menu/material/level/placelevel/neman/Grodno";
import Title from "./components/menu/title/Title";
import Form from "./components/menu/login/form/Form";

function App () {
return (  
<BrowserRouter>
     <Menu />
 <Routes  >
 <Route path='/' element={<Title/>}/>
<Route path='/sib' element={<Sib/>}/>
<Route path='/table' element={<Table/>}/>
<Route path='/material' element={<Material/>}/>
<Route path='/vvp' element={<VVP/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/level' element={<Level/>}/>
<Route path='/gabarit' element={<Gabarit/>}/>
<Route path='/limit' element={<Limit/>}/>
<Route path='/mogilev' element={<Mogilev/>}/>
<Route path='/zlobin' element={<Zlobin/>}/>
<Route path='/rechitsa' element={<Rechitsa/>}/>
<Route path='/loev' element={<Loev/>}/>
<Route path='/berezino' element={<Berezino/>}/>
<Route path='/bobruysk' element={<Bobruysk/>}/>
<Route path='/svetlogorsk' element={<Svetlogorsk/>}/>
<Route path='/slavgorod' element={<Slavgorod/>}/>
<Route path='/gomel' element={<Gomel/>}/>
<Route path='/pinsk' element={<Pinsk/>}/>
<Route path='/korobe' element={<Korobe/>}/>
<Route path='/chernichi' element={<Chernichi/>}/>
<Route path='/mozyr' element={<Mozyr/>}/>
<Route path='/gorin' element={<Gorin/>}/>
<Route path='/syrag' element={<Syrag/>}/>
<Route path='/vitebsk' element={<Vitebsk/>}/>
<Route path='/polotsk' element={<Polotsk/>}/>
<Route path='/grodno' element={<Grodno/>}/>
<Route path='/form' element={<Form/>}/>
</Routes> 
    </BrowserRouter >
)
}

export default App;