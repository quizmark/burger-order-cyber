import React, { Component } from "react";
import { connect } from "react-redux";
import './burger.css'

class Burger extends Component {

  renderBurgerMid = () => {
     let {amount} = this.props;
     return Object.entries(amount).map(([propsBurger, value], index) => {
      let burgerMid = [];
      for(let i=0;i<value;i++) {
        burgerMid.push(<div key={i} className={propsBurger}></div>)
      }
      return burgerMid;
     }) 
  }

  renderMenu = () => {
    let {menu, amount} = this.props;
    return Object.entries(menu).map(([propsBurger, value], index) => {
      return (
        <tr key={index}>
          <td>{propsBurger}</td>
          <td>
              <button onClick={() => {this.props.addBreadMid(propsBurger, 1)}} className="btn btn-success">+</button> 
              {amount[propsBurger]}
              <button onClick={() => {this.props.addBreadMid(propsBurger, -1)}} className="btn btn-danger">-</button>
          </td>
          <td>{value*amount[propsBurger]}</td>
          <td></td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div className="container">
        <h3 className="display-4 text-success">Burger Order Cyber</h3>
        <div className="row">
          <div className="col-7">
            <h3 className="text-center text-danger">Your Burger</h3>
            <div className="burgerTop"></div>
             {this.renderBurgerMid()} 
            <div className="burgerBottom"></div>
          </div>
          <div className="col-5">
            <h3 className="text-center text-success">Order burger</h3>
            <table className="table">
            <thead>
              <tr>
                <th>Menu</th>
                <th>Amount</th>
                <th>Price</th>
              </tr>
              {this.renderMenu()}
              </thead>
              <tfoot>
                <tr>
                  <td></td>
                  <td>Total</td>
                  <td>{this.props.total}</td>
                </tr>
                {/* <tr>
                  <td></td>
                  <td><button onClick={this.props.resetBurger()} className="btn btn-danger">Reset</button></td>
                  <td><button onClick={this.props.buyBurger()} className="btn btn-success">Buy</button></td>
                </tr> */}
              </tfoot>
          </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    amount:state.BurgerReducer.amount,
    menu: state.BurgerReducer.menu,
    total: state.BurgerReducer.total
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addBreadMid: (propsBurger, amount) => {
      const action = {
        type: 'ADD_BREADMID',
        propsBurger,
        amount
      }
      dispatch(action);
    },
    // resetBurger: () => {
    //   const action = {
    //     type: 'RESET_BURGER'
    //   }
    //   dispatch(action);
    // },
    // buyBurger: () => {
    //   const action = {
    //     type: 'BUY_BURGER'
    //   }
    //   dispatch(action);
    // }
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Burger);
