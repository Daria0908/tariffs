import { Component } from "react";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  handleChange = () => {
    this.setState({
      selected: !this.state.selected,
    });
  };
  render() {
    const { name, price, speed, color } = this.props;
    const { selected } = this.state;

    return (
      <div onClick={this.handleChange} className={"card " + `${color} ` + (selected ? "selected" : "")}>
        <div className="cardHeader">{name}</div>
        <div className="price">
          руб
          <div className="currentPrices">{price}/мес</div>
        </div>
        <div className="speed">До {speed} Мбит/сек</div>
        <div className="text">Объём включенного трафика не ограничен</div>
      </div>
    );
  }
}
