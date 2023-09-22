// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onDecrement = balance => {
    this.setState(prevState => {
      console.log(prevState.amount)
      return {amount: prevState.amount - balance}
    })
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="contact-container">
            <div className="profile-pic">S</div>
            <p className="user-name">Sarah Williams</p>
          </div>
          <div className="amount-container">
            <p className="check-amount-title">Your Balance</p>
            <div className="amount-rupees-container">
              <p className="amount-title">{amount}</p>
              <p className="amount-title-rupees">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <p className="withdraw-title">Withdraw</p>
            <p className="choose-sum-title">CHOOSE SUM (IN RUPEES)</p>

            <ul className="amount-button-container">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  onDecrement={this.onDecrement}
                  denominationsListItems={eachItem}
                  key={eachItem.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
