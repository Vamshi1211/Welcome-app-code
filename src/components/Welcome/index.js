// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true, text: 'Subscribe'}

  buttonClicked = () => {
    const {isSubscribe} = this.state
    if (isSubscribe === false) {
      this.setState(() => ({isSubscribe: true, text: 'Subscribe'}))
    } else {
      this.setState(() => ({isSubscribe: false, text: 'Subscribed'}))
    }
  }

  render() {
    const {text} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <div className="button-container">
          <button type="button" className="button" onClick={this.buttonClicked}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
