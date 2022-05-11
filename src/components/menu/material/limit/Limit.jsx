import React from "react"
import './Limit.css';


const sheets = "https://docs.google.com/spreadsheets/d/1WBCFEvyiO0X-cOHsMnIwk9slJHH9ZfpnfG7bwsDe8Yw/edit#gid=0&range=G77";


class Limit extends React.Component {
componentDidMount = () => {
        fetch(sheets)
        .then(res => res.json())
        .then(data => {
          const dailyData = data.list.filter(reading => reading.dt_txt.includes("12:00:00"))
          this.setState({days: dailyData})
        })
      
}
render () {
    return( <div >
    <div>
       
    </div>
    <div><b className="name4">река Днепр (дер.Левки (воздушный переход) - н.п. Любеч (граница Белводпуть - Укрводпуть)</b></div>
         <div className="content123">
           <button className="btn123"><a>
           <b>дер.Левки (воздушный переход) – Прудки III</b><br></br>
           Глубина : <a>{this.componentDidMount()}</a>
           {/* <iframe src="https://docs.google.com/spreadsheets/d/1WBCFEvyiO0X-cOHsMnIwk9slJHH9ZfpnfG7bwsDe8Yw/edit#gid=0&range=G77" ></iframe> */}
            </a></button>
            <button className="btn123"><a>
           <b>Прудки III – Могилев (мостовой переход)</b><br></br>
           <a src="https://docs.google.com/spreadsheets/d/1WBCFEvyiO0X-cOHsMnIwk9slJHH9ZfpnfG7bwsDe8Yw/edit#gid=0&range=G78"></a><br></br>
            </a></button>
            <button className="btn123"><a>
           <b>Могилев (мостовой переход) – прк. Стайки III</b><br></br>
           <a href="https://docs.google.com/spreadsheets/d/1WBCFEvyiO0X-cOHsMnIwk9slJHH9ZfpnfG7bwsDe8Yw/edit#gid=0&range=G79"></a><br></br>
            </a></button>
            <button className="btn123"><a>
           <b>прк. Стайки III – Быхов</b><br></br>
           <a href="https://docs.google.com/spreadsheets/d/1WBCFEvyiO0X-cOHsMnIwk9slJHH9ZfpnfG7bwsDe8Yw/edit#gid=0&range=G80"></a><br></br>
            </a></button>
            <button className="btn123"><a>
           <b>Быхов – у.р. Друть</b><br></br>
           <a href="https://docs.google.com/spreadsheets/d/1WBCFEvyiO0X-cOHsMnIwk9slJHH9ZfpnfG7bwsDe8Yw/edit#gid=0&range=G81"></a><br></br>
            </a></button>
            <button className="btn123"><a>
           <b>у.р. Друть – у.р. Березины</b><br></br>
           <a href="https://docs.google.com/spreadsheets/d/1WBCFEvyiO0X-cOHsMnIwk9slJHH9ZfpnfG7bwsDe8Yw/edit#gid=0&range=G82"></a><br></br>
            </a></button>
            <button className="btn123"><a>
           <b>у.р. Березины – прк. Черное I</b><br></br>
           <a href="https://docs.google.com/spreadsheets/d/1WBCFEvyiO0X-cOHsMnIwk9slJHH9ZfpnfG7bwsDe8Yw/edit#gid=0&range=G83"></a><br></br>
            </a></button>
            <button className="btn123"><a>
           <b>прк. Черное I – Речицкий ССРЗ</b><br></br>
           <a href="https://docs.google.com/spreadsheets/d/1WBCFEvyiO0X-cOHsMnIwk9slJHH9ZfpnfG7bwsDe8Yw/edit#gid=0&range=G84"></a><br></br>
            </a></button>
            <button className="btn123"><a>
           <b>Речицкий ССРЗ – прк. Боровая I</b><br></br>
           <a href="https://docs.google.com/spreadsheets/d/1WBCFEvyiO0X-cOHsMnIwk9slJHH9ZfpnfG7bwsDe8Yw/edit#gid=0&range=G85"></a><br></br>
            </a></button>
            <button className="btn123"><a>
           <b>прк. Боровая I – Подречицкое</b><br></br>
           Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>Подречицкое – 1082 км</b><br></br>
           Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>1082 км – Каменка </b><br></br>
           Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>Каменка – н.п. Любеч (гр. Белводпуть - Укрводпуть)</b><br></br>
           Ссылка<br></br>
            </a></button>
     </div>
     <div><b className="name4">река Березина (г.Березино (Березино - пристань) - устье реки Березина</b></div>
         <div className="content123">
           <button className="btn123"><a>
           <b>г.Березино (Березино пристань) – у.р. Волчанки</b><br></br>
            Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>у.р. Волчанки – прк. Течка</b><br></br>
           Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>Мпрк. Течка – Бобруйский порт</b><br></br>
           Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>Бобруйский порт – прк. Волышино</b><br></br>
           Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>прк. Волышино – оз. Сельное</b><br></br>
           Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>оз. Сельное – Якимова Слобода IV</b><br></br>
           Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>Якимова Слобода IV – устье реки Березина</b><br></br>
           Ссылка<br></br>
            </a></button>
     </div>
     <div><b className="name4">река Сож (г.Славгород (Славгород - город) - устье реки Сож)</b></div>
         <div className="content123">
           <button className="btn123"><a>
           <b>г. Славгород (Славгород - город) – Чечерский а/м мост</b><br></br>
            Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>Чечерский а/м мост – прк. Крысин 1</b><br></br>
           Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>прк. Крысин 1 – старица "Боровая" исток</b><br></br>
           Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>старица "Боровая" исток –  Гомель пристань</b><br></br>
           Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>Гомель пристань – порт Осовцы</b><br></br>
           Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>порт Осовцы – прк. Никольский 3</b><br></br>
           Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>прк. Никольский 3 – 35 км</b><br></br>
           Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>35 км – прк. Карповка 1</b><br></br>
           Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>прк. Карповка 1 – устье реки Сож</b><br></br>
           Ссылка<br></br>
            </a></button>
     </div>
     <div><b className="name4">река Неман (деревня Яблоново (вход в затон) - граница с Литовской Республикой)</b></div>
         <div className="content123">
           <button className="btn123"><a>
           <b>деревня Яблоново (вход в затон) – д. Ковшово</b><br></br>
            Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>деревня Ковшово – Гродненская ГЭС</b><br></br>
           Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>Гродненская ГЭС – гр. с Литовской Республикой</b><br></br>
           Ссылка<br></br>
            </a></button>
     </div>
     <div><b className="name4">река Мухавец (г.Брест (речной порт Брест) - г.Кобрин (слияние реки Мухавец и Днепро-Бугского канала)</b></div>
         <div className="content123">
           <button className="btn123"><a>
           <b>г. Брест (речной порт Брест) – г/у "Тришин"</b><br></br>
            Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>г/у "Тришин" – г/у "Новосады" </b><br></br>
           Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>г/у Новосады – г.Кобрин (слияние р. Муховец и ДБК)</b><br></br>
           Ссылка<br></br>
            </a></button>
     </div>
     <div><b className="name4">г. Кобрин (слияние р. Мухавец и ДБК) – слияние ДБК и р. Пина</b></div>
         <div className="content125">
           <button className="btn123"><a>
           <b>г. Брест (речной порт Брест) – г/у "Тришин"</b><br></br>
            Ссылка<br></br>
            </a></button>
     </div>
     <div><b className="name4">река Пина (слияние ДБК и реки Пина - г.Пинск (слияние реки Пина и реки Припять) - знак "запрещение прохода")</b></div>
         <div className="content123">
           <button className="btn123"><a>
           <b>слияние ДБК и реки Пина – г/у "Дубой"</b><br></br>
            Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>г/у "Дубой" – порт Пинск</b><br></br>
            Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>порт Пинск – г.Пинск (сл. рек Пина и Припять)</b><br></br>
            Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>Слияние р.Пина и Припять – знак "Запрещение прохода"</b><br></br>
            Ссылка<br></br>
            </a></button>
     </div>
     <div><b className="name4">верхний участок реки Припять (7 км реки Припять - г.Пинск, слияние реки Припять и реки Пина)</b></div>
         <div className="content125">
           <button className="btn123"><a>
           <b>7 км реки Припять – г.Пинск (слияние рек Пина и Припять)</b><br></br>
            Ссылка<br></br>
            </a></button>
     </div>
     <div><b className="name4">река Припять (г.Пинск (слияние реки Пина и реки Припять) - перекат Усовский-1 (граница с Украиной))</b></div>
         <div className="content123">
           <button className="btn123"><a>
           <b>г.Пинск (сл. рр Пина и Припять) – г/у "Качановичи"</b><br></br>
            Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>г/у  "Качановичи" – г/у "Стахово"</b><br></br>
            Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>г/у  "Стахово" – устье р. Горынь</b><br></br>
            Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>устье р. Горынь – устье Микашевичского канала</b><br></br>
            Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>устье Микашевичского канала – дер. Балажевичи</b><br></br>
            Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>дер. Балажевичи – прк. Лучежевичский 1</b><br></br>
            Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>прк. Лучежевичский 1 – Пховский затон</b><br></br>
            Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>Пховский затон – затон Кимбровка</b><br></br>
            Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>затон Кимборовка – д. Конотоп</b><br></br>
            Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>д. Конотоп – прк. Усовский-1 (граница с Украиной)</b><br></br>
            Ссылка<br></br>
            </a></button>
     </div>
     <div><b className="name4">Микашевичский канал (устье Микашевичского канала - речной порт Микашевичи)</b></div>
         <div className="content125">
           <button className="btn123"><a>
           <b>устье Микашевичского канала – р.п. Микашевичи</b><br></br>
            Ссылка<br></br>
            </a></button>
     </div>
     <div><b className="name4">река Горынь (перекат Комора-2 - устье реки Горынь)</b></div>
         <div className="content125">
           <button className="btn123"><a>
           <b>перекат Комора-2 – устье реки Горынь</b><br></br>
            Ссылка<br></br>
            </a></button>
     </div>
     <div><b className="name4">река Западная Двина (деревня Сураж - Полоцкая гидроэлектростанция)</b></div>
         <div className="content123">
           <button className="btn123"><a>
           <b>деревня Сураж – д. Круподеры</b><br></br>
            Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>д. Круподеры – Витебская ГЭС</b><br></br>
            Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>Витебская ГЭС – Витебск (груз.) порт</b><br></br>
            Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>Витебск (груз.) порт – д. Слобода</b><br></br>
            Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>д. Слобода – г. Бешенковичи</b><br></br>
            Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>г. Бешенковичи – прк. Сосница</b><br></br>
            Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>прк. Сосница – Полоцкая гидроэлектростанция</b><br></br>
            Ссылка<br></br>
            </a></button>
     </div>
     <div><b className="name4">Туровский затон (г.Туров (вход в затон) - г.Туров (причал)</b></div>
         <div className="content125">
           <button className="btn123"><a>
           <b>г. Туров (вход в затон) – г. Туров (причал)</b><br></br>
            Ссылка<br></br>
            </a></button>
     </div>
     <div><b className="name4">Августовский канал (Граница с Республикой Польша - устье Августовского канала (слияние с рекой Неман)</b></div>
         <div className="content123">
           <button className="btn123"><a>
           <b>Граница с Республикой Польша –16 км Августовского канала </b><br></br>
            Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>16 км Августовского канала – устье Августовского канала (слияние с рекой Неман)</b><br></br>
            Ссылка<br></br>
            </a></button>
     </div>
     <div><b className="name4">река Свислочь (Минская кольцевая автомобильная дорога - переулок Канатный)</b></div>
         <div className="content123">
           <button className="btn123"><a>
           <b>МКАД – МГЭС (Водохранилище "Дрозды")</b><br></br>
            Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>МГЭС (в-ще "Дрозды") – ул.Орловская (ниж. гр. пляжа)</b><br></br>
            Ссылка<br></br>
            </a></button>
            <button className="btn123"><a>
           <b>ул.Орловская (ниж. гр. пляжа) – пер. Канатный</b><br></br>
            Ссылка<br></br>
            </a></button>
     </div>
</div>

)
}
}

export default Limit;