import React from "react"
//import './Menu.css';
import Card from "./Card";

const weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=Minsk&lang=ru&units=metric&APPID=982aa7242b3357db5ad69bf590d59619";

class Weather extends React.Component {
  state = {
    days: []
  }

  componentDidMount = () => {
    fetch(weatherURL)
    .then(res => res.json())
    .then(data => {
      const dailyData = data.list.filter(reading => reading.dt_txt.includes("12:00:00"))
      this.setState({days: dailyData})
    })
  }

  formatCards = () => {
    return this.state.days.map((day, index) => <Card day={day} key={index}/>)
  }

  render() {
    return (
      <div className="item2">
      <h2 >Прогноз погоды на 5 дней</h2>
      <h5 >Minsk</h5>
        <div >
          {this.formatCards()}
        </div>
      </div>
    )
  }
}
export default Weather

