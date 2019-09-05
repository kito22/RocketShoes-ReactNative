import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { darken, lighten } from 'polished';
import color from '../../styles/colors';

export const Container = styled.SafeAreaView`
  background: ${lighten(0.1, color.dark)};
  margin: 15px;
  border-radius: 4px;
`;

export const ProductList = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const ContainerList = styled.View`
  background-color: #fff;
  width: 220px;
  height: 360px;
  margin: 10px;
  border-radius: 4px;
`;

export const ProductImage = styled.Image`
  align-self: center;
  margin-top: 5px;
  width: 200px;
  height: 200px;
`;
export const ProductTitle = styled.Text`
  color: #333;
  font-size: 16px;
  text-align: justify;
  margin: 5px 10px;
  font-family: Roboto;
`;
export const ProductPrice = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin-left: 10px;
`;
export const AddCartButton = styled(RectButton)`
  margin: auto 10px 10px 10px;
  align-self: center;
  flex-direction: row;
  background-color: ${color.primary};
  width: auto;
  height: 42px;
  border-radius: 4px;
`;
export const ContainerButton = styled.View`
  flex-direction: row;
  background: ${darken(0.1, color.primary)};
  padding: 8px;
  align-items: center;
  border-radius: 4px;
  overflow: hidden;
`;
export const Logo = styled.Image`
  align-self: center;
`;
export const AmountText = styled.Text`
  color: #fff;
  margin-left: 2px;
`;
export const ButtonText = styled.Text`
  flex: 1;
  color: #fff;
  text-align: center;
  align-self: center;
  font-weight: bold;
  font-size: 16px;
`;
