import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';

export default function Modal() {
      function showModal () {
        return(
            <div>
                Hello
       </div>)
     }

  return (
    <ProductConsumer>
      {value => {
        const { modalOpen, detailProduct, openModal, closeModal } = value;

              if (modalOpen) {
                  return (
                      <ModalContainer>
                          <div className="container">
                          <div className="row">
                              <div
                                  className="
                                  my-modal col-8 mx-auto col-md-6
                                  col-lg-4 text-capitalize text-center p-5">
                                      <h4 className='font-weight-bold'>Item added to the cart</h4>
                                      <img src={detailProduct.img} alt="" className="img-fluid" />
                                      <h4 className='text-title'>{detailProduct.title}</h4>
                                      <h5 className='text-title text-muted'>Price: <span>$</span>{detailProduct.price}</h5>
                                      <Link to ='/'>
                                      <ButtonContainer onClick ={ ()=>closeModal()}>
                                          keep shopping
                                      </ButtonContainer>
                                      </Link>
                                      <Link to ='/cart'>
                                      <ButtonContainer cart onClick ={ ()=>closeModal()}>
                                         go to cart
                                      </ButtonContainer>
                                      </Link >
                        </div>
                          </div>
                          </div>

                     </ModalContainer>
                  )

              } else {
                  return null
              }
      }}
    </ProductConsumer>
  );
}

const ModalContainer = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
left:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items :center;
justify-content:center;
.my-modal{
    background: var(--mainWhite);

}
`;
