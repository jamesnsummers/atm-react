import React, { Component } from 'react';

export default class Account extends Component {
  constructor(props){
    super(props)
          this.state = {
            balance: 0
          }
  }

  handleDepositClick(e) {
    // It is good practice to still prevent default behavior
    e.preventDefault()
    // set a local variable to the amount entered in the text box.
    let amount = parseInt(this.refs.amount.value, 10)
    // set a local variable to the new balance based off of the original balance + amount
    let newBalance = this.state.balance + amount;
    // set the balance to the newBalance using the setState method (necessary)
    this.setState({
      balance: newBalance
    })
    // empty out the text box in this component
    this.refs.amount.value = '';
  }

  handleWithdrawClick(e) {
    e.preventDefault()
    let amount = +this.refs.amount.value;
    let newBalance = this.state.balance - amount;
    if (newBalance < 0) {
      newBalance = 0
    }
    this.setState({
      balance: newBalance
    })
    this.refs.amount.value = '';
  }

  render() {
    // set the default class to `balance` for the balanceClass.
    let balanceClass = 'balance';
    // if the balance is 0, then add the class zero to balanceClass
    if (this.state.balance === 0) {
      balanceClass += ' zero';
    }
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref="amount" />
        <input type="button" value="Deposit" onClick={(e) => this.handleDepositClick(e)}/>
        <input type="button" value="Withdraw" onClick={(e) => this.handleWithdrawClick(e)}/>
      </div>
    )
  }
}
