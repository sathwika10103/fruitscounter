// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {banana: 0, mango: 0}

  banana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  mango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  render() {
    const {banana, mango} = this.state
    return (
      <div>
        <h1>
          Bob ate {mango} mangoes {banana} bananas
        </h1>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
            alt="mango"
          />
          <button type="button" onClick={this.mango}>
            Eat Mango
          </button>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
            alt="banana"
          />
          <button type="button" onClick={this.banana}>
            Eat Banana
          </button>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
