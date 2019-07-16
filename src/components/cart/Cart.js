import React, { Component } from 'react';
import Title from '../Title';
import CardColumns from './CardColumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';
import CardItems from './CardItems';
import { ButtonContainer } from '../Button';
import ClearCart from './ClearCart';

const columnsTitles = [
  'products',
  'name of product',
  'price',
  'quantity',
  'remove',
  'total'
];
export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <>
                  <Title name="your" title="cart" />
                  <CardColumns columnItems={columnsTitles} title={true} />
                  {cart.map(item => {
                    return <CardItems key={item.id} cart={item} />;
                  })}
                      <ClearCart value={value}/>
                </>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
