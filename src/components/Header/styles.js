import styled from 'styled-components/native';
import color from '../../styles/colors';

export const Wrapper = styled.SafeAreaView`
  background: ${color.dark};
  flex-direction: row;
`;

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const Logo = styled.Image`
  width: 185px;
  height: 24px;
`;

export const BasketContainer = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ItemCount = styled.Text`
  position: absolute;
  text-align: center;
  background: ${color.primary};
  min-height: 19px;
  min-width: 19px;
  border-radius: 9px;
  right: -8px;
  top: -8px;
  color: #fff;
  font-size: 12;
  padding: 2px;
  overflow: hidden;
`;
