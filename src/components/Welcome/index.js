// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: false}

  buttonClicked = () => {
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  getText = () => {
    const {isSubscribe} = this.state
    return isSubscribe ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const text = this.getText()
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
