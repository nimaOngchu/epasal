import React from 'react';
import { ProductConsumer } from '../../context';
import styled from 'styled-components';

export default function ButtonQuantity({ product }) {
  return (
    <ProductConsumer>
      {value => {
        const { incrementProductCount, decrementProductCount } = value;
        return (
          <div className="d-flex justify-content-center">
            <QuantityButton
              className ='increment-decrement-button'
              onClick={() => decrementProductCount(product.id)}>
              <i className="fas fa-minus icon-font" />
            </QuantityButton>
            <QuantityButton>{product.count}</QuantityButton>
            <QuantityButton
            className='increment-decrement-button'
              onClick={() => incrementProductCount(product.id)}>
              <i className="fas fa-plus icon-font" />
            </QuantityButton>
          </div>
        );
      }}
    </ProductConsumer>
  );
}
const QuantityButton = styled.button`
  margin-left: 0.3rem;
  border:1.5px solid var(--mainDark);
  border-radius: 4px;
  font-size:14px;
  &:focus{
outline:none;
  }
  .icon-font{
      font-size:10px;
  }

`;
