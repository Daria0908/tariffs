import "./App.scss";
import data from "./data";

function App() {
  return (
    <div className="App">
      <div className="cards">
        {data.map((card) => (
          <div className={"card " + `${card.color} ` + (card.isSelected ? "selected" : "")}>
            <h2 className="cardHeader">{card.name}</h2>
            <p className="price">
              <div>руб</div>
              <div className="currentPrices">{card.price}/мес</div>
            </p>
            <p className="speed">До {card.speed} Мбит/сек</p>
            <p className="text">Объем включенного трафика не ограничен</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
