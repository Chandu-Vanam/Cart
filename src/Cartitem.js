import React from 'react';

class CartItem extends React.Component {

  // increaseQuantity(){
  //   // console.log('this.state', this.state);
  //   this.setState({
  //     qty : this.state.qty+1
  //   });
  // }

  // decreaseQuantity(){
  //   const { qty } = this.state;

  //   if(qty==0)
  //   return;
  //   // this.setState ({
  //   //   qty: this.state.qty-1
  //   // });
  //   this.setState((prevState) => {
  //     return {
  //       qty : prevState.qty-1
  //     }
  //   });
  // }

  render () {
    console.log('this.props', this.props);
    const { price, title, qty } = this.props.product;
    const { product, onIncreaseQuantity ,onDecreaseQuantity, onDeleteProduct }= this.props;
    return (
      <div className="cart-item">
        { this.props.jsx }
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price} </div>
          <div style={ { color: '#777' } }>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img 
            alt="increase" 
            className="action-icons" 
            src="https://tse3.mm.bing.net/th?id=OIP.Es5ynla8quztUh7pQ9grAAHaHa&pid=Api&P=0"
            onClick={ () => onIncreaseQuantity(product) } 
            />
            <img alt="decrease" 
            className="action-icons" 
            src="https://tse1.mm.bing.net/th?id=OIP.8Vh_442i30VigdcNjYJr4QHaHY&pid=Api&P=0" 
            onClick={ () => onDecreaseQuantity(product) }
            />
            <img alt="delete" className="action-icons" src="https://tse1.mm.bing.net/th?id=OIP.BXpgGsCGLNi2cdVeW7o6zQHaIp&pid=Api&P=0" 
            onClick={ () => onDeleteProduct(product.id)}
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;