import styled from 'styled-components/native';

export const Container = styled.View`
  height: 150px;
`;

export const ImageBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const ContentMain = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px 0; 
`;

export const ContentOrders = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: row;
  padding: 20px; 
`;

export const ImageHeader = styled.Image`
  height: 30px;
  width: 30px;
`;

export const IconHeader = styled.Image`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const Bag = styled.View`
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #ff1a53;
  border-radius: 20px;
`;

export const NewOrder = styled.View`
  height: 12px;
  width: 12px;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 6px;
  background: #ff0;
`;
