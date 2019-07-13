import styled from 'styled-components/native';

export const Container = styled.View`
  width: 90%;
  height: 130px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  
  background-color: #eee;
  border-radius: 10px;
`;

export const ProductImage = styled.Image`
  height: 100px;
  width: 100px;
  margin-right: 10px;

  border-radius: 5px;
`;

export const ProductInfo = styled.View`
  width: 60%;
  height: 100px;
`;

export const ProductTitle = styled.Text`
  font-size: 12px;
  font-weight: bold;
`;

export const ProductDescription = styled.Text`
  color: #444;
`;

export const ProductTime = styled.View`
  flex-direction: row;
  width: 200px;
  /* justify-content: space-around; */
`;

export const ProductTimeText = styled.Text`
  font-size: 10px;
`;