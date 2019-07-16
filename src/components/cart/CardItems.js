import React from 'react';
import CardColumns from './CardColumns';
import styled from 'styled-components';
import ButtonQuantity from './ButtonQuantity';
import { ProductConsumer } from '../../context';

export default function CardItems({ cart }) {
  const image = (
    <img
      src={cart.img}
      alt="product"
      style={{ height: '5rem', width: '5rem' }}
    />
  );
  const nameOfProduct = (
    <>
      <span className="d-md-none">Product: </span>
      {cart.title}
    </>
  );
  const price = (
    <>
      <span className="d-lg-none d-md-none">price: </span>
      <span className="mr-1">$</span>
      {cart.price}
    </>
  );
  const quantity = <ButtonQuantity product={cart} />;
  const remove = (
    <ProductConsumer>
      {value => {
        const { removeItem } = value;
        return (
          <i
            style={{ color: 'var(--mainYellow)', cursor: 'pointer' }}
            className="fas fa-trash"
            onClick={() => removeItem(cart.id)}
          />
        );
      }}
    </ProductConsumer>
  );
  const total = (
    <>
      <span className="d-lg-none d-md-none">Item Total: </span> $ {cart.total}
    </>
  );
  let columnItems = [image, nameOfProduct, price, quantity, remove, total];

  return <CardColumns columnItems={columnItems} />;
}
