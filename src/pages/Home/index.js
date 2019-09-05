import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as ActionCart from '../../store/modules/cart/actions';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

import {
  Container,
  ProductList,
  ProductImage,
  ProductTitle,
  AddCartButton,
  ContainerButton,
  ProductPrice,
  AmountText,
  ButtonText,
  ContainerList,
} from './styles';

export default function Home() {
  const [products, setProduct] = useState([]);
  const amount = useSelector(state =>
    state.cart.reduce((amountSum, product) => {
      amountSum[product.id] = product.amount;
      return amountSum;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');
      const data = response.data.map(p => ({
        ...p,
        priceFormatted: formatPrice(p.price),
      }));
      setProduct(data);
    }
    loadProducts();
  }, []);

  return (
    <Container>
      <ProductList
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <ContainerList>
            <ProductImage source={{ uri: item.image }} resizeMode="cover" />
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPrice>{item.priceFormatted}</ProductPrice>
            <AddCartButton
              onPress={() => dispatch(ActionCart.addToCartRequest(item.id))}
            >
              <ContainerButton>
                <Icon name="add-shopping-cart" color="#fff" size={20} />
                <AmountText>{amount[item.id] || 0}</AmountText>
              </ContainerButton>
              <ButtonText>Adicionar</ButtonText>
            </AddCartButton>
          </ContainerList>
        )}
      />
    </Container>
  );
}
