import React from "react";
import './productStyle.css';

class Product extends React.Component {
  render() {
    return (
      <div className="cont" style={{ borderColor: this.props.color, borderWidth: '1px', borderStyle: 'solid' }}>
        <img src={this.props.pic} width={100} alt="product" />
        <p>Price: {this.props.price}</p>
      </div>
    );
  }
}

export default Product;
