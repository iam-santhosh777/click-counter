// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {counter: 0}

  countChange = () => {
    this.setState(prevState => {
      console.log(`Previous state value ${prevState.counter}`)
      return {counter: prevState.counter + 1}
    })
  }

  render() {
    const {counter} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">
          The Button has been clicked{' '}
          <span className="counter-val">{counter}</span> times
        </h1>
        <p className="paragraph">Click the button to increase the count!</p>
        <button className="button" type="button" onClick={this.countChange}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
