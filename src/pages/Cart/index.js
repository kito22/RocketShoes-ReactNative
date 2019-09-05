import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as ActionsCart from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';
import color from '../../styles/colors';
import {
  Container,
  ProductContainer,
  ProductDetails,
  ProductImage,
  ContainerText,
  ProductTitle,
  ProductPrice,
  ProductRemove,
  ProductAction,
  ViewActions,
  ButtonRemoveAmount,
  TextAmount,
  ButtonAddAmount,
  SubTotal,
  TotalText,
  TotalPrice,
  TextButtonConfirm,
  ButtonConfirm,
  EmptyCart,
  EmptyCartText,
  Product,
} from './styles';

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subTotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(ActionsCart.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(ActionsCart.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      {cart.length ? (
        <>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Product>
              {cart.map(product => (
                <ProductContainer key={product.id}>
                  <ProductDetails>
                    <ProductImage
                      source={{
                        uri: product.image,
                      }}
                    />
                    <ContainerText>
                      <ProductTitle>{product.title}</ProductTitle>
                      <ProductPrice>{product.priceFormatted}</ProductPrice>
                    </ContainerText>
                    <ProductRemove
                      onPress={() =>
                        dispatch(ActionsCart.removeFromCart(product.id))
                      }
                    >
                      <Icon
                        name="delete-forever"
                        color={color.primary}
                        size={24}
                      />
                    </ProductRemove>
                  </ProductDetails>
                  <ProductAction>
                    <ViewActions>
                      <ButtonRemoveAmount onPress={() => decrement(product)}>
                        <Icon
                          name="remove-circle-outline"
                          color={color.primary}
                          size={24}
                        />
                      </ButtonRemoveAmount>
                      <TextAmount value={String(product.amount)} readonly />
                      <ButtonAddAmount onPress={() => increment(product)}>
                        <Icon
                          name="add-circle-outline"
                          color={color.primary}
                          size={24}
                        />
                      </ButtonAddAmount>
                    </ViewActions>
                    <SubTotal>{product.subTotal}</SubTotal>
                  </ProductAction>
                </ProductContainer>
              ))}
            </Product>
            <TotalText> Total</TotalText>
            <TotalPrice>{total}</TotalPrice>
            <ButtonConfirm>
              <TextButtonConfirm>Finalizar Pedido</TextButtonConfirm>
            </ButtonConfirm>
          </ScrollView>
        </>
      ) : (
        <EmptyCart>
          <Icon name="remove-shopping-cart" color="#999" size={40} />
          <EmptyCartText>Seu carrinho está vazio.</EmptyCartText>
        </EmptyCart>
      )}
    </Container>
  );
}
