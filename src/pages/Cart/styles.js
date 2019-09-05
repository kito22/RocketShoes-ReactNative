import styled from 'styled-components/native';
import color from '../../styles/colors';

export const Container = styled.View`
  background: #fff;
  margin: 15px;
  border-radius: 4px;
  padding: 10px;
`;
export const ProductContainer = styled.View``;
export const Product = styled.View``;
export const ProductDetails = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;
export const ContainerText = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;
export const ProductTitle = styled.Text`
  color: #333;
`;
export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 18px;
  align-self: flex-start;
`;
export const ProductRemove = styled.TouchableOpacity``;
export const ProductAction = styled.View`
  background: #eee;
  margin: 10px;
  flex-direction: row;
  padding: 5px;
  align-items: center;
  justify-content: space-between;
`;
export const ViewActions = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ButtonRemoveAmount = styled.TouchableOpacity``;
export const TextAmount = styled.TextInput`
  min-width: 52px;
  text-align: center;
  padding: 5px;
  margin: 0 10px;
  background: #fff;
  border-radius: 4px;
  color: #000;
`;
export const ButtonAddAmount = styled.TouchableOpacity``;
export const SubTotal = styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin-right: 5px;
`;
export const TotalText = styled.Text`
  margin-top: 5px;
  color: #999;
  font-size: 16px;
  text-align: center;
`;
export const TotalPrice = styled.Text`
  font-weight: bold;
  font-size: 30px;
  text-align: center;
`;
export const ButtonConfirm = styled.View`
  background: ${color.primary};
  border-radius: 4px;
  margin: 10px 5px 0;
  padding: 12px;
`;
export const TextButtonConfirm = styled.Text`
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
`;

export const EmptyCart = styled.View`
  flex-direction: column;
  align-items: center;
  padding: 5px;
`;

export const EmptyCartText = styled.Text`
  text-align: center;
  font-size: 30px;
  margin-top: 5px;
`;
