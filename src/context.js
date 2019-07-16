import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  };
  componentDidMount() {
    this.setProducts();
  }
  incrementProductCount = id => {
    let tempProducts = [...this.state.cart];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.count = product.count + 1;
    product.total = product.price * product.count;
    this.setState(
      () => {
        return { cart: tempProducts };
      },
      () => this.addTotal()
    );
  };
  decrementProductCount = id => {
    let tempProducts = [...this.state.cart];

    const index = tempProducts.indexOf(this.getItem(id));
    const productinCart = tempProducts[index];
    const productInState = this.state.products[index];

    if (productinCart.count === 1) {
      if (index > -1) {
        tempProducts.splice(index, 1);
        productInState.inCart = false;
      }
    } else {
      productinCart.count = productinCart.count - 1;
    }

    productinCart.total = productinCart.price * productinCart.count;
    this.setState(
      () => {
        return { cart: tempProducts };
      },
      () => this.addTotal()
    );
  };
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };
  getItem = id => {
    return this.state.products.find(item => {
      return item.id === id;
    });
  };
  openModal = () => {
    this.setState({ modalOpen: true });
  };
  closeModal = () => {
    this.setState({ modalOpen: false });
  };
  handleDetail = product => {
    this.setState({ detailProduct: product });
  };
  addTotal = () => {
    let subTotal = 0;
    this.state.cart.map(item => {
      subTotal = subTotal + item.total;
      const tempTax = subTotal * 0.1;
      const tax = parseFloat(tempTax.toFixed(2));
      const total = subTotal + tax;
      this.setState(() => {
        return { cartSubTotal: subTotal, cartTax: tax, cartTotal: total };
      });
    });
  };
  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => this.setProducts()
    );
  };
  removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id);
    let indexOfItemToRemove = tempProducts.indexOf(this.getItem(id));
    let itemToRemove = tempProducts[indexOfItemToRemove];

    itemToRemove.count = 0;
    itemToRemove.total = 0;
    itemToRemove.inCart = false;
    this.setState(
      {
        product: tempProducts,
        cart: tempCart
      },
      () => this.addTotal()
    );
  };
  addToCart = id => {
    let tempProduts = [...this.state.products];
    const index = tempProduts.indexOf(this.getItem(id));
    const product = tempProduts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price * product.count;
    this.setState(
      () => {
        return {
          product: tempProduts,
          cart: [...this.state.cart, product]
        };
      },
      () => this.addTotal()
    );

    // product.inCart = true;
    // product.total = product.price;
    // product.count = 1;
    // this.setState(() => {
    //     return{cart:[...this.state.cart,product]}
    // })
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          incrementProductCount: this.incrementProductCount,
          decrementProductCount: this.decrementProductCount,
          clearCart: this.clearCart,
          removeItem: this.removeItem
        }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
