// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {heads: 0, tails: 0, isHeds: true}
  changeRandomValue = () => {
    const tossResult = Math.floor(Math.random() * 2)
    const randomResult = tossResult === 0 ? true : false
    this.setState({isHeds: randomResult})
    if (randomResult === true) {
      this.setState(prevState => ({heads: prevState.heads + 1}))
    } else {
      this.setState(prevState => ({tails: prevState.tails + 1}))
    }
  }
  render() {
    const {heads, tails, isHeds} = this.state

    const imgShown = isHeds
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="background-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={imgShown} alt="toss result" className="image-toss-result" />
          <button
            className="buttn"
            type="button"
            onClick={this.changeRandomValue}
          >
            Toss Coin
          </button>
          <div className="list-count">
            <p>Total: {heads + tails}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
